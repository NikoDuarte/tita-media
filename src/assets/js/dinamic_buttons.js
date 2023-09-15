/****************************/
//? -> Funcionalidad menu principal
const labels = ["All", "Branding", "Web", "Photography", "App", "<i class='bx bx-search-alt bx-sm' ></i>"];

const buttonContainer = document.getElementById("button-container");

labels.forEach((label, index) => {
    const button = document.createElement("button");
    if (typeof label === "string") {
        button.innerHTML = label;
    } else {
        button.appendChild(label);
    }
    button.classList.add("button");
    buttonContainer.appendChild(button);
});

buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        console.log(`Hiciste clic en el botón: ${event.target.textContent}`);
    }
});

/****************************/
//? -> Funcionalidad submenu

const filteredItems = labels.filter((item) => typeof item === "string");

const submenuContainer = document.getElementById("submenu-buttons");

for (let i = 0; i < filteredItems.length - 1; i++) {
    const item = filteredItems[i];
    const button = document.createElement("button");
    button.textContent = item;
    submenuContainer.appendChild(button);
}