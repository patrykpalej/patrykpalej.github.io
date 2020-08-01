// --- 0. Manage local storage
if (localStorage.getItem('siteLanguage')) {
    1
  } else {
      localStorage.setItem('siteLanguage', 'PL')
  }


// --- I. Initialize page
// 1. Define elements
// a) Project
let projectHeader = document.querySelector('.one-project-about__anchor')
let projectTitle = document.querySelector('.one-project-about__header2')
let githubLink = document.querySelector('.one-project-about__header3__link')
let descriptionHeader = document.querySelectorAll('.one-project-about__header3')
let descriptionLong = document.querySelector('.one-project-about__header3__description')

let postsList = document.querySelector('.posts-list')


// b) Navigation
let navigationElements = document.querySelectorAll('.navigation__text')

// c) Contact
let contactHeader = document.querySelector('.contact__header')
 let contactText = document.querySelector('.contact__text')
 let contactEmail = document.querySelector('.contact__email')
 

 // 2. Choose files based on language
let homeUrl = '';
let projectMetadata = '';

if (localStorage.getItem('siteLanguage') == 'ENG') {
  homeUrl = '../../../assets/content/home-ENG.json';
  
  const urlSplit = document.URL.split('/');
  const lastSegment = urlSplit.pop() || urlSplit.pop();
  projectMetadata = `../../../assets/content/projects/eng/${lastSegment}/project_metadata.json`;
} else {
  homeUrl = '../../../assets/content/home-PL.json';

  const urlSplit = document.URL.split('/');
  const lastSegment = urlSplit.pop() || urlSplit.pop();
  projectMetadata = `../../../assets/content/projects/pl/${lastSegment}/project_metadata.json`;
}

// 3. Fill text
// a) Project metadata
projectHeader.innerHTML = (localStorage.getItem('siteLanguage') == 'ENG') ? 'Projects' : 'Projekty';

fetch(projectMetadata)
.then(response => response.json())
.then(response => {
    projectTitle.innerHTML = response.title
    githubLink.innerHTML = response.github
    githubLink.href = response.github
    descriptionHeader[1].innerHTML = (localStorage.getItem('siteLanguage') == 'ENG') ? 'Description' : 'Opis';
    descriptionLong.innerHTML = response.longDescription

    document.title = response.title
});

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


//  c) Posts list
fetch(projectMetadata)
  .then(response => response.json())
  .then(response => {
    
    for (post of response.posts) {
        const name = post.postName;
        const lowerLang = localStorage.getItem('siteLanguage').toLowerCase();

        const urlSplit = document.URL.split('/');
        const lastSegment = urlSplit.pop() || urlSplit.pop();
        const imageUrl_15 = `url('../../../../assets/content/projects/${lowerLang}/${lastSegment}/posts/${post.postName}/img/miniature_transp_15.svg')`;

        postsList.innerHTML += `
    
        <li class='posts-list__item'>
        <a href='${post.postName}' class='posts-list__anchor'>
            <div class='posts-list__container' id='${name}' style="background-image: ${imageUrl_15}">
                <h2 class='posts-list__header'>
                    ${post.postTitle}
                </h2>
                <p class='posts-list__description'>
                    ${post.postDescription}
                </p>
            </div>
        </a>
        </li>
    `
    }

    for (post of response.posts) {
        const lowerLang = localStorage.getItem('siteLanguage').toLowerCase()
        const urlSplit = document.URL.split('/');
        const lastSegment = urlSplit.pop() || urlSplit.pop();
        
        const imageUrl_5 = `url('../../../../assets/content/projects/${lowerLang}/${lastSegment}/posts/${post.postName}/img/miniature_transp_5.svg')`;
        
        const imageUrl_15 = `url('../../../../assets/content/projects/${lowerLang}/${lastSegment}/posts/${post.postName}/img/miniature_transp_15.svg')`;

        var element = document.getElementById(post.postName);   
        
        element.onmouseleave = function(){
            this.style.backgroundImage = imageUrl_15;
        }

        element.onmouseover = function(){
            this.style.backgroundImage = imageUrl_5;
        }
    }
  })

