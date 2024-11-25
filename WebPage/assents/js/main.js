const setDadosFilmes = function(listaDeFilmes) {
    
    let cardProdutos = document.getElementById('cardProdutos');



listaDeFilmes.forEach(function(item) {
    let divCaixaProduto     = document.createElement('div');
    let h2CaixaTitulo       = document.createElement('h2');
    let textoTitulo         = document.createTextNode(item.nome);
    let figureCaixaImagem   = document.createElement('figure');
    let img                 = document.createElement('img');
    let divCaixaTexto       = document.createElement('div');
    let pCaixaTexto         = document.createElement('p');
    let textoSinopse        = document.createTextNode(item.sinopse);

    divCaixaProduto.setAttribute('class', 'caixa_produto');
    h2CaixaTitulo.setAttribute('class', 'caixa_titulo');
    figureCaixaImagem.setAttribute('class', 'caixa_imagem');
    img.setAttribute('src', item.image);
    img.setAttribute('alt', 'Cartaz');
    img.setAttribute('title', 'Cartaz do Filme');
    divCaixaTexto.setAttribute('class', 'caixa_texto');

    cardProdutos.appendChild(divCaixaProduto);
    divCaixaProduto.appendChild(h2CaixaTitulo);
    h2CaixaTitulo.appendChild(textoTitulo);
    divCaixaProduto.appendChild(figureCaixaImagem);
    figureCaixaImagem.appendChild(img);
    divCaixaProduto.appendChild(divCaixaTexto);
    divCaixaTexto.appendChild(pCaixaTexto);
    pCaixaTexto.appendChild(textoSinopse);
    });
}

const getFilmesAPI = async function() {
    let url = 'https://app-avaliacao-brh0avd2ahegehac.brazilsouth-01.azurewebsites.net/projeto1/fecaf/listar/filmes';

    let response = await fetch(url);


    let dadosFilmes = await response.json();

    setDadosFilmes(dadosFilmes.filmes); 
}

window.addEventListener('load', function() {
    getFilmesAPI();
});