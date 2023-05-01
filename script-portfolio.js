// filtre portfolio
window.onload = () => {
    let filters = document.querySelectorAll("#filters button");

    for(let filter of filters){
        filter.addEventListener("click", function(){
            let tag = this.id;

            let cards = document.querySelectorAll(".projet");

            for(let card of cards){
                card.classList.replace("active", "inactive");

                if(tag in card.dataset || tag === "all"){
                    card.classList.replace("inactive", "active");
                }
            }
        });
    }
}
// DarkMode

const switchDark = document.querySelector(".switch-mode");
const body = document.querySelector("body");

switchDark.addEventListener('click',()=>{
  body.classList.toggle('actif')
});
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
// boutton pour remonter
const object = document.querySelector(".ancre");
const ancre = document.querySelector(".ancre-home");
const ratio = 0.15;

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