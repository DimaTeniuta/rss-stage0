import i18Obj from './js/translate.js';

// burger-menu
const hamburger = document.querySelector(".burger");
const menu = document.querySelector(".wrap-menu");
const navLinks = document.querySelectorAll(".menu-link");

function toggleMenu() {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
};
hamburger.addEventListener("click", toggleMenu);

function closeMenu(event) {
  if (event.target.classList.contains("menu-link")) {
    hamburger.classList.remove("open");
    menu.classList.remove("open");
  };
};
navLinks.forEach((el) => el.addEventListener("click", closeMenu));

// change images
const portfolioImages = document.querySelectorAll('.img-portfolio'); 
const portfolioBtns = document.querySelector('.list-btn-portfolio'); 
const btnsActive = document.querySelectorAll('.btn-portfolio'); 
const firstBtnAct = document.querySelector('.btn4');

function changeImage(event) {
  if(event.target.classList.contains('btn-portfolio')) {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  };
};
portfolioBtns.addEventListener('click', changeImage);

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
seasons.forEach(function(el) {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${el}/${i}.jpg`;
  };
});
};
preloadImages();

firstBtnAct.classList.add('act');

function addAct(event) {
  if(event.target.classList.contains('btn-portfolio')) {
    btnsActive.forEach(function(el) {
      el.classList.remove('act');
      if (event.target.classList.contains('btn-portfolio')) {
        event.target.classList.add('act');
      }; 
    });
  };
};
btnsActive.forEach((el) => el.addEventListener('click', addAct));


// change theme
const btnTheme = document.querySelector('.theme');
const arr = document.querySelectorAll('body, .container, .header-icon, .nav-link, .text1-btn-header, .text2-btn-header, .text3-btn-header, .theme, .wrapper-hero, .wrap-hero, .hero-btn, .container-skills, .skills-title, .line-title, .card-skils-title, .card-skills-text, .portfolio-title, .line-title-portfolio, .btn-portfolio, .line-title-video, .video-title, .line-title-price, .img-video-player, .price-title, .title-price, .price-text, .price, .price-gold, .wrap-contacts, .contacts-title, #email, #phone, #text-contacts, .btn-contacts, .container-footer, .link-footer, .inst, .facebook, .twitter, .pinterest, .wrap-menu, .menu-link, .burger-line, .img-video-player, .wrap-contacts, .progress, .volume, .play, .btn-volume');

function changeTheme() {
 arr.forEach((el) => el.classList.toggle("change"));
};
btnTheme.addEventListener('click', changeTheme);


// translate
const transleteElements = document.querySelectorAll('[data-i18]');
const langRu = document.querySelector('.ru');
const langEN = document.querySelector('.en');
const languadge = document.querySelector('.languedge');
const titleSkillsSection = document.querySelectorAll('.skills-title, .portfolio-title, .video-title, .price-title')

langEN.classList.add('changeLanguage');

function getTranslate(ru) {
  langEN.classList.remove('changeLanguage');
  langRu.classList.add('changeLanguage');
  titleSkillsSection.forEach(el => {
    el.classList.add('correct')
  });
  transleteElements.forEach(function(el) {
    for(let key in i18Obj.ru) {
      if(key === el.dataset['i18']) {
        el.textContent = i18Obj.ru[key];
      };
    };
  });
};

function getTranslate1(en) {
  langRu.classList.remove('changeLanguage');
  langEN.classList.add('changeLanguage');
  titleSkillsSection.forEach(el => {
    el.classList.remove('correct')
  });
  transleteElements.forEach(function(el) {
    for(let key in i18Obj.en) {
      if(key === el.dataset.i18) {
        el.textContent = i18Obj.en[key];
      };
    };
  });
};

langEN.addEventListener('click', getTranslate1);
langRu.addEventListener('click', getTranslate);



// local storage
btnTheme.onclick = () => {
  if(event.target.classList.contains('change')) {
    localStorage.setItem('theme', 'dark');
  } else  {
    localStorage.setItem('theme', 'light');
  }
};

languadge.onclick = () => {
  if(event.target.classList.contains('ru')) {
    localStorage.setItem('languadge', 'ru');
  } else if (event.target.classList.contains('en')) {
    localStorage.setItem('languadge', 'en');
  }
};

window.onload = () => {
if(localStorage.getItem('theme')=== 'dark') {
  let themes = localStorage.getItem('theme');
  themes = arr.forEach((el) => el.classList.toggle('change'));  
}
if (localStorage.getItem('languadge')=== 'ru') {
  let languadges = localStorage.getItem('languadge');
  languadges = langEN.classList.remove('changeLanguage');
  langRu.classList.add('changeLanguage');
  transleteElements.forEach(function(el) {
    for(let key in i18Obj.ru) {
      if(key === el.dataset['i18']) {
        el.textContent = i18Obj.ru[key];
      };
    };
  });
} else if (localStorage.getItem('languadge')=== 'en') {
  let languages2 = localStorage.getItem('languadge');
  languages2 = langRu.classList.remove('changeLanguage');
  langEN.classList.add('changeLanguage');
  transleteElements.forEach(function(el) {
    for(let key in i18Obj.en) {
      if(key === el.dataset.i18) {
        el.textContent = i18Obj.en[key];
      };
    };
  });
}
};


