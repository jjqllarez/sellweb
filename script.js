// script.js
const translations = {
    es: {
        title: "Soluciones Logísticas Globales | Haynes Global Supply",
        navHome: "Inicio",
        navServices: "Servicios",
        navTrust: "Confianza",
        navContact: "Contacto",
        btnPortal: "Portal de Clientes",
        btnTrackHeader: "Rastreo de Carga",
        heroH1: "Su infraestructura operativa global. <br>Gestionada desde EE. UU.",
        heroP: "Somos una LLC estadounidense con capacidad de ejecución internacional. Nos encargamos de su logística y operaciones para que usted se enfoque en crecer.",
        heroBtnPrimary: "Solicitar Consulta Gratuita",
        heroBtnSecondary: "Nuestras Soluciones",
        servicesMainTitle: "Soluciones Integrales para Mercados Globales",
        sTitle1: "Logística y Comercio Exterior",
        sList1: "<li>Importación/Exportación de Equipos</li><li>Agentes Aduanales Especializados</li><li>Gestión de Transporte Multimodal</li>",
        sBenefit1: "Eficiencia operativa en cada frontera. Solo resultados.",
        sTitle2: "Movilidad y Hospitalidad",
        sList2: "<li>Gestión de Vuelos y Alojamiento Premium</li><li>Traslados Ejecutivos Seguros</li><li>Acompañamiento y Traductores</li><li>Seguros de Salud e Internacionales</li>",
        sBenefit2: "Su equipo llega cómodo, seguro y listo para operar en cualquier destino.",
        sTitle3: "Soluciones Corporativas",
        sList3: "<li>Soporte para Registro de Empresas</li><li>Asesoría en Cuentas Internacionales</li><li>Contabilidad y Reportes de Gestión</li><li>Estructuración de Recursos Humanos</li>",
        sBenefit3: "Cumpla con los estándares internacionales y locales sin complicaciones.",
        trustTitle: "La seguridad de una LLC con presencia operativa real",
        trustP1: "Somos una <strong>empresa constituida en EE. UU. (LLC)</strong>, lo que garantiza transparencia y estándares legales internacionales.",
        trustP2: "Operamos con un equipo propio y una red de aliados estratégicos.",
        trustP3: "No somos un simple intermediario: <strong>somos su socio de operaciones estratégicas</strong>.",
        badgeLlc: "LLC Registrada – Delaware, USA",
        badgeGlobal: "Presencia Global ↔ Gestión Centralizada",
        fTitleHq: "Nuestra Sede Principal",
        fCountryUsa: "Estados Unidos",
        fTitleForm: "Inicie su Proyecto",
        namePh: "Nombre",
        emailPh: "Email corporativo",
        optDefault: "Seleccione un servicio",
        opt1: "Logística y Comercio Exterior",
        opt2: "Movilidad y Hospitalidad",
        opt3: "Soluciones Corporativas",
        msgPh: "¿En qué mercado necesita operar?",
        btnWhatsapp: "Consultar por WhatsApp",
        fTitleServices: "Servicios Destacados",
        sq1: "Registro Empresarial",
        sq2: "Logística Express",
        sq3: "Gestión de Personal",
        trackingTitle: "Rastreo de Carga",
        trackingInstruction: "Ingrese su número de guía:",
        trackingBtn: "Buscar",
        trackingPlaceholder: "Ej: HGS-123456",
        paymentLabel: "Aceptamos:"
    },
    en: {
        title: "Global Logistics Solutions | Haynes Global Supply",
        navHome: "Home",
        navServices: "Services",
        navTrust: "Trust",
        navContact: "Contact",
        btnPortal: "Client Portal",
        btnTrackHeader: "Cargo Tracking",
        heroH1: "Your global operational infrastructure. <br>Managed from the U.S.",
        heroP: "We are a U.S. LLC with international execution capabilities. We handle your logistics and operations so you can focus on growth.",
        heroBtnPrimary: "Request Free Consultation",
        heroBtnSecondary: "Our Solutions",
        servicesMainTitle: "Comprehensive Solutions for Global Markets",
        sTitle1: "Logistics & Foreign Trade",
        sList1: "<li>Equipment Import/Export</li><li>Specialized Customs Agents</li><li>Multimodal Transport Management</li>",
        sBenefit1: "Operational efficiency at every border. Only results.",
        sTitle2: "Mobility & Hospitality",
        sList2: "<li>Premium Flight & Accommodation Management</li><li>Secure Executive Transfers</li><li>Escort & Professional Translators</li><li>Health & International Insurance</li>",
        sBenefit2: "Your team arrives comfortable, safe, and ready to operate in any destination.",
        sTitle3: "Corporate Solutions",
        sList3: "<li>Company Registration Support</li><li>International Accounts Advisory</li><li>Accounting & Management Reports</li><li>Human Resources Structuring</li>",
        sBenefit3: "Comply with international and local standards without complications.",
        trustTitle: "The security of an LLC with real operational presence",
        trustP1: "We are a <strong>U.S. registered company (LLC)</strong>, ensuring transparency and international legal standards.",
        trustP2: "We operate with our own team and a network of strategic partners.",
        trustP3: "We are not a simple middleman: <strong>we are your strategic operations partner</strong>.",
        badgeLlc: "Registered LLC – Delaware, USA",
        badgeGlobal: "Global Presence ↔ Centralized Management",
        fTitleHq: "Our Headquarters",
        fCountryUsa: "United States",
        fTitleForm: "Start Your Project",
        namePh: "Name",
        emailPh: "Corporate Email",
        optDefault: "Select a service",
        opt1: "Logistics & Foreign Trade",
        opt2: "Mobility & Hospitality",
        opt3: "Corporate Solutions",
        msgPh: "Which market do you need to operate in?",
        btnWhatsapp: "Consult via WhatsApp",
        fTitleServices: "Featured Services",
        sq1: "Business Registration",
        sq2: "Express Logistics",
        sq3: "Staff Management",
        trackingTitle: "Cargo Tracking",
        trackingInstruction: "Enter your tracking number:",
        trackingBtn: "Search",
        trackingPlaceholder: "Ex: HGS-123456",
        paymentLabel: "We Accept:"
    }
};

