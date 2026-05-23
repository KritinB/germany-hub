import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle, Clock, Home, Stamp } from 'lucide-react'
import Navbar from '../components/Navbar'
import { steps, documents } from '../components/Visa'

const postArrivalChecklist = [
  { task: 'Anmeldung (Address Registration)', deadline: 'Within 14 days', priority: 'critical', details: 'Visit your local Einwohnermeldeamt or Bürgeramt. Bring your passport, rental contract, and Wohnungsgeberbestätigung (landlord confirmation form).' },
  { task: 'Apply for Residence Permit', deadline: 'Before visa expires', priority: 'critical', details: 'Visit the Ausländerbehörde (Immigration Office) to convert your entry visa to a full Aufenthaltserlaubnis (residence permit). Book an appointment online.' },
  { task: 'Enroll at University', deadline: 'Before semester starts', priority: 'critical', details: 'Complete Immatrikulation (enrollment). You\'ll receive your student ID, Semesterticket, and university email.' },
  { task: 'Get Public Health Insurance', deadline: 'Before enrollment', priority: 'critical', details: 'Sign up with TK, AOK, or Barmer (~€120/month). You need proof of insurance to enroll. Cannot use travel insurance for this.' },
  { task: 'Open German Bank Account', deadline: 'First week', priority: 'high', details: 'N26, DKB, or Commerzbank. You need your Anmeldung confirmation and passport. Your blocked account releases go here.' },
  { task: 'Get a German SIM Card', deadline: 'First week', priority: 'high', details: 'Aldi Talk, O2 Prepaid, or Telekom. A German number is required for many services including online banking.' },
  { task: 'Get Your Steuer-ID (Tax ID)', deadline: 'Arrives by post in 2–4 weeks', priority: 'medium', details: 'Automatically sent after Anmeldung. Required for all part-time employment. Keep it safe — it\'s permanent.' },
  { task: 'Register for Krankenversicherung (KV) Certificate', deadline: 'Before term', priority: 'medium', details: 'Your insurer provides a proof of insurance certificate for university enrollment. Request it as soon as you sign up.' },
]

const rejectionReasons = [
  { reason: 'Incomplete or inconsistent documents', fix: 'Double-check every document matches your APS application details exactly' },
  { reason: 'Blocked account not in order', fix: 'Ensure Sperrkonto is confirmed and shows full €11,904' },
  { reason: 'Lack of language proficiency proof', fix: 'Submit IELTS/TOEFL or TestDaF results as required by your program' },
  { reason: 'Insufficient financial means beyond blocked account', fix: 'If asked, provide additional bank statements or a financial sponsorship letter from parents' },
  { reason: 'Previous visa refusals not declared', fix: 'Always declare prior visa refusals — not declaring is grounds for permanent ban' },
  { reason: 'University admission letter expired or conditional', fix: 'Apply for visa only after receiving unconditional admission' },
]

const residencePermitInfo = [
  { label: 'Initial visa validity', value: '3–6 months (Type D National Visa)' },
  { label: 'Residence permit type', value: 'Aufenthaltserlaubnis § 16b AufenthG' },
  { label: 'Valid until', value: 'Usually end of your study program + 3 months' },
  { label: 'Renewal', value: 'At Ausländerbehörde — book 2 months in advance' },
  { label: 'After graduation', value: '18-month job seeker visa (§ 20 AufenthG)' },
  { label: 'Permanent residency', value: 'After 5 years with employment (Niederlassungserlaubnis)' },
]

