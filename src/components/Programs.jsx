import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, BookOpen, Award, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const programs = [
  {
    id: 'bachelor',
    label: "Bachelor's",
    duration: '3–4 years',
    tagColor: '#1E3A5F',
    tagBg: 'rgba(30,58,95,0.08)',
    intro: 'A German Bachelor\'s (Bachelorstudium) is typically 6–8 semesters. For Indian students, the key step is proving your Indian 12th-grade qualifies. Most universities require it through APS and Studienkolleg assessment.',
    requirements: [
      'APS Certificate (Akademische Prüfstelle)',
      'Higher Secondary Certificate (10+2) with 60–75%+ marks',
      'German language: DSH-2 / TestDaF 4 (for German-taught programs)',
      'English: IELTS 6.0–6.5 (for English-taught programs)',
      'Motivation letter and CV (some universities)',
      'Entrance exam (some subjects, e.g., medicine, music)',
    ],
    keyPoints: [
      { label: 'Duration', value: '6–8 semesters (3–4 years)' },
      { label: 'Language', value: 'German or English' },
      { label: 'Tuition', value: '~€0 (+ €100–350 semester fee)' },
      { label: 'ECTS Credits', value: '180–240 credits required' },
      { label: 'Studienkolleg', value: 'May be required — adds 1 year' },
      { label: 'Entry', value: 'Winter or Summer Semester' },
    ],
    note: '⚠️ Many Indian 10+2 boards do not directly qualify for Bachelor\'s admission in Germany. You may need to complete a Studienkolleg (foundation year) or have 1–2 years of higher education in India first.',
    popularFields: ['Engineering (CS, ME, EE)', 'Business & Economics', 'Natural Sciences', 'Architecture'],
  },
  {
    id: 'master',
    label: "Master's",
    duration: '2 years',
    tagColor: '#1E3A5F',
    tagBg: 'rgba(30,58,95,0.08)',
    intro: 'Germany is the #1 destination for international Master\'s students. Over 1,500 English-taught Master\'s programs are available. With a Bachelor\'s degree from India (4-year or 3-year), you are generally directly eligible.',
    requirements: [
      'APS Certificate (Akademische Prüfstelle) — mandatory',
      'Bachelor\'s degree in a relevant field (min. 60–70% or 6.5–7.0 CGPA)',
      'Academic transcripts and degree certificate',
      'German: B2–C1 (for German-taught programs)',
      'English: IELTS 6.5–7.0 / TOEFL iBT 88–100 (for English programs)',
      'Statement of Purpose (2–3 pages)',
      'Letters of Recommendation (2–3)',
      'CV / Resume (Europass format preferred)',
      'GRE (some US-style programs, optional mostly)',
    ],
    keyPoints: [
      { label: 'Duration', value: '4 semesters (2 years)' },
      { label: 'Language', value: 'Mostly English available' },
      { label: 'Tuition', value: '~€0 (public) / €1,500–20,000 (private)' },
      { label: 'ECTS Credits', value: '120 credits required' },
      { label: 'Work Hours', value: '120 full days/year during studies' },
      { label: 'Entry', value: 'Mainly Winter Semester (Oct)' },
    ],
    note: '✅ Most English-taught STEM Master\'s programs at TU Munich, RWTH Aachen, TU Berlin are highly competitive. Apply early — December to March for October intake.',
    popularFields: ['Computer Science & AI', 'Mechanical Engineering', 'Data Science', 'MBA & Management', 'Electrical Engineering', 'Automotive Engineering'],
  },
  {
    id: 'phd',
    label: 'PhD',
    duration: '3–5 years',
    tagColor: '#2D6A4F',
    tagBg: 'rgba(45,106,79,0.1)',
    intro: 'German PhDs (Promotionsprogramm) are typically research-based and often come with a paid research assistant (Wissenschaftlicher Mitarbeiter) position. Unlike UK/US, German PhDs often don\'t require a taught coursework phase.',
    requirements: [
      'Master\'s degree in relevant field (typically required)',
      'Research proposal (exposé) — 5–15 pages',
      'Find a supervising professor (Doktorvater/Doktormutter) who agrees',
      'APS Certificate (if not already obtained)',
      'German or English language proficiency (depends on supervisor)',
      'Academic transcripts and publications (if any)',
      'Recommendation letters from previous supervisors',
    ],
    keyPoints: [
      { label: 'Duration', value: '3–5 years (average 4)' },
      { label: 'Funding', value: 'Often paid €1,500–2,200/month (TVL-E13 scale)' },
      { label: 'Visa', value: 'Researcher visa / Work + Study permit' },
      { label: 'Application', value: 'Direct to professor, not central admission' },
      { label: 'Health Insurance', value: 'Covered by employer contract' },
      { label: 'DAAD Grants', value: 'Available for Indian PhD students' },
    ],
    note: '💡 The most crucial step for a German PhD is finding a willing supervisor. Email professors directly with a focused research proposal. DAAD\'s fellowship programs specifically fund Indian PhD students.',
    popularFields: ['Engineering & Technology', 'Natural Sciences', 'Computer Science', 'Medical Research', 'Social Sciences', 'Economics'],
  },
]

