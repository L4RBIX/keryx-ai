import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from './SectionHeader'

const faqs = [
  {
    q: 'Can companies test their own bots internally?',
    a: 'Yes. Internal testing is important and we encourage it. Keryx adds an external red-team style readiness layer with localized Kazakh/Russian scenarios, evidence-based findings, and a report that can be shared with clients or stakeholders. Internal teams cannot objectively red-team their own product — external testing catches a different class of failures.',
  },
  {
    q: 'Do you certify that a bot is safe?',
    a: 'No. We do not claim absolute safety or provide official certification. We report whether critical failures were detected under the selected test suite and provide recommendations to reduce launch risk. After remediation, we retest and issue an updated report — but no audit can guarantee that every possible failure mode has been covered.',
  },
  {
    q: 'Do you use AI to judge AI?',
    a: 'Partly, but not alone. We combine rule-based checks, expected behavior criteria, document-grounded evaluation, bilingual semantic comparison, LLM-assisted review, and manual review for high-risk findings. Relying solely on LLM-as-judge would miss structural failures and introduce its own biases. Human review is applied to all critical-severity findings before the report is finalized.',
  },
  {
    q: 'Can you test bots without an API?',
    a: 'Yes. For early pilots, we can work with exported bot conversations, staging environment links, or guided manual test sessions where we provide test prompts and document the responses. Full API access allows faster and more systematic testing, but it is not required to get started.',
  },
  {
    q: 'Why Kazakh/Russian-specific testing?',
    a: 'AI bots often behave very differently across languages. Kazakhstan\'s bilingual environment means the same user might ask a question in Russian one moment and Kazakh the next — and expect consistent, accurate answers. Standard English-centric AI testing does not cover Kazakh language quality, KZ/RU meaning consistency, or Kazakhstan-specific regulatory and cultural context. That\'s exactly what Keryx is built to test.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      style={{
        borderRadius: '14px',
        border: `1px solid ${open ? 'rgba(37,99,235,0.2)' : 'rgba(15,23,42,0.07)'}`,
        background: open ? 'rgba(37,99,235,0.02)' : 'white',
        overflow: 'hidden',
        transition: 'border-color 0.2s, background 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: '16px',
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: '15px', fontWeight: 600, color: '#0F172A', lineHeight: 1.4, flex: 1 }}>
          {q}
        </span>
        <div style={{
          width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
          background: open ? '#2563EB' : 'rgba(15,23,42,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          {open
            ? <Minus size={14} color="white" />
            : <Plus size={14} color="#64748B" />
          }
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 24px 20px' }}>
              <div style={{ height: '1px', background: 'rgba(15,23,42,0.06)', marginBottom: '16px' }} />
              <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#475569' }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: '#F8FAFC', padding: '104px 0' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          badge="FAQ"
          title="Common questions."
          subtitle="Honest answers about what Keryx AI does — and what it does not claim to do."
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