export default function VisaPage() {
  useEffect(() => { document.title = 'Student Visa Guide — StudyDE' }, [])
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <Link to="/#visa" className="inline-flex items-center gap-2 mb-8 text-sm font-medium" style={{ color: 'rgba(0,0,0,0.45)' }}>
          <ArrowLeft size={15} /> Back to Guide
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-blue inline-flex mb-4">Visa Process — Deep Dive</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Student Visa — Complete Guide<br />
            <span className="text-gold-gradient">From India to Germany</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>
            Everything about getting your German student visa — from the step-by-step process to what to do if your visa
            is rejected, and what happens after you arrive.
          </p>
        </motion.div>

        {/* Warning */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl p-5 flex gap-4 mb-10" style={{ background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.2)' }}>
          <AlertTriangle size={20} color="#FB923C" className="flex-shrink-0 mt-0.5" />
          <div className="text-sm" style={{ color: 'rgba(0,0,0,0.65)' }}>
            <span className="font-bold text-[#1A1A2E]">Book your visa appointment immediately after getting your admission letter.</span>{' '}
            German consulates in India (Delhi, Mumbai, Chennai, Kolkata, Bangalore) often have 2–4 month wait times.
          </div>
        </motion.div>

        {/* Process steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Visa Process</h2>
          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="glass rounded-2xl p-6 flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}>
                    <Icon size={18} color={step.color} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-[#1A1A2E]">{step.title}</h3>
                      <div className="chip text-[10px] px-2 py-0.5 flex-shrink-0" style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}20` }}>
                        {step.timing}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Documents checklist */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Complete Document Checklist</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: doc.req ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.02)', border: doc.req ? '1px solid rgba(0,0,0,0.15)' : '1px solid rgba(0,0,0,0.04)' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: doc.req ? '#0A0A0A' : 'rgba(255,255,255,0.2)' }} />
                </div>
                <span className="text-sm" style={{ color: doc.req ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.38)' }}>
                  {doc.label}{!doc.req && <span className="ml-1 opacity-60">(optional)</span>}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 text-sm space-y-2" style={{ borderTop: '1px solid rgba(0,0,0,0.03)', color: 'rgba(0,0,0,0.38)' }}>
            <p><span className="text-white font-semibold">Visa type:</span> National Visa Type D — valid for 3–6 months, extended to residence permit after arrival</p>
            <p><span className="text-white font-semibold">Fee:</span> ~€75 (approximately ₹7,000)</p>
          </div>
        </motion.div>

        {/* Rejection reasons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <XCircle size={18} color="#F472B6" /> Why Visas Get Rejected — and How to Avoid It
          </h2>
          <div className="space-y-4">
            {rejectionReasons.map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div className="flex items-start gap-2 mb-2">
                  <XCircle size={13} color="#F472B6" className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#1A1A2E]">{r.reason}</span>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <CheckCircle2 size={13} color="#444444" className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: 'rgba(0,0,0,0.5)' }}>{r.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Post-arrival checklist */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Home size={20} color="#444444" /> Post-Arrival Checklist — Day 1 to Week 4
          </h2>
          <div className="space-y-4">
            {postArrivalChecklist.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.priority === 'critical' ? '#F472B6' : item.priority === 'high' ? '#FB923C' : '#0A0A0A' }} />
                    <h3 className="font-bold text-[#1A1A2E]">{item.task}</h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="chip text-[10px] px-2 py-0.5" style={{ background: item.priority === 'critical' ? 'rgba(244,114,182,0.1)' : 'rgba(251,146,60,0.1)', color: item.priority === 'critical' ? '#F472B6' : '#FB923C', border: `1px solid ${item.priority === 'critical' ? 'rgba(244,114,182,0.2)' : 'rgba(251,146,60,0.2)'}` }}>
                      {item.priority}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(0,0,0,0.35)' }}>{item.deadline}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>{item.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Residence permit */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <Stamp size={18} color="#A78BFA" /> Residence Permit Timeline
          </h2>
          <div className="space-y-3">
            {residencePermitInfo.map((r, i) => (
              <div key={i} className="flex items-start justify-between py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
                <span className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{r.label}</span>
                <span className="text-sm font-bold text-right ml-4" style={{ color: '#A78BFA' }}>{r.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(91,140,255,0.05))', border: '1px solid #E8E8E8' }}>
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Ready to land? Here's what to expect in Germany</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>City comparisons, housing tips, and your Day 1 checklist.</p>
          <Link to="/life" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
            Life in Germany Guide →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
