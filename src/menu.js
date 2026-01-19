import { createElement, appendBySelector, addNavigation } from "./functions";
import styles from  "./styles/menu.css";
import section2image1 from "./styles/assets/menu/sc2-1.webp";
import section2image2 from "./styles/assets/menu/sc2-2.webp";
import recommends1 from "./styles/assets/menu/recommends1.webp"
import recommends2 from "./styles/assets/menu/recommends2.webp"
import recommends3 from "./styles/assets/menu/recommends3.webp"


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
            <img class="section2-image" src="${section2image1}">
            <img class="section2-image" src="${section2image2}">
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
                    <img class="section3__card-image" src="${recommends1}">
                </div>
                <div class="section3__card-titleDiv">
                    <span class="section3__card-title">Ice Cream</span>
                </div> 
            </div>
            <div class="section3-card">
                <div class="section3__card-imageDiv">
                    <img class="section3__card-image" src="${recommends2}">
                </div>
                <div class="section3__card-titleDiv">
                    <span class="section3__card-title">Coffee</span>
                </div> 
            </div>
            <div class="section3-card">
                <div class="section3__card-imageDiv">
                    <img class="section3__card-image" src="${recommends3}">
                </div>
                <div class="section3__card-titleDiv">
                    <span class="section3__card-title">Pasta</span>
                </div> 
            </div>  
        </div>
    </div>`;
}

export default function loadMenuPage() {
    main.dataset.page = "menu";
    main.innerHTML = "";
    createSection1();
    createSection2();
    createSection3();
    addNavigation();
}





/*
    appendElement(main, createElement("section", "home__main__section2", "sc2"));
    appendBySelector("#home__main__section2", createElement("div", "home__section2__information"));
    appendBySelector("#home__section2__information", createElement("h3", "home__section2__title", "", "Little About Us"));
    appendBySelector("#home__section2__information", createElement("p", "#home__section2__subText", "information__subText", "We invite you to visit"));
    appendBySelector("#home__section2__information", createElement("p", "home__section2__text", "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
    
    appendBySelector("#home__main__section2", createElement("div", "home__section2__images"));
    appendBySelector("#home__section2__images", createElement("img", "home__section2__image1", "img"));
    const image1 = main.querySelector("#home__section2__image1");
    image1.src = foodImage1;
    appendBySelector("#home__section2__images", createElement("img", "home__section2__image2", "img"));
    const image2 = main.querySelector("#home__section2__image2");
    image2.src = foodImage2;
*/