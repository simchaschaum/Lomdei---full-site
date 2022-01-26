// Scroll functions:
window.addEventListener("scroll",()=>{
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width>975){
        scrollFunction()
    };
    let countersSection = document.querySelector('#counters-section');
    let position = countersSection.getBoundingClientRect();
    if(position.bottom <= window.innerHeight){
        count()
    };
})


// navbar shrink on scroll:

const navbar = document.querySelector('.navbar');
const brand = document.querySelector("#navbar-logo");
const navLink = document.querySelectorAll(".nav-link");

// window.onscroll = function(){
//     let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     if(width>975){
//         scrollFunction()
//     } 
// }

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navbar.classList.add("nav-shrink")
    } else {
            navbar.classList.remove("nav-shrink")

    }
}

// About-Platform Page - the counters
// window.addEventListener("scroll",()=>{
//     let countersSection = document.querySelector('#counters-section');
//     let position = countersSection.getBoundingClientRect();
//     if(position.bottom <= window.innerHeight){
//         count()
//     }
// })

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

