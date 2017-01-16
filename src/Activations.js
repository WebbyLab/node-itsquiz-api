const Base = require('./Base');

class ActivationsAPI extends Base {
    create(activationInfo = {}) {
        return this.apiClient.post('activations', { data: activationInfo });
    }

    list(params = {}) {
        return this.apiClient.get('activations', {}, params).then(data => data.data);
    }

    updateStatus(activationId, status) {
        return this.apiClient.patch(`activations/${activationId}/status`, { data: { status } });
    }

    updateShareStatus(activationId, params) {
        return this.apiClient.put(`/activations/${activationId}/sharingstatus`, params);
    }

    update(activation = {}) {
        return this.apiClient.patch(`activations/${activation.id}`, { data: activation });
    }

    publish(activation = {}) {
        return this.apiClient.put(`activations/${activation.id}/publish`, { data: activation });
    }

    unpublish(activationId) {
        return this.apiClient.put(`activations/${activationId}/unpublish`);
    }

    addParticipants(activationId, emails) {
        return this.apiClient.patch(`activations/${activationId}/addparticipants`, { data: { emails } });
    }

    report(activationId, params) {
        return this.apiClient.get(`activations/${activationId}/reports/assignees`, {}, params);
    }

    downloadReport(activationId) {
        window.location = `${APP_CONFIG.apiPrefix}/activations/${activationId}/reports/assignees/download?token=${
            this.apiClient.authToken}`;
    }

    delete(activationId) {
        return this.apiClient.delete(`activations/${activationId}`, {}, {});
    }

    getTagsDistribution(activationId) {
        return this.apiClient.get(`/activations/${activationId}/tags`).then(data => data.data);
    }
}

module.exports = ActivationsAPI;
