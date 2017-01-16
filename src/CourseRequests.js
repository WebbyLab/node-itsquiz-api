const Base = require('./Base');

class CourseRequestsAPI extends Base {
    create(request = {}) {
        return this.apiClient.post('/courserequests', { data: request });
    }
}

module.exports = CourseRequestsAPI;
