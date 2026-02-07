import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mic, Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
    const location = useLocation()
    const isDemo = location.pathname === '/demo'
    const [activeSection, setActiveSection] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            if (isDemo) return

            const sections = ['problem', 'solution', 'how', 'team', 'roadmap', 'investment']
            let current = ''

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = sectionId
                        break
                    }
                }
            }

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isDemo])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        setIsMenuOpen(false)
        if (isDemo) {
            window.location.href = `/#${sectionId}`
            return
        }
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navItems = [
        { id: 'problem', label: 'Muammo' },
        { id: 'solution', label: 'Yechim' },
        { id: 'how', label: 'Qanday ishlaydi?' },
        { id: 'team', label: 'Jamoa' },
        { id: 'roadmap', label: "Yo'l xaritasi" }
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    <div className="logo-icon">
                        <img src="/logo.png" alt="Dastyor AI" onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = '<svg viewBox="0 0 100 100" style="width:100%;height:100%"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9B5DE5"/><stop offset="100%" style="stop-color:#00D4FF"/></linearGradient></defs><rect width="100" height="100" rx="20" fill="#0A0A1A"/><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="url(#g)" stroke-width="3"/><g transform="translate(50,50)" stroke="url(#g)" stroke-width="3" fill="none"><rect x="-10" y="-22" width="20" height="28" rx="10"/><path d="M-16 8 L-16 14 Q-16 26 0 26 Q16 26 16 14 L16 8"/><line x1="0" y1="26" x2="0" y2="35"/><line x1="-8" y1="35" x2="8" y2="35" stroke-linecap="round"/></g></svg>'
                        }} />
                    </div>
                    <span className="gradient-text">Dastyor AI</span>
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                className={activeSection === item.id ? 'active' : ''}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/demo"
                            className={`nav-demo-btn ${location.pathname === '/demo' ? 'active' : ''}`}
                        >
                            Demo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
