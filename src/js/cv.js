// --- 0. Manage local storage
if (localStorage.getItem('siteLanguage')) {
  1
} else {
    localStorage.setItem('siteLanguage', 'PL')
}



// --- I. Initialize page
// 1. Define elements
// a) Skills
let workingKnowledgeList = document.querySelector('.working-knowledge-list-js')
let basicSkillsList = document.querySelector('.basic-skills-list-js')

// b) Navigation
let navigationElements = document.querySelectorAll('.navigation__text')

// c) Contact
let contactHeader = document.querySelector('.contact__header')
 let contactText = document.querySelector('.contact__text')
 let contactEmail = document.querySelector('.contact__email')
 
// d) Experience
let experienceSection = document.querySelector('.exp__container')

// 2. Choose files based on language
let homeUrl = '';
let cvUrl = '';
let expUrl = '';

if (localStorage.getItem('siteLanguage') == 'ENG') {
  homeUrl = '../../../assets/content/home-ENG.json';
  cvUrl = '../../../assets/content/cv/skillsENG.json';
  expUrl = '../../../assets/content/cv/expENG.json';
} else {
  homeUrl = '../../../assets/content/home-PL.json';
  cvUrl = '../../../assets/content/cv/skillsPL.json';
  expUrl = '../../../assets/content/cv/expPL.json';
}

// 3. Fill text
// a) Skills
fetch(cvUrl)
  .then(response => response.json())
  .then(response => {
    
    for (skill of response['workingKnowledge']) {
      workingKnowledgeList.innerHTML += 
      `<li class="skills__list-item">
      ${skill}
      </li>`
    }

    for (skill of response['basic']) {
      basicSkillsList.innerHTML += 
      `<li class="skills__list-item skills__list-item--blue">
      ${skill}
      </li>`
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

  // c) Experience
  fetch(expUrl)
    .then(response => response.json())
    .then(response => {
      
      for (exp of response) {
        
        let expProjectsListHtml = ''

        for (expProj of exp.projects) {
          expProjectsListHtml += 
          `
          <li class="exp__project">
            ${expProj}
          </li>
          `
        }
        
        experienceSection.innerHTML += 
        `
        <p class="exp__text">
        ${exp.description}
        </p>
        <ul class="exp__projects-list">
        ${expProjectsListHtml}
        </ul>
        <br/>
        <div style="border-bottom: #E5E8EC solid 2px"></div>
        `
      }

    })