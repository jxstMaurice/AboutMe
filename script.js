

document.addEventListener('DOMContentLoaded', function() {
    // User birthdate for age calculation
    const birthdate = '2007-01-31';

    function calculateAge(birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    function updateAge() {
        const ageElement = document.getElementById('age');
        if (ageElement) {
            ageElement.textContent = calculateAge(birthdate);
        }
    }

    updateAge();
    setInterval(updateAge, 86_400_000);

    // Translations for multilingual support
    const translations = {
        en: {
            aboutMe: "About Me",
            name: "Name",
            age: "Age",
            yearsOld: "years old",
            nationality: "Nationality",
            austria: "Austria",
            gender: "Gender",
            male: "Male",
            sexuality: "Sexuality",
            bisexual: "Bisexual",
            endCredits: "The End & Credits",
            usefulButtons: "Useful Buttons !!!"
        },
        de: {
            aboutMe: "Über Mich",
            name: "Name",
            age: "Alter",
            yearsOld: "Jahre alt",
            nationality: "Nationalität",
            austria: "Österreich",
            gender: "Geschlecht",
            male: "Männlich",
            sexuality: "Sexualität",
            bisexual: "Bisexuell",
            endCredits: "Das Ende & Credits",
            usefulButtons: "Nützliche Buttons !!!"
        }
    };

    let currentLang = 'en';

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.classList.add('active');
        if (!langToggleBtn.hasAttribute('data-current-lang')) {
            langToggleBtn.setAttribute('data-current-lang', 'en');
        }
        const initialLang = langToggleBtn.getAttribute('data-current-lang');
        updateLanguage(initialLang);
    }

    function updateLanguage(lang) {
        currentLang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.classList.add('active');
            langToggleBtn.setAttribute('data-current-lang', lang);
            langToggleBtn.textContent = lang === 'en' ? 'Deutsch' : 'English';
        }
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', function() {
            const currentLang = this.getAttribute('data-current-lang');
            const newLang = currentLang === 'en' ? 'de' : 'en';
            updateLanguage(newLang);
        });
    }
});

// Open link in new tab
function goto(link){
    window.open(link, '_blank');
}
