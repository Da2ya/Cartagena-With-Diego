const WHATSAPP_NUMBER = "573223851328";

const catalogData = {
    speedboats: [
        {
            tag: "Casa Barú",
            title: "25 feet Boat",
            desc_es: {
                capacity: "4 - 6 personas",
                bathroom: "Baño incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo",
                destinations: "Islas del Rosario, Cholón y Playa Tranquila"
            },
            desc_en: {
                capacity: "4 - 6 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice",
                destinations: "Rosario Islands, Cholón and Playa Tranquila"
            },
            images: ["CASA BARU 1.jpeg", "CASA BARU 2.jpeg", "CASA BARU 3.jpeg", "CASA BARU 4.jpeg"]
        },
        {
            tag: "Marianas II",
            title: "29 feet Boat",
            desc_es: {
                capacity: "12 personas",
                bathroom: "Baño incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Sonido Bluetooth",
                destinations: "Islas del Rosario, Cholón y Playa Tranquila"
            },
            desc_en: {
                capacity: "12 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Bluetooth Sound",
                destinations: "Rosario Islands, Cholón and Playa Tranquila"
            },
            images: [
                "MARINA II 1.jpeg",
                "MARINA II 2.jpeg",
                "MARINA II 3.jpeg",
                "MARINA II 4.jpeg",
                "MARINA II 5.jpeg"
            ]
        },
        {
            tag: "Marianas III",
            title: "32 feet Boat",
            desc_es: {
                capacity: "17 personas",
                bathroom: "Baño incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Sonido Bluetooth",
                destinations: "Islas del Rosario, Cholón y Playa Tranquila"
            },
            desc_en: {
                capacity: "17 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Bluetooth Sound",
                destinations: "Rosario Islands, Cholón and Playa Tranquila"
            },
            images: [
                "MARIANA III 2.jpeg",
                "MARIANA III 1.jpeg",
                "MARIANA III 3.jpeg",
                "MARIANA III 4.jpeg"
            ]
        },
        {
            tag: "Marianas IV",
            title: "39 feet Boat",
            desc_es: {
                capacity: "20 personas",
                bathroom: "Baño de lujo incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Starlink Wi-Fi",
                destinations: "Islas del Rosario, Cholón y Playa Tranquila"
            },
            desc_en: {
                capacity: "20 people",
                bathroom: "Luxury bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Starlink Wi-Fi",
                destinations: "Rosario Islands, Cholón and Playa Tranquila"
            },
            images: [
                "MARIANA IV 1.jpeg",
                "MARIANA IV 3.jpeg",
                "MARIANA IV 4.jpeg"
            ]
        }
    ],
    yachts: [
        {
            tag: "Azimut 55",
            title: "55 feet Yacht",
            desc_es: {
                capacity: "16 personas",
                bathroom: "Baño y ducha de agua dulce",
                time: "9:00 am a 4:00 pm",
                extras: "3 habitaciones, Flybridge, A/C y sonido JBL",
                destinations: "Islas del Rosario, Cholón y Playa Tranquila"
            },
            desc_en: {
                capacity: "16 people",
                bathroom: "Bathroom and fresh water shower",
                time: "9:00 am to 4:00 pm",
                extras: "3 cabins, Flybridge, A/C and JBL sound",
                destinations: "Rosario Islands, Cholón and Playa Tranquila"
            },
            images: [
                "AZIMUT 1.jpeg",
                "AZIMUT 2.jpeg",
                "AZIMUT 3.jpeg",
                "AZIMUT 4.jpeg",
                "AZIMUT 5.jpeg",
                "AZIMUT 6.jpeg",
                "AZIMUT 7.jpeg",
                "AZIMUT 8.jpeg"
            ]
        },
        {
            tag: "Ambar II",
            title: "35 feet Yacht",
            desc_es: {
                capacity: "10 personas",
                bathroom: "Baño completo y ducha de agua dulce",
                time: "9:00 am a 4:00 pm",
                extras: "2 cuartos con A/C, 10 kg hielo, snorkel y tripulación",
                destinations: "Islas del Rosario y Bahía de Cartagena"
            },
            desc_en: {
                capacity: "10 people",
                bathroom: "Full bathroom and fresh water shower",
                time: "9:00 am to 4:00 pm",
                extras: "2 A/C cabins, 10 kg ice, snorkel and crew",
                destinations: "Rosario Islands and Cartagena Bay"
            },
            images: [
                "AMBAR II 1.jpeg",
                "AMBAR II 2.jpeg",
                "AMBAR II 3.jpeg",
                "AMBAR II 4.jpeg",
                "AMBAR II 5.jpeg",
                "AMBAR II 6.jpeg"
            ]
        },
        {
            tag: "Sea Ray 43",
            title: "43 feet Yacht",
            desc_es: {
                capacity: "12 personas",
                bathroom: "Baño y ducha de agua dulce",
                time: "9:00 am a 4:00 pm",
                extras: "2 habitaciones, A/C, asoleadora y sonido JBL",
                destinations: "Islas del Rosario, Cholón y Barú"
            },
            desc_en: {
                capacity: "12 people",
                bathroom: "Bathroom and fresh water shower",
                time: "9:00 am to 4:00 pm",
                extras: "2 cabins, A/C, sunpad and JBL sound",
                destinations: "Rosario Islands, Cholón and Barú"
            },
            images: [
                "SEA RAY 1.jpeg",
                "SEA RAY 2.jpeg",
                "SEA RAY 3.jpeg",
                "SEA RAY 4.jpeg",
                "SEA RAY 5.jpeg",
                "SEA RAY 6.jpeg",
                "SEA RAY 7.jpeg",
                "SEA RAY 8.jpeg"
            ]
        },
        {
            tag: "Tuna 380",
            title: "38 feet Sport Yacht",
            desc_es: {
                capacity: "12 personas",
                bathroom: "Baño, camarote y ducha de agua dulce",
                time: "9:00 am a 4:00 pm",
                extras: "2x Yamaha V8, asador, cojinería beige y JL Audio",
                destinations: "Islas del Rosario, Cholón y Playa Tranquila"
            },
            desc_en: {
                capacity: "12 people",
                bathroom: "Bathroom, cabin and fresh water shower",
                time: "9:00 am to 4:00 pm",
                extras: "Twin Yamaha V8, grill, beige upholstery and JL Audio",
                destinations: "Rosario Islands, Cholón and Playa Tranquila"
            },
            images: [
                "TUNA 1.jpeg",
                "TUNA 2.jpeg",
                "TUNA 3.jpeg",
                "TUNA 4.jpeg",
                "TUNA 5.jpeg"
            ]
        }
    ],
    catamarans: [
        {
            tag: "Luxury Catamaran",
            title: "50 feet Catamaran",
            desc_es: {
                capacity: "30 personas",
                bathroom: "2 Baños incluidos",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Asoleadoras",
                destinations: "Islas del Rosario y Sunset Bay"
            },
            desc_en: {
                capacity: "30 people",
                bathroom: "2 Bathrooms included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Sunbeds",
                destinations: "Rosario Islands and Sunset Bay"
            },
            images: ["CATAMARANS.jpeg"]
        }
    ],
    chef: [
        {
            tag: "Private Chef",
            title: "Exclusive Culinary Experience",
            desc_es: {
                capacity: "Grupos y familias",
                bathroom: "Servicio a domicilio / Villa / Yate",
                time: "Horario a la medida",
                extras: "Menú personalizado caribeño e internacional",
                destinations: "Cartagena (Centro Histórico e Islas)"
            },
            desc_en: {
                capacity: "Groups and families",
                bathroom: "At-home / Villa / Yacht service",
                time: "Custom schedule",
                extras: "Custom Caribbean and international menu",
                destinations: "Cartagena (Historic Center and Islands)"
            },
            images: ["PRIVATE CHEF.jpeg"]
        }
    ],
    accommodations: [
        {
            tag: "Historic Villa",
            title: "Luxury Walled City Mansion",
            desc_es: {
                capacity: "10 - 14 huéspedes",
                bathroom: "5 Baños en suite",
                time: "Check-in: 3:00 pm / Check-out: 12:00 pm",
                extras: "Piscina privada / Mayordomo / A/C",
                destinations: "Centro Histórico, Cartagena"
            },
            desc_en: {
                capacity: "10 - 14 guests",
                bathroom: "5 En-suite bathrooms",
                time: "Check-in: 3:00 pm / Check-out: 12:00 pm",
                extras: "Private pool / Butler / A/C",
                destinations: "Historic Center, Cartagena"
            },
            images: ["ACCOMMODATIONS.jpeg"]
        }
    ],
    beachclubs: [
        {
            tag: "VIP Beach Pass",
            title: "Exclusive Rosario Beach Club",
            desc_es: {
                capacity: "Pasadía individual / Grupos",
                bathroom: "Instalaciones VIP",
                time: "8:00 am a 4:00 pm",
                extras: "Cama de sol / Coctel de bienvenida",
                destinations: "Islas del Rosario"
            },
            desc_en: {
                capacity: "Individual pass / Groups",
                bathroom: "VIP Facilities",
                time: "8:00 am to 4:00 pm",
                extras: "Sunbed / Welcome cocktail",
                destinations: "Rosario Islands"
            },
            images: ["BEACH CLUBS.jpeg"]
        }
    ],
    excursions: [
        {
            tag: "ATV Safari",
            title: "Quad Tour Adventure",
            desc_es: {
                capacity: "1 - 2 personas por ATV",
                bathroom: "Disponible en base",
                time: "2 a 3 horas (Flexibles)",
                extras: "Equipo de seguridad y guía",
                destinations: "Senderos naturales"
            },
            desc_en: {
                capacity: "1 - 2 people per ATV",
                bathroom: "Available at base",
                time: "2 to 3 hours (Flexible)",
                extras: "Safety gear and guide",
                destinations: "Natural trails"
            },
            images: ["ATV EXCURSIONS.jpeg"]
        }
    ]
};

