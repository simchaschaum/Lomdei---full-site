// Videos Page - table of contents
const contents = document.querySelector('#contents');
const contentsDropup = document.querySelector('#contentsDropup')


window.onscroll = () => {
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        contentsDropup.classList.add("showIt");
    } else {
        contentsDropup.classList.remove("showIt");
    }
}