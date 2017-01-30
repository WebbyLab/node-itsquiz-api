const Base = require('../Base');

class QuizwalActivationsAPI extends Base {
    list(params) {
        return this.apiClient.get('quizwall/activations', {}, params);
    }

    show(id, params) {
        return this.apiClient.get(`quizwall/activations/${id}`, {}, params);
    }
}

module.exports = QuizwalActivationsAPI;
