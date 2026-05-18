import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gplast-cookie-consent');
    if (!consent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gplast-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gplast-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="cookie-popup"
        >
          <div className="cookie-content">
            <div className="cookie-header">
              <div className="cookie-icon-wrapper">
                <Cookie className="cookie-icon" size={20} />
              </div>
              <h4>We Value Your Privacy</h4>
              <button 
                onClick={() => setIsVisible(false)} 
                className="cookie-close-btn"
                aria-label="Close cookie banner"
              >
                <X size={16} />
              </button>
            </div>
            <p className="cookie-text">
              We use cookies to enhance your experience, analyze site traffic, and support our sustainability tracking. 
              By clicking "Accept", you agree to our use of cookies as detailed in our{' '}
              <Link to="/cookie-policy" className="cookie-link">Cookie Policy</Link>.
            </p>
            <div className="cookie-actions">
              <button onClick={handleDecline} className="btn-cookie-decline">
                Decline
              </button>
              <button onClick={handleAccept} className="btn-cookie-accept">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePopup;
