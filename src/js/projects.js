// --- 0. Manage local storage
if (localStorage.getItem('siteLanguage')) {
  1
} else {
    localStorage.setItem('siteLanguage', 'PL')
}


// --- I. Initialize page
// 1. Define elements
// a) Projects
let projHeader = document.querySelector('.projects-header')
let projectsList = document.querySelector('.projects-list')

// b) Navigation
let navigationElements = document.querySelectorAll('.navigation__text')

// c) Contact
let contactHeader = document.querySelector('.contact__header')
 let contactText = document.querySelector('.contact__text')
 let contactEmail = document.querySelector('.contact__email')
 
// 2. Choose files based on language
let homeUrl = '';
let projectsUrl = '';

if (localStorage.getItem('siteLanguage') == 'ENG') {
  homeUrl = '../assets/content/home-ENG.json';
  projectsUrl = '../assets/content/projects/eng/projects_list.json';
} else {
  homeUrl = '../assets/content/home-PL.json';
  projectsUrl = '../assets/content/projects/pl/projects_list.json';
}

// 3. Fill text
// a) Projects
projHeader.innerHTML = (localStorage.getItem('siteLanguage') == 'ENG') ? 'Projects' : 'Projekty';

fetch(projectsUrl)
  .then(response => response.json())
  .then(response => {
    
    for (proj of response) {
      const name = proj.name;
      const title = proj.title; 
      const desc = proj.shortDescription; 
      const lowerLang = localStorage.getItem('siteLanguage').toLowerCase()
      const imageUrl_15 = `url('../assets/content/projects/${lowerLang}/${name}/img/miniature_transp_15.svg')`;
      
      // ---
      projectsList.innerHTML +=
      `
      <li class='projects-list__item'>
        <a href='${lowerLang}/${name}/' class='projects-list__anchor'>
          <div class='projects-list__container' style="background-image: ${imageUrl_15}" id='${name}'>
            <h2 class='projects-list__header'>${title}</h2>
            <p class='projects-list__description'>${desc}</p>
          </div>
      </a>
    </li> `
    }
    // --- transparency 15 -> 5 on hover
    for (proj of response) {
      const name = proj.name;
      const lowerLang = localStorage.getItem('siteLanguage').toLowerCase()
      const imageUrl_5 = `url('../assets/content/projects/${lowerLang}/${name}/img/miniature_transp_5.svg')`;
      const imageUrl_15 = `url('../assets/content/projects/${lowerLang}/${name}/img/miniature_transp_15.svg')`;

      var element = document.getElementById(name);   
      
      element.onmouseleave = function(){
        this.style.backgroundImage = imageUrl_15;
      }

      element.onmouseover = function(){
        this.style.backgroundImage = imageUrl_5;
  
    }
  }
  })

// b) Navigation and contact
fetch(homeUrl)
.then(response => response.json())
.then(response => {
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



// 4. Title
document.title = (localStorage.getItem('siteLanguage') == 'ENG') ? 'Projects' : 'Projekty';