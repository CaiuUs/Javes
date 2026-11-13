'use client'

import { useState } from 'react'

/**
 * IMPORTANTE: troque SHOWREEL_ID pelo ID do vídeo do showreel no YouTube.
 * Ex: em https://www.youtube.com/watch?v=dQw4w9WgXcQ o ID é "dQw4w9WgXcQ"
 */
const SHOWREEL_ID = 'CKByXAnNgX0'

export default function HeroShowreel() {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    const embedSrc = `https://www.youtube.com/embed/${SHOWREEL_ID}?autoplay=1&rel=0&modestbranding=1`
    return (
      <div className="hero-video hero-video-playing">
        <iframe
          src={embedSrc}
          title="Showreel JAVES Videomarketing"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
            display: 'block',
          }}
        />
      </div>
    )
  }

  const thumbnail = `https://img.youtube.com/vi/${SHOWREEL_ID}/maxresdefault.jpg`

  return (
    <button
      type="button"
      className="hero-video"
      aria-label="Assistir showreel"
      onClick={() => setPlaying(true)}
    >
      <img
        className="hero-video-thumb"
        src={thumbnail}
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
      <div className="hero-video-vignette" aria-hidden="true" />

      <span className="hv-play" aria-hidden="true">
        <svg viewBox="0 0 18 22" fill="currentColor" aria-hidden="true">
          <path d="M0 0L18 11L0 22V0Z" />
        </svg>
      </span>

      <span className="hv-label" aria-hidden="true">Showreel · 2026</span>
    </button>
  )
}
