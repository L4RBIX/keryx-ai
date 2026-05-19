import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CANVAS_SIZE = 570

const severityItems = [
  { label: 'Critical', value: '12', tone: 'danger' },
  { label: 'High', value: '7', tone: 'warning' },
  { label: 'Medium', value: '11', tone: 'info' },
]

const statusRows = [
  { label: 'Semantic Review', value: 'Partial', tone: 'warning' },
  { label: 'Human Review', value: 'Pending', tone: 'warning' },
  { label: 'PDF Report', value: 'Draft ready', tone: 'info' },
]

const riskTags = ['Prompt injection', 'Unsafe advice', 'RU/KZ drift', 'Hallucination']

export default function RiskEntropyVisual() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = CANVAS_SIZE
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const WHITE = '#ffffff'

    class Particle {
      constructor(x, y, order) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = 1.5
        this.order = order
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }
        this.influence = 0
        this.neighbors = []
      }

      update() {
        if (this.order) {
          const dx = this.originalX - this.x
          const dy = this.originalY - this.y
          const ci = { x: 0, y: 0 }
          this.neighbors.forEach(n => {
            if (!n.order) {
              const d = Math.hypot(this.x - n.x, this.y - n.y)
              const s = Math.max(0, 1 - d / 100)
              ci.x += n.velocity.x * s
              ci.y += n.velocity.y * s
              this.influence = Math.max(this.influence, s)
            }
          })
          this.x += dx * 0.05 * (1 - this.influence) + ci.x * this.influence
          this.y += dy * 0.05 * (1 - this.influence) + ci.y * this.influence
          this.influence *= 0.99
        } else {
          this.velocity.x += (Math.random() - 0.5) * 0.5
          this.velocity.y += (Math.random() - 0.5) * 0.5
          this.velocity.x *= 0.95
          this.velocity.y *= 0.95
          this.x += this.velocity.x
          this.y += this.velocity.y
          if (this.x < size / 2 || this.x > size) this.velocity.x *= -1
          if (this.y < 0 || this.y > size) this.velocity.y *= -1
          this.x = Math.max(size / 2, Math.min(size, this.x))
          this.y = Math.max(0, Math.min(size, this.y))
        }
      }

      draw(c) {
        const alpha = this.order ? 0.8 - this.influence * 0.5 : 0.8
        const hex = Math.round(alpha * 255).toString(16).padStart(2, '0')
        c.fillStyle = `${WHITE}${hex}`
        c.beginPath()
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        c.fill()
      }
    }

    const particles = []
    const gridSize = 20
    const spacing = size / gridSize
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = spacing * i + spacing / 2
        const y = spacing * j + spacing / 2
        particles.push(new Particle(x, y, x < size / 2))
      }
    }

    function updateNeighbors() {
      particles.forEach(p => {
        p.neighbors = particles.filter(o => o !== p && Math.hypot(p.x - o.x, p.y - o.y) < 100)
      })
    }

    let time = 0
    function animate() {
      ctx.clearRect(0, 0, size, size)
      if (time % 60 === 0) updateNeighbors()
      particles.forEach(p => {
        p.update()
        p.draw(ctx)
        p.neighbors.forEach(n => {
          const d = Math.hypot(p.x - n.x, p.y - n.y)
          if (d < 45) {
            const a = 0.18 * (1 - d / 45)
            const hex = Math.round(a * 255).toString(16).padStart(2, '0')
            ctx.strokeStyle = `${WHITE}${hex}`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(n.x, n.y)
            ctx.stroke()
          }
        })
      })
      ctx.strokeStyle = `${WHITE}38`
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(size / 2, 0)
      ctx.lineTo(size / 2, size)
      ctx.stroke()
      time++
      animRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [])

  return (
    <motion.div
      className="keryx-entropy-visual"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="keryx-entropy-canvas-frame">
        <canvas ref={canvasRef} className="keryx-entropy-canvas" />

        <span className="keryx-entropy-side-label" style={{ left: 14 }}>
          <span
            className="keryx-entropy-label-dot"
            style={{ background: 'rgba(96,165,250,0.8)', boxShadow: '0 0 5px rgba(96,165,250,0.55)' }}
          />
          Audit evidence
        </span>
        <span className="keryx-entropy-side-label" style={{ right: 14 }}>
          Raw bot behavior
          <span
            className="keryx-entropy-label-dot"
            style={{ background: 'rgba(251,191,36,0.72)', boxShadow: '0 0 5px rgba(251,191,36,0.45)' }}
          />
        </span>

        {/* Audit overlay card */}
        <div className="keryx-audit-overlay-card">
          <div className="keryx-audit-overlay-header">
            <div className="keryx-audit-score-group">
              <span className="keryx-mono keryx-audit-score-value">76.9</span>
              <span className="keryx-audit-score-denom">/ 100</span>
            </div>
            <span
              className="keryx-chip"
              data-tone="danger"
              style={{ marginLeft: 'auto', boxShadow: '0 0 10px rgba(239,68,68,0.22)' }}
            >
              <span className="keryx-dot" />
              Blocked
            </span>
          </div>

          <div className="keryx-severity-pills">
            {severityItems.map(item => (
              <span key={item.label} className={`keryx-severity-pill keryx-severity-pill-${item.tone}`}>
                {item.label}&nbsp;<strong className="keryx-severity-num">{item.value}</strong>
              </span>
            ))}
          </div>

          <div className="keryx-audit-divider" />

          <div className="keryx-audit-status-grid">
            {statusRows.map(row => (
              <div key={row.label} className="keryx-audit-overlay-row">
                <span className="keryx-audit-row-label">{row.label}</span>
                <span className={`keryx-audit-val keryx-audit-val-${row.tone}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="keryx-entropy-tags">
        {riskTags.map(tag => (
          <span key={tag} className="keryx-risk-tag">{tag}</span>
        ))}
      </div>

      <p className="keryx-entropy-caption">
        Chaotic bot outputs mapped into structured audit evidence.
      </p>
    </motion.div>
  )
}
