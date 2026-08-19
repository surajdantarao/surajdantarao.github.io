import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill out all form fields.' })
      return
    }

    setLoading(true)
    setStatus({ type: '', text: '' })

    try {
      const response = await fetch('https://formspree.io/surajdantrao0777@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. (Note: If this is the first submission, Formspree will email you to activate forwarding—please check your email to verify.)',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          text: 'An error occurred while sending your message. Please try again or email me directly.',
        })
      }
    } catch (err) {
      console.error('Email submission error:', err)
      setStatus({
        type: 'error',
        text: 'Unable to connect to the email server. Please check your network and try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-tab-container">
      <header>
        <h2 className="article-title">Contact</h2>
      </header>

      {/* Form Card */}
      <div className="contact-form-card" style={{ marginTop: '30px', background: 'none', border: 'none', padding: '0', boxShadow: 'none' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Name"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Your Message..."
              disabled={loading}
            ></textarea>
          </div>

          {status.text && (
            <div className={`form-status ${status.type}`}>
              {status.text}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary contact-btn"
            disabled={loading}
            style={{ width: 'auto', alignSelf: 'flex-end', padding: '12px 30px' }}
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
