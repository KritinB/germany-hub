import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/meedjyqn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    color: '#F5F5F8',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'rgba(245,245,248,0.4)',
    marginBottom: '8px',
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,164,109,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(201,164,109,0.1)', border: '1px solid rgba(201,164,109,0.2)', color: '#C9A46D' }}>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Have a <span className="text-gold-gradient">question?</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(245,245,248,0.45)' }}>
            Whether you're confused about the APS process, visa requirements, or anything else — send us a message and we'll get back to you.
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto rounded-3xl p-8 md:p-10"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {status === 'success' ? (
            <div className="text-center py-10">
              <CheckCircle size={48} color="#C9A46D" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
              <p style={{ color: 'rgba(245,245,248,0.45)', fontSize: '14px' }}>We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: 'rgba(201,164,109,0.15)', color: '#C9A46D', border: '1px solid rgba(201,164,109,0.25)' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,164,109,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,164,109,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's your question about?"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,164,109,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us more about your query..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,164,109,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm" style={{ color: '#ff6b6b' }}>
                  <AlertCircle size={15} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  background: status === 'sending' ? 'rgba(201,164,109,0.4)' : 'linear-gradient(135deg, #C9A46D, #A07840)',
                  color: '#07070D',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                <Send size={15} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
