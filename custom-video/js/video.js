
const video = document.querySelector('#video-player');
const btnPlay = document.querySelector('.play');
const btnMainPlay = document.querySelector('.img-video-player');
const inputVolum = document.querySelector('.volume');
const btnVolume = document.querySelector('.btn-volume');
const progressBar = document.querySelector('.progress');
const poster = document.querySelector('.poster');


 function tooglePlay() {
 const x = video.paused ? 'play' : 'pause';
 video[x]();
 btnPlay.classList.toggle('pause');
 poster.classList.add('posterOf');
 };
 
function pause() {
  btnMainPlay.classList.remove('btnPlayInherit')
  btnPlay.classList.add('pause');
};

function play() {
  btnMainPlay.classList.add('btnPlayInherit')
  btnPlay.classList.remove('pause');
};

function volume() {
  let v = this.value;
  video.volume = v / 100;
  btnVolume.classList.remove('mute')
  if (video.volume === 0) {
    btnVolume.classList.add('mute');
  };
  const value = inputVolum.value;
  inputVolum.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c9c3c3 ${value}%, #c9c3c3 100%)`;
}

function volumeMute() {
  btnVolume.classList.toggle('mute')
  if (event.target.classList.contains('mute')) {
    video.volume = 0;
  } else {
   video.volume = 1;
  };
};

function playProgress() {
  let d = video.duration;
  let c = video.currentTime;
  progressBar.value = (c / d) * 100;
  const value = progressBar.value;
  progressBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c9c3c3 ${value}%, #c9c3c3 100%)`
};

function showVideoCurrentTime() {
let w = progressBar.offsetWidth;
let o = event.offsetX;
let v = video.duration;
progressBar.value = (o / w) * 100;
video.pause();
video.currentTime = v * (o / w);
video.play();
};

 btnPlay.addEventListener('click', tooglePlay);
 btnMainPlay.addEventListener('click',  tooglePlay);
 video.addEventListener('click', tooglePlay);
 video.addEventListener('pause', pause);
 video.addEventListener('play', play);
 video.addEventListener('timeupdate', playProgress);
 inputVolum.addEventListener('input', volume);
 btnVolume.addEventListener('click', volumeMute);
 progressBar.addEventListener('pointerup', showVideoCurrentTime);
 progressBar.addEventListener('touchmove', showVideoCurrentTime);


 
//  style input
function changeStyleInput() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c9c3c3 ${value}%, #c9c3c3 100%)`
};
  
progressBar.addEventListener('input', changeStyleInput);



// my score
function myMark() {
  const result = (
    `score (70/70): \n
    1. Вёрстка (10) \n
    - вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5 \n
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5 \n
    2. Кнопка Play/Pause на панели управления (10) \n
    - при клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5 \n
    - внешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли видео в данный момент +5 \n
    3. Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка (10) \n
    4. При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка (10) \n
    5. При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля (10) \n
    6. Кнопка Play/Pause в центре видео (10) \n
    - есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5 \n
    - когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается +5 \n
    7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (10) \n
  `);
  return result;
}
console.log(myMark());

  