export default function Programs() {
  const [active, setActive] = useState('master')
  const prog = programs.find(p => p.id === active)

  return (
    <section id="programs" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="chip chip-blue inline-flex mb-5">Study Programs</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            Choose your{' '}
            <span className="text-gold-gradient">academic path</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.55)' }}>
            Each program level has different requirements and advantages.
            Explore what fits your profile.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex gap-1 p-1 rounded-2xl" style={{ background: 'rgba(30,58,95,0.03)', border: '1px solid rgba(30,58,95,0.08)' }}>
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  color: active === p.id ? '#F8FAFC' : 'rgba(26,26,46,0.55)',
                }}
              >
                {active === p.id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{p.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-5 gap-6"
          >
            {/* Left: Main content */}
            <div className="lg:col-span-3 space-y-5">

              {/* Intro */}
              <div className="glass rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: prog.tagBg }}>
                    <BookOpen size={18} color={prog.tagColor} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A2E]">{prog.label} Degree</div>
                    <div className="text-xs" style={{ color: prog.tagColor }}>
                      <Clock size={11} className="inline mr-1" />{prog.duration}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.65)' }}>{prog.intro}</p>
              </div>

              {/* Requirements */}
              <div className="glass rounded-2xl p-7">
                <h3 className="font-bold text-[#1A1A2E] mb-5 flex items-center gap-2">
                  <CheckCircle2 size={16} color={prog.tagColor} />
                  Requirements Checklist
                </h3>
                <div className="space-y-3">
                  {prog.requirements.map((req, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ background: `${prog.tagColor}15`, border: `1px solid ${prog.tagColor}30` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: prog.tagColor }} />
                      </div>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.7)' }}>{req}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div
                className="rounded-2xl p-5 text-sm leading-relaxed"
                style={{ background: `${prog.tagColor}08`, border: `1px solid ${prog.tagColor}20`, color: 'rgba(26,26,46,0.75)' }}
              >
                {prog.note}
              </div>
            </div>

            {/* Right: Key points + popular fields */}
            <div className="lg:col-span-2 space-y-5">

              {/* Key facts */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold text-[#1A1A2E] mb-5 text-sm uppercase tracking-widest" style={{ color: 'rgba(26,26,46,0.55)', fontSize: '11px' }}>
                  At a Glance
                </h3>
                <div className="space-y-3">
                  {prog.keyPoints.map((kp, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 py-2.5" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                      <span className="text-xs font-medium" style={{ color: 'rgba(26,26,46,0.45)' }}>{kp.label}</span>
                      <span className="text-xs font-semibold text-right" style={{ color: prog.tagColor }}>{kp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular fields */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: 'rgba(26,26,46,0.45)', fontSize: '11px' }}>
                  Popular Fields for Indians
                </h3>
                <div className="flex flex-wrap gap-2">
                  {prog.popularFields.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: `${prog.tagColor}10`, color: prog.tagColor, border: `1px solid ${prog.tagColor}20` }}
                    >
                      <Award size={10} />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application timing */}
              <div className="glass rounded-2xl p-6">
                <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: 'rgba(26,26,46,0.45)', fontSize: '11px' }}>
                  Application Windows
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#1E3A5F' }} />
                    <div>
                      <div className="text-sm font-semibold text-[#1A1A2E]">Winter Semester (Oct)</div>
                      <div className="text-xs" style={{ color: 'rgba(26,26,46,0.5)' }}>Apply: Dec – Jul (varies by uni)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#1E3A5F' }} />
                    <div>
                      <div className="text-sm font-semibold text-[#1A1A2E]">Summer Semester (Apr)</div>
                      <div className="text-xs" style={{ color: 'rgba(26,26,46,0.5)' }}>Apply: Jul – Jan (fewer programs)</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 flex items-start gap-2 text-xs" style={{ borderTop: '1px solid rgba(30,58,95,0.04)', color: 'rgba(26,26,46,0.5)' }}>
                    <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#1E3A5F' }} />
                    Most programs only admit for Winter Semester. Always check specific university deadlines.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to={`/programs/${active}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(30,58,95,0.25)' }}
          >
            Full {prog.label} Guide — Application Tips & Strategy <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
