let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1; 

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.1});
}

function exibirMensagemInicial()
{
    exibirTextoNaTela("h1", "Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial()

function verificarChute()
{
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', "Acertou");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"; 
        let mensagemTentativas = "Você descobriu o número secreto com " + tentativas + " " + palavraTentativas + "!";
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled"); 
    }
    else
    {
        if(chute < numeroSecreto)
        {
            exibirTextoNaTela("p", "O número secreto é menor que o chute");
        }
        else
        {
            exibirTextoNaTela("p", "O número secreto é maior que o chute");
        }
        tentativas++;
        limparCampo(); 
    }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    if (listaNumerosSorteados.includes(numeroEscolhido))
    {
        if(listaNumerosSorteados.length == 3)
        {
            listaNumerosSorteados = [];
            return gerarNumeroAleatorio();
        }
        else
        {
        return gerarNumeroAleatorio();
        }

    }
    else
    {
        listaNumerosSorteados.push(numeroEscolhido); 
        console.log(listaNumerosSorteados);
        return numeroEscolhido; 
    }
}

function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}