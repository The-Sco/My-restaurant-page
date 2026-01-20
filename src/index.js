import style from "./styles/global.css"
import createNavBar from "./header-footer";
import loadHomePage from "./home";


window.location.hash = "home";

createNavBar();
loadHomePage();