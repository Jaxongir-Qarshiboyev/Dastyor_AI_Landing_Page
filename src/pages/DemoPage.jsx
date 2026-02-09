import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    Play,
    Download,
    ExternalLink,
    CheckCircle2,
    Cpu,
    Mic,
    Zap,
    Shield,
    Clock,
    Smartphone,
    Phone,
    PhoneOff,
    Volume2,
    VolumeX,
    Lightbulb,
    User
} from 'lucide-react'
import Navbar from '../components/Navbar'
import ChatBot from '../components/ChatBot'
import './DemoPage.css'

// Command scenarios for animation
const commandScenarios = [
    {
        id: 'light',
        command: 'Chiroqni yoq',
        icon: '💡',
        confidence: 92,
        visualType: 'light'
    },
    {
        id: 'volume_down',
        command: 'Ovozni pasaytir',
        icon: '🔉',
        confidence: 94,
        visualType: 'volume_down'
    },
    {
        id: 'volume_up',
        command: 'Ovozni ko\'tar',
        icon: '🔊',
        confidence: 89,
        visualType: 'volume_up'
    },
    {
        id: 'call',
        command: 'Qo\'ng\'iroqni o\'chir',
        icon: '📞',
        confidence: 96,
        visualType: 'call',
        callerName: 'Bobur Tog\'am'
    }
]

