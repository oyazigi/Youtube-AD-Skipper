window.addEventListener('yt-page-data-updated', function () {
  const button_text = document.querySelector(".ytp-ad-skip-button-text");
  const timer = document.querySelector(".ytp-ad-preview-text-modern");
  const buttonIcon = document.querySelector(".ytp-ad-skip-button-icon-modern");

  const adblockInterval = setInterval(() => {
    checkAndSkipADS(button_text, timer);
  }, 1000);

  function checkAndSkipADS(button, timer) {
    if(timer!== null){
      if (buttonIcon.offsetWidth > 0) {
        const jumpADInterval = setInterval(() => {
          if (timer.offsetWidth <= 0 || timer.offsetHeight <= 0) {
            button.click();
            clearInterval(jumpADInterval);
          }
        }, 200);
      }
    }
  }
});