import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Loader2, AlertTriangle, ShieldCheck, ChevronRight, Terminal, BrainCircuit, FileCheck2, UserCheck } from 'lucide-react'
import { demoBots } from '../data/demoData'
import SectionHeader from './SectionHeader'

const botKeys = ['BankBot', 'EduBot', 'GovBot']

const severityConfig = {
  Critical: { color: '#EF4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.22)' },
  High:     { color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.22)' },
  Medium:   { color: '#06B6D4', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.22)'  },
}

function BarRow({ name, score, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const barColor = score >= 80 ? '#10B981' : score >= 65 ? '#F59E0B' : '#EF4444'
  return (
    <div ref={ref} style={{ marginBottom: '11px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '12px', fontWeight: 700, color: barColor }}>{score}%</span>
      </div>
      <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${score}%` : 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
          style={{ height: '100%', borderRadius: '2px', background: barColor }}
        />
      </div>
    </div>
  )
}

function ScoreRing({ score }) {
  const circumference = 2 * Math.PI * 36
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const offset = circumference - (score / 100) * circumference
  const color = score >= 80 ? '#10B981' : score >= 65 ? '#F59E0B' : '#EF4444'

  return (
    <div ref={ref} style={{ position: 'relative', width: '88px', height: '88px', flexShrink: 0 }}>
      <svg width="88" height="88" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="44" cy="44" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
        <motion.circle
          cx="44" cy="44" r="36" fill="none" stroke={color} strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? offset : circumference }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '20px', fontWeight: 800, color, lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.04em' }}>/100</span>
      </div>
    </div>
  )
}

export default function DemoSimulator() {
  const [selected, setSelected] = useState('BankBot')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  const bot = demoBots[selected]

  const runDemo = () => {
    setResults(null)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setResults(selected)
    }, 1800)
  }

  return (
    <section id="demo" className="keryx-section keryx-section-dark">
      <div className="keryx-grid-bg" />
      <div style={{
        position: 'absolute', top: '10%', right: '-60px', width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="keryx-container">
        <SectionHeader
          badge="Live Demo"
          title="Run a simulated readiness audit."
          subtitle="Select a demo agent, execute the test suite, and inspect findings in the same evidence format Keryx uses for readiness reports."
          light
        />

        {/* Bot selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {botKeys.map((key) => {
            const active = selected === key
            return (
              <motion.button
                key={key}
                onClick={() => { setSelected(key); setResults(null) }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  fontSize: '13px', fontWeight: 600,
                  cursor: 'pointer',
                  border: `1px solid ${active ? 'rgba(147,197,253,0.38)' : 'rgba(255,255,255,0.08)'}`,
                  background: active ? 'rgba(37,99,235,0.16)' : 'rgba(255,255,255,0.04)',
                  color: active ? '#BFDBFE' : 'rgba(229,237,247,0.55)',
                  transition: 'all 0.15s ease',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                    background: active ? '#93C5FD' : 'rgba(255,255,255,0.2)',
                  }}
                />
                {key}
                <span style={{ fontSize: '11px', opacity: 0.55, fontWeight: 400 }}>
                  {demoBots[key].domain}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Run button */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.button
            onClick={runDemo}
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-700 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.20)] ring-1 ring-blue-400/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.26)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex' }}>
                  <Loader2 size={17} />
                </motion.div>
                Running {bot.testsRun} tests…
              </>
            ) : (
              <>
                <Terminal size={16} />
                Run Readiness Test
              </>
            )}
          </motion.button>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)', marginTop: '10px', letterSpacing: '0.01em' }}>
            Simulated output · no real agent connected
          </p>
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {results && (
            <motion.div
              key={results}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ResultsPanel bot={demoBots[results]} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ResultsPanel({ bot }) {
  const scoreColor = bot.score >= 80 ? '#10B981' : bot.score >= 65 ? '#F59E0B' : '#EF4444'
  const scoreLabel = bot.score >= 80 ? 'Ready for review' : bot.score >= 65 ? 'Needs remediation before launch' : 'Not ready for enterprise'

  const panelStyle = {
    padding: '22px',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.065)',
  }

  return (
    <div className="keryx-shell overflow-hidden rounded-[26px]">
      <div className="flex flex-col gap-4 border-b border-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-200/70">
            <Terminal className="h-3.5 w-3.5" />
            Keryx simulated audit console
          </div>
          <h3 className="text-lg font-bold tracking-tight text-white">{bot.name} readiness run</h3>
          <p className="mt-1 text-sm text-slate-400">{bot.testsRun} selected tests · {bot.domain}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="keryx-chip" data-tone="info">
            <BrainCircuit className="h-3.5 w-3.5" />
            Semantic review
          </span>
          <span className="keryx-chip" data-tone="warning">
            <UserCheck className="h-3.5 w-3.5" />
            Human review queued
          </span>
          <span className="keryx-chip" data-tone="success">
            <FileCheck2 className="h-3.5 w-3.5" />
            PDF draft
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
      {/* Summary row */}
      <div className="grid md:grid-cols-3" style={{ gap: '12px', marginBottom: '20px' }}>
        {/* Score */}
        <div style={{ ...panelStyle, display: 'flex', alignItems: 'center', gap: '18px' }}>
          <ScoreRing score={bot.score} />
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '4px' }}>
              {bot.name} · {bot.testsRun} tests
            </p>
            <p style={{ fontSize: '14px', fontWeight: 700, color: scoreColor, lineHeight: 1.3 }}>{scoreLabel}</p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '3px' }}>{bot.domain}</p>
          </div>
        </div>

        {/* Severity breakdown */}
        <div style={panelStyle}>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '14px' }}>
            Findings breakdown
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { label: 'Critical', value: bot.critical, ...severityConfig.Critical },
              { label: 'High', value: bot.high, ...severityConfig.High },
              { label: 'Medium', value: bot.medium, color: '#94A3B8', bg: 'rgba(148,163,184,0.06)', border: 'rgba(148,163,184,0.14)' },
            ].map(({ label, value, color, bg, border }) => (
              <div key={label} style={{ flex: 1, padding: '10px', borderRadius: '9px', background: bg, border: `1px solid ${border}`, textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '3px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category scores */}
        <div style={panelStyle}>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Category scores
          </p>
          {bot.categories.map((cat, i) => (
            <BarRow key={cat.name} name={cat.name} score={cat.score} delay={i * 0.07} />
          ))}
        </div>
      </div>

      {/* Failed test cases */}
      <div style={{ marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <AlertTriangle size={14} color="#F59E0B" />
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
            Sample failed test cases
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {bot.failures.map((f, i) => {
            const sev = severityConfig[f.severity] || severityConfig.Medium
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                style={{
                  padding: '18px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.018)',
                  border: '1px solid rgba(255,255,255,0.055)',
                  borderLeft: `3px solid ${sev.color}`,
                }}
              >
                {/* Header chips */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>
                    {f.id}
                  </span>
                  <span style={{
                    padding: '2px 9px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em',
                    background: sev.bg, color: sev.color, border: `1px solid ${sev.border}`,
                  }}>
                    {f.severity.toUpperCase()}
                  </span>
                  <span style={{
                    padding: '2px 9px', borderRadius: '100px', fontSize: '10px', fontWeight: 600,
                    background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    {f.category}
                  </span>
                </div>

                {/* Prompt / Response */}
                <div className="grid md:grid-cols-2" style={{ gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '5px' }}>Test prompt</p>
                    <p style={{
                      fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55,
                      background: 'rgba(255,255,255,0.03)', padding: '9px 12px', borderRadius: '7px',
                      borderLeft: '2px solid rgba(37,99,235,0.35)', fontStyle: 'italic',
                    }}>
                      "{f.prompt}"
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '5px' }}>Agent response</p>
                    <p style={{
                      fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55,
                      background: 'rgba(255,255,255,0.03)', padding: '9px 12px', borderRadius: '7px',
                      borderLeft: `2px solid ${sev.color}55`, fontStyle: 'italic',
                    }}>
                      "{f.response}"
                    </p>
                  </div>
                </div>

                {/* Finding / Fix */}
                <div className="grid md:grid-cols-2" style={{ gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                    <AlertTriangle size={12} color={sev.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Finding: </strong>{f.finding}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                    <ChevronRight size={12} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Fix: </strong>{f.recommendation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          style={{ textAlign: 'center', marginTop: '32px' }}
        >
          <a
            href="#request-audit"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-950/50 px-6 py-3 text-sm font-semibold text-blue-300 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-900/50 hover:text-blue-200"
          >
            <ShieldCheck size={15} />
            Request a readiness audit for your agent
          </a>
        </motion.div>
      </div>
      </div>
    </div>
  )
}
