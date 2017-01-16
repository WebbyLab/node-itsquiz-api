const Base = require('./Base');

class QuizzesAPI extends Base {
    list(params) {
        return this.apiClient.get('/quizzes', {}, params).then(data => data.data);
    }

    show(quizId) {
        return this.apiClient.get(`/quizzes/${quizId}`).then(data => data.data);
    }

    getTagsDistribution(quizId) {
        return this.apiClient.get(`/quizzes/${quizId}/tags`).then(data => data.data);
    }

    create(quiz = {}) {
        return this.apiClient.post('/quizzes', { data: quiz });
    }

    update(quiz = {}) {
        return this.apiClient.put(`/quizzes/${quiz.id}`, { data: quiz });
    }

    uploadQuizPicture(formData) {
        return this.apiClient.post('/quizzes/picture', formData);
    }

    remove(quizId) {
        return this.apiClient.delete(`/quizzes/${quizId}`);
    }

    attach(quizId, questions) {
        const payload = { data: { questions } };

        return this.apiClient.put(`/quizzes/${quizId}/attachquestions`, payload);
    }

    dettach(quizId, questions) {
        return this.apiClient.put(`/quizzes/${quizId}/dettachquestions`, { data: { questions } });
    }
}

module.exports = QuizzesAPI;
