import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Home, Search, AlertTriangle, Heart, Coffee, ShoppingBag } from 'lucide-react'
import Navbar from '../components/Navbar'
import { cities, tips } from '../components/LifeInGermany'

const moreCities = [
  {
    name: 'Stuttgart',
    state: 'Baden-Württemberg',
    emoji: '🚗',
    vibe: 'Automotive hub, Mercedes & Porsche HQ',
    costLevel: 'Medium-High',
    costColor: '#FB923C',
    pros: ['Mercedes-Benz, Porsche, Bosch HQ', 'Strong engineering job market', 'Beautiful surrounding vineyards', 'Excellent public transit'],
    cons: ['Non-EU tuition (€1,500/semester)', 'Expensive housing'],
    avgRent: '€650–1,000',
  },
  {
    name: 'Frankfurt',
    state: 'Hesse',
    emoji: '🏦',
    vibe: 'Finance capital of Europe',
    costLevel: 'High',
    costColor: '#F472B6',
    pros: ['European Central Bank, Deutsche Bank', 'Major international hub', 'Excellent airport connections'],
    cons: ['Very expensive', 'Less student-friendly vibe'],
    avgRent: '€800–1,300',
  },
  {
    name: 'Cologne (Köln)',
    state: 'NRW',
    emoji: '⛪',
    vibe: 'Media & creative industries',
    costLevel: 'Medium',
    costColor: '#1E3A5F',
    pros: ['Large, vibrant city', 'Strong media & creative sector', 'Famous Kölner Dom', 'Close to Belgium & Netherlands'],
    cons: ['Heavy traffic', 'High crime in some areas'],
    avgRent: '€600–950',
  },
  {
    name: 'Jena',
    state: 'Thuringia',
    emoji: '🔬',
    vibe: 'University town, optics & research',
    costLevel: 'Low',
    costColor: '#2D6A4F',
    pros: ['Very affordable', 'Friedrich Schiller University (top research)', 'Zeiss, Schott headquarters', 'Walkable city'],
    cons: ['Very small city', 'Limited Indian community'],
    avgRent: '€250–450',
  },
]

const housingTips = [
  {
    title: 'Start Your Housing Search Early',
    desc: 'German student housing is competitive. Begin your search 3–4 months before your semester start. Studentenwerk waitlists can take 2+ semesters.',
    icon: Search,
    color: '#1E3A5F',
  },
  {
    title: 'Studentenwohnheim (Student Dorm)',
    desc: 'Cheapest option (€150–350/month) run by Studentenwerk. Apply as early as possible — often waitlisted. Perfect for first semester.',
    icon: Home,
    color: '#1E3A5F',
  },
  {
    title: 'WG (Wohngemeinschaft / Flatshare)',
    desc: 'Most popular option. Cost: €300–700/room. Search on WG-Gesucht.de. Write a personal intro in German/English for better response rates.',
    icon: Heart,
    color: '#2D6A4F',
  },
  {
    title: 'Wohnungsgeberbestätigung',
    desc: 'Your landlord must give you this form to complete Anmeldung. Always confirm this before signing a lease — some landlords refuse it.',
    icon: AlertTriangle,
    color: '#FB923C',
  },
]

