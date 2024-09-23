import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul className="footer-list">
          <li><a href="#help">Help</a></li>
          <li><a href="#how-to-listen">How to Listen</a></li>
          <li><a href="#listening-apps">Listening Apps</a></li>
          <li><a href="#audible-suno">Audible Suno</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul className="footer-list">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
        <h3>More</h3>
        <li><a href="#free-shows">Free Shows & Audiobooks</a></li>
          <li><a href="#mysteries-thrillers">Mysteries & Thrillers</a></li>
          <li><a href="#romance">Romance</a></li>
          <li><a href="#fiction">Fiction</a></li>
          <li><a href="#sci-fi-fantasy">Sci-Fi & Fantasy</a></li>
          <li><a href="#self-development">Self Development</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Learn More About Audible</h3>
        <ul className="footer-list">
          <li><a href="#membership">Learn more about membership</a></li>
          <li><a href="#best-sellers">Best Sellers</a></li>
          <li><a href="#new-releases">New Releases</a></li>
          <li><a href="#indian-listens">Indian Listens</a></li>
          <li><a href="#hindi-audiobooks">Hindi Audiobooks</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-copyright">
      <p>&copy; 1997 - 2024 Audible, Inc. All rights reserved.</p>
      <p>Conditions of Use | Privacy Notice | Interest-Based Ads | Recurring Payment Terms | India (English)</p>
    </div>
  </footer>
);

export default Footer;
