import style from "./styles/global.css"
import { activateButton } from "./functions";
import createNavBar from "./header-footer";
import loadHomePage from "./home";

window.location.hash = "Home";

createNavBar();
loadHomePage();