//XMLHttpRequest do gif

const request = new XMLHttpRequest();
const quero = 'rainbow';
const urlRequest = 'http://api.giphy.com/v1/gifs/search?q=${quero}&api_key=dc6zaTOxFJmzC&limit=3&offset=0';

request.onreadystatechange = mostraGif;

request.open('GET', urlRequest);
request.send();


function mostraGif() {
   if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);
    // console.log(json);
    
    const body = document.body
    body.innerHTML = `
    
    <img src = $ {json.data[0].images.original.url}>
    <img src = $ {json.data[1].images.original.url}>
    <img src = $ {json.data[2].images.original.url}>`

   }
}