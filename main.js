const botaoAparecer = document.querySelector('[data-botao-aparecer]');

const listaTintas = document.querySelector('[data-lista-tintas]');

const botaoFecharLista = document.querySelector('[data-botao-fechar]');

botaoAparecer.onclick = () => {
    aparecer(listaTintas);
    desaparecer(botaoAparecer);
    aparecer(botaoFecharLista);
};

botaoFecharLista.onclick = () => {
    desaparecer(listaTintas);
    desaparecer(botaoFecharLista);
    aparecer(botaoAparecer);
}

function aparecer(elementoHtml) {
    elementoHtml.style.display = "block";
} 

function desaparecer(elementoHtml) {
    elementoHtml.style.display = "none";
}