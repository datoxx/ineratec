const goals = document.querySelector(".goals");
const header = document.getElementById('header');
const menu = document.getElementById('menu-container');
const burgerIcon = document.getElementById('burger-icon');
const closingIcon = document.getElementById('close-menu');
const btnChildrenMenu = document.getElementById('btn-children-menu');
const btnParentMenu = document.getElementById('btn-parent-menu');
const childrenMenu = document.getElementById('children-menu');
const closeBtnChildrenMenu = document.getElementById('close-btn-children-menu');
const body = document.getElementsByTagName('body');
const desktopLanguage = document.getElementById('desktop-language');
const desktopLanguageItem = document.getElementById('desktop-language-item');
const choosen_lang = document.getElementById("choosen_lang");
const languageLink=document.querySelectorAll('.language-link')


let timer;
let screenWidth;
body[0].setAttribute("class", "");

const lang_select = () => {
    const lang = window.location.pathname.split("/")[1];
    if (lang.toLowerCase() == 'de') {
        choosen_lang.textContent = 'DE';      
    }
    else {
        choosen_lang.textContent = 'EN'; 
    }
}
lang_select();





if (desktopLanguage) {
    desktopLanguage.addEventListener("click", () => {
        desktopLanguageItem.classList.toggle("hidden");
    })
}

if (burgerIcon) {
    burgerIcon.addEventListener("click", () => {
        menu.classList.remove("hidden");
        header.classList.remove("absolute");
        menu.classList.add("flex");
        body[0].classList.add("overflow-y-hidden");
    })
}

if (closingIcon) {
    closingIcon.addEventListener("click", () => {
        menu.classList.add("hidden");
        header.classList.add("absolute");
        menu.classList.remove("flex");
        body[0].classList.remove("overflow-y-hidden");
    })
}

goals.addEventListener("mouseover", () => {
    if (screenWidth < 1025) return;
    childrenMenu.classList.remove("hidden");
    clearTimeout(timer);
});

childrenMenu.addEventListener("mouseover", function () {
    if (screenWidth < 1025) return;
    childrenMenu.classList.remove("hidden");
    childrenMenu.classList.add("check");
});

goals.addEventListener("mouseout", () => {
    if (screenWidth < 1025) return;
    timer = setTimeout(function () {
        if (!childrenMenu.classList.contains("check")) {
            childrenMenu.classList.add("hidden");
        }
    }, 300);
});

childrenMenu.addEventListener("mouseout", function () {
    if (screenWidth < 1025) return;
    childrenMenu.classList.add("hidden");
    childrenMenu.classList.remove("check");

});

if (btnChildrenMenu) {
    btnChildrenMenu.addEventListener("click", () => {
        if (screenWidth > 1025) return;
        childrenMenu.classList.remove("hidden");
    })
}

if (btnParentMenu) {
    btnParentMenu.addEventListener("click", () => {
        if (screenWidth > 1025) return;
        childrenMenu.classList.remove("hidden");
    })
}



if (closeBtnChildrenMenu) {
    closeBtnChildrenMenu.addEventListener("click", () => {
        if (screenWidth > 1025) return;
        childrenMenu.classList.add("hidden");
    })
}

        


window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    screenWidth = window.innerWidth;
    if (screenWidth > 1025) {
        body[0].classList.remove("overflow-y-hidden");
    }

    languageLink.forEach( p =>{ 
        if(screenWidth < 1025 ) {         
            if(p.hreflang== 'de'){
                p.textContent = 'Deutsch'
            }else{
                p.textContent = 'English'
            }          
        }else{
            if(p.hreflang== 'de'){
                p.textContent = 'DE'
            }else{
                p.textContent = 'EN'
            }  
        }
    })
};
