import { Link } from 'react-router-dom';
import { Layers, Mail, Phone, MapPin, Globe, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <Layers className="logo-icon" />
            <span>GPlast</span>
          </Link>
          <p className="footer-desc">
            Premium PET Preforms and Bottles since 2010. Leading the industry with ultimate quality assurance, modern technology, and sustainable manufacturing practices.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://gplast.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Website">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Products</h3>
          <ul>
            <li><Link to="/#products">PET Preforms</Link></li>
            <li><Link to="/#products">PET Bottles</Link></li>
            <li><Link to="/about#quality">Quality Assurance</Link></li>
            <li><Link to="/sustainability">Eco-Friendly Initiatives</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} className="contact-icon" />
              <span>+91 98155 32082</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '24px' }}>
              <span>+91 98155 55788</span>
            </div>
          </div>
          <div className="contact-item">
            <Mail size={16} className="contact-icon" />
            <span>gurnoorplast@gmail.com</span>
          </div>
          <div className="contact-item font-address">
            <MapPin size={16} className="contact-icon" />
            <span>Plot 802, Sector 82, Mohali, Punjab, India, 140308</span>
          </div>
          <div className="est-badge">
            <Shield size={14} className="badge-icon" />
            <span>Est. 2010</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
            <p className="copyright" style={{ margin: 0 }}>&copy; {currentYear} GPlast. All Rights Reserved.</p>
            <p style={{ margin: 0, fontSize: '0.78rem', opacity: 0.6, letterSpacing: '0.5px' }}>
              Designed & Developed by MyPaperTrail
            </p>
          </div>
          <div className="legal-links" style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
