export default function(parent) {
    const container = document.createElement("div");
    container.classList.add("menu");
    const appetizers = baseLayout(Appetizers);
    const pasta = baseLayout(Pasta);
    const main = baseLayout(Main);
    const desserts = baseLayout(Desserts);
    const drinks = baseLayout(Drinks);
    container.appendChild(appetizers);
    container.appendChild(pasta);
    container.appendChild(main);
    container.appendChild(desserts);
    container.appendChild(drinks);
    parent.appendChild(container);
}

const item = (name, description) => {
    return {name, description};
};

const category = (name, itemOne, itemTwo) => {
    return { name, itemOne, itemTwo};
}

const arancini = item("Arancini Al Forno", "Crispy risotto balls stuffed with mozzarella, peas, and Bolognese sauce, baked to perfection.");
const caprese = item("Caprese Salad", "A classic Italian salad with fresh mozzarella, vine-ripened tomatoes, basil leaves, and drizzled with balsamic reduction.");
const Appetizers = category("Appetizers", arancini, caprese);
const linguini = item("Linguine alle Vongole", "Tender linguine pasta tossed with fresh clams, garlic, white wine, and a hint of chili flakes.");
const ravioli = item("Ravioli di Zucca", "Homemade butternut squash ravioli served in a sage and brown butter sauce, topped with toasted pine nuts.");
const Pasta = category("Pasta delights", linguini, ravioli);
const osso = item("Osso Buco Milanese", "Slow-braised veal shank simmered in a rich saffron-infused tomato sauce, served with creamy saffron risotto.");
const pesce = item("Pesce all'Acqua Pazza", 'Pan-seared catch of the day in a fragrant "crazy water" broth with tomatoes, olives, and capers.');
const Main = category("Main Courses", osso, pesce);
const tiramisu = item("Tiramisu", "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.");
const canoli = item("Cannoli Sicilliani", "Crispy pastry shells filled with sweet ricotta cheese, chocolate chips, and candied orange peel.");
const Desserts = category("Desserts", tiramisu, canoli);
const spritz = item("Limoncello Spritz", "A refreshing blend of Limoncello, Prosecco, and sparkling water, garnished with lemon slices.");
const espresso = item("Espresso", "A shot of strong Italian espresso served with a twist of lemon.");
const Drinks = category("Drinks", spritz, espresso);

const baseLayout = (category) => {
    const container = document.createElement("div");
    container.classList.add("category");
    const heading = document.createElement("h3");
    heading.textContent = category.name;
    container.appendChild(heading);
    const itemOne = document.createElement("div");
    itemOne.classList.add("item");
    const imgOne = document.createElement("img");
    imgOne.setAttribute("src", `${category.itemOne.name.toLowerCase()}.jpg`);
    itemOne.appendChild(imgOne);
    const titleOne = document.createElement("h4");
    titleOne.textContent = category.itemOne.name;
    const descOne = document.createElement("div");
    descOne.appendChild(titleOne);
    const descriptionOne = document.createElement("span");
    descriptionOne.textContent = `${category.itemOne.description}`;
    descOne.appendChild(descriptionOne);
    itemOne.appendChild(descOne);
    container.appendChild(itemOne);
    const itemTwo = document.createElement("div");
    itemTwo.classList.add("item");
    const imgTwo = document.createElement("img");
    imgTwo.setAttribute("src", `${category.itemTwo.name.toLowerCase()}.jpg`);
    const titleTwo = document.createElement("h4");
    titleTwo.textContent = category.itemTwo.name;
    const descTwo = document.createElement("div");
    descTwo.appendChild(titleTwo);
    const descriptionTwo = document.createElement("span");
    descriptionTwo.textContent = `${category.itemTwo.description}`;
    descTwo.appendChild(descriptionTwo)
    itemTwo.appendChild(descTwo);
    itemTwo.appendChild(imgTwo);
    container.appendChild(itemTwo);
    return container;
}
