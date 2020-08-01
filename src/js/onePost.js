// --- 0. Manage local storage
if (localStorage.getItem('siteLanguage')) {
    1
  } else {
      localStorage.setItem('siteLanguage', 'PL')
  }


  // 1. Define elements
// a) Blogpost
let blogpostProjectName = document.querySelector('.blogpost-header__anchor')
let blogpostImg = document.querySelector('.blogpost-header__img')
let blogpostPostName = document.querySelector('.blogpost-header__h2')

let blogpostContent = document.querySelector('.blogpost-content')

let linkGoup = document.querySelector('.blogpost-links__goup')
let linkPrevious = document.querySelector('.blogpost-links__previous')
let linkNext = document.querySelector('.blogpost-links__next')

// b) Navigation
let navigationElements = document.querySelectorAll('.navigation__text')

// c) Contact
let contactHeader = document.querySelector('.contact__header')
let contactText = document.querySelector('.contact__text')
let contactEmail = document.querySelector('.contact__email')


 // 2. Choose files based on language
let homeUrl = '';
let postUrl = '';

if (localStorage.getItem('siteLanguage') == 'ENG') {
  homeUrl = '../../../../assets/content/home-ENG.json';
  
  const urlSplit = document.URL.split('/');
  const projName = urlSplit[urlSplit.length - 3]
  const postName = urlSplit[urlSplit.length - 2]
  
  postUrl = `../../../../assets/content/projects/eng/${projName}/posts/${postName}/post.json`
  
} else {
  homeUrl = '../../../../assets/content/home-PL.json';
  
  const urlSplit = document.URL.split('/');
  const projName = urlSplit[urlSplit.length - 3]
  const postName = urlSplit[urlSplit.length - 2]
  
  postUrl = `../../../../assets/content/projects/pl/${projName}/posts/${postName}/post.json`
}


// 3. Fill text
// a) Blogpost
fetch(postUrl)
  .then(response => response.json())
  .then(response => {
    // --- Create variables ---
    const lang = localStorage.getItem('siteLanguage').toLowerCase()
    const urlSplit = document.URL.split('/');
    const projName = urlSplit[urlSplit.length - 3]
    const postName = urlSplit[urlSplit.length - 2]

    // Header
    blogpostProjectName.innerHTML = response.projectTitle;
    blogpostImg.src = `../../../../../assets/content/projects/${lang}/${projName}/posts/${postName}/img/miniature.svg`;
    blogpostPostName.innerHTML = response.postTitle;
    document.title =  response.postTitle;

    // Blogpost
    let figNr = 1;

    for (blogpostElement of response.content) {
      elementType = Object.keys(blogpostElement)[0];

      switch (elementType) {
        case 'p':
          blogpostContent.innerHTML += `<p class='blogpost-content__paragraph'> ${blogpostElement[elementType]}</p>`
          break;

        case 'code':
          blogpostContent.innerHTML += `<code> ${blogpostElement[elementType]}</code>`
          break;

        case 'h3':
          blogpostContent.innerHTML += `<h3 class='blogpost-content__header'> ${blogpostElement[elementType]}</p>`
          break;

        case 'img':
          let figName = '';
          
          (localStorage.getItem('siteLanguage')=='PL') ? figName = 'Rys.' : figName = 'Fig.'

          blogpostContent.innerHTML += 
          
          `
          <div class="blogpost-content__img-container">
          <img src=../../../../../assets/content/projects/${lang}/${projName}/posts/${postName}/img/${blogpostElement[elementType][0]} class="blogpost-content__img" style="width:${blogpostElement[elementType][2]}"/>
          <p>${figName} ${figNr} ${blogpostElement[elementType][1]}</p>
          </div> 
          `
          figNr += 1;
          break;

        case 'br':
          for (let lineBreak = 1; lineBreak <= blogpostElement[elementType]; lineBreak++) {
            blogpostContent.innerHTML += '<br/>';
          } 
          
        
        default:
          console.log('Not found');
      }

    }

    // Links (anchors)
    linkGoup.innerHTML = (localStorage.getItem('siteLanguage')=='PL') ? 'Powrót do góry' : 'Go up'

    if (response.previousTitle) {
      linkPrevious.innerHTML += (localStorage.getItem('siteLanguage')=='PL') ? 'Poprzedni: ' : 'Previous: '
      linkPrevious.innerHTML += response.previousTitle;
      
      let url = document.URL;
      newurlSplit = url.split('/').slice(0,-1)
      newurlSplit[newurlSplit.length-1] = response.previousLink;
      newurlSplit = newurlSplit.join('/')
      console.log(newurlSplit)
      linkPrevious.href = newurlSplit;
    }
    
    if (response.nextTitle) {
      linkNext.innerHTML += (localStorage.getItem('siteLanguage')=='PL') ? 'Następny: ' : 'Next: '
      linkNext.innerHTML += response.nextTitle;


       let url = document.URL;
      newurlSplit = url.split('/').slice(0,-1)
      newurlSplit[newurlSplit.length-1] = response.nextLink;
      newurlSplit = newurlSplit.join('/')
      console.log(newurlSplit)
      linkNext.href = newurlSplit;
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