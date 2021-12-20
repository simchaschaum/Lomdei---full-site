const pictures = [
    {
        url: '../pics/headshots/Simcha Schaum Headshot.jpg',
        alt: "Simcha Schaum's Headshot",
        caption: "Simcha Schaum made this website!"
    },
    {
        url: '../pics/headshots/Raphael Alter Headshot.jpeg',
        alt: "Raphael's Headshot",
        caption: "This guy runs the show."
    },
    {
        url: '../pics/lomdei classroom pic.jpg',
        alt: "Lomdei Classroom in Action"
    }
]

const gallery = document.querySelector('#gallery-container');
const lightbox = document.querySelector('#lightbox');
const lightboxPic = document.querySelector('#lightboxPic');
const lightboxCap = document.querySelector('#modal-caption');

let currentPic = 0;

function makeGallery(){
    pictures.forEach((item,index) => {
        let pic = document.createElement("IMG");
        pic.setAttribute("src",pictures[index].url);
        pic.setAttribute("alt",pictures[index].alt);
        pic.setAttribute("onclick",`openLightbox(${index})`)
        gallery.appendChild(pic);
    })
}
makeGallery();

function openLightbox(num){
    lightbox.style.display = "flex";
    currentPic = num;
    lightboxPic.setAttribute("src",pictures[currentPic].url);
    lightboxPic.setAttribute("alt",pictures[currentPic].alt);
    if(pictures[currentPic].caption){
        lightboxCap.textContent = pictures[currentPic].caption
    }
}

function closeLightbox(){
    lightbox.style.display = "none";
}

function picAdvance(adv){
    if(adv==="for"){
        if(currentPic===pictures.length-1){
            currentPic = 0
        } else {
            currentPic++
        }
    } else {
        if(currentPic === 0){
            currentPic = pictures.length-1
        } else {
            currentPic--
        }
    }
    lightboxPic.setAttribute("src",pictures[currentPic].url);
    lightboxPic.setAttribute("alt",pictures[currentPic].alt);
    if(pictures[currentPic].caption){
        lightboxCap.textContent = pictures[currentPic].caption
    } else {
        lightboxCap.textContent = ""
    }
}

function fullSize(){
    if( lightboxPic.style.height === "100vh"){
        lightboxPic.style.height = "400px";
        lightboxPic.style.maxWidth = "60%";
        document.querySelectorAll('.slide-arrow').forEach(item => item.style.display = "block");
        lightboxCap.style.display = "inline-block";
    } else {
        lightboxPic.style.height = "100vh";
        lightboxPic.style.maxWidth = "100vw";
        document.querySelectorAll('.slide-arrow').forEach(item => item.style.display = "none");
        lightboxCap.style.display = "none";
    }
   
}