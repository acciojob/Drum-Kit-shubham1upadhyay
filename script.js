function playSound(key_code) {
  const key = document.querySelector(`button[data-key="${key_code.keyCode}"]`);
  
  if (key)
  {
    const audio = document.querySelector(`audio[data-key="${key_code.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
  }
}

window.addEventListener('keydown', playSound);