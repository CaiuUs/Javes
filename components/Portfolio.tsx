'use client'

import { useState } from 'react'
import JavesMark from './JavesMark'

type Category = '*' | 'casamento' | 'corporativo' | 'comercial'

const FILTERS: { label: string; value: Category }[] = [
  { label: 'Todos',       value: '*' },
  { label: 'Casamentos',  value: 'casamento' },
  { label: 'Corporativo', value: 'corporativo' },
  { label: 'Comercial',   value: 'comercial' },
]

const CARDS: { title: string; category: Category; pill: string; bg: string; href: string }[] = [
  { title: 'Fernanda & Rafael',           category: 'casamento',   pill: 'Casamento',   bg: 'thumb-cas-1', href: '#' },
  { title: 'Ana & Pedro',                 category: 'casamento',   pill: 'Casamento',   bg: 'thumb-cas-2', href: '#' },
  { title: 'Horizonte Construtora',       category: 'corporativo', pill: 'Corporativo', bg: 'thumb-cor-1', href: '#' },
  { title: 'Nexus Tecnologia',            category: 'corporativo', pill: 'Corporativo', bg: 'thumb-cor-2', href: '#' },
  { title: 'Boutique Mar — Campanha Verão', category: 'comercial', pill: 'Comercial',   bg: 'thumb-com-1', href: '#' },
  { title: 'Clínica Prime Estética',      category: 'comercial',   pill: 'Comercial',   bg: 'thumb-com-2', href: '#' },
]

export default function Portfolio() {
  const [active, setActive] = useState<Category>('*')
  const visible = CARDS.filter((c) => active === '*' || c.category === active)

  return (
    <section className="section-wrap" id="trabalhos" aria-labelledby="portfolio-title">
      <div className="inner">
        <p className="section-label grad-text">Portfólio</p>
        <h2 className="section-title" id="portfolio-title">
          Trabalhos em Destaque
        </h2>

        <div className="filters" role="group" aria-label="Filtrar por categoria">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              className={`filter-btn${active === value ? ' active' : ''}`}
              aria-pressed={active === value}
              onClick={() => setActive(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid" id="portfolio-grid">
          {visible.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="portfolio-card"
              aria-label={`Assistir: ${card.title}`}
              data-category={card.category}
            >
              <div className="card-thumb">
                <div className={`thumb-bg ${card.bg}`} />
                <div className="thumb-grain" aria-hidden="true" />
                <div className="thumb-watermark" aria-hidden="true">
                  <JavesMark />
                </div>
                <span className="thumb-pill">{card.pill}</span>
                <div className="play-btn" aria-hidden="true">
                  <div className="play-icon" />
                </div>
              </div>
              <div className="card-info">
                <p className="card-cat grad-text">{card.pill}</p>
                <h3 className="card-title">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
