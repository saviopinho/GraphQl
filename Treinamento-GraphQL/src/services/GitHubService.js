const { RESTDataSource } = require('apollo-datasource-rest');

class GitHubService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com';
    }

    async getUser(login) {
        try {
            return await this.get(`/users/${login}`);
        } catch (error) {
            console.log(error.extensions);
            if (error.extensions.response.status == 404)
                throw new Error('Authentication failed');
        }
    }
}

module.exports = new GitHubService();
