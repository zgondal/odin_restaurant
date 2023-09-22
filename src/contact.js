export default function(parent) {
    const container = document.createElement("div");
    container.classList.add("contact");
    const address = document.createElement("div");
    address.classList.add("address");
    address.innerHTML = '<table><tr><td>Address:</td><td>75 Beak Street Ground </td></tr><tr><td></td><td>Floor, New York, NY,</td></tr><tr><td></td><td> 10145</td></tr></table><br>Phone: +1 212-183-1638<br><br><span class="timings"><table><tr><td>Timings: </td><td>Monday</td><td>14:00 - 23:00</td></tr><tr><td></td><td>Tuesday</td><td>14:00 - 23:00</td></tr><tr><td></td><td>Wednesday</td><td>14:00 - 23:00</td></tr><tr><td></td><td>Thursday</td><td>14:00 - 23:00</td></tr><tr><td></td><td>Friday</td><td>16:00 - 02:30</td></tr><tr><td></td><td>Saturday</td><td>12:00 - 02:30</td></tr><tr><td></td><td>Sunday</td><td>12:00 - 23:00</td></tr></table></span>';
    container.appendChild(address);
    const map = document.createElement("img");
    map.classList.add("map");
    map.setAttribute("src", "./map.png");
    container.appendChild(map);
    parent.appendChild(container);
}