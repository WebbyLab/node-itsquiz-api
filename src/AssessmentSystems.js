const Base = require('./Base');

class AssessmentSystemsAPI extends Base {
    create(payload) {
        return this.apiClient.post('assessmentsystems', { data: payload }).then(data => data);
    }

    list(params = {}) {
        return this.apiClient.get('assessmentsystems', {}, params).then(data => data.data);
    }

    show(systemId) {
        return this.apiClient.get(`/assessmentsystems/${systemId}`).then(data => data.data);
    }

    update(system) {
        return this.apiClient.put(`assessmentsystems/${system.id}`, { data: system });
    }

    remove(systemId) {
        return this.apiClient.delete(`/assessmentsystems/${systemId}`);
    }
}

module.exports = AssessmentSystemsAPI;
