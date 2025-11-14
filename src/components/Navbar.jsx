import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-[color:var(--surface-900)/.6] border-b border-[color:var(--primary-700)/.25]' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="relative">
            <span className="inline-block w-8 h-8 rounded-md bg-[color:var(--primary-500)] shadow-[0_0_30px_rgba(56,189,248,0.6)]"></span>
            <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-[color:var(--accent-500)] animate-ping"></span>
          </div>
          <span className="font-display text-lg tracking-tight text-white">Nebula<span className="text-[color:var(--accent-400)]">Blue</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Product','Pricing','Customers','Docs'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[color:var(--text-300)] hover:text-white transition-colors">{item}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[color:var(--text-300)] hover:text-white">Sign in</a>
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-md bg-[color:var(--primary-600)] hover:bg-[color:var(--primary-500)] px-4 py-2 text-sm text-white transition-colors shadow-[0_0_24px_rgba(56,189,248,0.35)]">
            <Sparkles className="w-4 h-4 text-[color:var(--accent-400)]" />
            Start free
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-lg border border-[color:var(--primary-700)/.25] bg-[color:var(--surface-900)/.7] backdrop-blur-md p-4 flex flex-col gap-3">
            {['Product','Pricing','Customers','Docs'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[color:var(--text-200)] hover:text-white transition-colors">{item}</a>
            ))}
            <div className="h-px bg-[color:var(--primary-700)/.25] my-2" />
            <a href="#" className="text-sm text-[color:var(--text-300)]">Sign in</a>
            <a href="#pricing" className="mt-1 inline-flex justify-center rounded-md bg-[color:var(--primary-600)] hover:bg-[color:var(--primary-500)] px-4 py-2 text-sm text-white transition-colors">Start free</a>
          </div>
        </div>
      )}
    </header>
  )
}
