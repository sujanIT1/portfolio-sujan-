import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Mail, Phone, Github, Linkedin, ArrowRight, Send, CheckCircle } from 'lucide-react'

const links = [
  { icon: Mail,     label: 'Email',    value: 'sujanraskoti2003@gmail.com', href: 'mailto:sujanraskoti2003@gmail.com' },
  { icon: Phone,    label: 'Phone',    value: '+977 9862353123',             href: 'tel:9862353123' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/sujanIT1',         href: 'https://github.com/sujanIT1' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Suzan Thakuri',               href: 'https://www.linkedin.com/in/suzan-thakuri-98614933b/' },
]

export default function Contact() {
  const { ref, inView } = useReveal()
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const s = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:sujanraskoti2003@gmail.com?subject=${s}&body=${b}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Contact</span>
            <div className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="font-display font-black text-fluid-lg text-void mb-4">
            Let's work<br /><span className="gradient-text">together.</span>
          </h2>
          <p className="text-bark max-w-md mx-auto">Open to internships, freelance projects, and full-time opportunities.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact links */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }} className="flex flex-col gap-4">
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-2xl card-border bg-panel hover:bg-sand transition-all duration-300 group"
                data-hover
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <l.icon size={17} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs text-bark/60 mb-0.5">{l.label}</p>
                  <p className="font-body text-sm text-earth group-hover:text-void truncate transition-colors">{l.value}</p>
                </div>
                <ArrowRight size={14} className="text-stone opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[['name','Name','Your name','text'],['email','Email','your@email.com','email']].map(([name, label, ph, type]) => (
                  <div key={name}>
                    <label className="font-mono text-xs text-bark/60 block mb-2 tracking-wide">{label}</label>
                    <input type={type} name={name} value={form[name]} required placeholder={ph}
                      onChange={e => setForm(f => ({...f, [e.target.name]: e.target.value}))}
                      className="w-full bg-panel border border-stone rounded-xl px-4 py-3 text-sm text-earth
                        placeholder:text-stone focus:outline-none focus:border-accent/60 transition-all duration-200" />
                  </div>
                ))}
              </div>
              <div>
                <label className="font-mono text-xs text-bark/60 block mb-2 tracking-wide">Message</label>
                <textarea name="message" value={form.message} required rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  onChange={e => setForm(f => ({...f, message: e.target.value}))}
                  className="w-full bg-panel border border-stone rounded-xl px-4 py-3 text-sm text-earth
                    placeholder:text-stone focus:outline-none focus:border-accent/60 transition-all duration-200 resize-none" />
              </div>
              <button type="submit" data-hover
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-display font-bold text-sm
                  text-cream bg-void hover:bg-accent transition-all duration-300">
                {sent ? <><CheckCircle size={16} /> Opening mail client...</> : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
