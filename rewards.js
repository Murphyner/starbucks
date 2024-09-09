const RewDivs = document.querySelectorAll('.rew-divs')
const RewBtns = document.querySelectorAll('.rew-btns')

function ShowDivRew(z){
    for (let i = 0; i < RewBtns.length; i++) {
        RewBtns[i].classList.remove('active-btn')
    }
    RewBtns[z].classList.add('active-btn')
    for (let i = 0; i < RewDivs.length; i++) {
        RewDivs[i].classList.remove('active-div')
    }
    RewDivs[z].classList.add('active-div')
}