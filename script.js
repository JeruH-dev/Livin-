document.addEventListener('DOMContentLoaded', () => {
    const box = document.createElement('div');
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.background = '#3498db';
    box.style.transition = 'transform 0.4s, opacity 0.4s';
    box.style.cursor = 'pointer';
    box.style.margin = '40px auto';
    document.body.appendChild(box);

    let toggled = true;

    box.addEventListener('click', () => {
        toggled = !toggled;
        if (toggled) {
            box.style.transform = 'scale(1.2) rotate(15deg)';
            box.style.opacity = '0.7';
        } else {
            box.style.transform = 'scale(1) rotate(0deg)';
            box.style.opacity = '1';
        }
    });
});

// Navigation toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.navigation ul');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const menuToggleButton = document.querySelector('#menu-toggle');
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            console.log('Menu toggle button clicked!');
        });
    }
}

// Animate sections on scroll
const sections = document.querySelectorAll('main section');
const revealSection = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            section.style.animationPlayState = 'running';
        }
    });
};
window.addEventListener('scroll', revealSection);
revealSection();

// Language selection dropdown
const langBtn = document.getElementById('language-btn');
const langList = document.getElementById('language-list');

// Function to change the language
function changeLanguage(lang) {
    if (translations[lang]) {
        Object.keys(translations[lang]).forEach(key => {
            const elements = document.querySelectorAll(`[data-translate="${key}"]`);
            elements.forEach(element => {
                element.innerHTML = translations[lang][key];
            });
        });
    }
}

