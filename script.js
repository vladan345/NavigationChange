var arrows = document.querySelector(".arrows");
var background = document.querySelector("header");
var links = document.getElementsByClassName("link");

for (i=0; i < links.length; i++) {
    
    links[i].addEventListener("click", promeni, false);
}

function promeni(event) {
    
    if (event.target === links[0]) {
        links[0].classList.add("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        arrows.style.left = "0";
        background.style.backgroundImage = "url(img/1.jpg)";
    } 
    else if (event.target === links[1]) {
        links[0].classList.remove("active");
        links[1].classList.add("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        arrows.style.left = "150px";
        background.style.backgroundImage = "url(img/2.jpg)";
    }
    else if (event.target === links[2]) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.add("active");
        links[3].classList.remove("active");
        arrows.style.left = "300px";
        background.style.backgroundImage = "url(img/3.jpg)";
    }
    else if (event.target === links[3]) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.add("active");
        arrows.style.left = "450px";
        background.style.backgroundImage = "url(img/4.jpg)";
    }
    
}