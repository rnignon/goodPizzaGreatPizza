import reloadHome from "./home";
import reloadMenu from "./menu";
import reloadInfo from "./info";
function createHeader() {
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.src = "img/pizza_logo.png";
    logo.alt = "Pizza logo";
    header.append(logo);
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const info = document.createElement("button");

    home.id = "homeButton";
    menu.id = "menuButton";
    info.id = "infoButton";

    home.textContent = "HOME";
    menu.textContent = "MENU";
    info.textContent = "INFO";

    home.addEventListener("click", () => {
        document.querySelector("section").innerHTML = "";
        document.querySelector("section").append(reloadHome());
    });
    menu.addEventListener("click", () => {
        document.querySelector("section").innerHTML = "";
        document.querySelector("section").append(reloadMenu());
    });
    info.addEventListener("click", () => {
        document.querySelector("section").innerHTML = "";
        document.querySelector("section").append(reloadInfo());
    });

    nav.append(home, menu, info);
    return nav;
}
function createSection () {
    const section = document.createElement("section");
    return section;
}
function createFooter() {
    const footer = document.createElement("footer");
    footer.textContent = "© 2019 Good Pizza, Great Pizza an experience created by TAPBLAZE";
    return footer;
}
function createWeb() {
    const content = document.createElement("div")
    content.id = "content";
    const header = createHeader();

    const main = document.createElement("main");
    main.id = "main";

    const nav = createNav();
    const section = createSection();
    const footer = createFooter();

    main.append(nav, section, footer);
    content.append(header, main);
    section.appendChild(reloadHome())
    return content;
}
export default createWeb;