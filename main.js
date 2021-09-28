const hamburgerElement = document.querySelector('.hamburger')
const mobileMenuElement = document.querySelector('.mobile-menu')
const bodyElement = document.querySelector('body')

hamburgerElement.addEventListener('click', () => {
    if (hamburgerElement.classList.contains('open')) {
        hamburgerElement.classList.remove('open')
        mobileMenuElement.classList.remove('open')
        bodyElement.classList.remove('noscroll')
    } else {
        hamburgerElement.classList.add('open')
        mobileMenuElement.classList.add('open')
        bodyElement.classList.add('noscroll')
    }
})
