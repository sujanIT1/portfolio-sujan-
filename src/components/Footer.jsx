import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-stone/50 bg-sand py-10 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-lg text-void">SR</span>
          <span className="text-accent">.</span>
          <span className="text-bark text-sm font-mono ml-1">— Sujan Raskoti</span>
        </div>
        <p className="font-mono text-xs text-bark/50 text-center">
          Designed & Built by Sujan Raskoti © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/sujanIT1" target="_blank" rel="noopener noreferrer" data-hover
            className="text-bark hover:text-accent transition-colors duration-200"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/suzan-thakuri-98614933b/" target="_blank" rel="noopener noreferrer" data-hover
            className="text-bark hover:text-accent transition-colors duration-200"><Linkedin size={16} /></a>
          <a href="mailto:sujanraskoti2003@gmail.com" data-hover
            className="text-bark hover:text-accent transition-colors duration-200"><Mail size={16} /></a>
          <div className="w-px h-4 bg-stone/50" />
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-hover
            className="w-8 h-8 rounded-full border border-stone flex items-center justify-center text-bark
              hover:border-accent hover:text-accent transition-all duration-200">
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
