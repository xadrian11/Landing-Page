const hamburgerActive = document.querySelector('.hamburger')

hamburgerActive.addEventListener('click', () =>{
    if (hamburgerActive.classList.contains('open')){
        hamburgerActive.classList.remove('open')
    } else {
        hamburgerActive.classList.add('open')
    }
})