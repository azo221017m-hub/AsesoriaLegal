import { useState, useCallback } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <nav id="navbar" aria-label="Navegación principal">
      <div className="container">
        <a href="#hero" className="nav-brand">A. <span>Ortíz</span></a>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-links${isOpen ? ' open' : ''}`} role="list">
          <li><a href="#perfil" onClick={closeMenu}>Perfil</a></li>
          <li><a href="#areas" onClick={closeMenu}>Áreas</a></li>
          <li><a href="#diferenciales" onClick={closeMenu}>Diferenciadores</a></li>
          <li><a href="#contacto" className="nav-cta" onClick={closeMenu}>Consulta Gratuita</a></li>
        </ul>
      </div>
    </nav>
  )
}
