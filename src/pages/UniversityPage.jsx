import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Globe, Users, Star, ExternalLink, BookOpen, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { universities } from '../components/Universities'

const universityDetails = {
  'tum': {
    fullName: 'Technical University of Munich',
    founded: '1868',
    students: '50,000+',
    website: 'https://www.tum.de',
    description: 'TU Munich is Germany\'s #1 ranked university and one of Europe\'s leading technical universities. It consistently ranks in the QS World Top 50 and is part of the elite "Excellence Universities" group. TUM has strong industry connections with BMW, Siemens, MAN, and countless tech startups in Munich\'s thriving innovation ecosystem.',
    topPrograms: [
      { name: 'M.Sc. Informatics (Computer Science)', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Electrical Engineering', lang: 'English/German', duration: '2 years' },
      { name: 'M.Sc. Data Engineering & Analytics', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Mechanical Engineering', lang: 'English/German', duration: '2 years' },
      { name: 'M.Sc. Aerospace Engineering', lang: 'English/German', duration: '2 years' },
    ],
    admissionReqs: 'Highly competitive — top 15–20% CGPA from a recognized Indian university. For CS programs, competitive coding experience helps. No GRE required but strong math/CS background essential.',
    cityInfo: { city: 'Munich', avgRent: '€800–1,200/month', transport: 'Semester ticket covers Munich MVV network', indianCommunity: 'Large — ISA TUM, several Indian restaurants and stores' },
    applicationDeadline: 'January 31 (for October intake) — strict deadline',
    acceptanceRate: '~25% for international Master\'s applicants',
  },
  'lmu': {
    fullName: 'Ludwig Maximilian University of Munich',
    founded: '1472',
    students: '50,000+',
    website: 'https://www.lmu.de',
    description: 'LMU Munich is one of Germany\'s oldest and most prestigious research universities. It\'s particularly strong in medicine, natural sciences, and humanities. With 42 Nobel laureates affiliated with LMU, it has one of the strongest research traditions in Europe. Less technical than TUM but broader in academic scope.',
    topPrograms: [
      { name: 'M.Sc. Bioinformatics', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Physics (Theoretical & Experimental)', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Statistics & Data Science', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Neuroscience', lang: 'English', duration: '2 years' },
      { name: 'Medicine (State Exam)', lang: 'German', duration: '6 years' },
    ],
    admissionReqs: 'Strong academic record essential. For science programs, relevant undergraduate degree with minimum 70% (B+). German language required for most programs outside science.',
    cityInfo: { city: 'Munich', avgRent: '€800–1,200/month', transport: 'Semester ticket covers Munich MVV network', indianCommunity: 'Large — many Indian students, active cultural events' },
    applicationDeadline: 'June 30 (for October intake) — varies by program',
    acceptanceRate: '~30–40% for international Master\'s applicants',
  },
  'rwth': {
    fullName: 'RWTH Aachen University',
    founded: '1870',
    students: '45,000+',
    website: 'https://www.rwth-aachen.de',
    description: 'RWTH Aachen is often called the MIT of Germany. It\'s the largest technical university in Germany and is especially strong in engineering, computer science, and natural sciences. Located near the Belgian and Dutch borders, Aachen is a smaller, student-friendly city with lower living costs than Munich.',
    topPrograms: [
      { name: 'M.Sc. Computer Science', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Mechanical Engineering', lang: 'English/German', duration: '2 years' },
      { name: 'M.Sc. Electrical Engineering', lang: 'English/German', duration: '2 years' },
      { name: 'M.Sc. Automation Engineering', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Industrial Engineering', lang: 'German', duration: '2 years' },
    ],
    admissionReqs: 'Moderately competitive. CGPA of 7.0+/10 or 3.0/4.0 GPA. Technical programs require a relevant undergraduate engineering degree.',
    cityInfo: { city: 'Aachen', avgRent: '€400–700/month', transport: 'Semester ticket covers regional NRW network', indianCommunity: 'Medium — ISA RWTH, Indian restaurants in city center' },
    applicationDeadline: 'March 1 – July 15 (for October intake) — varies by program',
    acceptanceRate: '~35–45% for international Master\'s applicants',
  },
  'hu': {
    fullName: 'Heidelberg University',
    founded: '1386',
    students: '30,000+',
    website: 'https://www.uni-heidelberg.de',
    description: 'The oldest university in Germany, Heidelberg is renowned for research in life sciences, medicine, and natural sciences. It\'s a beautiful historic city and the university has a very international atmosphere. Heidelberg is smaller but has excellent research infrastructure including connections to the German Cancer Research Center (DKFZ).',
    topPrograms: [
      { name: 'M.Sc. Molecular Biosciences', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Physics', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Applied Computer Science', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Biochemistry', lang: 'German', duration: '2 years' },
      { name: 'Medicine (State Exam)', lang: 'German', duration: '6 years' },
    ],
    admissionReqs: 'Strong research background preferred. For life sciences, research experience or publications are a significant advantage. High CGPA (75%+) required.',
    cityInfo: { city: 'Heidelberg', avgRent: '€500–800/month', transport: 'Semester ticket covers Heidelberg/Mannheim region', indianCommunity: 'Small but active — international student community is dominant' },
    applicationDeadline: 'May 31 (for October intake)',
    acceptanceRate: '~40% for international Master\'s applicants',
  },
  'tu-berlin': {
    fullName: 'Technical University of Berlin',
    founded: '1879',
    students: '35,000+',
    website: 'https://www.tu.berlin',
    description: 'TU Berlin is located in the heart of Berlin, Germany\'s capital and startup hub. It has strong connections to Berlin\'s tech and startup ecosystem. TU Berlin is one of the most internationally diverse universities in Germany (30%+ international students) and offers many English-taught programs.',
    topPrograms: [
      { name: 'M.Sc. Computer Science (IT Systems Engineering)', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Electrical Engineering', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Industrial Engineering', lang: 'German', duration: '2 years' },
      { name: 'M.Sc. Architecture', lang: 'German', duration: '2 years' },
      { name: 'M.Sc. Business Administration', lang: 'English', duration: '1.5 years' },
    ],
    admissionReqs: 'Moderately competitive. CGPA 7.0+/10. Berlin campus is large and diverse — slightly more accessible than TUM/LMU for Indian applicants.',
    cityInfo: { city: 'Berlin', avgRent: '€700–1,100/month', transport: 'Semester ticket covers all Berlin BVG public transit', indianCommunity: 'Very large — 3,000+ Indian students in Berlin, many Indian restaurants and stores' },
    applicationDeadline: 'June 15 (for October intake) — varies by program',
    acceptanceRate: '~40–50% for international Master\'s applicants',
  },
  'kit': {
    fullName: 'Karlsruhe Institute of Technology',
    founded: '1825',
    students: '25,000+',
    website: 'https://www.kit.edu',
    description: 'KIT is a merger of Karlsruhe University and the Karlsruhe Research Centre, giving it a unique combination of top-tier academic teaching and cutting-edge research. It\'s particularly strong in engineering, physics, and computer science. Karlsruhe is a clean, beautiful city in Baden-Württemberg with a great quality of life.',
    topPrograms: [
      { name: 'M.Sc. Computer Science', lang: 'German/English', duration: '2 years' },
      { name: 'M.Sc. Electrical Engineering', lang: 'German', duration: '2 years' },
      { name: 'M.Sc. Physics', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Mechatronics and Information Technology', lang: 'German', duration: '2 years' },
      { name: 'M.Sc. Chemical Engineering', lang: 'German', duration: '2 years' },
    ],
    admissionReqs: 'Competitive. Many programs require German proficiency (B2–C1). CGPA 7.5+/10 recommended. Note: Baden-Württemberg charges €1,500/semester for non-EU students.',
    cityInfo: { city: 'Karlsruhe', avgRent: '€500–800/month', transport: 'Semester ticket covers Karlsruhe KVV network', indianCommunity: 'Small but active — ISKA student group' },
    applicationDeadline: 'May 15 – July 15 (for October intake)',
    acceptanceRate: '~35% for international Master\'s applicants',
  },
  'fu-berlin': {
    fullName: 'Free University of Berlin',
    founded: '1948',
    students: '35,000+',
    website: 'https://www.fu-berlin.de',
    description: 'FU Berlin is one of Germany\'s top research universities, founded in 1948 in West Berlin during the Cold War. It\'s particularly strong in social sciences, humanities, medicine, and natural sciences. FU Berlin has a very international campus and many English-taught programs, making it popular with Indian students in the humanities and social sciences.',
    topPrograms: [
      { name: 'M.Sc. Bioinformatics', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Computer Science', lang: 'German', duration: '2 years' },
      { name: 'M.A. Political Science', lang: 'English', duration: '2 years' },
      { name: 'Medicine (State Exam)', lang: 'German', duration: '6 years' },
      { name: 'M.A. South Asian Studies', lang: 'English', duration: '2 years' },
    ],
    admissionReqs: 'Varies significantly by program. Humanities and social sciences programs may require German proficiency. Science programs mostly accessible with English.',
    cityInfo: { city: 'Berlin', avgRent: '€700–1,100/month', transport: 'Semester ticket covers all Berlin BVG public transit', indianCommunity: 'Very large — Berlin has 3,000+ Indian students' },
    applicationDeadline: 'May 31 – June 30 (for October intake)',
    acceptanceRate: '~45–55% for international Master\'s applicants',
  },
  'tu-dresden': {
    fullName: 'Technical University of Dresden',
    founded: '1828',
    students: '32,000+',
    website: 'https://www.tu-dresden.de',
    description: 'TU Dresden is one of Germany\'s largest and oldest technical universities, located in the beautiful baroque city of Dresden, Saxony. It\'s significantly more affordable than Munich or Berlin, while maintaining high academic quality. Dresden is home to Globalfoundries, Infineon, and a growing semiconductor industry. An excellent choice for budget-conscious students.',
    topPrograms: [
      { name: 'M.Sc. Computer Science', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Electrical Engineering', lang: 'English/German', duration: '2 years' },
      { name: 'M.Sc. Mechanical Engineering', lang: 'German', duration: '2 years' },
      { name: 'M.Sc. Information Systems Engineering', lang: 'English', duration: '2 years' },
      { name: 'M.Sc. Nanoelectronic Systems', lang: 'English', duration: '2 years' },
    ],
    admissionReqs: 'Less competitive than TUM/RWTH. CGPA 6.5+/10 may suffice. Good option if you want quality education with easier admission.',
    cityInfo: { city: 'Dresden', avgRent: '€350–600/month', transport: 'Semester ticket covers Dresden DVB network', indianCommunity: 'Small but growing — ISA Dresden, a few Indian restaurants' },
    applicationDeadline: 'May 31 (for October intake)',
    acceptanceRate: '~55–65% for international Master\'s applicants',
  },
}

export default function UniversityPage() {
  const { abbr } = useParams()
  const uni = universities.find(u => u.abbr.toLowerCase().replace(/\s+/g, '-') === abbr)
  const details = universityDetails[abbr]

  if (!uni || !details) return <Navigate to="/" replace />

  return (
    <div style={{ background: '#07070D', minHeight: '100vh' }}>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <Link to="/#universities" className="inline-flex items-center gap-2 mb-8 text-sm font-medium" style={{ color: 'rgba(245,245,248,0.5)' }}>
          <ArrowLeft size={15} /> Back to Universities
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-10">
          <div className="flex items-start gap-5 mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ background: `${uni.color}15`, border: `1px solid ${uni.color}30`, color: uni.color }}>
              {uni.abbr}
            </div>
            <div>
              {uni.highlight && <div className="chip chip-gold text-[10px] px-2 py-0.5 mb-2 inline-flex"><Star size={8} fill="currentColor" /> Top Pick for Indians</div>}
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1">{details.fullName}</h1>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={13} color="rgba(245,245,248,0.4)" />
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.4)' }}>{uni.city}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: `${uni.color}12`, color: uni.color }}>{uni.rank}</div>
                <div className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(245,245,248,0.5)' }}>Founded {details.founded}</div>
                <div className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(245,245,248,0.5)' }}>{details.students} students</div>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(245,245,248,0.55)' }}>{details.description}</p>
        </motion.div>

        {/* Quick stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Int\'l Students', value: uni.intl, icon: Globe },
            { label: 'Programs', value: uni.programs, icon: BookOpen },
            { label: 'Acceptance Rate', value: details.acceptanceRate.split(' ')[0], icon: Users },
            { label: 'Specialty', value: uni.specialty.split(',')[0], icon: Star },
          ].map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <Icon size={16} color={uni.color} className="mx-auto mb-2" />
                <div className="text-xs mb-1" style={{ color: 'rgba(245,245,248,0.4)' }}>{s.label}</div>
                <div className="font-bold text-white text-sm">{s.value}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Top programs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold text-white mb-5">Top Programs for Indian Students</h2>
          <div className="space-y-3">
            {details.topPrograms.map((p, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="font-semibold text-white text-sm">{p.name}</span>
                <div className="flex gap-2 flex-shrink-0 ml-3">
                  <div className="text-xs px-2 py-0.5 rounded-md" style={{ background: p.lang === 'English' ? 'rgba(52,211,153,0.1)' : 'rgba(201,164,109,0.1)', color: p.lang === 'English' ? '#34D399' : '#C9A46D' }}>{p.lang}</div>
                  <div className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'rgba(91,140,255,0.1)', color: '#5B8CFF' }}>{p.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Admission & Application */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold text-white mb-5">Admission & Application</h2>
          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ background: 'rgba(201,164,109,0.06)', border: '1px solid rgba(201,164,109,0.15)' }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#C9A46D' }}>Requirements for Indian Students</div>
              <p className="text-sm" style={{ color: 'rgba(245,245,248,0.65)' }}>{details.admissionReqs}</p>
            </div>
            <div className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Application Deadline</span>
              <span className="font-bold text-white text-sm">{details.applicationDeadline}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>Acceptance Rate (Intl.)</span>
              <span className="font-bold text-white text-sm">{details.acceptanceRate}</span>
            </div>
          </div>
          <a href={details.website} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg" style={{ color: uni.color, background: `${uni.color}10`, border: `1px solid ${uni.color}20` }}>
            Official University Website <ExternalLink size={11} />
          </a>
        </motion.div>

        {/* City info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <MapPin size={18} color={uni.color} /> Life in {details.cityInfo.city}
          </h2>
          <div className="space-y-3">
            {[
              { label: 'Average Rent (1BR)', value: details.cityInfo.avgRent },
              { label: 'Public Transport', value: details.cityInfo.transport },
              { label: 'Indian Community', value: details.cityInfo.indianCommunity },
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-sm" style={{ color: 'rgba(245,245,248,0.5)' }}>{item.label}</span>
                <span className="text-sm font-semibold text-white text-right ml-4">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compare other universities */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-7 mb-10">
          <h2 className="text-xl font-bold text-white mb-5">Other Universities to Consider</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {universities.filter(u => u.abbr !== uni.abbr).slice(0, 4).map(u => (
              <Link key={u.abbr} to={`/universities/${u.abbr.toLowerCase().replace(/\s+/g, '-')}`} className="rounded-xl p-3 text-center hover-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="font-bold text-sm mb-1" style={{ color: u.color }}>{u.abbr}</div>
                <div className="text-xs" style={{ color: 'rgba(245,245,248,0.4)' }}>{u.city.split(',')[0]}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Next step */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(201,164,109,0.08), rgba(91,140,255,0.05))', border: '1px solid rgba(201,164,109,0.15)' }}>
          <h3 className="text-xl font-bold text-white mb-2">Ready to apply? Start with APS</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(245,245,248,0.5)' }}>All German universities require the APS certificate. Don't miss your deadline.</p>
          <Link to="/aps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: 'linear-gradient(135deg, #C9A46D, #A07840)', color: '#07070D' }}>
            APS Certificate Guide →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
