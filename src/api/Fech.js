// import React from 'react';

// const Fech = () => {


class Fech {
    getProjectAll(url, cb, catcherr = null, finallycb = null) {
        fetch(url)
            .then(res => res.json())
            .then(data => cb(data))
            .catch(err => catcherr && catcherr(err))
            .finally((res) => finallycb && finallycb(res))
    }
    postProject(url, optionalObj, cb, catcherr = null, finallycb = null) {
        fetch(url, { method: 'POST', ...optionalObj })
            .then(res => res.json())
            .then(data => cb(data))
            .catch(err => catcherr && catcherr(err))
            .finally((res) => finallycb && finallycb(res))
    }
    updateProject(url, optionalObj, cb, catcherr = null, finallycb = null) {
        fetch(url, { method: 'PUT', ...optionalObj })
            .then(res => res.json())
            .then(data => cb(data))
            .catch(err => catcherr && catcherr(err))
            .finally((res) => finallycb && finallycb(res))
    }
    rmProject(url, optionalObj = null, cb, catcherr = null, finallycb = null) {
        fetch(url, { method: 'DELETE', ...optionalObj })
            .then(res => res.json())
            .then(data => cb(data))
            .catch(err => catcherr && catcherr(err))
            .finally((res) => finallycb && finallycb(res))
    }
}

const apiFech = new Fech()
export default apiFech