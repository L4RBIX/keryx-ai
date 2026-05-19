import { motion } from 'framer-motion'
import { Building2, GraduationCap, Landmark, Rocket, ShieldCheck } from 'lucide-react'
import SectionHeader from './SectionHeader'

const audiences = [
  {
    icon: Rocket,
    title: 'AI agencies',
    trigger: 'Before client delivery',
    need: 'Attach external readiness evidence to chatbot handoff, reduce rework, and document known risks before sign-off.',
    proof: ['White-label report option', 'Retest after fixes', 'Client-facing PDF'],
  },
  {
    icon: GraduationCap,
    title: 'EdTech teams',
    trigger: 'Before student rollout',
    need: 'Catch hallucinated claims, weak Kazakh output, and bilingual drift in AI tutors and learning assistants.',
    proof: ['Kazakh quality checks', 'Groundedness review', 'RU/KZ consistency'],
  },
  {
    icon: Building2,
    title: 'FinTech and banks',
    trigger: 'Before pilot clients',
    need: 'Identify unsafe financial guidance, policy overreach, and prompt-injection paths before regulated users interact with the bot.',
    proof: ['Unsafe advice scenarios', 'Human review', 'Severity-led fixes'],
  },
  {
    icon: Landmark,
    title: 'GovTech and internal AI',
    trigger: 'Before public or staff launch',
    need: 'Verify service-policy boundaries, document-grounded responses, and Kazakh/Russian clarity for high-trust user journeys.',
    proof: ['Policy-grounded tests', 'Endpoint or log testing', 'Approval trail'],
  },
]

export default function ForWhom() {
  return (
    <section className="keryx-section keryx-section-light">
      <div className="keryx-container">
        <SectionHeader
          badge="Where It Fits"
          title="Built for AI agencies, EdTech, FinTech, and GovTech."
          subtitle="Keryx is for teams that need evidence before showing an AI assistant to enterprise buyers, pilot clients, students, staff, or public users."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              className="keryx-panel-soft rounded-[22px] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(15,23,42,0.09)]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-blue-200 shadow-[0_12px_28px_rgba(15,23,42,0.18)]">
                  <audience.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold tracking-tight text-slate-950">{audience.title}</h3>
                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {audience.trigger}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{audience.need}</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {audience.proof.map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
