// document.addEventListener("DOMContentLoaded", () => {
//     const items = document.querySelectorAll("#experienceList li");
//     let delay = 0;
  
//     items.forEach((item, index) => {
//         setTimeout(() => {
//             item.classList.add("show");
//         }, 600 * index);
//     });
  
//     // Music toggle
//     window.toggleMusic = function () {
//         const music = document.getElementById('bgMusic');
//         if (music.paused) {
//             music.play();
//         } else {
//             music.pause();
//         }
//     };
  
//     // Modal Functions
//     window.onload = () => {
//         const modal = document.getElementById("modal");
//       const modalBody = document.getElementById("modal-body");
      
//       window.openModal = (service) => {
//         let content = '';
//         // if (service === 'mutualFund') {
//         //     content = `
//         //   <h2>Mutual Fund</h2>
//         //   <p>Invest in SIPs, ELSS, and long-term growth options.</p>
//         // `;
//         // } else if (service === 'insurance') {
//         //     content = `
//         //   <h2>Insurance</h2>
//         //   <p>Choose the best life and health plans.</p>
//         // `;
//         // }
//         switch (service) {
//             case 'mutualFund':
//               content = `
//                 <h2>Mutual Fund Planning</h2>
//                 <p>Expert advice on SIPs, equity, and hybrid funds.</p>
//                 <ul>
//                   <li>High Growth Opportunities</li>
//                   <li>Tax Saving ELSS</li>
//                 </ul>`;
//               break;
//             case 'insurance':
//               content = `
//                 <h2>Insurance Advisory</h2>
//                 <p>Choose the best insurance for your family.</p>
//                 <ul>
//                   <li>Term Plans</li>
//                   <li>Health Covers</li>
//                 </ul>`;
//               break;
//             case 'taxSaving':
//               content = `
//                 <h2>Tax Saving Plans</h2>
//                 <p>Save tax through ELSS, PPF, and more.</p>
//                 <ul>
//                   <li>80C, 80D Benefits</li>
//                   <li>Tax-free Returns</li>
//                 </ul>`;
//               break;
//             default:
//               content = `<p>Service not found.</p>`;
//           }
//         modalBody.innerHTML = content;
//         modal.style.display = 'flex'; // Show modal
//     };
    
//     window.closeModal = () => {
//         modal.style.display = 'none'; // Hide modal
//     };

//   };

// });

// // ************************Services page***************************

// // filter logic
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const serviceCards = document.querySelectorAll(".service-card");

//   filterButtons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       document.querySelector(".filter-btn.active").classList.remove("active");
//       btn.classList.add("active");

//       const category = btn.dataset.category;
//       serviceCards.forEach(card => {
//         card.style.display = (category === "all" || card.dataset.category === category)
//           ? "block"
//           : "none";
//       });
//     });
//   });

// // services scroll logic
// const animatedElements = document.querySelectorAll("[data-animate]");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate");
//       observer.unobserve(entry.target); // Run animation once
//     }
//   });
// }, { threshold: 0.1 });

// animatedElements.forEach(el => observer.observe(el));

// // tilt logic
// VanillaTilt.init(document.querySelectorAll(".service-card"), {
//   max: 15,
//   speed: 400,
//   glare: true,
//   "max-glare": 0.2,
// });

// // faq
//   const faqButtons = document.querySelectorAll('.faq-question');

//   faqButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const answer = button.nextElementSibling;
//       answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

//       // Optional: Collapse other open answers
//       document.querySelectorAll('.faq-answer').forEach(ans => {
//         if (ans !== answer) ans.style.display = 'none';
//       });
//     });
//   });

// //
//   const animateElements = document.querySelectorAll("[data-animate]");
//   const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("fade-in");
//         observer2.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.2 });

// animateElements.forEach(el => observer2.observe(el));
  


// // Booking consultation form

// document.addEventListener("DOMContentLoaded", function () {
//   // Show/hide modal
//   function toggleModal(show) {
//     const modal = document.getElementById("consultModal");
//     modal.style.display = show ? "flex" : "none";
//   }

//   // Attach event listener to all buttons with class "cta-button"
//   document.querySelectorAll(".cta-button").forEach(button => {
//     button.addEventListener("click", function (e) {
//       e.preventDefault(); // Prevent default in case it's an <a>
//       toggleModal(true);
//     });
//   });

//   // Make toggleModal globally accessible (optional if you use inline onclick)
//   window.toggleModal = toggleModal;

