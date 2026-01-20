import { addButtosnActivation, addHeaderNavigation, addFooterNavigation, createElement, appendElement, appendBySelector} from "./functions";

const header = document.querySelector("header");

function createNavBar() {
    appendElement(header, createElement("div", "header-inner"));
    appendBySelector("#header-inner", createElement("div", "header-logoCont"));
    appendBySelector("#header-inner", createElement("nav", "header-nav"));

    appendBySelector("#header-logoCont", createElement("div", "header-logo", "", "", "<h4><span id='header-logoRed' class='header-logoSpan accentColor'>Your</span><span id='header-logoRegular' class='header-logoSpan'>Logo</span></h4>"));

    appendBySelector("#header-nav", createElement("ul", "", "nav", "", "<li><a href='#home' class='nav-button nav-home active'>Home</a></li> <li><a href='#menu' class='nav-button nav-menu'>Menu</a></li> <li><a href='#about' class='nav-button nav-about'>About</a></li>"));

    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            addButtosnActivation(e.target);
        })
    })
}

function createFooter() {
    document.querySelector("footer").innerHTML =

    `<hr/>
    <div class="footer-contentDiv">
        <div class="footer-navDiv">
            <span class="footer-title">Quick Links</span>
            <div class="footer-linksDiv">
                <ul class="footer-linksUl">
                    <li class="footer-link"><a class="footer-link-a nav-home" href="#home">Home</a></li>
                    <li class="footer-link"><a class="footer-link-a nav-menu" href="#menu">Menu</a></li>
                    <li class="footer-link"><a class="footer-link-a nav-about" href="#about-us">About Us</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-navDiv">
            <span class="footer-title">Resourses</span>
            <div class="footer-linksDiv">
                <ul class="footer-linksUl">
                    <li class="footer-link"><a class="footer-link-a" href="#">Help Center</a></li>
                    <li class="footer-link"><a class="footer-link-a" href="#">Terms & Conditions</a></li>
                    <li class="footer-link"><a class="footer-link-a" href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-navDiv">
            <span class="footer-title">Contact Info</span>
            <div class="footer-linksDiv">
                <ul class="footer-linksUl">
                    <li class="footer-link"><span><i class="fa-solid fa-phone"></i><a class="footer-link-a" href="#">123456</a></span></li>
                    <li class="footer-link"><span><i class="fa-regular fa-envelope"></i><a class="footer-link-a" href="#">myemail000@gmail.com</a></span></li>
                    <li class="footer-link"><span><i class="fa-solid fa-location-dot"></i><a class="footer-link-a" href="#">Moon</a><span></li>
                </ul>
            </div>
        </div>
    </div>`;
}

export default function loadHeaderAndFooter() {
    createNavBar();
    createFooter();
    addHeaderNavigation();
    addFooterNavigation();
}