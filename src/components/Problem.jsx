import { motion } from 'framer-motion'
import { MessageSquareX, FileX, ShieldOff, AlertCircle, ClipboardX } from 'lucide-react'
import SectionHeader from './SectionHeader'

const problems = [
  {
    icon: MessageSquareX,
    title: 'Semantic drift across languages',
    description: 'AI agents return different facts, different numerical values, or conflicting meaning for the same query in Russian vs Kazakh. Enterprise clients discover this.',
    color: '#F59E0B',
  },
  {
    icon: FileX,
    title: 'Hallucinations beyond approved documents',
    description: 'Agents confidently answer questions using information never present in the provided FAQ, policy, or knowledge base — and claim it as fact.',
    color: '#EF4444',
  },
  {
    icon: ShieldOff,
    title: 'Prompt injection vulnerabilities',
    description: 'Simple override prompts cause agents to expose system instructions, bypass content policies, or adopt unauthorized personas in production.',
    color: '#8B5CF6',
  },
  {
    icon: AlertCircle,
    title: 'Unsafe advice in sensitive domains',
    description: 'Agents dispense unqualified financial, legal, or health-adjacent guidance where disclaimers, referrals, or refusals are legally and ethically required.',
    color: '#06B6D4',
  },
  {
    icon: ClipboardX,
    title: 'No external readiness evidence',
    description: 'Agents ship without third-party test documentation. When enterprise clients ask for readiness evidence, teams have nothing to show.',
    color: '#10B981',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export default function Problem() {
  return (
    <section id="problem" style={{
      background: 'linear-gradient(180deg, #08111F 0%, #0B1220 52%, #0A1020 100%)',
      padding: '104px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        opacity: 0.18,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-260px', right: '-180px',
        width: '720px', height: '720px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          badge="The Problem"
          title="Enterprise clients care about failure modes."
          subtitle="Most AI bots are tested only for happy paths. Real deployment surfaces gaps that internal teams rarely anticipate."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '16px' }}>
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: '28px',
                borderRadius: '18px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.028))',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                cursor: 'default',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: `${p.color}18`,
                border: `1px solid ${p.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px',
              }}>
                <p.icon size={20} color={p.color} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.45)' }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
