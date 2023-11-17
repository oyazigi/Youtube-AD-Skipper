// popup.js

var AdSkipper;
var WaitVideoAd;
var closeBanner;

function initializeVariables() {
    AdSkipper = localStorage.getItem('AdSkipper') === 'true';
    WaitVideoAd = localStorage.getItem('WaitVideoAd') === 'true';
    closeBanner = localStorage.getItem('closeBanner') === 'true';
}

    // Initialize variables
    initializeVariables();

    // Function to update button text and localStorage
    function updateAdSkipperButton() {
        let button = document.getElementById("onoff");
        if (AdSkipper) {
            button.innerText = 'Turn off Ad Skipper';
        } else {
            button.innerText = 'Turn on Ad Skipper';
        }
        localStorage.setItem('AdSkipper', AdSkipper);
    }
    // Event listener for the "Turn on/off Ad Skipper" button
    document.getElementById("onoff").addEventListener("click", function () {
        AdSkipper = !AdSkipper;
        // Update localStorage after AdSkipper is changed
        localStorage.setItem('AdSkipper', AdSkipper);
        // Update button text
        updateAdSkipperButton();
    });

    // Event listener for the radio button with name "option"
    document.querySelectorAll('input[name="option"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
            WaitVideoAd = this.value === "after";
            localStorage.setItem('WaitVideoAd', WaitVideoAd);
        });
    });

    // Event listener for the radio button with name "option1"
    document.querySelectorAll('input[name="option1"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
            closeBanner = this.value === "activated";
            localStorage.setItem('closeBanner', closeBanner);
        });
    });

    // Initialize the button text based on the stored value
    updateAdSkipperButton();

    // Alerts after initializing variables
    alert(AdSkipper);
    alert(WaitVideoAd);
    alert(closeBanner);

