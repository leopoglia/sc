const url = "https://scback-pqnv43fc8-leopoglia.vercel.app/api/"


const Services = {
    saveNew: function (data) {

        return new Promise((resolve, reject) => {
            fetch((url + "news"), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            }).then(function (result) {
                console.log('RESULT --> ', result)
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
    findById: function (id) {
        return new Promise((resolve, reject) => {
            fetch(url + "/" + id, {
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