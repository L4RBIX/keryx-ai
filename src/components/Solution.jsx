import { motion } from 'framer-motion'
import { Layers, FileSearch2, FlaskConical } from 'lucide-react'
import SectionHeader from './SectionHeader'

const pillars = [
  {
    icon: FlaskConical,
    title: 'External red-team style testing',
    description: 'Stress-tests AI agents against localized Kazakh/Russian failure modes that internal teams rarely anticipate — and that enterprise clients will discover.',
    color: '#2563EB',
  },
  {
    icon: FileSearch2,
    title: 'Evidence-based findings',
    description: 'Every finding includes the test prompt, the actual agent response, failure criteria, severity rating, expected safe behavior, and a concrete fix recommendation.',
    color: '#06B6D4',
  },
  {
    icon: Layers,
    title: 'Report, fix plan, retest',
    description: 'You receive a structured technical report shareable with clients, a severity-prioritized fix plan, and a retest to confirm improvements before launch.',
    color: '#10B981',
  },
]

export default function Solution() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)', padding: '104px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          badge="The Solution"
          title="An external readiness layer for AI agent teams."
          subtitle="We don't replace internal QA. We add a specialized external audit — grounded in Kazakh/Russian context — that your team cannot objectively run on itself."
        />

        <div className="grid md:grid-cols-3" style={{ gap: '20px' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              style={{
                padding: '32px',
                borderRadius: '20px',
                background: 'white',
                border: '1px solid rgba(15,23,42,0.065)',
                boxShadow: '0 8px 28px rgba(15,23,42,0.055)',
              }}
            >
              <div style={{
                width: '46px', height: '46px', borderRadius: '13px',
                background: `${p.color}0E`,
                border: `1px solid ${p.color}1C`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <p.icon size={21} color={p.color} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B' }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            marginTop: '36px', padding: '16px 24px',
            borderRadius: '12px',
            background: 'rgba(37,99,235,0.04)',
            border: '1px solid rgba(37,99,235,0.09)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6 }}>
            <strong style={{ color: '#334155', fontWeight: 700 }}>Scope note:</strong> Keryx does not certify absolute AI safety. We reduce known launch risks under the selected test scenarios and document every finding transparently.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
