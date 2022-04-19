
function typescript(element){

    const txtArray = element.innerHTML.split('');
    element.innerHTML = "";
    txtArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i)
        //animacao recebe as letras a cada incrementa 75ms * index   
    })
}
let texto = document.querySelector('.txt');
typescript(texto);

function opacity(){
    let txtabout = document.querySelector('.txtabout');
    //console.log(txtabout);
    txtabout.style.opacity = '100%';
    
   
}

var lastIndex = 0;
var imgs = document.querySelectorAll('.container a');
imgs.forEach((item, index) =>{
    document.querySelectorAll('.bullet-single')[index].addEventListener('click', () => {
        let lastimg = document.querySelectorAll('.container a')[lastIndex];
        let atualimg = document.querySelectorAll('.container a')[index];
        
        document.querySelectorAll('.bullet-single')[lastIndex]
        .classList.remove('active-bullet');

        document.querySelectorAll('.bullet-single')[index]
        .classList.add('active-bullet')

        lastimg.style.opacity = 0;
        atualimg.style.opacity = 1;
        lastIndex = index;
    })
})