const translations = {
    en: {
        trusted: 'Trusted by over <span class="million">20 million Africans</span>',
        headline: "Livin' by Gideon <span class='hash-tag'>#BeyondsuperApp</span>",
        discover: "Welcome to Livin' Mobile Banking ...where banking meets convenience! With Livin', you can manage your finances on-the-go, anytime, anywhere. Our secure and user-friendly platform allows you to:",
        features: [
            'Check balances and transaction history',
            'Transfer funds and pay bills',
            'Deposit checks and manage accounts',
            'Track spending and set budgets',
            'Make a smart investment and track annual profits'
        ],
        sukha_headline: 'One app for #Everything you need',
        sukha_desc1: "Livin' by Gideon is more than just a banking and financial analyzing app. It is your daily tool to navigate and manage your daily expenditure, your financial statements and aids in facilitating a fast and smart investment. Access easy lifestyle and essential services at it perks with just a click.",
        sukha_desc2: "With Livin' Mobile Banking, you're always in control of your finances. Download the app today and experience the future of banking!",
        sukha_features: [
            'Log in with your credentials',
            'Explore our features and start managing your finances with ease'
        ],
        sukha_download: 'Download App',
        sukha_create: 'Create Account',
        sukha_login: 'Login to Account',
        benefit_run1: "Esteem Users! <br>Get your account registered with <span class='hash-tag'>#</span>Livin' beyond Banking",
        benefit_run2: "Enjoy seamless banking experience with <span class='hash-tag'>#</span>Livin'",
        benefit_getstarted: 'Get started',
        support_headline: "Got Questions? We've got Answers",
        support_sub: "Need help? Contact our customer support team for assistance.",
        support_desc1: "Livin' your everyday tool to manage finances, invest smarter, enjoy lifestyle perks and access essential services with just a few tips.",
        support_desc2: "We're just a click away",
        support_help: 'Get help',
        help_title: "How do I start investing through Livin'?",
        help_desc: "it's your everyday tool to manage finances,invest smarter, enjoy life at its perks and access essential service with a few tips.",
        help_list: [
            'Verification issue +',
            'Verification issue +',
            'Verification issue +',
            'Verification issue +',
            'Verification issue +'
        ],
        security_headline: 'Security',
        security_desc: 'Your security is our top priority. We use advance encryption and data security measures to protect your data.',
        conclusion_headline: 'Terms & Conditions',
        conclusion_desc: "By using Livin' Mobile Banking, you agree to our terms and conditions.",
        conclusion_download: 'Download Here',
        footer_headline: "Livin' your reliable online banking",
        subscribe_headline: 'Sign up for our online banking',
        subscribe_desc: 'By subscribing, you will agree to our terms & condition, policy and privacy.',
        social_guarantee: 'Secure Banking Guarantee',
        social_insured: 'FDIC/NCUA Insured',
        social_compliance: 'Regulatory Compliance Information',
        copyright_desc: "Copyright @2025 Livin' Mobile Banking. All rights reserved."
    },
    fr: {
        trusted: 'Fiable pour plus de <span class="million">20 millions d\'Africains</span>',
        headline: "Livin' par Gideon <span class='hash-tag'>#Au-delà SuperApp</span>",
        discover: "Bienvenue sur Livin' Banque Mobile ...où la banque rime avec commodité ! Avec Livin', gérez vos finances partout, à tout moment. Notre plateforme sécurisée et conviviale vous permet de :",
        features: [
            'Consulter les soldes et l\'historique des transactions',
            'Transférer des fonds et payer des factures',
            'Déposer des chèques et gérer les comptes',
            'Suivre les dépenses et définir des budgets',
            'Investir intelligemment et suivre les profits annuels'
        ],
        sukha_headline: "Une application pour #ToutCeDontVousAvezBesoin",
        sukha_desc1: "Livin' by Gideon est bien plus qu'une application bancaire et d'analyse financière. C'est votre outil quotidien pour naviguer et gérer vos dépenses, vos états financiers et faciliter un investissement rapide et intelligent. Accédez facilement aux services essentiels et aux avantages lifestyle d'un simple clic.",
        sukha_desc2: "Avec Livin' Mobile Banking, vous gardez toujours le contrôle de vos finances. Téléchargez l'application dès aujourd'hui et découvrez la banque de demain !",
        sukha_features: [
            "Connectez-vous avec vos identifiants",
            "Explorez nos fonctionnalités et commencez à gérer vos finances en toute simplicité"
        ],
        sukha_download: "Télécharger l'application",
        sukha_create: "Créer un compte",
        sukha_login: "Se connecter",
        benefit_run1: "Chers utilisateurs ! <br>Enregistrez votre compte avec <span class='hash-tag'>#</span>Livin' au-delà de la banque",
        benefit_run2: "Profitez d'une expérience bancaire sans faille avec <span class='hash-tag'>#</span>Livin'",
        benefit_getstarted: "Commencer",
        support_headline: "Des questions ? Nous avons les réponses",
        support_sub: "Besoin d'aide ? Contactez notre équipe de support client pour obtenir de l'assistance.",
        support_desc1: "Livin' est votre outil quotidien pour gérer vos finances, investir plus intelligemment, profiter de vos avantages lifestyle et accéder à des services essentiels en quelques clics.",
        support_desc2: "Nous sommes à un clic de vous.",
        support_help: "Obtenir de l'aide",
        help_title: "Comment commencer à investir avec Livin' ?",
        help_desc: "C'est votre outil quotidien pour gérer vos finances, investir plus intelligemment, profiter de vos avantages lifestyle et accéder à des services essentiels avec quelques conseils.",
        help_list: [
            "Problème de vérification +",
            "Problème de vérification +",
            "Problème de vérification +",
            "Problème de vérification +",
            "Problème de vérification +"
        ],
        security_headline: "Sécurité",
        security_desc: "Votre sécurité est notre priorité absolue. Nous utilisons un chiffrement avancé et des mesures de protection des données pour sécuriser vos informations.",
        conclusion_headline: "Conditions générales",
        conclusion_desc: "En utilisant Livin' Mobile Banking, vous acceptez nos conditions générales.",
        conclusion_download: "Télécharger ici",
        footer_headline: "Livin' – votre banque en ligne fiable",
        subscribe_headline: "Inscrivez-vous à notre service bancaire en ligne",
        subscribe_desc: "En vous abonnant, vous acceptez nos conditions, notre politique et notre vie privée.",
        social_guarantee: "Garantie de banque sécurisée",
        social_insured: "Assuré FDIC/NCUA",
        social_compliance: "Informations sur la conformité réglementaire",
        copyright_desc: "Droits d'auteur ©2025 Livin' Mobile Banking. Tous droits réservés."
    },
    es: {
        trusted: 'Confiado por más de <span class="million">20 millones de africanos</span>',
        headline: "Livin' por Gideon <span class='hash-tag'>#MásAlláSuperApp</span>",
        discover: "Bienvenido a Livin' Banca Móvil ...¡donde la banca es conveniente! Con Livin', puedes gestionar tus finanzas en cualquier momento y lugar. Nuestra plataforma segura y fácil de usar te permite:",
        features: [
            'Consultar saldos e historial de transacciones',
            'Transferir fondos y pagar facturas',
            'Depositar cheques y administrar cuentas',
            'Rastrear gastos y establecer presupuestos',
            'Invertir inteligentemente y seguir ganancias anuales'
        ],
        sukha_headline: 'Una aplicación para #TodoLoQueNecesitas',
        sukha_desc1: "Livin' by Gideon es más que una aplicación de banca y análisis financiero. Es tu herramienta diaria para navegar y gestionar tus gastos diarios, tus estados financieros y facilita una inversión rápida e inteligente. Accede a servicios esenciales y de estilo de vida con solo un clic.",
        sukha_desc2: "Con Livin' Banca Móvil, siempre tienes el control de tus finanzas. ¡Descarga la aplicación hoy y experimenta el futuro de la banca!",
        sukha_features: [
            'Inicia sesión con tus credenciales',
            'Explora nuestras funciones y comienza a gestionar tus finanzas con facilidad'
        ],
        sukha_download: 'Descargar App',
        sukha_create: 'Crear Cuenta',
        sukha_login: 'Iniciar Sesión',
        benefit_run1: "¡Estimados usuarios! <br>Registra tu cuenta con <span class='hash-tag'>#</span>Livin' más allá de la banca",
        benefit_run2: "Disfruta de una experiencia bancaria sin interrupciones con <span class='hash-tag'>#</span>Livin'",
        benefit_getstarted: 'Comenzar',
        support_headline: "¿Tienes preguntas? Tenemos respuestas",
        support_sub: "¿Necesitas ayuda? Contacta a nuestro equipo de atención al cliente, para asistencia.",
        support_desc1: "Livin' tu herramienta diaria para gestionar finanzas, invertir de manera más inteligente, disfrutar de las ventajas del estilo de vida y acceder a servicios esenciales con solo unos pocos consejos.",
        support_desc2: "Estamos a un clic de distancia",
        support_help: 'Obtener ayuda',
        help_title: "¿Cómo empiezo a invertir a través de Livin'?",
        help_desc: "es tu herramienta diaria para gestionar finanzas, invertir de manera más inteligente, disfrutar de las ventajas del estilo de vida y acceder a servicios esenciales con solo unos pocos consejos.",
        help_list: [
            "Problema de verificación +",
            "Problema de verificación +",
            "Problema de verificación +",
            "Problema de verificación +",
            "Problema de verificación +"
        ],
        security_headline: "Seguridad",
        security_desc: "Tu seguridad es nuestra máxima prioridad. Utilizamos cifrado avanzado y medidas de protección de datos para proteger tu información.",
        conclusion_headline: "Términos y condiciones",
        conclusion_desc: "Al usar Livin' Mobile Banking, aceptas nuestros términos y condiciones.",
        conclusion_download: "Descargar aquí",
        footer_headline: "Livin' – tu banca en línea de confianza",
        subscribe_headline: "Regístrate en nuestra banca en línea",
        subscribe_desc: "Al suscribirte, aceptas nuestros términos, políticas y privacidad.",
        social_guarantee: "Garantía de banca segura",
        social_insured: "Asegurado por FDIC/NCUA",
        social_compliance: "Información de cumplimiento normativo",
        copyright_desc: "Copyright ©2025 Livin' Mobile Banking. Todos los derechos reservados."
    },
    de: {
        trusted: 'Vertraut von über <span class="million">20 Millionen Afrikanern</span>',
        headline: "Livin' von Gideon <span class='hash-tag'>#JenseitsSuperApp</span>",
        discover: "Willkommen bei Livin' Mobile Banking ...wo Banking auf Komfort trifft! Mit Livin' können Sie Ihre Finanzen jederzeit und überall verwalten. Unsere sichere und benutzerfreundliche Plattform ermöglicht Ihnen:",
        features: [
            'Kontostände und Transaktionsverlauf prüfen',
            'Geld überweisen und Rechnungen bezahlen',
            'Schecks einzahlen und Konten verwalten',
            'Ausgaben verfolgen und Budgets festlegen',
            'Intelligent investieren und Jahresgewinne verfolgen'
        ],
        sukha_headline: 'Eine App für #AllesWasDuBrauchst',
        sukha_desc1: "Livin' by Gideon ist mehr als nur eine Banking- und Finanzanalyse-App. Es ist Ihr tägliches Werkzeug, um Ihre täglichen Ausgaben zu verwalten, Ihre Finanzberichte zu überblicken und schnelle sowie intelligente Investitionen zu tätigen. Greifen Sie mit nur einem Klick auf Lifestyle- und essentielle Dienstleistungen zu.",
        sukha_desc2: "Mit Livin' Mobile Banking haben Sie Ihre Finanzen stets im Griff. Laden Sie die App noch heute herunter und erleben Sie die Zukunft des Bankings!",
        sukha_features: [
            'Melden Sie sich mit Ihren Zugangsdaten an',
            'Entdecken Sie unsere Funktionen und beginnen Sie, Ihre Finanzen mühelos zu verwalten'
        ],
        sukha_download: 'App herunterladen',
        sukha_create: 'Konto erstellen',
        sukha_login: 'Anmelden',
        benefit_run1: "Sehr geehrte Nutzer! <br>Registrieren Sie Ihr Konto mit <span class='hash-tag'>#</span>Livin' jenseits des Bankings",
        benefit_run2: "Genießen Sie ein nahtloses Bankerlebnis mit <span class='hash-tag'>#</span>Livin'",
        benefit_getstarted: 'Loslegen',
        support_headline: "Haben Sie Fragen? Wir haben Antworten",
        support_sub: "Brauchen Sie Hilfe? Kontaktieren Sie unser Kundensupport-Team für Unterstützung.",
        support_desc1: "Livin' ist Ihr tägliches Werkzeug, um Finanzen zu verwalten, intelligenter zu investieren, Lifestyle-Vorteile zu genießen und mit nur wenigen Klicks auf essentielle Dienstleistungen zuzugreifen.",
        support_desc2: "Wir sind nur einen Klick entfernt",
        support_help: 'Hilfe erhalten',
        help_title: "Wie starte ich Investitionen über Livin'?",
        help_desc: "es ist Ihr tägliches Werkzeug, um Finanzen zu verwalten, intelligenter zu investieren, Lifestyle-Vorteile zu genießen und mit nur wenigen Klicks auf essentielle Dienstleistungen zuzugreifen.",
        help_list: [
            "Verifizierungsproblem +",
            "Verifizierungsproblem +",
            "Verifizierungsproblem +",
            "Verifizierungsproblem +",
            "Verifizierungsproblem +"
        ],
        security_headline: "Sicherheit",
        security_desc: "Ihre Sicherheit hat für uns oberste Priorität. Wir verwenden fortschrittliche Verschlüsselungs- und Datensicherheitsmaßnahmen, um Ihre Informationen zu schützen.",
        conclusion_headline: "Allgemeine Geschäftsbedingungen",
        conclusion_desc: "Durch die Nutzung von Livin' Mobile Banking stimmen Sie unseren Allgemeinen Geschäftsbedingungen zu.",
        conclusion_download: "Hier herunterladen",
        footer_headline: "Livin' – Ihr zuverlässiges Online-Banking",
        subscribe_headline: 'Melden Sie sich für unser Online-Banking an',
        subscribe_desc: 'Mit Ihrer Anmeldung stimmen Sie unseren Bedingungen, Richtlinien und Datenschutzbestimmungen zu.',
        social_guarantee: 'Sichere Bankgarantie',
        social_insured: 'FDIC/NCUA versichert',
        social_compliance: 'Informationen zur regulatorischen Compliance',
        copyright_desc: "Urheberrecht ©2025 Livin' Mobile Banking. Alle Rechte vorbehalten."
    },
    zh: {
        trusted: '受到超过<span class="million">2000万非洲人</span>的信赖',
        headline: "Livin' 由 Gideon <span class='hash-tag'>#超越超级应用</span>",
        discover: "欢迎使用 Livin' 移动银行 ...在这里，银行业务变得更便捷！使用 Livin'，您可以随时随地管理财务。我们安全且易用的平台让您可以：",
        features: [
            '查询余额和交易记录',
            '转账和支付账单',
            '存入支票和管理账户',
            '跟踪支出和设定预算',
            '智能投资并跟踪年度收益'
        ],
        sukha_headline: '一款满足#您所需一切的应用',
        sukha_desc1: "Livin' by Gideon 不仅仅是一款银行和财务分析应用。它是您日常管理支出、查看财务报表并促进快速智能投资的工具。只需轻点一下，即可轻松访问生活方式和基本服务。",
        sukha_desc2: "使用 Livin' 移动银行，您始终掌控自己的财务。立即下载应用，体验银行业务的未来！",
        sukha_features: [
            '使用您的凭据登录',
            '探索我们的功能，轻松开始管理您的财务'
        ],
        sukha_download: '下载应用',
        sukha_create: '创建账户',
        sukha_login: '登录账户',
        benefit_run1: "尊敬的用户！<br>使用 <span class='hash-tag'>#</span>Livin' 注册您的账户，超越传统银行业务",
        benefit_run2: "享受无缝的银行体验，尽在 <span class='hash-tag'>#</span>Livin'",
        benefit_getstarted: '开始使用',
        support_headline: "有问题吗？我们有答案",
        support_sub: "需要帮助？请联系我们的客户支持团队获取协助。",
        support_desc1: "Livin' 是您日常管理财务、智能投资、享受生活方式优惠并轻松访问基本服务的工具。",
        support_desc2: "我们随时为您提供帮助",
        support_help: '获取帮助',
        help_title: "我如何通过 Livin' 开始投资？",
        help_desc: "它是您日常管理财务、智能投资、享受生活方式优惠并轻松访问基本服务的工具。",
        help_list: [
            "验证问题 +",
            "验证问题 +",
            "验证问题 +",
            "验证问题 +",
            "验证问题 +"
        ],
        security_headline: "安全性",
        security_desc: "您的安全是我们的首要任务。我们采用先进的加密和数据安全措施来保护您的信息。",
        conclusion_headline: "条款和条件",
        conclusion_desc: "使用 Livin' 移动银行即表示您同意我们的条款和条件。",
        conclusion_download: "点击此处下载",
        footer_headline: "Livin' – 您值得信赖的在线银行",
        subscribe_headline: '注册我们的在线银行服务',
        subscribe_desc: '订阅即表示您同意我们的条款、政策和隐私。',
        social_guarantee: '安全银行保障',
        social_insured: 'FDIC/NCUA 保险',
        social_compliance: '合规信息披露',
        copyright_desc: "©2025 Livin' Mobile Banking。版权所有。"
    }
};

