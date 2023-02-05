const url = "https://scback-pqnv43fc8-leopoglia.vercel.app/api/"


const Services = {
    saveNew: function (data) {

        console.log(data)

        console.log(data.title, data.description,data.image,data.imageRef, data.content)

        console.log('DATA --> ', data)
        return new Promise((resolve, reject) => {
            fetch((url + "news"), {
                method: 'POST',
                body: JSON.stringify({title: data.title, description: data.description, image: data.image, imageRef: data.imageRef, content: data.content}),
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' }
            }).then(function (result) {
                console.log('RESULT --> ', result)
                return result.json();
            }).then(resolve).catch(resolve)
        })
    },
    findAll: async function () {
        return new Promise((resolve, reject) => {
            fetch(url, {
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