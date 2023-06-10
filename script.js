function playSound(key_code) {
  const audio = document.querySelector(`audio[data-key="${key_code}"]`);
  const key = document.querySelector(`.key[data-key="${key_code}"]`);
  
  if(audio)
  {
    audio.currentTime = 0;
    audio.play();
  }
}

document.addEventListener('click', (event) => {
  playSound(event.key_code);
});