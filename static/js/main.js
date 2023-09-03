
///////////////////////////////////////////
// Header Animation
//////////////////////////////////////////
setTimeout(() => {
    document.getElementById('header-text').classList.add('header-animation')
}, 500)
setTimeout(() => {
    document.getElementsByClassName('action-btn-lg')[0].classList.add('fade-in')
}, 2000)
///////////////////////////////////////////
// NavBar Animation
//////////////////////////////////////////
let navAnimation = function () {

    const navBar = document.getElementById("nav");
    const main = document.getElementById("main");
    if (main.getBoundingClientRect().top + navBar.clientHeight < 0) {
      //Fived nav
      navBar.setAttribute('data-fixed', 'true')
      navBar.classList.add('shadow-md')
    } else {
      //UnfixedNav
      navBar.classList.remove('shadow-md')
      navBar.setAttribute('data-fixed', 'false')
    }
  };
  
///////////////////////////////////////////
// Collapse NavBar
//////////////////////////////////////////

let expand_btn = document.getElementById('expand-btn')
const close_btn = document.getElementById('close-nav-btn')
expand_btn.addEventListener('click', (event) => {
    event.preventDefault()
    const navItemsWrapper = document.getElementById('collapse-navbar')
    navItemsWrapper.setAttribute('data-show', 'true')
    expand_btn.setAttribute('data-active-state', 'false')
    close_btn.setAttribute('data-active-state', 'true')
})
close_btn.addEventListener('click', (event) => {
    event.preventDefault()
    const navItemsWrapper = document.getElementById('collapse-navbar')
    navItemsWrapper.setAttribute('data-show', 'false')
    close_btn.setAttribute('data-active-state', 'false')
    expand_btn.setAttribute('data-active-state', 'true')
})

///////////////////////////////////////////
// Scroll Animation
//////////////////////////////////////////

let scrollAmination = () =>{
    console.log('hi')
    let animatedElements = document.getElementsByClassName('animated');
    for(let i =0; i < animatedElements.length; i++){
        const animatedElement = animatedElements[i];
        if (animatedElement.getBoundingClientRect().top <= 600){
            const animationClass = animatedElement.getAttribute('data-animation-class')
            const smallScreenDelay = animatedElement.getAttribute('data-animation-delay-small-screen') ? true : false
            let animationDelay = animatedElement.getAttribute('data-animation-delay') && ((window.innerWidth > 768) || smallScreenDelay) ? parseFloat(animatedElement.getAttribute('data-animation-delay')) : 0;
            animationDelay = animationDelay * 1000
            setTimeout(() => {animatedElement.classList.add(animationClass)}, animationDelay);
        }
    }
}


const onScrollEvent = () => {
    navAnimation();
    scrollAmination();
}

    

document.addEventListener("scroll", onScrollEvent);