import JavesMark from './JavesMark'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        padding: '80px 24px 80px',
        overflow: 'hidden',
      }}
    >
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
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.028, pointerEvents: 'none' }}
      >
        <JavesMark style={{ width: '65%', maxWidth: 580 }} />
      </div>

      {/* Main mark */}
      <JavesMark
        style={{
          width: 56,
          marginBottom: 44,
          position: 'relative',
          zIndex: 1,
          filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.07))',
          animation: 'mark-in 1s cubic-bezier(0.16,1,0.3,1) both',
        }}
      />

      <p
        className="grad-text"
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-ui)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          marginBottom: 20,
          animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both',
        }}
      >
        Video Marketing
      </p>

      <h1
        id="hero-title"
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6.5vw, 82px)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          lineHeight: 0.92,
          marginBottom: 28,
          animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.18s both',
        }}
      >
        JAVES
      </h1>

      <p
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: 17,
          color: 'var(--fg-muted)',
          lineHeight: 1.65,
          maxWidth: 380,
          marginBottom: 0,
          fontWeight: 300,
          fontStyle: 'italic',
          fontFamily: 'var(--font-body)',
          animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.26s both',
        }}
      >
        Histórias que conquistam mercado.
      </p>

      {/* Video placeholder */}
      <a
        href="#"
        rel="noopener"
        aria-label="Assistir showreel no YouTube"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 900,
          aspectRatio: '16/9',
          background: 'var(--surface)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 4,
          overflow: 'hidden',
          marginTop: 56,
          textDecoration: 'none',
          transition: 'border-color 0.25s, box-shadow 0.25s',
          animation: 'hero-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.42s both',
        }}
        className="hero-video"
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.7) 100%)',
            pointerEvents: 'none',
          }}
        />

        <span
          aria-hidden="true"
          className="hv-play"
          style={{
            position: 'relative',
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.9)',
            transition: 'transform 0.25s, background 0.25s, border-color 0.25s',
          }}
        >
          <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" aria-hidden="true">
            <path d="M0 0L18 11L0 22V0Z" />
          </svg>
        </span>

        <span
          aria-hidden="true"
          style={{
            position: 'relative',
            fontFamily: 'var(--font-ui)',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
          }}
        >
          Showreel · 2026
        </span>
      </a>
    </section>
  )
}
