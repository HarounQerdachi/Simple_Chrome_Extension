chrome.storage.sync.get("enabled", function (data) {
    if (data.enabled === false) return; // Stop if disabled

    // Array of random image sources
    const randomImages = [
        "https://source.unsplash.com/random/1920x1080",
        "https://picsum.photos/1920/1080",
        "https://loremflickr.com/1920/1080",
        "https://placekitten.com/1920/1080"
    ];

    // Pick a random image
    const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

    // Apply background styling
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    // Hide Google's logo
    const googleLogo = document.getElementById("hplogo") || document.querySelector("img[alt='Google']");
    if (googleLogo) googleLogo.style.display = "none";
});
