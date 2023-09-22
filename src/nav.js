export default function(parent) {
    const nav = document.createElement("nav")
    const ul = document.createElement("ul");
    const logo = document.createElement("img");
    logo.src = "./logo.png";
    nav.appendChild(logo);
    ul.id = "navbar";
    populateList(ul);
    nav.appendChild(ul);
    const firstChild = parent.firstChild;
    parent.insertBefore(nav, firstChild);
}

const populateList = function(parent) {
    const itemOne = document.createElement("li");
    const itemTwo = document.createElement("li");
    const itemThree = document.createElement("li");
    const home = document.createElement("button");
    home.textContent = "Home";
    // home.setAttribute("href", "");
    const menu = document.createElement("button");
    menu.textContent = "Menu";
    // menu.setAttribute("href", "");
    const contact = document.createElement("button");
    contact.textContent = "Contact";
    // contact.setAttribute("href", "")
    itemOne.appendChild(home);
    itemTwo.appendChild(menu);
    itemThree.appendChild(contact);
    parent.appendChild(itemOne);
    parent.appendChild(itemTwo);
    parent.appendChild(itemThree);
};