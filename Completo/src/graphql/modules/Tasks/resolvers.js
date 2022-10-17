module.exports = {
    Query: {
        async tasks(_, __, { dataSources, validate }) {
            const { taskRegisterService } = dataSources;
            const user_id = validate();

            return await taskRegisterService.getTasks(user_id);
        },
        async task(_, { id }, { dataSources, validate }) {
            const { taskRegisterService } = dataSources;
            const user_id = validate();

            return await taskRegisterService.getTasksById(user_id, id);
        },
    },
    Mutation: {
        async createTask(_, { data }, { dataSources, validate }) {
            const { taskRegisterService } = dataSources;
            const user_id = validate();

            return await taskRegisterService.addTask(user_id, data);
        },
    },
};
