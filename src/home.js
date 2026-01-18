import { createElement, appendElement, appendBySelector } from "./functions";
import foodImage1 from "./styles/assets/two.png";
import foodImage2 from "./styles/assets/one.png";
import windowViewImage from "./styles/assets/cafe-view.jpg";

import meal1 from "./styles/assets/main courses/meal1.jpg";
import meal2 from "./styles/assets/main courses/meal2.jpg";
import meal4 from "./styles/assets/main courses/meal4.jpg";
import dessert2 from "./styles/assets/desserts/dessert2.jpg";
import dessert3 from "./styles/assets/desserts/dessert3.jpg";
import dessert6 from "./styles/assets/desserts/dessert6.jpg";


import styles from "./styles/home.css";

const main = document.querySelector("main");

export default function loadHomePage() {
    appendElement(main, createElement("section", "", "section1"));
    
    appendBySelector(".section1", createElement("img", "", "section1-image"));


    appendBySelector(".section1", createElement("div", "", "section1-textBlock"));
    appendBySelector(".section1-textBlock", createElement("h1", "", "section1-title", "", "<span class='section1-title'>Welcome to </span><span class='section1-title accentColor'>Food Paradise</span>"));
    appendBySelector(".section1-textBlock", createElement("button", "", "section1-button regText", "", "<span>Explore</span><span class='section1-buttonBold'>Menu</span>"));
    const section1_button = main.querySelector(".section1-button");
    section1_button.addEventListener("click", () => {
        console.log("done");
    });

    appendElement(main, createElement("section", "", "section2"));
    main.querySelector(".section2").innerHTML =
    `<div id='home__section2-imageDiv' class='section2-imageDiv'>
        <img id='home__section2-image' class='section2-image' src="${windowViewImage}">
    </div>

    <div id='home__section2-information' class='section2-information'>

        <div class='section2-sectionTitleDiv sectionTitleDiv'>
            <span class='section2-sectionTitle sectionTitle'>
                <span class='section2__sectionTitle-text sectionTitle-text'>About Us</span>
            </span>
        </div>

        <div id='home__section2-title' class='section2-titleDiv'>
            <h3 class="section2-title">We invite you to visit</h3>
        </div>

        <div id='home__section2-text' class='section2-textDiv'>
            <p class="section2__text-p section2_text-p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <p class="section2__text-p section2_text-p2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
        </div>

        <div id='home__section2-advantages' class='section2-advantagesDiv'>
            <div class='advantageDiv'>
                <span class='advantage-bold'>3+</span>
                <span class='advantage-regular regText'>Experience</span>
            </div>
            <div class='advantageDiv'>
                <h6 class='advantage-bold'>200+</h6>
                <span class='advantage-regular regText'>Daily Visitors</span>
            </div>
            <div class='advantageDiv'>
                <h6 class='advantage-bold'>100%</h6>
                <span class='advantage-regular regText'>Positive Feedback</span>
            </div>
        </div>

        <div id='home__section2-buttonDiv' class='section2-buttonDiv'>
            <button class="section2-button accentButton">Know more</button>
        </div>
    </div>
    `;

    appendElement(main, createElement("section", "", "section3"));
    main.querySelector(".section3").innerHTML = 
    `<div class='section3-sectionTitleDiv sectionTitleDiv'>
        <span class='section3-sectionTitle sectionTitle'
            <span class='section3__sectionTitle-text sectionTitle-text'>Special</span>
        </span>
    </div>
    <div class='section3-titleDiv'>
        <h4 class='section3-title font45'>Taste Our Popular Dishes<h4>
    </div>
    <div class='section3-dishesDiv '>
        <div class="cardDiv cardDiv1">
            <img class="cardImage" src="${meal1}">
            <span class="cardTitle">Pizza Mozzarella</span>
        </div>
        <div class="cardDiv cardDiv2">
            <img class="cardImage" src="${meal2}">
            <span class="cardTitle">Salad Ceasar</span>
        </div>
        <div class="cardDiv cardDiv3">
            <img class="cardImage" src="${dessert2}">
            <span class="cardTitle">Pancakes</span>
        </div>
        <div class="cardDiv cardDiv4">
            <img class="cardImage" src="${dessert3}">
            <span class="cardTitle">Sorbet</span>
        </div>
        <div class="cardDiv cardDiv5">
            <img class="cardImage" src="${meal4}">
            <span class="cardTitle">Pasta</span>
        </div>
        <div class="cardDiv cardDiv6">
            <img class="cardImage" src="${dessert6}">
            <span class="cardTitle">Strawberry Cheesecake</span>
        </div>
    </div>`;
    main.appendChild(createElement("section", "", "section4"));
    main.querySelector(".section4").innerHTML =
    `
    `
}
