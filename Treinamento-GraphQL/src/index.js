const { ApolloServer } = require('apollo-server');
const graphql = require('@treinamento/treinamento-graphql/src/graphql');
const ContactsRegisterService = require('@treinamento/treinamento-graphql/src/services/ContactsRegisterService');
const UserRegisterService = require('@treinamento/treinamento-graphql/src/services/UserRegisterService');
const TaskRegisterService = require('@treinamento/treinamento-graphql/src/services/TaskRegisterService');
const GitHubService = require('@treinamento/treinamento-graphql/src/services/GitHubService');

const server = new ApolloServer({
    ...graphql,
    formatError: (error) => {
        return new Error(error.message);
    },
    dataSources: () => {
        return {
            gitHubService: GitHubService,
            contactsRegisterService: ContactsRegisterService,
            userRegisterService: UserRegisterService,
            taskRegisterService: TaskRegisterService,
        };
    },
    // context: () => ({
    //     contactsRegisterService: ContactsRegisterService,
    //     userRegisterService: UserRegisterService,
    // }),
});

server.listen().then(({ url }) => console.log('[connected] at', url));
