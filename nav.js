var item = 2;
function navClose(shift) {
    document.getElementById("main-nav").classList.add("main-nav-closed");
    document.getElementById("main-nav-hamburger").classList.remove("main-nav-hamburger-hide");
    document.getElementById("main-nav-close-btn").classList.add("main-nav-close-btn-hide");
    if (shift == 1) {
        document.getElementById("main-nav-list").className = "main-nav-bar-about";
        document.getElementById("main-nav-about").classList.remove("main-nav-item-hidden");
        document.querySelectorAll("ul#main-nav-list > li:not(#main-nav-about)").forEach(
            element => {
                element.classList.add("main-nav-item-hidden");
            }
        );
        item = 1;
    }
    else if (shift == 2) {
        document.getElementById("main-nav-list").className = "main-nav-bar-center";
        document.getElementById("main-nav-menu").classList.remove("main-nav-item-hidden");
        document.querySelectorAll("ul#main-nav-list > li:not(#main-nav-menu)").forEach(
            element => {
                element.classList.add("main-nav-item-hidden");
            }
        );
        item = 2;
    }
    else if (shift == 3) {
        document.getElementById("main-nav-list").className = "main-nav-bar-contact";
        document.getElementById("main-nav-contact").classList.remove("main-nav-item-hidden");
        document.querySelectorAll("ul#main-nav-list > li:not(#main-nav-contact)").forEach(
            element => {
                element.classList.add("main-nav-item-hidden");
            }
        );
        item = 3;
    }
    else {
        navClose(item);
    }
}
function navOpen() {
    document.getElementById("main-nav").classList.remove("main-nav-closed");
    document.getElementById("main-nav-list").classList.remove("main-nav-bar-about");
    document.getElementById("main-nav-list").classList.remove("main-nav-bar-contact");
    document.getElementById("main-nav-hamburger").classList.add("main-nav-hamburger-hide");
    document.getElementById("main-nav-close-btn").classList.remove("main-nav-close-btn-hide");
    [...document.getElementsByClassName("main-nav-item")].forEach(
        element => {
            element.classList.remove("main-nav-item-hidden");
        }
    );
}