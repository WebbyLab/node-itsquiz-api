const fetch       = require('isomorphic-fetch');
const queryString = require('query-string');

class ApiClient {
    constructor({ prefix = 'api/v1', isVerbose = false } = {}) {
        this.prefix    = prefix;
        this.isVerbose = isVerbose;
        this.XRealIP   = null;
        this.onError   = null;
        this.authToken = null;
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params
        });
    }

    put(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload,
            params
        });
    }

    patch(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload,
            params
        });
    }

    post(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload,
            params
        });
    }

    postExcel(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload,
            params,
            headers: { 'Content-Type' : 'application/vnd.ms-excel' }
        });
    }

    postFormData(requestUrl, formData) {
        return this.request({
            url: requestUrl,
            type: 'POST',
            body: formData,
            cache: false,
            contentType: false,
            processData: false
        });
    }

    delete(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'delete',
            body: payload,
            params
        });
    }


    request({ url, method, params = {}, body }) {
        if (this.authToken) {
            /* eslint-disable */
            params.token = this.authToken;
            /* eslint-enable */
        }

        const fullUrlWithQuery = `${this.prefix}/${url}?${queryString.stringify(params)}`;

        const fetchOptions = {
            method,
            headers: {
                'Accept'       : 'application/json',
                'Content-Type' : 'application/json',
                'x-real-ip'    : this.XRealIP
            }
        };

        if (method !== 'get' && method !== 'head') {
            fetchOptions.body = JSON.stringify(body);
        }

        if (this.isVerbose) {
            console.log('-------------------------------------------');
            console.log(
                `${fetchOptions.method.toUpperCase()} ${fullUrlWithQuery}]`,
                JSON.stringify(fetchOptions)
            );
            console.log('-------------------------------------------');
        }

        return fetch(fullUrlWithQuery, fetchOptions).then(res => {
            if (res.status >= 400) {
                throw new Error('Bad response from server');
            }

            return res.json();
        }).then(data => {
            if (data && data.status === 1) {
                return data;
            }

            if (this.onError) {
                this.onError(data.error);
            }

            return Promise.reject(data.error);
        });
    }


    setAuthToken(authToken) {
        this.authToken = authToken;
    }

    setErrorHandler(handler) {
        this.onError = handler;
    }

    setXRealIP(XRealIP) {
        this.XRealIP = XRealIP;
    }
}

module.exports = ApiClient;
