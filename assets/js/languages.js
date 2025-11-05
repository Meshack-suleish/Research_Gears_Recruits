let displayData = [
    {
        title: 'Prefered Language',
        titleSw: 'Pendekeza Lugha',
        descr: 'Pick the language you vibe with most. Everything in the app—from menus to messages—will match your flow.',
        descrSw: 'Chagua lugha unayoelewa vizuri zaidi. Kila kitu kwenye app kitafuata mtiririko wako.'
    },
    {
        title: 'Choose your Gender',
        titleSw: 'Chagua Jinsia Yako',
        descr: 'Let us know how you identify. Helps us keep things personal, respectful, and just right for you.',
        descrSw: 'Tueleze jinsia yako ili kuboresha mawasiliano na kuhakikisha kila kitu kinakufaa.'
    },
    {
        title: 'Select Account Type',
        titleSw: 'Aina ya Akaunti',
        descr: 'Are you here to shop, sell, or do both? Pick your hustle and we’ll tailor the app to fit your grind.',
        descrSw: 'Wewe ni mnunuzi, muuzaji au yote mawili? Chagua njia yako ili app ikufae vilivyo.'
    },
    {
        title: 'Product Categories',
        titleSw: 'Pendekeza Bidhaa',
        descr: 'Tell us what you’re into—fashion, tech, beauty, etc. We’ll show you the good stuff first.',
        descrSw: 'Tuambie unapenda nini—mitindo, vifaa, urembo n.k. Tutaanza kukuonesha vitu vya maana kwanza.'
    },
    // {
    //     title: 'Setup Your Wallet',
    //     titleSw: 'Andaa Waleti Yako',
    //     descr: 'Create your in-app wallet to easily manage funds, shop smooth, and keep your transactions secure.',
    //     descrSw: 'Tengeneza waleti yako hapa ili kudhibiti pesa zako, kufanya manunuzi kwa urahisi na kwa usalama.'
    // }
];


// loads translations from translation.js , changing language logic

let translationsData = window.translationsData || {};
document.addEventListener('DOMContentLoaded', () => {
  initLanguages();
  highlightCurrentLanguage();
});

function initLanguages() {
  const lang = localStorage.getItem('lang');
  const elements = document.querySelectorAll('[data-key]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translationsData[lang] && translationsData[lang][key]) {
      el.textContent = translationsData[lang][key];
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  initLanguages();
  highlightCurrentLanguage();
}

function highlightCurrentLanguage() {
  const currentLang = localStorage.getItem('lang') || 'en';
  const choices = document.querySelectorAll('.languageRegion .lang-choice');

  choices.forEach(choice => {
    const checkIcon = choice.querySelector('.current');
    if (choice.getAttribute('data-lang') === currentLang) {
      checkIcon.style.display = 'inline-block';
      choice.classList.add('active');
    } else {
      checkIcon.style.display = 'none';
      choice.classList.remove('active');
    }
  });
}
