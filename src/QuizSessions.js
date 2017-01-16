const Base = require('./Base');

class ActivationsAPI extends Base {
    create(actionId) {
        return this.apiClient.post(`actions/${actionId}`);
    }

    list(params = {}) {
        return this.apiClient.get('quizsessions/', {}, params).then(data => {
            return data;
        });
    }

    show(quizSessionId) {
        const params = {
            include: 'activations,accounts'
        };

        return this.apiClient.get(`/quizsessions/${quizSessionId}`, {}, params).then(data => {
            return data;
        });
    }

    getQuestions(quizSessionId) {
        return this.apiClient.get(`/quizsessions/${quizSessionId}/questions`, {}, {}).then(data => {
            return data;
        });
    }

    start(quizSessionId) {
        const data = {
            status: 'STARTED'
        };

        return this.apiClient.patch(`/quizsessions/${quizSessionId}`, { data });
    }

    delete(quizSessionId) {
        return this.apiClient.delete(`/quizsessions/${quizSessionId}`);
    }

    update(quizSessionId, payload) {
        return this.apiClient.put(`/quizsessions/${quizSessionId}`, { data: payload }).then(data => {
            return data;
        });
    }

    createEvents(quizSessionId, payload) {
        return this.apiClient.post(`/quizsessions/${quizSessionId}/events`, { data: payload }).then(data => {
            return data;
        });
    }

    listEvents(quizSessionId) {
        return this.apiClient.get(`/quizsessions/${quizSessionId}/events`).then(data => {
            return data;
        });
    }
}

module.exports = ActivationsAPI;
