// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    greeting = document.getElementById('name'),
    greeting = document.getElementById('focus')

// Show Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format 
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}<span>:</span>`
}