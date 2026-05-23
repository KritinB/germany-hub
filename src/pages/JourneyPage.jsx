import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, CheckCircle2, Clock, ArrowRight, FileText, Stamp,
  Landmark, Plane, Home, GraduationCap, BookOpen, Search, AlertCircle,
} from 'lucide-react'
import Navbar from '../components/Navbar'

const phases = [
  {
    id: 'planning',
    label: '12+ Months Before',
    title: 'Research & Planning',
    color: '#CC1416',
    icon: Search,
    steps: [
      { task: 'Decide on Bachelor\'s, Master\'s, or PhD', note: 'Each has different APS requirements and application processes' },
      { task: 'Research programs and universities', note: 'Use DAAD, Hochschulkompass, and QS rankings to shortlist 6–10 programs' },
      { task: 'Check language requirements', note: 'Most STEM Master\'s: IELTS 6.5+ or TOEFL 90+. German-taught: TestDaF/DSH required' },
      { task: 'Calculate your budget', note: 'Min. €11,904 blocked account + ~€800–1,200/month living costs' },
      { task: 'Start learning German (even basic)', note: 'B1–B2 German opens more programs and helps with daily life' },
    ],
  },
  {
    id: 'aps',
    label: '9–12 Months Before',
    title: 'APS Certificate',
    color: '#E53535',
    icon: FileText,
    steps: [
      { task: 'Register on aps-india.de', note: 'Choose certificate type: school leaver / bachelor\'s grad / master\'s grad' },
      { task: 'Gather all academic documents', note: 'All mark sheets (every year), degree/provisional, passport, photos, gap certificate if needed' },
      { task: 'Pay APS fee (~₹18,500)', note: 'Non-refundable. Keep the payment receipt.' },
      { task: 'Upload documents to portal', note: 'Scans must be clear, legible PDFs. Both sides of all certificates.' },
      { task: 'Attend APS interview (in-person or online)', note: 'Bring all originals. Interview is 15–30 minutes in Hindi or English.' },
      { task: 'Receive APS certificate', note: 'Takes 4–8 weeks after interview. Valid indefinitely once issued.' },
    ],
  },
  {
    id: 'applications',
    label: '6–9 Months Before',
    title: 'University Applications',
    color: '#444444',
    icon: BookOpen,
    steps: [
      { task: 'Finalise shortlist of 5–8 universities', note: 'Mix of reach, target, and safety schools. Check specific deadlines — they vary.' },
      { task: 'Write your Statement of Purpose (SOP)', note: 'Different for each university. Mention specific professors, labs, or modules.' },
      { task: 'Request Letters of Recommendation', note: 'Give referees 4–6 weeks notice. Share the program details and your SOP draft.' },
      { task: 'Apply via uni-assist or direct portals', note: 'Uni-assist handles most international applications. Some unis have own portals.' },
      { task: 'Apply for DAAD or other scholarships', note: 'Most scholarships close 12–15 months before the academic year. Don\'t miss.' },
      { task: 'Wait for admission decisions', note: 'Typically 4–12 weeks. German universities send Zulassungsbescheid by post and email.' },
    ],
  },
  {
    id: 'visa',
    label: '3–6 Months Before',
    title: 'Visa Process',
    color: '#0A0A0A',
    icon: Stamp,
    steps: [
      { task: 'Open blocked account (Sperrkonto)', note: 'Use Fintiba or Expatrio. Takes 1–3 weeks. You need the confirmation for your visa.' },
      { task: 'Arrange travel health insurance', note: 'Required for visa appointment. Switch to public insurance (TK/AOK) after arriving.' },
      { task: 'Book VFS visa appointment immediately', note: '2–4 month wait times are common at German consulates in India. Book the day you get admission.' },
      { task: 'Prepare visa documents', note: 'Passport, APS cert, admission letter, blocked account, insurance, photos, application form, fee (~₹7,000)' },
      { task: 'Attend visa interview at consulate/VFS', note: 'Dress formally. Bring all originals. Interview is usually 15–20 minutes.' },
      { task: 'Receive visa (Type D National Visa)', note: 'Takes 4–8 weeks. Valid for 3–6 months, extended to residence permit in Germany.' },
    ],
  },
  {
    id: 'predeparture',
    label: '1–3 Months Before',
    title: 'Pre-Departure Prep',
    color: '#FB923C',
    icon: Plane,
    steps: [
      { task: 'Book your flight', note: 'Book 2–3 months early for best prices. ₹25,000–55,000 typical from major Indian cities.' },
      { task: 'Arrange temporary accommodation', note: 'Book student hostel, Airbnb, or WG-Gesucht for first 2–4 weeks while you find permanent housing.' },
      { task: 'Pack essentials', note: 'Indian clothes fit German weather poorly — bring warm layers. Medicines, spices, comfortable shoes.' },
      { task: 'Notify your bank about international use', note: 'Or open a zero-forex card (Niyo, Scapia) for spending until you open a German account.' },
      { task: 'Download key apps', note: 'Google Translate (offline German), DB Navigator (trains), WG-Gesucht (housing), TK/AOK app' },
      { task: 'Inform university of your arrival', note: 'Some unis require a matriculation appointment — book it in advance.' },
    ],
  },
  {
    id: 'arrival',
    label: 'First 4 Weeks',
    title: 'Arrival & Setup',
    color: '#444444',
    icon: Home,
    steps: [
      { task: 'Anmeldung (address registration)', note: 'CRITICAL: Do within 14 days of arrival. Visit local Bürgeramt with passport + rental contract.' },
      { task: 'Get a German SIM card', note: 'Aldi Talk, O2, Telekom prepaid. A German number is required for banking and many services.' },
      { task: 'Open German bank account', note: 'N26 or DKB (online, free). You need your Anmeldung confirmation. Your blocked account releases go here.' },
      { task: 'Get public health insurance', note: 'TK, AOK, or Barmer (~€120/month). Required for university enrollment.' },
      { task: 'Enroll at university (Immatrikulation)', note: 'Bring all documents including health insurance proof. You\'ll get your student ID and Semesterticket.' },
      { task: 'Apply for residence permit (Aufenthaltserlaubnis)', note: 'Visit Ausländerbehörde before your entry visa expires. Book appointment well in advance.' },
    ],
  },
  {
    id: 'student-life',
    label: 'Ongoing',
    title: 'Student Life',
    color: '#0A0A0A',
    icon: GraduationCap,
    steps: [
      { task: 'Find permanent housing', note: 'WG-Gesucht, StudentenWERK dormitories, or private listings. Apply to student dorms early — waitlists are long.' },
      { task: 'Start looking for a Werkstudent job', note: 'STEM students can earn €15–20/hr. LinkedIn, university job boards, direct applications.' },
      { task: 'File a tax return (Steuererklärung)', note: 'If you work part-time, file via ELSTER — most students get €200–600 back.' },
      { task: 'Network through university events', note: 'Join student clubs, attend company info sessions. Your university career center is a key resource.' },
      { task: 'Track your residence permit renewal', note: 'Book Ausländerbehörde appointment 2 months before expiry.' },
      { task: 'Apply for job seeker visa 3 months before graduation', note: '18-month visa to find employment. Apply at Ausländerbehörde before your student permit expires.' },
    ],
  },
]

