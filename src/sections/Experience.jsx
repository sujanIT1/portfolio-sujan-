import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Users, Wrench } from 'lucide-react'

const experiences = [
  { icon: Users, role: 'President', org: 'ANNFSU — Student Union', period: 'Leadership Role', color: '#c4601a',
    points: ['Organized events with 50+ participants','Managed coordination and execution of student activities','Led the student union and represented student interests'] },
  { icon: Wrench, role: 'Hackathon Organizer', org: 'Technical Events', period: 'Event Management', color: '#8c7f6e',
    points: ['Managed technical events and logistics end-to-end','Coordinated participants, judges, and mentors','Ensured smooth execution of hackathon proceedings'] },
]

export default function Experience() {
  const { ref, inView } = useReveal()
  return (
    <section id="experience" className="relative py-32 md:py-44 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Experience</span>
          </div>
          <h2 className="font-display font-black text-fluid-lg text-void">
            Leadership &<br /><span className="gradient-text">community.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div key={exp.role}
              initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="card-border bg-panel rounded-2xl p-8 md:p-10 hover:bg-sand transition-all duration-300"
              data-hover
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: exp.color + '18' }}>
                    <exp.icon size={20} style={{ color: exp.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-void mb-0.5">{exp.role}</h3>
                    <p className="text-bark text-sm">{exp.org}</p>
                  </div>
                </div>
                <span className="font-mono text-xs px-3 py-1.5 rounded-full self-start"
                  style={{ color: exp.color, background: exp.color + '14', border: `1px solid ${exp.color}28` }}>
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.points.map((pt, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-bark text-sm">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: exp.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
