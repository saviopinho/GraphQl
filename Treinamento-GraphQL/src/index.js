const { ApolloServer } = require('apollo-server');
const graphql = require('@treinamento/treinamento-graphql/src/graphql');
const UserRegisterService = require('@treinamento/treinamento-graphql/src/services/UserRegisterService');
const TaskRegisterService = require('@treinamento/treinamento-graphql/src/services/TaskRegisterService');
const GitHubService = require('@treinamento/treinamento-graphql/src/services/GitHubService');
const generator = require('./helpers/generator');

const server = new ApolloServer({
    ...graphql,
    formatError: (error) => {
        return new Error(error.message);
    },
    dataSources: () => {
        return {
            gitHubService: GitHubService,
            userRegisterService: UserRegisterService,
            taskRegisterService: TaskRegisterService,
        };
    },
    context: ({ req }) => {
        const token = req.headers.authorization;

        return {
            validate() {
                try {
                    const { id } = generator.verifyToken(token);

                    return id;
                } catch (error) {
                    throw new Error('Youre not authenticated.');
                }
            },
        };
    },
});

server.listen().then(({ url }) => console.log('[connected] at', url));