const culturalTips = [
  { emoji: '🤫', title: 'Germans Value Quiet Hours (Ruhezeit)', desc: 'No loud noise from 10pm–7am and during Sunday and 1–3pm. This is legally enforced in most buildings. Keep noise down during these hours.' },
  { emoji: '♻️', title: 'Strict Waste Sorting', desc: 'Paper (blue bin), plastics (yellow bin), bio-waste (brown bin), general waste (grey/black bin), glass (color-coded containers). Mixing bins is taken seriously.' },
  { emoji: '🛒', title: 'Sunday Everything is Closed', desc: 'Most shops (including supermarkets) are closed on Sundays. Gas stations and bakeries at stations may be open. Stock up on Saturday.' },
  { emoji: '🤝', title: 'Punctuality is Non-Negotiable', desc: 'Being late is considered disrespectful. For meetings, classes, and appointments, arrive on time or 5 minutes early. Call ahead if you\'ll be late.' },
  { emoji: '💳', title: 'Germany is Still Cash-Heavy', desc: 'Many restaurants, cafes, and markets only accept cash. Always carry €20–30 cash. This is slowly changing but not fast enough.' },
  { emoji: '🚲', title: 'Bikes are Serious Transport', desc: 'Cycling is major in German cities. Rent or buy a bike (€50–200 secondhand) — it\'s the fastest and cheapest way to get around campus.' },
]

const indianCommunity = [
  { city: 'Munich', stores: 'Kiran\'s Asia Markt, Shiv Shakti Markt', assoc: 'Indian Students Association TUM, Hindu Cultural Society Munich' },
  { city: 'Berlin', stores: 'Asian Food Store, Apna Bazaar', assoc: 'Indian Students Berlin, Deutsch-Indische Gesellschaft' },
  { city: 'Hamburg', stores: 'Indian Spice Store, Namaste India', assoc: 'Indian Association Hamburg' },
  { city: 'Stuttgart', stores: 'Bharat Bazaar, Asia Markt', assoc: 'Indian Students Stuttgart, TamInd Stuttgart' },
  { city: 'Frankfurt', stores: 'Indian Grocery Store, Patel Brothers', assoc: 'Indian Community Frankfurt' },
]

