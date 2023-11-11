    window.addEventListener('yt-page-data-updated', function () {
        var timerInterval = setInterval(() => {
            let button = document.querySelector(".ytp-ad-skip-button-text");
            let timer = document.querySelector(".ytp-ad-preview-text");
            if(button && timer){
                if (timer.offsetWidth <= 0 || timer.offsetHeight <= 0) {
                    button.click();
                    clearInterval(timerInterval);
                }
            }
            else{
                    clearInterval(timerInterval);
            } 
        }, 500);
    });
    

