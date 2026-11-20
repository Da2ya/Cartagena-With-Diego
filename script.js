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
                destinations: "Islas del Rosario, Cholón & Playa Tranquila"
            },
            desc_en: {
                capacity: "4 - 6 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice",
                destinations: "Rosario Islands, Cholón & Playa Tranquila"
            },
            images: ["CASA BARU 1.jpeg", 
                "CASA BARU 2.jpeg", 
                "CASA BARU 3.jpeg", 
                "CASA BARU 4.jpeg"]
        },
        {
            tag: "Marianas II",
            title: "29 feet Boat",
            desc_es: {
                capacity: "12 personas",
                bathroom: "Baño incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Sonido Bluetooth",
                destinations: "Islas del Rosario, Cholón & Playa Tranquila"
            },
            desc_en: {
                capacity: "12 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Bluetooth Sound",
                destinations: "Rosario Islands, Cholón & Playa Tranquila"
            },
            images: ["MARINA II 1.jpeg", 
                "MARINA II 2.jpeg", 
                "MARINA II 3.jpeg", 
                "MARINA II 4.jpeg",
                "MARINA II 5.jpeg",]
        },
        {
            tag: "Marianas III",
            title: "32 feet Boat",
            desc_es: {
                capacity: "17 personas",
                bathroom: "Baño incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Sonido Bluetooth",
                destinations: "Islas del Rosario, Cholón & Playa Tranquila"
            },
            desc_en: {
                capacity: "17 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Bluetooth Sound",
                destinations: "Rosario Islands, Cholón & Playa Tranquila"
            },
            images: ["MARIANA III 1.jpeg", 
                "MARIANA III 2.jpeg",
                "MARIANA III 3.jpeg",
                "MARIANA III 4.jpeg",
                "MARIANA III 5.jpeg"]
        },
        {
            tag: "Marianas IV",
            title: "39 feet Boat",
            desc_es: {
                capacity: "20 personas",
                bathroom: "Baño de lujo incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / Starlink Wi-Fi",
                destinations: "Islas del Rosario, Cholón & Playa Tranquila"
            },
            desc_en: {
                capacity: "20 people",
                bathroom: "Luxury bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Starlink Wi-Fi",
                destinations: "Rosario Islands, Cholón & Playa Tranquila"
            },
            images: ["MARIANA IV 1.jpeg",
                "MARIANA IV 2.jpeg",
                "MARIANA IV 3.jpeg",
                "MARIANA IV 4.jpeg",
                "MARIANA IV 5.jpeg"
            ]
        }
        
    ],
    yachts: [
        {
            tag: "Black Firpol",
            title: "42 feet Yacht",
            desc_es: {
                capacity: "20 personas",
                bathroom: "Baño incluido",
                time: "9:00 am a 4:00 pm",
                extras: "Hielo / JL Audio Sound",
                destinations: "Islas del Rosario, Cholón & Playa Tranquila"
            },
            desc_en: {
                capacity: "20 people",
                bathroom: "Bathroom included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / JL Audio Sound",
                destinations: "Rosario Islands, Cholón & Playa Tranquila"
            },
            images: ["blackfirpol_1.jpg"]
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
                destinations: "Islas del Rosario & Sunset Bay"
            },
            desc_en: {
                capacity: "30 people",
                bathroom: "2 Bathrooms included",
                time: "9:00 am to 4:00 pm",
                extras: "Ice / Sunbeds",
                destinations: "Rosario Islands & Sunset Bay"
            },
            images: ["marianas4_1.jpg"]
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
            images: ["cartagena.jpg"]
        }
    ],
    beachclubs: [
        {
            tag: "VIP Beach Pass",
            title: "Exclusive Rosario Beach Club",
            desc_es: {
                capacity: "Pasadía individual / Grupos",
                bathroom: "Instalaciones VIP",
                time: "9:00 am a 5:00 pm",
                extras: "Cama de sol / Coctel de bienvenida",
                destinations: "Islas del Rosario"
            },
            desc_en: {
                capacity: "Individual pass / Groups",
                bathroom: "VIP Facilities",
                time: "9:00 am to 5:00 pm",
                extras: "Sunbed / Welcome cocktail",
                destinations: "Rosario Islands"
            },
            images: ["isla baru.jpg"]
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
                extras: "Equipo de seguridad & Guía",
                destinations: "Senderos naturales"
            },
            desc_en: {
                capacity: "1 - 2 people per ATV",
                bathroom: "Available at base",
                time: "2 to 3 hours (Flexible)",
                extras: "Safety gear & Guide",
                destinations: "Natural trails"
            },
            images: ["isla baru.jpg"]
        },
        {
            tag: "Cultural Tour",
            title: "Private Palenque Experience",
            desc_es: {
                capacity: "Grupos privados",
                bathroom: "Paradas acondicionadas",
                time: "9:00 am a 2:00 pm",
                extras: "Transporte privado A/C & Guía local",
                destinations: "San Basilio de Palenque"
            },
            desc_en: {
                capacity: "Private groups",
                bathroom: "Conditioned stops",
                time: "9:00 am to 2:00 pm",
                extras: "Private A/C Transport & local guide",
                destinations: "San Basilio de Palenque"
            },
            images: ["cartagena.jpg"]
        },
        {
            tag: "Beach Day",
            title: "Playa Tranquila Experience",
            desc_es: {
                capacity: "Individual / Grupos",
                bathroom: "Disponible en zona VIP",
                time: "Día completo",
                extras: "Almuerzo típico & Asoleadora",
                destinations: "Barú - Playa Tranquila"
            },
            desc_en: {
                capacity: "Individual / Groups",
                bathroom: "Available in VIP area",
                time: "Full day",
                extras: "Traditional lunch & Sunbed",
                destinations: "Barú - Playa Tranquila"
            },
            images: ["isla baru.jpg"]
        },
        {
            tag: "Island Getaway",
            title: "Tierra Bomba Day Pass",
            desc_es: {
                capacity: "Individual / Grupos",
                bathroom: "Instalaciones del club",
                time: "9:00 am a 5:00 pm",
                extras: "Piscina & Coctel de bienvenida",
                destinations: "Isla Tierra Bomba"
            },
            desc_en: {
                capacity: "Individual / Groups",
                bathroom: "Club facilities",
                time: "9:00 am to 5:00 pm",
                extras: "Pool & Welcome cocktail",
                destinations: "Tierra Bomba Island"
            },
            images: ["cartagena.jpg"]
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
                extras: "Menú personalizado caribeño / internacional",
                destinations: "Cartagena (Centro Histórico & Islas)"
            },
            desc_en: {
                capacity: "Groups and families",
                bathroom: "At-home / Villa / Yacht service",
                time: "Custom schedule",
                extras: "Custom Caribbean / International menu",
                destinations: "Cartagena (Historic Center & Islands)"
            },
            images: ["cartagena.jpg"]
        }
    ]
};

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
        accommodations: currentLang === 'EN' ? "Accommodations Catalog" : "Catálogo de Alojamiento",
        beachclubs: currentLang === 'EN' ? "Beach Clubs Catalog" : "Catálogo de Clubes de Playa",
        excursions: currentLang === 'EN' ? "Excursions & Tours Catalog" : "Catálogo de Excursiones y Tours",
        chef: currentLang === 'EN' ? "Private Chef Experience" : "Experiencia de Chef Privado"
    };

    title.innerText = categoryTitles[categoryKey] || "Catalog";
    const items = catalogData[categoryKey] || [];
    
    if (items.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 30px; font-family:'Montserrat'; color:#888;">
            ${currentLang === 'EN' ? 'More options coming soon. Inquire via WhatsApp!' : '¡Próximamente más opciones disponibles. Consulta por WhatsApp!'}
        </p>`;
    } else {
        items.forEach((item, index) => {
            const dataObj = currentLang === 'EN' ? item.desc_en : item.desc_es;
            const msgText = `Hello Concierge Diego, I would like to check availability and details for: ${item.title} (${item.tag})`;
            const wsUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msgText)}`;

            const card = document.createElement('div');
            card.className = 'modal-item-card reference-card';

            const imageList = item.images && item.images.length > 0 ? item.images : ['cartagena.jpg'];
            
            let mediaHTML = `
                <div class="ref-slider-box" id="slider-${index}">
                    <span class="boat-mini-tag">${item.tag}</span>
                    <div class="ref-slides-track">
                        ${imageList.map((imgSrc, i) => `<img src="${imgSrc}" class="${i === 0 ? 'active' : ''}" alt="${item.title}" loading="lazy">`).join('')}
                    </div>
                    ${imageList.length > 1 ? `
                        <button class="ref-arrow prev" onclick="moveSlide(${index}, -1)">&#10094;</button>
                        <button class="ref-arrow next" onclick="moveSlide(${index}, 1)">&#10095;</button>
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
                    <a href="${wsUrl}" target="_blank" class="btn-book-now">
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

    images[slideIndex].classList.add('active');
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function closeCategoryModal() {
    const modal = document.getElementById('category-modal');
    if (modal) modal.classList.remove('active');
}