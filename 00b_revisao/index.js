// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string


const body = document.body;
const botao = document.getElementById("trocaCor");
console.log(botao);


body.style.backgroundColor = 'purple';
botao.addEventListener("click", () => {
    const r = geraInteiro(255);
    const g = geraInteiro(255);
    const b = geraInteiro(255);
    console.log(r, g, b);

    body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b+')'
});

geraInteiro = num => parseInt(Math.random() * num);
  