const tips = [
  { text: 'Start APS at least 3–4 months before your application deadline — processing takes 4–8 weeks', severity: 'critical' },
  { text: 'Book your VFS visa appointment the same day you receive your admission letter', severity: 'critical' },
  { text: 'Open your blocked account before applying for a visa — it takes 1–3 weeks to set up', severity: 'critical' },
  { text: 'Complete Anmeldung (address registration) within 14 days of arrival in Germany', severity: 'critical' },
  { text: 'DAAD scholarship applications open 12–15 months before the academic year — apply early', severity: 'high' },
  { text: 'Apply to student dorms the moment you receive admission — waitlists can exceed 6 months', severity: 'high' },
]

export default function JourneyPage() {
  useEffect(() => { document.title = 'Complete Study Journey — India to Germany | StudyDE' }, [])

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-all" style={{ color: 'rgba(0,0,0,0.45)' }}>
          <ArrowLeft size={15} /> Back to Home
        </Link>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-gold inline-flex mb-4">Complete Roadmap</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Your Study Journey —<br />
            <span className="text-gold-gradient">India to Germany</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>
            Every step of the journey from deciding to study abroad to starting your life as a student in Germany.
            Use this as your master checklist — nothing falls through the cracks.
          </p>
        </motion.div>

        {/* Critical tips banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={18} color="#CC1416" />
            <h2 className="font-bold text-[#1A1A2E]">Most Common Mistakes — Avoid These</h2>
          </div>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5"
                  style={{ background: tip.severity === 'critical' ? '#CC1416' : '#FB923C' }}
                />
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.65)' }}>{tip.text}</p>
                <span
                  className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                  style={{
                    background: tip.severity === 'critical' ? 'rgba(204,20,22,0.1)' : 'rgba(251,146,60,0.1)',
                    color: tip.severity === 'critical' ? '#CC1416' : '#FB923C',
                  }}
                >
                  {tip.severity}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, pi) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + pi * 0.07 }}
              >
                {/* Phase header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${phase.color}12`, border: `1px solid ${phase.color}25` }}
                  >
                    <Icon size={18} color={phase.color} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: phase.color, letterSpacing: '0.1em' }}>
                      {phase.label}
                    </div>
                    <h2 className="text-xl font-bold" style={{ color: '#0A0A0A' }}>{phase.title}</h2>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2 ml-2">
                  {phase.steps.map((step, si) => (
                    <div
                      key={si}
                      className="glass rounded-2xl p-4 flex items-start gap-3 hover-card cursor-default"
                    >
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: `${phase.color}10`, border: `1px solid ${phase.color}20` }}
                      >
                        <CheckCircle2 size={13} color={phase.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold mb-0.5" style={{ color: '#0A0A0A' }}>{step.task}</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(0,0,0,0.45)' }}>{step.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Deep dive links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Go Deeper — Detailed Guides</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: 'APS Certificate — Full Guide', to: '/aps', color: '#CC1416' },
              { label: 'Student Visa — Step by Step', to: '/visa', color: '#0A0A0A' },
              { label: 'Finances & Blocked Account', to: '/finances', color: '#444444' },
              { label: 'Scholarships Guide', to: '/scholarships', color: '#0A0A0A' },
              { label: 'Life in Germany', to: '/life', color: '#444444' },
              { label: 'Why Study in Germany', to: '/why-germany', color: '#CC1416' },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="flex items-center justify-between gap-2 p-4 rounded-xl transition-all hover-card"
                style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <span className="text-sm font-semibold" style={{ color: link.color }}>{link.label}</span>
                <ArrowRight size={14} color={link.color} />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(204,20,22,0.04))', border: '1px solid #E8E8E8' }}
        >
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Start with Step 1 — The APS Certificate</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>
            The APS certificate is the gateway to every German university. It takes 4–8 weeks — start immediately.
          </p>
          <Link
            to="/aps"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: '#CC1416', color: '#FFFFFF' }}
          >
            APS Certificate Guide <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
