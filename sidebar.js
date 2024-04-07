const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const botaoSidebarLeft = document.querySelector('[button-sidebar-left]');
const botaoSidebarRight = document.querySelector('[button-sidebar-right]');
const sidebarCompleta = document.querySelector('[sidebarCompleta]');
const sidebarReduzida = document.querySelector('[sidebarReduzida]');
const sidebarContainer = document.querySelector('[sidebar]');

const cabecalho = document.querySelector('[cabecalho]');

const tituloAreas = document.querySelector('[title-section-nav-areas]');
const botaoAreasDown = document.querySelector('[button-areas-down]');
const botaoAreasUp = document.querySelector('[button-areas-up]');

const listaAreas = document.querySelector('[dropdown-areas]');
const linhaAreas = document.querySelector('[linha-areas]');

const tituloSteam = document.querySelector('[title-section-nav-steam]');
const botaoSteamDown = document.querySelector('[button-steam-down]');
const botaoSteamUp = document.querySelector('[button-steam-up]');

const listaSteam = document.querySelector('[dropdown-steam]');
const linhaSteam = document.querySelector('[linha-steam]');

const tituloProjetosLivres = document.querySelector('[projetos-livres-titulo]');
const botaoProjetosLivresDown = document.querySelector('[button-projetos-livres-down]');
const botaoProjetosLivresUp = document.querySelector('[button-projetos-livres-up]');

const listaProjetosLivres = document.querySelector('[dropdown-projetos-livres]');

const tituloCienciasNatureza = document.querySelector('[ciencias-natureza-titulo]');
const botaoCienciasNaturezaDown = document.querySelector('[button-ciencias-natureza-down]');
const botaoCienciasNaturezaUp = document.querySelector('[button-ciencias-natureza-up]');

const listaCienciasNatureza = document.querySelector('[dropdown-ciencias-natureza]');

const tituloCienciasHumanas = document.querySelector('[ciencias-humanas-titulo]');
const botaoCienciasHumanasDown = document.querySelector('[button-ciencias-humanas-down]');
const botaoCienciasHumanasUp = document.querySelector('[button-ciencias-humanas-up]');

const listaCienciasHumanas = document.querySelector('[dropdown-ciencias-humanas]');

const tituloLinguagens = document.querySelector('[linguagens-titulo]');
const botaoLinguagensDown = document.querySelector('[button-linguagens-down]');
const botaoLinguagensUp = document.querySelector('[button-linguagens-up]');

const listaLinguagens = document.querySelector('[dropdown-linguagens]');


const main = document.querySelector('[main]');
const fundoEscuro = document.querySelector('[fundoEscuro]');
const rodape = document.querySelector('[rodape]');

const sidebarReduzidaTamanho = "70px";
main.onclick = () => {
    if ( sidebarCompleta.style.display != "none" ) {
        recolherMenuLateral();
    }
};

window.addEventListener("resize", () => {    
    main.style.marginBottom = rodape.offsetHeight + "px";
});

main.style.marginBottom = rodape.offsetHeight + "px";

botaoSidebarLeft.onclick = () => {
    recolherMenuLateral();
};

botaoSidebarRight.onclick = () => {
    desaparecer(botaoSidebarRight);
    aparecer(botaoSidebarLeft);
    aparecer(sidebarCompleta);
    desaparecer(sidebarReduzida);
    sidebarContainer.style.minWidth = "250px";
    sidebarContainer.style.width = "250px";
    sidebarContainer.style.alignItems = "flex-start";
    sidebarContainer.style.paddingLeft = "20px";
    cabecalho.style.paddingLeft = "40px";
    cabecalho.style.zIndex = "-1";
    
    fundoEscuro.style.display = "block";
    fundoEscuro.style.zIndex = "3";
    sidebarContainer.style.zIndex = "4";
    /*
    cabecalho.style.width = "calc(100vw - 250px)";
    cabecalho.style.marginLeft = "250px";*/
};

tituloAreas.onclick = () => {
    if ( botaoAreasUp.style.display == "none" ) {
        aparecer(listaAreas);
        desaparecer(botaoAreasDown);
        desaparecer(linhaAreas);
        aparecer(botaoAreasUp);
    } else {
        desaparecer(listaAreas);
        desaparecer(botaoAreasUp);
        aparecer(linhaAreas);
        aparecer(botaoAreasDown);
    }
};

tituloSteam.onclick = () => {
    if ( botaoSteamUp.style.display == "none" ) {
        aparecer(listaSteam);
        desaparecer(botaoSteamDown);
        desaparecer(linhaSteam);
        aparecer(botaoSteamUp);
    } else {
        desaparecer(listaSteam);
        desaparecer(botaoSteamUp);
        aparecer(linhaSteam);
        aparecer(botaoSteamDown);
    }
}

tituloProjetosLivres.onclick = () => {
    if ( botaoProjetosLivresUp.style.display == "none" ) {
        aparecer(listaProjetosLivres);
        desaparecer(botaoProjetosLivresDown);
        aparecer(botaoProjetosLivresUp);
    } else {
        desaparecer(listaProjetosLivres);
        desaparecer(botaoProjetosLivresUp);
        aparecer(botaoProjetosLivresDown);
    }
};

tituloCienciasNatureza.onclick = () => {
    if ( botaoCienciasNaturezaUp.style.display == "none" ) {
        aparecer(listaCienciasNatureza);
        desaparecer(botaoCienciasNaturezaDown);
        aparecer(botaoCienciasNaturezaUp);
    } else {
        desaparecer(listaCienciasNatureza);
        desaparecer(botaoCienciasNaturezaUp);
        aparecer(botaoCienciasNaturezaDown);
    }
};

tituloCienciasHumanas.onclick = () => {
    if ( botaoCienciasHumanasUp.style.display == "none" ) {
        aparecer(listaCienciasHumanas);
        desaparecer(botaoCienciasHumanasDown);
        aparecer(botaoCienciasHumanasUp);
    } else {
        desaparecer(listaCienciasHumanas);
        desaparecer(botaoCienciasHumanasUp);
        aparecer(botaoCienciasHumanasDown);
    }
};

tituloLinguagens.onclick = () => {
    if ( botaoLinguagensUp.style.display == "none" ) {
        aparecer(listaLinguagens);
        desaparecer(botaoLinguagensDown);
        aparecer(botaoLinguagensUp);
    } else {
        desaparecer(listaLinguagens);
        desaparecer(botaoLinguagensUp);
        aparecer(botaoLinguagensDown);
    }
};

function aparecer(elementoHtml) {
    elementoHtml.style.display = "block";
} 

function desaparecer(elementoHtml) {
    elementoHtml.style.display = "none";
}

function recolherMenuLateral() {
    aparecer(botaoSidebarRight);
    desaparecer(botaoSidebarLeft);
    desaparecer(sidebarCompleta);
    aparecer(sidebarReduzida);

    sidebarReduzida.style.paddingLeft = "15px";
    sidebarContainer.style.minWidth = sidebarReduzidaTamanho;
    sidebarContainer.style.width = sidebarReduzidaTamanho;
    sidebarContainer.style.alignItems = "center";
    sidebarContainer.style.paddingLeft = "0px";
    
    cabecalho.style.width = "calc(100vw - 40px)";
    cabecalho.style.marginLeft = "0px";

    fundoEscuro.style.display = "none";

    /*cabecalho.style.paddingLeft = sidebarReduzidaTamanho;*/
    //cabecalho.style.marginLeft = "3vw";
}