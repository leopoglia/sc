const url = "https://sensoc.vercel.app/api/"


const Services = {
    saveNew: function (data) {

        const now = new Date();

        data.date = now.toISOString();

        return new Promise((resolve, reject) => {
            fetch((url + "news"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            }).then(function (result) {
                return result.json();
            }).then(resolve).catch(resolve)
        })
    },
    findAllNews: async function () {
        return new Promise((resolve, reject) => {
            fetch(url + "news", {
                method: 'GET', headers: { 'Content-Type': 'application/json' }
            }).then(function (result) { return result.json(); })
                .then(resolve)
                .catch(resolve)
        })
    },
    findByIdNew: function (id) {
        return new Promise((resolve, reject) => {
            fetch(url + "/news/" + id, {
                method: 'GET', headers: { 'Content-Type': 'application/json' }
            }).then(function (result) { return result.json(); })
                .then(resolve)
                .catch(resolve)
        })
    },
    delete: function (id) {
        return new Promise((resolve, reject) => {
            fetch(url + "/" + id, {
                method: 'DELETE', headers: { 'Content-Type': 'application/json' }
            }).then(function (result) { return result.json(); })
                .then(resolve)
                .catch(resolve)
        })
    }
}

export default Services;