function updateFloatingWhatsApp() {
    const waBtn = document.getElementById('floating-whatsapp-btn');
    if (!waBtn) return;

    const defaultMsg = currentLang === 'EN'
        ? "Hello Concierge Diego, I would like VIP assistance for my trip to Cartagena."
        : "Hola Concierge Diego, me gustaría recibir atención VIP para mi viaje a Cartagena.";

    waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
}

function toggleNavMenu() {
    const navOverlay = document.getElementById('nav-overlay');
    if (navOverlay) navOverlay.classList.toggle('active');
}

let currentLang = 'EN';

function toggleLanguage() {
    currentLang = currentLang === 'EN' ? 'ES' : 'EN';

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
        langLabel.innerText = currentLang === 'EN' ? 'ES' : 'EN';
    }

    const elements = document.querySelectorAll('[data-es]');
    elements.forEach(el => {
        const textEn = el.getAttribute('data-en');
        const textEs = el.getAttribute('data-es');
        if (currentLang === 'EN' && textEn) {
            el.innerHTML = textEn;
        } else if (currentLang === 'ES' && textEs) {
            el.innerHTML = textEs;
        }
    });

    updateFloatingWhatsApp();

    const modal = document.getElementById('category-modal');
    if (modal && modal.classList.contains('active')) {
        const activeCategory = modal.getAttribute('data-current-cat') || 'speedboats';
        openCategoryModal(activeCategory);
    }
}

