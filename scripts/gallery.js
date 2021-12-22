const pictures = [
    // pictures 1-35 - HALB Visit, Dec 13th, 2021
    {
        url: '../pics/HALB Visit/IMG_0591.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0594.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0595.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0596.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0597.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0598.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0599.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0600.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0601.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0603.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0604.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0605.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0606.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0607.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0608.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0609.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0610.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0611.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0612.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0613.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0614.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0615.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0616.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0617.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0618.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0619.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0620.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0621.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0624.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0625.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0626.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0628.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0629.jpg',
        alt: "HALB Visit",
    },
    {
        url: '../pics/HALB Visit/IMG_0630.jpg',
        alt: "HALB Visit",
    },
    // Dec 7th visit: pics 36-42
    {
        url: '../pics/Dec 7 Visit/HALBVisit12_7_21 (1).jpeg',
        alt: "Lomdei Visits HALB on December 7th"
    },
    {
        url: '../pics/Dec 7 Visit/HALBVisit12_7_21 (2).jpeg',
        alt: "Lomdei Visits HALB on December 7th"
    },
    {
        url: '../pics/Dec 7 Visit/HALBVisit12_7_21 (3).jpeg',
        alt: "Lomdei Visits HALB on December 7th"
    },
    {
        url:'../pics/Dec 7 Visit/HALBVisit12_7_21 (4).jpeg',
        alt: "Lomdei Visits HALB on December 7th"
    },
    {
        url: '../pics/Dec 7 Visit/HALBVisit12_7_21 (5).jpeg',
        alt: "Lomdei Visits HALB on December 7th"
    },
    {
        url: '../pics/Dec 7 Visit/HALBVisit12_7_21 (7).jpeg',
        alt: "Lomdei Visits HALB on December 7th"
    }
]

// Galleries:
const halbGallery = document.querySelector('#halb-container');
const dec7Gallery = document.querySelector('#dec7-container');
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
        if(index < 35){
            halbGallery.appendChild(pic);
        } else if(index < 42){
            dec7Gallery.appendChild(pic);
        }
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