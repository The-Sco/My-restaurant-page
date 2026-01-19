import style from "./styles/global.css"
import { addNavigation } from "./functions";
import createNavBar from "./header-footer";
import loadHomePage from "./home";
import loadMenuPage from "./menu"

window.location.hash = "home";



createNavBar();
loadMenuPage();
