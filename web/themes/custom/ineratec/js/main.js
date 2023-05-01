const videoParagraph = document.querySelector(".video-paragraph");
const ineratecBackgroundLayout = document.getElementById('ineratec-background-layout');
if(videoParagraph) {
    ineratecBackgroundLayout.classList.remove("radial-gradient-position-second");
    ineratecBackgroundLayout.classList.add("radial-gradient-position-first");
}else{
    ineratecBackgroundLayout.classList.remove("radial-gradient-position-first");
    ineratecBackgroundLayout.classList.add("radial-gradient-position-second");
}