const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const ranges = player.querySelector('.ranges')
const skipButtons = player.querySelectorAll('[data-skip]')

function toggleVideo(){
  if (video.paused) video.play();
  else video.pause();
}

function updateButton(){
  toggle.innerHTML = video.paused ? '&#9654;':'&#10074;&#10074;';
}

function skip(event){
  video.currentTime += Number(event.target.dataset.skip);
}

function updateProgress(){
  const currentProgress = video.currentTime/video.duration*100;
  progressBar.style.flexBasis=currentProgress+"%";
}

function progressHandler(event){
  video.currentTime = video.duration * event.offsetX / progress.offsetWidth;
}

toggle.addEventListener("click", toggleVideo);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach(btn => btn.addEventListener("click",skip))
video.addEventListener("timeupdate", updateProgress)
progress.addEventListener("click", progressHandler)