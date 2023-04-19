import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">My Store &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;