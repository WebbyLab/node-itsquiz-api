const Base = require('./Base');

class MetadatasAPI extends Base {
    use(code) {
        return this.apiClient.patch(`promocodes/${code}`, {}).then(data => data);
    }
}

module.exports = MetadatasAPI;
