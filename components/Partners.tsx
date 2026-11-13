const PARTNERS = ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D', 'Empresa E', 'Empresa F']

export default function Partners() {
  return (
    <section className="partners-wrap" id="parceiros" aria-labelledby="parceiros-title">
      <div className="inner">
        <p className="section-label grad-text">Parceiros</p>
        <h2 className="section-title" id="parceiros-title">
          Marcas que Já Confiaram na JAVES
        </h2>
        <div className="partners-grid">
          {PARTNERS.map((name) => (
            <div className="partner-item" key={name}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
