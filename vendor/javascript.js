let audio = document.getElementById("audio");

function audio_play() {
  audio.play(); 
}

function audio_stop() {
  audio.pause();
}

function play1() {
  let possible_copyright_issues = document.getElementById('possible-copyright-issues');
  possible_copyright_issues.remove();
  setTimeout(() => audio_play(), 5600);
  setTimeout(() => audio_stop(), 53000);
  let text_begin = document.getElementById("text-begin");
  text_begin.classList.add("text-begin-anim");
  let background = document.getElementById("background");
  background.classList.add("back-anim");
  let logo = document.getElementById("logo");
  logo.classList.add("logo-anim");
  let text_1 = document.getElementById("text1");
  text_1.classList.add("text-main-container-anim");
  let text_2 = document.getElementById("text2");
  text_2.classList.add("text-main-inside-anim");
}
