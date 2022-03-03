const btn = document.querySelector(".btn");
const inp = document.querySelector(".header-input");
let images = document.querySelectorAll(".img-main");
const galleryContainer = document.querySelector(".container-main");
const modal = document.querySelector(".img-full");
const bgModal = document.querySelector(".bg-img-full");
let url = `https://api.unsplash.com/search/photos?query=purple&per_page=30&orientation=landscape&client_id=4Oi2KyIqnx8TfVkYLWksaLxeQfM3EsDcsBjoumqJ9Pk`;

window.addEventListener("load", () => {
  inp.focus();
});

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}
getData();

function showData(data) {
  const arr = data.results;
  arr.map(function (el) {
    const img = document.createElement("div");
    img.classList.add("img-main");
    img.style.backgroundImage = `url(${el.urls.small})`;
    galleryContainer.append(img);
    img.addEventListener("click", () => {
      modal.classList.add("show");
      bgModal.classList.add("show");
      modal.style.backgroundImage = `url(${el.urls.regular})`;
    });
  });
}

inp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    changeImage();
  }
});
btn.addEventListener("click", changeImage);

function changeImage() {
  if (inp.value !== "") {
    url = `https://api.unsplash.com/search/photos?query=${inp.value}&per_page=30&orientation=landscape&client_id=4Oi2KyIqnx8TfVkYLWksaLxeQfM3EsDcsBjoumqJ9Pk`;
  } else {
    url =
      "https://api.unsplash.com/search/photos?query=purple&per_page=30&orientation=landscape&client_id=4Oi2KyIqnx8TfVkYLWksaLxeQfM3EsDcsBjoumqJ9Pk";
  }
  document.querySelector(".container-main").textContent = "";
  getData();
}

function closeImage() {
  modal.classList.remove("show");
  bgModal.classList.remove("show");
}

const btnFullClose = document.querySelector(".img-full-close");
const bgBtnFullClose = document.querySelector(".bg-img-full");

btnFullClose.addEventListener("click", closeImage);
bgBtnFullClose.addEventListener("click", closeImage);

// btn close
const btnClose = document.querySelector(".icon-close");

btnClose.addEventListener("click", () => {
  inp.value = "";
});

// my score
function myMark() {
  const result = `score (70/70): \n
    1. Вёрстка (10) \n
    - на странице есть несколько фото и строка поиска +5 \n
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5 \n
    2. При загрузке приложения на странице отображаются полученные от API изображения (10) \n
    3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API (10) \n
    4. Поиск (30) \n
    - при открытии приложения курсор находится в поле ввода +5 \n
    - есть placeholder +5 \n
    - автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5 \n
    - поисковый запрос можно отправить нажатием клавиши Enter +5 \n
    - после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5 \n
    - в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5 \n
    5. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (10) \n
  `;
  return result;
}
console.log(myMark());