function openCategoryModal(categoryKey) {
    const modal = document.getElementById('category-modal');
    const container = document.getElementById('modal-items-container');
    const title = document.getElementById('modal-category-title');

    if (!container || !modal || !title) return;

    modal.setAttribute('data-current-cat', categoryKey);
    container.innerHTML = '';

    const categoryTitles = {
        speedboats: currentLang === 'EN' ? "Speedboats Catalog" : "Catálogo de Botes Rápidos",
        yachts: currentLang === 'EN' ? "Yachts Catalog" : "Catálogo de Yates",
        catamarans: currentLang === 'EN' ? "Catamarans Catalog" : "Catálogo de Catamaranes",
        chef: currentLang === 'EN' ? "Private Chef Experience" : "Experiencia de Chef Privado",
        accommodations: currentLang === 'EN' ? "Accommodations Catalog" : "Catálogo de Alojamiento",
        beachclubs: currentLang === 'EN' ? "Beach Clubs Catalog" : "Catálogo de Clubes de Playa",
        excursions: currentLang === 'EN' ? "Excursions & Tours Catalog" : "Catálogo de Excursiones y Tours"
    };

    title.innerText = categoryTitles[categoryKey] || "Catalog";
    const items = catalogData[categoryKey] || [];

    if (items.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 30px; font-family:'Montserrat'; color:#666;">
            ${currentLang === 'EN' ? 'More options coming soon. Inquire via WhatsApp!' : '¡Próximamente más opciones disponibles. Consulta por WhatsApp!'}
        </p>`;
    } else {
        items.forEach((item, index) => {
            const dataObj = currentLang === 'EN' ? item.desc_en : item.desc_es;
            const msgText = currentLang === 'EN'
                ? `Hello Concierge Diego, I would like to check availability and details for: ${item.title} (${item.tag})`
                : `Hola Concierge Diego, me gustaría consultar disponibilidad y detalles de: ${item.title} (${item.tag})`;
            const wsUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msgText)}`;

            const card = document.createElement('div');
            card.className = 'modal-item-card reference-card';

            const imageList = item.images && item.images.length > 0 ? item.images : ['cartagena.jpg'];

            const mediaHTML = `
                <div class="ref-slider-box" id="slider-${index}">
                    <span class="boat-mini-tag">${item.tag}</span>
                    <div class="ref-slides-track">
                        ${imageList.map((imgSrc, i) => `<img src="${imgSrc}" class="${i === 0 ? 'active' : ''}" alt="${item.title}" loading="lazy">`).join('')}
                    </div>
                    ${imageList.length > 1 ? `
                        <button class="ref-arrow prev" onclick="moveSlide(${index}, -1)" aria-label="Previous image">&#10094;</button>
                        <button class="ref-arrow next" onclick="moveSlide(${index}, 1)" aria-label="Next image">&#10095;</button>
                        <div class="ref-dots">
                            ${imageList.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" onclick="setSlide(${index}, ${i})"></span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            `;

            card.innerHTML = `
                ${mediaHTML}
                <div class="ref-info-box">
                    <h3>${item.title}</h3>
                    <ul class="ref-specs-list">
                        <li><i class="fas fa-users"></i> <span>${dataObj.capacity}</span></li>
                        <li><i class="fas fa-restroom"></i> <span>${dataObj.bathroom}</span></li>
                        <li><i class="far fa-clock"></i> <span>${currentLang === 'EN' ? 'Time: ' : 'Horario: '}${dataObj.time}</span></li>
                        <li><i class="fas fa-box"></i> <span>${dataObj.extras}</span></li>
                        <li><i class="fas fa-map-marker-alt"></i> <span>${currentLang === 'EN' ? 'Destinations: ' : 'Destinos: '}${dataObj.destinations}</span></li>
                    </ul>
                    <a href="${wsUrl}" target="_blank" rel="noopener noreferrer" class="btn-book-now">
                        ${currentLang === 'EN' ? 'Book now' : 'Reservar ahora'}
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    modal.classList.add('active');
}

function moveSlide(cardIndex, direction) {
    const slider = document.getElementById(`slider-${cardIndex}`);
    if (!slider) return;
    const images = slider.querySelectorAll('.ref-slides-track img');
    const dots = slider.querySelectorAll('.ref-dots .dot');

    if (images.length === 0) return;
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    if (activeIndex === -1) activeIndex = 0;

    images[activeIndex].classList.remove('active');
    if (dots[activeIndex]) dots[activeIndex].classList.remove('active');

    activeIndex += direction;
    if (activeIndex >= images.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = images.length - 1;

    images[activeIndex].classList.add('active');
    if (dots[activeIndex]) dots[activeIndex].classList.add('active');
}

function setSlide(cardIndex, slideIndex) {
    const slider = document.getElementById(`slider-${cardIndex}`);
    if (!slider) return;
    const images = slider.querySelectorAll('.ref-slides-track img');
    const dots = slider.querySelectorAll('.ref-dots .dot');

    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (images[slideIndex]) images[slideIndex].classList.add('active');
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function closeCategoryModal() {
    const modal = document.getElementById('category-modal');
    if (modal) modal.classList.remove('active');
}

function handleBackdropClick(event) {
    if (event.target && event.target.id === 'category-modal') {
        closeCategoryModal();
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeCategoryModal();
        const navOverlay = document.getElementById('nav-overlay');
        if (navOverlay && navOverlay.classList.contains('active')) {
            navOverlay.classList.remove('active');
        }
    }
});

updateFloatingWhatsApp();