// src/components/Contact.jsx
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // form state matches your EmailJS template fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    _gotcha: "", // honeypot (hidden)
  });

  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  // env (Vite exposes only VITE_* vars)
  const SERVICE_ID  = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
  const TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
  const PUBLIC_KEY  = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "").trim();

  // init EmailJS once
  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // bot trap
    if (form._gotcha) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        sending: false,
        ok: false,
        msg: "Email service not configured. Check .env.local (service, template, public key) and restart.",
      });
      return;
    }

    setStatus({ sending: true, ok: null, msg: "" });

    try {
      const params = {
        name: form.name,
        email: form.email,
        title: form.title,            // maps to {{title}} used in Subject: "Contact Us: {{title}}"
        message: form.message,
        time: new Date().toLocaleString(), // optional: you show {{time}} in template body
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);

      if (res.status === 200) {
        setStatus({ sending: false, ok: true, msg: "Message sent! I'll get back to you soon." });
        setForm({ name: "", email: "", title: "", message: "", _gotcha: "" });
      } else {
        setStatus({ sending: false, ok: false, msg: "Failed to send. Please try again." });
      }
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: err?.text || err?.message || "Network error. Please try again.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <div className="section-header">
          <h2 className="title">Contact me</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>

        <div className="contact-content">
          {/* Left column (static contact info) */}
          <div className="column left">
            <div className="contact-card">
              <div className="card-inner">
                <h3 className="contact-title">Get in Touch</h3>
                <p className="contact-description">
                  If you have any questions or would like to discuss a project, feel free to reach out.
                  I'm always open to new opportunities and collaborations.
                </p>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">Name</div>
                      <div className="contact-value">Sandaru Bandara</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">Address</div>
                      <div className="contact-value">Colombo, Sri Lanka</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">Email</div>
                      <a href="mailto:sandarujbandara@gmail.com" className="contact-value email-link">
                        sandarujbandara@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column (form) */}
          <div className="column right">
            <div className="contact-form-card">
              <div className="card-inner">
                <h3 className="contact-title">Message me</h3>

                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={form._gotcha}
                    onChange={onChange("_gotcha")}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="form-fields">
                    <div className="field-group">
                      <div className="field name">
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          value={form.name}
                          onChange={onChange("name")}
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="field email">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={onChange("email")}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="field">
                      <input
                        name="title"
                        type="text"
                        placeholder="Subject"
                        value={form.title}
                        onChange={onChange("title")}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="field textarea">
                      <textarea
                        name="message"
                        rows="6"
                        placeholder="Your message..."
                        value={form.message}
                        onChange={onChange("message")}
                        required
                        className="form-textarea"
                      />
                    </div>

                    {/* status */}
                    {status.msg && (
                      <div
                        role="status"
                        className={`status-message ${status.ok ? 'success' : 'error'}`}
                      >
                        {status.msg}
                      </div>
                    )}

                    <div className="button-area">
                      <button type="submit" disabled={status.sending} className="submit-btn">
                        {status.sending ? (
                          <>
                            <i className="fas fa-spinner fa-spin"></i>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <i className="fas fa-paper-plane"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}