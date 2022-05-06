const body = document.querySelector("body");
const list = document.querySelector("ul");
const radioButtons = document.querySelectorAll("input");
const menu = document.querySelector("nav");

menu.addEventListener("mousemove", () => listMenu.classList.add("toggle-list"));
menu.addEventListener("mouseout", () => listMenu.classList.remove("toggle-list"));

const addTextToBody = (text) => {
    const textColor = document.createElement("h1");
    textColor.textContent = text;
    body.append(textColor);
}

const toggleBackgroundColor = (e) => {
    body.classList.forEach(item => {
        if (item.startsWith("list")) {
            body.classList.remove(item);
        };
    });
    body.querySelectorAll("h1").forEach(e => e.remove());

    switch (e.target.value) {
        case "grey":
            body.classList.add("list-color-grey");
            addTextToBody("Grijs");
            break;
        case "orange":
            body.classList.add("list-color-orange");
            addTextToBody("Oranje");
            break;
        case "blue":
            body.classList.add("list-color-blue");
            addTextToBody("Blauw");
            break;
        case "red":
            body.classList.add("list-color-red");
            addTextToBody("Rood");
            break;
        case "green":
            body.classList.add("list-color-green");
            addTextToBody("Groen");
            break;
        default:
            body.classList.add("list-color-grey");
            break;
    }
}

radioButtons.forEach(input => input.addEventListener("click", toggleBackgroundColor));
