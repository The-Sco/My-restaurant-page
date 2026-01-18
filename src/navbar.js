import { createElement, appendElement, appendBySelector} from "./functions";

const header = document.querySelector("header");

export default function createNavBar() {
    appendElement(header, createElement("div", "header-inner"));
    appendBySelector("#header-inner", createElement("div", "header-logoCont"));
    appendBySelector("#header-inner", createElement("nav", "header-nav"));

    appendBySelector("#header-logoCont", createElement("div", "header-logo", "", "", "<h4><span id='header-logoRed' class='header-logoSpan accentColor'>Your</span><span id='header-logoRegular' class='header-logoSpan'>Logo</span></h4>"));

    appendBySelector("#header-nav", createElement("ul", "", "nav", "", "<li><a href='#home' class='nav-button'>Home</a></li> <li><a href='#menu' class='nav-button'>Menu</a></li> <li><a href='#about' class='nav-button'>About</a></li>"));

}