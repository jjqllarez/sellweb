// === TRADUCCIONES ===
const translations = {
  es: {
    heroTitle: "Operamos en Venezuela como su brazo local.<br>Respaldados desde EE. UU., ejecutamos sin límites.",
    heroSubtitle: "Nos encargamos de <strong>todo lo operativo</strong> para que su empresa se enfoque en lo estratégico.<br>Desde aduanas hasta alojamiento: <strong>usted llega, nosotros actuamos</strong>.",
    servicesTitle: "Todo lo que necesita, listo al llegar",
    logisticsTitle: "Logística y Comercio Exterior",
    mobilityTitle: "Movilidad y Hospitalidad",
    legalTitle: "Soluciones Corporativas y Legales",
    trustTitle: "La ventaja de una LLC estadounidense con presencia operativa real en el terreno"
  },
  en: {
    heroTitle: "We operate in Venezuela as your local arm.<br>Backed from the U.S., we execute without limits.",
    heroSubtitle: "We handle all <strong>operational tasks</strong> so your company can focus on strategy.<br>From customs to accommodation: <strong>you arrive, we act</strong>.",
    servicesTitle: "Everything you need, ready upon arrival",
    logisticsTitle: "Logistics & Foreign Trade",
    mobilityTitle: "Mobility & Hospitality",
    legalTitle: "Corporate & Legal Solutions",
    trustTitle: "The advantage of a U.S.-registered LLC with boots on the ground in Venezuela"
  }
};

let currentLang = 'es';

function translatePage(lang) {
  currentLang = lang;
  
  document.querySelector('#hero h1').innerHTML = translations[lang].heroTitle;
  document.querySelector('#hero p').innerHTML = translations[lang].heroSubtitle;
  document.querySelector('.section-title').innerHTML = translations[lang].servicesTitle;
  document.querySelectorAll('.service-card h3')[0].textContent = translations[lang].logisticsTitle;
  document.querySelectorAll('.service-card h3')[1].textContent = translations[lang].mobilityTitle;
  document.querySelectorAll('.service-card h3')[2].textContent = translations[lang].legalTitle;
  document.querySelector('#trust .section-title').innerHTML = translations[lang].trustTitle;

  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function switchLang(lang) {
  translatePage(lang);
}

// Toggle Mobile Menu
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('menu-open');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Cerrar menú móvil
      document.querySelector('.nav-menu').classList.remove('menu-open');
    }
  });
});

// Formulario de contacto
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = currentLang === 'es' 
    ? '¡Gracias por su consulta! Pronto nos pondremos en contacto.' 
    : 'Thank you for your inquiry! We will contact you soon.';
  alert(msg);
  this.reset();
});

// Rastreo de carga
document.querySelector('.btn-tracking').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('trackingModal').style.display = 'block';
});

document.querySelector('.close')?.addEventListener('click', function() {
  document.getElementById('trackingModal').style.display = 'none';
});

window.onclick = function(event) {
  const modal = document.getElementById('trackingModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function trackShipment() {
  const num = document.getElementById('trackingNumber').value;
  const result = document.getElementById('trackingResult');
  if (num) {
    const msg = currentLang === 'es'
      ? `<strong>Estado:</strong> En tránsito hacia Caracas. Llegada estimada: 15/01/2026.`
      : `<strong>Status:</strong> In transit to Caracas. Estimated arrival: 01/15/2026.`;
    result.innerHTML = msg;
  } else {
    result.innerHTML = currentLang === 'es' 
      ? "Por favor ingrese un número de guía." 
      : "Please enter a tracking number.";
  }
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
