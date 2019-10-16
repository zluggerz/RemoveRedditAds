if (window.location.host === 'old.reddit.com') {
    document.querySelectorAll('.promoted').forEach(e => e.remove());
    document.querySelectorAll('.premium-banner').forEach(e => e.remove());
}

if (window.location.hostname === 'www.reddit.com') {
    window.location.hostname = 'old.reddit.com';
}

console.log("Hidden Ads Removed");