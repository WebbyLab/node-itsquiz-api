const Base = require('./Base');

class OrganizationsAPI extends Base {
    list(params = {}) {
        return this.apiClient.get('orgs', {}, params).then(data => data);
    }
}

module.exports = OrganizationsAPI;
