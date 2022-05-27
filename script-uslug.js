

/*======================Menu-Slider-768================================= */
let button = document.querySelector('.button_down_hight')
let blok = document.querySelector('.block_slide')
let accord = document.querySelectorAll('.accordion')
let bth = document.querySelectorAll('.button')
let content = document.querySelectorAll('.bass_content')

let disaign = document.querySelector('.disaign')
let buttonEVERY = document.querySelectorAll('#every')
let idDisign = document.querySelector('#disaign')


for (let i = 0; i < buttonEVERY.length; i++) {

    buttonEVERY[i].addEventListener('click', (e) => {
        e.preventDefault()
        disaign.classList.toggle('active2Design')
        blok.classList.toggle('active')
        idDisign.classList.toggle('active3blocslider')

        for (let j = 0; j < accord.length; j++) {
            accord[j].classList.toggle('active')
        }
        for (let q = 0; q < content.length; q++) {
            content[q].classList.toggle('active')
        }
        for (let w = 0; w < bth.length; w++) {
            bth[w].classList.toggle('active')
        }
    })
}



/*======================Menu-Slider-1440================================= */

button.addEventListener('click', (e) => {
    e.preventDefault()
    for (let i = 0; i < accord.length; i++) {
        accord[i].classList.toggle('active')

    }


    for (let i = 0; i < content.length; i++) {
        content[i].classList.toggle('active')
    }

    for (let i = 0; i < bth.length; i++) {
        bth[i].classList.toggle('active')
    }

    for (let i = 0; i < disaign.length; i++) {
        disaign[i].classList.toggle('active')
    }



    blok.classList.toggle('active')
    console.log(blok)

})


const btn = document.querySelector('.button_down > span');
btn.addEventListener('click', function () {
    btn.innerHTML =
        (btn.innerHTML === 'развернуть') ? btn.innerHTML = 'свернуть' : btn.innerHTML = 'развернуть';
})







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



const open = document.getElementById('open_new');
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



/*============slider========================== */
const slider = function (className) {
    let container = document.querySelector(className)
    let ul = container.querySelector('ul');
    if (!ul) return;

    let slideItems = ul.querySelectorAll('li');
    if (!slideItems || !(slideItems.length > 1)) return;

    const next = function (e) {
        let saveNext = e.target.classList.contains('btn-next') ? 'next' : 'prev';
        // let saveNext = '';
        // if(e.target.classList.contains('btn-next')){
        //     saveNext = 'next';
        // }else{
        //     saveNext = 'prev';
        // }

        let x = ul.style.transform || '0';
        x = x.replace('translateX(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x))

        if (saveNext === 'next') {
            if (x < ((slideItems.length * 100) - 100)) {
                x += 100;
            } else {
                x = 0
            }
        }
        if (saveNext === 'prev') {
            if (x > 0) {
                x -= 100
            } else {
                x = (slideItems.length * 100) - 100
            }
        }


        ul.style.transform = `translateX(-${x}%)`
        console.log(ul.style.transform)
    }

    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', next));
}

slider('.my-slider')



