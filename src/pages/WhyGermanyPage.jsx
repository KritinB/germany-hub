import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Award, Globe2, BarChart2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import { reasons } from '../components/WhyGermany'

const stats = [
  { value: '40,000+', label: 'Indian students in Germany', sub: 'Growing 15% year-on-year' },
  { value: '1,500+', label: 'English-taught programs', sub: 'No German required for most STEM' },
  { value: '18 months', label: 'Post-study job seeker visa', sub: 'Best in Europe after graduation' },
  { value: '#3', label: 'Global economy', sub: 'By GDP — world-class job market' },
  { value: '~€0', label: 'Tuition at public universities', sub: 'Only €100–350 semester fee' },
  { value: '400+', label: 'Accredited universities', sub: 'Something for every field' },
]

const comparison = [
  { country: '🇩🇪 Germany', tuition: '~€0/year', postStudyVisa: '18 months', avgSalary: '€45,000–70,000', language: 'English programs available', rank: 'Top 5 globally (TUM, LMU)', overall: 'best' },
  { country: '🇬🇧 UK', tuition: '£15,000–35,000/year', postStudyVisa: '2 years', avgSalary: '£30,000–55,000', language: 'English', rank: 'Top 10 globally (Oxford, Imperial)', overall: 'good' },
  { country: '🇨🇦 Canada', tuition: 'CAD 20,000–40,000/year', postStudyVisa: '3 years (PGWP)', avgSalary: 'CAD 50,000–80,000', language: 'English/French', rank: 'Good, varies widely', overall: 'good' },
  { country: '🇺🇸 USA', tuition: '$25,000–60,000/year', postStudyVisa: '1–3 years (OPT/STEM OPT)', avgSalary: '$60,000–100,000', language: 'English', rank: 'Top in world (MIT, Stanford)', overall: 'expensive' },
]

const salaryData = [
  { field: 'Software Engineering', entry: '€45,000–60,000', mid: '€65,000–90,000', senior: '€90,000–130,000+' },
  { field: 'Mechanical Engineering', entry: '€40,000–55,000', mid: '€55,000–75,000', senior: '€75,000–100,000' },
  { field: 'Data Science / AI', entry: '€50,000–65,000', mid: '€70,000–95,000', senior: '€95,000–140,000+' },
  { field: 'Electrical Engineering', entry: '€40,000–55,000', mid: '€55,000–75,000', senior: '€75,000–105,000' },
  { field: 'Business / Management', entry: '€35,000–50,000', mid: '€50,000–70,000', senior: '€70,000–100,000' },
  { field: 'Medicine / Healthcare', entry: '€55,000–65,000', mid: '€65,000–90,000', senior: '€90,000–150,000+' },
]

const expandedReasons = {
  'free-education': {
    detail: 'Most German public universities charge only a small semester fee (€100–350) covering administrative costs, public transport in the region, and student union membership. This is applicable to ALL students — Indian, EU, and non-EU alike. The only exception is Baden-Württemberg which introduced a €1,500/semester fee for non-EU students. Compare this to UK (£15,000–35,000/year) or USA ($25,000–60,000/year).',
    stats: ['94% of German public universities charge no tuition', '~400 universities are free for international students', 'Saves ₹30–80 lakhs compared to US/UK alternatives'],
  },
  'world-class-universities': {
    detail: 'Germany has 9 universities in the QS World Top 200, led by TU Munich (#34 globally). The German research system (Helmholtz Centres, Max Planck Institute, Fraunhofer) regularly produces Nobel laureates. German engineering degrees are recognized worldwide — a degree from TUM or RWTH opens doors globally.',
    stats: ['9 German universities in QS World Top 200', '18 Nobel Prizes from German institutions since 2000', 'RWTH Aachen produces more engineers hired by DAX companies than any other university'],
  },
  'job-seeker-visa': {
    detail: 'After completing your degree, you automatically qualify for an 18-month Aufenthaltserlaubnis zur Arbeitssuche (Job Seeker Visa). This is one of Europe\'s most generous post-study work rights. You do not need a job offer to qualify — just your degree certificate. Many Indian students transition directly to Blaue Karte (EU Blue Card) with an employer offer.',
    stats: ['18 months to find employment after graduation', '76% of Indian STEM graduates find jobs in Germany within 12 months', 'EU Blue Card path to permanent residency after 33 months (or 21 months with B1 German)'],
  },
  'english-programs': {
    detail: 'Germany has over 1,500 fully English-taught programs, mostly at Master\'s and PhD level. The DAAD database lists all available programs with language requirements. You can complete an entire degree in English while living in Germany. However, learning basic German significantly improves daily life, job prospects, and social integration.',
    stats: ['1,500+ fully English-taught programs', '90% of STEM Master\'s programs at TUM are in English', 'German language knowledge increases salary by ~15% in Germany'],
  },
  'safe-country': {
    detail: 'Germany ranks 16th in the Global Peace Index. Healthcare is universal and mandatory for all students (~€120/month for TK/AOK). Strong rule of law means tenants, workers, and students have powerful legal protections. The crime rate is significantly lower than India\'s major cities for violent crime.',
    stats: ['#16 in Global Peace Index (2024)', '€120/month for full public health insurance', 'Criminal conviction rate for international students is extremely low'],
  },
  'mobility': {
    detail: 'The semester ticket (Semesterticket) is automatically included in your semester fee and covers unlimited public transit in the university region. Since 2023, the national €49/month Deutschlandticket allows unlimited train travel across Germany. With a German student visa (Schengen area residence), you can travel visa-free to 26 EU countries.',
    stats: ['Semester ticket covers regional transit for ~€0 extra', '26 Schengen countries accessible visa-free', 'Germany has 43,000+ km of railway network'],
  },
}

