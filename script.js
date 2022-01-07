const getData = () => {
    return fetch('db.json')
        .then(responce => {

            return responce.json()
        })
}
const sendData = () => {
    getData().then(data => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch(error => console.log(error))
    })
}
sendData()





