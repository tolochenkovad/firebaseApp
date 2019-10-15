import axios from 'axios';
import {baseAPIUrl} from "./config";

export const BASE_API_URL = `${baseAPIUrl}api/v1/`;
// need API

export const api = axios.create({
    baseURL: BASE_API_URL,
    validateStatus: status => status >= 200 && status < 300,
});

const request = (method, path, params, data, responseType) => {

    const headers = {};

    return api( {
        method,
        headers,
        data,
        responseType,
        url: path,
        params: params,
        baseURL: BASE_API_URL,
    })
        .then(response => response.data !== undefined ? response.data : response)
        .catch(err => new Promise((resolve, reject) => {
            if (err.response && err.response.data) {
                const error = err.response.data;
                if (typeof error !== 'string') {
                    error.status = err.response.status;
                }
                return reject(error);
            } else if (err.request && err.request.data) {
                return reject(err.request);
            }
        }));
};

export const post = (path, params, data, responseType) => {
    return request('post', path, params, data, responseType);
};

export const get = (path, params, responseType) => {
    return request('get', path, params, {}, responseType);
};

export const put = (path, params, data) => {
    return request('put', path, params, data);
};

export const remove = (path, params, data) => {
    return request('delete', path, params, data);
};
