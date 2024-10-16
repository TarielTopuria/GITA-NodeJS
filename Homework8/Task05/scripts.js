const horoscopes = [
    "You will find unexpected fortune today.",
    "A new opportunity will present itself.",
    "Today is a good day for self-reflection.",
    "You will meet someone who changes your perspective.",
    "An old friend may reconnect with you today.",
    "Your hard work will soon pay off.",
    "Take time to appreciate the little things.",
    "Today, you will feel more energized and focused.",
    "A challenge may arise, but you will overcome it.",
    "This is a good day to start something new."
];

function initializeHoroscopes() {
    if (!localStorage.getItem('horoscopes')) {
        localStorage.setItem('horoscopes', JSON.stringify(horoscopes));
    }
}

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function displayHoroscope() {
    initializeHoroscopes();
    const storedHoroscopes = JSON.parse(localStorage.getItem('horoscopes'));
    
    const dayOfYear = getDayOfYear();
    const horoscopeIndex = dayOfYear % storedHoroscopes.length;

    const todayHoroscope = storedHoroscopes[horoscopeIndex];
    document.getElementById('horoscope').innerText = todayHoroscope;
}

displayHoroscope();
