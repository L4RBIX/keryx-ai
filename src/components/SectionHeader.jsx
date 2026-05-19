import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        textAlign: center ? 'center' : 'left',
        maxWidth: center ? '720px' : 'none',
        margin: center ? '0 auto 60px' : '0 0 48px',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '18px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: light ? 'rgba(255,255,255,0.06)' : 'rgba(37,99,235,0.06)',
            color: light ? '#93C5FD' : '#1D4ED8',
            border: `1px solid ${light ? 'rgba(255,255,255,0.12)' : 'rgba(37,99,235,0.14)'}`,
            boxShadow: light ? 'inset 0 1px 0 rgba(255,255,255,0.08)' : '0 1px 2px rgba(15,23,42,0.04)',
          }}>
            {badge}
          </span>
        </div>
      )}
      <h2 style={{
        fontSize: 'clamp(28px, 3.8vw, 44px)',
        fontWeight: 800,
        lineHeight: 1.08,
        marginBottom: subtitle ? '16px' : 0,
        color: light ? '#FFFFFF' : '#0F172A',
        letterSpacing: 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '17px',
          lineHeight: 1.65,
          color: light ? 'rgba(255,255,255,0.62)' : '#64748B',
          maxWidth: '580px',
          margin: center ? '0 auto' : 0,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
