import { motion } from 'framer-motion'
import { Stamp, FileCheck, Building2, Plane, Home, CreditCard, AlertTriangle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const steps = [
  {
    icon: FileCheck,
    title: 'Get University Admission',
    desc: 'Receive your official letter of admission (Zulassungsbescheid) or conditional admission from a German university. This is required before you can apply for the student visa.',
    color: '#0A0A0A',
    timing: 'Before visa application',
  },
  {
    icon: Building2,
    title: 'Open Blocked Account',
    desc: 'Open a Sperrkonto (blocked account) with €11,904 as required for 2024. You\'ll receive confirmation documents to include in your visa application.',
    color: '#0A0A0A',
    timing: '4–8 weeks before appointment',
  },
  {
    icon: CreditCard,
    title: 'Get Health Insurance Proof',
    desc: 'Arrange travel health insurance valid for Germany. Full German public health insurance (TK, AOK, Barmer) must be arranged once you arrive and enroll.',
    color: '#444444',
    timing: 'Before visa appointment',
  },
  {
    icon: Stamp,
    title: 'Book VFS Appointment',
    desc: 'Book your visa appointment at the nearest German consulate/VFS Global center in India. Appointment wait times vary — book 2–3 months in advance.',
    color: '#A78BFA',
    timing: '2–3 months in advance',
  },
  {
    icon: Building2,
    title: 'Attend Visa Interview',
    desc: 'Appear in person with all original documents. The interview is usually brief — the officer verifies documents and checks your language ability. Dress formally.',
    color: '#F472B6',
    timing: 'At appointment time',
  },
  {
    icon: Plane,
    title: 'Receive Visa & Travel',
    desc: 'Student visa (Type D, National Visa) is usually issued within 4–8 weeks. It allows entry into Germany for studies. Multiple entries are permitted.',
    color: '#FB923C',
    timing: '4–8 weeks after interview',
  },
  {
    icon: Home,
    title: 'Register in Germany (Anmeldung)',
    desc: 'Within 14 days of arrival, register your address at the local Einwohnermeldeamt (registration office). This gives you the Meldebescheinigung needed for everything else.',
    color: '#444444',
    timing: 'Within 14 days of arrival',
  },
]

export const documents = [
  { label: 'Valid passport (min. 1 year remaining)', req: true },
  { label: 'APS Certificate', req: true },
  { label: 'University admission letter (Zulassungsbescheid)', req: true },
  { label: 'Blocked account confirmation (€11,904)', req: true },
  { label: 'Health insurance proof (travel health for visa)', req: true },
  { label: 'Biometric passport photos (2, recent)', req: true },
  { label: 'Completed visa application form (VFS)', req: true },
  { label: 'Visa fee payment (~₹7,000)', req: true },
  { label: 'Academic certificates & transcripts', req: true },
  { label: 'Language certificates (IELTS/TestDaF etc.)', req: true },
  { label: 'Statement of Purpose / Letter of Motivation', req: false },
  { label: 'CV / Resume', req: false },
  { label: 'DAAD scholarship confirmation (if applicable)', req: false },
]

export default function Visa() {
  return (
    <section id="visa" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="chip chip-blue inline-flex mb-5">Visa Process</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Student visa —<br />
            <span className="text-gold-gradient">step by step</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(0,0,0,0.45)' }}>
            The German student visa process from India typically takes 3–5 months.
            Start early to avoid missing your semester.
          </p>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 rounded-2xl p-5 flex gap-4"
          style={{ background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.2)' }}
        >
          <AlertTriangle size={20} color="#FB923C" className="flex-shrink-0 mt-0.5" />
          <div className="text-sm" style={{ color: 'rgba(0,0,0,0.65)' }}>
            <span className="font-bold text-[#1A1A2E]">Book your visa appointment immediately after getting your admission letter.</span>{' '}
            German consulates in India (Delhi, Mumbai, Chennai, Kolkata, Bangalore) often have 2–4 month wait times for student visa appointments.
            Do not wait until your course start date approaches.
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Steps */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="glass rounded-2xl p-5 flex gap-4 hover-card cursor-default"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                      >
                        <Icon size={18} color={step.color} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-[#1A1A2E] text-sm">{step.title}</h3>
                        <div
                          className="chip text-[10px] px-2 py-0.5 flex-shrink-0"
                          style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}20` }}
                        >
                          {step.timing}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.45)' }}>{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Documents checklist */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 sticky top-28"
            >
              <h3 className="font-bold text-[#1A1A2E] mb-5">Document Checklist</h3>
              <div className="space-y-2.5">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: doc.req ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.02)',
                        border: doc.req ? '1px solid rgba(0,0,0,0.15)' : '1px solid rgba(0,0,0,0.04)',
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: doc.req ? '#0A0A0A' : 'rgba(255,255,255,0.2)' }}
                      />
                    </div>
                    <span
                      className="text-xs leading-relaxed"
                      style={{ color: doc.req ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0.38)' }}
                    >
                      {doc.label}
                      {!doc.req && <span className="ml-1 opacity-60">(optional)</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 text-xs space-y-2" style={{ borderTop: '1px solid rgba(0,0,0,0.03)', color: 'rgba(0,0,0,0.38)' }}>
                <p><span className="font-semibold" style={{ color: '#1A1A1A' }}>Visa type:</span> National Visa Type D (Nationales Visum)</p>
                <p><span className="font-semibold" style={{ color: '#1A1A1A' }}>Validity:</span> Initially 3–6 months, extended as residence permit upon arrival</p>
                <p><span className="font-semibold" style={{ color: '#1A1A1A' }}>Fee:</span> ~€75 (approximately ₹7,000)</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            to="/visa"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: '#CC1416', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(204,20,22,0.25)' }}
          >
            Full Visa Guide — Rejections, Extensions & Post-Arrival <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
