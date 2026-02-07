import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './ChatBot.css'

// Dastyor AI haqida kengaytirilgan bilimlar bazasi
const knowledgeBase = {
    // Asosiy savollar
    "dastyor ai nima": `Dastyor AI - O'zbekistondagi **birinchi offline ovozli yordamchi** ilovasi! 🎙️

🔹 **Texnologiya:** Audio Fingerprinting (MFCC + DTW)
🔹 **Til:** 100% O'zbek tilida
🔹 **Internet:** Talab qilinmaydi - 100% Offline
🔹 **Aniqlik:** 92%+ (Ensemble algoritm)
🔹 **Tezlik:** <500ms javob vaqti

Biz Speech-to-Text o'rniga Audio Fingerprinting texnologiyasidan foydalanamiz - bu sizning ovozingizning unikal "barmoq izi"ni taniydi!`,

    "qanday ishlaydi": `Dastyor AI qanday ishlaydi:

**1️⃣ Enrollment (Ro'yxatdan o'tish)**
Siz har bir buyruq uchun 5 ta ovoz namunasi yozasiz. Masalan: "Chiroqni yoq" ni 5 marta takrorlaysiz.

**2️⃣ MFCC Extraction**
Ovozdan 13 ta MFCC (Mel-Frequency Cepstral Coefficients) chiqariladi - bu ovozning "barmoq izi".

**3️⃣ Template Yaratish**
5 ta yozuvdan o'rtacha template hosil qilinadi.

**4️⃣ Recognition**
Yangi ovoz 4 ta algoritm bilan solishtiriladi:
• DTW (Dynamic Time Warping) - 40%
• Cosine Similarity - 30%
• Correlation - 20%
• Euclidean Distance - 10%

**5️⃣ Buyruq Bajarish**
Agar o'xshashlik 75%+ bo'lsa, buyruq 500ms ichida bajariladi!`,

    "offline": `Ha! Dastyor AI **100% offline** ishlaydi! 🔒

✅ **Internet kerak emas** - hech qachon
✅ **Ma'lumotlar telefondan chiqmaydi** - maxfiylik
✅ **Barcha hisob-kitoblar lokal** - tez
✅ **Server yo'q** - serverga bog'liq emas

Bu nega muhim:
• O'zbekistonning 45% hududida internet sifati past
• Metro, tunnel, qishloq joylarda ham ishlaydi
• Maxfiylik - ovozingiz hech kimga yuborilmaydi
• Tez - server kechikishi yo'q (500ms vs 1-3s)`,

    "buyruqlar": `Hozirda 9 ta tayyor buyruq mavjud: 📱

**Telefon funksiyalari:**
📞 "TELEFON QAYERDASDAN" - Telefon ovoz chiqaradi
🕐 "SOAT NECHCHI BO'LDI" - Vaqtni ko'rsatadi
📸 "EKRANNI RASMGA OL" - Screenshot oladi

**Yoritish:**
💡 "CHIROQNI YOQ" - Fonarni yoqadi
🔦 "CHIROQNI O'CHIR" - Fonarni o'chiradi

**Ovoz:**
🔊 "OVOZNI KUCHAYTIR" - Volume +
🔉 "OVOZNI PASAYTIR" - Volume -
🔕 "QO'NG'IROQNI O'CHIR" - Silent mode

**Boshqa:**
☀️ "OB-HAVONI AYT" - Joriy ob-havo

*Custom buyruqlar MVP keyingi versiyada!*`,

    "aniqlik": `Dastyor AI **92%+ aniqlik** bilan ishlaydi! 📊

**Ensemble Algorithm:**
Biz 4 ta algoritmni birlashtirib, eng yuqori aniqlikka erishdik:

| Algoritm | Vazn | Aniqlik |
|----------|------|---------|
| DTW | 40% | 85% |
| Cosine | 30% | 82% |
| Correlation | 20% | 78% |
| Euclidean | 10% | 75% |

**Natija:** Ensemble = 92%+

**Adaptive Threshold:**
Har bir buyruq uchun optimal threshold avtomatik hisoblanadi (σ = 2.0 standart deviation)`,

    "texnologiyalar": `Dastyor AI texnologiya steki: 🛠️

**Mobile:**
📱 Kotlin - Android development
⚡ Coroutines - Parallel processing
🏗️ MVVM - Clean Architecture
🎨 Material Design 3 - Modern UI

**Audio Processing:**
🎵 MFCC - Feature extraction (13 coefficients)
📊 DTW - Dynamic Time Warping
📐 Cosine Similarity
📏 Euclidean Distance

**System:**
🔔 Foreground Service - Background listening
💾 Room Database - Local storage
🔐 No permissions abuse

**Tools:**
• Android Studio
• Git & GitHub
• Figma (UI/UX)`,

    "jamoa": `Bizning professional jamoamiz: 👥

**👩‍💼 Abdurasulova Aziza**
*Team Lead • CEO • Marketing • Design*
• 2+ yil tajriba
• Team Leadership, Product Strategy
• UI/UX Design, Marketing & Growth
• Figma, Canva, Adobe Creative Suite

**👨‍🎨 Akbarov Ravshanbek**
*UI/UX Designer • Frontend Developer*
• 2+ yil tajriba
• Figma, Adobe XD
• React.js, Next.js
• HTML5, CSS3, JavaScript, TailwindCSS

**👨‍💻 Qarshiboyev Jaxongir**
*AI/ML Engineer • Android Developer*
• 2+ yil tajriba
• Python, Django, Flask, Aiogram
• TensorFlow, OpenCV, MTCNN
• Kotlin, Android SDK, Arduino`,

    "mfcc": `MFCC (Mel-Frequency Cepstral Coefficients): 🎵

Bu ovozdan eng muhim xususiyatlarni chiqarish usuli - "ovozning barmoq izi".

**Qadamlar:**
1. **Pre-emphasis** - Yuqori chastotalarni kuchaytirish
2. **Framing** - 512 sample kadrlar
3. **Hamming Window** - Signal smoothing
4. **FFT** - Chastota spektri
5. **Mel Filter Bank** - 26 ta filtr (inson qulog'i modeli)
6. **Log + DCT** - 13 ta MFCC koeffitsient

**Natija:**
Har bir 25ms oyna uchun 13 ta raqam - bu ovozning unikal "imzosi".`,

    "dtw": `DTW (Dynamic Time Warping): 📐

Bu turli uzunlikdagi ovoz signallarini solishtirish algoritmi.

**Muammo:** "Chiroqni yoq" ni sekin va tez aytilsa, uzunligi farq qiladi.

**Yechim:** DTW vaqt o'zgarishlariga chidamli - signallarni "cho'zish" va "siqish" orqali optimal moslikni topadi.

**Formulasi:**
DTW(X,Y) = min Σ d(xi, yj)

**Afzalliklari:**
✅ Vaqt o'zgarishlariga chidamli
✅ Turli tezlikda aytilgan ovozni taniydi
✅ Har bir kishi uchun ishlaydi`,

    "tezlik": `Dastyor AI tezlik ko'rsatkichlari: ⚡

**Javob vaqti:** <500ms (raqobatchilar: 1-3 soniya)

**Optimizatsiyalar:**
• **Parallel Processing** - Coroutines
• **Optimized FFT** - Radix-2 Cooley-Tukey
• **Lazy Loading** - Kerakli vaqtda yuklash
• **Batch Processing** - Samarali hisob-kitob

**Taqqoslash:**
| Yordamchi | Javob vaqti |
|-----------|-------------|
| Dastyor AI | <500ms |
| Google Assistant | 1-3s |
| Siri | 1-2s |
| Alexa | 1-3s |

*Sabab: Internet yo'q = server kechikishi yo'q!*`,

    "xavfsizlik": `Dastyor AI 100% maxfiy va xavfsiz: 🔐

**Maxfiylik:**
🔒 Barcha ma'lumotlar telefondan chiqmaydi
🚫 Hech qanday serverga yuborilmaydi
💾 Ovoz namunalari lokal saqlanadi
🔐 Faqat siz foydalanasiz

**Raqobatchilar bilan taqqoslash:**
| | Dastyor | Google | Siri | Alexa |
|---|---|---|---|---|
| Local Storage | ✅ | ❌ | ⚠️ | ❌ |
| No Cloud | ✅ | ❌ | ❌ | ❌ |
| Privacy | ✅ | ❌ | ⚠️ | ❌ |

**Voice Biometrics:**
Faqat sizning ovozingiz ishlaydi - boshqa kishilar buyruq bera olmaydi!`,

    "farqi": `Dastyor AI vs Raqobatchilar: 🏆

| Xususiyat | Dastyor | Google | Siri | Alexa |
|-----------|---------|--------|------|-------|
| O'zbek tili | ✅ | ❌ | ❌ | ❌ |
| Offline | ✅ 100% | ❌ | ⚠️ | ❌ |
| Maxfiylik | ✅ | ❌ | ⚠️ | ❌ |
| Tezlik | 500ms | 1-3s | 1-2s | 1-3s |
| Voice ID | ✅ | ❌ | ✅ | ⚠️ |

**Bizning afzalliklarimiz:**
1️⃣ Yagona O'zbek tilida ishlaydigan offline voice assistant
2️⃣ 100% Offline - internet kerak emas
3️⃣ 100% Private - ma'lumotlar qurilmadan chiqmaydi
4️⃣ Voice Biometric - faqat ovoz egasi foydalanadi`,

    "o'rnatish": `Dastyor AI'ni o'rnatish: 📲

**1. APK Yuklab Olish**
Demo sahifadan APK faylni yuklab oling

**2. O'rnatish**
Telefoningizga o'rnating (Unknown sources ruxsat)

**3. Ruxsatlar**
• Mikrofon - ovozni eshitish uchun
• Notification - background service

**4. Enrollment**
Har bir buyruq uchun 5 ta ovoz namunasi yozing

**5. Foydalanish**
"Tinglashni boshlash" tugmasini bosing va buyruq bering!

*Tez orada Play Store'da ham chiqadi!*`,

    "muammo": `Biz hal qilayotgan muammolar: 🎯

**1️⃣ Internet Bog'liqligi**
• O'zbekistonning 45% hududida internet past
• Metro, tunnel, qishloqda yordamchilar ishlamaydi
• Har bir so'rov 50-200KB traffic sarflaydi

**2️⃣ O'zbek Tili Qo'llab-quvvatlanmaydi**
• Google: 70+ til, o'zbek yo'q
• Siri: 40+ til, o'zbek yo'q
• Alexa: 10+ til, o'zbek yo'q
• 36M o'zbek foydalanuvchi chetda qolgan

**3️⃣ Maxfiylik Xavflari**
• Bulut yordamchilari barcha ovozni serverga yuboradi
• Amazon, Google ma'lumotlarni saqlaydi
• Data breach xavfi mavjud`,

    "yo'l xaritasi": `Loyiha yo'l xaritasi: 🗺️

✅ **Idea & Research** - 2025 Yanvar
G'oya shakllantirish, MFCC/DTW prototip

✅ **Prototype** - 2025 Fevral
MFCC extraction, oddiy DTW, 3 buyruq

🔄 **MVP** - 2026 Fevral (Hozir - 85%)
9 buyruq, Ensemble algoritm, Adaptive threshold
Background service, Beta testing

🚀 **Launch** - 2026 Aprel
Play Store reliz, Custom buyruqlar
TTS javoblar, Hotword detection, Widget

🌍 **Scale** - 2026 Q3-Q4
iOS versiya, SDK chiqarish
B2B partnerships, Regional expansion`,

    "investitsiya": `Investitsiya so'rovi: 💰

**So'raladigan summa:** $60,000
**Equity:** 10%

**Mablag' Ishlatilishi:**
| Yo'nalish | % | Summa |
|-----------|---|-------|
| Product Development | 40% | $24,000 |
| Marketing & Growth | 30% | $18,000 |
| Team Expansion | 20% | $12,000 |
| Operations | 10% | $6,000 |

**Daromad Prognozi:**
• Year 1: $60K
• Year 2: $350K
• Year 3: $1.5M
• Year 4: $4M

Break-even: Month 18`,

    "biznes model": `Biznes Model: 💼

**1️⃣ Freemium B2C**
• Free: 3 ta buyruq, asosiy funksiyalar
• Premium ($2.99/oy): Cheksiz buyruqlar, Widget
• Pro ($4.99/oy): Custom hotword, API access

**2️⃣ B2B Licensing**
• Smart Home ishlab chiqaruvchilar
• IoT qurilmalar
• Avtomobil sanoati
• Telecom operatorlar
Taxminiy: $5,000 - $50,000/yillik

**3️⃣ SDK/API**
• Voice Recognition SDK
• REST API
• Pay-per-use: $0.001/so'rov
• Flat rate: $500/oy`,

    "demo": `Demo sahifasi haqida: 🎬

Demo sahifada siz:
🎥 **Video Demo** ko'rishingiz mumkin
📱 **Prototipni sinab ko'rishingiz** mumkin
📝 **Texnik ma'lumotlar** olishingiz mumkin
📥 **APK yuklab olishingiz** mumkin

Demo sahifasiga o'tish uchun tepada "Demo ko'rish" tugmasini bosing yoki navigatsiyadagi "Demo" havolasini tanlang.`,

    "aloqa": `Biz bilan bog'lanish: 📬

📧 **Email:** qarshiboyev.jahongir.22.05@gmail.com

✍️ **Email yozish namunasi:**
Mavzu: Dastyor AI haqida
Salom! Men Dastyor AI haqida quyidagi savolim bor:
[Savolingizni yozing]

🌐 **Sayt:** localhost:3000 (hozircha)

📱 **Demo:** /demo sahifasi

Investorlar, hamkorlik yoki texnik savollar uchun emailga yozing!

🎯 **Biz qidiramiz:**
• Investorlar
• Texnologiya hamkorlari
• B2B mijozlar
• Beta testerlar`
}

