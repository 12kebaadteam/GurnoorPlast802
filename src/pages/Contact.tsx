import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

// Secure background form submissions endpoint powered by Formspree
const FORMSPREE_ENDPOINT_URL = "https://formspree.io/f/xnjrnjjq";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: 'PET Preforms',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Live secure background AJAX transmission to your Formspree inbox
    fetch(FORMSPREE_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      setLoading(false);
      if (res.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          product: 'PET Preforms',
          message: '',
        });
      } else {
        alert("Submission error: Unable to route your quote request at this time.");
      }
    })
    .catch(() => {
      setLoading(false);
      alert("Network error. Please check your connection and try again.");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      {/* HEADER SECTION */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <span className="section-tag"><Clock size={14} /> Est. 2010 • Instant Response</span>
            <h1>Begin Your Collaboration</h1>
            <p className="large-lead">
              Ready to elevate your packaging standard? Connect with our technical consultants to request custom preform samples, query specific grammages, or coordinate a volume bottling order.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE CONTACT LAYOUT */}
      <section className="section contact-body-section">
        <div className="container contact-grid">
          {/* LEFT COLUMN: CORPORATE INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="contact-info-panel"
          >
            <div className="panel-header">
              <h2>Gurnoor Plast Headquarters</h2>
              <p>Contact our Mohali office for general inquiries, factory audits, or procurement contracts.</p>
            </div>

            <div className="info-cards-list">
              <div className="info-row-card">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div className="info-detail">
                  <span>Call Our Procurement Team</span>
                  <h4>+91 9815532082</h4>
                  <h4>+91 9815555788</h4>
                  <p>Mon - Sat, 9:00 AM to 6:00 PM IST</p>
                </div>
              </div>

              <div className="info-row-card">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div className="info-detail">
                  <span>Send An Email</span>
                  <h4>gurnoorplast@gmail.com</h4>
                  <p>Guaranteed response within 12 hours</p>
                </div>
              </div>

              <div className="info-row-card">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="info-detail">
                  <span>Corporate Factory Location</span>
                  <h4>Plot 802, Sector 82</h4>
                  <p>Mohali, Punjab, India, 140306</p>
                </div>
              </div>
            </div>


          </motion.div>

          {/* RIGHT COLUMN: QUOTE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form-panel"
            id="inquiry"
          >
            <div className="form-header">
              <h2>Request Quote / Samples</h2>
              <p>Provide your specific tolerances or choose a standard PET preform below for an instant quote.</p>
            </div>

            <form onSubmit={handleSubmit} className="luxury-form">
              <div className="form-row-two">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. r.sharma@company.com"
                  />
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98155 32082"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Premium Beverages Ltd"
                  />
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label htmlFor="product">Product Interest *</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="PET Preforms">PET Preforms</option>
                    <option value="PET Bottles">PET Bottles</option>
                    <option value="Custom Mould Development">Custom Mould Development</option>
                    <option value="Granulated Waste Supplies">Recycled Polymers (50T+ Supply)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tolerances, Grammage, & Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify preferred weight (e.g. 18g, 24g, 48g), bottle blowing pressure, or general questions..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                {loading ? 'Processing Requirements...' : (
                  <>
                    Submit Specifications <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="success-overlay"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="success-modal"
            >
              <div className="success-icon-wrapper">
                <CheckCircle2 size={48} className="success-icon" />
              </div>
              <h2>Specifications Logged Successfully</h2>
              <p className="success-intro">
                Thank you for your interest in Gurnoor Plast's quality packaging solutions. 
              </p>
              <div className="success-routing-note">
                <p>
                  Your customized manufacturing parameters have been sent directly to the desks of 
                  <strong> CEO Gagandeep Kaur</strong> and <strong> MD Hardev Singh</strong>.
                </p>
                <p>
                  Our senior procurement consultant will review the requested specifications, grammages, and thermal loads, and follow up within 12 working hours with a technical quote and custom samples.
                </p>
              </div>
              <button onClick={() => setIsSubmitted(false)} className="btn btn-primary btn-close-modal">
                Return to Workspace
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
