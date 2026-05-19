import { motion } from 'framer-motion'
import { BookOpen, Scale, Info } from 'lucide-react'
import SectionHeader from './SectionHeader'

const methodologyLayers = [
  {
    layer: 'Rule-based checks',
    purpose: 'Detect structural and policy violations',
    example: 'Refusal to answer certain question types; required disclaimer presence',
    color: '#2563EB',
  },
  {
    layer: 'Expected behavior matching',
    purpose: 'Verify the response matches the defined correct behavior',
    example: 'Groundedness check against uploaded FAQ or policy document',
    color: '#06B6D4',
  },
  {
    layer: 'Bilingual semantic comparison',
    purpose: 'Identify meaning or fact differences across Russian and Kazakh',
    example: 'Same question in two languages yields conflicting numerical answers',
    color: '#8B5CF6',
  },
  {
    layer: 'Groundedness against documents',
    purpose: 'Evaluate answers against provided ground-truth knowledge base',
    example: 'Bot claims a processing time not found in official service document',
    color: '#10B981',
  },
  {
    layer: 'LLM-assisted review',
    purpose: 'Detect subtle safety issues and semantic edge cases',
    example: 'Identifying paraphrased unsafe financial advice that bypasses keyword filters',
    color: '#F59E0B',
  },
  {
    layer: 'Human review for critical findings',
    purpose: 'Expert verification of highest-severity findings before report delivery',
    example: 'Manual confirmation of a prompt injection that leaked system instructions',
    color: '#EF4444',
  },
]

const principles = [
  'We do not rely only on LLM-as-judge.',
  'Each finding includes prompt, model response, failure criteria, severity, expected safe behavior, and remediation.',
  'High-risk findings are subject to manual review before the report is finalized.',
  'Factuality is evaluated against provided ground-truth documents — not general internet truth.',
  'The audit does not guarantee complete safety. It reduces known launch risks under the tested scenarios.',
]

export default function Methodology() {
  return (
    <section id="methodology" style={{ background: '#0B1220', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          badge="Methodology"
          title="How we test — not just what we test."
          subtitle="A multi-layer evaluation approach. We do not grade AI agents with a single LLM judge. We combine rule-based checks, grounded evaluation, and mandatory human review for critical findings."
          light
        />

        <div className="grid lg:grid-cols-2" style={{ gap: '40px', alignItems: 'start' }}>
          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <BookOpen size={18} color="#06B6D4" />
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}>
                Testing principles
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  style={{
                    display: 'flex', gap: '14px', padding: '18px 0',
                    borderBottom: i < principles.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                    fontSize: '11px', fontWeight: 700, color: '#06B6D4',
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', flex: 1 }}>
                    {p}
                  </p>
                </motion.div>
              ))}
            </div>

            <div style={{
              marginTop: '28px', padding: '18px 20px', borderRadius: '12px',
              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
              display: 'flex', gap: '12px', alignItems: 'flex-start',
            }}>
              <Scale size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                Keryx AI provides technical readiness testing under selected scenarios and does not guarantee complete AI safety or regulatory compliance.
              </p>
            </div>
          </motion.div>

          {/* Layer table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Info size={18} color="#8B5CF6" />
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}>
                Evaluation layers
              </span>
            </div>

            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                padding: '12px 16px', background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                {['Layer', 'Purpose', 'Example'].map(h => (
                  <span key={h} style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {h}
                  </span>
                ))}
              </div>

              {methodologyLayers.map((row, i) => (
                <motion.div
                  key={row.layer}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '14px 16px',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                    borderBottom: i < methodologyLayers.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: row.color, marginTop: '6px', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{row.layer}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, paddingRight: '8px' }}>{row.purpose}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5, fontStyle: 'italic' }}>{row.example}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
