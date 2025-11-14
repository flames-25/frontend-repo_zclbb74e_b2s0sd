import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(147,197,253,0.15),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-28">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--primary-700)/.25] bg-[color:var(--surface-900)/.6] px-3 py-1 text-[11px] uppercase tracking-wider text-[color:var(--text-300)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-400)] animate-pulse" />
            Launching a new way to build SaaS
          </div>
          <h1 className="mt-6 font-display text-5xl/tight md:text-7xl/tight font-black text-white">
            Blue-hour software with a surreal twist
          </h1>
          <p className="mt-5 max-w-xl text-[color:var(--text-200)] text-lg">
            Craft and deploy modern products with cinematic motion, razor-fast performance, and a distinct cyber-blue identity.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-[color:var(--primary-500)] hover:bg-[color:var(--primary-400)] px-5 py-3 text-white font-semibold shadow-[0_0_40px_rgba(56,189,248,0.45)] transition">Start for free</a>
            <a href="#product" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 px-5 py-3 text-white font-semibold border border-white/20">See how it works</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--surface-950)]" />
    </section>
  )
}
