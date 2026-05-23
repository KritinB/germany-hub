import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, MapPin, Clock, CreditCard, AlertCircle, ExternalLink, CheckCircle2, XCircle, HelpCircle, Lightbulb } from 'lucide-react'
import Navbar from '../components/Navbar'
import { steps, offices } from '../components/APS'

const faqs = [
  {
    q: 'What happens if my APS interview is cancelled or I fail?',
    a: 'APS interviews can be rescheduled through the portal. If the verification fails, APS will notify you by email with reasons. Common causes: mismatched documents, suspected forgery, or incomplete information. You can appeal or reapply after addressing the issue.',
  },
  {
    q: 'Can I apply to German universities before getting my APS certificate?',
    a: 'Some universities allow you to apply conditionally — submitting your application with a note that APS is in progress. However, you cannot receive a final admission letter without a valid APS certificate. Always start APS first.',
  },
  {
    q: 'Do I need APS for a PhD application?',
    a: 'Yes. APS is mandatory for ALL Indian students applying to German universities, regardless of level — Bachelor\'s, Master\'s, or PhD. The only exceptions are students who completed their last degree in Germany or certain EU countries.',
  },
  {
    q: 'Is the APS certificate valid forever?',
    a: 'Yes. Once issued, your APS certificate has no expiry date. You can use it for any German university application indefinitely. There is no need to renew or reapply.',
  },
  {
    q: 'What if I have a gap year in my education?',
    a: 'You must submit a Gap Certificate explaining any gap periods in your education (employment letter, illness certificate, etc.). APS is thorough about academic timelines. Unexplained gaps can delay or affect your verification.',
  },
  {
    q: 'Can I apply for APS while still completing my degree?',
    a: 'Yes — if you are in your final year, you can apply with provisional certificates and current transcripts. APS will issue a conditional certificate, and you submit final documents once available.',
  },
]

const mistakes = [
  { text: 'Submitting blurry or low-resolution scans — APS rejects anything illegible', severity: 'high' },
  { text: 'Forgetting to include all years\' mark sheets — every semester/year is required', severity: 'high' },
  { text: 'Not attesting copies — self-attestation is required for uploaded documents', severity: 'high' },
  { text: 'Waiting too long — starting just 1–2 months before deadlines causes missed applications', severity: 'high' },
  { text: 'Using an expired passport in the application', severity: 'medium' },
  { text: 'Not saving your login credentials and payment receipts', severity: 'medium' },
  { text: 'Booking a VFS visa appointment before receiving your APS certificate', severity: 'medium' },
]

const timeline = [
  { week: 'Week 1', action: 'Register on APS portal, prepare and scan all documents' },
  { week: 'Week 2', action: 'Pay fee, upload documents, submit application' },
  { week: 'Week 3–4', action: 'APS reviews uploaded documents, may request corrections' },
  { week: 'Week 5–8', action: 'Interview scheduled (in-person or online)' },
  { week: 'Week 9–12', action: 'Receive APS certificate by post and email' },
]

