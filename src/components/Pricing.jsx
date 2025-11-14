import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For prototypes and personal projects',
    features: ['1 project', '100K requests/mo', 'Community support']
  },
  {
    name: 'Growth',
    price: '$29',
    desc: 'For growing teams and early revenue',
    features: ['10 projects', '5M requests/mo', 'Email support']
  },
  {
    name: 'Scale',
    price: '$199',
    desc: 'For production at global scale',
    features: ['Unlimited projects', '50M requests/mo', 'SLA + SSO']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-0 opacity-50 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-display text-3xl md:text-5xl font-extrabold text-white text-center">
          Transparent pricing that scales with you
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`relative rounded-2xl border p-6 backdrop-blur-md ${i===1 ? 'border-[color:var(--primary-400)] bg-white/[.06] shadow-[0_0_50px_rgba(56,189,248,0.25)]' : 'border-white/10 bg-white/[.04]'}`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <p className="text-[color:var(--text-300)] text-sm">{t.desc}</p>
                </div>
                <div className="text-white font-display text-3xl">{t.price}<span className="text-sm text-[color:var(--text-400)]">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[color:var(--text-200)]">
                {t.features.map(f => (<li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-400)]" />{f}</li>))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-semibold transition ${i===1 ? 'bg-[color:var(--primary-500)] hover:bg-[color:var(--primary-400)] text-white' : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'}`}>Choose {t.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
