import { motion } from 'framer-motion'
import { Languages, Utensils, HeartPulse, Building, Sun, Wifi, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const cities = [
  {
    name: 'Munich',
    state: 'Bavaria',
    emoji: '🏔️',
    vibe: 'Most expensive, best job market',
    costLevel: 'High',
    costColor: '#F472B6',
    pros: ['Highest salaries', 'BMW, Siemens, MAN HQ', 'Alps nearby', 'Oktoberfest'],
    cons: ['Expensive rent', 'Competitive housing market'],
    avgRent: '€800–1,200',
  },
  {
    name: 'Berlin',
    state: 'Capital',
    emoji: '🎭',
    vibe: 'Startup scene, multicultural hub',
    costLevel: 'Medium',
    costColor: '#1E3A5F',
    pros: ['Strong startup ecosystem', 'Diverse & international', 'Vibrant culture', 'Best nightlife'],
    cons: ['Housing crisis', 'Slower job market than Munich'],
    avgRent: '€700–1,100',
  },
  {
    name: 'Hamburg',
    state: 'Free City',
    emoji: '⚓',
    vibe: 'Business hub, northern charm',
    costLevel: 'Medium',
    costColor: '#1E3A5F',
    pros: ['Major trade & logistics hub', 'Airbus, Hapag-Lloyd', 'Beautiful harbor city'],
    cons: ['Rainy weather', 'Housing costs rising'],
    avgRent: '€700–1,000',
  },
  {
    name: 'Dresden',
    state: 'Saxony',
    emoji: '🏛️',
    vibe: 'Affordable, strong engineering',
    costLevel: 'Low',
    costColor: '#2D6A4F',
    pros: ['Very affordable', 'TU Dresden (top 300 QS)', 'Beautiful baroque architecture', 'Growing tech scene'],
    cons: ['Smaller city', 'Less English spoken'],
    avgRent: '€350–600',
  },
]

export const tips = [
  {
    icon: Languages,
    title: 'Learn Some German',
    desc: 'Even in English-taught programs, knowing basic German dramatically improves your daily life, job prospects, and integration. Apps like Duolingo + Goethe Institut courses are a great start.',
    color: '#1E3A5F',
  },
  {
    icon: HeartPulse,
    title: 'Health Insurance is Mandatory',
    desc: 'You cannot enroll at a German university without health insurance. Public insurance (TK, AOK, Barmer) costs ~€120/month and covers almost everything. Do NOT rely on travel insurance.',
    color: '#F472B6',
  },
  {
    icon: Building,
    title: 'Anmeldung Within 14 Days',
    desc: 'Register your German address at the local Bürgeramt/Einwohnermeldeamt within 14 days of arriving. The Meldebescheinigung you receive is needed to open a bank account, get SIM card, etc.',
    color: '#1E3A5F',
  },
  {
    icon: Utensils,
    title: 'Mensa & Student Discounts',
    desc: 'University canteens (Mensa) offer meals for €2–4 with your student ID. Students get discounts on museums, public transit, software, streaming, and much more across Germany.',
    color: '#2D6A4F',
  },
  {
    icon: Sun,
    title: 'Tax ID (Steuer-ID)',
    desc: 'You\'ll receive your Tax ID by post a few weeks after Anmeldung. This is required for working a student job. Keep it safe — you\'ll need it for every employer in Germany.',
    color: '#FB923C',
  },
  {
    icon: Wifi,
    title: 'Banking & SIM Card',
    desc: 'Open a German bank account (N26, DKB, Commerzbank) right after registration. Get a German SIM (Aldi Talk, Congstar, Telekom) for a local number — needed for many services.',
    color: '#A78BFA',
  },
]

export default function LifeInGermany() {
  return (
    <section id="life" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="chip chip-green inline-flex mb-5">Life in Germany</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            What it's actually like<br />
            <span className="text-gold-gradient">living in Germany</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.55)' }}>
            Pick the right city for your lifestyle and budget. Know what to do on Day 1.
            Everything you need to settle in smoothly.
          </p>
        </motion.div>

        {/* City comparison */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover-card cursor-default"
            >
              <div className="text-4xl mb-3">{city.emoji}</div>
              <h3 className="text-lg font-bold text-[#1A1A2E]">{city.name}</h3>
              <div className="text-xs mb-3" style={{ color: 'rgba(26,26,46,0.45)' }}>{city.state}</div>

              <div className="chip mb-4 inline-flex" style={{ background: `${city.costColor}12`, color: city.costColor, border: `1px solid ${city.costColor}25` }}>
                Cost: {city.costLevel}
              </div>

              <p className="text-xs mb-4 italic" style={{ color: 'rgba(26,26,46,0.55)' }}>{city.vibe}</p>

              <div className="mb-3">
                <div className="text-xs font-semibold mb-2" style={{ color: 'rgba(26,26,46,0.4)' }}>HIGHLIGHTS</div>
                {city.pros.map((p, j) => (
                  <div key={j} className="flex items-center gap-1.5 text-xs mb-1" style={{ color: 'rgba(26,26,46,0.65)' }}>
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#2D6A4F' }} />
                    {p}
                  </div>
                ))}
              </div>

              <div className="mb-4">
                {city.cons.map((c, j) => (
                  <div key={j} className="flex items-center gap-1.5 text-xs mb-1" style={{ color: 'rgba(26,26,46,0.45)' }}>
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#F472B6' }} />
                    {c}
                  </div>
                ))}
              </div>

              <div className="pt-3" style={{ borderTop: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-xs" style={{ color: 'rgba(26,26,46,0.4)' }}>Avg Rent (1BR): </span>
                <span className="text-xs font-bold" style={{ color: city.costColor }}>{city.avgRent}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practical tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Practical Guide for <span className="text-gold-gradient">Day 1 in Germany</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => {
            const Icon = tip.icon
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover-card cursor-default"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${tip.color}12`, border: `1px solid ${tip.color}25` }}>
                  <Icon size={18} color={tip.color} />
                </div>
                <h4 className="font-bold text-[#1A1A2E] mb-2">{tip.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.55)' }}>{tip.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Indian community note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-7 flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="text-5xl">🇮🇳</div>
          <div>
            <h4 className="font-bold text-[#1A1A2E] mb-2 text-lg">Strong Indian Community in Germany</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.6)' }}>
              With 40,000+ Indian students and 200,000+ Indian expats, Germany has vibrant Indian communities
              in every major city. Indian grocery stores (Kiran's, Namaste India, Apna Bazaar) are available
              in most cities. Indian student associations at nearly every university organize cultural events,
              Diwali celebrations, and mentor networks. Finding home-cooked food and familiar faces is easier
              than ever.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Link
            to="/life"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(30,58,95,0.25)' }}
          >
            Full Life Guide — Housing, Culture & More Cities <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
