import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page" style={{ paddingTop: '100px' }}>
      <section className="legal-hero" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(13, 148, 136, 0.04) 0%, transparent 60%)', textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <div className="legal-hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FileText size={48} style={{ color: 'var(--accent)', marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3.2rem', marginBottom: '20px', fontFamily: 'Outfit, sans-serif' }}>Terms of Service</h1>
            <p className="large-lead">
              Review Gurnoor Plast commercial terms, moulding policies, and contract parameters for ordering our premium PET preforms and custom bottles.
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
                Welcome to Gurnoor Plast. By browsing this website, requesting quotes, or partnering with us for PET bottle manufacturing, you agree to comply with and be bound by the following Terms & Conditions.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>1. Quotations and Sample Moulding</h3>
              <p style={{ marginBottom: '16px' }}>
                All sample moulds and custom grammage quotes offered by Gurnoor Plast are subject to stock availability and active technical clearance from our quality assurance team. Commercial contracts are finalized upon written consent and corporate contract signatures from MD Hardev Singh or CEO Gagandeep Kaur at our Mohali office.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>2. Manufacturing Tolerances</h3>
              <p style={{ marginBottom: '16px' }}>
                Gurnoor Plast PET preforms are manufactured to strict industrial standards with typical weight tolerances of ±0.2g and thread tolerances within 0.05mm. Slight deviations from sample sheets are permitted within pre-approved parameters agreed during active ordering.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>3. Waste Granulation & Sustainability Integration</h3>
              <p style={{ marginBottom: '16px' }}>
                Gurnoor Plast operates a transparent circular recycling program processing more than 50 tonnes of polymer scrap every month. Customers requesting the integration of recycled granulated polymers into secondary packaging acknowledge that recycled material parameters differ slightly in mechanical characteristics from 100% virgin food-grade runs.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>4. Governing Law</h3>
              <p style={{ marginBottom: '16px' }}>
                These Terms of Service and any commercial agreements entered into with Gurnoor Plast shall be governed by and construed in accordance with the laws of Punjab, India. Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts in Mohali, Punjab.
              </p>

              <h3 style={{ fontSize: '1.25rem', margin: '24px 0 10px', color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>5. General Inquiries</h3>
              <p style={{ marginBottom: '16px' }}>
                For contract inquiries, custom preform orders, or clarification regarding our manufacturing parameters, please reach out to our administration desk:
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

export default TermsOfService;
