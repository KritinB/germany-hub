import { motion } from 'framer-motion'
import { ExternalLink, Heart } from 'lucide-react'

const links = {
  'Official Resources': [
    { label: 'DAAD — Germany Scholarship Body', url: 'https://www.daad.in' },
    { label: 'APS India (Academic Verification)', url: 'https://www.aps-india.de' },
    { label: 'Make it in Germany (Official Portal)', url: 'https://www.make-it-in-germany.com' },
    { label: 'Uni-Assist (Centralized Applications)', url: 'https://www.uni-assist.de' },
    { label: 'Hochschulkompass (Uni Database)', url: 'https://www.hochschulkompass.de' },
  ],
  'Visa & Registration': [
    { label: 'German Embassy India (Visa Info)', url: 'https://india.diplo.de' },
    { label: 'VFS Global Germany Visa', url: 'https://www.vfsglobal.com' },
    { label: 'Fintiba Blocked Account', url: 'https://www.fintiba.com' },
    { label: 'Expatrio Blocked Account', url: 'https://www.expatrio.com' },
    { label: 'Anmeldung Guide (Registration)', url: 'https://www.iamexpat.de' },
  ],
  'Student Life': [
    { label: 'Techniker Krankenkasse (TK Insurance)', url: 'https://www.tk.de' },
    { label: 'Studentenwerk (Student Services)', url: 'https://www.studentenwerke.de' },
    { label: "Germany's Universities QS Rankings", url: 'https://www.topuniversities.com' },
    { label: 'WG-Gesucht (Student Housing)', url: 'https://www.wg-gesucht.de' },
    { label: 'Germany Job Market (Make-It-In-DE)', url: 'https://www.make-it-in-germany.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#0A0A0A' }}>

      {/* CTA banner */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-10 text-center mb-16"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span className="category-label" style={{ color: 'rgba(204,20,22,0.7)' }}>
            Your next chapter
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Ready to make Germany<br />
            your next chapter?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Start with the APS Certificate — it's the gateway to every German university.
            The earlier you apply, the better your chances.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#aps"
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: '#FFFFFF', color: '#0A0A0A' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Start APS Process →
            </a>
            <a
              href="https://www.daad.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            >
              Explore DAAD Scholarships <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          {Object.entries(links).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                {category}
              </h4>
              <div className="space-y-3">
                {items.map((item, j) => (
                  <a
                    key={j}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                  >
                    <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#CC1416' }}>
              <span className="text-xs font-bold text-white">DE</span>
            </div>
            <span className="font-bold text-sm text-white">StudyDE</span>
          </div>

          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Information is provided for guidance only. Always verify with official sources before making decisions.
          </p>

          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Made with <Heart size={11} fill="currentColor" /> for Indian students
          </div>
        </div>
      </div>
    </footer>
  )
}
