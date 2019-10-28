// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

console.log("olá");
// const body = document.querySelector("body");
// console.log(body);
const body = document.body;
console.log(body);

//trocar a cor por várias cores
body.style.backgroundColor = "purple";

// const n = Math.random(); 
// const n2 = n * 255;
// const int = parseInt(n2);

// console.log("numero:", n);
// console.log("numero:", n2);
// console.log("int:", int);



const botao = document.getElementById("trocaCor");
console.log(botao);
botao.addEventListener("click", clicouBotao);

function geraInteiro() {
    const n = parseInt(Math.random() * 255);
    console.log(n);
    return n;
}


function clicouBotao() {
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    console.log(r, g, b);

    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b+')'

}

// function clicouBotao() {
//     const r = parseInt(Math.random () * 255);
//     const g = parseInt(Math.random () * 255);
//     const b = parseInt(Math.random () * 255);
   
//     body.style.backgroundColor = "rgb("+r+ "," +g+ "," +b+")";
// }


// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string
