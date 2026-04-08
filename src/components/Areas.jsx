export default function Areas() {
  return (
    <section id="areas" className="section" aria-labelledby="areas-heading">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p className="section-label">Especialidades</p>
          <h2 className="section-title" id="areas-heading">Áreas de Atención</h2>
          <div className="divider divider--center"></div>
        </div>

        <ul className="areas-grid" role="list">

          {/* Derecho Familiar */}
          <li className="area-card fade-up">
            <div className="area-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
              </svg>
            </div>
            <h3>Derecho Familiar</h3>
            <p>Divorcio, custodia, pensión alimenticia, adopciones, tutelas y todos los asuntos que afectan el núcleo familiar.</p>
          </li>

          {/* Derecho Civil */}
          <li className="area-card fade-up">
            <div className="area-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="7" width="18" height="14" rx="1" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" />
              </svg>
            </div>
            <h3>Derecho Civil</h3>
            <p>Contratos, arrendamiento, compraventa de inmuebles, sucesiones, herencias y responsabilidad civil.</p>
          </li>

          {/* Asesoría Legal */}
          <li className="area-card fade-up">
            <div className="area-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3>Asesoría Legal</h3>
            <p>Orientación preventiva y estratégica: revisión de documentos, consulta especializada y acompañamiento en trámites.</p>
          </li>

          {/* Gestión Jurídica */}
          <li className="area-card fade-up">
            <div className="area-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3>Gestión Jurídica</h3>
            <p>Elaboración, revisión y seguimiento de documentos legales, trámites administrativos y coordinación de procesos judiciales.</p>
          </li>

        </ul>
      </div>
    </section>
  )
}
