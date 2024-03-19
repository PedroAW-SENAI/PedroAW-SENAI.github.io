const botaoSobreDown = document.querySelector('[button-sobre-down]');
const botaoSobreUp = document.querySelector('[button-sobre-up]');

const listaSobre = document.querySelector('[dropdown-sobre]');
const linhaSobre = document.querySelector('[linha-sobre]');

const botaoContatoDown = document.querySelector('[button-contato-down]');
const botaoContatoUp = document.querySelector('[button-contato-up]');

const listaContato = document.querySelector('[dropdown-contato]');
const linhaContato = document.querySelector('[linha-contato]');

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