//   // Close modal when clicking outside modal-box
//   window.addEventListener("click", function (e) {
//     const modal = document.getElementById("consultModal");
//     if (e.target === modal) {
//       toggleModal(false);
//     }
//   });

//   // Optional: form submission (using FormSubmit)
//   const form = document.getElementById("consultForm");
//   const status = document.getElementById("formStatus");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const formData = new FormData(form);

//     fetch("https://formsubmit.co/YOUR_EMAIL@example.com", {
//       method: "POST",
//       body: formData,
//       headers: { 'Accept': 'application/json' }
//     }).then(response => {
//       if (response.ok) {
//         status.innerText = "✅ Thank you! We’ll contact you soon.";
//         form.reset();
//       } else {
//         status.innerText = "❌ Submission failed. Try again.";
//       }
//     }).catch(() => {
//       status.innerText = "❌ Network error.";
//     });
//   });
// });


// // consultation JS

// // Show popup after 30 seconds
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     const popup = document.getElementById("cta-popup");
//     if (popup) {
//       popup.style.display = "block";
//     }
//   }, 20000); // 30 seconds
// });


// =========================   MY JS for website     =================================

// JS for market ticker

// const API_KEY = '7504878df06542e4898e0220d2accb2e';

// // Corrected symbols
// const symbols = [
//     { symbol: 'RELIANCE:NSE', icon: '🏦' },
//     { symbol: 'TCS:NSE', icon: '💻' },
//     { symbol: 'NIFTY 50', icon: '📊' },  // Index
//     { symbol: 'SENSEX', icon: '🏢' },    // Index
//     { symbol: 'XAU/USD', icon: '🥇' }    // Gold (Forex)
// ];

// async function fetchMarketTicker() {
//     try {
//         const promises = symbols.map(({ symbol }) =>
//             fetch(`https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbol)}&apikey=${API_KEY}`)
//                 .then(res => res.json())
//         );

//         const results = await Promise.all(promises);
//         console.log("Market Data:", results);

//         const data = results.map((item, index) => {
//             const { symbol, icon } = symbols[index];

//             if (!item || item.status === "error" || !item.price) {
//                 return `<span style="margin-right: 30px;">${icon} ${symbol}: Data unavailable</span>`;
//             }

//             const currency = item.symbol.includes("XAU") ? "$" : "₹";
//             const price = parseFloat(item.price).toFixed(2);
//             const change = parseFloat(item.change).toFixed(2);
//             const percent = parseFloat(item.percent_change).toFixed(2);
//             const direction = change >= 0 ? '🔺' : '🔻';
//             const color = change >= 0 ? 'lightgreen' : '#ff6b6b';

//             return `<span style="color: ${color}; margin-right: 30px;">
//                 ${icon} ${item.name || item.symbol}: ${currency}${price} ${direction} (${change}, ${percent}%)
//             </span>`;
//         });

//         document.getElementById('marketTicker').innerHTML = data.join('');
//     } catch (err) {
//         console.error('Ticker error:', err);
//         document.getElementById('marketTicker').textContent = 'Failed to load market data';
//     }
// }

// // Initial fetch
// fetchMarketTicker();

// // Refresh every 30 minutes
// setInterval(fetchMarketTicker, 30 * 60 * 1000);


// POLYGON API

const API_KEY = "nGyeNPjdGW50bH21wgYgpOoV3lKR0G0p"; // replace with your key

// Polygon-compatible tickers
const symbols = [
    { symbol: "RELIANCE.BSE", icon: "🏦" }, // may not be available on free tier
    { symbol: "TCS.BSE", icon: "💻" },      // may not be available on free tier
    { symbol: "NSEI", icon: "📊" },         // index placeholder
    { symbol: "BSESN", icon: "🏢" },        // index placeholder
    { symbol: "XAUUSD", icon: "🥇" }        // gold
];

