import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, FileText, Cookie, Layers } from 'lucide-react';

const Legal = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            <Layers className="legal-hero-icon" />
            <h1>Legal Notices & Policies</h1>
            <p className="large-lead">
              Gurnoor Plast is committed to industrial compliance, high-quality standards, transparency, and eco-friendly polymer manufacturing practices since our establishment in 2010.
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-body">
        <div className="container legal-container">
          {/* PRIVACY POLICY */}
          <div className="legal-section-card" id="privacy">
            <div className="section-title-wrapper">
              <Shield className="legal-section-icon" />
              <h2>Privacy Policy</h2>
            </div>
            <span className="last-updated">Last Updated: May 2026</span>
            <div className="legal-content-text">
              <p>
                This Privacy Policy explains how Gurnoor Plast ("we", "our", or "us") collects, uses, shares, and protects your information when you visit our website, request custom preform quotes, or contact our team under the management of CEO Gagandeep Kaur and MD Hardev Singh.
              </p>
              <h3>1. Information We Collect</h3>
              <p>
                When you inquire about our premium PET preforms or bottles, we collect the necessary business and personal identification data you provide. This includes your name, work email, phone number, company name, product configurations, and preferred neck sizes.
              </p>
              <h3>2. How We Use Your Information</h3>
              <p>
                We use the collected information to process custom quotation requests, manufacture customized samples, conduct factory audits, and respond to your queries. Your technical specifications are reviewed directly by our management team to ensure 100% quality assurance.
              </p>
              <h3>3. Data Sharing & Security</h3>
              <p>
                We do not sell, rent, or lease your corporate or personal data. All specifications are securely stored on our local systems at our Ludhiana, Punjab corporate factory. Only authorized procurement managers have access to these files.
              </p>
            </div>
          </div>

          {/* TERMS OF SERVICE */}
          <div className="legal-section-card" id="terms">
            <div className="section-title-wrapper">
              <FileText className="legal-section-icon" />
              <h2>Terms of Service</h2>
            </div>
            <span className="last-updated">Last Updated: May 2026</span>
            <div className="legal-content-text">
              <p>
                Welcome to Gurnoor Plast. By browsing this website, requesting quotes, or partnering with us for PET bottle manufacturing, you agree to comply with and be bound by the following Terms & Conditions.
              </p>
              <h3>1. Quotations and Sample Moulding</h3>
              <p>
                All sample moulds and custom grammage quotes offered by Gurnoor Plast are subject to stock availability and active technical clearance from our quality assurance team. Orders are finalized upon written consent and corporate contract signatures from MD Hardev Singh or CEO Gagandeep Kaur.
              </p>
              <h3>2. Manufacturing Tolerances</h3>
              <p>
                Gurnoor Plast PET preforms are manufactured to strict industrial standards with typical weight tolerances of ±0.2g and thread tolerances within 0.05mm. Slight deviations from sample sheets are permitted within pre-approved parameters agreed during ordering.
              </p>
              <h3>3. Waste Granulation & Sustainability Compliance</h3>
              <p>
                Gurnoor Plast operates a transparent circular recycling program processing 15+ tonnes of polymer scrap every month. Customers requesting the integration of recycled polymers into secondary packaging acknowledge that recycled material parameters differ slightly in mechanical characteristics from 100% virgin food-grade runs.
              </p>
            </div>
          </div>

          {/* COOKIE POLICY */}
          <div className="legal-section-card" id="cookie">
            <div className="section-title-wrapper">
              <Cookie className="legal-section-icon" />
              <h2>Cookie Policy</h2>
            </div>
            <span className="last-updated">Last Updated: May 2026</span>
            <div className="legal-content-text">
              <p>
                Gurnoor Plast uses cookies to optimize website performance, provide an outstanding responsive mobile design, and analyze traffic.
              </p>
              <h3>1. What are Cookies?</h3>
              <p>
                Cookies are small text files stored on your computer or mobile device when you browse our site. They help us understand which sections are most popular (such as our primary focus on PET preforms) and remember your submission parameters.
              </p>
              <h3>2. Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required to enable core navigation, smooth page animations, and quote form submissions.</li>
                <li><strong>Performance Cookies:</strong> Enable us to track site speeds, analyze mobile UI responsiveness, and optimize load performance.</li>
                <li><strong>Consent Cookies:</strong> Keep track of whether you have accepted or declined the cookie prompt so we do not prompt you repeatedly.</li>
              </ul>
              <h3>3. Managing Cookie Consent</h3>
              <p>
                You can decline optional cookies in our cookie prompt or disable them in your browser settings. Declining cookies will not impact your access to our primary corporate contact details or product specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
