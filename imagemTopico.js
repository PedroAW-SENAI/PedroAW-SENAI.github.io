const imagemQuemEuSou = document.querySelector('[imagem-quem-eu-sou]');
const conteudoTopicoQuemEuSou = document.querySelector('[conteudo-topico-quem-eu-sou]');
const topicoQuemEuSou = document.querySelector('[topico-quem-eu-sou]');
const textoTopicoQuemEuSou = document.querySelector('[texto-topico-quem-eu-sou]');
const imagemTopicoContainerQuemEuSou = document.querySelector('[imagem-topico-container-quem-eu-sou]');

const botaoLeftQuemEuSou = document.querySelector('[botao-left-quem-eu-sou]');
const botaoRightQuemEuSou = document.querySelector('[botao-right-quem-eu-sou]');
const adicional = 30;
fotoAtualQuemEuSou = 0;
const listaDeFotosQuemEuSou = ["/assets/imagemFamilia.png","/assets/imagemFamilia2.jpg","/assets/imagemJabuticaba.jpg"];

const imagemSonhos = document.querySelector('[imagem-sonhos]');
const conteudoTopicoSonhos = document.querySelector('[conteudo-topico-sonhos]');
const topicoSonhos = document.querySelector('[topico-sonhos]');
const textoTopicoSonhos = document.querySelector('[texto-topico-sonhos]');
const imagemTopicoContainerSonhos = document.querySelector('[imagem-topico-container-sonhos]');

const botaoLeftSonhos = document.querySelector('[botao-left-sonhos]');
const botaoRightSonhos = document.querySelector('[botao-right-sonhos]');
const adicionalSonhos = 30;
fotoAtualSonhos = 0;
const listaDeFotosSonhos = ["/assets/imagemWEG.jpg","/assets/imagemNovale.jpg","/assets/imagemEscritor.jpg"];

redimensionarImagemTopico();

window.addEventListener("resize", () => {    
    redimensionarImagemTopico();
});

window.addEventListener("load", () => {
    redimensionarImagemTopico();
});

setTimeout(() => { avancarFotosAutomatico();}, 10000);

botaoRightQuemEuSou.onclick = () => {
    avancarFotosQuemEuSou();
}

botaoLeftQuemEuSou.onclick = () => {
    voltarFotosQuemEuSou();
}

botaoRightSonhos.onclick = () => {
    avancarFotosSonhos();
}

botaoLeftSonhos.onclick = () => {
    voltarFotosSonhos();
}

function redimensionarImagemTopico () {

    if ( fotoAtualQuemEuSou == 0 ) {
        imagemQuemEuSou.setAttribute("src","/assets/imagemFamilia.png");
    }

    if ( fotoAtualSonhos == 0 ) {
        imagemSonhos.setAttribute("src","/assets/imagemWEG.jpg");
    }

    imagemQuemEuSou.style.height = conteudoTopicoQuemEuSou.clientHeight + "px";
    imagemQuemEuSou.style.width = "auto";
    
    if ( topicoQuemEuSou.clientWidth / topicoQuemEuSou.clientHeight < 1.3 ) {
        topicoQuemEuSou.style.flexDirection = "column";
        textoTopicoQuemEuSou.style.maxWidth = "78vw";
        imagemQuemEuSou.style.height = "auto";
        imagemQuemEuSou.style.maxWidth = "60vw";
        imagemTopicoContainerQuemEuSou.style.width = "80vw";
        imagemTopicoContainerQuemEuSou.style.justifyContent = "center";
    } else {
        topicoQuemEuSou.style.flexDirection = "row";
    }

    imagemSonhos.style.height = conteudoTopicoSonhos.clientHeight + "px";
    imagemSonhos.style.width = "auto";
    
    if ( topicoSonhos.clientWidth / topicoSonhos.clientHeight < 1.3 ) {
        topicoSonhos.style.flexDirection = "column";
        textoTopicoSonhos.style.maxWidth = "78vw";
        imagemSonhos.style.height = "auto";
        imagemSonhos.style.maxWidth = "60vw";
        imagemTopicoContainerSonhos.style.width = "80vw";
        imagemTopicoContainerSonhos.style.justifyContent = "center";
    } else {
        topicoSonhos.style.flexDirection = "row";
    }

    ajustarBotoesFoto();
}

function ajustarBotoesFoto () {
    const adicional = 10;
    
    const restoCadaLado = ( imagemTopicoContainerQuemEuSou.clientWidth - imagemQuemEuSou.clientWidth ) / 2 ;
    botaoLeftQuemEuSou.style.left = ( restoCadaLado + adicional ) + "px";
    botaoRightQuemEuSou.style.left = ( imagemTopicoContainerQuemEuSou.clientWidth - restoCadaLado - adicional - botaoRightQuemEuSou.clientWidth ) + "px";

    const restoCadaLadoSonhos = ( imagemTopicoContainerSonhos.clientWidth - imagemSonhos.clientWidth ) / 2 ;
    botaoLeftSonhos.style.left = ( restoCadaLadoSonhos + adicional ) + "px";
    botaoRightSonhos.style.left = ( imagemTopicoContainerSonhos.clientWidth - restoCadaLadoSonhos - adicional - botaoRightSonhos.clientWidth ) + "px";
}

function avancarFotosQuemEuSou () {
    fotoAtualQuemEuSou ++;
    if ( fotoAtualQuemEuSou == listaDeFotosQuemEuSou.length ) {
        fotoAtualQuemEuSou = 0;
    }
    imagemQuemEuSou.setAttribute("src",listaDeFotosQuemEuSou[fotoAtualQuemEuSou])
    botaoRightQuemEuSou.style.animation = "";
    setTimeout(() => botaoRightQuemEuSou.style.animation = "clicou 0.5s linear", 5);
    setTimeout(() => ajustarBotoesFoto(), 20);
}

function voltarFotosQuemEuSou () {
    fotoAtualQuemEuSou --;
    if ( fotoAtualQuemEuSou < 0 ) {
        fotoAtualQuemEuSou = listaDeFotosQuemEuSou.length - 1
    }
    imagemQuemEuSou.setAttribute("src",listaDeFotosQuemEuSou[fotoAtualQuemEuSou])
    botaoLeftQuemEuSou.style.animation = "";
    setTimeout(() => botaoLeftQuemEuSou.style.animation = "clicou 0.5s linear", 5);
    setTimeout(() => ajustarBotoesFoto(), 20); 
}

function avancarFotosSonhos () {
    fotoAtualSonhos ++;
    if ( fotoAtualSonhos == listaDeFotosSonhos.length ) {
        fotoAtualSonhos = 0;
    }
    imagemSonhos.setAttribute("src",listaDeFotosSonhos[fotoAtualSonhos])
    botaoRightSonhos.style.animation = "";
    setTimeout(() => botaoRightSonhos.style.animation = "clicou 0.5s linear", 5);
    setTimeout(() => ajustarBotoesFoto(), 20);
}

function voltarFotosSonhos () {
    fotoAtualSonhos --;
    if ( fotoAtualSonhos < 0 ) {
        fotoAtualSonhos = listaDeFotosSonhos.length - 1
    }
    imagemSonhos.setAttribute("src",listaDeFotosSonhos[fotoAtualSonhos])
    botaoLeftSonhos.style.animation = "";
    setTimeout(() => botaoLeftSonhos.style.animation = "clicou 0.5s linear", 5);
    setTimeout(() => ajustarBotoesFoto(), 20); 
}

function avancarFotosAutomatico() {
    avancarFotosQuemEuSou();
    avancarFotosSonhos();
    setTimeout(() => avancarFotosAutomatico(), 10000);
}