// Javob topish funksiyasi
function findAnswer(question) {
    const q = question.toLowerCase().trim()

    // Salomlashish
    if (q.includes('salom') || q.includes('hello') || q.includes('hi') || q.includes('assalom')) {
        return `Assalomu alaykum! 👋 

Men Dastyor AI yordamchisiman. Loyiha haqida barcha savollarga javob beraman!

**Mashhur savollar:**
• Dastyor AI nima?
• Qanday ishlaydi?
• Qanday buyruqlar bor?
• Jamoa haqida
• Biznes model
• Investitsiya

Nimani bilmoqchisiz? 🤔`
    }

    // Rahmat
    if (q.includes('rahmat') || q.includes('thanks') || q.includes('thank') || q.includes('raxmat')) {
        return "Arzimaydi! 😊 Yana savollaringiz bo'lsa, bemalol so'rang. Men doim yordam berishga tayyorman! 🤖"
    }

    // Kim yaratgan / developer
    if (q.includes('kim yaratgan') || q.includes('developer') || q.includes('dasturchi')) {
        return knowledgeBase["jamoa"]
    }

    // Bilimlar bazasidan qidirish
    for (const [key, value] of Object.entries(knowledgeBase)) {
        const keywords = key.split(' ')
        const matchCount = keywords.filter(word => q.includes(word)).length
        if (matchCount >= Math.ceil(keywords.length * 0.5)) {
            return value
        }
    }

    // Maxsus kalit so'zlar
    if (q.includes('nima') && (q.includes('dastyor') || q.includes('dastur') || q.includes('bu'))) {
        return knowledgeBase["dastyor ai nima"]
    }

    if (q.includes('ishlaydi') || q.includes('qanday') || q.includes('mexanizm')) {
        return knowledgeBase["qanday ishlaydi"]
    }

    if (q.includes('internet') || q.includes('offlayn') || q.includes('offline')) {
        return knowledgeBase["offline"]
    }

    if (q.includes('buyruq') || q.includes('komanda') || q.includes('nimalarga') || q.includes('qila oladi')) {
        return knowledgeBase["buyruqlar"]
    }

    if (q.includes('aniq') || q.includes('%') || q.includes('foiz') || q.includes('natija')) {
        return knowledgeBase["aniqlik"]
    }

    if (q.includes('texnolog') || q.includes('qaysi til') || q.includes('stack') || q.includes('dasturlash')) {
        return knowledgeBase["texnologiyalar"]
    }

    if (q.includes('jamoa') || q.includes('kim') || q.includes('team') || q.includes('founder')) {
        return knowledgeBase["jamoa"]
    }

    if (q.includes('mfcc') || q.includes('mel') || q.includes('coefficient')) {
        return knowledgeBase["mfcc"]
    }

    if (q.includes('dtw') || q.includes('dynamic') || q.includes('warp')) {
        return knowledgeBase["dtw"]
    }

    if (q.includes('tez') || q.includes('speed') || q.includes('vaqt') || q.includes('ms')) {
        return knowledgeBase["tezlik"]
    }

    if (q.includes('xavf') || q.includes('maxfiy') || q.includes('secure') || q.includes('privacy') || q.includes('xavfsiz')) {
        return knowledgeBase["xavfsizlik"]
    }

    if (q.includes('farq') || q.includes('google') || q.includes('siri') || q.includes('alexa') || q.includes('boshqa')) {
        return knowledgeBase["farqi"]
    }

    if (q.includes('o\'rnat') || q.includes('install') || q.includes('yukla') || q.includes('ishlatish')) {
        return knowledgeBase["o'rnatish"]
    }

    if (q.includes('muammo') || q.includes('problem') || q.includes('hal')) {
        return knowledgeBase["muammo"]
    }

    if (q.includes('reja') || q.includes('roadmap') || q.includes('yo\'l') || q.includes('kelajak')) {
        return knowledgeBase["yo'l xaritasi"]
    }

    if (q.includes('invest') || q.includes('pul') || q.includes('summa') || q.includes('equity')) {
        return knowledgeBase["investitsiya"]
    }

    if (q.includes('biznes') || q.includes('model') || q.includes('daromad') || q.includes('pul toplash')) {
        return knowledgeBase["biznes model"]
    }

    if (q.includes('demo') || q.includes('video') || q.includes('sinov') || q.includes('ko\'rish')) {
        return knowledgeBase["demo"]
    }

    if (q.includes('aloqa') || q.includes('contact') || q.includes('telegram') || q.includes('email') || q.includes('bog\'lan')) {
        return knowledgeBase["aloqa"]
    }

    // Default javob
    return `Kechirasiz, bu savolga aniq javob topa olmadim. 🤔

Men Dastyor AI haqida ko'p narsani bilaman! Quyidagi mavzularda savol bering:

📱 **Mahsulot**
• Dastyor AI nima?
• Qanday ishlaydi?
• Qanday buyruqlar bor?
• Offline ishlaydi-mi?

🛠️ **Texnik**
• MFCC nima?
• DTW algoritmi
• Aniqlik qancha?
• Texnologiyalar

👥 **Jamoat**
• Jamoa haqida
• Biznes model
• Investitsiya
• Yo'l xaritasi

Qaysi birini bilmoqchisiz?`
}

