import { useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook that applies IntersectionObserver to add 'visible' class
 * to elements with the 'fade-up' class for scroll-triggered animations.
 */
export function useFadeUpObserver(containerRef) {
  useEffect(() => {
    const container = containerRef?.current || document
    const elements = container.querySelectorAll('.fade-up')

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [containerRef])
}

/**
 * Custom hook for scroll-based navbar styling and scroll-to-top visibility.
 */
export function useScrollEffects() {
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      const navbar = document.getElementById('navbar')
      const scrollTop = document.getElementById('scroll-top')

      if (navbar) {
        navbar.classList.toggle('scrolled', y > 60)
      }
      if (scrollTop) {
        scrollTop.classList.toggle('visible', y > 400)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

/**
 * Returns a stable email-validation function.
 */
export function useEmailValidator() {
  return useCallback((email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }, [])
}

/**
 * Stores and provides a ref that persists across renders.
 */
export function useContainerRef() {
  return useRef(null)
}
