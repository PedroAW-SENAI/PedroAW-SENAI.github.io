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

botaoSidebarLeft.onclick = () => {
    aparecer(botaoSidebarRight);
    desaparecer(botaoSidebarLeft);
    desaparecer(sidebarCompleta);
    aparecer(sidebarReduzida);
    cabecalho.style.width = "90vw";
    cabecalho.style.marginLeft = "3vw";
    sidebarReduzida.style.paddingLeft = "15px";
    sidebarContainer.style.minWidth = "70px";
    sidebarContainer.style.width = "70px";
    sidebarContainer.style.alignItems = "center";
    sidebarContainer.style.paddingLeft = "0px";
};

botaoSidebarRight.onclick = () => {
    desaparecer(botaoSidebarRight);
    aparecer(botaoSidebarLeft);
    aparecer(sidebarCompleta);
    desaparecer(sidebarReduzida);
    cabecalho.style.width = "80vw";
    cabecalho.style.marginLeft = "250px";
    sidebarContainer.style.minWidth = "250px";
    sidebarContainer.style.width = "250px";
    sidebarContainer.style.alignItems = "flex-start";
    sidebarContainer.style.paddingLeft = "20px";
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