document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");

    // Load saved state
    chrome.storage.sync.get("enabled", function (data) {
        if (data.enabled === false) {
            toggleBtn.textContent = "Turn ON";
            toggleBtn.classList.add("off");
        } else {
            toggleBtn.textContent = "Turn OFF";
        }
    });

    // Toggle button click
    toggleBtn.addEventListener("click", function () {
        chrome.storage.sync.get("enabled", function (data) {
            const newState = !data.enabled;
            chrome.storage.sync.set({ enabled: newState });

            toggleBtn.textContent = newState ? "Turn OFF" : "Turn ON";
            toggleBtn.classList.toggle("off", !newState);

            // Reload Google to apply change
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (tabs[0] && tabs[0].id) {
                    chrome.tabs.reload(tabs[0].id);
                }
            });
        });
    });
});
