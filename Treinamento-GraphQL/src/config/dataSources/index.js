const GitHubService = require('../../services/GitHubService');
const TaskRegisterService = require('../../services/TaskRegisterService');
const UserRegisterService = require('../../services/UserRegisterService');

module.exports = {
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    taskRegisterService: TaskRegisterService,
};
