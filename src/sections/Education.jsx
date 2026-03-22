import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { GraduationCap, BookOpen } from 'lucide-react'

export default function Education() {
  const { ref, inView } = useReveal()
  return (
    <section id="education" className="relative py-32 md:py-44 bg-sand">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Education</span>
          </div>
          <h2 className="font-display font-black text-fluid-lg text-void">
            Academic<br /><span className="gradient-text">foundation.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }} className="max-w-3xl">
          <div className="card-border bg-panel rounded-2xl p-10 md:p-12 hover:bg-cream transition-all duration-300" data-hover>
            <div className="flex items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-void mb-1">Bachelor in Computer Engineering</h3>
                  <p className="text-bark text-sm">Purbanchal University</p>
                </div>
              </div>
              <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
                In Progress
              </span>
            </div>

            <div className="h-px bg-stone/50 mb-8" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {[['Institution','CITE College'],['University','Purbanchal University'],['Current Semester','7th Semester']].map(([label, value]) => (
                <div key={label}>
                  <p className="font-mono text-xs text-bark/60 mb-1 tracking-wide uppercase">{label}</p>
                  <p className="font-display font-bold text-void text-sm">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 bg-sand border border-stone/50 rounded-xl p-4">
              <BookOpen size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-bark text-sm leading-relaxed">
                Studying core CS fundamentals — algorithms, data structures, operating systems, and networks —
                while applying modern frontend development skills to real-world projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
