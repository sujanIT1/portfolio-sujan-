import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#f5f0e8' }}>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(60,50,40,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(60,50,40,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Corner marks like vastspace */}
      <span className="absolute top-24 left-6 font-mono text-xs" style={{ color: '#d6cfc2' }}>+</span>
      <span className="absolute top-24 right-6 font-mono text-xs" style={{ color: '#d6cfc2' }}>+</span>
      <span className="absolute bottom-16 left-6 font-mono text-xs" style={{ color: '#d6cfc2' }}>+</span>
      <span className="absolute bottom-16 right-6 font-mono text-xs" style={{ color: '#d6cfc2' }}>+</span>

      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-28 pb-20 w-full">
        <motion.div variants={stagger} initial="initial" animate="animate">

          {/* Available badge */}
          <motion.div variants={fadeUp} className="mb-10">
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2"
              style={{ border: '1px solid #d6cfc2', background: 'rgba(237,231,217,0.6)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#8c7f6e' }}>
                Available for work
              </span>
            </div>
          </motion.div>

          {/* NAME — both lines visible */}
          <motion.div variants={fadeUp} className="mb-8">
            <h1 className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
              {/* Sujan — dark so always visible on cream bg */}
              <span style={{ color: '#1a1612', display: 'block' }}>Sujan</span>
              {/* Raskoti — orange gradient */}
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #c4601a, #e07840)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Raskoti</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUp} className="flex items-center gap-5 mb-8">
            <div className="h-px w-14" style={{ background: '#c4601a80' }} />
            <span className="font-mono text-sm tracking-[0.2em] uppercase" style={{ color: '#c4601a' }}>
              Frontend Developer
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="max-w-lg text-lg leading-relaxed mb-12 font-body"
            style={{ color: '#8c7f6e' }}>
            Building real-world web applications with modern technologies
            and solving practical problems through code.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              data-hover
              className="px-8 py-3.5 font-display font-semibold text-sm tracking-wide rounded-full transition-all duration-300"
              style={{ background: '#1a1612', color: '#f5f0e8' }}
              onMouseEnter={e => e.target.style.background = '#c4601a'}
              onMouseLeave={e => e.target.style.background = '#1a1612'}
            >
              View Projects
            </button>
            <a
              href="/sujan_raskoti_resume"
              download="Sujan_Raskoti_Resume.pdf"
              data-hover
              className="px-8 py-3.5 font-display font-semibold text-sm tracking-wide rounded-full transition-all duration-300"
              style={{ border: '1px solid #d6cfc2', color: '#3d3530' }}
              onMouseEnter={e => { e.target.style.borderColor = '#c4601a'; e.target.style.color = '#c4601a' }}
              onMouseLeave={e => { e.target.style.borderColor = '#d6cfc2'; e.target.style.color = '#3d3530' }}
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center gap-5">
            {[
              { href: 'https://github.com/sujanIT1', Icon: Github },
              { href: 'https://www.linkedin.com/in/suzan-thakuri-98614933b/', Icon: Linkedin },
              { href: 'mailto:sujanraskoti2003@gmail.com', Icon: Mail },
            ].map(({ href, Icon }) => (
              <a key={href} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-hover
                className="transition-colors duration-200"
                style={{ color: '#8c7f6e' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c4601a'}
                onMouseLeave={e => e.currentTarget.style.color = '#8c7f6e'}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side floating tech list */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-20 right-10 hidden md:flex flex-col items-end gap-2"
        >
          {['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js'].map((t, i) => (
            <motion.span key={t}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              className="font-mono text-xs tracking-widest"
              style={{ color: '#d6cfc2' }}>{t}</motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors"
        style={{ color: '#8c7f6e' }}
        data-hover
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
