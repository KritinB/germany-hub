import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16" style={{ background: '#FFFFFF' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #CCCCCC, transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span className="category-label">Complete Guide · Indian Students · Germany</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-extrabold tracking-tight leading-[1.02] mb-6"
          style={{ letterSpacing: '-0.03em', color: '#0A0A0A', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          Your{' '}
          <span className="relative inline-block">
            <motion.span
              key={wordIdx}
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'inline-block' }}
            >
              {words[wordIdx]}
            </motion.span>
          </span>
          <br />
          in Germany.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#666666' }}
        >
          Everything an Indian student needs — APS certificate, university applications,
          student visas, finances, and life in Germany. All in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-24"
        >
          <a href="#why" className="btn-primary">
            Start Exploring <ArrowRight size={15} />
          </a>
          <a href="#aps" className="btn-secondary">
            APS Certificate Guide
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto"
          style={{ background: '#EEEEEE', border: '1px solid #EEEEEE', borderRadius: '16px', overflow: 'hidden', gap: '1px' }}
        >
          {stats.map((s, i) => (
            <StatCell key={i} stat={s} delay={0.8 + i * 0.08} started={started} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid #DDDDDD' }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: '#AAAAAA' }} />
        </motion.div>
      </motion.div>
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
      className="bg-white p-6 text-center cursor-default"
    >
      <div className="text-3xl font-extrabold tracking-tight mb-1" style={{ color: '#0A0A0A', letterSpacing: '-0.02em' }}>
        {stat.prefix}{stat.value === 0 ? '~0' : count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold mb-0.5" style={{ color: '#0A0A0A' }}>{stat.label}</div>
      <div className="text-xs" style={{ color: '#999999' }}>{stat.sublabel}</div>
    </motion.div>
  )
}
