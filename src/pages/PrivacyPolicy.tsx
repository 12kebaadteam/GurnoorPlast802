import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page" style={{ paddingTop: '100px' }}>
      <section className="legal-hero" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(13, 148, 136, 0.04) 0%, transparent 60%)', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <div className="legal-hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Shield size={48} style={{ color: 'var(--accent)', marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3.2rem', marginBottom: '20px', fontFamily: 'Outfit, sans-serif' }}>Privacy Policy</h1>
            <p className="large-lead">
              Gurnoor Plast is committed to industrial compliance, premium quality, transparency, and eco-friendly polymer manufacturing practices at our facility since our establishment in 2010.
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
                This Privacy Policy explains how Gurnoor Plast (referred to as we, our, or us) collects, uses, shares, and protects your information when you visit our website, request custom preform quotes, or contact our team under the management of CEO Gagandeep Kaur and MD Hardev Singh.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>1. Corporate Identity & Facility</h3>
              <p style={{ marginBottom: '16px' }}>
                Our corporate manufacturing facility is located at Plot 802, Sector 82, Mohali, Punjab, 140306. General queries, data requests, and samples scheduling can be managed by calling +91 9815532082 or +91 9815555788, or via email at gurnoorplast@gmail.com.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>2. Information We Collect</h3>
              <p style={{ marginBottom: '16px' }}>
                When you inquire about our premium PET preforms or bottles, we collect the necessary business and personal identification data you choose to provide. This includes your name, work email, phone number, company name, product configurations, and preferred neck sizes.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>3. How We Use Your Information</h3>
              <p style={{ marginBottom: '16px' }}>
                We use the collected information to process custom quotation requests, manufacture customized samples, conduct factory audits, and respond to your queries. Your technical specifications are reviewed directly by our management team to ensure premium quality assurance and precise blowing compliance.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>4. Data Sharing & Security</h3>
              <p style={{ marginBottom: '16px' }}>
                We do not sell, rent, or lease your corporate or personal data. All specifications are securely stored on our local systems at our Mohali, Punjab corporate factory. Only authorized procurement managers have access to these files.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>5. Contact Information</h3>
              <p style={{ marginBottom: '16px' }}>
                For any questions regarding our data policies or to request deletion of your procurement specs from our archives, feel free to contact us:
              </p>
              <ul style={{ listStyle: 'none', marginLeft: '0', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '10px', borderLeft: '3px solid var(--accent-light)' }}>
                <li>Email: gurnoorplast@gmail.com</li>
                <li>Telephone: +91 9815532082 / +91 9815555788</li>
                <li>Address: Plot 802, Sector 82, Mohali, Punjab, 140306</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
