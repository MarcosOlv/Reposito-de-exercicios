
// Essa função ira puxar os valores do html 
function sortearNumero () {
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    

    // o for cria um loop que vai até um numero
    for(let i = 0; i < quantidade; i++){
        numero = numeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = numeroAleatorio(de, ate);
        }
            // enquanto variavel sorteador for repitido sorteie um numero aleatroi

        sorteados.push(numero);  
        // função para enviar para dentro do arrays
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarBotao();
}
function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) { 
       botao.classList.remove('container__botao-desabilitado');
       botao.classList.add('container__botao'); 
    } else {
        botao.classList.remove('container__botao'); 
        botao.classList.add('container__botao-desabilitado'); 

    }
}

function reiniciar(){
    (document.getElementById('quantidade').value = '');
    (document.getElementById('de').value = '');
    (document.getElementById('ate').value = '');
    (document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>');
    alterarBotao();
}

// funçao que ira dar um numeroa aleatorio com math random
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) +  min;   
}

    

    

// document.getElementById('btn-sortear').addEventListener('click', verificarSortear);