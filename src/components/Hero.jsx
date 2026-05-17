import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

const words = ['Bachelor\'s', 'Master\'s', 'PhD']

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

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % words.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EEF2F8 50%, #F0F7F4 100%)' }}>

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,95,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,95,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="chip chip-navy">
            <BookOpen size={10} />
            Complete Guide for Indian Students
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.07] mb-4"
          style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}
        >
          Your{' '}
          <span className="relative inline-block">
            <motion.span
              key={wordIdx}
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
              transition={{ duration: 0.4 }}
              className="text-gold-gradient"
              style={{ display: 'inline-block' }}
            >
              {words[wordIdx]}
            </motion.span>
          </span>
          <br />
          in Germany Starts Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(26,26,46,0.6)' }}
        >
          Everything an Indian student needs to know about studying in Germany —
          APS certificate, applications, visas, finances, and life abroad.
          All in one place.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <a
            href="#why"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #1E3A5F, #2E5082)',
              color: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(30,58,95,0.3)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(30,58,95,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,58,95,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start Exploring <ArrowRight size={15} />
          </a>
          <a
            href="#aps"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: '#FFFFFF',
              color: '#1E3A5F',
              border: '1px solid rgba(30,58,95,0.2)',
              boxShadow: '0 1px 4px rgba(30,58,95,0.08)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(30,58,95,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(30,58,95,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(30,58,95,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(30,58,95,0.08)' }}
          >
            APS Certificate Guide
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} delay={0.8 + i * 0.1} started={started} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(26,26,46,0.35)' }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(30,58,95,0.15)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(30,58,95,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function StatCard({ stat, delay, started }) {
  const count = useCounter(stat.value, 2000, started)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl p-5 text-center hover-card cursor-default"
      style={{ background: '#FFFFFF', border: '1px solid rgba(30,58,95,0.1)', boxShadow: '0 2px 8px rgba(30,58,95,0.06)' }}
    >
      <div className="text-3xl font-extrabold tracking-tight mb-1 text-gold-gradient">
        {stat.prefix}{stat.value === 0 ? '~0' : count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold mb-0.5" style={{ color: '#1A1A2E' }}>{stat.label}</div>
      <div className="text-xs" style={{ color: 'rgba(26,26,46,0.45)' }}>{stat.sublabel}</div>
    </motion.div>
  )
}
