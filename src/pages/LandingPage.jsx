import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Mic, Wifi, WifiOff, Shield, Volume2, Brain, Zap, Play,
    CheckCircle2, ArrowRight, Globe, Target, PieChart, Users,
    Star, Rocket, Clock, Cpu, Code2, Lightbulb, Layers,
    DollarSign, Award, TrendingUp, Download, Github, Linkedin,
    Smartphone, Lock, Timer, Database, Activity, Mail
} from 'lucide-react'
import Navbar from '../components/Navbar'
import ChatBot from '../components/ChatBot'
import './LandingPage.css'

function LandingPage() {

    return (
        <div className="landing-page">
            <Navbar />
            {/* HERO SECTION */}
            <section className="hero">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero-badge">
                            <WifiOff size={16} />
                            <span>100% Offline Ishlaydi</span>
                        </div>

                        <h1>
                            <span className="gradient-text italic">Dastyor AI</span>
                            <br />
                            O'zbek Ovozli Yordamchi
                        </h1>

                        <p className="hero-description">
                            O'zbekistondagi <strong>birinchi offline ovozli assistent</strong>. Internetga
                            bog'lanmasdan, o'z ovozingiz bilan telefoningizni to'liq boshqaring.
                            MFCC va DTW algoritmlari asosida <strong>92%+ aniqlik</strong> bilan ishlaydi.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">92%</span>
                                <span className="stat-label">Aniqlik</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">&lt;500ms</span>
                                <span className="stat-label">Javob vaqti</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">9+</span>
                                <span className="stat-label">Buyruqlar</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">0 MB</span>
                                <span className="stat-label">Internet</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <Link to="/demo" className="btn btn-primary btn-large">
                                <Play size={20} />
                                Demo ko'rish
                            </Link>
                            <a
                                href="https://github.com/Jaxongir-Qarshiboyev/Dastyor_AI_Landing_Page/releases/download/v1.0.0-beta/Dastyor-AI-v1.0.0-beta.apk"
                                className="btn btn-secondary btn-large"
                                download
                            >
                                <Download size={20} />
                                APK Yuklab Olish
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="app-header">
                                    <img src="/logo.png" alt="Dastyor AI" className="app-logo" />
                                    <span>Dastyor AI</span>
                                </div>
                                <div className="waveform">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="wave-bar"
                                            style={{
                                                height: `${20 + Math.random() * 60}%`,
                                                animationDelay: `${i * 0.05}s`
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="command-display">
                                    <span className="command-text">"Chiroqni yoq"</span>
                                    <span className="command-status">✓ Buyruq bajarildi</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PROBLEM SECTION - DETAILED */}
            <section className="problem" id="problem">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Muammo</span>
                            <p className="section-subtitle">Mavjud ovozli yordamchilarning cheklovlari</p>
                        </h2>

                        <div className="problem-grid">
                            <div className="problem-card">
                                <div className="problem-icon">
                                    <WifiOff size={40} />
                                </div>
                                <h3>Internet Bog'liqligi</h3>
                                <p>
                                    Google Assistant, Siri, Alexa kabi yordamchilar <strong>doimiy
                                        internet talab qiladi</strong>. O'zbekistonning 45% dan ortiq hududlarida
                                    internet tezligi past yoki umuman mavjud emas. Qishloq joylarda,
                                    metroda, tunnellarda va internet buzilgan paytlarda bu yordamchilar
                                    <strong>mutlaqo ishlamaydi</strong>.
                                </p>
                                <ul className="problem-details">
                                    <li>Har bir so'rov uchun 50-200KB traffic sarflanadi</li>
                                    <li>Javob vaqti 1-3 sekundgacha cho'ziladi</li>
                                    <li>Server nosozligida xizmat to'xtaydi</li>
                                </ul>
                            </div>

                            <div className="problem-card">
                                <div className="problem-icon">
                                    <Volume2 size={40} />
                                </div>
                                <h3>O'zbek Tilini Qo'llab-Quvvatlamaslik</h3>
                                <p>
                                    Mavjud ovozli yordamchilar <strong>o'zbek tilini tushunmaydi</strong>.
                                    36 million aholili O'zbekistonda foydalanuvchilar ingliz yoki rus
                                    tilida gapirishi kerak - bu esa ko'pchilik uchun <strong>noqulay va
                                        tabiiy emas</strong>.
                                </p>
                                <ul className="problem-details">
                                    <li>Google Assistant - 70+ til, o'zbek yo'q</li>
                                    <li>Siri - 40+ til, o'zbek yo'q</li>
                                    <li>Alexa - 10+ til, o'zbek yo'q</li>
                                    <li>Yandex Alice - rus tili, o'zbek yo'q</li>
                                </ul>
                            </div>

                            <div className="problem-card">
                                <div className="problem-icon">
                                    <Shield size={40} />
                                </div>
                                <h3>Maxfiylik Xavflari</h3>
                                <p>
                                    Bulutga asoslangan yordamchilar sizning <strong>barcha ovozingizni
                                        serverga yuboradi</strong> va saqlaydi. Amazon, Google, Apple kompaniyalari
                                    sizning shaxsiy suhbatlaringizni <strong>tahlil qiladi</strong> va
                                    reklama maqsadlarida ishlatishi mumkin.
                                </p>
                                <ul className="problem-details">
                                    <li>Ovoz yozuvlari bulutda saqlanadi</li>
                                    <li>3-chi tomon kompaniyalar tahlil qiladi</li>
                                    <li>Data breach xavfi mavjud</li>
                                    <li>Shaxsiy ma'lumotlar xavf ostida</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SOLUTION SECTION - DETAILED */}
            <section className="solution" id="solution">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Yechim</span>
                            <p className="section-subtitle">Dastyor AI - Innovatsion yondashuv</p>
                        </h2>

                        <div className="solution-content">
                            <div className="solution-text">
                                <h3>Audio Fingerprinting Texnologiyasi</h3>
                                <p>
                                    Biz an'anaviy <strong>Speech-to-Text o'rniga Audio Fingerprinting</strong>
                                    texnologiyasidan foydalanamiz. Bu usul ovozni matnga aylantirishni talab qilmaydi -
                                    buning o'rniga ovozning <strong>unikal "barmoq izini"</strong> (MFCC koeffitsientlari)
                                    chiqarib, uni oldindan yozilgan namunalar bilan solishtiradi.
                                </p>

                                <div className="solution-tech-details">
                                    <h4>Qanday ishlaydi:</h4>
                                    <ol>
                                        <li><strong>Enrollment:</strong> Foydalanuvchi har bir buyruqni (masalan, "Chiroqni yoq") 5 marta takrorlaydi</li>
                                        <li><strong>MFCC Extraction:</strong> Har bir yozuvdan 13 ta Mel-Frequency Cepstral Coefficients chiqariladi</li>
                                        <li><strong>Template yaratish:</strong> 5 ta yozuvdan o'rtacha template hosil qilinadi</li>
                                        <li><strong>Recognition:</strong> Yangi ovoz kiritilganda, uni barcha templatelar bilan solishtiramiz</li>
                                        <li><strong>Decision:</strong> Eng yaqin template 0.75+ o'xshashlik ko'rsatsa, buyruq taniladi</li>
                                    </ol>
                                </div>

                                <ul className="solution-features">
                                    <li>
                                        <CheckCircle2 className="feature-icon" />
                                        <span><strong>100% Offline</strong> - Internet talab qilinmaydi, barcha hisob-kitoblar qurilmada</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 className="feature-icon" />
                                        <span><strong>O'zbek tili</strong> - Ona tilida erkin gapiring, til modellari kerak emas</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 className="feature-icon" />
                                        <span><strong>Shaxsiylashtirilgan</strong> - Sizning ovozingiz, sizning buyruqlaringiz, faqat siz ishlatishingiz mumkin</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 className="feature-icon" />
                                        <span><strong>Maxfiy</strong> - Ma'lumotlar telefondan chiqmaydi, server yo'q</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 className="feature-icon" />
                                        <span><strong>Tez</strong> - 300-500ms javob vaqti, server kechikishi yo'q</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 className="feature-icon" />
                                        <span><strong>Kam resurs</strong> - AI/ML modellari yuklamasdan ishlaydi, batareya tejaydi</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="solution-visual">
                                <div className="comparison-card">
                                    <div className="comparison-item old">
                                        <h4>❌ An'anaviy Usul (STT)</h4>
                                        <div className="comparison-flow">
                                            <span>Ovoz</span>
                                            <ArrowRight size={16} />
                                            <span>Internet</span>
                                            <ArrowRight size={16} />
                                            <span>Server</span>
                                            <ArrowRight size={16} />
                                            <span>Matn</span>
                                            <ArrowRight size={16} />
                                            <span>NLP</span>
                                            <ArrowRight size={16} />
                                            <span>Buyruq</span>
                                        </div>
                                        <p>⚠️ Internet kerak, sekin (1-3s), maxfiylik yo'q, o'zbek tili yo'q</p>
                                    </div>

                                    <div className="comparison-item new">
                                        <h4>✅ Dastyor AI (Audio Fingerprint)</h4>
                                        <div className="comparison-flow">
                                            <span>Ovoz</span>
                                            <ArrowRight size={16} />
                                            <span>MFCC</span>
                                            <ArrowRight size={16} />
                                            <span>DTW Match</span>
                                            <ArrowRight size={16} />
                                            <span>Buyruq</span>
                                        </div>
                                        <p>✅ Offline, tez (300ms), xavfsiz, o'zbek tilida</p>
                                    </div>
                                </div>

                                <div className="algorithm-showcase">
                                    <h4>Ensemble Algorithm</h4>
                                    <p>4 ta algoritmni birlashtirib, eng yuqori aniqlikka erishamiz:</p>
                                    <div className="algo-badges">
                                        <span className="algo-badge">DTW (Dynamic Time Warping)</span>
                                        <span className="algo-badge">Cosine Similarity</span>
                                        <span className="algo-badge">Euclidean Distance</span>
                                        <span className="algo-badge">Pearson Correlation</span>
                                    </div>
                                    <p className="algo-result">Yakka algoritmlar: 78-85% → Ensemble: <strong>92%+ aniqlik</strong></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MARKET OPPORTUNITY - TAM SAM SOM */}
            <section className="market" id="market">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Bozor Imkoniyati</span>
                            <p className="section-subtitle">TAM / SAM / SOM tahlili</p>
                        </h2>

                        <div className="market-grid">
                            <div className="market-card tam">
                                <div className="market-circle">
                                    <Globe size={40} />
                                </div>
                                <div className="market-info">
                                    <span className="market-label">TAM</span>
                                    <span className="market-value">$31.8B</span>
                                    <span className="market-desc">Global Voice Assistant Market (2025)</span>
                                </div>
                                <p>Dunyo bo'ylab ovozli yordamchi bozori yiliga <strong>17.2% CAGR</strong> bilan o'smoqda.
                                    2030-yilga kelib $84.2B ga yetishi prognoz qilinmoqda.</p>
                            </div>

                            <div className="market-card sam">
                                <div className="market-circle">
                                    <PieChart size={40} />
                                </div>
                                <div className="market-info">
                                    <span className="market-label">SAM</span>
                                    <span className="market-value">$850M</span>
                                    <span className="market-desc">CIS + Markaziy Osiyo Bozori</span>
                                </div>
                                <p>Markaziy Osiyo va MDH mamlakatlari - <strong>150M+ smartphone foydalanuvchilari</strong>.
                                    O'zbek, qozoq, qirg'iz, tojik tillari - offline yechim talab qiladi.</p>
                            </div>

                            <div className="market-card som">
                                <div className="market-circle">
                                    <Target size={40} />
                                </div>
                                <div className="market-info">
                                    <span className="market-label">SOM</span>
                                    <span className="market-value">$15M</span>
                                    <span className="market-desc">O'zbekiston Bozori (Year 3)</span>
                                </div>
                                <p><strong>36M+ aholi</strong>, 25M+ smartphone, tez rivojlanayotgan tech ecosystem.
                                    Hech qanday mahalliy raqobatchi mavjud emas!</p>
                            </div>
                        </div>

                        <div className="market-stats">
                            <div className="market-stat">
                                <span className="stat-number">36M+</span>
                                <span className="stat-text">O'zbekiston Aholisi</span>
                            </div>
                            <div className="market-stat">
                                <span className="stat-number">85%</span>
                                <span className="stat-text">Smartphone Penetration</span>
                            </div>
                            <div className="market-stat">
                                <span className="stat-number">45%</span>
                                <span className="stat-text">Offline Ehtiyoj (qishloq + past internet)</span>
                            </div>
                            <div className="market-stat">
                                <span className="stat-number">0</span>
                                <span className="stat-text">O'zbek Voice AI Raqobatchi</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* COMPETITION ANALYSIS - TABLE FORMAT */}
            <section className="competition" id="competition">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Raqobat Tahlili</span>
                            <p className="section-subtitle">Nima uchun biz yagona yechimmiz</p>
                        </h2>

                        <div className="competition-table-container">
                            <table className="competition-table">
                                <thead>
                                    <tr>
                                        <th>Xususiyat</th>
                                        <th className="highlight-col">
                                            <img src="/logo.png" alt="Dastyor AI" className="table-logo" />
                                            Dastyor AI
                                        </th>
                                        <th>Samsung Bixby</th>
                                        <th>Siri</th>
                                        <th>Alexa</th>
                                        <th>Yandex Alice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>O'zbek tili qo'llab-quvvati</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> To'liq</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Offline ishlash</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> 100%</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                        <td><span className="partial">◐</span> Cheklangan</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Telefon nazorati</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> To'liq</td>
                                        <td><CheckCircle2 className="check" /> Ha</td>
                                        <td><CheckCircle2 className="check" /> Ha</td>
                                        <td><span className="partial">◐</span> Cheklangan</td>
                                        <td><CheckCircle2 className="check" /> Ha</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Voice biometrik xavfsizlik</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> Ha</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                        <td><CheckCircle2 className="check" /> Ha</td>
                                        <td><span className="partial">◐</span> Limited</td>
                                        <td><span className="cross">✗</span> Yo'q</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Ma'lumotlar maxfiyligi</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> 100% Local</td>
                                        <td><span className="cross">✗</span> Cloud</td>
                                        <td><span className="partial">◐</span> Mixed</td>
                                        <td><span className="cross">✗</span> Cloud</td>
                                        <td><span className="cross">✗</span> Cloud</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Shaxsiylashtirish</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> To'liq</td>
                                        <td><span className="partial">◐</span> Limited</td>
                                        <td><span className="partial">◐</span> Limited</td>
                                        <td><span className="partial">◐</span> Limited</td>
                                        <td><span className="partial">◐</span> Limited</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Javob vaqti</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> &lt;500ms</td>
                                        <td><span className="partial">◐</span> 1-3s</td>
                                        <td><span className="partial">◐</span> 1-2s</td>
                                        <td><span className="partial">◐</span> 1-3s</td>
                                        <td><span className="partial">◐</span> 1-2s</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Internet traffic</strong></td>
                                        <td className="highlight-col"><CheckCircle2 className="check" /> 0 MB</td>
                                        <td><span className="cross">✗</span> 50-200KB/so'rov</td>
                                        <td><span className="cross">✗</span> 30-150KB/so'rov</td>
                                        <td><span className="cross">✗</span> 50-200KB/so'rov</td>
                                        <td><span className="cross">✗</span> 40-180KB/so'rov</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="competition-advantages">
                            <h3>Bizning Asosiy Afzalliklarimiz</h3>
                            <div className="advantages-grid">
                                <div className="advantage-item">
                                    <CheckCircle2 size={24} />
                                    <span><strong>Yagona O'zbek tilida</strong> ishlaydigan offline voice assistant</span>
                                </div>
                                <div className="advantage-item">
                                    <CheckCircle2 size={24} />
                                    <span><strong>100% Offline</strong> - hech qanday internet talab etilmaydi</span>
                                </div>
                                <div className="advantage-item">
                                    <CheckCircle2 size={24} />
                                    <span><strong>100% Private</strong> - ma'lumotlar qurilmadan chiqmaydi</span>
                                </div>
                                <div className="advantage-item">
                                    <CheckCircle2 size={24} />
                                    <span><strong>Voice Biometric</strong> - faqat ovoz egasi foydalanadi</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="how-it-works" id="how">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Qanday Ishlaydi?</span>
                            <p className="section-subtitle">4 bosqichda ovozli boshqaruv</p>
                        </h2>

                        <div className="steps-grid">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <div className="step-icon">
                                    <Mic size={32} />
                                </div>
                                <h3>Buyruq Yozish</h3>
                                <p>
                                    Har bir buyruq uchun 5 ta ovoz namunasi yozib olasiz.
                                    Masalan: "Chiroqni yoq" ni 5 marta turli ohangda takrorlaysiz.
                                    Bu shaxsiy ovoz "templateingiz"ni yaratadi.
                                </p>
                            </div>

                            <div className="step-card">
                                <div className="step-number">2</div>
                                <div className="step-icon">
                                    <Cpu size={32} />
                                </div>
                                <h3>MFCC Ajratish</h3>
                                <p>
                                    Ovozdan <strong>13 ta MFCC</strong> (Mel-Frequency Cepstral Coefficients)
                                    xususiyatlari chiqariladi. Bu ovozning "barmoq izi"dir - har bir
                                    kishi uchun unikal bo'ladi.
                                </p>
                            </div>

                            <div className="step-card">
                                <div className="step-number">3</div>
                                <div className="step-icon">
                                    <Code2 size={32} />
                                </div>
                                <h3>Ensemble Matching</h3>
                                <p>
                                    <strong>DTW, Cosine, Euclidean, Correlation</strong> - 4 ta algoritm
                                    birgalikda ishlaydi. Weighted voting orqali eng ishonchli
                                    natija olinadi: <strong>92%+ aniqlik</strong>
                                </p>
                            </div>

                            <div className="step-card">
                                <div className="step-number">4</div>
                                <div className="step-icon">
                                    <Zap size={32} />
                                </div>
                                <h3>Buyruq Bajarish</h3>
                                <p>
                                    Tanilgan buyruq <strong>500ms ichida</strong> avtomatik bajariladi:
                                    chiroq yonadi, ovoz pasayadi, soat ko'rsatiladi, qo'ng'iroq
                                    qilinadi va boshqalar.
                                </p>
                            </div>
                        </div>

                        <div className="tech-stack">
                            <h3>Texnologiyalar Steki</h3>
                            <div className="tech-tags">
                                <span className="tech-tag">Kotlin</span>
                                <span className="tech-tag">Android SDK</span>
                                <span className="tech-tag">MFCC</span>
                                <span className="tech-tag">DTW Algorithm</span>
                                <span className="tech-tag">Coroutines</span>
                                <span className="tech-tag">MVVM</span>
                                <span className="tech-tag">Material 3</span>
                                <span className="tech-tag">Foreground Service</span>
                                <span className="tech-tag">Room Database</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BUSINESS MODEL - DETAILED */}
            <section className="business-model" id="business">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Biznes Model</span>
                            <p className="section-subtitle">Ko'p qirrali daromad strategiyasi</p>
                        </h2>

                        <div className="business-grid">
                            <div className="business-card primary-model">
                                <DollarSign size={40} />
                                <h3>Freemium B2C Model</h3>
                                <div className="pricing-tiers">
                                    <div className="tier">
                                        <span className="tier-name">Free</span>
                                        <span className="tier-price">$0</span>
                                        <ul>
                                            <li>3 ta buyruq</li>
                                            <li>Asosiy funksiyalar</li>
                                            <li>Community support</li>
                                        </ul>
                                    </div>
                                    <div className="tier featured">
                                        <span className="tier-name">Premium</span>
                                        <span className="tier-price">$2.99/oy</span>
                                        <ul>
                                            <li>Cheksiz buyruqlar</li>
                                            <li>Widget & TTS</li>
                                            <li>Priority support</li>
                                            <li>Advanced analytics</li>
                                        </ul>
                                    </div>
                                    <div className="tier">
                                        <span className="tier-name">Pro</span>
                                        <span className="tier-price">$4.99/oy</span>
                                        <ul>
                                            <li>Barcha Premium</li>
                                            <li>Custom hotword</li>
                                            <li>API access</li>
                                            <li>White-label option</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="business-card">
                                <Layers size={40} />
                                <h3>B2B Licensing</h3>
                                <p>Korporativ mijozlar uchun litsenziyalash:</p>
                                <ul>
                                    <li><strong>Smart Home:</strong> Artel, Haier, Samsung O'zbekiston</li>
                                    <li><strong>IoT:</strong> Texnika ishlab chiqaruvchilar</li>
                                    <li><strong>Avtomobil:</strong> Chevrolet, BYD dilerlar</li>
                                    <li><strong>Telecom:</strong> Beeline, Ucell, Uzmobile</li>
                                </ul>
                                <p className="revenue-estimate">Taxminiy: $5,000 - $50,000/yillik litsenziya</p>
                            </div>

                            <div className="business-card">
                                <Code2 size={40} />
                                <h3>SDK/API Monetization</h3>
                                <p>Dasturchilar uchun integratsiya vositalari:</p>
                                <ul>
                                    <li>Voice Recognition SDK</li>
                                    <li>REST API endpoint</li>
                                    <li>Custom model training</li>
                                    <li>White-label yechimlar</li>
                                </ul>
                                <p className="revenue-estimate">Pay-per-use: $0.001/so'rov yoki $500/oy flat</p>
                            </div>
                        </div>

                        <div className="revenue-projection">
                            <h3>Daromad Prognozi (Conservative)</h3>
                            <div className="revenue-chart">
                                <div className="chart-container">
                                    <div className="chart-bar year1">
                                        <div className="bar-inner" style={{ height: '60px' }}>
                                            <span className="bar-amount">$60K</span>
                                        </div>
                                        <span className="bar-year">1-yil</span>
                                    </div>
                                    <div className="chart-bar year2">
                                        <div className="bar-inner" style={{ height: '120px' }}>
                                            <span className="bar-amount">$350K</span>
                                        </div>
                                        <span className="bar-year">2-yil</span>
                                    </div>
                                    <div className="chart-bar year3">
                                        <div className="bar-inner" style={{ height: '180px' }}>
                                            <span className="bar-amount">$1.5M</span>
                                        </div>
                                        <span className="bar-year">3-yil</span>
                                    </div>
                                    <div className="chart-bar year4">
                                        <div className="bar-inner" style={{ height: '240px' }}>
                                            <span className="bar-amount">$4M</span>
                                        </div>
                                        <span className="bar-year">4-yil</span>
                                    </div>
                                </div>
                                <div className="chart-legend">
                                    <p className="legend-text">Konservativ prognoz: B2C (Freemium) + B2B (Litsenziya) + SDK/API daromadlari</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="team" id="team">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Jamoa</span>
                            <p className="section-subtitle">Tajribali va innovatsion professional jamoa</p>
                        </h2>

                        <div className="team-grid">
                            {/* Aziza - Team Lead */}
                            <div className="team-card featured">
                                <div className="team-experience">2+ yil tajriba</div>
                                <div className="team-avatar">
                                    <img src="/team/aziza.png" alt="Abdurasulova Aziza" />
                                </div>
                                <h3>Abdurasulova Aziza</h3>
                                <p className="team-role">Team Lead • CEO • Marketing • Design</p>
                                <div className="team-skills-list">
                                    <span>Team Leadership</span>
                                    <span>Product Strategy</span>
                                    <span>UI/UX Design</span>
                                    <span>Marketing & Growth</span>
                                    <span>Business Development</span>
                                    <span>Figma, Canva</span>
                                    <span>Adobe Creative Suite</span>
                                    <span>Project Management</span>
                                </div>
                                <div className="team-links">
                                    <a href="https://github.com" target="_blank" rel="noopener">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Ravshanbek - UI/UX Frontend */}
                            <div className="team-card">
                                <div className="team-experience">2+ yil tajriba</div>
                                <div className="team-avatar">
                                    <img src="/team/ravshanbek.png" alt="Akbarov Ravshanbek" />
                                </div>
                                <h3>Akbarov Ravshanbek</h3>
                                <p className="team-role">UI/UX Designer • Frontend Developer</p>
                                <div className="team-skills-list">
                                    <span>UI/UX Design</span>
                                    <span>Figma, Adobe XD</span>
                                    <span>React.js, Next.js</span>
                                    <span>HTML5, CSS3, JavaScript</span>
                                    <span>TailwindCSS</span>
                                    <span>Material Design</span>
                                    <span>Responsive Design</span>
                                    <span>Animation & Interaction</span>
                                </div>
                                <div className="team-links">
                                    <a href="https://github.com" target="_blank" rel="noopener">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Jaxongir - AI/ML & Android */}
                            <div className="team-card">
                                <div className="team-experience">2+ yil tajriba</div>
                                <div className="team-avatar">
                                    <img src="/team/jaxongir.png" alt="Qarshiboyev Jaxongir" />
                                </div>
                                <h3>Qarshiboyev Jaxongir</h3>
                                <p className="team-role">AI/ML Engineer • Android Developer</p>
                                <div className="team-skills-list">
                                    <span>Python</span>
                                    <span>Django, Flask</span>
                                    <span>Aiogram</span>
                                    <span>TensorFlow</span>
                                    <span>OpenCV, MTCNN</span>
                                    <span>Kotlin, Android SDK</span>
                                    <span>Arduino, Sensors</span>
                                    <span>Git, Docker</span>
                                </div>
                                <div className="team-links">
                                    <a href="https://github.com/Jaxongir-Qarshiboyev" target="_blank" rel="noopener">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY US SECTION - DETAILED */}
            <section className="why-us" id="why">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Nega Aynan Biz?</span>
                            <p className="section-subtitle">Bizni boshqalardan farqlantiruvchi jihatlar</p>
                        </h2>

                        <div className="why-grid">
                            <div className="why-card">
                                <Lightbulb size={40} className="why-icon" />
                                <h3>Chuqur Texnik Bilim</h3>
                                <p>
                                    Audio signal processing, MFCC extraction, DTW algoritmi va
                                    pattern matching bo'yicha <strong>2+ yillik amaliy tajriba</strong>.
                                    Biz nazariyani amaliyotga aylantira olamiz va 92%+ aniqlikka erishdik.
                                </p>
                            </div>

                            <div className="why-card">
                                <Target size={40} className="why-icon" />
                                <h3>Innovatsion Yondashuv</h3>
                                <p>
                                    Biz muammoni <strong>boshqacha hal qilamiz</strong> - Speech-to-Text o'rniga
                                    Audio Fingerprinting. Bu bizga internet kerak bo'lmagan, tez va
                                    maxfiy yechim yaratish imkonini berdi.
                                </p>
                            </div>

                            <div className="why-card">
                                <Code2 size={40} className="why-icon" />
                                <h3>Full-Stack Qobiliyat</h3>
                                <p>
                                    AI/ML, Android Development, UI/UX Design va Business Development -
                                    <strong>barcha yo'nalishlarni qamrab oladigan jamoa</strong>.
                                    Tashqi resursga bog'liq emasmiz.
                                </p>
                            </div>

                            <div className="why-card">
                                <Users size={40} className="why-icon" />
                                <h3>Mahalliy Bozor Tushunchasi</h3>
                                <p>
                                    Biz <strong>O'zbekiston foydalanuvchilarini tushunamiz</strong> -
                                    ularning tili, madaniyati, internet holati va real ehtiyojlari.
                                    Bu bilim global kompaniyalarda yo'q.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TRACTION/ACHIEVEMENTS - UPDATED */}
            <section className="traction" id="traction">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Hozirgi Holat</span>
                            <p className="section-subtitle">Nimalarga erishdik</p>
                        </h2>

                        <div className="traction-grid">
                            <div className="traction-item">
                                <Award size={40} />
                                <h3>Tajribali Jamoa</h3>
                                <p>3 ta mutaxassis, 2+ yil tajriba</p>
                            </div>
                            <div className="traction-item">
                                <Star size={40} />
                                <h3>MVP Tayyor</h3>
                                <p>85% Complete, Testing phase</p>
                            </div>
                            <div className="traction-item">
                                <Mic size={40} />
                                <h3>Voice Commands</h3>
                                <p>9+ ovozli buyruq qo'llab-quvvatlanadi</p>
                            </div>
                            <div className="traction-item">
                                <Cpu size={40} />
                                <h3>AI Algoritmlar</h3>
                                <p>4 ta ensemble algoritm (DTW, MFCC, Cosine)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ROADMAP SECTION */}
            <section className="roadmap" id="roadmap">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            <span className="gradient-text">Yo'l Xaritasi</span>
                        </h2>

                        <div className="roadmap-timeline">
                            <div className="timeline-item completed">
                                <div className="timeline-marker">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="timeline-content">
                                    <h3>Idea & Research</h3>
                                    <p>G'oya shakllantirish, texnik tadqiqot, MFCC/DTW prototip</p>
                                    <span className="timeline-date">2025-yil Yanvar</span>
                                </div>
                            </div>

                            <div className="timeline-item completed">
                                <div className="timeline-marker">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="timeline-content">
                                    <h3>Prototype</h3>
                                    <p>MFCC extraction, oddiy DTW matching, 3 buyruq</p>
                                    <span className="timeline-date">2025-yil Fevral</span>
                                </div>
                            </div>

                            <div className="timeline-item active">
                                <div className="timeline-marker">
                                    <Clock size={24} />
                                </div>
                                <div className="timeline-content">
                                    <h3>MVP Development</h3>
                                    <p>
                                        9 buyruq, Ensemble algoritm, Adaptive threshold,
                                        Background service, Beta testing
                                    </p>
                                    <span className="timeline-date">2026-yil Fevral (Hozir)</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="progress-label">85% tayyor</span>
                                </div>
                            </div>

                            <div className="timeline-item upcoming">
                                <div className="timeline-marker">
                                    <Rocket size={24} />
                                </div>
                                <div className="timeline-content">
                                    <h3>Launch</h3>
                                    <p>
                                        Play Store reliz, Custom buyruqlar, TTS javoblar,
                                        Hotword detection, Widget
                                    </p>
                                    <span className="timeline-date">2026-yil Aprel</span>
                                </div>
                            </div>

                            <div className="timeline-item upcoming">
                                <div className="timeline-marker">
                                    <Globe size={24} />
                                </div>
                                <div className="timeline-content">
                                    <h3>Scale & Expansion</h3>
                                    <p>
                                        iOS versiya, SDK chiqarish, B2B partnerships,
                                        Qozog'iston & Qirg'iziston expansion
                                    </p>
                                    <span className="timeline-date">2026-yil Q3-Q4</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INVESTMENT ASK - UPDATED */}
            <section className="investment" id="investment">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="investment-content">
                            <h2>
                                <span className="gradient-text">Investitsiya</span>
                            </h2>
                            <div className="investment-amount">
                                <span className="amount">$60,000</span>
                                <span className="equity">10% Equity</span>
                            </div>
                            <div className="investment-use">
                                <h3>Mablag' Ishlatilishi:</h3>
                                <div className="use-grid">
                                    <div className="use-item">
                                        <span className="use-percent">40%</span>
                                        <span className="use-label">Product Development</span>
                                        <span className="use-desc">iOS, Custom commands, TTS</span>
                                    </div>
                                    <div className="use-item">
                                        <span className="use-percent">30%</span>
                                        <span className="use-label">Marketing & Growth</span>
                                        <span className="use-desc">User acquisition, PR</span>
                                    </div>
                                    <div className="use-item">
                                        <span className="use-percent">20%</span>
                                        <span className="use-label">Team Expansion</span>
                                        <span className="use-desc">iOS dev, Marketing specialist</span>
                                    </div>
                                    <div className="use-item">
                                        <span className="use-percent">10%</span>
                                        <span className="use-label">Operations</span>
                                        <span className="use-desc">Legal, Infrastructure</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2>Demo Bilan Tanishing</h2>
                        <p>
                            Dastyor AI qanday ishlashini video orqali ko'ring va prototipni sinab ko'ring.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/demo" className="btn btn-primary btn-large">
                                <Play size={24} />
                                Demo Sahifasiga O'tish
                            </Link>
                            <a href="mailto:qarshiboyev.jahongir.22.05@gmail.com?subject=Dastyor AI haqida&body=Salom! Men Dastyor AI haqida quyidagi savolim bor:%0A%0A" className="btn btn-secondary btn-large">
                                <Mail size={24} />
                                Bog'lanish
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="logo-icon">
                                <img src="/logo.png" alt="Dastyor AI" />
                            </div>
                            <span className="gradient-text footer-logo-text">Dastyor AI</span>
                            <p>O'zbekistondagi birinchi 100% offline ovozli yordamchi.
                                Internetga bog'lanmasdan, o'z ovozingiz bilan telefoningizni boshqaring.</p>
                        </div>
                        <div className="footer-links">
                            <h4>Havolalar</h4>
                            <a href="#problem">Muammo</a>
                            <a href="#solution">Yechim</a>
                            <a href="#how">Qanday ishlaydi?</a>
                            <a href="#team">Jamoa</a>
                            <a href="#roadmap">Yo'l xaritasi</a>
                        </div>
                        <div className="footer-links">
                            <h4>Resurslar</h4>
                            <Link to="/demo">Demo</Link>
                            <a href="https://github.com/Jaxongir-Qarshiboyev/Dastyor_AI_Landing_Page/releases/download/v1.0.0-beta/Dastyor-AI-v1.0.0-beta.apk">APK Yuklab olish</a>
                            <a href="#">Dokumentatsiya</a>
                            <a href="mailto:qarshiboyev.jahongir.22.05@gmail.com?subject=Dastyor AI haqida&body=Salom! Men Dastyor AI haqida quyidagi savolim bor:%0A%0A">Bog'lanish</a>
                        </div>
                    </div>
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

export default LandingPage
