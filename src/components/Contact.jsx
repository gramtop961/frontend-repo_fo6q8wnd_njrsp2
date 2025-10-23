import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      setError('Please fill in all fields.')
      return
    }

    try {
      setStatus('submitting')
      const base = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Failed to send')
      await res.json()
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 border-t border-gray-200">
        <h3 className="text-sm uppercase tracking-widest text-gray-500">Contact</h3>
        <h2 className="mt-2 text-3xl sm:text-4xl font-medium text-gray-900">Tell me about your project</h2>
        <p className="mt-4 text-gray-600">I typically respond within two business days.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="you@studio.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="A brief description of your site, program, and timeline"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-2.5 text-white text-sm font-medium hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-green-700">Thank you — your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </div>
        </form>

        <div className="mt-10 text-sm text-gray-600">
          <p>Prefer email? studio@ateliermoderno.com</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
