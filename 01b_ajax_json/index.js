// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const request = new XMLHttpRequest();
const url = './data/dados.json'

request.onreadystatechange = mostraImagem;

request.open('GET', url);
request.send();

function mostraImagem() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
      
        const body = document.body;
        const div = document.querySelector('#root');
        body.innerHTML += ` 
        <img src = ${json.data[0].imagem}>
        <img src = ${json.data[1].imagem}>
        <img src = ${json.data[2].imagem}>`
    }
};

