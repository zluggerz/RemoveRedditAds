if (window.location.hostname === 'www.reddit.com') {
    window.location.hostname = 'old.reddit.com';
} else if (window.location.hostname === 'old.reddit.com') {
    var ads = document.querySelector(".promoted");
    var gold = document.querySelector(".premium-banner");
    ads.parentNode.removeChild(ads);
    gold.parentNode.removeChild(gold);
    console.log("Hidden Ads Removed");
}