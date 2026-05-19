import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, FileText, Shield } from 'lucide-react'
import RiskEntropyVisual from './RiskEntropyVisual'

const heroFacts = [
  'Rule-based checks',
  'LLM semantic review',
  'Human approval',
  'PDF readiness report',
]

function scrollToRequestAudit() {
  const target = document.querySelector('#request-audit')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  window.location.hash = 'request-audit'
}

export default function Hero() {
  return (
    <section className="keryx-section keryx-section-dark min-h-[calc(100svh-76px)] pt-20 pb-20">
      <div className="keryx-grid-bg" />
      <div className="keryx-container">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-12">
          <motion.div
            className="hero-copy min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="keryx-eyebrow">
              <Shield className="h-3.5 w-3.5" />
              Keryx AI readiness audits
            </span>

            <h1 className="mt-6 max-w-[620px] text-[clamp(30px,7.8vw,62px)] font-black leading-[0.97] tracking-tight text-white">
              Keryx AI tests
              <span className="block">bots before <span className="block sm:inline">launch.</span></span>
            </h1>

            <p className="mt-6 max-w-[620px] break-words text-lg leading-8 text-slate-300">
              Scenario-based readiness audits for AI chatbots: rule-based checks, DeepSeek/OpenAI-compatible semantic review, human approval, and client-ready PDF reports.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToRequestAudit}
                className="keryx-button-primary w-full px-6 sm:w-auto"
              >
                Request Pilot Audit
                <ArrowRight className="h-5 w-5" />
              </button>
              <a href="#report" className="keryx-button-secondary w-full px-6 sm:w-auto">
                <FileText className="h-5 w-5" />
                View Sample Report
              </a>
            </div>

            <div className="mt-8 grid max-w-[640px] gap-2 sm:grid-cols-2">
              {heroFacts.map((fact) => (
                <div key={fact} className="flex items-center gap-2 text-sm font-semibold text-slate-400">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  {fact}
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[560px] text-xs leading-5 text-slate-500">
              Keryx does not certify complete AI safety. It documents selected test scenarios, findings, recommendations, and review decisions before launch.
            </p>
          </motion.div>

          <motion.div
            className="flex min-w-0 justify-center max-w-[calc(100vw-32px)] lg:max-w-none"
            initial={{ opacity: 0, x: 28, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          >
            <RiskEntropyVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
