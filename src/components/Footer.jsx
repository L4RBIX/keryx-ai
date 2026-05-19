import { Shield, ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Test Suite', href: '#test-suite' },
  { label: 'Demo', href: '#demo' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#060D18', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-3" style={{ gap: '48px', marginBottom: '52px' }}>

          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '9px',
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(37,99,235,0.3)',
              }}>
                <Shield size={17} color="white" strokeWidth={2.5} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '15px', color: 'rgba(255,255,255,0.9)', letterSpacing: '-0.015em' }}>
                Keryx <span style={{ color: '#60A5FA' }}>AI</span>
              </span>
            </a>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '260px' }}>
              External readiness testing for Kazakh/Russian AI agents. Technical report, fix plan, retest.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '18px' }}>
              Navigate
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
              {footerLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', transition: 'color 0.15s', display: 'inline-block' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '18px' }}>
              Get started
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: '20px' }}>
              Ready to test your AI agent before enterprise launch? Request a pilot audit and we'll propose a scope.
            </p>
            <a
              href="#request-audit"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-blue-400/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Request Pilot Audit <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex flex-col md:flex-row" style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.01em' }}>
              © 2026 Keryx AI
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)', lineHeight: 1.65, maxWidth: '580px', textAlign: 'right' }}>
              Keryx AI provides technical readiness testing under selected scenarios and does not guarantee complete AI safety, official certification, or regulatory approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
