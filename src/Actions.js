const Base = require('./Base');

class ActionsAPI extends Base {
    run(actionId, payload = {}) {
        return this.apiClient.post(`actions/${actionId}`, { data: payload });
    }

    restorePassword(params) {
        /*eslint-disable */
        const payload = {
            data: {
                password: params.password,
                confirm_password: params.confirm
            }
        };
        /*eslint-enable */

        return this.apiClient.post(`/actions/${params.actionId}`, payload);
    }

    showActivation(actionId) {
        return this.apiClient.get(`actions/${actionId}`).then(data => data);
    }
}

module.exports = ActionsAPI;
