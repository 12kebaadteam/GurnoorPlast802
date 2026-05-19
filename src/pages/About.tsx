import { motion } from 'framer-motion';
import { Award, ShieldCheck, Leaf, Sparkles, Calendar, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Ultimate Quality Assurance',
      text: 'For us, quality is not a department; it is a philosophy. From raw material intake to final packing, we enforce multi-stage optical, mechanical, and stress evaluations.',
      icon: <ShieldCheck className="text-luxury-gold" size={24} />,
    },
    {
      title: '50-Tonne Circular Sustainability',
      text: 'We are committed to reducing environmental load. By processing more than 50 tonnes of waste polymer monthly, we play an active role in sustainable circular supply loops.',
      icon: <Leaf className="text-eco-green" size={24} />,
    },
    {
      title: 'State-of-the-Art Precision',
      text: 'Our automated Japanese and European moulding platforms ensure ultra-tight tolerances, high thermal resistance, and perfect thread dimensions for flawless blow-moulding.',
      icon: <Sparkles className="text-accent" size={24} />,
    },
  ];

  const milestones = [
    { year: '2010', title: 'The Foundation', desc: 'Gurnoor Plast was established in Plot 802, Sector 82, Mohali, Punjab with a single micro-injection line and a bold mission: to produce precision PET preforms with zero waste.' },
    { year: '2014', title: 'Expansion & Automation', desc: 'Upgraded to fully automated high-speed moulding machines, tripling capacity and introducing specialized neck dimensions for international clients.' },
    { year: '2019', title: 'The 50-Tonne Green Goal', desc: 'Inaugurated our dedicated in-house recycling and granulation facility, successfully processing and redirecting over 50 tonnes of material waste every month.' },
    { year: '2024 & Beyond', title: 'Global Benchmarks', desc: 'Achieved ISO certifications and expanded cleanroom facilities, exporting top-quality PET Preforms to beverages, pharmaceutical, and cosmetic companies worldwide.' },
  ];

  return (
    <div className="about-page">
      {/* HEADER SECTION */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <span className="section-tag"><Calendar size={14} /> Established in 2010</span>
            <h1>Crafting the Future of Packaging</h1>
            <p className="large-lead">
              Gurnoor Plast is a leading premium polymer manufacturer specializing in premium PET preforms and custom PET bottles. Guided by a decade of engineering excellence, an absolute focus on quality, and strict eco-friendly circular loop values.
            </p>
          </motion.div>

          <div className="about-hero-visual">
            <div className="image-placeholder about-main-placeholder">
              <div className="placeholder-overlay">
                <Sparkles size={40} className="placeholder-icon" />
                <span>[ State-of-the-Art Injection Moulding Facility ]</span>
                <p>Cleanroom-compliant food-grade preform manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section values-section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Philosophy</span>
            <h2>Values That Drive Excellence</h2>
            <p className="section-desc">
              At Gurnoor Plast, we operate under a strict code of engineering precision, premium light aesthetics, and clean resource conservation.
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="value-card"
              >
                <div className="value-icon-wrapper">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE LAB */}
      <section id="quality" className="section qa-section">
        <div className="container qa-grid">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="qa-content"
          >
            <span className="section-tag"><Award size={14} /> Zero-Tolerance Policy</span>
            <h2>Uncompromising Quality Assurance</h2>
            <p>
              Our reputation is anchored in quality assurance. Gurnoor Plast PET preforms are renowned for their flawless blowability, high mechanical resistance, and exquisite high-end sheen. We guarantee this through rigorous, automated inspections at every step:
            </p>
            <ul className="qa-list">
              <li>
                <CheckCircle2 size={18} className="qa-check-icon" />
                <div>
                  <h4>Polarized Stress Analysis</h4>
                  <p>Detects hidden molecular stresses and ensures uniform blowing thickness.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="qa-check-icon" />
                <div>
                  <h4>Dimensional Tolerance Testing</h4>
                  <p>Ensures thread measurements are accurate to within 0.05mm for a leak-proof seal.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="qa-check-icon" />
                <div>
                  <h4>Acetaldehyde (AA) Level Inspections</h4>
                  <p>Strictly controlled AA levels to preserve the absolute taste and purity of water and beverages.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="qa-visual"
          >
            <div className="image-placeholder qa-placeholder">
              <div className="placeholder-overlay">
                <ShieldCheck size={40} className="placeholder-icon text-luxury-gold" />
                <span>[ Quality Control Lab & Polarized Testing Image ]</span>
                <p>Automated visual screening for zero defects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUSTAINABILITY DETAILS */}
      <section id="sustainability-details" className="section sustainability-detailsbg bg-light">
        <div className="container sustainability-details-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sustainability-details-visual"
          >
            <div className="image-placeholder recycling-placeholder">
              <div className="placeholder-overlay">
                <Leaf size={40} className="placeholder-icon text-eco-green" />
                <span>[ Granulator & Waste Recycle System Image ]</span>
                <p>Recycling 15,000+ kg of polymer waste monthly</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sustainability-details-content"
          >
            <span className="section-tag text-eco-green"><Leaf size={14} /> Circular Manufacturing</span>
            <h2>Our 50-Tonne Sustainability Loop</h2>
            <p>
              As a responsible industrial manufacturer, Gurnoor Plast has been at the forefront of polymer recycling since 2010. Our state-of-the-art facility features a closed-loop system designed to make production completely sustainable.
            </p>
            <div className="green-box">
              <h4>Active Monthly Impact: 50+ Tonnes</h4>
              <p>
                Every month, we process and redirect more than 50 tonnes of plastic waste that would otherwise go to waste. We granulate 100% of our post-industrial moulding scrap and mix it in careful ratios with premium virgin materials for non-food structural applications, or supply it to partner industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><TrendingUp size={14} /> Our Evolution</span>
            <h2>Journey of Innovation</h2>
            <p className="section-desc">
              How a small Mohali workshop grew into a state-of-the-art national supplier of premium PET preforms.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {milestones.map((mile, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-dot">
                  <Layers size={14} />
                </div>
                <div className="timeline-card">
                  <span className="timeline-year">{mile.year}</span>
                  <h3>{mile.title}</h3>
                  <p>{mile.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE BOARD */}
      <section className="section leaders-page bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Governance</span>
            <h2>Executive Board</h2>
            <p className="section-desc">
              Meet the minds guiding Gurnoor Plast's quality metrics, environmental milestones, and long-term industrial partnerships.
            </p>
          </div>

          <div className="executive-grid" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="exec-card"
              style={{
                display: 'block',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div className="exec-info-side">
                <span className="exec-meta" style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Founding Team
                </span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '4px', fontFamily: 'Outfit, sans-serif' }}>
                  Gagandeep Kaur
                </h3>
                <span className="exec-title" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '500' }}>
                  Chief Executive Officer (CEO)
                </span>
                <p className="exec-bio" style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                  Gagandeep has led Gurnoor Plast since 2010 with a singular vision: merging premium packaging with responsible eco-awareness. Holding an advanced degree in Materials Engineering, she has driven our green policies and oversees the in-house waste management facility that reprocesses 15+ tonnes each month. Under her leadership, Gurnoor Plast has secured numerous quality certifications and established international supply channels.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="exec-card"
              style={{
                display: 'block',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div className="exec-info-side">
                <span className="exec-meta" style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Founding Team
                </span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '4px', fontFamily: 'Outfit, sans-serif' }}>
                  Hardev Singh
                </h3>
                <span className="exec-title" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '500' }}>
                  Managing Director (MD)
                </span>
                <p className="exec-bio" style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                  With over 20 years in the polymer blow-moulding industry, Hardev directs our factory operations, mould customization, and rigorous quality assurance labs. His expertise in mechanical testing ensures that every preform produced at Gurnoor Plast offers optimal heat distribution, flawless neck profiles, and zero stress fractures, setting the benchmark for beverage blowers nationwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
