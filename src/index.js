import style from "./styles/global.css"
import { activateButton } from "./functions";
import createNavBar from "./navbar";
import loadHomePage from "./home";

window.location.hash = "Home";

createNavBar();
loadHomePage();