export default function WhyGermanyPage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <Link to="/#why" className="inline-flex items-center gap-2 mb-8 text-sm font-medium" style={{ color: 'rgba(245,245,248,0.5)' }}>
          <ArrowLeft size={15} /> Back to Guide
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12">
          <div className="chip chip-gold inline-flex mb-4">Why Germany — Deep Dive</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ letterSpacing: '-0.02em' }}>
            Why Germany is the<br />
            <span className="text-gold-gradient">Best Choice for Indians</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(245,245,248,0.55)' }}>
            Data-backed reasons, country comparisons, salary expectations, and in-depth analysis of why
            40,000+ Indian students choose Germany every year.
          </p>
        </motion.div>

        {/* Key stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-gold-gradient mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
              <div className="text-xs" style={{ color: 'rgba(245,245,248,0.4)' }}>{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Each reason expanded */}
        {reasons.map((r, i) => {
          const Icon = r.icon
          const extra = expandedReasons[r.id]
          return (
            <motion.div
              key={r.id}
              id={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-7 mb-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: r.bg, border: `1px solid ${r.color}25` }}>
                  <Icon size={20} color={r.color} />
                </div>
                <div>
                  <div className="chip inline-flex mb-2" style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25` }}>{r.tag}</div>
                  <h2 className="text-xl font-bold text-white">{r.title}</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,245,248,0.6)' }}>{extra?.detail || r.desc}</p>
              {extra?.stats && (
                <div className="flex flex-wrap gap-2">
                  {extra.stats.map((stat, j) => (
                    <div key={j} className="text-xs px-3 py-1.5 rounded-lg" style={{ background: `${r.color}08`, color: r.color, border: `1px solid ${r.color}15` }}>
                      {stat}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )
        })}

        {/* Country comparison */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe2 size={20} color="#C9A46D" /> Germany vs Other Study Destinations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ color: 'rgba(245,245,248,0.35)' }} className="text-xs uppercase tracking-wider">
                  <th className="text-left pb-4 pr-4">Country</th>
                  <th className="text-left pb-4 px-2">Tuition/Year</th>
                  <th className="text-left pb-4 px-2">Post-Study Visa</th>
                  <th className="text-left pb-4 px-2 hidden md:table-cell">Avg Salary</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="py-3 pr-4 font-semibold text-white">{c.country}</td>
                    <td className="py-3 px-2 text-xs font-mono" style={{ color: c.overall === 'best' ? '#34D399' : c.overall === 'expensive' ? '#F472B6' : 'rgba(245,245,248,0.55)' }}>{c.tuition}</td>
                    <td className="py-3 px-2 text-xs" style={{ color: 'rgba(245,245,248,0.55)' }}>{c.postStudyVisa}</td>
                    <td className="py-3 px-2 text-xs hidden md:table-cell" style={{ color: 'rgba(245,245,248,0.55)' }}>{c.avgSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Salary data */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <BarChart2 size={20} color="#C9A46D" /> Graduate Salaries in Germany (Gross)
          </h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(245,245,248,0.4)' }}>After tax (Netto), expect approximately 60–65% of these figures.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ color: 'rgba(245,245,248,0.35)' }} className="text-xs uppercase tracking-wider">
                  <th className="text-left pb-4 pr-4">Field</th>
                  <th className="text-center pb-4 px-2">Entry Level</th>
                  <th className="text-center pb-4 px-2">Mid Level</th>
                  <th className="text-center pb-4">Senior Level</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((s, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="py-3 pr-4 font-semibold text-white">{s.field}</td>
                    <td className="py-3 px-2 text-center text-xs font-mono" style={{ color: 'rgba(245,245,248,0.55)' }}>{s.entry}</td>
                    <td className="py-3 px-2 text-center text-xs font-mono" style={{ color: '#C9A46D' }}>{s.mid}</td>
                    <td className="py-3 text-center text-xs font-mono" style={{ color: '#34D399' }}>{s.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(201,164,109,0.08), rgba(91,140,255,0.05))', border: '1px solid rgba(201,164,109,0.15)' }}>
          <h3 className="text-xl font-bold text-white mb-2">Convinced? Start with the APS Certificate</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(245,245,248,0.5)' }}>It's the mandatory first step — start 3–4 months before your application deadline.</p>
          <Link to="/aps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: 'linear-gradient(135deg, #C9A46D, #A07840)', color: '#07070D' }}>
            APS Certificate Guide →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
