const Base = require('./Base');

class AccountsAPI extends Base {
    list(params) {
        return this.apiClient.get('/accounts', {}, params).then(data => data.accounts);
    }

    show(accountId) {
        return this.apiClient.get(`/accounts/${accountId}`).then(data => {
            this.apiClient.setAuthToken(data.jwt);
            return data;
        });
    }

    create(params = {}, lang = 'ru') {
        const payload = {
            data: {
                email: params.email,
                password: params.password
            },
            ref: params.ref,
            lang: lang.toUpperCase()
        };

        if (params.actionId) {
            payload.actionId = params.actionId;
        }

        return this.apiClient.post('/accounts', payload);
    }

    createForMessenger(params = {}) {
        const payload = {
            data: params
        };

        return this.apiClient.post('/accounts/for_messenger', payload);
    }

    // createFake(lang = 'ru', recaptchaResponse) {
    //     const params = {
    //         key: config.fakeAccountKey,
    //         recaptchaResponse
    //     };
    //
    //     const payload = {
    //         lang: lang.toUpperCase()
    //     };
    //
    //     return this.apiClient.post('/accounts/fake', payload, params);
    // }

    update(data = {}) {
        return this.apiClient.put('/accounts/update', { data });
    }

    updateStatusMessage(statusMessage) {
        const data = { statusMessage };

        return this.apiClient.put('/accounts/update/statusmessage', { data });
    }

    updateAccountType(type) {
        const data = { type };

        return this.apiClient.put('/accounts/account', { data });
    }

    uploadPhoto(formData) {
        return this.apiClient.post('/accounts/update', formData);
    }

    uploadBackground(formData) {
        return this.apiClient.post('/accounts/updateBackground', formData);
    }

    confirm(actionId) {
        return this.apiClient.post(`/actions/${actionId}`);
    }

    changePassword(params = {}) {
        const payload = {
            data: {
                email: params.email
            }
        };

        return this.apiClient.post('/accounts/resetpassword', payload);
    }

    remove(account = {}) {
        return this.apiClient.delete(`/accounts/${account.id}`);
    }
}

module.exports = AccountsAPI;
