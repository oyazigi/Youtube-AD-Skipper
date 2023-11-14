window.addEventListener('yt-page-data-updated', function () {
  const button = document.querySelector(".ytp-ad-skip-button-text");
  const timer = document.querySelector(".ytp-ad-preview-text-modern");
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
  }, 5000);

  function checkAndSkipADS(button, timer) {
    if (button && timer) {
      const jumpADInterval = setInterval(() => {
        if (timer.offsetWidth <= 0 || timer.offsetHeight <= 0) {
          button.click();
          clearInterval(jumpADInterval);
        }
      }, 200);
    }
  }
});
