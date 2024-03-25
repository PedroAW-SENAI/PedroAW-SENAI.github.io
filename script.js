const botaoSidebarLeft = document.querySelector('[button-sidebar-left]');
const botaoSidebarRight = document.querySelector('[button-sidebar-right]');
const sidebarCompleta = document.querySelector('[sidebarCompleta]');
const sidebarReduzida = document.querySelector('[sidebarReduzida]');
const sidebarContainer = document.querySelector('[sidebar]');

const cabecalho = document.querySelector('[cabecalho]');

const botaoSobreDown = document.querySelector('[button-sobre-down]');
const botaoSobreUp = document.querySelector('[button-sobre-up]');

const listaSobre = document.querySelector('[dropdown-sobre]');
const linhaSobre = document.querySelector('[linha-sobre]'); 

const botaoAreasDown = document.querySelector('[button-areas-down]');
const botaoAreasUp = document.querySelector('[button-areas-up]');

const listaAreas = document.querySelector('[dropdown-areas]');
const linhaAreas = document.querySelector('[linha-areas]');

const botaoSteamDown = document.querySelector('[button-steam-down]');
const botaoSteamUp = document.querySelector('[button-steam-up]');

const listaSteam = document.querySelector('[dropdown-steam]');
const linhaSteam = document.querySelector('[linha-steam]');

const botaoProjetosLivresDown = document.querySelector('[button-projetos-livres-down]');
const botaoProjetosLivresUp = document.querySelector('[button-projetos-livres-up]');

const listaProjetosLivres = document.querySelector('[dropdown-projetos-livres]');
const linhaProjetosLivres = document.querySelector('[linha-projetos-livres]');

const main = document.querySelector('[main]');
const fundoEscuro = document.querySelector('[fundoEscuro]');

const textoTopicoQuemEuSou = document.querySelector('[texto-topico-quem-eu-sou]');
const imagemQuemEuSou = document.querySelector('[imagem-quem-eu-sou]');

imagemQuemEuSou.style.height = textoTopicoQuemEuSou.clientHeight + "px";
imagemQuemEuSou.setAttribute("src","/assets/imagemFamilia.png");
/*
const botaoContatoDown = document.querySelector('[button-contato-down]');
const botaoContatoUp = document.querySelector('[button-contato-up]');

const listaContato = document.querySelector('[dropdown-contato]');
const linhaContato = document.querySelector('[linha-contato]');
*/

const sidebarReduzidaTamanho = "70px";

main.onclick = () => {
    if ( sidebarCompleta.style.display != "none" ) {
        recolherMenuLateral();
    }
};

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

botaoSobreDown.onclick = () => {
    aparecer(listaSobre);
    desaparecer(botaoSobreDown);
    desaparecer(linhaSobre);
    aparecer(botaoSobreUp);
};

botaoSobreUp.onclick = () => {
    desaparecer(listaSobre);
    desaparecer(botaoSobreUp);
    aparecer(linhaSobre);
    aparecer(botaoSobreDown);
};

botaoAreasDown.onclick = () => {
    aparecer(listaAreas);
    desaparecer(botaoAreasDown);
    desaparecer(linhaAreas);
    aparecer(botaoAreasUp);
};

botaoAreasUp.onclick = () => {
    desaparecer(listaAreas);
    desaparecer(botaoAreasUp);
    aparecer(linhaAreas);
    aparecer(botaoAreasDown);
};

botaoSteamDown.onclick = () => {
    aparecer(listaSteam);
    desaparecer(botaoSteamDown);
    desaparecer(linhaSteam);
    aparecer(botaoSteamUp);
};

botaoSteamUp.onclick = () => {
    desaparecer(listaSteam);
    desaparecer(botaoSteamUp);
    aparecer(linhaSteam);
    aparecer(botaoSteamDown);
};

botaoProjetosLivresDown.onclick = () => {
    aparecer(listaProjetosLivres);
    desaparecer(botaoProjetosLivresDown);
    aparecer(botaoProjetosLivresUp);
};

botaoProjetosLivresUp.onclick = () => {
    desaparecer(listaProjetosLivres);
    desaparecer(botaoProjetosLivresUp);
    aparecer(botaoProjetosLivresDown);
};

/*
botaoContatoDown.onclick = () => {
    aparecer(listaContato);
    desaparecer(botaoContatoDown);
    desaparecer(linhaContato);
    aparecer(botaoContatoUp);
};

botaoContatoUp.onclick = () => {
    desaparecer(listaContato);
    desaparecer(botaoContatoUp);
    aparecer(linhaContato);
    aparecer(botaoContatoDown);
};
*/


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