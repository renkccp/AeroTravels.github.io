document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const departure = urlParams.get('departure');
    const arrival = urlParams.get('arrival');
    const departureDate = urlParams.get('departureDate');

    fetch('flights.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            displayFlights(xmlDoc, departure, arrival, departureDate);
        });
});

function displayFlights(xmlDoc, departure, arrival, departureDate) {
    const flights = xmlDoc.getElementsByTagName('flight');
    let output = '';

    for (let i = 0; i < flights.length; i++) {
        const dep = flights[i].getElementsByTagName('departure')[0].textContent;
        const arr = flights[i].getElementsByTagName('arrival')[0].textContent;
        const date = flights[i].getElementsByTagName('date')[0].textContent;
        const time = flights[i].getElementsByTagName('time')[0].textContent;
        const price = flights[i].getElementsByTagName('price')[0].textContent;

        if (dep === departure && arr === arrival && date === departureDate) {
            output += `
                <a href="#" class="flight-item">
        <span class="flight-text">Рейс: ${dep} - ${arr}</span>
        <span class="flight-time">${time}</span>
        <span class="flight-price">${price} Р</span>
    </a>
            `;
        }
    }

    const flightResults = document.getElementById('flightResults');
    flightResults.innerHTML = output || '<p>Рейсы не найдены.</p>';
}