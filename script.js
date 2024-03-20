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

const botaoContatoDown = document.querySelector('[button-contato-down]');
const botaoContatoUp = document.querySelector('[button-contato-up]');

const listaContato = document.querySelector('[dropdown-contato]');
const linhaContato = document.querySelector('[linha-contato]');

const botaoAreasDown = document.querySelector('[button-areas-down]');
const botaoAreasUp = document.querySelector('[button-areas-up]');

const listaAreas = document.querySelector('[dropdown-areas]');
const linhaAreas = document.querySelector('[linha-areas]');

const sidebarReduzidaTamanho = "70px";

botaoSidebarLeft.onclick = () => {
    aparecer(botaoSidebarRight);
    desaparecer(botaoSidebarLeft);
    desaparecer(sidebarCompleta);
    aparecer(sidebarReduzida);

    sidebarReduzida.style.paddingLeft = "15px";
    sidebarContainer.style.minWidth = sidebarReduzidaTamanho;
    sidebarContainer.style.width = sidebarReduzidaTamanho;
    sidebarContainer.style.alignItems = "center";
    sidebarContainer.style.paddingLeft = "0px";
    
    cabecalho.style.width = "100vw";
    cabecalho.style.marginLeft = "0px";
    cabecalho.style.paddingLeft = sidebarReduzidaTamanho;
    //cabecalho.style.marginLeft = "3vw";
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
    
    cabecalho.style.width = "calc(100vw - 250px)";
    cabecalho.style.marginLeft = "250px";
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



function aparecer(elementoHtml) {
    elementoHtml.style.display = "block";
} 

function desaparecer(elementoHtml) {
    elementoHtml.style.display = "none";
}