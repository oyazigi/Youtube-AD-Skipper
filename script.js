window.addEventListener('yt-page-data-updated', function () {
  chrome.storage.sync.get(['AdSkipper', 'WaitVideoAd', 'closeBanner'], function (result) {
    let AdSkipper = result.AdSkipper !== undefined ? result.AdSkipper : true;
    let WaitVideoAd = result.WaitVideoAd !== undefined ? result.WaitVideoAd : true;
    let closeBanner = result.closeBanner !== undefined ? result.closeBanner : true;

  if(AdSkipper){
    const adblockInterval = setInterval(() => {
      checkAndSkipADS();
    }, 100);
  }

  function handleMouseOver(e) {
    // Change the background color when the mouse hovers over an element
    e.target.style.backgroundColor = "lightblue";
  }
  
  function handleMouseOut(e) {
    // Reset the background color when the mouse leaves an element
    e.target.style.backgroundColor = ""; // Set it to an empty string to reset to default
  }

  function clicked(e) {
    e.preventDefault();
    console.log(e.target);
  
    // Remove the other event listeners
    document.removeEventListener("click", clicked);
    document.removeEventListener("mouseover", handleMouseOver);
    document.removeEventListener("mouseout", handleMouseOut);
    var result = confirm("Do you want to remove this element?");
    
    if (result) {
      // If the user confirms, hide the clicked element
      e.target.style.display = "none";
    } else {
      // If the user cancels, reset the background color
      e.target.style.backgroundColor = "";
    }

  }

async function toggleClickListener(varFromPopup) {
  if (varFromPopup === true) {
      document.addEventListener("click", clicked);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
  } 
}

chrome.runtime.onMessage.addListener(message => {
  toggleClickListener(message.myVar);
  if(message.myVar === false){
    document.removeEventListener("mouseover", handleMouseOver);
    document.removeEventListener("mouseout", handleMouseOut);
    document.removeEventListener("click", clicked);
  }
});
  
// function connectToPopup() {
//   const port = chrome.runtime.connect({ name: 'popup' });

//   port.onMessage.addListener(function (msg) {
//       if (msg.action === 'toggleClickListener') {
//           toggleClickListener(msg.Inspecting);
//       }
//   });

//   port.onDisconnect.addListener(function () {
//       console.log('Disconnected from popup');
//   });
// }

  function checkAndSkipADS() {
    if(WaitVideoAd){
      const skipbtn = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")
      if (skipbtn.length > 0) {
        if (skipbtn[0].offsetWidth > 0) {
          skipbtn[0].click();
        }
      }
    }else if(!WaitVideoAd){
      const jumpb = document.getElementsByClassName("ytp-ad-skip-button-slot");
      if(jumpb.length > 0){
        jumpb[0].style.display = 'block';
        jumpb[0].click();
      }
    }
    
    if(closeBanner){
          //banner stuff
    const statementBanner = document.querySelector(".ytd-statement-banner-renderer");
    if (statementBanner) {
      const closeButton = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default");
      if (closeButton.length > 0) {
        closeButton[0].click();
      }
    }
    //banner stuff
    const banners = document.querySelectorAll('[class*="masthead-ad"]');
    banners.forEach(banner => {
      if (banner) {
        banner.style.display = 'none';
      }
    });
    //banner stuff
    const moreAds = document.getElementsByClassName("style-scope ytd-in-feed-ad-layout-renderer sparkles-light-cta");
    if (moreAds.length > 0) {
      moreAds[0].style.display = 'none';
    }
    //banner stuff
    const evenMoreAds = document.querySelectorAll('[class*="ytd-action-companion-ad-renderer"]');
    evenMoreAds.forEach(ad => {
      if (ad) {
        ad.style.display = 'none';
      }
    });
    }


  }

  // connectToPopup();

  
  });
  
});

