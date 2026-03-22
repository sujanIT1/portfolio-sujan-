import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Code2, Cpu, Globe, Zap } from 'lucide-react'

const cards = [
  { icon: Code2, label: 'Frontend Focus',  desc: 'React.js & modern JS ecosystem' },
  { icon: Globe,  label: 'Real Projects',  desc: 'Deployed apps with live users'   },
  { icon: Cpu,    label: 'CS Foundation',  desc: 'Computer Engineering, 7th Sem'   },
  { icon: Zap,    label: 'Fast Learner',   desc: 'Always exploring new tech'        },
]

export default function About() {
  const { ref, inView } = useReveal()

  return (
    <section id="about" className="relative py-32 md:py-44 bg-sand">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-16 md:gap-28 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent/60" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">About Me</span>
            </div>

            <h2 className="font-display font-black text-fluid-lg text-void mb-10 leading-tight">
              Hi, I'm Sujan Raskoti —<br />
              <span className="gradient-text">a developer who</span><br />
              builds things that matter.
            </h2>

            <div className="space-y-5 text-bark leading-relaxed">
              <p>
                I'm a Computer Engineering student at Purbanchal University (CITE College),
                currently in my 7th semester, with a deep passion for crafting user interfaces
                that are not just functional — but genuinely enjoyable to use.
              </p>
              <p>
                My journey into tech started with curiosity and grew into a commitment. I've
                spent the past few years learning, building, and shipping real projects — from
                an AI-assisted agriculture platform that helps farmers make smarter decisions,
                to a clean e-commerce experience for modern shoppers.
              </p>
              <p>
                I believe the best software solves real problems for real people. That belief
                drives every project I take on — whether it's writing clean React components,
                designing intuitive layouts, or figuring out why a bug only shows up on Tuesdays.
              </p>
              <p className="text-sm font-mono border-l-2 border-accent/50 pl-4 text-earth">
                Currently open to internships, freelance work, and exciting collaborations.
              </p>
            </div>
          </motion.div>

          {/* Right — cards */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {cards.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="card-border bg-cream rounded-2xl p-6 hover:bg-panel transition-all duration-300 group"
                data-hover
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-void text-sm mb-1">{item.label}</h3>
                <p className="font-mono text-xs text-bark">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
