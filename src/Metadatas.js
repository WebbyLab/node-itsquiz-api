const Base = require('./Base');

class MetadatasAPI extends Base {
    create(payload) {
        return this.apiClient.post('metadatas', { data: payload }).then(data => data);
    }
}

module.exports = MetadatasAPI;
