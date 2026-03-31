import { useState, useEffect, useRef } from 'react'
import HeroContent from './HeroContent'
import BackgroundVideo from './BackgroundVideo'
import './Hero.css'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroOpacity = Math.max(1 - scrollY / 600, 0)
  const heroTranslate = scrollY * 0.25

  return (
    <section className="hero-section" ref={heroRef}>
      <BackgroundVideo />

      {/* Ambient color orbs */}
      <div className="ambient-orb ambient-orb--violet" />
      <div className="ambient-orb ambient-orb--cyan" />
      <div className="ambient-orb ambient-orb--fuchsia" />

      <main
        className="hero-main"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslate}px)`,
        }}
      >
        <HeroContent />
      </main>
    </section>
  )
}