//expandir o menu
let btnExp = document.querySelector('#btn-exp')
let menuSide = document.querySelector('.sidebar')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expand')
})