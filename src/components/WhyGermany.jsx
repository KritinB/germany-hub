import { motion } from 'framer-motion'
import { GraduationCap, Banknote, Briefcase, Globe, Shield, Train, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const reasons = [
  {
    id: 'free-education',
    icon: Banknote,
    title: 'Nearly Free Education',
    desc: 'Most public universities charge only a semester fee of €100–350. No tuition fees for EU and non-EU students alike in most states.',
    tag: 'Financial',
    color: '#2D6A4F',
    bg: 'rgba(45,106,79,0.08)',
  },
  {
    id: 'world-class-universities',
    icon: GraduationCap,
    title: 'World-Class Universities',
    desc: 'TU Munich, LMU, Heidelberg, and RWTH Aachen consistently rank among the top 100 globally. Strong research culture with Nobel laureate faculty.',
    tag: 'Academic',
    color: '#1E3A5F',
    bg: 'rgba(30,58,95,0.08)',
  },
  {
    id: 'job-seeker-visa',
    icon: Briefcase,
    title: '18-Month Job Seeker Visa',
    desc: 'After graduation, you get an 18-month residence permit to find employment in Germany. One of Europe\'s most generous post-study work rights.',
    tag: 'Career',
    color: '#0A5F73',
    bg: 'rgba(10,95,115,0.08)',
  },
  {
    id: 'english-programs',
    icon: Globe,
    title: 'English Programs Available',
    desc: 'Over 1,500 programs taught entirely in English. No German required for most STEM Master\'s degrees at leading technical universities.',
    tag: 'Language',
    color: '#5B5EA6',
    bg: 'rgba(91,94,166,0.08)',
  },
  {
    id: 'safe-country',
    icon: Shield,
    title: 'Safe & Stable Country',
    desc: 'Germany consistently ranks high in global safety, political stability, and quality of life indices. Strong legal protections for students and workers.',
    tag: 'Lifestyle',
    color: '#7A3559',
    bg: 'rgba(122,53,89,0.08)',
  },
  {
    id: 'mobility',
    icon: Train,
    title: 'Semester Ticket & Mobility',
    desc: 'Student semester tickets often cover all public transport in your region. Travel across the Schengen Area with your German student visa.',
    tag: 'Mobility',
    color: '#B04A1F',
    bg: 'rgba(176,74,31,0.08)',
  },
]

export default function WhyGermany() {
  return (
    <section id="why" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="chip chip-gold inline-flex mb-5">Why Choose Germany</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            The smartest decision<br />
            <span className="text-gold-gradient">Indian students</span> are making
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.55)' }}>
            From free education to world-class research, here's why 40,000+ Indian students
            choose Germany every year.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="glass rounded-2xl p-7 hover-card relative overflow-hidden flex flex-col"
              >
                {/* Subtle corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${r.color}10, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: r.bg, border: `1px solid ${r.color}25` }}
                >
                  <Icon size={20} color={r.color} />
                </div>

                {/* Tag */}
                <div
                  className="chip mb-3 inline-flex"
                  style={{
                    background: `${r.color}12`,
                    color: r.color,
                    border: `1px solid ${r.color}25`,
                  }}
                >
                  {r.tag}
                </div>

                <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1A2E' }}>{r.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(26,26,46,0.55)' }}>{r.desc}</p>

                <Link
                  to={`/why-germany#${r.id}`}
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold transition-all"
                  style={{ color: r.color }}
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
