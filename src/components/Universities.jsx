import { motion } from 'framer-motion'
import { Star, Users, Globe, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const universities = [
  {
    abbr: 'TUM',
    name: 'Technical University of Munich',
    city: 'Munich, Bavaria',
    rank: '#34 QS 2025',
    specialty: 'Engineering, CS, Natural Sciences',
    intl: '37%',
    programs: '600+',
    color: '#3B74C3',
    highlight: true,
    note: '#1 in Germany — highly competitive',
  },
  {
    abbr: 'LMU',
    name: 'Ludwig Maximilian University Munich',
    city: 'Munich, Bavaria',
    rank: '#59 QS 2025',
    specialty: 'Medicine, Natural Sciences, Humanities',
    intl: '22%',
    programs: '500+',
    color: '#7B5EA7',
    highlight: false,
    note: 'Strong in research & medicine',
  },
  {
    abbr: 'RWTH',
    name: 'RWTH Aachen University',
    city: 'Aachen, NRW',
    rank: '#100 QS 2025',
    specialty: 'Engineering, CS, Management',
    intl: '28%',
    programs: '400+',
    color: '#1A6B4A',
    highlight: false,
    note: "Europe's top tech university",
  },
  {
    abbr: 'HU',
    name: 'Heidelberg University',
    city: 'Heidelberg, Baden-Württemberg',
    rank: '#87 QS 2025',
    specialty: 'Medicine, Natural Sciences, Biosciences',
    intl: '20%',
    programs: '180+',
    color: '#C24A2A',
    highlight: false,
    note: "Germany's oldest, Nobel laureates",
  },
  {
    abbr: 'TU Berlin',
    name: 'Technical University of Berlin',
    city: 'Berlin',
    rank: '#154 QS 2025',
    specialty: 'Engineering, Architecture, CS',
    intl: '30%',
    programs: '350+',
    color: '#D44A1A',
    highlight: false,
    note: 'Strong industry connections',
  },
  {
    abbr: 'KIT',
    name: 'Karlsruhe Institute of Technology',
    city: 'Karlsruhe, Baden-Württemberg',
    rank: '#119 QS 2025',
    specialty: 'Engineering, Physics, CS',
    intl: '24%',
    programs: '200+',
    color: '#2E8B57',
    highlight: false,
    note: 'Elite technical university',
  },
  {
    abbr: 'FU Berlin',
    name: 'Free University of Berlin',
    city: 'Berlin',
    rank: '#118 QS 2025',
    specialty: 'Social Sciences, Humanities, Medicine',
    intl: '25%',
    programs: '300+',
    color: '#4A7C9E',
    highlight: false,
    note: 'International-friendly campus',
  },
  {
    abbr: 'TU Dresden',
    name: 'Technical University of Dresden',
    city: 'Dresden, Saxony',
    rank: '#298 QS 2025',
    specialty: 'Engineering, IT, Sciences',
    intl: '18%',
    programs: '180+',
    color: '#6B4C9E',
    highlight: false,
    note: 'Lower costs, high quality',
  },
]

export default function Universities() {
  return (
    <section id="universities" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="chip chip-blue inline-flex mb-5">Top Universities</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Where the best<br />
            <span className="text-gold-gradient">Indian students</span> go
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Germany's top universities for international students — ranked, profiled,
            and picked specifically for the Indian applicant.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {universities.map((u, i) => (
            <motion.div
              key={u.abbr}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 hover-card cursor-default relative overflow-hidden"
              style={u.highlight ? { border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 0 30px rgba(0,0,0,0.03)' } : {}}
            >
              {u.highlight && (
                <div className="absolute top-4 right-4">
                  <div className="chip chip-gold text-[10px] px-2 py-0.5">
                    <Star size={8} fill="currentColor" /> Top Pick
                  </div>
                </div>
              )}

              {/* Abbr badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 font-bold text-sm"
                style={{ background: `${u.color}15`, border: `1px solid ${u.color}30`, color: u.color }}
              >
                {u.abbr}
              </div>

              <h3 className="font-bold text-[#1A1A2E] text-sm mb-1 leading-tight">{u.name}</h3>

              <div className="flex items-center gap-1.5 mb-3">
                <MapPin size={11} color="rgba(0,0,0,0.35)" />
                <span className="text-xs" style={{ color: 'rgba(0,0,0,0.38)' }}>{u.city}</span>
              </div>

              <div
                className="text-xs font-bold mb-3 px-2.5 py-1 rounded-lg inline-block"
                style={{ background: `${u.color}12`, color: u.color }}
              >
                {u.rank}
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span style={{ color: 'rgba(0,0,0,0.38)' }}>
                    <Globe size={10} className="inline mr-1" />Int'l Students
                  </span>
                  <span className="font-semibold" style={{ color: '#444444' }}>{u.intl}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span style={{ color: 'rgba(0,0,0,0.38)' }}>
                    <Users size={10} className="inline mr-1" />Programs
                  </span>
                  <span className="font-semibold" style={{ color: '#444444' }}>{u.programs}</span>
                </div>
              </div>

              <div className="text-xs py-2 px-3 rounded-lg" style={{ background: 'rgba(0,0,0,0.02)', color: 'rgba(0,0,0,0.45)' }}>
                {u.specialty}
              </div>

              <div className="mt-3 text-xs mb-4" style={{ color: u.color }}>
                {u.note}
              </div>

              <Link
                to={`/universities/${u.abbr.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all"
                style={{ color: u.color }}
              >
                View Profile <ArrowRight size={11} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm mt-8"
          style={{ color: 'rgba(0,0,0,0.35)' }}
        >
          Also consider: University of Stuttgart, University of Cologne, University of Bonn, TU Darmstadt, University of Mannheim, and many more.
          Germany has 400+ accredited universities — use DAAD's university database to find the perfect fit for your field.
        </motion.p>
      </div>
    </section>
  )
}
