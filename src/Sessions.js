const Base = require('./Base');

class SessionsAPI extends Base {
    create(params = {}) {
        const payload = { 'sessions': [ {
            login: params.login,
            password: params.password
        } ] };

        if (params.actionId) {
            payload.actionId = params.actionId;
        }

        return this.apiClient.post('/sessions', payload).then(data => {
            this.apiClient.setAuthToken(data.sessions[0].jwt);
            return data.sessions;
        });
    }

    switchAccount(params = {}) {
        const payload = {
            id: params.id,
            stopImpersonating: params.stopImpersonating
        };

        return this.apiClient.put('/sessions', payload).then(data => {
            this.apiClient.setAuthToken(data.sessions[0].jwt);
            return data.sessions;
        });
    }

    remove() {
        this.apiClient.setAuthToken('');
        return Promise.resolve();
    }

    impersonateAccount(params = {}) {
        const payload = {
            targetAccountId: params.targetAccountId,
            organizationId: params.organizationId
        };

        return this.apiClient.put('/sessions/impersonate', payload).then(data => {
            this.apiClient.setAuthToken(data.sessions[0].jwt);
            return data.sessions;
        });
    }
}

module.exports = SessionsAPI;
