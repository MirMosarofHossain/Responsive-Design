const nav2 = document.getElementById('nav2')
const menu = document.getElementById('menu')
let isHide = true;
menu.addEventListener('click', function () {
    if (isHide == true) {
        nav2.style = "display:block;"
        isHide = false;
        menu.style='background-color:white'
    }
    else{
        nav2.style = "display:none;"
        isHide = true;
        menu.style='background-color:#f44336'
    }
})

function removeSectionOnSmallScreen() {
    if (window.innerWidth >= 600) { 
        nav2.style = "display:none;"
        isHide = true;
        menu.style='background-color:#f44336'

    }
}

window.onload = removeSectionOnSmallScreen;
window.onresize = removeSectionOnSmallScreen;