async function fetchMarketTicker() {
    try {
        const promises = symbols.map(async ({ symbol, icon }) => {
            try {
                const res = await fetch(
                    `https://api.polygon.io/v2/aggs/ticker/${encodeURIComponent(symbol)}/prev?apiKey=${API_KEY}`
                );
                const data = await res.json();

                if (data.results && data.results.length > 0) {
                    const price = parseFloat(data.results[0].c).toFixed(2);
                    const change = (data.results[0].c - data.results[0].o).toFixed(2);
                    const percent = ((change / data.results[0].o) * 100).toFixed(2);
                    const direction = change >= 0 ? "🔺" : "🔻";
                    const color = change >= 0 ? "lightgreen" : "#ff6b6b";
                    const currency = symbol.includes("USD") ? "$" : "₹";

                    return `<span style="color: ${color}; margin-right: 30px;">
                        ${icon} ${symbol}: ${currency}${price} ${direction} (${change}, ${percent}%)
                    </span>`;
                } else {
                    return `<span style="margin-right: 30px;">
                        ${icon} ${symbol}: Data unavailable
                    </span>`;
                }
            } catch {
                return `<span style="margin-right: 30px;">
                    ${icon} ${symbol}: Error fetching
                </span>`;
            }
        });

        const data = await Promise.all(promises);
        document.getElementById("marketTicker").innerHTML = data.join("");
    } catch (err) {
        console.error("Ticker error:", err);
        document.getElementById("marketTicker").textContent = "Failed to load market data";
    }
}

fetchMarketTicker();
setInterval(fetchMarketTicker, 30 * 60 * 1000);



window.returnsChart = null;

// ========== Music Toggle ==========
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}


// Responsive JS for Navbar

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});


// ========== Service Modal Logic ==========
window.openModal = function (service) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  let content = "";

  switch (service) {
    case "mutualFund":
      content = `
        <h2>Mutual Fund Investments</h2>
        <p>Expert advice on SIPs, lumsums, equity, and hybrid funds.</p>
        <ul>
          <li>High Growth Opportunities</li>
          <li>ELSS Tax Saving Funds</li>
          <li>Retirement Planning</li>
          <li>Children Education Planning</li>
        </ul>`;
      break;
    case "insurance":
      content = `
        <h2>Insurance Advisory</h2>
        <p>Choose the best insurance for your family.</p>
        <ul>
          <li>Term Plans</li>
          <li>Health Insurance</li>
          <li>Personal Accident Insurance</li>
        </ul>`;
      break;
    case "taxSaving":
      content = `
        <h2>Tax Saving Plans</h2>
        <p>Save tax through ELSS, PPF, NPS and more.</p>
        <ul>
          <li>80C, 80D Benefits</li>
          <li>Tax-free Returns</li>
        </ul>`;
      break;
    default:
      content = `<p>Service not found.</p>`;
  }

  modalBody.innerHTML = content;
  modal.style.display = "flex";
};

window.closeModal = function () {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};

// ========== Show Consultation Popup After 30 Seconds ==========
window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.getElementById("cta-popup2");
    if (popup && popup.style.display === "none") {
      popup.style.display = "block";
    }
  }, 30000); // 30 seconds
});

// ========== Tilt Animation ==========
if (typeof VanillaTilt !== "undefined") {
  VanillaTilt.init(document.querySelectorAll(".service-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
}

// =================== service card animation ================
 
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
});

// Service card filtering

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button styling
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            serviceCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';

                    // Re-trigger animation
                    card.classList.remove('animate'); 
                    setTimeout(() => card.classList.add('animate'), 50);

                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});



// JS for customer's review sliding

const slides = document.querySelectorAll('.review-slide');
const prevBtn = document.getElementById('prev-review');
const nextBtn = document.getElementById('next-review');
const dots = document.querySelectorAll('.pagination-dots span');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-index'));
        showSlide(currentSlide);
    });
});

// Optional: Auto slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);


// Helper to get number without commas or text
function getNumericValue(id) {
    const el = document.getElementById(id);
    if (!el) return 0;
    const raw = el.value.replace(/,/g, '').trim();
    return parseFloat(raw) || 0;
}


