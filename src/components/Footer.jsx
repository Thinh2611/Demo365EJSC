import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <div>© {new Date().getFullYear()} BrightWear — Made with ❤️</div>
      <div className="socials">Instagram · Facebook · TikTok</div>
    </div>
  </footer>
);

export default Footer;
