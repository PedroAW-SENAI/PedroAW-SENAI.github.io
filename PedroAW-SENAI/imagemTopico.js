const imagemQuemEuSou = document.querySelector('[imagem-quem-eu-sou]');
const conteudoTopicoQuemEuSou = document.querySelector('[conteudo-topico-quem-eu-sou]');
const topicoQuemEuSou = document.querySelector('[topico-quem-eu-sou]');
const textoTopicoQuemEuSou = document.querySelector('[texto-topico-quem-eu-sou]');
const imagemTopicoContainerQuemEuSou = document.querySelector('[imagem-topico-container-quem-eu-sou]');

const botaoLeftQuemEuSou = document.querySelector('[botao-left-quem-eu-sou]');
const botaoRightQuemEuSou = document.querySelector('[botao-right-quem-eu-sou]');
const adicional = 30;
fotoAtualQuemEuSou = 0;
const listaDeFotosQuemEuSou = ["/assets/imagemFamilia.png","/assets/steam.png"]

redimensionarImagemTopico();

window.addEventListener("resize", () => {    
    redimensionarImagemTopico();
});

window.addEventListener("load", () => {
    redimensionarImagemTopico();
});

botaoRightQuemEuSou.onclick = () => {
    fotoAtualQuemEuSou ++;
    if ( fotoAtualQuemEuSou == listaDeFotosQuemEuSou.length ) {
        fotoAtualQuemEuSou = 0;
    }
    imagemQuemEuSou.setAttribute("src",listaDeFotosQuemEuSou[fotoAtualQuemEuSou])
    botaoRightQuemEuSou.style.animation = "";
    setTimeout(() => botaoRightQuemEuSou.style.animation = "clicou 0.5s linear", 5);
    setTimeout(() => ajustarBotoesFoto(), 15);
}

botaoLeftQuemEuSou.onclick = () => {
    fotoAtualQuemEuSou --;
    if (fotoAtualQuemEuSou < 0 ) {
        fotoAtualQuemEuSou = listaDeFotosQuemEuSou.length - 1
    }
    imagemQuemEuSou.setAttribute("src",listaDeFotosQuemEuSou[fotoAtualQuemEuSou])
    botaoLeftQuemEuSou.style.animation = "";
    setTimeout(() => botaoLeftQuemEuSou.style.animation = "clicou 0.5s linear", 5);
    setTimeout(() => ajustarBotoesFoto(), 15); 
}

function redimensionarImagemTopico () {

    if ( fotoAtualQuemEuSou == 0 ) {
        imagemQuemEuSou.setAttribute("src","/assets/imagemFamilia.png");
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
    ajustarBotoesFoto();
}

function ajustarBotoesFoto () {
    const adicional = 10;
    console.log(imagemQuemEuSou.clientHeight);
    const restoCadaLado = ( imagemTopicoContainerQuemEuSou.clientWidth - imagemQuemEuSou.clientWidth ) / 2 ;
    console.log(restoCadaLado)
    botaoLeftQuemEuSou.style.left = ( restoCadaLado + adicional ) + "px";
    botaoRightQuemEuSou.style.left = ( imagemTopicoContainerQuemEuSou.clientWidth - restoCadaLado - adicional - botaoRightQuemEuSou.clientWidth ) + "px";
}