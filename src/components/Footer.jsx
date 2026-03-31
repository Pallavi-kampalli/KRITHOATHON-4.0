import './Footer.css'

const coordinators = [
  { name: 'Kushwanth', phone: '9866333779' },
  { name: 'Akhila', phone: '8712197522' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-accent" />
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-subtitle">
              Reach out for queries, participation, or event support.
            </p>
            <a className="footer-email" href="mailto:krithomedhvnrvjiet@gmail.com">
              krithomedhvnrvjiet@gmail.com
            </a>
            <div className="footer-coordinators">
              <p className="footer-label">Student Coordinators</p>
              <ul className="footer-list">
                {coordinators.map((person) => (
                  <li key={person.name}>
                    <span className="footer-name">{person.name}</span>
                    <span className="footer-phone">+91 {person.phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-logo-card">
              <img
                src="/assets/vnrvjiet.png"
                alt="VNRVJIET logo"
                className="footer-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
