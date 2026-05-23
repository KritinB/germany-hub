import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Award, ExternalLink, Calendar, DollarSign, Users, CheckCircle2, FileText, Clock, Lightbulb } from 'lucide-react'
import Navbar from '../components/Navbar'
import { scholarships } from '../components/Scholarships'

const applicationTips = [
  {
    title: 'Start 12–18 months before your target semester',
    desc: 'Most major scholarships (DAAD, foundation scholarships) have deadlines 12–15 months before the academic year starts. Missing the deadline means waiting a full year.',
    color: '#0A0A0A',
    icon: Clock,
  },
  {
    title: 'Write a tailored Statement of Purpose for each scholarship',
    desc: 'Generic SOPs fail. DAAD wants to see academic excellence and research goals. FES wants social democratic engagement. Each scholarship has a value system — align your narrative to it.',
    color: '#0A0A0A',
    icon: FileText,
  },
  {
    title: 'Get strong letters of recommendation',
    desc: 'Foundation scholarships (FES, KAS, Böll) require 2–3 LORs. Ask professors who genuinely know your work, not generic department heads. Give them 6–8 weeks and your SOP for context.',
    color: '#444444',
    icon: Users,
  },
  {
    title: 'Show civic engagement and leadership',
    desc: 'German foundation scholarships (all of them) look heavily at non-academic achievements — volunteer work, student leadership, NGO involvement, community projects. Document everything.',
    color: '#A78BFA',
    icon: Award,
  },
  {
    title: 'Apply to multiple scholarships simultaneously',
    desc: 'Don\'t put all eggs in one basket. A well-organized applicant can apply to DAAD + one foundation scholarship + Deutschlandstipendium simultaneously without much extra work.',
    color: '#FB923C',
    icon: Lightbulb,
  },
]

const daadDetails = {
  programs: [
    { name: 'DAAD Research Grants (STIBET)', level: 'Master\'s, PhD, Postdoc', amount: '€934/month + allowances', deadline: 'Oct 15 annually (for following year)' },
    { name: 'Helmut Schmidt Programme', level: 'Master\'s (Public Policy focus)', amount: '€934/month + extras', deadline: 'October annually' },
    { name: 'Development-Related Postgraduate Courses', level: 'Master\'s', amount: 'Varies by program', deadline: 'Varies — check DAAD portal' },
    { name: 'Graduate School Scholarship Programme', level: 'PhD', amount: '€1,200/month stipend', deadline: 'October–November annually' },
  ],
  tips: [
    'Your academic supervisor in Germany must confirm your enrollment for most DAAD programs',
    'DAAD applications require a study/research plan (Studien-/Forschungsplan) — 5–10 pages',
    'Indian applicants should apply through the DAAD India regional office in New Delhi',
    'Language certificates are required — IELTS or TestDaF as specified by your program',
    'DAAD reviews holistically — academic excellence + social engagement + study plan quality',
  ],
}

const sopStructure = [
  { section: 'Opening (1 paragraph)', content: 'Hook — a specific moment or problem that led you to this field. Not "I have always been passionate about..."' },
  { section: 'Academic Background (2 paragraphs)', content: 'Key courses, projects, thesis, or research relevant to what you want to study in Germany. Be specific.' },
  { section: 'Why Germany & This University (1 paragraph)', content: 'Name the specific program, professors, or research groups. Show you\'ve done real research.' },
  { section: 'Career Goals (1–2 paragraphs)', content: 'What will you do after graduation? How does this scholarship/degree contribute to your goals?' },
  { section: 'Civic Engagement (1 paragraph)', content: 'Volunteer work, leadership, social impact. Essential for foundation scholarships.' },
  { section: 'Closing (1 paragraph)', content: 'Why you deserve this scholarship and what you\'ll give back to your country/society.' },
]

