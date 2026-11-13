const TEAM = [
  { initials: 'JV', name: 'João Vitor',   role: 'Diretor & Fundador' },
  { initials: 'AM', name: 'Ana Martins',  role: 'Diretora de Arte' },
  { initials: 'RS', name: 'Rafael Silva', role: 'Editor & Motion' },
]

export default function TeamSection() {
  return (
    <section className="quem-somos-wrap" id="quem-somos" aria-labelledby="quem-somos-title">
      <div className="inner">
        <p className="section-label grad-text">A Empresa</p>
        <h2 className="section-title" id="quem-somos-title">Quem Somos</h2>

        <div className="qs-intro">
          <p>
            Somos uma produtora de vídeo marketing especializada em transformar histórias em
            conteúdo que converte. Com mais de 500 projetos entregues, atuamos em casamentos,
            comunicação corporativa e campanhas comerciais.
          </p>
          <p>
            Nossa abordagem combina direção criativa com execução técnica de alto padrão —
            do roteiro à edição final, cada quadro é pensado para gerar resultado.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map(({ initials, name, role }) => (
            <div className="team-card" key={name}>
              <div className="team-photo" aria-hidden="true">
                <span>{initials}</span>
              </div>
              <h3 className="team-name">{name}</h3>
              <p className="team-role">{role}</p>
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com/javes.mov"
          target="_blank"
          rel="noopener noreferrer"
          className="about-contact"
        >
          @javes.mov no Instagram
        </a>
      </div>
    </section>
  )
}
