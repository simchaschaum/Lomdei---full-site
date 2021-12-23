import {pictures} from './pictures.js';

// Titles:
const halbTitle = document.querySelector('#halb-visit-title');
const dec7Title = document.querySelector('#dec7-title');
const halbVideoTitle = document.querySelector('#halb-video-title');


// Galleries:
const halbGallery = document.querySelector('#halb-container');
const halbVideoGallery = document.querySelector('#halb-videos');
const dec7Gallery = document.querySelector('#dec7-container');
const lightbox = document.querySelector('#lightbox');
const lightboxPic = document.querySelector('#lightboxPic');
const lightboxCap = document.querySelector('#modal-caption');

// Dropdown button:
const dropdown = document.querySelector('#gallery-dropdown');
const dropdownBtn = document.querySelector('#dropdownBtn');

// Dropdown button moves on scroll
window.onscroll = () => {
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        dropdownBtn.classList.add("show-low");
    } else {
        dropdownBtn.classList.remove("show-low");
    }
}


// Populate the gallery:
let currentPic = 0;
let currentEventIndex = 0;
let currentEvent = ""

function makeGallery(){
    pictures.forEach((eventObj,eventIndex) => {
        let e = Object.keys(pictures[eventIndex]);
        let title = pictures[eventIndex][e].title;
        if(e[0] === "halb"){
            halbTitle.textContent = title;
        } else if (e[0] === "dec7"){
            dec7Title.textContent = title;
        } else if (e[0] === "halbVideos"){
            halbVideoTitle.textContent = title;
        }
        let link = document.createElement("LI");
        let anchor = document.createElement("A");
        anchor.setAttribute("class","dropdown-item");
        anchor.setAttribute("href",`#${e[0]}-anchor`);
        anchor.textContent = pictures[eventIndex][e].shortTitle;
        link.appendChild(anchor);
        dropdown.appendChild(link);
        for(var item in eventObj){   
                eventObj[item].pics.forEach((a,index) => {
                    if(eventObj[item].video){
                        let vid = document.createElement("iframe");
                        vid.setAttribute("class", "gallery-video");
                        vid.setAttribute("loading","lazy");
                        vid.setAttribute("src", eventObj[item].pics[index].url);
                        vid.setAttribute("frameborder","0");
                        vid.setAttribute("allow","autoplay; fullscreen; picture-in-picture");
                        vid.setAttribute("allowfullscreen","");
                        vid.setAttribute("title", eventObj[item].pics[index].title);
                        let vidCap = document.createElement("p");
                        vidCap.textContent = eventObj[item].pics[index].alt;
                        let vidDiv = document.createElement("div");
                        vidDiv.setAttribute("class","video-div");
                        vidDiv.appendChild(vid);
                        vidDiv.appendChild(vidCap);
                        if(item === "halbVideos"){
                            halbVideoGallery.appendChild(vidDiv);
                        }   
                    } else {
                        let pic = document.createElement("IMG");
                        pic.setAttribute("src",eventObj[item].pics[index].url);
                        pic.setAttribute("alt",eventObj[item].pics[index].alt);
                        pic.setAttribute("loading","lazy");
                        pic.setAttribute("onclick",`openLightbox("${item}",${index},${eventIndex})`)
                        if(item === "halb"){
                            halbGallery.appendChild(pic);
                        } else if(item === "dec7"){
                            dec7Gallery.appendChild(pic);
                        }
                    }
                })
            }
    })
    
}
makeGallery();


