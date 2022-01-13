const getData = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'db.json')
    xhr.responseType = 'json';
    xhr.send()
    xhr.onload = () => {
        sendData(xhr.response)
    }
}
const sendData = (data) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-type", 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data))
    xhr.onload = () => {
        console.log(xhr.response);
    }
}
getData()






