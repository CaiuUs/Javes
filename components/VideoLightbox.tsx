'use client'

import { useEffect } from 'react'

interface Props {
  videoId: string | null
  onClose: () => void
}

/**
 * Lightbox para reprodução de vídeos do YouTube em modal fullscreen.
 * - Travado quando videoId === null (não renderiza nada).
 * - ESC ou clique fora do player fecha.
 * - Trava scroll do body enquanto aberto.
 */
export default function VideoLightbox({ videoId, onClose }: Props) {
  useEffect(() => {
    if (!videoId) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [videoId, onClose])

  if (!videoId) return null

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div
      className="video-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Reprodução de vídeo"
      onClick={onClose}
    >
      <button
        type="button"
        className="video-lightbox-close"
        aria-label="Fechar vídeo"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="video-lightbox-player" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={src}
          title="Vídeo JAVES Videomarketing"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
