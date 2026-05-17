import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, DollarSign, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const scholarships = [
  {
    org: 'DAAD',
    name: 'DAAD Research Grants',
    amount: '€934/month + allowances',
    level: ['Master\'s', 'PhD', 'Postdoc'],
    deadline: 'October–November (for next year)',
    eligibility: 'Indian citizens with excellent academic record',
    color: '#1E3A5F',
    url: 'https://www.daad.in',
    highlight: true,
    desc: 'Germany\'s premier scholarship body. Multiple programs for Indian students at all levels. Includes health insurance, travel allowance, and language course support.',
  },
  {
    org: 'DAAD',
    name: 'Helmut Schmidt Program',
    amount: '€934/month',
    level: ['Master\'s'],
    deadline: 'October annually',
    eligibility: 'Students from developing countries, public policy/admin focus',
    color: '#1E3A5F',
    url: 'https://www.daad.de',
    highlight: false,
    desc: 'For future leaders from developing countries studying public policy, law, economics, or political science. Includes a study visit to Germany.',
  },
  {
    org: 'Deutschlandstipendium',
    name: 'Deutschlandstipendium',
    amount: '€300/month',
    level: ['Bachelor\'s', 'Master\'s'],
    deadline: 'Varies by university (typically April–June)',
    eligibility: 'Enrolled students at German universities, merit-based',
    color: '#1E3A5F',
    url: 'https://www.deutschlandstipendium.de',
    highlight: false,
    desc: 'National scholarship co-funded by federal government and private sponsors. Apply directly through your university once enrolled. Very competitive — ~2% of students receive it.',
  },
  {
    org: 'Friedrich Ebert Foundation',
    name: 'FES Scholarship',
    amount: '€850/month (Bafög rate)',
    level: ['Bachelor\'s', 'Master\'s', 'PhD'],
    deadline: 'January & July',
    eligibility: 'Social democratic values, civic engagement, excellent academics',
    color: '#F472B6',
    url: 'https://www.fes.de',
    highlight: false,
    desc: 'Political foundation scholarship for socially engaged students. Strong focus on social democracy and international understanding. Includes mentoring and events.',
  },
  {
    org: 'Heinrich Böll Foundation',
    name: 'Heinrich Böll Scholarship',
    amount: '€850/month + research allowance',
    level: ['Bachelor\'s', 'Master\'s', 'PhD'],
    deadline: 'March 1 & September 1',
    eligibility: 'Green/ecological values, social engagement, academic merit',
    color: '#2D6A4F',
    url: 'https://www.boell.de',
    highlight: false,
    desc: 'Green party-affiliated foundation. Supports students with strong environmental, feminist, or civic engagement. Open to international students.',
  },
  {
    org: 'Konrad Adenauer Foundation',
    name: 'KAS Scholarship',
    amount: '€850/month',
    level: ['Bachelor\'s', 'Master\'s', 'PhD'],
    deadline: 'January 15 & July 15',
    eligibility: 'Christian democratic values, excellent academics, civic commitment',
    color: '#A78BFA',
    url: 'https://www.kas.de',
    highlight: false,
    desc: 'Conservative-aligned foundation. Values academic excellence, Christian social thought, and civic engagement. Includes seminars and international alumni network.',
  },
]

export default function Scholarships() {
  return (
    <section id="scholarships" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="chip chip-gold inline-flex mb-5">Scholarships</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            Fund your degree —<br />
            <span className="text-gold-gradient">money is available</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.55)' }}>
            Germany has some of the most generous scholarships for Indian students.
            Most don't require repayment. Start early — these are competitive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scholarships.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col hover-card cursor-default"
              style={s.highlight ? { border: '1px solid rgba(30,58,95,0.2)' } : {}}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.color }}>
                    {s.org}
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] leading-tight">{s.name}</h3>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ml-2"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Amount highlight */}
              <div className="flex items-center gap-2 mb-4 py-2.5 px-3 rounded-xl" style={{ background: `${s.color}08`, border: `1px solid ${s.color}15` }}>
                <DollarSign size={14} color={s.color} />
                <span className="font-bold text-sm" style={{ color: s.color }}>{s.amount}</span>
              </div>

              <p className="text-sm mb-4 flex-1 leading-relaxed" style={{ color: 'rgba(26,26,46,0.55)' }}>{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.level.map((l, j) => (
                  <div key={j} className="chip text-[10px] px-2 py-0.5" style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}20` }}>
                    {l}
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-3" style={{ borderTop: '1px solid rgba(30,58,95,0.04)' }}>
                <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(26,26,46,0.5)' }}>
                  <Calendar size={11} className="mt-0.5 flex-shrink-0" style={{ color: s.color }} />
                  <span>Deadline: {s.deadline}</span>
                </div>
                <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(26,26,46,0.5)' }}>
                  <Users size={11} className="mt-0.5 flex-shrink-0" style={{ color: s.color }} />
                  <span>{s.eligibility}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6 flex gap-4"
        >
          <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(30,58,95,0.08)', border: '1px solid rgba(30,58,95,0.18)' }}>
            <Award size={18} color="#1E3A5F" />
          </div>
          <div>
            <h4 className="font-bold text-[#1A1A2E] mb-1">DAAD Scholarship Database</h4>
            <p className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>
              The DAAD maintains a comprehensive database of all scholarships available to Indian students studying in Germany.
              Visit <span style={{ color: '#1E3A5F' }}>daad.de/scholarships</span> to search by program level, field of study, and nationality.
              Also check your specific university's internal scholarship portal after enrollment.
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
            to="/scholarships"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(30,58,95,0.25)' }}
          >
            Full Scholarship Guide — Applications, SOPs & Deadlines <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
