// Index Page - the counters
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
            }, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
})

// navbar shrink on scroll:

const navbar = document.querySelector('.navbar');
const brand = document.querySelector("#navbar-logo");
const navLink = document.querySelectorAll(".nav-link");

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

window.onscroll = function(){
    if(width>975){
        scrollFunction()
    } 
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navbar.classList.add("nav-shrink")
    } else {
            navbar.classList.remove("nav-shrink")

    }
}
