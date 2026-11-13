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
      <div className="inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingBottom: 20 }}>
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

          <ul
            id="main-nav"
            className={`site-nav${open ? ' nav-open' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none' }}
          >
            {[
              { href: '#trabalhos', label: 'Trabalhos' },
              { href: '#parceiros',  label: 'Parceiros' },
              { href: '#quem-somos', label: 'Quem Somos' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: 'var(--fg-muted)',
                    textDecoration: 'none',
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-ui)',
                    transition: 'color 0.2s',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-cta">
              <Link
                href="#quem-somos"
                onClick={() => setOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  padding: '7px 18px',
                  borderRadius: 100,
                  textDecoration: 'none',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-ui)',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
