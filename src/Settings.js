const Base = require('./Base');

class SettingsAPI extends Base {
    list() {
        return this.apiClient.get('/accounts/settings').then(data => data);
    }

    update(params = {}) {
        return this.apiClient.put('/accounts/settings', { data: params }).then(data => data);
    }
}

module.exports = SettingsAPI;
