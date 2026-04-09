import { useState, useCallback } from 'react'
import { useEmailValidator } from '../hooks/useEffects'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    area: '',
    mensaje: '',
  })
  const [alert, setAlert] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const isValidEmail = useEmailValidator()

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const showAlert = useCallback((msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      const { nombre, email, area, mensaje } = formData

      if (!nombre || !email || !area || !mensaje) {
        showAlert('Por favor completa todos los campos requeridos.', 'error')
        return
      }

      if (!isValidEmail(email)) {
        showAlert('Ingresa un correo electrónico válido.', 'error')
        return
      }

      setSubmitting(true)

      // Simulate sending (replace with actual endpoint)
      setTimeout(() => {
        showAlert('¡Mensaje enviado! Me pondré en contacto contigo a la brevedad.', 'success')
        setFormData({ nombre: '', email: '', telefono: '', area: '', mensaje: '' })
        setSubmitting(false)
      }, 1600)
    },
    [formData, isValidEmail, showAlert]
  )

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">Primer Paso</p>
          <h2 className="section-title" id="contacto-heading">Comencemos a Trabajar Juntos</h2>
          <div className="divider divider--center"></div>
        </div>

        <div className="contact-grid">

          {/* Left: info + WhatsApp */}
          <div className="contact-info">
            <h3>¿Tienes una duda legal?</h3>
            <p>
              La primera consulta es gratuita. Escríbeme por WhatsApp o llena el formulario y me comunicaré contigo en menos de 24 horas para analizar tu situación sin compromisos.
            </p>

            <ul className="contact-methods" role="list">
              <li className="contact-method">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="contact-method">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contacto@aortizderecho.mx</span>
              </li>
              <li className="contact-method">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ciudad de México, México</span>
              </li>
            </ul>

            <a
              href="https://wa.me/5215512345678?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20jur%C3%ADdica."
              className="wa-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversación de WhatsApp con Lic. Alison Ortíz"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div>
            <form className="contact-form" noValidate aria-label="Formulario de contacto" onSubmit={handleSubmit}>
              {alert && (
                <div className={`form-alert form-alert--${alert.type}`}>
                  {alert.msg}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo <span aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                    autoComplete="name"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico <span aria-hidden="true">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@correo.com"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+52 55 0000-0000"
                    autoComplete="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Área de interés <span aria-hidden="true">*</span></label>
                  <select id="area" name="area" required value={formData.area} onChange={handleChange}>
                    <option value="" disabled>Selecciona un área</option>
                    <option value="familiar">Derecho Familiar</option>
                    <option value="civil">Derecho Civil</option>
                    <option value="asesoria">Asesoría Legal</option>
                    <option value="gestion">Gestión Jurídica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Cuéntame tu caso <span aria-hidden="true">*</span></label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Describe brevemente tu situación jurídica para poder orientarte mejor…"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
                {submitting ? 'Enviando…' : 'Enviar Consulta'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
