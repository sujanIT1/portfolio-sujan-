import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const groups = [
  { category: 'Languages', color: '#c4601a',
    skills: [{ name: 'JavaScript', level: 85 }, { name: 'Python', level: 70 }, { name: 'C / C++', level: 65 }] },
  { category: 'Frontend', color: '#c4601a',
    skills: [{ name: 'React.js', level: 88 }, { name: 'HTML & CSS', level: 92 }, { name: 'Tailwind CSS', level: 80 }] },
  { category: 'Backend & DB', color: '#8c7f6e',
    skills: [{ name: 'MongoDB', level: 65 }, { name: 'PostgreSQL', level: 60 }, { name: 'REST API', level: 75 }] },
  { category: 'Tools & Deploy', color: '#8c7f6e',
    skills: [{ name: 'Git & GitHub', level: 82 }, { name: 'Vercel / Netlify', level: 78 }, { name: 'VS Code', level: 95 }] },
]

const tags = ['React.js','JavaScript','HTML','CSS','Tailwind CSS','Python','C','C++','MongoDB','PostgreSQL','Git','GitHub','REST API','Vercel','Netlify','VS Code']

function Bar({ name, level, color, inView, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm text-earth">{name}</span>
        <span className="font-mono text-xs text-bark">{level}%</span>
      </div>
      <div className="h-px w-full bg-stone/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useReveal()
  return (
    <section id="skills" className="relative py-32 md:py-44 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="font-display font-black text-fluid-lg text-void">
            Technologies I<br /><span className="gradient-text">work with.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {groups.map((g, gi) => (
            <motion.div key={g.category}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: g.color }} />
                <span className="font-display font-bold text-xs text-void tracking-widest uppercase">{g.category}</span>
              </div>
              {g.skills.map((s, si) => (
                <Bar key={s.name} {...s} color={g.color} inView={inView} delay={0.3 + gi * 0.1 + si * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.span key={tag}
              initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.03 }}
              className="font-mono text-xs text-bark bg-sand border border-stone px-3 py-1.5 rounded-full
                hover:text-accent hover:border-accent/50 transition-all duration-200 cursor-default"
              data-hover
            >{tag}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
