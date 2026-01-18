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
