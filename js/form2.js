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
                <a href="#" class="flight-item" data-departure="${dep}" data-arrival="${arr}" data-time="${time}" data-price="${price}">
                    <span class="flight-text">Рейс: ${dep} - ${arr}</span>
                    <span class="flight-time">${time}</span>
                    <span class="flight-price">${price} Р</span>
                </a>
            `;
        }
    }

    const flightResults = document.getElementById('flightResults');
    flightResults.innerHTML = output || '<p>Рейсы не найдены.</p>';

    // Добавляем обработку клика на элементы
    const flightItems = document.querySelectorAll('.flight-item');
    flightItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const flightInfo = `Рейс: ${this.dataset.departure} - ${this.dataset.arrival} (${this.dataset.time})`;
            document.getElementById('selectedFlight').textContent = flightInfo;
            flightResults.style.display = 'none'; // Скрываем рейсы
            document.getElementById('bookingForm').style.display = 'block'; // Показываем форму
        });
    });
    document.getElementById('formDetails').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        document.getElementById('bookingForm').style.display = 'none'; // Скрываем форму
        document.getElementById('confirmation').style.display = 'block'; // Показываем блок с подтверждением
    });
}