// Translation function that applies selected language to all elements
function applyTranslation(selectedLang) {
    if (translations[selectedLang]) {
        const t = translations[selectedLang];
        
        // Update trusted section
        const trustedSection = document.querySelector('.trusted');
        if (trustedSection) {
            trustedSection.innerHTML = t.trusted;
        }
        
        // Update headline section
        const headlineSection = document.querySelector('.headline h1');
        if (headlineSection) {
            headlineSection.innerHTML = t.headline;
        }
        
        // Update discover section
        const discoverSection = document.querySelector('.discover p');
        if (discoverSection) {
            discoverSection.textContent = t.discover;
        }
        
        const featuresList = document.querySelector('.discover ul');
        if (featuresList) {
            featuresList.innerHTML = '';
            t.features.forEach(f => {
                const li = document.createElement('li');
                li.textContent = f;
                featuresList.appendChild(li);
            });
        }

        // Update sukha section
        const sukhaHeadline = document.querySelector('.sukha-content h2');
        if (sukhaHeadline) sukhaHeadline.textContent = t.sukha_headline;
        
        const sukhaDesc1 = document.querySelector('.sukha-content p:nth-of-type(1)');
        if (sukhaDesc1) sukhaDesc1.textContent = t.sukha_desc1;
        
        const sukhaDesc2 = document.querySelector('.sukha-content p:nth-of-type(2)');
        if (sukhaDesc2) sukhaDesc2.textContent = t.sukha_desc2;
        
        const sukhaFeaturesList = document.querySelector('.sukha-content ul');
        if (sukhaFeaturesList) {
            sukhaFeaturesList.innerHTML = '';
            t.sukha_features.forEach(f => {
                const li = document.createElement('li');
                li.textContent = f;
                sukhaFeaturesList.appendChild(li);
            });
        }
        
        const sukhaDownloadBtn = document.querySelector('.sukha-buttons .download-btn');
        if (sukhaDownloadBtn) sukhaDownloadBtn.textContent = t.sukha_download;
        
        const sukhaCreateBtn = document.querySelector('.sukha-buttons .create-btn');
        if (sukhaCreateBtn) sukhaCreateBtn.textContent = t.sukha_create;
        
        const sukhaLoginBtn = document.querySelector('.sukha-buttons .login-btn');
        if (sukhaLoginBtn) sukhaLoginBtn.textContent = t.sukha_login;
        
        // Update benefit section
        const benefitRun1 = document.querySelector('.benefit-run p:nth-of-type(1)');
        if (benefitRun1) benefitRun1.innerHTML = t.benefit_run1;
        
        const benefitRun2 = document.querySelector('.benefit-run p:nth-of-type(2)');
        if (benefitRun2) benefitRun2.innerHTML = t.benefit_run2;
        
        const benefitGetStartedBtn = document.querySelector('.benefit-run .get-started-btn');
        if (benefitGetStartedBtn) benefitGetStartedBtn.textContent = t.benefit_getstarted;
        
        // Update support section
        const supportHeadline = document.querySelector('.support-content h2');
        if (supportHeadline) supportHeadline.textContent = t.support_headline;
        
        const supportSub = document.querySelector('.support-content .sub');
        if (supportSub) supportSub.textContent = t.support_sub;
        
        const supportDesc1 = document.querySelector('.support-content p:nth-of-type(1)');
        if (supportDesc1) supportDesc1.textContent = t.support_desc1;
        
        const supportDesc2 = document.querySelector('.support-content p:nth-of-type(2)');
        if (supportDesc2) supportDesc2.textContent = t.support_desc2;
        
        const supportHelpBtn = document.querySelector('.support-content .help-btn');
        if (supportHelpBtn) supportHelpBtn.textContent = t.support_help;
        
        // Update help section
        const helpTitle = document.querySelector('.help-section h3');
        if (helpTitle) helpTitle.textContent = t.help_title;
        
        const helpDesc = document.querySelector('.help-section p');
        if (helpDesc) helpDesc.textContent = t.help_desc;
        
        const helpList = document.querySelector('.help-section ul');
        if (helpList) {
            helpList.innerHTML = '';
            t.help_list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                helpList.appendChild(li);
            });
        }
        
        // Update security section
        const securityHeadline = document.querySelector('.security-section h3');
        if (securityHeadline) securityHeadline.textContent = t.security_headline;
        
        const securityDesc = document.querySelector('.security-section p');
        if (securityDesc) securityDesc.textContent = t.security_desc;
        
        // Update conclusion section
        const conclusionHeadline = document.querySelector('.conclusion-section h3');
        if (conclusionHeadline) conclusionHeadline.textContent = t.conclusion_headline;
        
        const conclusionDesc = document.querySelector('.conclusion-section p');
        if (conclusionDesc) conclusionDesc.textContent = t.conclusion_desc;
        
        const conclusionDownloadBtn = document.querySelector('.conclusion-section .download-btn');
        if (conclusionDownloadBtn) conclusionDownloadBtn.textContent = t.conclusion_download;
        
        // Update footer section
        const footerHeadline = document.querySelector('footer h2');
        if (footerHeadline) footerHeadline.textContent = t.footer_headline;
        
        const subscribeHeadline = document.querySelector('footer .subscribe h3');
        if (subscribeHeadline) subscribeHeadline.textContent = t.subscribe_headline;
        
        const subscribeDesc = document.querySelector('footer .subscribe p');
        if (subscribeDesc) subscribeDesc.textContent = t.subscribe_desc;
        
        const socialGuarantee = document.querySelector('footer .social-links li:nth-of-type(1)');
        if (socialGuarantee) socialGuarantee.textContent = t.social_guarantee;
        
        const socialInsured = document.querySelector('footer .social-links li:nth-of-type(2)');
        if (socialInsured) socialInsured.textContent = t.social_insured;
        
        const socialCompliance = document.querySelector('footer .social-links li:nth-of-type(3)');
        if (socialCompliance) socialCompliance.textContent = t.social_compliance;
        
        const copyrightDesc = document.querySelector('footer .copyright p');
        if (copyrightDesc) copyrightDesc.textContent = t.copyright_desc;
    }
}

// Language selection event handlers
if (langBtn && langList) {
    langBtn.addEventListener('click', () => {
        langList.classList.toggle('show');
    });
    
        langList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedLang = e.target.getAttribute('data-lang');
            applyTranslation(selectedLang);
            langList.classList.remove('show');
            langBtn.textContent = e.target.textContent;
        }
    });
}

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (langBtn && langList && !langBtn.contains(e.target) && !langList.contains(e.target)) {
        langList.classList.remove('show');
    }
});