export default function APSPage() {
  useEffect(() => { document.title = 'APS Certificate Guide — StudyDE' }, [])
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        {/* Back */}
        <Link to="/#aps" className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-all" style={{ color: 'rgba(0,0,0,0.45)' }}>
          <ArrowLeft size={15} /> Back to Guide
        </Link>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-gold inline-flex mb-4">APS Certificate — Deep Dive</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Complete APS Guide —<br />
            <span className="text-gold-gradient">Everything You Need to Know</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>
            The APS (Akademische Prüfstelle) certificate is the single most critical document for Indian students
            applying to German universities. This guide covers the process, common mistakes, FAQs, and an exact timeline.
          </p>
        </motion.div>

        {/* Quick facts */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: CreditCard, label: 'Fee', value: '~₹18,500', sub: 'Non-refundable' },
            { icon: Clock, label: 'Processing', value: '4–8 weeks', sub: 'After interview' },
            { icon: FileText, label: 'Validity', value: 'Indefinite', sub: 'No expiry date' },
            { icon: MapPin, label: 'Offices', value: '4 cities', sub: 'Delhi, Mumbai, Chennai, Kolkata' },
          ].map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="glass rounded-2xl p-5 text-center">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <Icon size={18} color="#0A0A0A" />
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: 'rgba(0,0,0,0.38)' }}>{f.label}</div>
                <div className="text-xl font-extrabold text-gold-gradient">{f.value}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(0,0,0,0.38)' }}>{f.sub}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Alert */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-2xl p-5 flex gap-4 mb-10" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)' }}>
          <AlertCircle size={20} color="#0A0A0A" className="flex-shrink-0 mt-0.5" />
          <div className="text-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>
            <span className="font-bold text-[#1A1A2E]">Start the APS process 3–4 months before your application deadline.</span>{' '}
            Processing takes 4–8 weeks, and German universities will not review your application without a valid APS certificate.
          </div>
        </motion.div>

        {/* Step by step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">The 6-Step APS Process</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.num} className="glass rounded-2xl p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs" style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.1)', color: '#0A0A0A' }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">{step.title}</h3>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: 'rgba(0,0,0,0.45)' }}>{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((d, j) => (
                      <div key={j} className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(0,0,0,0.03)', color: '#0A0A0A', border: '1px solid #E8E8E8' }}>{d}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Realistic Timeline</h2>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-xs font-bold font-mono px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,0,0,0.04)', color: '#0A0A0A', border: '1px solid rgba(0,0,0,0.08)', minWidth: '80px', textAlign: 'center' }}>
                  {t.week}
                </div>
                <p className="text-sm pt-1" style={{ color: 'rgba(0,0,0,0.6)' }}>{t.action}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Common mistakes */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <XCircle size={18} color="#F472B6" /> Common Mistakes to Avoid
          </h2>
          <div className="space-y-3">
            {mistakes.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5" style={{ background: m.severity === 'high' ? '#F472B6' : '#FB923C' }} />
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>{m.text}</p>
                <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-md" style={{ background: m.severity === 'high' ? 'rgba(244,114,182,0.1)' : 'rgba(251,146,60,0.1)', color: m.severity === 'high' ? '#F472B6' : '#FB923C' }}>
                  {m.severity}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interview tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <Lightbulb size={18} color="#0A0A0A" /> APS Interview Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Know your academic timeline — be ready to explain gaps between 10th, 12th, and graduation',
              'Bring ALL originals even if they weren\'t required to upload — the officer may ask for them',
              'The interview is typically in Hindi or English — prepare to explain your field of study clearly',
              'Common questions: Why Germany? What did you study? Explain your final year project',
              'Dress professionally — first impressions matter even for academic verification',
              'If online, test your internet, camera, and microphone at least 30 minutes before',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={14} color="#0A0A0A" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.55)' }}>{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle size={20} color="#0A0A0A" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h3 className="font-bold text-[#1A1A2E] mb-3">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.55)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Offices */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-2xl p-8 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#1A1A2E]">APS India Office Locations</h2>
            <a href="https://www.aps-india.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: '#0A0A0A', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>
              Official Site <ExternalLink size={11} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {offices.map((o, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} color="#0A0A0A" />
                  <span className="font-semibold text-white text-sm">{o.city}</span>
                </div>
                <p className="text-xs mb-2" style={{ color: 'rgba(0,0,0,0.4)' }}>{o.address}</p>
                <div className="text-xs px-2 py-1 rounded-md inline-block" style={{ background: 'rgba(0,0,0,0.03)', color: '#0A0A0A' }}>{o.note}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(91,140,255,0.05))', border: '1px solid #E8E8E8' }}>
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Got your APS? Next up: the Student Visa</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>Once your APS certificate arrives, you can apply for your student visa. Book your VFS appointment immediately.</p>
          <Link to="/visa" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
            Student Visa Guide →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
