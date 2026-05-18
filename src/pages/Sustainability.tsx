import { motion } from 'framer-motion';
import { Leaf, Recycle, Trash2, Layers, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sustainability = () => {
  return (
    <div className="sustainability-page" style={{ paddingTop: '100px' }}>
      {/* HERO SECTION */}
      <section className="about-hero" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(13, 148, 136, 0.04) 0%, transparent 60%)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <span className="section-tag" style={{ background: 'var(--eco-green-light)', color: 'var(--eco-green)' }}>
              <Leaf size={14} /> 100% Eco-Responsible
            </span>
            <h1>Our Green Commitment</h1>
            <p className="large-lead">
              At GPlast, we believe that premium packaging must go hand-in-hand with active planetary stewardship. We lead the Mohali industrial sector with a modern circular economy framework that turns waste into high-utility resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE CIRCULAR METRIC */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2.4rem', marginBottom: '24px', fontFamily: 'Outfit, sans-serif' }}>
                Redirecting Over 15 Tonnes of Material Monthly
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.7' }}>
                Our GPlast factory in Plot 802, Sector 82, Mohali actively processes and recycles more than 15 tonnes of polymer waste every single month. By creating structured secondary granulation pipelines, we capture post-industrial scrap and granulate it back into reusable material.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.7' }}>
                This proactive collection ensures that valuable raw polymers are diverted from local landfills and cleanly processed back into commercial supply cycles, supporting local sustainable industrial partnerships.
              </p>
              
              <div style={{
                background: 'var(--secondary)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid var(--border)',
                marginBottom: '20px'
              }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', marginBottom: '10px', color: 'var(--accent-dark)' }}>
                  <Recycle size={20} />
                  <span>The Granulation Loop</span>
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                  100% of our internal preform and blow-moulding scrap is sorted, mechanically granulated, and reused. This zero-scrap policy guarantees that no plastic materials are wasted during active production shifts.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: '400px' }}
            >
              <div className="image-placeholder eco-placeholder" style={{ height: '100%', borderColor: 'rgba(15, 118, 110, 0.2)' }}>
                <div className="eco-overlay" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px' }}>
                  <Leaf size={48} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontWeight: '600', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                    Circular Polymer Flows
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '280px' }}>
                    Plot 802, Sector 82, Mohali Factory Granulation System
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE SUSTAINABILITY PILLARS */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ background: 'var(--eco-green-light)', color: 'var(--eco-green)' }}>
              Green Operations
            </span>
            <h2>Our Sustainability Pillars</h2>
            <p className="section-desc">
              How we weave eco-responsible practices through our Mohali production facility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ background: '#ffffff', padding: '35px', borderRadius: '20px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                <Trash2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                Waste Reduction
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                By establishing granulated recycling systems, we successfully reuse our internal production run scrap and prevent pre-blowing materials from ending up as landfill waste.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '35px', borderRadius: '20px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                <Layers size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                Secondary Loops
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                reprocessing more than 15 tonnes of waste each month provides high-utility granulated stock which is integrated back into secondary structural plastic applications and partner packaging.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '35px', borderRadius: '20px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                <Award size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                Clean Procurement
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                We partner only with ethically validated raw-material suppliers who comply with safety regulations, keeping our supply chain fully aligned with international green standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="section cta-section" style={{ padding: '80px 0' }}>
        <div className="container cta-container">
          <div className="cta-glass">
            <h2>Ready to Transition to Eco-Friendly Packaging?</h2>
            <p>
              Work with us to customize secondary loops or order PET preforms built to strict eco-friendly parameters. Our consultants in Mohali are ready to guide you.
            </p>
            <div className="cta-actions" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Link to="/contact" className="btn btn-primary">
                Inquire For Specifications
              </Link>
              <Link to="/about" className="btn btn-outline">
                About Our Factory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
