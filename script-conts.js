
const openPopUp = document.getElementById('open_pop');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.querySelector('.pop_up');
console.log(popUp)


openPopUp.addEventListener('click', function (e) {
    e.preventDefault()
    popUp.classList.add('active');
    console.log(popUp)
})

/*действие нажатия на кнопку закрыть*/


closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})




