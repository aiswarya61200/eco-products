import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo-section">
          <img src="/assets/Logo.png" alt="Ecozaar Logo" className="logo" />
          <p className="tagline">India’s one-stop green shop</p>
        </div>

        {/* Resource */}
        <div className="footer-section">
          <h3>Resource</h3>
          <ul>
            <li>About us</li>
            <li>FAQs</li>
            <li>Offers T & C</li>
            <li>Calculator</li>
            <li>Service Centers Nearby</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Sell-on-Ecozaar</li>
            <li>Referrn And Earn</li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>Rooftop Solar</li>
            <li>2 Wheeler EVs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Autovirt Technologies Pvt Ltd</p>
          <p>
            1082, 2nd Floor, 12th Main Rd,
            <br />
            Indiranagar, Bangalore 560008
          </p>
          <p>📞 (+91) 6366303807</p>
          <p>📧 support@ecozaar.in</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Autovert® Copyright 2025, Inc.</p>
        <div className="footer-social">
          <span>Join Us</span>
          <div className="icons">
            <a href="#" aria-label="Facebook">
              <img src="/assets/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/assets/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
