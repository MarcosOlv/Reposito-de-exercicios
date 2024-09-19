function clicou(){
    let botaoClicou = document.querySelector('#mudanca');
    botaoClicou.innerText = 'clicado';
    
    alert(`${botaoClicou.innerHTML}`);
}


// FOI CRIADO UMA FUNÇÃO CHAMADA CLICLOU a variavel"LET BOTAO" Está responsavel por selecionar o ID do botao dentro do html
// Dentro da função, ele altera o texto do botao para clicado
// alert id do botao ele exibi um alerta com o nome = clicado