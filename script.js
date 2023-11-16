window.addEventListener('yt-page-data-updated', function () {
  let buttonIcon = document.querySelector(".ytp-ad-skip-button-icon-modern");

  const adblockInterval = setInterval(() => {
    checkAndSkipADS(buttonIcon);
  }, 100);

  function checkAndSkipADS(button) {
    if (button) {
      if (button.offsetWidth > 0) {
        button.click();
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
