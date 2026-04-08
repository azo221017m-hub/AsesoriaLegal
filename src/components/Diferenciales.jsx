export default function Diferenciales() {
  return (
    <section id="diferenciales" className="section section--alt" aria-labelledby="dif-heading">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="section-label">Por Qué Elegirme</p>
          <h2 className="section-title" id="dif-heading">Mi Propuesta de Valor</h2>
          <div className="divider divider--center"></div>
        </div>

        <div className="dif-grid">

          {/* 1. Atención personalizada */}
          <div className="dif-item fade-up">
            <div className="dif-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3>Atención Personalizada</h3>
            <p>Cada cliente es único. Escucho, analizo y construyo estrategias jurídicas adaptadas a tu situación particular.</p>
          </div>

          {/* 2. Ética */}
          <div className="dif-item fade-up">
            <div className="dif-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>Ética Profesional</h3>
            <p>Actúo con integridad absoluta: información honesta, estrategias legales y respeto irrenunciable al Código de Ética.</p>
          </div>

          {/* 3. Compromiso */}
          <div className="dif-item fade-up">
            <div className="dif-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3>Compromiso Total</h3>
            <p>Tu caso importa desde el primer día. Me involucro en cada etapa del proceso para proteger tus derechos e intereses.</p>
          </div>

          {/* 4. Preparación constante */}
          <div className="dif-item fade-up">
            <div className="dif-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3>Preparación Constante</h3>
            <p>Me actualizo continuamente en legislación, jurisprudencia y tendencias legales para brindarte la mejor estrategia.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
