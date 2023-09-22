import createNav from "./nav.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

console.log("webpack is running");
const content = document.querySelector(".content");
const body = document.querySelector("body");

const onPageLoad = () => {
    createNav(body);
    createHome(content);
    const nav = document.querySelector("#navbar");
    // console.log(navLinks);
    nav.addEventListener("click", function(event) {
        if (event.target.textContent === "Home") {
            content.innerHTML = "";
            createHome(content);
            console.log("home button clicked");
        };
        if (event.target.textContent === "Menu") {
            content.innerHTML = "";
            createMenu(content);
            console.log("menu button clicked");
        };
        if (event.target.textContent === "Contact") {
            content.innerHTML = "";
            createContact(content);
            console.log("contact button clicked");
        };
    });
}
document.addEventListener("DOMContentLoaded", onPageLoad);