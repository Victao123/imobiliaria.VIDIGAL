const menuButton = document.getElementById("menu-button");
const menuOverlay = document.querySelector(".menu-overflow");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".closed-menu");

const linkMenuItem = document.querySelectorAll(".link-menu-item");

const body = document.querySelector("body");
let initialScrollPosition = 0;

closeButton.addEventListener("click", () => {
    menuOverlay.style.display = "none";
    body.style.overflow = "auto";
    window.scrollTo(0, initialScrollPosition);
    menu.classList.remove("active");
});

for (let i = 0; i < linkMenuItem.length; i++) {   
    linkMenuItem[i].addEventListener("click", () => {
            menuOverlay.style.display = "none";
            body.style.overflow = "auto";
            window.scrollTo(0, initialScrollPosition);
            menu.classList.remove("active");
        });
}



menuButton.addEventListener("click", () => {
    initialScrollPosition = scrollY || document.documentElement.scrollTop;
    menuOverlay.style.display = 'block'
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    menu.classList.add("active");
});

centerMenu();
window.addEventListener("resize", centerMenu);

function centerMenu() {
    const menuHeight = menu.offsetHeight;
    const windowHeight = window.innerHeight;
    const topOffset = (windowHeight - menuHeight) / 2;
    menu.style.top = `${topOffset}px`;
}
