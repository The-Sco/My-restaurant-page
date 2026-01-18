export function createElement(tag, id="", classes="", text="", innerHTML="", href="") {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (classes) element.className = classes;
    if (text) element.textContent = text;
    if (innerHTML) element.innerHTML = innerHTML;
    if (href) element.href = href;
    return element;
}
export function appendElement(parent, element) {
    parent.appendChild(element);
}
export function appendBySelector(parentSelector, element) {
    parent = document.querySelector(parentSelector);
    parent.appendChild(element);
}

export function activateButton(clickedButton) {
    const navButtons = document.querySelectorAll(".navButton");
    navButtons.forEach(button => {
        button.classList.remove("active");
    })
    clickedButton.classList.add("active");
}