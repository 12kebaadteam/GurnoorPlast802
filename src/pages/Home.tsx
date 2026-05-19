import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Leaf, Layers, Sparkles, Award, Trash2 } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  const statItems = [
    { value: '50T+', label: 'Waste Processed Monthly', icon: <Leaf className="text-eco-green" /> },
    { value: '100%', label: 'Quality Assurance Guarantee', icon: <ShieldCheck className="text-luxury-gold" /> },
    { value: '2010', label: 'Leading Since (Est.)', icon: <Award className="text-accent" /> },
  ];

  const products = [
    {
      title: 'Premium PET Preforms',
      subtitle: 'High Precision Injection Moulding',
      description: 'Manufactured with high-precision injection moulding, our PET preforms offer unparalleled clarity, optimal wall thickness, and zero contamination. Suitable for water, beverages, oils, and custom packaging.',
      features: ['Neck sizes: 28mm, 30/25, 38mm, 45mm', 'Custom grammage & weight optimization', 'Virgin food-grade raw materials', 'High mechanical strength & flawless finish'],
      accent: true,
    },
    {
      title: 'High-Durability PET Bottles',
      subtitle: 'Premium Blow Moulding',
      description: 'Elegant, resilient, and fully recyclable PET bottles crafted for retail excellence. Engineered to withstand high pressure while maintaining structural integrity and glass-like clarity.',
      features: ['Capacity range: 150ml to 5 Litres', 'Custom branding and structural layouts', 'Excellent barrier protection properties', 'Ergonomic grips & light-weight design'],
      accent: false,
    },
    {
      title: 'Specialty PET Jars & Sanitizers',
      subtitle: 'Food-Grade & Industrial Packaging',
      description: 'Elegant specialty honey jars, saunf bottles, turpentine oil containers, and high-durability hand sanitizer bottles engineered to meet strict chemical compliance and food safety standards.',
      features: ['Capacity range: 50ml to 3 Litres (HSN 39233010)', 'Specialty lines: Honey, Spice, Oil & Turpentine Jars', 'Highly secure leak-proof thread configurations', 'Available in transparent, green, amber & custom tints'],
      accent: false,
    },
  ];

  const reasons = [
    {
      title: 'Strict Quality Assurance',
      desc: 'Every preform undergoes rigorous testing for stress cracking, dimensional accuracy, weight consistency, and thermal stability to ensure 100% defect-free output.',
      icon: <ShieldCheck size={28} />,
    },
    {
      title: 'Decade of Expertise (Est. 2010)',
      desc: 'With over a decade of continuous innovation and experience, we understand the fine details of polymer engineering, offering dependable industrial manufacturing.',
      icon: <Award size={28} />,
    },
    {
      title: 'State-of-the-Art Technology',
      desc: 'Equipped with fully automated high-speed moulding lines, we maintain ultra-precise tolerances, resulting in seamless blowing and bottling operations for you.',
      icon: <Sparkles size={28} />,
    },
    {
      title: 'Sustainability at Heart',
      desc: 'Our modern green policy ensures that 100% of our internal preform waste is recycled into secondary applications, keeping our carbon footprint to a minimum.',
      icon: <Leaf size={28} />,
    },
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-content"
          >
            <span className="hero-tag">
              <Sparkles size={14} className="hero-tag-icon" /> Est. 2010 • Premium PET Manufacturing
            </span>
            <h1 className="hero-title">
              Engineered for Clarity.<br />
              <span className="gradient-text">Crafted for Quality.</span>
            </h1>
            <p className="hero-subtitle">
              Gurnoor Plast manufactures high-precision PET Preforms and state-of-the-art PET Bottles for leading brands globally. Bridging the gap between premium packaging and strict environmental responsibility.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Request Specifications <ArrowRight size={18} />
              </Link>
              <Link to="/why-choose-us" className="btn btn-outline">
                Why Choose Us
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hero-visual"
          >
            <div className="image-placeholder hero-image-placeholder">
              <div className="placeholder-overlay">
                <Layers size={48} className="placeholder-icon" />
                <span>[ Premium PET Preform Showcase Image ]</span>
                <p className="placeholder-sub">Highlighting premium transparent finishes and optimal wall ratios</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {statItems.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-box">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS SECTION - PRODUCTS */}
      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Product Portfolio</span>
            <h2>Our Specialized PET Solutions</h2>
            <p className="section-desc">
              While we manufacture high-performance packaging across categories, we focus extensively on producing the market's finest PET Preforms designed for perfect blow-moulding results.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`product-card ${product.accent ? 'product-featured' : ''}`}
              >
                <div className="product-visual">
                  <div className="image-placeholder product-image-placeholder">
                    <span>[ {product.title} Display ]</span>
                  </div>
                </div>
                <div className="product-details">
                  <span className="product-sub">{product.subtitle}</span>
                  <h3>{product.title}</h3>
                  <p className="product-desc-text">{product.description}</p>
                  <ul className="product-features-list">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <ShieldCheck size={16} className="feature-bullet" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`btn ${product.accent ? 'btn-primary' : 'btn-outline'} product-btn`}
                  >
                    Request Specifications <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="section why-section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quality Assurance</span>
            <h2>Why Industrial Leaders Choose Gurnoor Plast</h2>
            <p className="section-desc">
              Established in 2010, we have spent over a decade perfecting our processes. Here is how we guarantee a superior manufacturing experience.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="why-grid"
          >
            {reasons.map((reason, idx) => (
              <motion.div key={idx} variants={itemVariants} className="why-card">
                <div className="why-icon-wrapper">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/why-choose-us" className="btn btn-primary">
              View Detailed Standards <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY HIGHLIGHT */}
      <section id="sustainability" className="section sustainability-section">
        <div className="container sustainability-container">
          <div className="sustainability-grid">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sustainability-content"
            >
              <div className="eco-tag">
                <Leaf size={16} />
                <span>100% Eco-Responsible</span>
              </div>
              <h2>Recycling Waste. Preserving Tomorrow.</h2>
              <p className="sustainability-intro">
                We believe premium manufacturing doesn't have to cost the planet. By implementing cutting-edge circular waste systems, Gurnoor Plast actively promotes green industrial operations.
              </p>
              <div className="eco-stat-box">
                <div className="eco-stat-item">
                  <div className="eco-stat-icon"><Trash2 size={24} /></div>
                  <div>
                    <h4>15+ Tonnes Waste</h4>
                    <p>Processed and redirected every single month at our Mohali plant</p>
                  </div>
                </div>
                <div className="eco-stat-item">
                  <div className="eco-stat-icon"><Layers size={24} /></div>
                  <div>
                    <h4>Zero-Waste Policy</h4>
                    <p>100% of internal production scrap is granulated and reprocessed</p>
                  </div>
                </div>
              </div>
              <p className="sustainability-note">
                By capturing, sorting, and reprocessing all internal waste and partnering with local collection agencies, we prevent post-industrial polymers from reaching landfills.
              </p>
              <Link to="/sustainability" className="btn btn-outline btn-eco">
                Our Green Commitment <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sustainability-visual"
            >
              <div className="image-placeholder eco-placeholder">
                <div className="eco-overlay">
                  <Leaf className="eco-leaf-large" />
                  <span>[ Green Circular Loop Infographic ]</span>
                  <p>Processing 15,000+ kg of polymer waste monthly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SPOTLIGHT */}
      <section className="section leadership-section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Executive Vision</span>
            <h2>Our Leadership Team</h2>
            <p className="section-desc">
              Behind our commitment to high-grade quality assurance, modern technology, and sustainable growth is an executive team focused on operational excellence.
            </p>
          </div>

          <div className="leaders-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="leader-card"
            >
              <div className="leader-info">
                <h3>Gagandeep Kaur</h3>
                <span className="leader-role">Chief Executive Officer</span>
                <p className="leader-quote">
                  "At Gurnoor Plast, our goal has never been just volume. It has been high-end precision. By investing in hybrid cleanroom machinery and circular granulation loops, we prove premium packaging and green sustainability can thrive together."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="leader-card"
            >
              <div className="leader-info">
                <h3>Hardev Singh</h3>
                <span className="leader-role">Managing Director</span>
                <p className="leader-quote">
                  "Established in 2010, our foundation was built on rigorous quality assurance. Every preform that rolls off our conveyor reflects our promise of zero defects, thermal stability, and blow-moulding perfection."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section cta-section">
        <div className="container cta-container">
          <div className="cta-glass">
            <h2>Ready to Elevate Your Packaging?</h2>
            <p>
              Whether you need customized neck threads, optimized grammage PET preforms, or food-safe bulk PET bottles, Gurnoor Plast delivers flawless industrial production to match your brand's reputation.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-cta">
                Inquire For Specifications
              </Link>
              <Link to="/contact" className="btn btn-outline btn-cta-outline">
                Request a Sample
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
