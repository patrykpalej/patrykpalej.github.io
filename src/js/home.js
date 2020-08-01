// "use strict";

// --- 0. Manage local storage
if (localStorage.getItem('siteLanguage')) {
1
} else {
  localStorage.setItem('siteLanguage', 'PL')
}

// --- I. Initialize page---
// 1. Define elements 
// a) 'About' section
 let header = document.querySelector('.about__header')
 let subheader = document.querySelector('.about__subheader')
 let description = document.querySelector('.about__description');

 // b) Navigation
 let navigationElements = document.querySelectorAll('.navigation__text')
 
 // c) Contact
 let contactHeader = document.querySelector('.contact__header')
 let contactText = document.querySelector('.contact__text')
 let contactEmail = document.querySelector('.contact__email')
 // d) Language buttons
 let buttonPlInit = document.querySelector('.language__button--pl');
 let buttonEngInit = document.querySelector('.language__button--eng');


// 2. Decide based on language
let homeUrl = ''
let initialPlFlagUrl = ''
let initialEngFlagUrl = ''

 if (localStorage.getItem('siteLanguage') == 'ENG') {
     homeUrl = 'assets/content/home-ENG.json';
     initialPlFlagUrl = "url('../../assets/img/flags/flag_pl.svg')";
     initialEngFlagUrl = "url('../../assets/img/flags/flag_eng_transp.svg')";
 }  else {
      homeUrl = 'assets/content/home-PL.json';
      initialPlFlagUrl = "url('../../assets/img/flags/flag_pl_transp.svg')";
      initialEngFlagUrl = "url('../../assets/img/flags/flag_eng.svg')";
 }


// 3. Fill text
fetch(homeUrl)
.then(response => response.json())
.then(response => {
    // about
    header.innerHTML = response.header;
    subheader.innerHTML = response.subheader;
    description.innerHTML = response.description;
    // navigation
    let i = 0;
    for (navElem of navigationElements) {
      navElem.innerHTML = response.navigation[i];
      i += 1;
    }
    const lowerLang = localStorage.getItem('siteLanguage').toLowerCase()
        navigationElements[2].href=`/cv/${lowerLang}`
    // contact
    contactHeader.innerHTML = response.contact[0];
    contactText.innerHTML = response.contact[1];
    contactEmail.innerHTML = response.contact[2];
    // flags
    buttonPlInit.style.background = initialPlFlagUrl;
    buttonEngInit.style.background = initialEngFlagUrl;
  });



// ---  II. Change language

// 1. Define variables

let buttonPl = document.querySelector('.language__button--pl');
let buttonEng = document.querySelector('.language__button--eng');

// 2. Polish button onClick
buttonPl.addEventListener('click', (e)=> {

  if (localStorage.getItem('siteLanguage') == 'ENG') { 

    // a) Change background images
    buttonPl.style.background = "url('../../assets/img/flags/flag_pl_transp.svg')";
    buttonEng.style.background = "url('../../assets/img/flags/flag_eng.svg')";

    // b) Manage local storage
    localStorage.setItem('siteLanguage', 'PL')

    // c) Change text
    homeUrl = 'assets/content/home-PL.json';
    fetch(homeUrl)
    .then(response => response.json())
    .then(response => {
        // about
        header.innerHTML = response.header;
        subheader.innerHTML = response.subheader;
        description.innerHTML = response.description;
        // navigation
        let i = 0;
        for (navElem of navigationElements) {
          navElem.innerHTML = response.navigation[i];
          i += 1;
        }
        const lowerLang = localStorage.getItem('siteLanguage').toLowerCase()
        navigationElements[2].href=`/cv/${lowerLang}`
        // contact
        contactHeader.innerHTML = response.contact[0];
        contactText.innerHTML = response.contact[1];
        contactEmail.innerHTML = response.contact[2];
      });
  }
})


// 3. English button onClick

buttonEng.addEventListener('click', (e)=> { 
  if (localStorage.getItem('siteLanguage') == 'PL') { 

    // a) Change background images
     buttonPl.style.background = "url('../../assets/img/flags/flag_pl.svg')";
     buttonEng.style.background = "url('../../assets/img/flags/flag_eng_transp.svg')";
 
    // b) Manage local storage
    localStorage.setItem('siteLanguage', 'ENG')
 
     // c) Change text
     homeUrl = 'assets/content/home-ENG.json';
     fetch(homeUrl)
     .then(response => response.json())
     .then(response => {
         // about
         header.innerHTML = response.header;
         subheader.innerHTML = response.subheader;
         description.innerHTML = response.description;
         // navigation
         let i = 0;
         for (navElem of navigationElements) {
           navElem.innerHTML = response.navigation[i];
           i += 1;
         }
         const lowerLang = localStorage.getItem('siteLanguage').toLowerCase()
        navigationElements[2].href=`/cv/${lowerLang}`
         // contact
         contactHeader.innerHTML = response.contact[0];
         contactText.innerHTML = response.contact[1];
         contactEmail.innerHTML = response.contact[2];
       });
  }
})



// ------------------------------------------
//--- III. Hamburger menu
const navigationSwitcher = document.querySelector('.navigation__switcher');

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  
  navigationList.classList.toggle('navigation__list--visible');

  if (navigationSwitcher.innerHTML=='☰') {
    navigationSwitcher.innerHTML='✖'
  } else {
    navigationSwitcher.innerHTML='☰'
  }

  // locate menu under ☰/X
const hamb = document.querySelector('.navigation__list--vertical')
hamb.style.top = (navigationSwitcher.offsetTop + parseInt('50')).toString()+"px"
});

