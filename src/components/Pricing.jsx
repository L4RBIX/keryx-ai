import { motion } from 'framer-motion'
import { CheckCircle, Star } from 'lucide-react'
import SectionHeader from './SectionHeader'

const plans = [
  {
    name: 'Starter Readiness Audit',
    price: 'from 250,000 ₸',
    description: 'For teams preparing their first AI agent for enterprise delivery and needing documented readiness evidence.',
    popular: false,
    color: '#2563EB',
    features: [
      '80–120 selected test cases',
      '1 AI agent · 1 domain',
      'RU/KZ consistency evaluation',
      'Prompt injection sample tests',
      'Structured PDF readiness report',
      'Severity-graded fix recommendations',
      '1 retest included',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro Bot Audit',
    price: 'from 1,200,000 ₸',
    description: 'For teams delivering AI agents to enterprise clients or expanding into regulated, high-stakes domains.',
    popular: true,
    color: '#06B6D4',
    features: [
      '250–400 test cases',
      'Custom document groundedness evaluation',
      'Expanded unsafe advice stress-testing',
      'Manual review for high-severity findings',
      'Before/after comparison report',
      'Team debrief call included',
      '2 retests included',
    ],
    cta: 'Request Pro Audit',
  },
  {
    name: 'Agency Partnership',
    price: 'Custom',
    description: 'For agencies that deliver AI agents at scale and want readiness reports as a standard delivery artifact.',
    popular: false,
    color: '#10B981',
    features: [
      'Repeated audits across client deployments',
      'White-label readiness reports',
      'Monthly regression testing',
      'Custom domain-specific test packs',
      'Priority turnaround SLA',
      'Dedicated account contact',
    ],
    cta: 'Contact Us',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)', padding: '104px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          badge="Pricing"
          title="Pilot pricing for early AI teams."
          subtitle="Structured for AI startups and chatbot builders operating in Kazakhstan. No subscriptions — pay per audit."
        />

        <div className="grid md:grid-cols-3" style={{ gap: '20px', alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                borderRadius: '24px',
                border: plan.popular ? `1.5px solid ${plan.color}45` : '1px solid rgba(15,23,42,0.08)',
                background: plan.popular
                  ? 'radial-gradient(circle at 100% 0%, rgba(6,182,212,0.14), transparent 32%), #0B1220'
                  : 'white',
                boxShadow: plan.popular
                  ? '0 28px 64px rgba(15,23,42,0.24), inset 0 1px 0 rgba(255,255,255,0.06)'
                  : '0 8px 28px rgba(15,23,42,0.055)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: '20px', right: '20px',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '4px 10px', borderRadius: '100px',
                  background: `${plan.color}18`, border: `1px solid ${plan.color}30`,
                }}>
                  <Star size={10} color={plan.color} fill={plan.color} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: plan.color, letterSpacing: '0.05em' }}>
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div style={{ padding: '32px 28px' }}>
                <p style={{
                  fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
                  color: plan.popular ? 'rgba(255,255,255,0.35)' : '#94A3B8', marginBottom: '10px',
                }}>
                  {plan.name}
                </p>

                <div style={{ marginBottom: '14px' }}>
                  <span style={{
                    fontSize: plan.price === 'Custom' ? '30px' : '34px',
                    fontWeight: 800, letterSpacing: '-0.03em',
                    color: plan.popular ? 'white' : '#0F172A',
                  }}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span style={{ fontSize: '13px', color: plan.popular ? 'rgba(255,255,255,0.3)' : '#94A3B8', marginLeft: '4px' }}>
                      per audit
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: plan.popular ? 'rgba(255,255,255,0.48)' : '#64748B', marginBottom: '24px' }}>
                  {plan.description}
                </p>

                <div style={{ height: '1px', background: plan.popular ? 'rgba(255,255,255,0.07)' : 'rgba(15,23,42,0.06)', marginBottom: '22px' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '26px' }}>
                  {plan.features.map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                      <CheckCircle size={14} color={plan.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13px', color: plan.popular ? 'rgba(255,255,255,0.6)' : '#475569', lineHeight: 1.5 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#request-audit"
                  className={
                    plan.popular
                      ? 'flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.22)] ring-1 ring-blue-400/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_12px_28px_rgba(37,99,235,0.28)] active:translate-y-0'
                      : 'flex w-full items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-0'
                  }
                  style={plan.popular ? undefined : {
                    borderColor: `${plan.color}28`,
                    color: plan.color,
                    background: `${plan.color}09`,
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}
        >
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#94A3B8', lineHeight: 1.6 }}>
            Early-stage startup pilots may qualify for discounted validation scopes.{' '}
            <a href="#request-audit" style={{ color: '#2563EB', fontWeight: 600 }}>
              Contact us
            </a>{' '}
            to discuss your situation.
          </p>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '600px' }}>
            Keryx AI provides technical readiness testing under selected scenarios. Pricing does not include regulatory certification or legal compliance assessment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
