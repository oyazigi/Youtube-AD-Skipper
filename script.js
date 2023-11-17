window.addEventListener('yt-page-data-updated', function () {
    AdSkipper =   localStorage.getItem('AdSkipper') === 'true';
    WaitVideoAd = localStorage.getItem('WaitVideoAd') === 'true';
    closeBanner = localStorage.getItem('closeBanner') === 'true';

  const adblockInterval = setInterval(() => {
    checkAndSkipADS();
  }, 100);

  function checkAndSkipADS() {
    const skipbtn = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")
    if (skipbtn.length > 0) {
      if (skipbtn[0].offsetWidth > 0) {
        skipbtn[0].click();
      }
    }

    const statementBanner = document.querySelector(".ytd-statement-banner-renderer");
    if (statementBanner) {
      const closeButton = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default");
      if (closeButton.length > 0) {
        closeButton[0].click();
      }
    }

    const banners = document.querySelectorAll('[class*="masthead-ad"]');
    banners.forEach(banner => {
      if (banner) {
        banner.style.display = 'none';
      }
    });

    const moreAds = document.getElementsByClassName("style-scope ytd-in-feed-ad-layout-renderer sparkles-light-cta");
    if (moreAds.length > 0) {
      moreAds[0].style.display = 'none';
    }

    const evenMoreAds = document.querySelectorAll('[class*="ytd-action-companion-ad-renderer"]');
    evenMoreAds.forEach(ad => {
      if (ad) {
        ad.style.display = 'none';
      }
    });
  }
});