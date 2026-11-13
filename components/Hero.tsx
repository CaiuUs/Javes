import JavesMark from './JavesMark'
import JavesWordmark from './JavesWordmark'

export default function Hero() {
  return (
    <section className="hero-root" aria-labelledby="hero-title">
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255,255,255,0.018) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Watermark mark */}
      <div className="hero-watermark" aria-hidden="true">
        <JavesMark />
      </div>

      {/* Main mark */}
      <JavesMark className="hero-mark" />

      {/* <p> entry animation; inner <span> runs shimmer independently */}
      <p className="hero-eyebrow">
        <span className="grad-text-shimmer hero-eyebrow-text">Video Marketing</span>
      </p>

      <h1 id="hero-title" className="hero-title">
        <span className="sr-only">JAVES</span>
        <JavesWordmark />
      </h1>

      <p className="hero-tagline">Histórias que conquistam mercado.</p>

      {/* Video placeholder */}
      <a
        href="#"
        rel="noopener"
        aria-label="Assistir showreel no YouTube"
        className="hero-video"
      >
        <div className="hero-video-vignette" aria-hidden="true" />

        <span className="hv-play" aria-hidden="true">
          <svg viewBox="0 0 18 22" fill="currentColor" aria-hidden="true">
            <path d="M0 0L18 11L0 22V0Z" />
          </svg>
        </span>

        <span className="hv-label" aria-hidden="true">Showreel · 2026</span>
      </a>
    </section>
  )
}
