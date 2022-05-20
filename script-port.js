const filterBox = document.querySelectorAll('.box');

document.querySelector('.nav_bar').addEventListener('click', event => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});








const openPopUp = document.getElementById('open_pop_up');
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


const open = document.getElementById('new_pop');
const close = document.getElementById('pop__close');
const popPUp = document.querySelector('.pop');
console.log(popPUp)


open.addEventListener('click', function (e) {
    e.preventDefault()
    popPUp.classList.add('active');
    console.log(popPUp)
})

/*действие нажатия на кнопку закрыть*/


close.addEventListener('click', () => {
    popPUp.classList.remove('active')
})
