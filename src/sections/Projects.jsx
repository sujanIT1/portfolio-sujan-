import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { ExternalLink, ArrowRight, Star } from 'lucide-react'

const projects = [
  { id:1, featured:true,  index:'01', label:'Featured Project', name:'AgriSmart Hub',
    tagline:'Smart Agriculture Assistant',
    description:'A smart agriculture web application designed to assist farmers with crop suggestions and basic farming guidance. Combines modern UI with practical utility for real-world agricultural challenges.',
    tech:['React.js','JavaScript','CSS'], live:'https://agrismart-hub-1.vercel.app', accent:'#c4601a' },
  { id:2, featured:true,  index:'02', label:'Featured Project', name:'Clothify',
    tagline:'E-Commerce Platform',
    description:'A modern e-commerce clothing website with product browsing functionality. Features clean product listings, smooth navigation, and a polished shopping experience.',
    tech:['React.js','PostgreSQL'], live:'https://clothify-self.vercel.app', accent:'#c4601a' },
  { id:3, featured:false, index:'03', label:'Full-Stack Project', name:'Smart College LMS',
    tagline:'College Management System',
    description:'A full-stack college management system with role-based dashboards for admin, teachers, and students. Includes smart timetable, QR attendance tracking, and resource sharing.',
    tech:['React.js','Node.js','MongoDB','QR Code'], live:null, accent:'#8c7f6e' },
  { id:4, featured:false, index:'04', label:'Management System', name:'Meat Shop Manager',
    tagline:'Business Operations Tool',
    description:'A system designed to manage meat shop operations and workflow, streamlining day-to-day business processes with an intuitive management interface.',
    tech:['JavaScript','HTML','CSS'], live:null, accent:'#8c7f6e' },
]

function Card({ p, i, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-400 card-border bg-panel group"
      style={{ borderColor: hovered ? p.accent + '55' : undefined }}
      data-hover
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}88, transparent)`, opacity: hovered ? 1 : 0 }} />

      {p.featured && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-cream/80 border border-stone/60 rounded-full px-3 py-1">
          <Star size={9} className="text-accent fill-accent" />
          <span className="font-mono text-xs text-accent">Featured</span>
        </div>
      )}

      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-stone">{p.index}</span>
          <div className="h-px w-5 bg-stone/50" />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: p.accent + 'bb' }}>{p.label}</span>
        </div>

        <h3 className="font-display font-black text-2xl md:text-3xl text-void mb-1">{p.name}</h3>
        <p className="font-mono text-sm mb-5" style={{ color: p.accent }}>{p.tagline}</p>
        <p className="text-bark text-sm leading-relaxed mb-8">{p.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {p.tech.map(t => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-lg bg-sand border border-stone text-bark">{t}</span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {p.live ? (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-display font-semibold text-sm transition-all duration-200 hover:gap-3 group/l"
              style={{ color: p.accent }}>
              <ExternalLink size={13} /> Live Demo
              <ArrowRight size={12} className="group-hover/l:translate-x-1 transition-transform duration-200" />
            </a>
          ) : (
            <span className="font-mono text-xs text-stone italic">In development</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useReveal()
  return (
    <section id="projects" className="relative py-32 md:py-44 bg-sand">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display font-black text-fluid-lg text-void">
              Things I've<br /><span className="gradient-text">built.</span>
            </h2>
            <p className="text-bark text-sm font-mono max-w-xs">Real-world apps — deployed and running.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}
