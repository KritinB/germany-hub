import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Landmark, Home, UtensilsCrossed, Bus, ShieldCheck, ShoppingBag, Briefcase, TrendingUp, PiggyBank, CreditCard, AlertTriangle } from 'lucide-react'
import Navbar from '../components/Navbar'
import { blockedBanks, costItems } from '../components/Finances'

const bankingTips = [
  {
    title: 'Open a German Bank Account Immediately',
    desc: 'You need a German account (Girokonto) to receive your blocked account releases. N26 and DKB offer free online accounts — open one within the first week of arrival.',
    color: '#0A0A0A',
  },
  {
    title: 'Understand the Blocked Account Rules',
    desc: 'You can only withdraw the monthly allowance (€992 in 2024). You cannot withdraw more even in emergencies. Plan your finances accordingly before you arrive.',
    color: '#0A0A0A',
  },
  {
    title: 'Get a German SIM for Banking',
    desc: 'Many German banking apps require a German phone number for 2FA. Buy a SIM (Aldi Talk, O2, Telekom) before setting up online banking.',
    color: '#444444',
  },
  {
    title: 'Track Your Tax Obligations',
    desc: 'If you earn above the basic tax allowance (~€11,604/year in 2024), you must file a tax return (Steuererklärung). ELSTER is the free official tax software.',
    color: '#A78BFA',
  },
]

const savingsTips = [
  'Use your student ID for discounts everywhere — museums, cinema, software, public transit',
  'Mensa (university canteen) meals cost €2–4 — eat there often to save €150+/month',
  'Buy groceries at discount supermarkets: Aldi, Lidl, Penny (30–40% cheaper than Rewe/Edeka)',
  'Your semester ticket usually covers all regional public transport — no need for Deutschlandticket',
  'Use student software licenses (Microsoft Office, Adobe CC, JetBrains are often free via university)',
  'Book trains via Sparpreis on DB — last-minute tickets are expensive, early booking saves 60%',
  'Student flea markets and Facebook Marketplace are great for cheap furniture and appliances',
  'Check if your university offers a free gym membership — most do through the Hochschulsport',
]

const taxInfo = [
  { label: 'Basic tax-free allowance', value: '€11,604/year (2024)', note: 'Earnings below this are tax-free' },
  { label: 'Student job tax class', value: 'Class I (single)', note: 'Default for most students' },
  { label: 'Mini-job (Minijob)', value: 'Up to €538/month', note: 'Tax and social security free' },
  { label: 'Werkstudent', value: '20 hrs/week during semester', note: 'Reduced social security contributions' },
  { label: 'Tax deadline', value: 'July 31 of following year', note: 'File via ELSTER or tax apps' },
  { label: 'Potential refund', value: '€200–600 typically', note: 'Most students get a refund when they file' },
]

const remittance = [
  { method: 'Wise (TransferWise)', rate: 'Mid-market rate', fee: '~0.5–1%', speed: '1–2 business days', recommended: true },
  { method: 'Western Union', rate: 'Below mid-market', fee: '1–3%', speed: 'Minutes to days', recommended: false },
  { method: 'Bank wire (SWIFT)', rate: 'Bank rate', fee: '€15–30 flat', speed: '2–5 business days', recommended: false },
  { method: 'RemitBee / InstaReM', rate: 'Near mid-market', fee: '~0.5%', speed: '1–3 business days', recommended: false },
]

