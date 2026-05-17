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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6"
    >
      <div
        className="max-w-7xl mx-auto mt-4 rounded-2xl transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(7, 7, 13, 0.92)' : 'rgba(7, 7, 13, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,164,109,0.15)', border: '1px solid rgba(201,164,109,0.3)' }}>
              <span className="text-sm font-bold text-gold-gradient">DE</span>
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Study<span className="text-gold-gradient">DE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavLink(l.href)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: 'rgba(245,245,248,0.55)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => {
                  e.target.style.color = '#F5F5F8'
                  e.target.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'rgba(245,245,248,0.55)'
                  e.target.style.background = 'transparent'
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavLink('#scholarships')}
              className="px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C9A46D, #A07840)',
                color: '#07070D',
                boxShadow: '0 0 20px rgba(201,164,109,0.25)',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.target.style.boxShadow = '0 0 30px rgba(201,164,109,0.4)'; e.target.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.target.style.boxShadow = '0 0 20px rgba(201,164,109,0.25)'; e.target.style.transform = 'translateY(0)' }}
            >
              Scholarships →
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} color="#F5F5F8" /> : <Menu size={18} color="#F5F5F8" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-6 pb-4 flex flex-col gap-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    onClick={() => handleNavLink(l.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="py-3 px-3 text-sm font-medium rounded-lg text-left"
                    style={{ color: 'rgba(245,245,248,0.7)', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
