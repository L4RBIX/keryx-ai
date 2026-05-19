import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#test-suite', label: 'Test Suite' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#demo', label: 'Demo' },
  { href: '#report', label: 'Report' },
  { href: '#methodology', label: 'Methodology' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className="relative z-10 mt-4 px-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto] items-center rounded-[14px] border border-white/[0.06] bg-[#02060f]/92 px-4 py-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.44)] backdrop-blur-2xl lg:grid-cols-[1fr_auto_1fr] lg:px-5"
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '9px',
            background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(37,99,235,0.35)',
            flexShrink: 0,
          }}>
            <Shield size={18} color="white" strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: 760, fontSize: '16px', color: '#F8FAFC', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
            Keryx <span style={{ color: '#93C5FD' }}>AI</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center justify-end gap-2">
          <a
            href="#request-audit"
            className="hidden items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] ring-1 ring-blue-400/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_26px_rgba(37,99,235,0.24)] active:translate-y-0 lg:inline-flex"
          >
            Request Pilot Audit
          </a>
          <button
            className="flex items-center rounded-lg border border-white/10 bg-white/[0.06] p-2 text-slate-100 transition-colors hover:bg-white/[0.1] lg:hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mx-auto mt-2 max-w-[1280px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#request-audit"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-lg bg-blue-600 px-5 py-3 text-center text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.20)] transition-colors hover:bg-blue-700"
              >
                Request Pilot Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
    >
      {children}
    </a>
  )
}
