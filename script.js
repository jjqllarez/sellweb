const translations = {
  es: {
    title: "Soluciones Logísticas Globales | Haynes Global Supply",
    navHome: "Inicio",
    navServices: "Servicios",
    navTrust: "Confianza",
    navContact: "Contacto",
    btnPortal: "Portal de Clientes",
    btnTrackHeader: "Rastreo de Carga",
    heroH1: "Su infraestructura operativa global.<br>Gestionada desde EE. UU.",
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
    msgPh: "¿En qué mercado necesita operar?",
    btnWhatsapp: "Consultar por WhatsApp",
    fTitleServices: "Servicios Destacados",
    sq1: "Registro Empresarial",
    sq2: "Logística Express",
    sq3: "Gestión de Personal"
  },
  en: {
    title: "Global Logistics Solutions | Haynes Global Supply",
    navHome: "Home",
    navServices: "Services",
    navTrust: "Trust",
    navContact: "Contact",
    btnPortal: "Client Portal",
    btnTrackHeader: "Cargo Tracking",
    heroH1: "Your global operational infrastructure.<br>Managed from the U.S.",
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
    msgPh: "Which market do you need to operate in?",
    btnWhatsapp: "Consult via WhatsApp",
    fTitleServices: "Featured Services",
    sq1: "Business Registration",
    sq2: "Express Logistics",
    sq3: "Staff Management"
  }
};

function translatePage(lang) {
  // Título de la pestaña
  document.getElementById('page-title').textContent = translations[lang].title;
  
  // Navegación
  document.getElementById('nav-home').textContent = translations[lang].navHome;
  document.getElementById('nav-services').textContent = translations[lang].navServices;
  document.getElementById('nav-trust').textContent = translations[lang].navTrust;
  document.getElementById('nav-contact').textContent = translations[lang].navContact;
  
  // Botones Header
  document.getElementById('btn-portal').innerHTML = `<i class="fas fa-user"></i> ${translations[lang].btnPortal}`;
  document.getElementById('btn-track-header').innerHTML = `<i class="fas fa-box-open"></i> ${translations[lang].btnTrackHeader}`;

  // Hero
  document.getElementById('hero-h1').innerHTML = translations[lang].heroH1;
  document.getElementById('hero-p').textContent = translations[lang].heroP;
  document.getElementById('hero-btn-primary').textContent = translations[lang].heroBtnPrimary;
  document.getElementById('hero-btn-secondary').textContent = translations[lang].heroBtnSecondary;

  // Servicios (Tarjetas)
  document.getElementById('services-main-title').textContent = translations[lang].servicesMainTitle;
  document.querySelector('.s-title-1').textContent = translations[lang].sTitle1;
  document.querySelector('.s-list-1').innerHTML = translations[lang].sList1;
  document.querySelector('.s-benefit-1').textContent = translations[lang].sBenefit1;
  
  document.querySelector('.s-title-2').textContent = translations[lang].sTitle2;
  document.querySelector('.s-list-2').innerHTML = translations[lang].sList2;
  document.querySelector('.s-benefit-2').textContent = translations[lang].sBenefit2;

  document.querySelector('.s-title-3').textContent = translations[lang].sTitle3;
  document.querySelector('.s-list-3').innerHTML = translations[lang].sList3;
  document.querySelector('.s-benefit-3').textContent = translations[lang].sBenefit3;

  // Confianza
  document.getElementById('trust-title').textContent = translations[lang].trustTitle;
  document.getElementById('trust-p1').innerHTML = translations[lang].trustP1;
  document.getElementById('trust-p2').textContent = translations[lang].trustP2;
  document.getElementById('trust-p3').innerHTML = translations[lang].trustP3;
  document.getElementById('badge-llc').textContent = translations[lang].badgeLlc;
  document.getElementById('badge-global').textContent = translations[lang].badgeGlobal;

  // Footer & Formulario
  document.getElementById('f-title-hq').textContent = translations[lang].fTitleHq;
  document.getElementById('f-country-usa').innerHTML = `<i class="fas fa-flag-usa"></i> ${translations[lang].fCountryUsa}`;
  document.getElementById('f-title-form').textContent = translations[lang].fTitleForm;
  document.getElementById('name').placeholder = translations[lang].namePh;
  document.getElementById('email').placeholder = translations[lang].emailPh;
  document.getElementById('opt-default').textContent = translations[lang].optDefault;
  document.getElementById('message').placeholder = translations[lang].msgPh;
  document.getElementById('btn-whatsapp').textContent = translations[lang].btnWhatsapp;
  document.getElementById('f-title-services').textContent = translations[lang].fTitleServices;
  document.querySelector('.s-q-1').textContent = translations[lang].sq1;
  document.querySelector('.s-q-2').textContent = translations[lang].sq2;
  document.querySelector('.s-q-3').textContent = translations[lang].sq3;

  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
}

function switchLang(lang) {
  translatePage(lang);
  // Marcar el botón activo
  const buttons = document.querySelectorAll('.lang-btn');
  if (lang === 'es') buttons[0].classList.add('active');
  else buttons[1].classList.add('active');
}

function sendToWhatsApp() {
  // Reemplaza con tu número de teléfono real (con código de país sin el +)
  const phoneNumber = "+5804148433777"; 
  
  // Captura de datos usando los IDs del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  // Validación básica
  if (!name || !email || !service || !message) {
    alert("Por favor, complete todos los campos antes de enviar.");
    return;
  }

  // Formateo del mensaje para Haynes Global Supply
  const text = `*Nueva Consulta - Haynes Global Supply*%0A%0A` +
               `*Nombre:* ${name}%0A` +
               `*Email:* ${email}%0A` +
               `*Servicio:* ${service}%0A` +
               `*Mensaje:* ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  // Abre WhatsApp en una nueva pestaña
  window.open(url, '_blank');
}
