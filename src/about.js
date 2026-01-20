import { createElement, addNavigation } from "./functions";
import image1 from "./styles/assets/menu/sc2-1.webp";
import image2 from "./styles/assets/menu/sc2-2.webp";
import section4_1 from "./styles/assets/about/sc4-2.webp";
import section4_2 from "./styles/assets/about/sc4-1.webp";
import styles from "./styles/about.css";


const main = document.querySelector("main");

function createSection1() {
    main.appendChild(createElement("section", "", "section1"));
    main.querySelector(".section1").innerHTML =
    `<div class="section1-titleDiv section-titleDiv">
        <h1 class="section1-title">About Us</h1>
    </div>`;
}

function createSection2() {
    main.appendChild(createElement("section", "", "section2"));
    main.querySelector(".section2").innerHTML =
    `<div class="section2-informationDiv">
        <div class="section2-titleDiv section-titleDiv">
            <span class="section2-title section-title">Little About Us</span>
        </div>
        <div class="section2-sectionTitleDiv sectionTitleDiv">
            <span class="section2-sectionTitle sectionTitle">
                <span class="section2__sectionTitle-text sectionTitle-text">We Love Cooking</span>
            </span>
        </div>
        <div class="section2-textDiv">
            <p class="section2-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    </div>
    <div class="section2-imagesDiv">
        <img class="section2-image" src="${image1}">
        <img class="section2-image" src="${image2}">
    </div>`;
}

function createSection3() {
    main.appendChild(createElement("section", "", "section3"));
    main.querySelector(".section3").innerHTML =
    `<div class="section3-headDiv">
        <div class="seciton3-sectionTitleDiv sectionTitleDiv">
            <span class="section3-sectionTitle sectionTitle">
                <span class="section3__sectionTitle-text sectionTitle-text">Hello!</span>
            </span>
        </div>
        <div class="section3-titleDiv section-titleDiv">
            <span class="section3-title section-title">Why People Choose Us</span>
        </div>
    </div>
    <div class="section3-contentDiv">
        <div class="section3-informationDiv">
            <div class="offersDiv-left offersDiv">
                <div class="offerDiv">
                    <i class="fa-solid fa-leaf offer-icon"></i>
                    <span class="offer-title">Farm-to-Table Freshness</span>
                    <p class="offer-text">
                        We believe the foundation of a great dish is exceptional ingredients. 
                        Every day, we receive fresh, seasonal, and sustainably sourced produce, 
                        and herbs, ensuring vibrant flavors and the highest quality in every bite.
                    </p>
                </div>
                <div class="offerDiv">
                    <i class="fa-solid fa-couch offer-icon"></i>
                    <span class="offer-title">An Ambiance to Remember</span>
                    <p class="offer-text">
                        Dining with us is more than just a meal; it's an experience. 
                        Our thoughtfully designed interior blends modern elegance with cozy 
                        warmth, creating the perfect backdrop for any occasion—from romantic 
                        evenings and business lunches to joyful family celebrations.
                    </p>
                </div>
            </div>
            <div class="offersDiv-right offersDiv">
                <div class="offerDiv">
                    <i class="fa-solid fa-book-bookmark offer-icon"></i>
                    <span class="offer-title">Culinary Artistry</span>
                    <p class="offer-text">
                        Our award-winning chefs are passionate creators, not just cooks. 
                        They skillfully blend classic techniques with innovative ideas to 
                        craft a menu that surprises and delights. Each plate is presented 
                        as a work of art, designed to engage all your senses.
                    </p>
                </div>
                <div class="offerDiv">
                    <i class="fa-solid fa-heart offer-icon"></i>
                    <span class="offer-title">Impeccable, Heartfelt Service</span>
                    <p class="offer-text">
                        From the moment you step in, our attentive and knowledgeable 
                        staff is dedicated to making your visit perfect. We pride 
                        ourselves on providing seamless, warm, and personalized 
                        service, anticipating your needs to ensure a truly memorable 
                        and comfortable dining experience.
                    </p>
                </div>
            </div>
        </div>
        <div class="section3-imageDiv">123</div>
    </div>`;
}

function createSection4() {
    main.appendChild(createElement("section", "", "section4"));
    main.querySelector(".section4").innerHTML = 
    `<div class="section4-imagesDiv">
        <img class="section4-image" src="${section4_1}">
        <img class="section4-image" src="${section4_2}">
    </div>
    <div class="section4-informationDiv">
        <div class="section4-headDiv">
            <div class="section4-titleDiv section-titleDiv">
                <span class="section4-title section-title">Perfect Serving</span>
            </div>
            <div class="section4-sectionTitleDiv sectionTitleDiiv">
                <span class="section4-sectionTitle sectionTitle">
                    <span class="section4__sectionTitle-text sectionTitle-text">Brilliant Service</span>
                </span>
            </div>
        </div>
        <div class="section4-textDiv">
            <p class="section4-text">
                At the heart of our restaurant is a team dedicated to your complete 
                satisfaction. Our staff is trained to provide attentive, anticipatory 
                service with genuine warmth and professionalism. We strive to create a 
                seamless and memorable experience, ensuring every detail of your visit 
                is nothing short of excellent.
            </p>
        </div>
        <div class="section4-buttonDiv">
            <button class="section4-button button nav-menu" type="button">Know More</button>
        </div>
    </div>`;
}

export default function loadAboutPage() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    window.location.hash = "about";
    main.dataset.page = "about";
    main.innerHTML = "";
    createSection1();
    createSection2();
    createSection3();
    createSection4();
    addNavigation();
}