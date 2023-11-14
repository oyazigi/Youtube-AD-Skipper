window.addEventListener('yt-page-data-updated', function () {
  const button = document.querySelector(".ytp-ad-skip-button-text");
  const timer = document.querySelector(".ytp-ad-preview-text-modern");
  const button_container = document.querySelector(".ytp-ad-preview-container");
  let count = 0;

  const videoBeginningInterval = setInterval(() => {
    count++;
    if (count === 2) {
      checkAndSkipADS(button, timer);
      clearInterval(videoBeginningInterval);
    }
  }, 1000);

  const afterBeginningInterval = setInterval(() => {
    checkAndSkipADS(button, timer);
  }, 4000);

  function checkAndSkipADS(button, timer) {
    if(timer!== null){
      if (button_container.offsetWidth > 0) {
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