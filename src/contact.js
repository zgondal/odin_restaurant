export default function(parent) {
    const container = document.createElement("div");
    container.classList.add("contact");
    const address = document.createElement("div");
    address.classList.add("address");
    address.innerHTML = "Address: 75 Beak Street Ground Floor<br>New York<br>NY<br>10145<br>Phone: +1 212-183-1638<br>Timings:<table><tr><th>Monday</th><td>14:00 - 23:00</td></tr><tr><th>Tuesday</th><td>14:00 - 23:00</td></tr><tr><th>Wednesday</th><td>14:00 - 23:00</td></tr><tr><th>Thursday</th><td>14:00 - 23:00</td></tr><tr><th>Friday</th><td>16:00 - 02:30</td></tr><tr><th>Saturday</th><td>12:00 - 02:30</td></tr><tr><th>Sunday</th><td>12:00 - 23:00</td></tr></table>"
    container.appendChild(address);
    const map = document.createElement("img");
    map.setAttribute("src", "")
}