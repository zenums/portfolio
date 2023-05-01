// nav responsive
nav = document.querySelector('.list-nav');
menuBurger = document.querySelector('.logo-burger');
allLinks = document.querySelectorAll('.item-nav');
ItemsBurger = document.querySelectorAll('.item-burger');

menuBurger.addEventListener('click',()=>{
    nav.classList.toggle('active');
    if(nav.classList.contains("active")){
        ItemsBurger.forEach((e)=>{
            e.classList.add('active')
        })
    }
    else{
        ItemsBurger.forEach((e)=>{
            e.classList.remove('active')
        })
    }
})
allLinks.forEach((e)=>{
    e.addEventListener('click',()=>{
        nav.classList.toggle('active');
        ItemsBurger.forEach((e)=>{
            e.classList.remove('active')
        })
    })
})

// competences

const buttonCompetence = document.querySelector('.md1');
const menuDeroulant = document.querySelector('.lc1');
const buttonCompetence2 = document.querySelector('.md2');
const menuDeroulant2 = document.querySelector('.lc2');

buttonCompetence.addEventListener('click',()=>{
    buttonCompetence.classList.toggle('active');
    menuDeroulant.classList.toggle('active');

})
buttonCompetence2.addEventListener('click',()=>{
    buttonCompetence2.classList.toggle('active');
    menuDeroulant2.classList.toggle('active');

})

// animation texte
const txt = document.querySelector('.multitext');
new Typewriter(txt, {
    strings: ['un programmeur', 'un passionné','thibault ;)'],
    loop: true,
    autoStart: true,
});

// carousel portfolio


const items = document.querySelectorAll('.projet');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

// boutton pour remonter
const object = document.querySelector(".ancre");
const ancre = document.querySelector(".ancre-home");
const ratio = 0.2;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};
let anim = function a(entries, observer){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > ratio){
            ancre.classList.add('active')
        }
        else{
            ancre.classList.remove('active')
        }
    })
}
let observer = new IntersectionObserver(anim, options);
observer.observe(object);

// DarkMode

const switchDark = document.querySelector(".switch-mode");
const body = document.querySelector("body");

switchDark.addEventListener('click',()=>{
  body.classList.toggle('actif')
});

// animation scroll

const ratio2 = 0.15;
const options2 = {
    root: null,
    rootMargin: "0px",
    threshold: ratio2,
}
const animationScroll = function(entries,observer2){
    entries.forEach((e)=>{
        if(e.intersectionRatio > ratio){
            e.target.classList.add('reveal-visible')
            observer2.unobserve(e.target)
        }
    })
}

const observer2 = new IntersectionObserver(animationScroll,options)
const reveal = document.querySelectorAll('.reveal')

reveal.forEach((a) => {
    observer2.observe(a)
})