export default function LifePage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">

        <Link to="/#life" className="inline-flex items-center gap-2 mb-8 text-sm font-medium" style={{ color: 'rgba(26,26,46,0.55)' }}>
          <ArrowLeft size={15} /> Back to Guide
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-green inline-flex mb-4">Life in Germany — Deep Dive</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            Living in Germany —<br />
            <span className="text-gold-gradient">Everything You Need to Know</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(26,26,46,0.6)' }}>
            City comparisons, housing tips, cultural norms, Indian community resources, and a complete guide
            to settling into life in Germany as an Indian student.
          </p>
        </motion.div>

        {/* Major cities */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Major Cities Compared</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {cities.map((city, i) => (
              <div key={city.name} className="glass rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{city.emoji}</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-lg">{city.name}</h3>
                    <div className="text-xs" style={{ color: 'rgba(26,26,46,0.45)' }}>{city.state}</div>
                    <div className="chip mt-1 inline-flex text-[10px] px-2 py-0.5" style={{ background: `${city.costColor}12`, color: city.costColor, border: `1px solid ${city.costColor}25` }}>
                      Cost: {city.costLevel}
                    </div>
                  </div>
                </div>
                <p className="text-xs mb-4 italic" style={{ color: 'rgba(26,26,46,0.55)' }}>{city.vibe}</p>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-semibold mb-2" style={{ color: 'rgba(26,26,46,0.4)' }}>HIGHLIGHTS</div>
                    {city.pros.map((p, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs mb-1" style={{ color: 'rgba(26,26,46,0.65)' }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#2D6A4F' }} />{p}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-2" style={{ color: 'rgba(26,26,46,0.4)' }}>DOWNSIDES</div>
                    {city.cons.map((c, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs mb-1" style={{ color: 'rgba(26,26,46,0.45)' }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#F472B6' }} />{c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(30,58,95,0.04)' }}>
                  <span className="text-xs" style={{ color: 'rgba(26,26,46,0.4)' }}>Avg 1BR Rent: </span>
                  <span className="text-xs font-bold" style={{ color: city.costColor }}>{city.avgRent}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* More cities */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">More Cities Worth Considering</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {moreCities.map((city, i) => (
              <div key={city.name} className="glass rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{city.emoji}</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-lg">{city.name}</h3>
                    <div className="text-xs" style={{ color: 'rgba(26,26,46,0.45)' }}>{city.state}</div>
                    <div className="chip mt-1 inline-flex text-[10px] px-2 py-0.5" style={{ background: `${city.costColor}12`, color: city.costColor, border: `1px solid ${city.costColor}25` }}>
                      Cost: {city.costLevel}
                    </div>
                  </div>
                </div>
                <p className="text-xs mb-3 italic" style={{ color: 'rgba(26,26,46,0.55)' }}>{city.vibe}</p>
                <div className="space-y-1 mb-3">
                  {city.pros.slice(0, 3).map((p, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(26,26,46,0.65)' }}>
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#2D6A4F' }} />{p}
                    </div>
                  ))}
                </div>
                <div className="pt-2" style={{ borderTop: '1px solid rgba(30,58,95,0.04)' }}>
                  <span className="text-xs" style={{ color: 'rgba(26,26,46,0.4)' }}>Avg 1BR Rent: </span>
                  <span className="text-xs font-bold" style={{ color: city.costColor }}>{city.avgRent}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Housing guide */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Student Housing Guide</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {housingTips.map((tip, i) => {
              const Icon = tip.icon
              return (
                <div key={i} className="glass rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${tip.color}12`, border: `1px solid ${tip.color}25` }}>
                    <Icon size={18} color={tip.color} />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">{tip.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.6)' }}>{tip.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-4 glass rounded-2xl p-5">
            <h4 className="font-bold text-[#1A1A2E] mb-3">Best Housing Search Websites</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { site: 'WG-Gesucht.de', desc: 'Best for flatshares (WGs) — most popular among students' },
                { site: 'Studentenwerk.de', desc: 'Official student dorms — cheapest option, long waitlists' },
                { site: 'ImmobilienScout24.de', desc: 'Full apartments — more expensive, better for couples' },
              ].map((s, i) => (
                <div key={i} className="rounded-xl p-3" style={{ background: 'rgba(30,58,95,0.02)', border: '1px solid rgba(30,58,95,0.06)' }}>
                  <div className="font-semibold text-white text-sm mb-1">{s.site}</div>
                  <div className="text-xs" style={{ color: 'rgba(26,26,46,0.5)' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Day 1 tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Practical Day 1 Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, i) => {
              const Icon = tip.icon
              return (
                <div key={tip.title} className="glass rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${tip.color}12`, border: `1px solid ${tip.color}25` }}>
                    <Icon size={18} color={tip.color} />
                  </div>
                  <h4 className="font-bold text-[#1A1A2E] mb-2">{tip.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.55)' }}>{tip.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Cultural tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">German Culture — What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {culturalTips.map((tip, i) => (
              <div key={i} className="glass rounded-2xl p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{tip.emoji}</span>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] mb-1">{tip.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.6)' }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Indian community */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">🇮🇳</span>
            <div>
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-1">Indian Community by City</h2>
              <p className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>40,000+ Indian students and 200,000+ Indian expats make Germany very welcoming for Indians</p>
            </div>
          </div>
          <div className="space-y-3">
            {indianCommunity.map((item, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(30,58,95,0.02)', border: '1px solid rgba(30,58,95,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={12} color="#1E3A5F" />
                  <span className="font-semibold text-white text-sm">{item.city}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-2 text-xs" style={{ color: 'rgba(26,26,46,0.55)' }}>
                  <div><span className="text-white font-medium">Grocery stores: </span>{item.stores}</div>
                  <div><span className="text-white font-medium">Associations: </span>{item.assoc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(45,106,79,0.08), rgba(91,140,255,0.05))', border: '1px solid rgba(30,58,95,0.12)' }}>
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Now look at scholarships to fund your studies</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(26,26,46,0.55)' }}>DAAD and foundation scholarships can cover your living expenses entirely.</p>
          <Link to="/scholarships" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)', color: '#FFFFFF' }}>
            Scholarship Guide →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
