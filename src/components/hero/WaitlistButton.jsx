import { useCallback, useRef } from 'react'
import './WaitlistButton.css'

export default function WaitlistButton({ variant = 'nav' }) {
  const btnRef = useRef(null)

  const handleClick = useCallback(() => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = 'scale(0.96)'
    setTimeout(() => {
      btn.style.transform = 'scale(1)'
    }, 150)

    // Redirect to registration page for nav variant
    if (variant === 'nav') {
      window.location.href = 'https://unstop.com/o/gartJTQ?utm_medium=Share&utm_source=krithome97928&utm_campaign=Online_coding_challenge'
    }

    // Download PDF for CTA variant
    if (variant === 'cta') {
      const link = document.createElement('a')
      link.href = '/assets/Krithoathon-4.0(Final).pdf'
      link.download = 'Krithoathon-4.0(Final).pdf'
      link.setAttribute('download', 'Krithoathon-4.0(Final).pdf')
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      setTimeout(() => {
        document.body.removeChild(link)
      }, 100)
    }
  }, [variant])

  const isNav = variant === 'nav'
  const label = isNav ? 'Register' : 'Get Problem Statements'

  return (
    <button
      ref={btnRef}
      className={`btn-waitlist ${isNav ? 'btn-waitlist--nav' : 'btn-waitlist--cta'}`}
      onClick={handleClick}
      id={isNav ? 'navWaitlistBtn' : 'ctaWaitlistBtn'}
    >
      <span className="btn-waitlist__glow" />
      <span className={`btn-waitlist__inner ${isNav ? 'btn-waitlist__inner--nav' : 'btn-waitlist__inner--cta'}`}>
        {label}
      </span>
    </button>
  )
}