function openLightbox(ev,num,eventInd){
    // KEY: ev = event (e.g. 'dec7' or 'halb'); num = the index of the picture in its array album; 
    // eventInd = the index of the album of the event the pic is from
    lightbox.style.display = "flex";
    //set the current pic and current event index to reference this picture when advancing the slides. 
    currentPic = num;
    currentEventIndex = eventInd;  
    currentEvent = ev;
    if(pictures[currentEventIndex][ev].video){
        lightboxPic.setAttribute("src",pictures[currentEventIndex][ev].pics[currentPic].altUrl);
    } else {
        lightboxPic.setAttribute("src",pictures[currentEventIndex][ev].pics[currentPic].url);
    }
    lightboxPic.setAttribute("alt",pictures[currentEventIndex][ev].pics[currentPic].alt);
    if(pictures[currentEventIndex][ev].pics[currentPic].caption){
        if(pictures[currentEventIndex][ev].video){
            let a = document.createElement("a");
            a.setAttribute("id","modal-caption");
            a.setAttribute("target","_blank");
            a.setAttribute("href",`${pictures[currentEventIndex][ev].pics[currentPic].url}`);
            a.textContent = "Click here to watch the video.";
            lightboxCap.appendChild(a);
        } else {
            lightboxCap.textContent = pictures[currentEventIndex][ev].pics[currentPic].caption
        }
    }
}

function closeLightbox(){
    lightbox.style.display = "none";
}

// Event listener for keypress to advance slides:
window.addEventListener('keydown', function (event) {
    if(lightbox.style.display === "flex"){
        if(event.key === "ArrowRight"){
            picAdvance("for")
        } else if (event.key === "ArrowLeft"){
            picAdvance("back")
        }
    }
  },true);

function picAdvance(adv){
    if(adv==="for"){
        if(currentPic===pictures[currentEventIndex][currentEvent].pics.length-1){
            currentPic = 0;
            if(currentEventIndex===pictures.length-1){
                currentEventIndex = 0;
            } else {
                currentEventIndex++;
            }
        } else {
            currentPic++
        }
        currentEvent = Object.keys(pictures[currentEventIndex]);
    } else {
        if(currentPic === 0){
            if(currentEventIndex === 0){
                currentEventIndex = pictures.length-1;
                currentEvent = Object.keys(pictures[currentEventIndex]);
            } else {
                currentEventIndex--;
                currentEvent = Object.keys(pictures[currentEventIndex]);
            }
            currentPic = pictures[currentEventIndex][currentEvent].pics.length-1
        } else {
            currentPic--
        }
    }
    if(pictures[currentEventIndex][currentEvent].video){
        lightboxPic.setAttribute("src",pictures[currentEventIndex][currentEvent].pics[currentPic].altUrl);
    } else {
        lightboxPic.setAttribute("src",pictures[currentEventIndex][currentEvent].pics[currentPic].url);
    }
    lightboxPic.setAttribute("alt",pictures[currentEventIndex][currentEvent].pics[currentPic].alt);
    if(pictures[currentEventIndex][currentEvent].pics[currentPic].caption){
        if(pictures[currentEventIndex][currentEvent].video){
            let a = document.createElement("a");
            a.setAttribute("id","modal-caption");
            a.setAttribute("target","_blank");
            a.setAttribute("href",`${pictures[currentEventIndex][currentEvent].pics[currentPic].url}`);
            a.textContent = "Click here to watch the video.";
            lightboxCap.textContent = "";
            lightboxCap.appendChild(a);
        } else {
            lightboxCap.textContent = pictures[currentEventIndex][currentEvent].pics[currentPic].caption
        }
    } else {
        lightboxCap.textContent = ""
    }
}

let fs = false;
function fullSize(){
    if(fs && screen.width>700){
        lightboxPic.style.height = "400px";
        lightboxPic.style.maxWidth = "60%";
        lightboxCap.style.display = "inline-block";
        fs = false;
    } else if (screen.width>700){
        lightboxPic.style.height = "100vh";
        lightboxPic.style.maxWidth = "100vw";
        lightboxCap.style.display = "none";
        fs = true;
    }
   
}

// Since this file is a module (type=module), every function created here only has module 
// scope unless I give it global scope here.
// see https://stackoverflow.com/questions/44590393/es6-modules-undefined-onclick-function-after-import
window.openLightbox = openLightbox;
window.fullSize = fullSize;
window.closeLightbox = closeLightbox;
window.picAdvance = picAdvance
