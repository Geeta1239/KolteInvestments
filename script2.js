// Background Music Toggle
function toggleMusic() {
    const audio = document.getElementById("bgMusic");
    const icon = document.getElementById("musicIcon");
    if (audio.paused) {
        audio.play();
        icon.textContent = "🔊";
    } else {
        audio.pause();
        icon.textContent = "🔈";
    }
}

// Modal Logic
function openModal(serviceType) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");
    let content = "";

    switch (serviceType) {
        case "mutualFund":
            content = "<h2>Mutual Fund Planning</h2><p>We tailor investment portfolios based on your financial goals using SIPs, equity, debt, and hybrid funds.</p>";
            break;
        case "insurance":
            content = "<h2>Insurance Advisory</h2><p>Our experts help you select optimal life and health insurance plans ensuring complete coverage and tax savings.</p>";
            break;
        case "taxSaving":
            content = "<h2>Tax Saving Plans</h2><p>Explore tax-saving options like ELSS, PPF, NPS, and deductions under 80C, 80D to maximize your savings.</p>";
            break;
    }

    body.innerHTML = content;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Delayed CTA Popup
window.onload = function () {
    setTimeout(() => {
        document.getElementById("cta-popup").style.display = "block";
    }, 15000); // 15 seconds
};
