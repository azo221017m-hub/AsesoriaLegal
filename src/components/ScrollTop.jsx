export default function ScrollTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button id="scroll-top" aria-label="Volver al inicio" onClick={handleClick}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
