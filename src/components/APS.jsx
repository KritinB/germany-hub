import { motion } from 'framer-motion'
import { FileText, MapPin, Clock, CreditCard, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const steps = [
  {
    num: '01',
    title: 'Register Online',
    desc: 'Create an account on the official APS India website. Fill in your personal details and choose the certificate type based on your level (school leaver, bachelor\'s graduate, or master\'s graduate).',
    details: ['Visit aps-india.de', 'Select certificate type', 'Enter educational details', 'Create account and save login'],
  },
  {
    num: '02',
    title: 'Prepare Documents',
    desc: 'Gather all original and attested documents. APS is strict about document authenticity — originals must match submitted copies exactly.',
    details: [
      'All mark sheets (10th, 12th, graduation years)',
      'Degree/provisional certificate',
      'Passport (valid, original)',
      'Passport-size photographs (recent)',
      'Gap certificate (if applicable)',
    ],
  },
  {
    num: '03',
    title: 'Pay the Fee',
    desc: 'Pay the APS fee online through the portal. The fee is non-refundable. Keep the payment receipt carefully as it\'s required at the appointment.',
    details: [
      'Fee: ~₹18,500 (2024–25)',
      'Online payment via portal',
      'Non-refundable',
      'Save payment confirmation',
    ],
  },
  {
    num: '04',
    title: 'Upload Documents',
    desc: 'Upload clear scanned copies of all documents to the portal. APS will verify them before scheduling your appointment. Ensure scans are clear and legible.',
    details: [
      'PDF or JPEG, max 2MB each',
      'Both sides of certificates',
      'Self-attested copies',
      'Wait for portal confirmation',
    ],
  },
  {
    num: '05',
    title: 'Attend Interview',
    desc: 'APS may call you for a personal interview (in-person or online) to verify your academic background. The interview is usually conducted in Hindi or English.',
    details: [
      'Bring all original documents',
      'Questions about your academic background',
      'Usually 15–30 minutes',
      'Can be waived for some applicants',
    ],
  },
  {
    num: '06',
    title: 'Receive Certificate',
    desc: 'After verification, APS issues your certificate digitally and by post. Processing typically takes 4–8 weeks. This certificate is valid indefinitely once issued.',
    details: [
      'Timeline: 4–8 weeks after interview',
      'Sent by registered post + email',
      'Valid for all German universities',
      'Required for visa application',
    ],
  },
]

export const offices = [
  { city: 'New Delhi', address: 'German Embassy compound, Chanakyapuri', note: 'Main office — handles all India' },
  { city: 'Mumbai', address: 'German Consulate, Hoechst House, Nariman Point', note: 'Western India appointments' },
  { city: 'Chennai', address: 'German Consulate, Ethiraj Salai', note: 'Southern India appointments' },
  { city: 'Kolkata', address: 'German Consulate, Hastings', note: 'Eastern India appointments' },
]

export default function APS() {
  return (
    <section id="aps" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5"
        >
          <div className="chip chip-gold inline-flex mb-5">APS Certificate</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            The mandatory first step —<br />
            <span className="text-gold-gradient">APS Certificate</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(26,26,46,0.55)' }}>
            Since 2019, ALL Indian students applying to German universities must obtain an APS
            (Akademische Prüfstelle) certificate. It verifies your academic credentials and is
            a non-negotiable prerequisite for admission.
          </p>
        </motion.div>

        {/* Alert box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-14 rounded-2xl p-5 flex gap-4"
          style={{ background: 'rgba(45,106,79,0.08)', border: '1px solid rgba(30,58,95,0.18)' }}
        >
          <AlertCircle size={20} color="#1E3A5F" className="flex-shrink-0 mt-0.5" />
          <div className="text-sm" style={{ color: 'rgba(26,26,46,0.8)' }}>
            <span className="font-bold text-[#1A1A2E]">Start the APS process 3–4 months before your application deadline.</span>{' '}
            Processing takes 4–8 weeks, and German universities will not review your application without a valid APS certificate.
            Do not wait until the last minute.
          </div>
        </motion.div>

        {/* Quick facts row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { icon: CreditCard, label: 'Fee', value: '~₹18,500', sub: 'Non-refundable' },
            { icon: Clock, label: 'Processing', value: '4–8 weeks', sub: 'After interview' },
            { icon: FileText, label: 'Validity', value: 'Indefinite', sub: 'No expiry once issued' },
            { icon: MapPin, label: 'Offices', value: '4 cities', sub: 'Delhi, Mumbai, Chennai, Kolkata' },
          ].map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 text-center hover-card cursor-default"
              >
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'rgba(30,58,95,0.08)', border: '1px solid rgba(30,58,95,0.18)' }}>
                  <Icon size={18} color="#1E3A5F" />
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: 'rgba(26,26,46,0.45)' }}>{f.label}</div>
                <div className="text-xl font-extrabold text-gold-gradient">{f.value}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(26,26,46,0.45)' }}>{f.sub}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 hover-card cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs"
                    style={{ background: 'rgba(30,58,95,0.08)', border: '1px solid rgba(30,58,95,0.2)', color: '#1E3A5F' }}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1A1A2E] mb-2">{step.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(26,26,46,0.55)' }}>{step.desc}</p>
                  <div className="space-y-1.5">
                    {step.details.map((d, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(26,26,46,0.6)' }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#1E3A5F' }} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* APS offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#1A1A2E]">APS India Office Locations</h3>
            <a
              href="https://www.aps-india.de"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
              style={{ color: '#1E3A5F', background: 'rgba(30,58,95,0.08)', border: '1px solid rgba(30,58,95,0.18)' }}
            >
              Official Site <ExternalLink size={11} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map((o, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(30,58,95,0.02)', border: '1px solid rgba(30,58,95,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} color="#1E3A5F" />
                  <span className="font-semibold text-white text-sm">{o.city}</span>
                </div>
                <p className="text-xs mb-2" style={{ color: 'rgba(26,26,46,0.5)' }}>{o.address}</p>
                <div className="text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(45,106,79,0.08)', color: '#1E3A5F' }}>{o.note}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/aps"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(30,58,95,0.25)' }}
          >
            Full APS Guide — FAQs, Tips & Timeline <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
