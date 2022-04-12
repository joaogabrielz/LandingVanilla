function typescript(element){

    const txtArray = element.innerHTML.split('');
    element.innerHTML = "";
    txtArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i)
        //animacao recebe as letras a cada incrementa 75ms * index 
    })
}
const texto = document.querySelector('#txt');
typescript(texto);