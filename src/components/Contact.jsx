import { useState } from 'react'
import { personalData } from '../portfolioData'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill out all form fields.' })
      return
    }

    setLoading(true)
    setStatus({ type: '', text: '' })

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setStatus({
        type: 'success',
        text: `Thank you for reaching out! (Note: This is a frontend demo. To connect, please send a message directly to ${personalData.email}.)`,
      })
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
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
