module.exports = {
    Query: {
        async tasks(_, __, { dataSources, user_id }) {
            const { taskRegisterService } = dataSources;

            return await taskRegisterService.getTasks(user_id);
        },
    },
    Mutation: {
        async createTask(_, { data }, { dataSources, user_id }) {
            const { taskRegisterService } = dataSources;

            return await taskRegisterService.addTask(user_id, data);
        },
    },
};
