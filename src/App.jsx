import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyGermany from './components/WhyGermany'
import Programs from './components/Programs'
import APS from './components/APS'
import Universities from './components/Universities'
import Finances from './components/Finances'
import Scholarships from './components/Scholarships'
import Visa from './components/Visa'
import LifeInGermany from './components/LifeInGermany'
import Footer from './components/Footer'

import APSPage from './pages/APSPage'
import FinancesPage from './pages/FinancesPage'
import VisaPage from './pages/VisaPage'
import LifePage from './pages/LifePage'
import WhyGermanyPage from './pages/WhyGermanyPage'
import ProgramPage from './pages/ProgramPage'
import UniversityPage from './pages/UniversityPage'
import ScholarshipsPage from './pages/ScholarshipsPage'

function HomePage() {
  return (
    <div style={{ background: '#07070D', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <div className="divider" />
      <WhyGermany />
      <div className="divider" />
      <Programs />
      <div className="divider" />
      <APS />
      <div className="divider" />
      <Universities />
      <div className="divider" />
      <Finances />
      <div className="divider" />
      <Scholarships />
      <div className="divider" />
      <Visa />
      <div className="divider" />
      <LifeInGermany />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aps" element={<APSPage />} />
        <Route path="/finances" element={<FinancesPage />} />
        <Route path="/visa" element={<VisaPage />} />
        <Route path="/life" element={<LifePage />} />
        <Route path="/why-germany" element={<WhyGermanyPage />} />
        <Route path="/programs/:type" element={<ProgramPage />} />
        <Route path="/universities/:abbr" element={<UniversityPage />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
      </Routes>
      <Analytics />
    </>
  )
}