function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [showHint, setShowHint] = useState(true)
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: `Assalomu alaykum! 👋 Men Dastyor AI yordamchisiman.

Sizga loyiha haqida barcha ma'lumotlarni bera olaman. Nimani bilmoqchisiz?

💡 **Tez savollar:**
• "Dastyor AI nima?"
• "Qanday ishlaydi?"
• "Buyruqlar"
• "Jamoa"`
        }
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Auto-hide hint after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(false)
        }, 8000)
        return () => clearTimeout(timer)
    }, [])

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage = input.trim()
        setMessages(prev => [...prev, { type: 'user', text: userMessage }])
        setInput('')
        setIsTyping(true)

        // Simulate typing delay
        setTimeout(() => {
            const answer = findAnswer(userMessage)
            setMessages(prev => [...prev, { type: 'bot', text: answer }])
            setIsTyping(false)
        }, 800)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend()
        }
    }

    const handleQuickQuestion = (question) => {
        setInput(question)
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'user', text: question }])
            setIsTyping(true)
            setTimeout(() => {
                const answer = findAnswer(question)
                setMessages(prev => [...prev, { type: 'bot', text: answer }])
                setIsTyping(false)
            }, 800)
        }, 100)
        setInput('')
    }

    return (
        <>
            {/* Chat Hint Bubble */}
            <AnimatePresence>
                {showHint && !isOpen && (
                    <motion.div
                        className="chatbot-hint"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        <Sparkles size={16} />
                        <span>Salom! Savolingiz bormi?</span>
                        <button onClick={() => setShowHint(false)}>×</button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Toggle Button */}
            <motion.button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => {
                    setIsOpen(!isOpen)
                    setShowHint(false)
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={!isOpen && showHint ? { scale: [1, 1.1, 1] } : {}}
                transition={{ repeat: showHint ? Infinity : 0, duration: 2 }}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="chatbot-header">
                            <div className="chatbot-avatar">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h4>Dastyor AI Yordamchi</h4>
                                <span className="online-status">● Online - Loyiha haqida so'rang</span>
                            </div>
                        </div>

                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.type}`}>
                                    <div className="message-avatar">
                                        {msg.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                                    </div>
                                    <div className="message-content">
                                        {msg.text.split('\n').map((line, i) => (
                                            <span key={i}>
                                                {line.includes('**') ? (
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                        }}
                                                    />
                                                ) : line}
                                                {i < msg.text.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="message bot">
                                    <div className="message-avatar">
                                        <Bot size={16} />
                                    </div>
                                    <div className="message-content typing">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chatbot-input">
                            <input
                                type="text"
                                placeholder="Savol yozing..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button onClick={handleSend}>
                                <Send size={18} />
                            </button>
                        </div>

                        <div className="chatbot-suggestions">
                            <button onClick={() => handleQuickQuestion('Dastyor AI nima?')}>Dastyor AI nima?</button>
                            <button onClick={() => handleQuickQuestion('Qanday ishlaydi?')}>Qanday ishlaydi?</button>
                            <button onClick={() => handleQuickQuestion('Buyruqlar')}>Buyruqlar</button>
                            <button onClick={() => handleQuickQuestion('Jamoa')}>Jamoa</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ChatBot