export default function ScholarshipsPage() {
  useEffect(() => { document.title = 'Scholarships for Indian Students in Germany — StudyDE' }, [])
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <Link to="/#scholarships" className="inline-flex items-center gap-2 mb-8 text-sm font-medium" style={{ color: 'rgba(0,0,0,0.45)' }}>
          <ArrowLeft size={15} /> Back to Guide
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-gold inline-flex mb-4">Scholarships — Deep Dive</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Scholarship Guide —<br />
            <span className="text-gold-gradient">Applications, SOPs & Strategy</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>
            Germany offers some of the most generous scholarships for Indian students. This guide covers every
            major program, how to apply, how to write a winning SOP, and common mistakes.
          </p>
        </motion.div>

        {/* All scholarships */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">All Major Scholarships for Indian Students</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {scholarships.map((s, i) => (
              <div key={s.name} className="glass rounded-2xl p-6 flex flex-col" style={s.highlight ? { border: '1px solid rgba(0,0,0,0.1)' } : {}}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.color }}>{s.org}</div>
                    <h3 className="font-bold text-[#1A1A2E]">{s.name}</h3>
                  </div>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ml-2" style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div className="flex items-center gap-2 mb-3 py-2 px-3 rounded-xl" style={{ background: `${s.color}08`, border: `1px solid ${s.color}15` }}>
                  <DollarSign size={14} color={s.color} />
                  <span className="font-bold text-sm" style={{ color: s.color }}>{s.amount}</span>
                </div>

                <p className="text-sm mb-3 flex-1 leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>{s.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {s.level.map((l, j) => (
                    <div key={j} className="chip text-[10px] px-2 py-0.5" style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}20` }}>{l}</div>
                  ))}
                </div>

                <div className="space-y-2 pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.03)' }}>
                  <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
                    <Calendar size={11} className="mt-0.5 flex-shrink-0" style={{ color: s.color }} />
                    <span>Deadline: {s.deadline}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
                    <Users size={11} className="mt-0.5 flex-shrink-0" style={{ color: s.color }} />
                    <span>{s.eligibility}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DAAD deep dive */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-8 mb-10" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">DAAD Programs for Indian Students — Deep Dive</h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>DAAD (Deutscher Akademischer Austauschdienst) is Germany's primary international scholarship body and the most accessible for Indian students.</p>

          <div className="space-y-3 mb-8">
            {daadDetails.programs.map((p, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-bold text-[#1A1A2E] text-sm">{p.name}</h4>
                  <div className="text-xs font-mono font-bold flex-shrink-0" style={{ color: '#0A0A0A' }}>{p.amount}</div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
                  <span><Users size={10} className="inline mr-1" />{p.level}</span>
                  <span><Calendar size={10} className="inline mr-1" />Deadline: {p.deadline}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-[#1A1A2E] mb-4">DAAD Application Tips</h3>
          <div className="space-y-2">
            {daadDetails.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={14} color="#0A0A0A" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Application tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">How to Build a Winning Scholarship Application</h2>
          <div className="space-y-4">
            {applicationTips.map((tip, i) => {
              const Icon = tip.icon
              return (
                <div key={i} className="glass rounded-2xl p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${tip.color}12`, border: `1px solid ${tip.color}25` }}>
                    <Icon size={18} color={tip.color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-1">{tip.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>{tip.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* SOP structure */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-2 flex items-center gap-2">
            <FileText size={18} color="#0A0A0A" /> Statement of Purpose Structure
          </h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>A well-structured SOP is typically 2 pages (500–800 words). Here's the blueprint:</p>
          <div className="space-y-4">
            {sopStructure.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.1)', color: '#0A0A0A' }}>
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-[#1A1A2E] text-sm mb-1">{s.section}</div>
                  <p className="text-sm" style={{ color: 'rgba(0,0,0,0.5)' }}>{s.content}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Scholarship Application Timeline</h2>
          <div className="space-y-4">
            {[
              { when: '18 months before', what: 'Research programs and identify which scholarships you\'re eligible for' },
              { when: '15 months before', what: 'Get APS certificate (mandatory) and language certificates (IELTS/TestDaF)' },
              { when: '12 months before', what: 'Secure professor/supervisor agreement (required for PhD DAAD grants)' },
              { when: '10–12 months before', what: 'Write and finalize Statement of Purpose and research plan (Exposé for PhD)' },
              { when: '10 months before', what: 'Request Letters of Recommendation — give professors 6–8 weeks minimum' },
              { when: 'October–November', what: 'Submit DAAD and foundation scholarship applications (annual deadline for most)' },
              { when: 'January–April', what: 'Scholarship decisions announced — begin university applications in parallel' },
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-xs font-bold font-mono px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,0,0,0.04)', color: '#0A0A0A', border: '1px solid rgba(0,0,0,0.08)', minWidth: '130px', textAlign: 'center' }}>
                  {t.when}
                </div>
                <p className="text-sm pt-1" style={{ color: 'rgba(0,0,0,0.6)' }}>{t.what}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(91,140,255,0.05))', border: '1px solid #E8E8E8' }}>
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Apply for APS first — scholarships come after</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>You need an APS certificate before any German university will accept your application.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/aps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
              APS Certificate Guide →
            </Link>
            <Link to="/programs/master" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: 'rgba(0,0,0,0.03)', color: '#0A0A0A', border: '1px solid #EEEEEE' }}>
              Master's Programs Guide →
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
