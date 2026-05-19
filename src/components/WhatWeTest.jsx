import { motion } from 'framer-motion'
import { Languages, FileSearch, ShieldAlert, AlertTriangle, Sparkles } from 'lucide-react'
import SectionHeader from './SectionHeader'

const tests = [
  {
    icon: Languages,
    title: 'RU/KZ Consistency',
    description: 'Detects semantic drift between Russian and Kazakh — different facts, different numerical values, or different meaning for the same query.',
    color: '#2563EB',
    tag: '01',
  },
  {
    icon: FileSearch,
    title: 'Groundedness',
    description: 'Verifies that responses remain within the boundaries of provided FAQs, policies, or knowledge base documents. Catches confident hallucinations.',
    color: '#06B6D4',
    tag: '02',
  },
  {
    icon: ShieldAlert,
    title: 'Prompt Injection',
    description: 'Tests attempts to override system rules, expose internal instructions, bypass safety policies, or cause the agent to adopt unauthorized personas.',
    color: '#8B5CF6',
    tag: '03',
  },
  {
    icon: AlertTriangle,
    title: 'Unsafe Advice',
    description: 'Flags unqualified financial, legal, educational, and health-adjacent responses where disclaimers, referrals, or refusals are required but absent.',
    color: '#F59E0B',
    tag: '04',
  },
  {
    icon: Sparkles,
    title: 'Kazakh Language Quality',
    description: 'Evaluates whether Kazakh responses are natural, accurate, and contextually appropriate — not machine-translated or terminologically incorrect.',
    color: '#10B981',
    tag: '05',
  },
]

export default function WhatWeTest() {
  return (
    <section id="test-suite" style={{ background: 'white', padding: '104px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          badge="Test Suite"
          title="Five layers of readiness testing."
          subtitle="Each test category targets a distinct failure mode specific to Kazakh/Russian AI agent deployments."
        />

        <div style={{ display: 'grid', gap: '14px' }} className="grid md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, i) => (
            <motion.div
              key={test.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              style={{
                padding: '26px',
                borderRadius: '18px',
                background: 'white',
                border: '1px solid rgba(15,23,42,0.07)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.035)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Color accent top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${test.color} 0%, ${test.color}00 80%)`,
              }} />

              {/* Tag */}
              <div style={{
                position: 'absolute', top: '18px', right: '18px',
                fontSize: '11px', fontWeight: 800, letterSpacing: '0.06em',
                color: `${test.color}30`, fontFamily: 'monospace',
              }}>
                {test.tag}
              </div>

              {/* Icon */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: `${test.color}0C`,
                border: `1px solid ${test.color}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                <test.icon size={20} color={test.color} strokeWidth={1.8} />
              </div>

              <h3 style={{
                fontSize: '15px', fontWeight: 700, color: '#0F172A',
                marginBottom: '9px', letterSpacing: '-0.01em',
              }}>
                {test.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#64748B' }}>
                {test.description}
              </p>

              {/* Status pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                marginTop: '16px', padding: '3px 9px', borderRadius: '100px',
                background: `${test.color}09`,
                border: `1px solid ${test.color}16`,
              }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: test.color, opacity: 0.8 }} />
                <span style={{ fontSize: '10px', fontWeight: 700, color: test.color, letterSpacing: '0.05em', opacity: 0.85 }}>
                  ACTIVE TEST LAYER
                </span>
              </div>
            </motion.div>
          ))}

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            style={{
              padding: '26px',
              borderRadius: '18px',
              background: 'radial-gradient(circle at 100% 0%, rgba(37,99,235,0.14), transparent 32%), #0B1220',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '18px' }}>
              Scope per audit
            </p>
            {[
              { label: 'Starter pack', value: '80–120 test cases' },
              { label: 'Pro pack', value: '250–400 test cases' },
              { label: 'Languages', value: 'Russian + Kazakh' },
              { label: 'Report format', value: 'Technical PDF' },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{label}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.82)', fontWeight: 700 }}>{value}</span>
              </div>
            ))}
            <a
              href="#pricing"
              className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-blue-400/20 transition-all duration-200 hover:bg-blue-600"
            >
              View Packages
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
