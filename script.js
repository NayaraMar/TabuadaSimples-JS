var butt = document.querySelector('input#butt');
butt.addEventListener('click', calcular);

function calcular() {

    var txt = document.querySelector('p#txt');
    //'reinicia' a varia vel sempre que o botão é acionado, assim, o campo se mantém limpo
    txt.innerHTML = '';

    var valor = document.querySelector('input#valor');

    //verifica se o campo está vazio
    if ((valor.value).length == 0){

        alert('ERRO! Por favor, digite um valor.');
    } else {

        //os valores precisa ser 'pego' dentro s=da variável, por isso o uso do value; e, logo em seguida, transformados em números (number)
        for (var i = 0; i <= 10; i++) {
        txt.innerHTML += `${valor.value} x ${i} = ${Number(valor.value) * i} <br>`;
        }

    }

    txt.style.fontSize = '1.5rem';
    txt.style.width = '40vw';
    txt.style.maxWidth = '400px';
    txt.style.minWidth = '176';
    
}