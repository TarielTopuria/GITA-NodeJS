const randomTexts = {
    en: [
        "You will achieve great things today.",
        "A surprise is waiting for you.",
        "Be patient, success is near.",
        "Take a break, you deserve it.",
        "Someone close to you has good news."
    ],
    ka: [
        "თქვენ დღეს დიდ წარმატებას მიაღწევთ.",
        "სიურპრიზი გელოდებათ.",
        "იყავით მომთმენი, წარმატება ახლოსაა.",
        "შეისვენეთ, თქვენ ამას იმსახურებთ.",
        "ვიღაცას კარგი ამბავი აქვს თქვენთვის."
    ]
};

initialize();

function initialize() {
    const selectedLanguage = loadLanguagePreference();
    updateText(selectedLanguage);

    document.getElementById('enBtn').addEventListener('click', () => {
        saveLanguagePreference('en');
        updateText('en');
    });

    document.getElementById('kaBtn').addEventListener('click', () => {
        saveLanguagePreference('ka');
        updateText('ka');
    });
}

function getRandomText(language) {
    const texts = randomTexts[language];
    return texts[Math.floor(Math.random() * texts.length)];
}

function saveLanguagePreference(language) {
    localStorage.setItem('selectedLanguage', language);
}

function loadLanguagePreference() {
    return localStorage.getItem('selectedLanguage') || 'en';
}

function updateText(language) {
    const randomText = getRandomText(language);
    document.getElementById('randomText').innerText = randomText;
}
