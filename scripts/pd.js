const lomdeiAdvBtn = document.querySelector("#lomdeiAdvBtn");
const lomdeiAdvTxt = document.querySelector("#lomdeiAdvTxt");
const lomdeiAdvTxtAnchor = document.querySelector("#lomdeiAdvTxtAnchor")
const lomdeiAdvHideBtn = document.querySelector("#lomdeiAdvHideBtn");
const lomdeiAdvAnchor = document.querySelector("#lomdeiAdvAnchor");

lomdeiAdvBtn.addEventListener("click",()=>{
    lomdeiAdvTxt.classList.remove("hiddenTxt");
    lomdeiAdvTxtAnchor.scrollIntoView();
})

lomdeiAdvHideBtn.addEventListener("click",()=>{
    lomdeiAdvTxt.classList.add("hiddenTxt");
    lomdeiAdvAnchor.scrollIntoView();
})


const perLearnBtn = document.querySelector("#perLearnBtn");
const perLearnTxtAnchor = document.querySelector("#perLearnTxtAnchor");
const perLearnHideBtn = document.querySelectorAll(".perLearnHideBtn");
const bplInfoAnchor = document.querySelector("#bplInfoAnchor");

perLearnBtn.addEventListener("click",()=>{
    perLearnTxt.classList.remove("hiddenTxt");
    perLearnTxtAnchor.scrollIntoView();
})
perLearnHideBtn.forEach(element => {
    element.addEventListener("click",()=>{
        perLearnTxt.classList.add("hiddenTxt");
        bplInfoAnchor.scrollIntoView()
    })
});

const blendLearnBtn = document.querySelector("#blendLearnBtn");
const blendLearnTxt = document.querySelector("#blendLearnTxt")
const blendLearnAnchor = document.querySelector("#blendLearnTxtAnchor");
const blendLearnHideBtn = document.querySelector("#blendLearnHideBtn");
const blendLearnInfoAnchor = document.querySelector("#blendLearnInfoAnchor")

blendLearnBtn.addEventListener("click",()=>{
    blendLearnTxt.classList.remove("hiddenTxt");
    blendLearnAnchor.scrollIntoView();
})

blendLearnHideBtn.addEventListener("click",()=>{
    blendLearnTxt.classList.add("hiddenTxt");
    blendLearnInfoAnchor.scrollIntoView()
})

const resourcesBtn = document.querySelector("#resourcesBtn");
const resourcesTxt = document.querySelector("#resourcesTxt");
const resourcesHideBtn = document.querySelector('#resourcesHideBtn');
const resourcesTxtAnchor = document.querySelector("#resourcesTxtAnchor");
const resourcesAnchor = document.querySelector('#resourcesAnchor');

resourcesBtn.addEventListener("click", ()=>{
    resourcesTxt.classList.remove("hiddenTxt");
    resourcesTxtAnchor.scrollIntoView();
})

resourcesHideBtn.addEventListener('click', ()=>{
    resourcesTxt.classList.add("hiddenTxt");
    resourcesAnchor.scrollIntoView();
})


// // Loads the YouTube IFrame API JavaScript code.
// var tag = document.createElement("script")
// tag.src = "https://www.youtube.com/iframe_api"
// // Inserts YouTube JS code into the page.
// var firstScriptTag = document.getElementsByTagName("script")[0]
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// var player

// // onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("player", {
//     videoId: "LS-ErOKpO4E", // the ID of the video (mentioned above)
//     playerVars: {
//       autoplay: 1, // start automatically
//       controls: 0, // don't show the controls (we can't click them anyways)
//       modestbranding: 1, // show smaller logo
//       loop: 1, // loop when complete
//       playlist: "kNizPk7xBbs" // required for looping, matches the video ID
//     }
//   })
// }