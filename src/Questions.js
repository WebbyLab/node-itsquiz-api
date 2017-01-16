const Base = require('./Base');

class QuestionsAPI extends Base {
    list(params = {}) {
        return this.apiClient.get('questions', {}, params).then(data => data.data);
    }

    create(question = {}) {
        if (question.quizId) {
            const quizId = question.quizId;

            return this.apiClient.post('questions', { data: question }).then((currentQuestion) => {
                const questions = {
                    questions: [ currentQuestion.id ]
                };

                return this.apiClient.put(`quizzes/${quizId}/attachquestions`, { data: questions });
            });
        }

        return this.apiClient.post('questions', { data: question });
    }

    update(question = {}) {
        return this.apiClient.put(`questions/${question.id}`, { data: question });
    }

    remove(questionId) {
        return this.apiClient.delete(`questions/${questionId}`);
    }

    uploadPicture(formData) {
        return this.apiClient.post('/questions/picture', formData);
    }

    uploadAudio(formData) {
        return this.apiClient.post('/questions/audio', formData);
    }
}

module.exports = QuestionsAPI;
