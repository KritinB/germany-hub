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
  { icon: Home, label: 'Rent', munich: '€700–1,100', berlin: '€600–900', small: '€250–450', color: '#1E3A5F' },
  { icon: UtensilsCrossed, label: 'Food & Groceries', munich: '€200–350', berlin: '€200–320', small: '€180–280', color: '#1E3A5F' },
  { icon: Bus, label: 'Transport', munich: '€0 (semester)', berlin: '€0 (semester)', small: '€0 (semester)', color: '#2D6A4F' },
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5" style={{ letterSpacing: '-0.02em', color: '#1A1A2E' }}>
            Plan your money<br />
            <span className="text-gold-gradient">before you fly</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(26,26,46,0.55)' }}>
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
          style={{ border: '1px solid rgba(30,58,95,0.18)' }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(30,58,95,0.08)', border: '1px solid rgba(30,58,95,0.18)' }}>
              <Landmark size={18} color="#1E3A5F" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A1A2E]">Blocked Account (Sperrkonto)</h3>
              <p className="text-sm" style={{ color: 'rgba(26,26,46,0.45)' }}>Mandatory for student visa — proof of financial resources</p>
            </div>
          </div>

          <div className="divider my-6" />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">€11,904</div>
              <div className="text-sm font-semibold text-[#1A1A2E] mb-1">Required per year</div>
              <div className="text-xs" style={{ color: 'rgba(26,26,46,0.45)' }}>Updated January 2024</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">€992</div>
              <div className="text-sm font-semibold text-[#1A1A2E] mb-1">Released per month</div>
              <div className="text-xs" style={{ color: 'rgba(26,26,46,0.45)' }}>Access only ≤€992/month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">~₹10.8L</div>
              <div className="text-sm font-semibold text-[#1A1A2E] mb-1">Approximate INR value</div>
              <div className="text-xs" style={{ color: 'rgba(26,26,46,0.45)' }}>At ~₹90/€ rate</div>
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
                  background: b.recommended ? 'rgba(45,106,79,0.08)' : 'rgba(30,58,95,0.02)',
                  border: b.recommended ? '1px solid rgba(30,58,95,0.2)' : '1px solid rgba(30,58,95,0.06)',
                }}
              >
                {b.recommended && (
                  <div className="chip chip-gold text-[10px] px-2 py-0.5 mb-2 inline-flex">Recommended</div>
                )}
                <div className="font-bold text-[#1A1A2E] mb-1">{b.name}</div>
                <div className="text-xs font-mono mb-2" style={{ color: '#1E3A5F' }}>{b.fee}</div>
                <div className="text-xs" style={{ color: 'rgba(26,26,46,0.5)' }}>{b.feature}</div>
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
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">Monthly Cost of Living</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(26,26,46,0.4)' }}>
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
                      style={{ borderTop: '1px solid rgba(30,58,95,0.04)' }}
                    >
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}12` }}>
                            <Icon size={14} color={item.color} />
                          </div>
                          <span className="text-sm font-medium text-[#1A1A2E]">{item.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-sm font-mono" style={{ color: 'rgba(26,26,46,0.7)' }}>{item.munich}</td>
                      <td className="py-3 px-4 text-center text-sm font-mono" style={{ color: 'rgba(26,26,46,0.7)' }}>{item.berlin}</td>
                      <td className="py-3 text-center text-sm font-mono" style={{ color: '#2D6A4F' }}>{item.small}</td>
                    </motion.tr>
                  )
                })}
                <tr style={{ borderTop: '1px solid rgba(30,58,95,0.18)' }}>
                  <td className="pt-4 pr-4">
                    <span className="text-sm font-bold text-[#1A1A2E]">Total (estimated)</span>
                  </td>
                  <td className="pt-4 px-4 text-center text-sm font-bold" style={{ color: '#1E3A5F' }}>€1,120–1,780</td>
                  <td className="pt-4 px-4 text-center text-sm font-bold" style={{ color: '#1E3A5F' }}>€1,020–1,530</td>
                  <td className="pt-4 text-center text-sm font-bold" style={{ color: '#2D6A4F' }}>€630–1,010</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-4" style={{ color: 'rgba(26,26,46,0.35)' }}>
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
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(30,58,95,0.08)' }}>
                <Briefcase size={18} color="#1E3A5F" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E]">Student Work Rights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Max days per year</span>
                <span className="font-bold text-[#1A1A2E]">120 full days</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Half-day alternative</span>
                <span className="font-bold text-[#1A1A2E]">240 half days</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>During semester (typical)</span>
                <span className="font-bold text-[#1A1A2E]">~20 hrs/week</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>During semester break</span>
                <span className="font-bold text-[#1A1A2E]">40 hrs/week</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Minimum wage (2024)</span>
                <span className="font-bold" style={{ color: '#2D6A4F' }}>€12.82/hour</span>
              </div>
            </div>
            <div className="mt-4 text-xs p-3 rounded-xl" style={{ background: 'rgba(30,58,95,0.06)', color: 'rgba(26,26,46,0.6)', border: '1px solid rgba(30,58,95,0.12)' }}>
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
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(30,58,95,0.08)' }}>
                <TrendingUp size={18} color="#1E3A5F" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E]">Other Key Costs</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Semester fee (avg)</span>
                <span className="font-bold text-[#1A1A2E]">€100–350</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Health insurance</span>
                <span className="font-bold text-[#1A1A2E]">~€120/month</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Student visa (India)</span>
                <span className="font-bold text-[#1A1A2E]">~₹7,000</span>
              </div>
              <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(30,58,95,0.04)' }}>
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>APS certificate</span>
                <span className="font-bold text-[#1A1A2E]">~₹18,500</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm" style={{ color: 'rgba(26,26,46,0.55)' }}>Flight (India → DE)</span>
                <span className="font-bold text-[#1A1A2E]">₹25,000–55,000</span>
              </div>
            </div>
            <div className="mt-4 text-xs p-3 rounded-xl" style={{ background: 'rgba(45,106,79,0.08)', color: 'rgba(26,26,46,0.6)', border: '1px solid rgba(30,58,95,0.12)' }}>
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
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2E5082)', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(30,58,95,0.25)' }}
          >
            Full Finance Guide — Banking, Tax & Savings Tips <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