function calculateSIP() {
    let monthlyInvestment = getNumericValue("monthlyInvestment");
    let annualReturn = getNumericValue("annualReturn");
    let durationYears = getNumericValue("durationYears");

    const progressFill = document.getElementById('progressFill');
    const sipType = document.querySelector('input[name="sipType"]:checked')?.value || "start"; 
    // "start" = Groww style, "end" = standard

    // Validation
    if (!monthlyInvestment || !annualReturn || !durationYears) {
        alert('Please enter all values!');
        return;
    }

    // Progress Bar Animation
    progressFill.style.width = '0%';
    setTimeout(() => {
        progressFill.style.width = '100%';
    }, 100);

    // Calculations
    const monthlyRate = annualReturn / 12 / 100;
    const months = durationYears * 12;

    // Base SIP formula
    let futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    // Groww-style (start of month) multiplies by (1+r)
    if (sipType === "start") {
        futureValue *= (1 + monthlyRate);
    }

    const investedAmount = monthlyInvestment * months;
    const returns = futureValue - investedAmount;

    // Update UI
    document.getElementById('sipResult').style.display = 'block';
    document.getElementById('investedAmount').innerText = 
        `Total Invested: ₹${investedAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    document.getElementById('expectedReturns').innerText = 
        `Expected Maturity Amount: ₹${futureValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

    generateChart(investedAmount, returns);
}



function generateChart(invested, returns) {
    const ctx = document.getElementById('returnsChart').getContext('2d');

    if (window.returnsChart instanceof Chart) {
        window.returnsChart.destroy();
    }

    window.returnsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Invested Amount', 'Returns Earned'],
            datasets: [{
                data: [invested, returns],
                backgroundColor: ['#0a3d62', '#60a3bc']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ₹${context.parsed.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
}


// Lumpsum Calculator

function calculateLumpsum() {
  const P = getNumericValue("lumpAmount");      // principal
  const rPct = getNumericValue("lumpRate");     // % per year (e.g., 12 for 12%)
  const n = getNumericValue("lumpYears");       // years

  // validation
  if (!Number.isFinite(P) || P <= 0 ||
      !Number.isFinite(rPct) || rPct < 0 ||
      !Number.isFinite(n) || n <= 0) {
    alert("Please enter valid positive values (rate can be 0).");
    return;
  }

  const r = rPct / 100;                         // convert % -> decimal
  const FV = P * Math.pow(1 + r, n);
  const principal = P;
  const gain = FV - P;

  document.getElementById('lumpResult').innerHTML = `
    <p>🧮 <strong>Future Value:</strong> <span class="highlight">₹${FV.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p>
    <p>💸 <strong>Total Investment:</strong> ₹${principal.toLocaleString('en-IN')}</p>
    <p>📈 <strong>Profit Earned:</strong> ₹${gain.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
  `;

  document.getElementById('lumpsumChartContainer').style.display = 'block';

  // destroy previous chart if exists and is valid
    if (window.lumpsumChart && typeof window.lumpsumChart.destroy === 'function') {
        window.lumpsumChart.destroy();
    }

  // draw new chart
  const ctx = document.getElementById('lumpsumChart').getContext('2d');
  window.lumpsumChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Invested', 'Returns'],
      datasets: [{
        data: [principal, gain],
        backgroundColor: ['#03a9f4', '#8bc34a'],
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}



// Retirement Corpus

// Retirement Corpus (simple rule-of-thumb approach)
function calculateRetirement() {
  const age = getNumericValue("currentAge");
  const retireAge = getNumericValue("retirementAge");
  const monthly = getNumericValue("monthlyExpense");   // today's monthly expense
  const inflationPct = getNumericValue("inflationRate"); // % per year, e.g., 6

  // validation
  if (!Number.isFinite(age) || !Number.isFinite(retireAge) ||
      !Number.isFinite(monthly) || monthly <= 0 ||
      !Number.isFinite(inflationPct) || inflationPct < 0) {
    alert("Please enter valid values. Monthly expense must be > 0. Inflation can be 0.");
    return;
  }
  const yearsLeft = retireAge - age;
  if (yearsLeft <= 0) {
    alert("Retirement age must be greater than current age.");
    return;
  }

  const inflation = inflationPct / 100;  // % -> decimal

  // Inflate today's monthly expense to retirement
  const futureMonthly = monthly * Math.pow(1 + inflation, yearsLeft);

  // Corpus using 25x annual-expense rule (i.e., 300x the monthly expense at retirement)
  const corpusNeeded = futureMonthly * 12 * 25;

  // Simple contribution tally (does NOT assume returns on contributions)
  const totalContributed = monthly * 12 * yearsLeft;
  const projectedGrowthPortion = Math.max(corpusNeeded - totalContributed, 0);

  document.getElementById('retirementResult').innerHTML = `
    <p>📅 <strong>Years to Retirement:</strong> ${yearsLeft} years</p>
    <p>💰 <strong>Monthly Expenses at Retirement:</strong> ₹${futureMonthly.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
    <p>🏦 <strong>Estimated Corpus Needed:</strong> <span class="highlight">₹${corpusNeeded.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p>
  `;

  document.getElementById('retirementChartContainer').style.display = 'block';

  // destroy previous chart if exists and is valid
    if (window.retireChart && typeof window.retireChart.destroy === 'function') {
        window.retireChart.destroy();
    }

  const ctx = document.getElementById('retirementChart').getContext('2d');
  window.retireChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Your Contributions (till retirement)', 'Projected Growth/Gap'],
      datasets: [{
        data: [totalContributed, projectedGrowthPortion],
        backgroundColor: ['#00bcd4', '#e91e63'],
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}



// EMI Calculator
function calculateEMI() {
    let P = getNumericValue("loanAmount");
    let annualRate = getNumericValue("loanRate");
    let tenure = getNumericValue("loanTenure");


    if (!P || !annualRate || !tenure) return alert("Please fill all values");

    const r = annualRate / 12 / 100;
    const n = tenure * 12;
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    document.getElementById('emiResult').innerHTML = `
        <p>💳 <strong>Monthly EMI:</strong> <span class="highlight">₹${emi.toLocaleString('en-IN', {minimumFractionDigits: 2})}</span></p>
        <p>📅 <strong>Tenure:</strong> ${n} months</p>
        <p>📈 <strong>Total Interest:</strong> ₹${totalInterest.toLocaleString('en-IN', {minimumFractionDigits: 2})}</p>
        <p>💵 <strong>Total Payment:</strong> ₹${totalPayment.toLocaleString('en-IN', {minimumFractionDigits: 2})}</p>
    `;

    document.getElementById('emiChartContainer').style.display = 'block';

    // destroy previous chart if exists and is valid
    if (window.emiPieChart && typeof window.emiPieChart.destroy === 'function') {
        window.emiPieChart.destroy();
    }
  
    // EMI Pie Chart
    const ctx = document.getElementById('emiChart').getContext('2d');
    if (window.emiPieChart) window.emiPieChart.destroy();
    window.emiPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [P, totalInterest],
                backgroundColor: ['#4caf50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'EMI Breakdown' }
            }
        }
    });
}



function calculateGoalSIP() {

    let goalAmount = getNumericValue("goalAmount");
    let annualReturn = getNumericValue("goalReturn");
    let years = getNumericValue("goalYears");
    let inflationRate = getNumericValue("goalInflation");


    if (!goalAmount || !annualReturn || !years) return alert("Please fill all values");

    // Adjust goal for inflation (Future Value of today's goal)
    const FV = goalAmount * Math.pow(1 + inflationRate / 100, years);

    const r = annualReturn / 12 / 100;
    const n = years * 12;

    // SIP formula: PMT = FV * r / ((1+r)^n - 1) * (1+r)
    const sip = FV * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
    const investedAmount = sip * n;
    const returns = FV - investedAmount;

    document.getElementById('goalSIPResult').innerHTML = `
        <p>🎯 <strong>Today's Goal:</strong> ₹${goalAmount.toLocaleString('en-IN')}</p>
        <p>📈 <strong>Inflation-adjusted Goal:</strong> ₹${FV.toLocaleString('en-IN', {minimumFractionDigits: 2})}</p>
        <p>📅 <strong>Duration:</strong> ${years} years</p>
        <p>💸 <strong>Required SIP:</strong> 
            <span class="highlight">₹${sip.toLocaleString('en-IN', {minimumFractionDigits: 2})}/month</span>
        </p>
    `;

    document.getElementById('goalChartContainer').style.display = 'block';

    // destroy previous chart if exists and is valid
    if (window.goalPieChart && typeof window.goalPieChart.destroy === 'function') {
        window.goalPieChart.destroy();
    }


    // Goal SIP Pie Chart
    const ctx = document.getElementById('goalChart').getContext('2d');
    window.goalPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Invested', 'Returns'],
            datasets: [{
                data: [investedAmount, returns],
                backgroundColor: ['#2196f3', '#ff9800'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Goal SIP Contribution' }
            }
        }
    });
}




// Tax Saving Estimator
function calculateTaxSavings() {
    let sec80C = getNumericValue("sec80C");
    let sec80D = getNumericValue("sec80D");
    let sec24b = getNumericValue("sec24b");


    const max80C = Math.min(sec80C, 150000);
    const max80D = Math.min(sec80D, 50000);
    const max24b = Math.min(sec24b, 200000);

    const totalEligibleDeduction = max80C + max80D + max24b;
    const assumedGrossIncome = 1000000; // Optional: you can allow user input for this
    const remainingTaxableIncome = assumedGrossIncome - totalEligibleDeduction;

    document.getElementById('taxResult').innerHTML = `
        <p>📘 <strong>80C Claimed:</strong> ₹${max80C.toLocaleString('en-IN')}</p>
        <p>🩺 <strong>80D Claimed:</strong> ₹${max80D.toLocaleString('en-IN')}</p>
        <p>🏠 <strong>Section 24(b):</strong> ₹${max24b.toLocaleString('en-IN')}</p>
        <p>🧾 <strong>Total Estimated Tax Saving:</strong> <span class="highlight">₹${totalEligibleDeduction.toLocaleString('en-IN')}</span></p>
    `;

    // Show chart container
    document.getElementById('taxChartContainer').style.display = 'block';

    // destroy previous chart if exists and is valid
    if (window.taxChart && typeof window.taxChart.destroy === 'function') {
        window.taxChart.destroy();
    }


    // Draw pie chart
    const ctx = document.getElementById('taxChart').getContext('2d');
    window.taxChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Tax Saved', 'Remaining Taxable Income'],
            datasets: [{
                data: [totalEligibleDeduction, remainingTaxableIncome],
                backgroundColor: ['#4caf50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}



function toggleCalc(id) {
    const calc = document.getElementById(id);
    if (calc.style.display === 'none' || calc.style.display === '') {
    calc.style.display = 'block';
    } else {
    calc.style.display = 'none';
    }
}



// Dynamic stats JS

async function updateLiveStats() {
    const API_KEY = '7504878df06542e4898e0220d2accb2e'; // Replace with your Twelve Data API key

    const symbols = {
        sensex: 'BSESN',            // Bombay Stock Exchange Index
        nifty: 'NSEI',              // National Stock Exchange Index
        banknifty: 'NSE:BANKNIFTY', // Bank Nifty Index
        gold: 'XAU/USD'             // Gold in USD
    };

    try {
        const responses = await Promise.all([
            fetch(`https://api.twelvedata.com/quote?symbol=${symbols.sensex}&apikey=${API_KEY}`),
            fetch(`https://api.twelvedata.com/quote?symbol=${symbols.nifty}&apikey=${API_KEY}`),
            fetch(`https://api.twelvedata.com/quote?symbol=${symbols.banknifty}&apikey=${API_KEY}`),
            fetch(`https://api.twelvedata.com/quote?symbol=${symbols.gold}&apikey=${API_KEY}`)
        ]);

        const [sensexData, niftyData, bankNiftyData, goldData] = await Promise.all(responses.map(res => res.json()));

        document.getElementById('sensex').innerText =
            sensexData && sensexData.price ? `${parseFloat(sensexData.price).toFixed(2)} pts` : 'Unavailable';

        document.getElementById('nifty').innerText =
            niftyData && niftyData.price ? `${parseFloat(niftyData.price).toFixed(2)} pts` : 'Unavailable';

        document.getElementById('banknifty').innerText =
            bankNiftyData && bankNiftyData.price ? `${parseFloat(bankNiftyData.price).toFixed(2)} pts` : 'Unavailable';

        document.getElementById('gold').innerText =
            goldData && goldData.price ? `₹${(parseFloat(goldData.price) * 83).toFixed(2)} per 10g` : 'Unavailable'; // USD to INR approx

    } catch (err) {
        console.error('Error fetching live stats:', err);
        document.getElementById('sensex').innerText = 'Error';
        document.getElementById('nifty').innerText = 'Error';
        document.getElementById('banknifty').innerText = 'Error';
        document.getElementById('gold').innerText = 'Error';
    }
}

// Initial fetch
updateLiveStats();

// Optional: Update every 15 minutes
setInterval(updateLiveStats, 15 * 60 * 1000);



// Home page additional features

// WhatsApp and Quick Contact Popup
function openQuickContact() {
    document.getElementById('quickContactPopup').style.display = 'block';
}
function closeQuickContact() {
    document.getElementById('quickContactPopup').style.display = 'none';
}

function submitQuickContact(event) {
    event.preventDefault();
    const name = document.getElementById('qcName').value;
    const email = document.getElementById('qcEmail').value;
    const message = document.getElementById('qcMessage').value;
    
    alert(`Thanks ${name}! We'll get back to you shortly.`);
    closeQuickContact();
    // Optionally send this data to a backend or email service
}






