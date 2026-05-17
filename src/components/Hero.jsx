import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

const words = ["Bachelor's", "Master's", 'PhD']

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const stats = [
  { value: 400, suffix: '+', label: 'Universities', sublabel: 'across Germany' },
  { value: 0, suffix: '€', label: 'Tuition', sublabel: 'public universities', prefix: '~' },
  { value: 18, suffix: '-mo', label: 'Job Seeker Visa', sublabel: 'post-graduation' },
  { value: 3, suffix: 'rd', label: 'Ranked Economy', sublabel: 'worldwide' },
]

const announcements = [
  'APS applications for 2025–26 are now open — apply at aps-india.de',
  'DAAD scholarship deadline: October 2025 — start your application now',
  'Winter Semester 2025 applications: most universities open December–July',
]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [started, setStarted] = useState(false)
  const [annIdx, setAnnIdx] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setAnnIdx((i) => (i + 1) % announcements.length), 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative flex flex-col overflow-hidden pt-16"
      style={{ background: 'linear-gradient(160deg, #0D0D0D 0%, #181818 50%, #0A0A0A 100%)', minHeight: '100vh' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red glow accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(204,20,22,0.12), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 text-center py-24">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded"
            style={{ background: 'rgba(204,20,22,0.15)', color: '#FF5555', border: '1px solid rgba(204,20,22,0.3)', letterSpacing: '0.1em' }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#CC1416' }} />
            Complete Guide · Indian Students · Germany
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold leading-tight mb-6 text-white"
          style={{
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Your{' '}
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.35 }}
                style={{ display: 'inline-block', color: '#CC1416' }}
              >
                {words[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          in Germany.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Everything an Indian student needs — APS certificate, university applications,
          student visas, finances, and life in Germany. All in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-20"
        >
          <a href="#why" className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>
            Start Exploring <ArrowRight size={16} />
          </a>
          <a
            href="#aps"
            className="btn-secondary"
            style={{ fontSize: '15px', padding: '13px 28px', color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#CC1416'; e.currentTarget.style.color = '#FFFFFF' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
          >
            APS Certificate Guide
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto w-full"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            overflow: 'hidden',
            gap: '1px',
          }}
        >
          {stats.map((s, i) => (
            <StatCell key={i} stat={s} delay={0.8 + i * 0.08} started={started} />
          ))}
        </motion.div>
      </div>

      {/* Announcement bar */}
      <div style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded flex-shrink-0"
            style={{ background: '#CC1416', color: '#FFFFFF', letterSpacing: '0.1em', fontSize: '10px' }}
          >
            UPDATES
          </span>
          <AnimatePresence mode="wait">
            <motion.p
              key={annIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-sm flex-1 truncate"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              {announcements[annIdx]}
            </motion.p>
          </AnimatePresence>
          <a
            href="#aps"
            className="text-xs font-semibold flex-shrink-0 flex items-center gap-1 transition-opacity hover:opacity-80"
            style={{ color: '#CC1416' }}
          >
            Learn more <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}

function StatCell({ stat, delay, started }) {
  const count = useCounter(stat.value, 2000, started)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      className="p-6 text-center cursor-default"
      style={{ background: 'rgba(255,255,255,0.025)' }}
    >
      <div className="text-3xl font-extrabold tracking-tight mb-1 text-white" style={{ letterSpacing: '-0.02em' }}>
        {stat.prefix}{stat.value === 0 ? '~0' : count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold mb-0.5 text-white">{stat.label}</div>
      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.sublabel}</div>
    </motion.div>
  )
}