export default function FinancesPage() {
  useEffect(() => { document.title = 'Finance Guide — Blocked Account, Budget & Banking | StudyDE' }, [])
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <Link to="/#finances" className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-all" style={{ color: 'rgba(0,0,0,0.45)' }}>
          <ArrowLeft size={15} /> Back to Guide
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-green inline-flex mb-4">Finances — Deep Dive</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Complete Finance Guide —<br />
            <span className="text-gold-gradient">Budget, Banking & Beyond</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>
            From setting up your blocked account to saving money every month, this guide covers everything
            you need to financially survive and thrive as an Indian student in Germany.
          </p>
        </motion.div>

        {/* Blocked Account */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-8 mb-8" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' }}>
              <Landmark size={18} color="#0A0A0A" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A1A2E]">Blocked Account (Sperrkonto)</h2>
              <p className="text-sm" style={{ color: 'rgba(0,0,0,0.38)' }}>Mandatory for student visa — proof of financial resources</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">€11,904</div>
              <div className="text-sm font-semibold text-[#1A1A2E] mb-1">Required per year</div>
              <div className="text-xs" style={{ color: 'rgba(0,0,0,0.38)' }}>Updated January 2024</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">€992</div>
              <div className="text-sm font-semibold text-[#1A1A2E] mb-1">Released per month</div>
              <div className="text-xs" style={{ color: 'rgba(0,0,0,0.38)' }}>You can only access ≤€992/month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gold-gradient mb-1">~₹10.8L</div>
              <div className="text-sm font-semibold text-[#1A1A2E] mb-1">In Indian Rupees</div>
              <div className="text-xs" style={{ color: 'rgba(0,0,0,0.38)' }}>At ~₹90/€ rate</div>
            </div>
          </div>

          <h3 className="font-bold text-[#1A1A2E] mb-4">Blocked Account Providers Compared</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {blockedBanks.map((b, i) => (
              <div key={b.name} className="rounded-xl p-4 relative" style={{ background: b.recommended ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0.02)', border: b.recommended ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.03)' }}>
                {b.recommended && <div className="chip chip-gold text-[10px] px-2 py-0.5 mb-2 inline-flex">Recommended</div>}
                <div className="font-bold text-[#1A1A2E] mb-1">{b.name}</div>
                <div className="text-xs font-mono mb-2" style={{ color: '#0A0A0A' }}>{b.fee}</div>
                <div className="text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>{b.feature}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.2)' }}>
            <div className="flex gap-3">
              <AlertTriangle size={16} color="#FB923C" className="flex-shrink-0 mt-0.5" />
              <p className="text-sm" style={{ color: 'rgba(0,0,0,0.65)' }}>
                <span className="font-bold text-[#1A1A2E]">Setup takes 1–3 weeks.</span> Open your blocked account before applying for a visa —
                the confirmation document is required for your visa appointment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Monthly costs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Monthly Living Costs by City</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(0,0,0,0.35)' }}>
                  <th className="text-left pb-4 pr-4">Expense</th>
                  <th className="text-center pb-4 px-4">Munich</th>
                  <th className="text-center pb-4 px-4">Berlin</th>
                  <th className="text-center pb-4">Small Cities</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <tr key={item.label} style={{ borderTop: '1px solid rgba(0,0,0,0.02)' }}>
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}12` }}>
                            <Icon size={14} color={item.color} />
                          </div>
                          <span className="text-sm font-medium text-[#1A1A2E]">{item.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-sm font-mono" style={{ color: 'rgba(0,0,0,0.6)' }}>{item.munich}</td>
                      <td className="py-3 px-4 text-center text-sm font-mono" style={{ color: 'rgba(0,0,0,0.6)' }}>{item.berlin}</td>
                      <td className="py-3 text-center text-sm font-mono" style={{ color: '#444444' }}>{item.small}</td>
                    </tr>
                  )
                })}
                <tr style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <td className="pt-4 pr-4"><span className="text-sm font-bold text-[#1A1A2E]">Total (estimated)</span></td>
                  <td className="pt-4 px-4 text-center text-sm font-bold" style={{ color: '#0A0A0A' }}>€1,120–1,780</td>
                  <td className="pt-4 px-4 text-center text-sm font-bold" style={{ color: '#0A0A0A' }}>€1,020–1,530</td>
                  <td className="pt-4 text-center text-sm font-bold" style={{ color: '#444444' }}>€630–1,010</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Banking tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Banking Setup Guide</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {bankingTips.map((tip, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: tip.color }} />
                <h3 className="font-bold text-[#1A1A2E] mb-2">{tip.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.5)' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tax info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">Tax Guide for Indian Students</h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>
            Most students working part-time should file a tax return — you'll almost always get a refund.
          </p>
          <div className="space-y-3">
            {taxInfo.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
                <div>
                  <div className="text-sm font-medium text-[#1A1A2E]">{t.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(0,0,0,0.38)' }}>{t.note}</div>
                </div>
                <div className="text-sm font-bold font-mono" style={{ color: '#0A0A0A' }}>{t.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Remittance */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Sending Money from India to Germany</h2>
          <div className="space-y-3">
            {remittance.map((r, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl" style={{ background: r.recommended ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0.02)', border: r.recommended ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.02)' }}>
                <div className="flex items-center gap-3">
                  {r.recommended && <div className="chip chip-gold text-[10px] px-2 py-0.5">Best</div>}
                  <span className="font-semibold text-white text-sm">{r.method}</span>
                </div>
                <div className="flex gap-6 text-xs" style={{ color: 'rgba(0,0,0,0.5)' }}>
                  <span><span className="text-white font-semibold">Rate:</span> {r.rate}</span>
                  <span><span className="text-white font-semibold">Fee:</span> {r.fee}</span>
                  <span className="hidden md:block"><span className="text-white font-semibold">Speed:</span> {r.speed}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Savings tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <PiggyBank size={20} color="#444444" /> Money-Saving Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {savingsTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#444444' }} />
                </div>
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Student work rights */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-[#1A1A2E] mb-6 flex items-center gap-2">
            <Briefcase size={18} color="#0A0A0A" /> Student Work Rights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                ['Max working days per year', '120 full days'],
                ['Alternative counting', '240 half days'],
                ['During semester (typical)', '~20 hrs/week'],
                ['During semester break', '40 hrs/week'],
                ['Minimum wage (2024)', '€12.82/hour'],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between items-center py-2.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
                  <span className="text-sm" style={{ color: 'rgba(0,0,0,0.45)' }}>{label}</span>
                  <span className="font-bold text-[#1A1A2E] text-sm">{value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-5" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid #E8E8E8' }}>
              <h4 className="font-bold text-[#1A1A2E] mb-3">Potential Part-Time Income</h4>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(0,0,0,0.55)' }}>
                <p>At minimum wage (€12.82/hr) for 20 hrs/week = <span className="font-bold text-[#1A1A2E]">~€1,024/month</span></p>
                <p>STEM Werkstudent role (€15–20/hr) = <span className="font-bold text-[#1A1A2E]">€1,200–1,600/month</span></p>
                <p>This can cover most of your living expenses in smaller cities.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.03), rgba(91,140,255,0.05))', border: '1px solid #E8E8E8' }}>
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Now explore Scholarships</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(0,0,0,0.45)' }}>Germany has generous scholarship programs — many don't require repayment. Start early.</p>
          <Link to="/scholarships" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
            Scholarship Guide →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