// PhoneAnimationDemo Component
function PhoneAnimationDemo() {
    const [currentScenario, setCurrentScenario] = useState(0)
    // Fazalar: idle, listening, recognized, executing, completed
    const [phase, setPhase] = useState('listening')
    const [volumeLevel, setVolumeLevel] = useState(50)
    const [lightOn, setLightOn] = useState(false)
    const [callActive, setCallActive] = useState(false)
    const [showCommand, setShowCommand] = useState(false)

    const scenario = commandScenarios[currentScenario]

    useEffect(() => {
        let timeouts = []

        // Reset states for new scenario
        setPhase('listening')
        setShowCommand(false)
        setLightOn(false)
        setVolumeLevel(50)

        // For call scenario, show incoming call during listening
        if (scenario.visualType === 'call') {
            setCallActive(true)
        } else {
            setCallActive(false)
        }

        // Phase 1: Listening (2.5s) - faqat "Tinglayapman...", ishonch yo'q, buyruq tanlanmagan
        timeouts.push(setTimeout(() => {
            // Phase 2: Recognized (1.5s) - buyruq nomi + ishonch + buyruq tanlanadi
            setPhase('recognized')
            setShowCommand(true)
        }, 2500))

        timeouts.push(setTimeout(() => {
            // Phase 3: Executing (1.5s) - vizual effekt + "Bajarilmoqda..."
            setPhase('executing')

            // Visual effects based on command type
            if (scenario.visualType === 'light') {
                setLightOn(true)
            } else if (scenario.visualType === 'volume_up') {
                setVolumeLevel(80)
            } else if (scenario.visualType === 'volume_down') {
                setVolumeLevel(20)
            } else if (scenario.visualType === 'call') {
                setCallActive(false)
            }
        }, 4000))

        timeouts.push(setTimeout(() => {
            // Phase 4: Completed (2s) - "Bajarildi ✓"
            setPhase('completed')
        }, 5500))

        timeouts.push(setTimeout(() => {
            // Move to next scenario
            setCurrentScenario((prev) => (prev + 1) % commandScenarios.length)
        }, 8000))

        return () => timeouts.forEach(t => clearTimeout(t))
    }, [currentScenario, scenario.visualType])

    return (
        <div className="prototype-preview">
            <div className={`phone-frame ${lightOn ? 'light-on' : ''}`}>
                <div className="phone-notch"></div>
                <div className="phone-content">
                    {/* App Header with Logo */}
                    <div className="app-demo-header">
                        <img src="/logo.png" alt="Dastyor AI" className="app-logo-icon" />
                        <span>Dastyor AI</span>
                    </div>

                    {/* Incoming Call Overlay - faqat call stsenari va callActive */}
                    {scenario.visualType === 'call' && callActive && (
                        <div className="incoming-call-overlay">
                            <div className="caller-avatar">
                                <User size={40} />
                            </div>
                            <div className="caller-name">{scenario.callerName}</div>
                            <div className="call-status-text">Kiruvchi qo'ng'iroq...</div>
                            <div className="call-actions">
                                <div className="call-btn decline">
                                    <PhoneOff size={24} />
                                </div>
                                <div className="call-btn accept">
                                    <Phone size={24} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Waveform Animation - faqat listening fazasida aktiv */}
                    <div className={`app-demo-waveform ${phase === 'listening' ? 'active' : ''}`}>
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="demo-wave-bar"
                                style={{
                                    animationDelay: `${i * 0.08}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Status Display */}
                    <div className="app-demo-status">
                        <span className={`status-text ${phase}`}>
                            {phase === 'listening' && 'Tinglayapman...'}
                            {phase === 'recognized' && `"${scenario.command}"`}
                            {phase === 'executing' && 'Bajarilmoqda...'}
                            {phase === 'completed' && 'Bajarildi ✓'}
                        </span>

                        {/* Ishonch faqat recognized, executing, completed fazalarida ko'rsatiladi */}
                        {phase !== 'listening' && (
                            <span className="status-confidence">
                                Ishonch: {scenario.confidence}%
                            </span>
                        )}
                    </div>

                    {/* Visual Feedback Area - faqat listening tugagandan keyin ko'rsatiladi */}
                    <div className="visual-feedback">
                        {/* Light Visualization - faqat recognized/executing/completed */}
                        {scenario.visualType === 'light' && phase !== 'listening' && (
                            <div className={`light-visual ${lightOn ? 'on' : ''}`}>
                                <Lightbulb size={48} />
                                <span>{lightOn ? 'Yoqilgan' : 'O\'chirilgan'}</span>
                            </div>
                        )}

                        {/* Call Rejected Visualization */}
                        {scenario.visualType === 'call' && !callActive && (phase === 'executing' || phase === 'completed') && (
                            <div className="call-rejected-visual">
                                <PhoneOff size={32} />
                                <span>Qo'ng'iroq rad etildi</span>
                            </div>
                        )}
                    </div>

                    {/* Volume Bar - o'ng burchakda, ingichka, vertikal */}
                    {(scenario.visualType === 'volume_up' || scenario.visualType === 'volume_down') && (
                        <div className={`volume-indicator-right ${phase !== 'listening' ? 'visible' : ''}`}>
                            <div className="volume-bar-thin">
                                <div
                                    className="volume-bar-thin-fill"
                                    style={{ height: `${volumeLevel}%` }}
                                />
                            </div>
                            <span className="volume-percent-small">{volumeLevel}%</span>
                        </div>
                    )}

                    {/* Command Cards - faqat showCommand true bo'lganda tanlangan */}
                    <div className="app-demo-commands">
                        {commandScenarios.map((cmd, idx) => (
                            <div
                                key={cmd.id}
                                className={`demo-command ${showCommand && idx === currentScenario ? 'active' : ''}`}
                            >
                                <span>{cmd.icon}</span>
                                <span>{cmd.command}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


function DemoPage() {
    return (
        <div className="demo-page">
            <Navbar />

            {/* Demo Header */}
            <section className="demo-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} />
                        Bosh sahifaga
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>
                            <span className="gradient-text">Demo</span>
                        </h1>
                        <p className="demo-subtitle">
                            Dastyor AI qanday ishlashini video orqali ko'ring va
                            prototipni sinab ko'ring
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Video Section */}
            <section className="demo-video">
                <div className="container">
                    <motion.div
                        className="video-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Dastyor AI - Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="video-actions">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <Play size={20} />
                                YouTube'da Ko'rish
                            </a>
                            <a href="https://github.com/Jaxongir-Qarshiboyev/Dastyor_AI_Landing_Page/releases/download/v1.0.0-beta/Dastyor-AI-v1.0.0-beta.apk" className="btn btn-secondary" download>
                                <Download size={20} />
                                APK Yuklab Olish
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Description */}
            <section className="demo-description">
                <div className="container">
                    <div className="description-grid">
                        <motion.div
                            className="description-card main"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Video Tavsifi</h2>
                            <p>
                                Bu demo videoda Dastyor AI ilovasining to'liq ishlash
                                jarayonini ko'rishingiz mumkin:
                            </p>

                            <div className="video-chapters">
                                <div className="chapter">
                                    <span className="chapter-time">0:00</span>
                                    <span className="chapter-title">Kirish va ilovani ochish</span>
                                </div>
                                <div className="chapter">
                                    <span className="chapter-time">0:30</span>
                                    <span className="chapter-title">Ovoz namunalarini yozish (5 ta)</span>
                                </div>
                                <div className="chapter">
                                    <span className="chapter-time">1:15</span>
                                    <span className="chapter-title">Buyruqlarni sinab ko'rish</span>
                                </div>
                                <div className="chapter">
                                    <span className="chapter-time">2:00</span>
                                    <span className="chapter-title">Background service ishga tushirish</span>
                                </div>
                                <div className="chapter">
                                    <span className="chapter-time">2:45</span>
                                    <span className="chapter-title">Turli buyruqlarni bajarish</span>
                                </div>
                                <div className="chapter">
                                    <span className="chapter-time">3:30</span>
                                    <span className="chapter-title">Xulosa va natijalar</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="description-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>Nimalar Ko'rsatiladi?</h3>
                            <ul className="feature-list">
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Ovoz yozish va saqlash jarayoni</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Real-time ovoz tanish</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>9 ta buyruqni bajarish</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Background service ishlashi</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Waveform vizualizatsiya</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={20} />
                                    <span>Sozlamalar va threshold</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Prototype Section */}
            <section className="prototype-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Prototip</span>
                        </h2>

                        <div className="prototype-grid">
                            <div className="prototype-info">
                                <h3>Ishlayotgan Prototip</h3>
                                <p>
                                    Dastyor AI MVP versiyasi tayyor va Android qurilmalarida
                                    sinab ko'rish mumkin. Ilova to'liq offline ishlaydi va
                                    barcha asosiy funksiyalar mavjud.
                                </p>

                                <div className="prototype-stats">
                                    <div className="proto-stat">
                                        <Cpu size={24} />
                                        <div>
                                            <span className="proto-value">92%</span>
                                            <span className="proto-label">Aniqlik</span>
                                        </div>
                                    </div>
                                    <div className="proto-stat">
                                        <Clock size={24} />
                                        <div>
                                            <span className="proto-value">&lt;500ms</span>
                                            <span className="proto-label">Javob vaqti</span>
                                        </div>
                                    </div>
                                    <div className="proto-stat">
                                        <Mic size={24} />
                                        <div>
                                            <span className="proto-value">9</span>
                                            <span className="proto-label">Buyruqlar</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="prototype-actions">
                                    <a href="https://github.com/Jaxongir-Qarshiboyev/Dastyor_AI_Landing_Page/releases/download/v1.0.0-beta/Dastyor-AI-v1.0.0-beta.apk" className="btn btn-primary" download>
                                        <Download size={20} />
                                        APK Yuklab Olish
                                    </a>
                                    <a href="https://github.com/Jaxongir-Qarshiboyev" target="_blank" rel="noopener" className="btn btn-secondary">
                                        <ExternalLink size={20} />
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <PhoneAnimationDemo />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Details */}
            <section className="tech-details">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Texnik Ma'lumotlar</span>
                        </h2>

                        <div className="tech-grid">
                            <div className="tech-card">
                                <Cpu size={32} />
                                <h3>Algoritmlar</h3>
                                <ul>
                                    <li>MFCC (13 koeffitsient)</li>
                                    <li>DTW (Dynamic Time Warping)</li>
                                    <li>Cosine Similarity</li>
                                    <li>Ensemble Method</li>
                                </ul>
                            </div>

                            <div className="tech-card">
                                <Zap size={32} />
                                <h3>Optimallashtirish</h3>
                                <ul>
                                    <li>Parallel Processing (Coroutines)</li>
                                    <li>Radix-2 FFT</li>
                                    <li>Lazy Loading</li>
                                    <li>Adaptive Threshold</li>
                                </ul>
                            </div>

                            <div className="tech-card">
                                <Shield size={32} />
                                <h3>Xavfsizlik</h3>
                                <ul>
                                    <li>100% Offline</li>
                                    <li>Lokal saqlash</li>
                                    <li>No cloud dependency</li>
                                    <li>Privacy-first</li>
                                </ul>
                            </div>

                            <div className="tech-card">
                                <Smartphone size={32} />
                                <h3>Platforma</h3>
                                <ul>
                                    <li>Android 7.0+</li>
                                    <li>Kotlin 1.9</li>
                                    <li>Material Design 3</li>
                                    <li>MVVM Architecture</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back to Home CTA */}
            <section className="demo-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Loyiha Haqida Ko'proq Bilib Oling</h2>
                        <p>Muammo, yechim, jamoa va yo'l xaritasi haqida batafsil</p>
                        <Link to="/" className="btn btn-primary">
                            <ArrowLeft size={20} />
                            Bosh Sahifaga Qaytish
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-bottom">
                        <p>© 2026 Dastyor AI. Barcha huquqlar himoyalangan.</p>
                    </div>
                </div>
            </footer>

            {/* ChatBot */}
            <ChatBot />
        </div>
    )
}

export default DemoPage
