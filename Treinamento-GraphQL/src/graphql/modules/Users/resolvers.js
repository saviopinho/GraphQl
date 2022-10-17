const generator = require('../../../helpers/generator');

module.exports = {
    User: {
        tasks({ id }, _, { dataSources }) {
            const { taskRegisterService } = dataSources;

            return taskRegisterService.getTasks(id);
        },
    },
    Query: {
        async findOrCreateUser(_, { login }, { dataSources }) {
            const { gitHubService, userRegisterService } = dataSources;
            const found_user = await userRegisterService.getUserByLogin(login);

            if (found_user) {
                found_user.token = generator.createToken(found_user.id);

                return found_user;
            }

            const { login: login_git, avatar_url } =
                await gitHubService.getUser(login);

            const new_user = await userRegisterService.addUser({
                login: login_git,
                avatar_url,
            });

            new_user.token = generator.createToken(found_user.id);

            return new_user;
        },
    },
};
