const body = document.querySelector("body");
const list = document.querySelector("ul");
const radioButtons = document.querySelectorAll("input");
const menu = document.querySelector("nav");

menu.addEventListener("mousemove", () => {
    list.classList.add("toggle-list");
});

menu.addEventListener("mouseout", () => {
    list.classList.remove("toggle-list");
});

const textColor = document.createElement("h1");
body.append(textColor);

radioButtons.forEach(input => {
    input.addEventListener("click", e => {
        list.classList.remove("toggle-list");
        if (e.target.matches("input[value=grey]")) {
            body.classList.add("list-color-grey");
            body.classList.remove("list-color-orange", "list-color-blue", "list-color-red", "list-color-green");
            textColor.textContent = "Grijs";
        } else if (e.target.matches("input[value=orange]")) {
            body.classList.add("list-color-orange");
            body.classList.remove("list-color-grey", "list-color-blue", "list-color-red", "list-color-green");
            textColor.textContent = "Oranje";
        } else if (e.target.matches("input[value=blue]")) {
            body.classList.add("list-color-blue");
            body.classList.remove("list-color-grey", "list-color-orange", "list-color-red", "list-color-green");
            textColor.textContent = "Blauw";
        } else if (e.target.matches("input[value=red]")) {
            body.classList.add("list-color-red");
            body.classList.remove("list-color-grey", "list-color-orange", "list-color-blue", "list-color-green");
            textColor.textContent = "Rood";
        } else if (e.target.matches("input[value=green]")) {
            body.classList.add("list-color-green");
            body.classList.remove("list-color-grey", "list-color-orange", "list-color-blue", "list-color-red");
            textColor.textContent = "Groen";
        };
    });
});
