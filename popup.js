// popup.js

chrome.storage.sync.get(['AdSkipper', 'WaitVideoAd', 'closeBanner', 'Inspecting'], function (result) {
    let AdSkipper = result.AdSkipper !== undefined ? result.AdSkipper : true;
    let WaitVideoAd = result.WaitVideoAd !== undefined ? result.WaitVideoAd : true;
    let closeBanner = result.closeBanner !== undefined ? result.closeBanner : true;
    let Inspecting = result.Inspecting !== undefined ? result.Inspecting : false;

    document.querySelectorAll('input[name="option"]').forEach(function (radio) {
        radio.checked = (radio.value === "after" && WaitVideoAd) || (radio.value === "instantly" && !WaitVideoAd);
    });

    document.querySelectorAll('input[name="option1"]').forEach(function (radio) {
        radio.checked = (radio.value === "activated" && closeBanner) || (radio.value === "deactivated" && !closeBanner);
    });

    function updateAdSkipperButton() {
        let button = document.getElementById("onoff");
        if (AdSkipper) {
            button.innerText = 'Turn off Ad Skipper';
        } else {
            button.innerText = 'Turn on Ad Skipper';
        }
        chrome.storage.sync.set({ 'AdSkipper': AdSkipper });
    }

    document.getElementById("onoff").addEventListener("click", function () {
        AdSkipper = !AdSkipper;
        // Update localStorage after AdSkipper is changed
        chrome.storage.sync.set({ 'AdSkipper': AdSkipper });
       // localStorage.setItem('AdSkipper', AdSkipper);
        // Update button text
        updateAdSkipperButton();
    });

    // document.getElementById("belement").addEventListener("click", function () {
    //     Inspecting = !Inspecting;
    //          chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    //             chrome.tabs.executeScript(tabs[0].id,{file: 'script.js'},()=>{
    //             chrome.tabs.sendMessage(tabs[0].id,{myVar:Inspecting});
    //         });
    //      });
    // });
    
    function FireInjectionScript() {
        // Toggle the variable
        if(Inspecting){
            document.getElementById('belement').innerText = "Block element";
        }else{
            document.getElementById('belement').innerText = "Cancel";
        }
        Inspecting = !Inspecting;
        // Send the toggled value after the query is complete
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          chrome.tabs.sendMessage(tabs[0].id, { myVar: Inspecting });
        });
      }
      
      document.getElementById('belement').addEventListener('click', FireInjectionScript);
      
      
      
    // Event listener for the radio button with name "option"
    document.querySelectorAll('input[name="option"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
            WaitVideoAd = this.value === "after";
            chrome.storage.sync.set({ 'WaitVideoAd': WaitVideoAd })
            //localStorage.setItem('WaitVideoAd', WaitVideoAd);
        });
    });

    // Event listener for the radio button with name "option1"
    document.querySelectorAll('input[name="option1"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
            closeBanner = this.value === "activated";
            chrome.storage.sync.set({ 'closeBanner': closeBanner })
            //localStorage.setItem('closeBanner', closeBanner);
        });
    });

    // Initialize the button text based on the stored value
    updateAdSkipperButton();

});

    // Function to update button text and localStorage

    // Event listener for the "Turn on/off Ad Skipper" button
    
