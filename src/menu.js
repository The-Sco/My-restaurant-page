import { createElement, appendBySelector, addNavigation } from "./functions";
import dessert1 from "./styles/assets/menu/recommends1.webp"
import dessert2 from "./styles/assets/menu/recommends2.webp"
import dessert3 from "./styles/assets/popular dishes/dessert2.webp";
import dessert4 from "./styles/assets/popular dishes/dessert3.webp";
import dessert5 from "./styles/assets/popular dishes/dessert6.webp";
import dessert6 from "./styles/assets/menu/dessert6.webp"
import meal1 from "./styles/assets/menu/sc2-1.webp";
import meal2 from "./styles/assets/menu/sc2-2.webp";
import meal3 from "./styles/assets/menu/recommends3.webp"
import meal4 from "./styles/assets/popular dishes/meal1.webp";
import meal5 from "./styles/assets/popular dishes/meal2.webp";
import meal6 from "./styles/assets/popular dishes/meal4.webp";
import styles from  "./styles/menu.css";


const main = document.querySelector("main");

function createSection1() {
    main.appendChild(createElement("section", "", "section1"));
    main.querySelector(".section1").innerHTML =
    `<div class="section1-titleDiv section-titleDiv">
        <h1 class="section1-title">Our Menu</h1>
    </div>`;
}

function createSection2() {
    main.appendChild(createElement("section", "", "section2"));
    main.querySelector(".section2").innerHTML =
    `<div class="section2-contentDiv">
        <div class="section2-imagesDiv">
            <img class="section2-image" src="${meal1}">
            <img class="section2-image" src="${meal2}">
        </div>
        <div class="section2-informationDiv">
            <div class="section2-titleDiv section-titleDiv">
                <span class="section2-title section-title">Our Special Recipes</span>
            </div>
            <div class="section2-textDiv">
                <p class="section2-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error 
                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                </p>
            </div>
        </div>
    </div>`;
}

function createSection3() {
    main.appendChild(createElement("section", "", "section3"));
    main.querySelector(".section3").innerHTML =
    `<div class="section3-contentDiv">
        <div class="section3-titleDiv section-titleDiv">
            <span class="section3-title section-title">Our Recommends</span>
        </div>
        <div class="section3-cardsDiv">
            <div class="section3-card">
                <div class="section3__card-imageDiv">
                    <img class="section3__card-image" src="${dessert1}">
                </div>
                <div class="section3__card-titleDiv">
                    <span class="section3__card-title">Ice Cream</span>
                </div> 
            </div>
            <div class="section3-card">
                <div class="section3__card-imageDiv">
                    <img class="section3__card-image" src="${dessert2}">
                </div>
                <div class="section3__card-titleDiv">
                    <span class="section3__card-title">Coffee</span>
                </div> 
            </div>
            <div class="section3-card">
                <div class="section3__card-imageDiv">
                    <img class="section3__card-image" src="${meal3}">
                </div>
                <div class="section3__card-titleDiv">
                    <span class="section3__card-title">Pasta</span>
                </div> 
            </div>  
        </div>
    </div>`;
}

function createSection4() {
    main.appendChild(createElement("section", "", "section4"));
    main.querySelector(".section4").innerHTML = 
    `<div class="section4-titleDiv section-titleDiv">
        <span class="section4-title section-title">Check Our Tasty Menu</span>
    </div>`;
}

function createSection5() {
    main.appendChild(createElement("section", "", "section5 section-menu"));
    main.querySelector(".section5").innerHTML =
    `<div class="menu-contentDiv menu-contentDiv">
        <div class="menu__dishes-head menu-head">
            <div class="menu-sectionTitleDiv sectionTitleDiv">
                <span class='menu-sectionTitle sectionTitle'>
                    <span class='menu__sectionTitle-text sectionTitle-text'>Menu</span>
                </span>
            </div>
            <div class="menu-titleDiv section-titleDiv">
                <span class="menu-title section-title">Dishes</span>
            </div>
        </div>
        <div class="menu-lotsDiv">
            <div class="menu__lotsDiv-left menu__lotsDiv-contentDiv">
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${meal2}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Special</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">4,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${meal1}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Dish</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">6,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${meal3}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Pasta</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">8,99€</span>
                    </div>
                </div>
            </div>
            <div class="menu__lotsDiv-right menu__lotsDiv-contentDiv">
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${meal4}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Special Dish</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">4,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${meal5}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Special</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">5,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${meal6}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">:D :D :D</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">10,99€</span>
                    </div>
                </div>
            </div
        </div>
    </div>`;
}

function createSection6() {
    main.appendChild(createElement("section", "", "section6 section-menu"));
    main.querySelector(".section6").innerHTML =
    `<div class="menu-contentDiv menu-contentDiv">
        <div class="menu__desserts-head menu-head">
            <div class="menu-sectionTitleDiv sectionTitleDiv">
                <span class='menu-sectionTitle sectionTitle'>
                    <span class='menu__sectionTitle-text sectionTitle-text'>Menu</span>
                </span>
            </div>
            <div class="menu-titleDiv section-titleDiv">
                <span class="menu-title section-title">Desserts</span>
            </div>
        </div>
        <div class="menu-lotsDiv">
            <div class="menu__lotsDiv-left menu__lotsDiv-contentDiv">
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${dessert1}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Special</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">4,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${dessert2}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty dessert</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">6,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${dessert3}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Pancakes</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">8,99€</span>
                    </div>
                </div>
            </div>
            <div class="menu__lotsDiv-right menu__lotsDiv-contentDiv">
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${dessert4}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Special dessert</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">4,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${dessert5}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">Tasty Special</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">5,99€</span>
                    </div>
                </div>
                <div class="menu-lotDiv">
                    <div class="lotDiv-imageDiv">
                        <img class="lotDiv-image" src="${dessert6}">
                    </div>
                    <div class="lotDiv-informationDiv">
                        <span class="lotDiv-title">:D :D :D</span>
                        <span class="lotDiv-separator"></span>
                        <span class="lotDiv-price">10,99€</span>
                    </div>
                </div>
            </div
        </div>
    </div>`;
}

export default function loadMenuPage() {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    });
    window.location.hash = "menu";
    main.dataset.page = "menu";
    main.innerHTML = "";
    createSection1();
    createSection2();
    createSection3();
    createSection4();
    createSection5();
    createSection6();
}