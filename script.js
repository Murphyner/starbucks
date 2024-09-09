const sidebar = document.getElementById('sidebar')
function ShowSide() { sidebar.classList.toggle('translate-x-[300%]') }
function AccOpen(z) {
    const accordionItems = document.querySelectorAll('.accordion-item')
    for (let i = 0; i < accordionItems.length; i++) {
        if (i != z) {
            accordionItems[i].classList.add('h-0')
            accordionItems[i].classList.add('opacity-0')
            accordionItems[i].classList.add('z-[-1]')
            accordionItems[i].classList.remove('duration-[.3s]')
        }
    }
    accordionItems[z].classList.toggle('h-0')
    accordionItems[z].classList.toggle('opacity-0')
    accordionItems[z].classList.toggle('z-[-1]')
    accordionItems[z].classList.toggle('duration-[.3s]')
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        sidebar.style.top = '0'
        sidebar.style.height = '100vh'
    } else {
        sidebar.style.top = '10vh'
        sidebar.style.height = '90vh'
    }
}