'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-10 border-b"
      style={{
        background: 'rgba(5,5,5,0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="inner site-header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image
          src="/svg/javes-logo-branco.svg"
          alt="JAVES Videomarketing"
          width={120}
          height={26}
          priority
        />

        <nav aria-label="Navegação principal" style={{ position: 'relative' }}>
          <button
            className="nav-toggle"
            style={{ display: 'none' }}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen(!open)}
          >
            <span
              style={{
                display: 'block', width: 18, height: 1.5,
                background: 'var(--fg)', borderRadius: 1,
                transition: 'transform 0.22s, opacity 0.22s',
                transform: open ? 'translateY(6.5px) rotate(45deg)' : undefined,
              }}
            />
            <span
              style={{
                display: 'block', width: 18, height: 1.5,
                background: 'var(--fg)', borderRadius: 1,
                transition: 'transform 0.22s, opacity 0.22s',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block', width: 18, height: 1.5,
                background: 'var(--fg)', borderRadius: 1,
                transition: 'transform 0.22s, opacity 0.22s',
                transform: open ? 'translateY(-6.5px) rotate(-45deg)' : undefined,
              }}
            />
          </button>

          <ul id="main-nav" className={`site-nav${open ? ' nav-open' : ''}`}>
            {[
              { href: '#trabalhos', label: 'Trabalhos' },
              { href: '#parceiros',  label: 'Parceiros' },
              { href: '#quem-somos', label: 'Quem Somos' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setOpen(false)} className="nav-link">
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-cta">
              <Link href="#contato" onClick={() => setOpen(false)} className="nav-cta-link">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
