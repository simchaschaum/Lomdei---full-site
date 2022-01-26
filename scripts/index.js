// Scroll functions:
window.addEventListener("scroll",()=>{
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width>975){
        scrollFunction()
    };
    if(document.querySelector('#counters-section')){
        let countersSection = document.querySelector('#counters-section');
        let position = countersSection.getBoundingClientRect();
        if(position.bottom <= window.innerHeight){
            count()
        };
    };
    const contents = document.querySelector('#contents');
    const contentsDropup = document.querySelector('#contentsDropup')
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        contentsDropup.classList.add("showIt");
    } else {
        contentsDropup.classList.remove("showIt");
    }
})

// navbar shrink on scroll:

const navbar = document.querySelector('.navbar');
const brand = document.querySelector("#navbar-logo");
const navLink = document.querySelectorAll(".nav-link");


function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navbar.classList.add("nav-shrink")
    } else {
            navbar.classList.remove("nav-shrink")

    }
}

const count = ()=>{
    const counters = document.querySelectorAll('.counter');
    const speed = 50;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target/speed);
            if(count < target){
                counter.innerText = count + increment;
                setTimeout(() => {
                    updateCount()
                },25);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    })
}

