import { motion } from 'framer-motion'
import { Landmark, ShieldCheck, UtensilsCrossed, Home, Bus, ShoppingBag, Briefcase, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const blockedBanks = [
  { name: 'Fintiba', fee: '€89 setup + €4.90/mo', feature: 'Most popular, fast setup', recommended: true },
  { name: 'Expatrio', fee: '€99 setup + €5.95/mo', feature: 'Bundle with insurance available', recommended: false },
  { name: 'Coracle', fee: '€89 setup + free/mo', feature: 'No monthly fee option', recommended: false },
  { name: 'Deutsche Bank', fee: '€0 setup', feature: 'Traditional bank, longer process', recommended: false },
]

export const costItems = [
  { icon: Home, label: 'Rent', munich: '€700–1,100', berlin: '€600–900', small: '€250–450', color: '#C9A46D' },
  { icon: UtensilsCrossed, label: 'Food & Groceries', munich: '€200–350', berlin: '€200–320', small: '€180–280', color: '#5B8CFF' },
  { icon: Bus, label: 'Transport', munich: '€0 (semester)', berlin: '€0 (semester)', small: '€0 (semester)', color: '#34D399' },
  { icon: ShieldCheck, label: 'Health Insurance', munich: '€120–130', berlin: '€120–130', small: '€120–130', color: '#F472B6' },
  { icon: ShoppingBag, label: 'Personal & Misc', munich: '€100–200', berlin: '€100–180', small: '€80–150', color: '#FB923C' },
]

export default function Finances() {
  return (
    <section id="finances" className="section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="chip chip-green inline-flex mb-5">Finances</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
            Plan your money<br />
            <span className="text-gold-gradient">before you fly</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(245,245,248,0.5)' }}>
            From the blocked account to monthly living costs — here's a clear financial picture
            for Indian students in Germany.
          </p>
        </motion.div>

        {/* Blocked Account section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-8"
          style={{ border: '1px solid rgba(201,164,109,0.2)' }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(201,164,109,0.1)', border: '1px solid rgba(201,164,109,0.2)' }}>
              <Landmark size={18} color="#C9A46D" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Blocked Account (Sperrkonto)</h3>
              <p className="text-sm" style={{ color: 'rgba(245,245,248,0.4)' }}>Mandatory for student visa — proof of financial resources</p>
            </div>
          </div>

          <div className="divider my-6" />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">€11,904</div>
              <div className="text-sm font-semibold text-white mb-1">Required per year</div>
              <div className="text-xs" style={{ color: 'rgba(245,245,248,0.4)' }}>Updated January 2024</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">€992</div>
              <div className="text-sm font-semibold text-white mb-1">Released per month</div>
              <div className="text-xs" style={{ color: 'rgba(245,245,248,0.4)' }}>Access only ≤€992/month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">~₹10.8L</div>
              <div className="text-sm font-semibold text-white mb-1">Approximate INR value</div>
              <div className="text-xs" style={{ color: 'rgba(245,245,248,0.4)' }}>At ~₹90/€ rate</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {blockedBanks.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl p-4 relative"
                style={{
                  background: b.recommended ? 'rgba(201,164,109,0.08)' : 'rgba(255,255,255,0.03)',
                  border: b.recommended ? '1px solid rgba(201,164,109,0.25)' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {b.recommended && (
                  <div className="chip chip-gold text-[10px] px-2 py-0.5 mb-2 inline-flex">Recommended</div>
                )}
                <div className="font-bold text-white mb-1">{b.name}</div>
                <div className="text-xs font-mono mb-2" style={{ color: '#C9A46D' }}>{b.fee}</div>
                <div className="text-xs" style={{ color: 'rgba(245,245,248,0.45)' }}>{b.feature}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost of living table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Monthly Cost of Living</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(245,245,248,0.35)' }}>
                  <th className="text-left pb-4 pr-4">Expense</th>
                  <th className="text-center pb-4 px-4">Munich</th>
                  <th className="text-center pb-4 px-4">Berlin</th>
                  <th className="text-center pb-4">Small Cities</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.tr
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}12` }}>
                            <Icon size={14} color={item.color} />
                          </div>
                          <span className="text-sm font-medium text-white">{item.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-sm font-mono" style={{ color: 'rgba(245,245,248,0.65)' }}>{item.munich}</td>
                      <td className="py-3 px-4 text-center text-sm font-mono" style={{ color: 'rgba(245,245,248,0.65)' }}>{item.berlin}</td>
                      <td className="py-3 text-center text-sm font-mono" style={{ color: '#34D399' }}>{item.small}</td>
                    </motion.tr>
                  )
                })}
                <tr style={{ borderTop: '1px solid rgba(201,164,109,0.2)' }}>
                  <td className="pt-4 pr-4">
                    <span className="text-sm font-bold text-white">Total (estimated)</span>
                  </td>
                  <td className="pt-4 px-4 text-center text-sm font-bold" style={{ color: '#C9A46D' }}>€1,120–1,780</td>
                  <td className="pt-4 px-4 text-center text-sm font-bold" style={{ color: '#C9A46D' }}>€1,020–1,530</td>
                  <td className="pt-4 text-center text-sm font-bold" style={{ color: '#34D399' }}>€630–1,010</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-4" style={{ color: 'rgba(245,245,248,0.3)' }}>
            * Small cities include Dresden, Chemnitz, Magdeburg, Jena, Kaiserslautern — excellent quality with significantly lower costs.
            Transport shown as €0 because semester tickets typically cover regional public transport.
          </p>
        </motion.div>

        {/* Student work + semester fee row */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(91,140,255,0.1)' }}>
                <Briefcase size={18} color="#5B8CFF" />
              </div>
              <h3 className="text-lg font-bold text-white">Student Work Rights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Max days per year</span>
                <span className="font-bold text-white">120 full days</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Half-day alternative</span>
                <span className="font-bold text-white">240 half days</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>During semester (typical)</span>
                <span className="font-bold text-white">~20 hrs/week</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>During semester break</span>
                <span className="font-bold text-white">40 hrs/week</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Minimum wage (2024)</span>
                <span className="font-bold" style={{ color: '#34D399' }}>€12.82/hour</span>
              </div>
            </div>
            <div className="mt-4 text-xs p-3 rounded-xl" style={{ background: 'rgba(91,140,255,0.08)', color: 'rgba(245,245,248,0.55)', border: '1px solid rgba(91,140,255,0.15)' }}>
              Working 20 hrs/week at minimum wage = ~€1,000/month. Most students in STEM find part-time roles paying €12–20/hour.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(201,164,109,0.1)' }}>
                <TrendingUp size={18} color="#C9A46D" />
              </div>
              <h3 className="text-lg font-bold text-white">Other Key Costs</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Semester fee (avg)</span>
                <span className="font-bold text-white">€100–350</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Health insurance</span>
                <span className="font-bold text-white">~€120/month</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Student visa (India)</span>
                <span className="font-bold text-white">~₹7,000</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>APS certificate</span>
                <span className="font-bold text-white">~₹18,500</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Flight (India → DE)</span>
                <span className="font-bold text-white">₹25,000–55,000</span>
              </div>
            </div>
            <div className="mt-4 text-xs p-3 rounded-xl" style={{ background: 'rgba(201,164,109,0.08)', color: 'rgba(245,245,248,0.55)', border: '1px solid rgba(201,164,109,0.15)' }}>
              Baden-Württemberg charges non-EU students €1,500/semester tuition. All other states: generally free at public universities.
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            to="/finances"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #C9A46D, #A07840)', color: '#07070D', boxShadow: '0 0 30px rgba(201,164,109,0.3)' }}
          >
            Full Finance Guide — Banking, Tax & Savings Tips <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
