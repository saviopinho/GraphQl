module.exports = {
    User: {
        tasks(user, { dataSources }) {
            const { taskRegisterService } = dataSources;

            return taskRegisterService.getTasks(user);
        },
    },
    Query: {
        async findOrCreateUser(_, { login }, { dataSources }) {
            const { gitHubService, userRegisterService } = dataSources;
            const found_user = await userRegisterService.getUserByLogin(login);

            if (found_user) return found_user;

            const { login: login_git, avatar_url } =
                await gitHubService.getUser(login);

            return await userRegisterService.addUser({
                login: login_git,
                avatar_url,
            });
        },
    },
};
