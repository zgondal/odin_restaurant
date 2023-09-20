export default function(parent) {
    const home = document.createElement("div");
    home.classList.add("main");
    createHomeScreen(home);
    parent.appendChild(home);
}

const createHomeScreen = function(parent) {
    const span = document.createElement("span");
    span.textContent = "Indulge in a world of flavors, where every dish tells a story. Our passion for exquisite cuisine is reflected in every plate we serve. Whether you're here for a romantic dinner, a family celebration, or a quick bite with friends, Luigi's is your destination for exceptional dining.";
    const heading = document.createElement("h4");
    heading.textContent = "Experience Culinary Delights";
    const greeting = document.createElement("h1");
    greeting.textContent = "Welcome to Luigi's";
    const bottomText = document.createElement("div");
    bottomText.classList.add("bottom");
    bottomText.appendChild(heading);
    bottomText.appendChild(span);
    parent.appendChild(greeting);
    parent.appendChild(bottomText);
}