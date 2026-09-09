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
      setStatus({ type: 'error', text: 'Please fill out all fields.' })
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
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          text: 'There was an issue sending your message. Please email me directly.',
        })
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus({
        type: 'error',
        text: 'Unable to connect to the mail server. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Mapbox */}
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://maps.google.com/maps?q=pune%20maharashtra&t=m&z=12&ie=UTF8&iwloc=&output=embed"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map of Pune, Maharashtra"
          ></iframe>
        </figure>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          ></textarea>

          {status.text && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '14px',
                marginBottom: '15px',
                color: status.type === 'success' ? '#22c55e' : '#ef4444',
                background: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${status.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
              }}
            >
              {status.text}
            </div>
          )}

          <button
            className="form-btn"
            type="submit"
            disabled={loading || !formData.name || !formData.email || !formData.message}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{loading ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact
