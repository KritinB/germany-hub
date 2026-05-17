import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, CheckCircle2, Award, ChevronRight, FileText, Users, Globe } from 'lucide-react'
import Navbar from '../components/Navbar'
import { programs } from '../components/Programs'

const applicationGuide = {
  bachelor: {
    portals: [
      { name: 'uni-assist', desc: 'Centralized application platform used by most German universities for international students', url: 'https://www.uni-assist.de' },
      { name: 'University-direct', desc: 'Some universities accept direct applications — always check the specific university website first' },
      { name: 'Hochschulstart', desc: 'For medicine, dentistry, and pharmacy — highly restricted admission (numerus clausus)' },
    ],
    sopTips: [
      'Keep it to 1–2 pages maximum — German universities prefer concise motivation letters',
      'Explain specifically WHY you chose this university and this program (not Germany in general)',
      'Mention relevant school projects, skills, or interests related to your chosen field',
      'Address the Studienkolleg requirement directly if applicable — explain your plan',
      'Avoid generic phrases like "I have always been passionate about..." — be specific',
    ],
    timeline: [
      { phase: 'Research & shortlist universities', timing: '12–18 months before intake', tip: 'Use DAAD\'s program finder and QS rankings for your field' },
      { phase: 'Get APS Certificate', timing: '10–12 months before intake', tip: 'Start immediately — takes 4–8 weeks to process' },
      { phase: 'German language course', timing: '8–12 months before intake', tip: 'DSH-2 or TestDaF 4 for German-taught programs' },
      { phase: 'Prepare documents & SOP', timing: '6–8 months before intake', tip: 'Transcripts, letter of motivation, CV (Europass format preferred)' },
      { phase: 'Submit applications', timing: '3–6 months before intake', tip: 'Winter intake (Oct): apply by May–July; Summer (Apr): apply by Nov–Jan' },
      { phase: 'Receive admission letter', timing: '1–3 months before intake', tip: 'Once received, apply for blocked account and visa immediately' },
    ],
    extras: [
      { title: 'Studienkolleg — What is it?', desc: 'Many Indian 12th-grade qualifications do not directly qualify for German Bachelor\'s admission. If required, you\'ll need to complete a 1-year preparatory course (Studienkolleg) with a final exam (Feststellungsprüfung). Check your qualification using uni-assist\'s anabin database.' },
      { title: 'Language Requirements in Detail', desc: 'German-taught programs require DSH-2 (Deutsche Sprachprüfung für den Hochschulzugang) or TestDaF 4 in all categories. English-taught programs typically require IELTS 6.0–6.5 or TOEFL iBT 80–90. Some programs have no language requirement if your previous degree was in English.' },
    ],
  },
  master: {
    portals: [
      { name: 'uni-assist', desc: 'Used by 180+ German universities — the standard for Master\'s applications from India', url: 'https://www.uni-assist.de' },
      { name: 'University-direct portals', desc: 'TUM, RWTH, TU Berlin, KIT all have their own application portals — use those directly' },
      { name: 'DAAD Scholarship Application', desc: 'Apply for DAAD scholarships simultaneously — they have their own portal and timeline' },
    ],
    sopTips: [
      'Two pages maximum — highly specific to the program. Germans expect precision over storytelling',
      'Connect your Bachelor\'s coursework directly to this Master\'s program topic areas',
      'Mention specific professors whose research interests you — shows you\'ve researched',
      'Include your GPA/CGPA as context (many Indian applicants don\'t — do it to stand out)',
      'Explain career goals clearly: what specific role in which industry, why Germany helps get there',
      'If you have publications, internships, or projects — lead with the most impressive one',
    ],
    timeline: [
      { phase: 'Research programs & shortlist', timing: '15–18 months before intake', tip: 'Most STEM programs are October intake only — plan a full year ahead' },
      { phase: 'Get APS Certificate', timing: '12–14 months before intake', tip: 'Non-negotiable — German universities will not process without it' },
      { phase: 'Prepare application documents', timing: '8–10 months before intake', tip: 'Transcripts, SOP, LORs (allow 6 weeks for professors to write them)' },
      { phase: 'Apply for DAAD / scholarships', timing: '8–10 months before intake', tip: 'DAAD deadline is typically October–November for next October intake' },
      { phase: 'Submit university applications', timing: '4–6 months before intake', tip: 'Winter (Oct) intake: apply Dec–April; check specific university deadlines' },
      { phase: 'Receive admission & apply for visa', timing: '2–4 months before intake', tip: 'Open blocked account and book VFS appointment immediately' },
    ],
    extras: [
      { title: 'Getting Strong Letters of Recommendation', desc: 'Request LORs from professors who supervised your thesis, final year project, or research. In India, avoid getting LORs from HODs who barely know you — German admissions read them carefully. Give professors at least 6–8 weeks and provide your SOP and your work with them for context.' },
      { title: 'CGPA to German Grade Conversion', desc: 'German universities often want your GPA as a German grade (1.0–4.0 scale). Indian CGPA 10/10 ≈ German 1.0 (excellent). The official conversion formula: German grade = [1 + 3 × (max-achieved) / (max - min)]. A CGPA of 7.5/10 typically converts to ~2.5–3.0 in the German system.' },
    ],
  },
  phd: {
    portals: [
      { name: 'Direct professor contact', desc: 'Email professors directly with your research proposal — this is the ONLY path for most PhD positions' },
      { name: 'DAAD scholarship portal', desc: 'DAAD has dedicated PhD fellowships for Indian researchers — apply through daad.de' },
      { name: 'Helmholtz / Fraunhofer portals', desc: 'Research institutes often have structured PhD programs with their own application portals' },
    ],
    sopTips: [
      'Your research proposal (Exposé) is the most critical document — typically 5–15 pages',
      'Clearly state the research question, methodology, expected contribution, and why this professor',
      'Show you know the professor\'s recent work — cite their publications and explain alignment',
      'Keep your initial email to the professor concise (5–8 sentences) with your CV and Exposé attached',
      'Follow up once after 2–3 weeks if no response — faculty are busy but are responsive to persistence',
    ],
    timeline: [
      { phase: 'Identify potential supervisors', timing: '12–18 months before start', tip: 'Read recent papers, find researchers working on your exact topic' },
      { phase: 'Write research proposal', timing: '10–14 months before start', tip: '5–15 pages — your academic supervisor or advisor can review it' },
      { phase: 'Email professors', timing: '10–12 months before start', tip: 'Target 10–20 professors; expect 10–20% response rate' },
      { phase: 'Apply for APS Certificate', timing: '8–10 months before start', tip: 'Required even for PhD, alongside the professor agreement' },
      { phase: 'Apply for DAAD PhD Fellowship', timing: 'October annually', tip: 'DAAD\'s most competitive fellowship — requires professor pre-agreement' },
      { phase: 'Sign employment contract & apply for visa', timing: '2–4 months before start', tip: 'Many PhD positions come with TVL-E13 employment (researcher visa)' },
    ],
    extras: [
      { title: 'The Research Proposal (Exposé) — How to Write It', desc: 'Structure: (1) Title and Abstract, (2) Research Background and State of the Art, (3) Research Question and Objectives, (4) Methodology and Approach, (5) Expected Results and Contribution, (6) Timeline, (7) Bibliography. Aim for 5–10 pages. German professors value precision and depth over length.' },
      { title: 'Paid PhD vs Stipend-Based PhD', desc: 'Most German PhD positions are paid employment (Wissenschaftlicher Mitarbeiter) at TVL-E13 rate (~€50,000–60,000 gross/year). Some come as DAAD or DFG stipends (~€1,200–1,600/month). Paid positions are strongly preferred — they include health insurance, pension contributions, and employment rights.' },
    ],
  },
}

