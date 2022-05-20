/* ================аккардион=================*/
class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            if (!this._config.alwaysOpen) {
                const elOpenItem = this._el.querySelector('.accordion__item_show');
                if (elOpenItem) {
                    elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
                }
            }
            elHeader.parentElement.classList.toggle('accordion__item_show');
        });
    }
}

new ItcAccordion('#accordion-1');


/*===============фильтрация товаров*/

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


/* ==================кнопка показать еще работы */



// const hiddElem = document.querySelector('.new_cont')
// const buttOpen = document.querySelector('.button')
// buttOpen.addEventListener('click', () => {
//     buttOpen.classList.toggle('active')
//     console.log(buttOpen)


//     for (let i = 0; i < hiddElem.length; i++) {
//         hiddElem[i].classList.toggle('.active')

//     }
// })



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
