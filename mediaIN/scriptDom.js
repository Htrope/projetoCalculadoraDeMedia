let campoNotas = document.querySelector('#Camponotas');
let notas= [];

// função para exibir a nota
function exibirNota(nota) {
    let notaInput = document.querySelector('#nota');
    let valor = notaInput.value;
    // restrição de campo vazio
    if (valor === "") {
        alert("Por favor, insira uma nota.");
        return;
    }
    //
    
    // restrição para valor não numérico, e mota entre 0 e 10
    if (isNaN(valor) || valor < 0 || valor > 10) {
        alert('A nota digitada é invalida.por favor, insira uma nota válida');
        return;
    }    
    //
    
    let escopo = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerText = valor;
    escopo.append(texto);
    campoNotas.append(escopo); 

    notas[notas.length] = parseFloat(valor);
    notaInput.value = '';
}

//-------------------
// função para calcular a média
function calcularMedia() {
    let soma = 0;
    let qnt = notas.length;
    let i = 0;
    
    while (i < qnt) {
        soma += notas[i];
        i++;
    }
       
    let media= soma/qnt;
    return media
  
}

// função para exibir a média
function exibirMedia() {
    let media = calcularMedia();
    let resultado = document.querySelector('#resultado');
    resultado.innerText = `A média é: ${media.toFixed(2)}`;
     } 





// progama principal
let btnAdicionar = document.querySelector('#btnAdicionar');
btnAdicionar.addEventListener('click',exibirNota );

let btncalcularMedia = document.querySelector('#btnCalcularMedia');
btncalcularMedia.addEventListener('click', exibirMedia);
 



//------------------