import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { id:'about', label:'About' }, { id:'skills', label:'Skills' }, { id:'projects', label:'Projects' },
  { id:'experience', label:'Experience' }, { id:'education', label:'Education' }, { id:'contact', label:'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/90 backdrop-blur-xl border-b border-stone/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 h-16 md:h-20 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="font-display font-black text-xl text-void" data-hover>
            SR<span className="text-accent">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} data-hover
                className={`font-body text-sm tracking-wide transition-all duration-300 relative group ${
                  activeSection === link.id ? 'text-accent' : 'text-bark hover:text-void'
                }`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href="/resume.pdf" download="Sujan_Raskoti_Resume.pdf" data-hover
              className="px-5 py-2 text-sm font-display font-semibold text-void border border-stone rounded-full
                hover:bg-accent hover:text-cream hover:border-accent transition-all duration-300">
              Resume
            </a>
          </div>

          <button className="md:hidden text-earth p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden">
            {navLinks.map((link, i) => (
              <motion.button key={link.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }} onClick={() => scrollTo(link.id)}
                className="font-display text-3xl font-black text-void hover:text-accent transition-colors duration-200">
                {link.label}
              </motion.button>
            ))}
            <a href="/resume.pdf" download="Sujan_Raskoti_Resume.pdf"
              className="mt-4 px-8 py-3 bg-void text-cream font-display font-semibold rounded-full hover:bg-accent transition-colors duration-200">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
