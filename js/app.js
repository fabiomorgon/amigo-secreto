let listaAmigos = []; // array que irá conter a lista de amigos informada

// Esta função adiciona um novo nome à lista quando é clicado o botão "Adicionar"
function adicionar() {
    // obtém o nome do amigo informado na tela
    nomeAmigo = document.getElementById('nome-amigo').value;

    // caso não tenha sido informado nenhum nome, exibe mensagem de erro
    // caso o nome seja repetido, exibe mensagem de erro
    // caso contrário, adiciona o nome informado à lista de nomes e limpa o campo da tela
    if (nomeAmigo == '') {
        alert('informe o nome do amigo');
    } else {
        if (listaAmigos.includes(nomeAmigo)) {
            alert('Nome do amigo já informado. Informe um nome diferente');
        } else {
            listaAmigos.push(nomeAmigo);
            document.getElementById('nome-amigo').value = '';    
        }
    }

    document.getElementById('lista-amigos').innerHTML = listaAmigos;
}

// Esta função efetua o sorteio do amigo secreto quando clicado o botão "Sortear"
function sortear() {
    
    // caso a lista de amigos tenha memos do que três nomes, exibe um alert
    if (listaAmigos.length < 3) {
        alert('Para que seja feito o sorteio, devem ser informados ao menos três amigos');
        return;
    }

    // o loop abaixo utiliza a função Math.random() para misturar os nomes constates da array de maneira aleatória
    for (let i = listaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = listaAmigos[i];
        listaAmigos[i] = listaAmigos[j];
        listaAmigos[j] = temp;
    }

    // Caso a lista do sorteio já tenha dados apresentados, limpa a lista
    let listaSorteio = document.getElementById('lista-sorteio');
    if (listaSorteio.firstChild != null) {
        listaSorteio.removeChild(listaSorteio.firstChild);
    }

    // cria uma lista para apresentação dos nomes sorteados
    let listaItens = document.createElement('ul');
    listaSorteio.appendChild(listaItens);

    // varre a lista monstrando como ficou o sorteio
    let i = 0;
    while (i + 1 != listaAmigos.length) {
        let itemLista = document.createElement('li');
        itemLista.innerHTML = `${listaAmigos[i]} -> ${listaAmigos[i + 1]}`
        listaItens.appendChild(itemLista);
        i++;
    }

    // adiciona uma linha à lista do sorteio
    let itemLista = document.createElement('li');
    itemLista.innerHTML = `${listaAmigos[i]} -> ${listaAmigos[0]}`
    listaItens.appendChild(itemLista);
}

// Esta função limpa os dados da tela e da array quando clicado no link "Reiniciar"
function reiniciar() {
    listaAmigos = [];
    // limpa a lista sorteada
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.removeChild(listaSorteio.firstChild);
    document.getElementById('lista-amigos').innerHTML = '';
}
