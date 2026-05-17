import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const links = [
  { label: 'Why Germany', href: '#why' },
  { label: 'Programs', href: '#programs' },
  { label: 'APS', href: '#aps' },
  { label: 'Universities', href: '#universities' },
  { label: 'Finances', href: '#finances' },
  { label: 'Visa', href: '#visa' },
  { label: 'Life in DE', href: '#life' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNavLink = (href) => {
    setOpen(false)
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + href)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #EEEEEE' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#0A0A0A' }}>
            <span className="text-xs font-bold text-white">DE</span>
          </div>
          <span className="font-bold text-sm tracking-tight" style={{ color: '#0A0A0A' }}>StudyDE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavLink(l.href)}
              className="px-4 py-2 text-sm rounded-lg transition-all duration-150"
              style={{ color: '#666666', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 500 }}
              onMouseEnter={e => { e.target.style.color = '#0A0A0A'; e.target.style.background = '#F5F5F5' }}
              onMouseLeave={e => { e.target.style.color = '#666666'; e.target.style.background = 'transparent' }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavLink('#scholarships')}
            className="btn-primary text-sm py-2.5 px-5"
            style={{ borderRadius: '100px', fontSize: '13px' }}
          >
            Scholarships →
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 rounded-lg"
          style={{ background: '#F5F5F5' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} color="#0A0A0A" /> : <Menu size={18} color="#0A0A0A" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ borderTop: '1px solid #EEEEEE', background: '#FFFFFF' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  onClick={() => handleNavLink(l.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 px-3 text-sm font-medium rounded-lg text-left"
                  style={{ color: '#444444', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
