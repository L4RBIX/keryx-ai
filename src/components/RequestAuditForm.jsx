import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const botTypes = ['AI Startup', 'Chatbot Agency', 'EdTech', 'Fintech / Banking', 'Gov-related', 'Other']
const languages = ['Russian', 'Kazakh', 'Both Russian + Kazakh']
const stages = ['Prototype / internal demo', 'Staging / pre-launch', 'Live — client delivery pending', 'Live — already deployed', 'Exploring']
const budgets = ['Under 250,000 ₸', '250,000 – 500,000 ₸', '500,000 – 1,200,000 ₸', '1,200,000 ₸+', 'Not sure yet']
const timelines = ['This week', 'This month', 'Before client delivery', 'Before investor / demo day', 'Exploring only']

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '9px',
  fontSize: '14px',
  color: 'white',
  outline: 'none',
  transition: 'border-color 0.15s, background 0.15s',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '7px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
}

const fieldGroupLabel = {
  fontSize: '13px',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.55)',
  letterSpacing: '-0.01em',
  marginBottom: '16px',
  paddingBottom: '10px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
}

function Field({ label, children }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

function SelectGroup({ options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          style={{
            padding: '6px 13px',
            borderRadius: '7px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            border: '1px solid',
            borderColor: value === opt ? 'rgba(37,99,235,0.55)' : 'rgba(255,255,255,0.08)',
            background: value === opt ? 'rgba(37,99,235,0.14)' : 'rgba(255,255,255,0.03)',
            color: value === opt ? '#93C5FD' : 'rgba(255,255,255,0.45)',
            transition: 'all 0.15s',
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default function RequestAuditForm() {
  const [form, setForm] = useState({
    name: '', company: '', contact: '',
    botType: '', language: '', stage: '',
    budget: '', timeline: '', description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))
  const pick = (key) => (v) => setForm(f => ({ ...f, [key]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.contact || !form.botType) {
      setError('Please fill in your name, contact, and bot / agent type.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1300)
  }

  const focusStyle = (e) => {
    e.target.style.borderColor = 'rgba(37,99,235,0.5)'
    e.target.style.background = 'rgba(255,255,255,0.07)'
  }
  const blurStyle = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
    e.target.style.background = 'rgba(255,255,255,0.05)'
  }

  return (
    <section id="request-audit" style={{ background: '#060D18', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{
            display: 'inline-block', padding: '5px 14px', borderRadius: '100px',
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
            background: 'rgba(37,99,235,0.10)', color: '#93C5FD',
            border: '1px solid rgba(37,99,235,0.22)', marginBottom: '20px',
          }}>
            Request Audit
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'white',
            letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: '14px',
          }}>
            Start your readiness audit.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: '480px', margin: '0 auto' }}>
            Share your agent profile. We'll review it and propose a readiness scope matched to your stage and domain.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '64px 40px', borderRadius: '22px', textAlign: 'center',
                background: 'rgba(16,185,129,0.05)',
                border: '1px solid rgba(16,185,129,0.18)',
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 22px',
                background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CheckCircle size={26} color="#10B981" />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                Request received.
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: '420px', margin: '0 auto' }}>
                Your pilot audit request has been recorded. We'll review your agent profile and respond with a proposed readiness scope within 1–2 business days.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              style={{
                borderRadius: '22px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Section: Contact */}
              <div style={{ padding: '28px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={fieldGroupLabel}>Your contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="grid md:grid-cols-2" style={{ gap: '14px' }}>
                    <Field label="Name *">
                      <input
                        type="text"
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Aizat Seitkali"
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </Field>
                    <Field label="Company / Team">
                      <input
                        type="text"
                        value={form.company}
                        onChange={set('company')}
                        placeholder="EduBot KZ"
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </Field>
                  </div>
                  <Field label="Email or Telegram *">
                    <input
                      type="text"
                      value={form.contact}
                      onChange={set('contact')}
                      placeholder="you@company.kz or @yourhandle"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </Field>
                </div>
              </div>

              {/* Section: Agent details */}
              <div style={{ padding: '28px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={fieldGroupLabel}>Your AI agent</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <Field label="Agent / Bot type *">
                    <SelectGroup options={botTypes} value={form.botType} onChange={pick('botType')} />
                  </Field>
                  <Field label="Languages to test">
                    <SelectGroup options={languages} value={form.language} onChange={pick('language')} />
                  </Field>
                  <Field label="Current stage">
                    <SelectGroup options={stages} value={form.stage} onChange={pick('stage')} />
                  </Field>
                  <Field label="Brief description">
                    <textarea
                      value={form.description}
                      onChange={set('description')}
                      placeholder="What does your agent do, who does it serve, and what are your main concerns before launch?"
                      rows={3}
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </Field>
                </div>
              </div>

              {/* Section: Scope & timing */}
              <div style={{ padding: '28px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={fieldGroupLabel}>Scope & timing</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <Field label="Deployment timeline">
                    <SelectGroup options={timelines} value={form.timeline} onChange={pick('timeline')} />
                  </Field>
                  <Field label="Approximate audit budget">
                    <SelectGroup options={budgets} value={form.budget} onChange={pick('budget')} />
                  </Field>
                </div>
              </div>

              {/* Submit */}
              <div style={{ padding: '24px 32px' }}>
                {error && (
                  <div style={{
                    display: 'flex', gap: '8px', alignItems: 'center',
                    padding: '11px 14px', borderRadius: '8px', marginBottom: '16px',
                    background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.18)',
                  }}>
                    <AlertCircle size={14} color="#EF4444" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#FCA5A5' }}>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-700 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.22)] ring-1 ring-blue-400/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_12px_28px_rgba(37,99,235,0.28)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} style={{ display: 'flex' }}>
                        <Loader2 size={16} />
                      </motion.div>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Request Pilot Audit
                    </>
                  )}
                </button>

                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.6, marginTop: '14px' }}>
                  No commitment. We'll respond within 1–2 business days with a proposed readiness scope.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
