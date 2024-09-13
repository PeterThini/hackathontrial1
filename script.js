// Handle form submissions and local storage

// Example of storing appointments in localStorage
document.getElementById('appointment-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    if (confirm('Are you sure you want to book this appointment?')) {
        const clinic = document.getElementById('clinic').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push({ clinic, date, time });
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Display appointments
        displayAppointments();
    }
});

function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const list = document.getElementById('appointments-list');
    list.innerHTML = '';
    appointments.forEach(app => {
        const listItem = document.createElement('li');
        listItem.textContent = `${app.clinic} on ${app.date} at ${app.time}`;
        list.appendChild(listItem);
    });
}

// Initial display of appointments
displayAppointments();