function translatePage(lang) {
    const t = translations[lang];
    
    // Header
    document.getElementById('page-title').textContent = t.title;
    document.getElementById('nav-home').textContent = t.navHome;
    document.getElementById('nav-services').textContent = t.navServices;
    document.getElementById('nav-trust').textContent = t.navTrust;
    document.getElementById('nav-contact').textContent = t.navContact;
    document.getElementById('btn-portal').innerHTML = `<i class="fas fa-user"></i> ${t.btnPortal}`;
    document.getElementById('btn-track-header').innerHTML = `<i class="fas fa-box-open"></i> ${t.btnTrackHeader}`;
    
    // Hero
    document.getElementById('hero-h1').innerHTML = t.heroH1;
    document.getElementById('hero-p').textContent = t.heroP;
    document.getElementById('hero-btn-primary').textContent = t.heroBtnPrimary;
    document.getElementById('hero-btn-secondary').textContent = t.heroBtnSecondary;
    document.getElementById('payment-label').textContent = t.paymentLabel;
    
    // Services
    document.getElementById('services-main-title').textContent = t.servicesMainTitle;
    document.querySelector('.s-title-1').textContent = t.sTitle1;
    document.querySelector('.s-list-1').innerHTML = t.sList1;
    document.querySelector('.s-benefit-1').textContent = t.sBenefit1;
    document.querySelector('.s-title-2').textContent = t.sTitle2;
    document.querySelector('.s-list-2').innerHTML = t.sList2;
    document.querySelector('.s-benefit-2').textContent = t.sBenefit2;
    document.querySelector('.s-title-3').textContent = t.sTitle3;
    document.querySelector('.s-list-3').innerHTML = t.sList3;
    document.querySelector('.s-benefit-3').textContent = t.sBenefit3;
    
    // Trust
    document.getElementById('trust-title').textContent = t.trustTitle;
    document.getElementById('trust-p1').innerHTML = t.trustP1;
    document.getElementById('trust-p2').textContent = t.trustP2;
    document.getElementById('trust-p3').innerHTML = t.trustP3;
    document.getElementById('badge-llc').innerHTML = `<i class="fas fa-certificate"></i> <span>${t.badgeLlc}</span>`;
    document.getElementById('badge-global').innerHTML = `<i class="fas fa-globe-americas"></i> <span>${t.badgeGlobal}</span>`;
    
    // Footer - Contact Info
    document.getElementById('f-title-hq').textContent = t.fTitleHq;
    document.getElementById('f-country-usa').innerHTML = `<i class="fas fa-flag-usa"></i> ${t.fCountryUsa}`;
    
    // Footer - Form
    document.getElementById('f-title-form').textContent = t.fTitleForm;
    document.getElementById('name').placeholder = t.namePh;
    document.getElementById('email').placeholder = t.emailPh;
    document.getElementById('opt-default').textContent = t.optDefault;
    document.getElementById('opt-1').textContent = t.opt1;
    document.getElementById('opt-2').textContent = t.opt2;
    document.getElementById('opt-3').textContent = t.opt3;
    document.getElementById('message').placeholder = t.msgPh;
    document.getElementById('btn-whatsapp').textContent = t.btnWhatsapp;
    
    // Footer - Quick Services
    document.getElementById('f-title-services').textContent = t.fTitleServices;
    document.getElementById('sq-1').textContent = t.sq1;
    document.getElementById('sq-2').textContent = t.sq2;
    document.getElementById('sq-3').textContent = t.sq3;
    
    // Tracking Modal
    document.getElementById('tracking-title').textContent = t.trackingTitle;
    document.getElementById('tracking-instruction').textContent = t.trackingInstruction;
    document.getElementById('tracking-btn').textContent = t.trackingBtn;
    document.getElementById('trackingNumber').placeholder = t.trackingPlaceholder;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
}

function switchLang(lang) {
    translatePage(lang);
    const buttons = document.querySelectorAll('.lang-btn');
    if (lang === 'es') buttons[0].classList.add('active');
    else buttons[1].classList.add('active');
}

// Tracking Modal Functions
function openModal() {
    const modal = document.getElementById('trackingModal');
    modal.style.display = 'block';
    void modal.offsetWidth;
    modal.style.opacity = '1';
}

function closeModal() {
    const modal = document.getElementById('trackingModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.onclick = function(event) {
    const modal = document.getElementById('trackingModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Asignar evento al botón de tracking
document.addEventListener('DOMContentLoaded', function() {
    const trackBtn = document.getElementById('btn-track-header');
    if (trackBtn) {
        trackBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
});

function sendToWhatsApp() {
    const phoneNumber = "5804148433777"; 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !service || !message) {
        alert("Por favor, complete todos los campos antes de enviar.");
        return;
    }

    const text = `*Nueva Consulta - Haynes Global Supply*%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Servicio:* ${service}%0A` +
        `*Mensaje:* ${message}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
}

// =================================================================
// ANIMACIONES AL HACER SCROLL (Repetibles)
// =================================================================
document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Set initial language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.textContent === 'ES') btn.classList.add('active');
        else btn.classList.remove('active');
    });
});
