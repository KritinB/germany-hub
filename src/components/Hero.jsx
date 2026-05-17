import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(201,164,109,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,164,109,0.06) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,140,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="chip chip-gold">
            <Sparkles size={10} />
            Complete Guide for Indian Students
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.07] mb-4"
          style={{ letterSpacing: '-0.02em' }}
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
          style={{ color: 'rgba(245,245,248,0.55)' }}
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
              background: 'linear-gradient(135deg, #C9A46D, #A07840)',
              color: '#07070D',
              boxShadow: '0 0 30px rgba(201,164,109,0.3), 0 4px 15px rgba(0,0,0,0.4)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 50px rgba(201,164,109,0.5), 0 4px 20px rgba(0,0,0,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(201,164,109,0.3), 0 4px 15px rgba(0,0,0,0.4)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start Exploring <ArrowRight size={15} />
          </a>
          <a
            href="#aps"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.05)',
              color: '#F5F5F8',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
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
        style={{ color: 'rgba(245,245,248,0.25)' }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(201,164,109,0.6)' }} />
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
      className="glass rounded-2xl p-5 text-center hover-card cursor-default"
    >
      <div className="text-3xl font-extrabold tracking-tight text-gold-gradient mb-1">
        {stat.prefix}{stat.value === 0 ? '~0' : count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
      <div className="text-xs" style={{ color: 'rgba(245,245,248,0.4)' }}>{stat.sublabel}</div>
    </motion.div>
  )
}