export default function ProgramPage() {
  const { type } = useParams()
  const prog = programs.find(p => p.id === type)
  const guide = applicationGuide[type]

  if (!prog || !guide) return <Navigate to="/" replace />

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <div className="flex items-center gap-4 mb-8">
          <Link to="/#programs" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(0,0,0,0.45)' }}>
            <ArrowLeft size={15} /> Back to Guide
          </Link>
          <div className="flex gap-2">
            {programs.map(p => (
              <Link key={p.id} to={`/programs/${p.id}`} className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: p.id === type ? 'linear-gradient(135deg, #0A0A0A, #333333)' : 'rgba(0,0,0,0.03)', color: p.id === type ? '#F8FAFC' : 'rgba(0,0,0,0.45)', border: p.id === type ? 'none' : '1px solid rgba(0,0,0,0.04)' }}>
                {p.label}
              </Link>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip inline-flex mb-4" style={{ background: prog.tagBg, color: prog.tagColor, border: `1px solid ${prog.tagColor}25` }}>
            {prog.label} in Germany — Deep Dive
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            {prog.label} Degree Guide —<br />
            <span className="text-gold-gradient">Applications, Strategy & Tips</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>{prog.intro}</p>
        </motion.div>

        {/* Key facts */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[#1A1A2E] mb-5 text-xs uppercase tracking-widest" style={{ color: 'rgba(0,0,0,0.38)' }}>At a Glance</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {prog.keyPoints.map((kp, i) => (
              <div key={i} className="flex items-start justify-between py-2.5 px-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                <span className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{kp.label}</span>
                <span className="text-sm font-bold" style={{ color: prog.tagColor }}>{kp.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-5 flex items-center gap-2">
            <CheckCircle2 size={16} color={prog.tagColor} /> Complete Requirements Checklist
          </h2>
          <div className="space-y-3">
            {prog.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ background: `${prog.tagColor}15`, border: `1px solid ${prog.tagColor}30` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: prog.tagColor }} />
                </div>
                <span className="text-sm" style={{ color: 'rgba(0,0,0,0.65)' }}>{req}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl text-sm" style={{ background: `${prog.tagColor}08`, border: `1px solid ${prog.tagColor}20`, color: 'rgba(0,0,0,0.65)' }}>
            {prog.note}
          </div>
        </motion.div>

        {/* Application timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <Clock size={18} color={prog.tagColor} /> Realistic Application Timeline
          </h2>
          <div className="space-y-4">
            {guide.timeline.map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 text-xs font-mono font-bold px-3 py-1.5 rounded-lg h-fit" style={{ background: `${prog.tagColor}10`, color: prog.tagColor, border: `1px solid ${prog.tagColor}20`, minWidth: '160px', textAlign: 'center' }}>
                  {t.timing}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">{t.phase}</div>
                  <div className="text-xs" style={{ color: 'rgba(0,0,0,0.45)' }}>{t.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Application portals */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-5 flex items-center gap-2">
            <Globe size={18} color={prog.tagColor} /> Where to Apply
          </h2>
          <div className="space-y-3">
            {guide.portals.map((p, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div className="font-bold text-[#1A1A2E] mb-1">{p.name}</div>
                <div className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SOP Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-5 flex items-center gap-2">
            <FileText size={18} color={prog.tagColor} /> Statement of Purpose / Motivation Letter Tips
          </h2>
          <div className="space-y-3">
            {guide.sopTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <ChevronRight size={14} color={prog.tagColor} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Extra guides */}
        {guide.extras.map((extra, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 + i * 0.05 }} className="glass rounded-2xl p-7 mb-6">
            <h3 className="font-bold text-[#1A1A2E] mb-3">{extra.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.55)' }}>{extra.desc}</p>
          </motion.div>
        ))}

        {/* Popular fields */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-2xl p-7 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Popular Fields for Indian Students</h2>
          <div className="flex flex-wrap gap-2">
            {prog.popularFields.map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium" style={{ background: `${prog.tagColor}10`, color: prog.tagColor, border: `1px solid ${prog.tagColor}20` }}>
                <Award size={12} /> {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(91,140,255,0.05))', border: '1px solid #E8E8E8' }}>
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Once you're ready — apply for the APS Certificate first</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>Every German university requires the APS certificate. Start this process before anything else.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/aps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
              APS Certificate Guide →
            </Link>
            <Link to="/universities/tum" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: 'rgba(0,0,0,0.03)', color: '#0A0A0A', border: '1px solid #EEEEEE' }}>
              Explore Universities →
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
