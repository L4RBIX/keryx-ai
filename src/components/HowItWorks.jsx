import { motion } from 'framer-motion'
import { FileBarChart, FlaskConical, ListChecks, PlugZap, ShieldCheck } from 'lucide-react'
import SectionHeader from './SectionHeader'

const steps = [
  {
    icon: PlugZap,
    number: '01',
    title: 'Connect the bot or send response logs',
    description: 'Use a staging API, live bot endpoint, exported conversations, or a guided manual session for early pilots.',
  },
  {
    icon: ListChecks,
    number: '02',
    title: 'Lock the audit scope',
    description: 'Keryx maps selected scenarios to your domain, language coverage, knowledge base, and launch risk.',
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Run hybrid evaluation',
    description: 'Rule-based checks, document-grounded tests, semantic review, and human confirmation are applied by severity.',
  },
  {
    icon: FileBarChart,
    number: '04',
    title: 'Approve the report and retest',
    description: 'Teams receive a PDF readiness report, prioritized remediation plan, and retest comparison after fixes.',
  },
]

const scopeRows = [
  { label: 'Starter scope', value: '80-120 selected tests' },
  { label: 'Enterprise scope', value: '250-400 selected tests' },
  { label: 'Languages', value: 'Kazakh + Russian' },
  { label: 'Review model', value: 'Rules + LLM + human approval' },
  { label: 'Artifacts', value: 'Findings table, fix plan, PDF report' },
]

export default function HowItWorks() {
  return (
    <section className="keryx-section keryx-section-light">
      <div className="keryx-container">
        <SectionHeader
          badge="Engagement Model"
          title="A concrete audit workflow, not generic QA."
          subtitle="Keryx fits around existing product delivery: connect the agent, lock the test scope, run the audit, approve the report, then retest after remediation."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="keryx-panel-soft rounded-[24px] p-6"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">Audit scope matrix</p>
                <p className="text-sm text-slate-500">What is defined before testing starts</p>
              </div>
            </div>

            <div className="divide-y divide-slate-200/70">
              {scopeRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[0.8fr_1.2fr] gap-4 py-4">
                  <p className="text-sm font-semibold text-slate-500">{row.label}</p>
                  <p className="text-sm font-bold text-slate-950">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold leading-6 text-amber-950">
                Scope note: this is readiness evidence under selected test scenarios, not official certification or a complete safety guarantee.
              </p>
            </div>
          </motion.div>

          <div className="rounded-[24px] border border-slate-200 bg-white/80 p-2 shadow-[0_18px_48px_rgba(15,23,42,0.055)]">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="grid gap-4 rounded-[18px] p-5 sm:grid-cols-[56px_1fr]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-blue-700">
                    <step.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 hidden h-12 w-px bg-slate-200 sm:block" />
                  )}
                </div>
                <div className="border-b border-slate-100 pb-5">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="keryx-mono text-xs font-black uppercase tracking-[0.12em] text-blue-700">{step.number}</span>
                    <span className="h-px flex-1 bg-slate-100" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
