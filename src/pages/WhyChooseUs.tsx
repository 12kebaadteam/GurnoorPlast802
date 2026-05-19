import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles, CheckCircle2, Cpu, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Rigorous Quality Assurance',
      desc: 'Every batch of preforms and bottles undergoes demanding inspections for stress cracking, dimensional accuracy, weight consistency, and thermal stability to guarantee a defect-free output.',
      icon: <ShieldCheck size={28} />,
      details: [
        'Continuous optical scanning for surface imperfections',
        'Wall ratio verification for uniform blowing distribution',
        'Tight tolerances within 0.05mm on all thread dimensions',
        'Acetaldehyde level checks to preserve taste purity'
      ]
    },
    {
      title: 'Decade of Expertise (Est. 2010)',
      desc: 'With continuous engineering innovation since 2010, we possess deep operational knowledge of polymer properties, providing robust and reliable industrial supplies.',
      icon: <Award size={28} />,
      details: [
        'Over 16 years of polymer processing excellence',
        'Deep technical support for complex blow-moulding lines',
        'Proven supply consistency to major food and beverage firms',
        'Founding vision centered on flawless production results'
      ]
    },
    {
      title: 'State-of-the-Art Technology',
      desc: 'Equipped with fully automated high-speed moulding machinery, we maintain absolute consistency in mass manufacturing and deliver optimized cycle times.',
      icon: <Cpu size={28} />,
      details: [
        'Automated cleanrooms for food-grade packaging safety',
        'Advanced energy-saving hybrid injection moulding platforms',
        'Custom modular moulds designed for high blowing ratios',
        'Real-time automated weight and stress analysis'
      ]
    },
    {
      title: 'Sustainability at Heart',
      desc: 'We minimize our carbon footprint by implementing circular waste loops, ensuring that post-industrial scrap is responsibly granulated and reprocessed.',
      icon: <Heart size={28} />,
      details: [
        'Active circular economy loops in our Mohali factory',
        'Granulation of internal scrap for secondary applications',
        'More than 50 tonnes of material reprocessed monthly',
        'Zero-waste factory guidelines active since 2010'
      ]
    }
  ];

  return (
    <div className="why-choose-us-page" style={{ paddingTop: '100px' }}>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <span className="section-tag"><Sparkles size={14} /> Exceptional Standard</span>
            <h1>Why Industrial Leaders Choose Gurnoor Plast</h1>
            <p className="large-lead">
              Established in 2010, Gurnoor Plast stands for uncompromising quality, modern automation, and strict green standards. We produce premium PET Preforms and Bottles tailored for demanding blowing configurations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE DETAIL REASONS */}
      <section className="section why-details-section">
        <div className="container">
          <div className="why-details-grid" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.2fr',
                  gap: '40px',
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  alignItems: 'center'
                }}
                className="why-detail-card"
              >
                <div style={{ paddingRight: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'var(--accent-light)',
                    color: 'var(--accent-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    {reason.icon}
                  </div>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'Outfit, sans-serif' }}>
                    {reason.title}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                    {reason.desc}
                  </p>
                </div>

                <div style={{
                  background: 'var(--secondary)',
                  borderRadius: '16px',
                  padding: '30px',
                  border: '1px solid rgba(231, 229, 228, 0.6)'
                }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '16px', fontFamily: 'Outfit, sans-serif' }}>
                    Technical Execution Metrics
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {reason.details.map((detail, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section cta-section" style={{ paddingBottom: '80px' }}>
        <div className="container cta-container">
          <div className="cta-glass">
            <h2>Experience Flawless Quality Assurance</h2>
            <p>
              Join the growing list of industrial beverage, water, and pharmaceutical packagers who rely on our high-precision neck finishes and flawless mechanical strength.
            </p>
            <div className="cta-actions" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Link to="/contact" className="btn btn-primary">
                Request Preform Samples
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our History & Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
