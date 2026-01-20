import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";

export function createElement(tag, id="", classes="", text="", innerHTML="", href="") {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (classes) element.className = classes;
    if (text) element.textContent = text;
    if (innerHTML) element.innerHTML = innerHTML;
    if (href) element.href = href;
    return element;
}
export function appendElement(parent, element) {
    parent.appendChild(element);
}
export function appendBySelector(parentSelector, element) {
    parent = document.querySelector(parentSelector);
    parent.appendChild(element);
}

export function addButtosnActivation(clickedButton) {
    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach(button => {
        button.classList.remove("active");
    })
    clickedButton.classList.add("active");    
}

export function changeActiveButton() {
    const navButtons = document.querySelectorAll(".nav-button");
    const page = document.querySelector("main").dataset.page;
    navButtons.forEach(button => {
        button.classList.remove("active");
    })
    document.querySelector(`header .nav-${page}`).classList.add("active"); 
}

export function addNavigation() {
    const navHome = document.querySelectorAll("main .nav-home");
    if (navHome) {
        navHome.forEach(nav => {
            nav.addEventListener("click", () => {
                loadHomePage()
                changeActiveButton();
            });
        });
    }
    const navMenu = document.querySelectorAll("main .nav-menu");
    if (navMenu) {
        navMenu.forEach(nav => {
            nav.addEventListener("click", () => {
                loadMenuPage();
                changeActiveButton();
            });
        });
    }
    const navAbout = document.querySelectorAll("main .nav-about");
    if (navAbout) {
        navAbout.forEach(nav => {
            nav.addEventListener("click", () => {
                loadAboutPage();
                changeActiveButton();
            })
        })
    }
}

export function addHeaderNavigation() {
    document.querySelector("header .nav-home").addEventListener("click", () => {
        loadHomePage();
    })
    document.querySelector("header .nav-menu").addEventListener("click", () => {
        loadMenuPage();
    })
    document.querySelector("header .nav-about").addEventListener("click", () => {
        loadAboutPage();
    })
}

export function addFooterNavigation() {
    document.querySelector("footer .nav-home").addEventListener("click", () => {
        loadHomePage();
        changeActiveButton();
    })
    document.querySelector("footer .nav-menu").addEventListener("click", () => {
        loadMenuPage();
        changeActiveButton();
    })
    document.querySelector("footer .nav-about").addEventListener("click", () => {
        loadAboutPage();
        changeActiveButton();
    })
}