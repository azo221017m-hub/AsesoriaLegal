export default function Perfil() {
  return (
    <section id="perfil" className="section" aria-labelledby="perfil-heading">
      <div className="container">
        <div className="perfil-grid">

          {/* Left: text */}
          <div className="perfil-text">
            <p className="section-label">Quién Soy</p>
            <h2 className="section-title" id="perfil-heading">
              Preparación, vocación<br />y compromiso jurídico
            </h2>
            <div className="divider"></div>

            <p className="fade-up">
              Soy Alison Ortíz, licenciada en Derecho con formación sólida en las ramas del derecho familiar y civil. Mi práctica profesional está orientada a brindar soluciones jurídicas claras, honestas y adaptadas a cada persona, porque entiendo que detrás de cada caso hay una historia que merece atención genuina.
            </p>
            <p className="fade-up">
              Me mantengo en constante actualización a través de diplomados, certificaciones y análisis de jurisprudencia vigente, lo que me permite ofrecer asesoría de alto nivel con base normativa actualizada al marco legal mexicano de 2026.
            </p>
            <p className="fade-up">
              Mi misión es ser un puente entre la complejidad del sistema jurídico y las personas que lo necesitan, con lenguaje accesible, estrategia firme y siempre dentro del marco ético de la profesión.
            </p>
          </div>

          {/* Right: highlight cards */}
          <div className="perfil-highlights" aria-label="Datos destacados">
            <div className="highlight-card fade-up">
              <div className="number">100%</div>
              <p>Atención Personalizada</p>
            </div>
            <div className="highlight-card fade-up">
              <div className="number">4+</div>
              <p>Áreas de Práctica</p>
            </div>
            <div className="highlight-card fade-up">
              <div className="number">360°</div>
              <p>Gestión Jurídica Integral</p>
            </div>
            <div className="highlight-card fade-up">
              <div className="number">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '1.8rem', height: '1.8rem' }} aria-hidden="true">
                  <path d="M12 3v18M3 7l9-4 9 4M5 8l-2 7h4L5 8zM19 8l-2 7h4L19 8zM5 15h4M15 15h4" />
                </svg>
              </div>
              <p>Ética &amp; Responsabilidad</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
