import Image from 'next/image'

export default function TeamSection() {
  return (
    <section className="quem-somos-wrap" id="quem-somos" aria-labelledby="quem-somos-title">
      <div className="inner">
        {/* Bloco de texto (label + título + parágrafos) + foto lado a lado */}
        <div className="qs-top">
          <div className="qs-text-block">
            <p className="section-label grad-text">A Empresa</p>
            <h2 className="section-title qs-title" id="quem-somos-title">Quem Somos</h2>

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
          </div>

          <figure className="qs-photo qs-photo-couple">
            <Image
              src="/png/IMG_0658.JPEG"
              alt="Fundadores da JAVES Videomarketing"
              width={800}
              height={1200}
              sizes="(max-width: 900px) 100vw, 440px"
            />
          </figure>
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
