import { createElement, appendBySelector, addNavigation } from "./functions";
import windowViewImage from "./styles/assets/cafe-view.webp";
import meal1 from "./styles/assets/popular dishes/meal1.webp";
import meal2 from "./styles/assets/popular dishes/meal2.webp";
import meal4 from "./styles/assets/popular dishes/meal4.webp";
import dessert2 from "./styles/assets/popular dishes/dessert2.webp";
import dessert3 from "./styles/assets/popular dishes/dessert3.webp";
import dessert6 from "./styles/assets/popular dishes/dessert6.webp";
import styles from "./styles/home.css";


const main = document.querySelector("main");

function createSection1() {
    main.appendChild(createElement("section", "", "section1"));

    appendBySelector(".section1", createElement("div", "", "section1-textBlock"));
    appendBySelector(".section1-textBlock", createElement("h1", "", "section1-title", "", "<span class='section1-title'>Welcome to </span><span class='section1-title accentColor'>Food Paradise</span>"));
    appendBySelector(".section1-textBlock", createElement("span", "", "section1-subTitle", "Delivering great food for more than 3 years!"))
    appendBySelector(".section1-textBlock", createElement("button", "", "section1-button button nav-menu", "", "<span>Explore </span><span class='section1-buttonBold'>Menu</span>"));
}

function createSection2() {
    main.appendChild(createElement("section", "", "section2"));
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

        <div id='home__section2-title' class='section2-titleDiv section-titleDiv'>
            <span class="section2-title section-title">We invite you to visit</span>
        </div>

        <div id='home__section2-text' class='section2-textDiv'>
            <p class="section2__text-p section2_text-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p class="section2__text-p section2_text-p2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>

        <div id='home__section2-advantages' class='section2-advantagesDiv'>
            <div class='advantageDiv'>
                <span class='advantage-bold'>3+</span>
                <span class='advantage-regular regText'>Experience</span>
            </div>
            <div class='advantageDiv'>
                <span class='advantage-bold'>200+</span>
                <span class='advantage-regular regText'>Daily Visitors</span>
            </div>
            <div class='advantageDiv'>
                <span class='advantage-bold'>100%</span>
                <span class='advantage-regular regText'>Positive Feedback</span>
            </div>
        </div>

        <div id='home__section2-buttonDiv' class='section2-buttonDiv'>
            <button class="section2-button accentButton nav-menu">Know more</button>
        </div>
    </div>`;
}

function createSection3() {
    main.appendChild(createElement("section", "", "section3"));
    main.querySelector(".section3").innerHTML = 
    `<div class='section3-sectionTitleDiv sectionTitleDiv'>
        <span class='section3-sectionTitle sectionTitle'
            <span class='section3__sectionTitle-text sectionTitle-text'>Special</span>
        </span>
    </div>
    <div class='section3-titleDiv section-titleDiv'>
        <span class='section3-title section-title'>Taste Our Popular Dishes<span>
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
}

function createSection4() {
    main.appendChild(createElement("section", "", "section4"));
    main.querySelector(".section4").innerHTML =
    `<div class="section4-leftDiv">
        <div class="section4__leftDiv-textBlock">
            <div class='section4-sectionTitleDiv sectionTitleDiv'>
                <span class='section4-sectionTitle sectionTitle'
                    <span class='section4__sectionTitle-text sectionTitle-text'>About Us</span>
                </span>
            </div>
            <div class="section4__leftDiv-titleDiv section-titleDiv">
                <span class="section4__leftDiv-title section-title">Working Hours</span>
            </div>
            <div class="section4__leftDiv-subContent">
                <div class="section4__leftDidv-buttonDiv">
                    <button type="button" class="section4__leftDiv-button accentButton">Reservation</button>
                </div>
                <div class="section4__leftDiv-contactUsDiv">
                    <a href="#" class="section4__leftDiv-contactUs">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
    <div class="section4-rightDiv">
        <div class="section4__rightDiv-textBlock">
            <div class="section4__rightDiv-hoursDiv">
                <div class="section4__rightdiv-hours1 hoursDiv">
                    <span class="hours-title">Monday To Firday</span>
                    <span class="hours-time">11 00</span>
                    <spam class="hours-time">10 00</span>
                </div>
                <div class="section4__rightDiv-hours2 hoursDiv">
                    <span class="hours-title">Saturday To Sunday</span>
                    <span class="hours-time">11 00</span>
                    <spam class="hours-time">10 00</span>
                </div>
            </div>
        </div>
    </div>`;
}

function createSection5() {
    main.appendChild(createElement("section", "", "section5"));
    main.querySelector(".section5").innerHTML =
    `<div class="section5-offersDiv">
        <div class="offerDiv">
            <span class="offer-title">200+</span>
            <span class="offer-text">Visitors Daily</span>
        </div>
        <div class="offerDiv">
            <span class="offer-title">100%</span>
            <span class="offer-text">Positive Reviewsv</span>
        </div>
        <div class="offerDiv">
            <span class="offer-title">3+</span>
            <span class="offer-text">Experience</span>
        </div>
        <div class="offerDiv">
            <span class="offer-title">40+</span>
            <span class="offer-text">Awards</span>
        </div>
    </div>`;
}

export default function loadHomePage() {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    });
    window.location.hash = "home";
    main.dataset.page = "home";
    main.innerHTML = "";
    createSection1();
    createSection2();
    createSection3();
    createSection4();
    createSection5();
    addNavigation();
}
