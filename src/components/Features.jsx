import { motion } from 'framer-motion'
import { Shield, Cpu, Zap, Gauge } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Zero-trust defaults, field-level encryption, and auditable access flows.'
  },
  {
    icon: Cpu,
    title: 'Edge-accelerated compute',
    desc: 'Workloads route to the closest region with sub-50ms latency worldwide.'
  },
  {
    icon: Zap,
    title: 'Instant DX',
    desc: 'Type-safe SDKs, one-command deploys, and ergonomic CLIs that disappear.'
  },
  {
    icon: Gauge,
    title: 'Observability at a glance',
    desc: 'Time-travel logs, flamegraphs, and SLO dashboards baked in.'
  }
]

export default function Features() {
  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-0 opacity-50 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl font-extrabold text-white text-center">
          Everything you need, tuned for velocity
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-xl border border-white/10 bg-white/[.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400/80 to-blue-600/80 flex items-center justify-center shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                <it.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-300)]">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
