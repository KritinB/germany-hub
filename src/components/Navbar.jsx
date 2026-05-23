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
  { label: 'Contact', href: '#contact' },
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
        background: '#111111',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: '#CC1416' }}>
            <span className="text-xs font-bold text-white">DE</span>
          </div>
          <span className="font-bold text-sm text-white" style={{ letterSpacing: '0.01em' }}>StudyDE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavLink(l.href)}
              className="px-4 py-2 text-sm rounded transition-all duration-150"
              style={{ color: 'rgba(255,255,255,0.65)', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 500 }}
              onMouseEnter={e => { e.target.style.color = '#FFFFFF'; e.target.style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.65)'; e.target.style.background = 'transparent' }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavLink('#scholarships')}
            className="btn-primary"
            style={{ fontSize: '13px', padding: '8px 20px', borderRadius: '6px' }}
          >
            Scholarships →
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 rounded"
          style={{ background: 'rgba(255,255,255,0.08)' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} color="#FFFFFF" /> : <Menu size={18} color="#FFFFFF" />}
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
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: '#111111' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  onClick={() => handleNavLink(l.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 px-3 text-sm font-medium rounded text-left"
                  style={{ color: 'rgba(255,255,255,0.7)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {l.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavLink('#scholarships')}
                className="mt-3 btn-primary text-center justify-center"
              >
                Scholarships →
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
