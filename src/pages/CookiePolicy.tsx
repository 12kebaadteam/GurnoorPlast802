import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-page" style={{ paddingTop: '100px' }}>
      <section className="legal-hero" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(13, 148, 136, 0.04) 0%, transparent 60%)', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <div className="legal-hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Cookie size={48} style={{ color: 'var(--accent)', marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3.2rem', marginBottom: '20px', fontFamily: 'Outfit, sans-serif' }}>Cookie Policy</h1>
            <p className="large-lead">
              Learn how GPlast uses cookies to optimize website speed, analyze mobile UI responsiveness, and remember your technical specifications inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-body" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="legal-section-card" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px', boxShadow: 'var(--shadow-sm)' }}>
            <span className="last-updated" style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-light)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
              Last Updated: May 2026
            </span>
            
            <div className="legal-content-text" style={{ color: 'var(--text-muted)', lineHeight: '1.65' }}>
              <p style={{ marginBottom: '16px' }}>
                GPlast uses cookies to optimize website performance, provide an outstanding responsive mobile design, and analyze traffic.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>1. What are Cookies?</h3>
              <p style={{ marginBottom: '16px' }}>
                Cookies are small text files stored on your computer or mobile device when you browse our site. They help us understand which sections are most popular (such as our primary pages for PET preforms) and remember your submission parameters.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>2. Types of Cookies We Use</h3>
              <ul style={{ listStyle: 'disc', marginLeft: '20px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Essential Cookies:</strong> Required to enable core navigation, smooth page animations, and quote form submissions.</li>
                <li><strong>Performance Cookies:</strong> Enable us to track site speeds, analyze mobile UI responsiveness, and optimize load performance.</li>
                <li><strong>Consent Cookies:</strong> Keep track of whether you have accepted or declined the cookie prompt so we do not prompt you repeatedly.</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>3. Managing Cookie Consent</h3>
              <p style={{ marginBottom: '16px' }}>
                You can decline optional cookies in our cookie prompt or disable them in your browser settings. Declining cookies will not impact your access to our primary corporate contact details or product specifications.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>4. Further Information</h3>
              <p style={{ marginBottom: '16px' }}>
                If you have questions regarding our use of cookies or technical site performance, reach out to our team at Plot 802, Sector 82, Mohali, Punjab:
              </p>
              <ul style={{ listStyle: 'none', marginLeft: '0', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '10px', borderLeft: '3px solid var(--accent-light)' }}>
                <li>Email: gurnoorplast@gmail.com</li>
                <li>Telephone: +91 9815532082 / +91 9815555788</li>
                <li>Address: Plot 802, Sector 82, Mohali, Punjab, 140308</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
