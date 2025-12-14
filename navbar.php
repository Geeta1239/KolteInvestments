<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- Navbar -->

    <!-- Sticky Navbar Wrapper -->
    <div class="navbar-wrapper">
        <nav class="navbar">
            <div class="brand-wrapper">
                <img src="imgs/logo.jpg" alt="Logo" class="brand" height="60" width="200">
                <div class="brand-text">
                    <div class="brand-name">Deepak Kolte</div>
                    <div class="brand-tagline">An AMFI Registered Mutual Fund Distributor</div>
                    <div class="brand-tagline">ARN - 165448 , EUIN - 318883</div>
                </div>
            </div>

            <div class="menu-toggle" id="menu-toggle">&#9776;</div>

            <ul id="nav-links">
                <button class="close-btn" id="close-menu">&times;</button>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us!</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="blogs.html" class="active">Blogs</a></li>
                <li><a href="contact.html">Contact Us!</a></li>

                <!-- KYC Dropdown -->
                <li class="dropdown">
                    <a href="#">KYC ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="https://www.karvykra.com/upansearchglobalwithpanexempt.aspx">Know your KYC status</a></li>
                        <li><a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status">Know your AADHAR-PAN CARD LINKAGE status</a></li>
                    </ul>
                </li>


                <!-- Login Dropdown -->
                <li class="dropdown">
                    <a href="#">Login ▾</a>
                    <ul class="dropdown-menu">
                        <li><a target="_blank" href="https://kolteinvestments.themfbox.com/">PORTFOLIO Login</a></li>
                        <li class="dropdown">
                            <a href="#" onclick="event.preventDefault(); this.parentElement.classList.toggle('open');">
                                ADMIN Login ▾
                            </a>
                            <ul class="dropdown-menu">
                                <li><a target="_blank" href="https://www.mfuonline.com/">MFU BOX</a></li>
                                <li><a target="_blank" href="https://www.mutualfundtools.com/login">MUTUAL FUND TOOLS</a></li>
                                <li><a target="_blank" href="https://abhioneapp.adityabirlahealth.com/">ABHI Partner</a></li>
                                <li><a target="_blank" href="https://voltmoney.in/partner/signup/">VOLTMONEY Partner</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- Important Links Dropdown -->
                <li class="dropdown">
                    <a href="#">IMP Links ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="https://www.amfiindia.com/" target="_blank">AMFI</a></li>
                        <li><a href="https://www.sebi.gov.in/" target="_blank">SEBI</a></li>
                        <li><a href="https://www.rbi.org.in/" target="_blank">RBI</a></li>
                    </ul>
                </li>
                <li><a href="consultation.html" class="book-consultation">Book Consultation</a></li>

                <!-- <li><button class="cta-button" onclick="window.location.href='consultation.html'">
                        Book Consultation
                    </button></li> -->

            </ul>
        </nav>


        <!-- Market Ticker -->
        <div class="ticker-wrapper">
            <div class="ticker-title">
                <span class="live-dot"></span> Live Market Ticker
            </div>
            <div class="ticker">
                <div class="ticker-content" id="marketTicker">
                    Loading market data...
                </div>
            </div>
        </div>
    </div>
</body>

</html>