import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Download, TrendingDown, CheckCircle, Clock, BarChart3 } from 'lucide-react'
import SectionHeader from './SectionHeader'

const beforeCategories = [
  { name: 'RU/KZ Consistency', before: 48, after: 79, color: '#2563EB' },
  { name: 'Groundedness', before: 55, after: 83, color: '#06B6D4' },
  { name: 'Prompt Injection', before: 62, after: 91, color: '#8B5CF6' },
  { name: 'Unsafe Advice', before: 71, after: 95, color: '#10B981' },
  { name: 'Kazakh Quality', before: 44, after: 76, color: '#F59E0B' },
]

function CompareBar({ before, after, color, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {/* Before */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 500, width: '44px', textAlign: 'right' }}>Before</span>
        <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: '#F1F5F9', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: inView ? `${before}%` : 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
            style={{ height: '100%', borderRadius: '4px', background: `${color}50` }}
          />
        </div>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', width: '32px' }}>{before}%</span>
      </div>
      {/* After */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '11px', color: '#0F172A', fontWeight: 600, width: '44px', textAlign: 'right' }}>After</span>
        <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: '#F1F5F9', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: inView ? `${after}%` : 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay + 0.15 }}
            style={{ height: '100%', borderRadius: '4px', background: color }}
          />
        </div>
        <span style={{ fontSize: '12px', fontWeight: 700, color, width: '32px' }}>{after}%</span>
      </div>
    </div>
  )
}

export default function ReportPreview() {
  return (
    <section id="report" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)', padding: '104px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          badge="Sample Report"
          title="What your readiness report looks like."
          subtitle="Every audit produces a structured technical report with findings, severity ratings, before/after comparison, and a fix plan."
        />

        <div className="grid lg:grid-cols-5" style={{ gap: '24px', alignItems: 'start' }}>
          {/* Report card — left */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'white',
              borderRadius: '26px',
              border: '1px solid rgba(15,23,42,0.07)',
              boxShadow: '0 28px 70px rgba(15,23,42,0.10)',
              overflow: 'hidden',
            }}
          >
            {/* Report header */}
            <div style={{
              background: 'radial-gradient(circle at 84% 0%, rgba(37,99,235,0.22), transparent 34%), linear-gradient(145deg, #07111F 0%, #0F172A 100%)',
              padding: '28px 32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <FileText size={18} color="#60A5FA" strokeWidth={2} />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#60A5FA', letterSpacing: '0.04em' }}>
                      AI BOT READINESS REPORT
                    </span>
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                    Demo EduBot
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
                    120 selected test cases · Russian + Kazakh · May 2026
                  </p>
                </div>
                <div style={{
                  padding: '6px 14px', borderRadius: '100px', flexShrink: 0,
                  background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)',
                }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981' }}>
                    Retest passed
                  </span>
                </div>
              </div>
            </div>

            {/* Before / After summary */}
            <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.07em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '16px' }}>
                Before → After retest comparison
              </p>
              <div className="grid grid-cols-2" style={{ gap: '12px', marginBottom: '20px' }}>
                {[
                  { label: 'Total failures', before: 18, after: 5, icon: TrendingDown, good: false },
                  { label: 'Critical failures', before: 4, after: 0, icon: CheckCircle, good: true },
                ].map(({ label, before, after, good }) => (
                  <div key={label} style={{ padding: '16px 20px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <p style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500, marginBottom: '8px' }}>{label}</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '24px', fontWeight: 800, color: '#94A3B8', textDecoration: 'line-through' }}>{before}</span>
                      <span style={{ fontSize: '14px', color: '#CBD5E1' }}>→</span>
                      <span style={{ fontSize: '28px', fontWeight: 800, color: good ? '#10B981' : '#EF4444' }}>{after}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '14px 18px', borderRadius: '10px',
                background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <CheckCircle size={16} color="#10B981" />
                <p style={{ fontSize: '13px', color: '#334155', fontWeight: 600 }}>
                  No critical failures detected after retest.{' '}
                  <span style={{ color: '#64748B', fontWeight: 400 }}>
                    5 medium-severity findings remain with documented fix recommendations.
                  </span>
                </p>
              </div>
            </div>

            {/* Category bars */}
            <div style={{ padding: '24px 32px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.07em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '20px' }}>
                Category scores after remediation
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {beforeCategories.map((cat, i) => (
                  <div key={cat.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>{cat.name}</span>
                    </div>
                    <CompareBar before={cat.before} after={cat.after} color={cat.color} delay={i * 0.1} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side info — right */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Report contents card */}
            <div style={{ padding: '24px', borderRadius: '20px', background: 'white', border: '1px solid rgba(15,23,42,0.065)', boxShadow: '0 18px 42px rgba(15,23,42,0.055)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <BarChart3 size={18} color="#2563EB" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Report includes</span>
              </div>
              {[
                'Per-test prompt, response, and finding',
                'Severity rating (Critical / High / Medium)',
                'Expected safe behavior description',
                'Concrete fix recommendations',
                'Fix plan prioritized by severity',
                'Before/after comparison after retest',
                'Executive summary for stakeholders',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '8px 0', borderBottom: i < 6 ? '1px solid rgba(15,23,42,0.05)' : 'none' }}>
                  <CheckCircle size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <span style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Timeline card */}
            <div style={{ padding: '24px', borderRadius: '20px', background: 'white', border: '1px solid rgba(15,23,42,0.065)', boxShadow: '0 18px 42px rgba(15,23,42,0.055)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Clock size={18} color="#06B6D4" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Typical timeline</span>
              </div>
              {[
                { label: 'Starter audit', time: '3–5 business days' },
                { label: 'Pro audit', time: '7–10 business days' },
                { label: 'Retest after fix', time: '2–3 business days' },
              ].map(({ label, time }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
                  <span style={{ fontSize: '13px', color: '#64748B' }}>{label}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{time}</span>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <button
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px 24px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #0B1220 0%, #172033 100%)',
                color: 'white', border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                boxShadow: '0 12px 28px rgba(15,23,42,0.18)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(15,23,42,0.24)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(15,23,42,0.18)' }}
              onClick={() => alert('Sample report PDF will be available here. Request a pilot audit to receive a real report for your bot.')}
            >
              <Download size={16} /> Download Sample Report
            </button>

            <p style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'center', lineHeight: 1.6 }}>
              Sample report uses synthetic data. Real report scope and depth depend on selected test pack.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
