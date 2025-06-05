// Configuration de l'application
const config = {
    apiBaseUrl: 'https://restcountries.com/v3.1'
};

// État de l'application
const state = {
    currentView: 'list',
    currentCountry: null,
    allCountries: [],
    filteredCountries: [],
    adventures: []
};

// Données des pays avec évaluations et attractions
const countryData = {
    "Norvège": {
        rating: 4.8,
        highlights: ["Fjords de l'Ouest", "Îles Lofoten", "Aurores boréales", "Preikestolen", "Bergen"],
        description: "La Norvège, c'est le paradis des amoureux de nature sauvage. Entre les fjords majestueux, les montagnes imposantes et les petites villes pittoresques, chaque coin de route offre un décor digne d'une carte postale.",
        adventures: [
            { 
                title: "Voile et randonnées au pays des ours polaires", 
                duration: "13 jours", 
                price: "À partir de 5890 €", 
                image: "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Explorez les côtes norvégiennes en voilier avec des randonnées dans les régions polaires."
            },
            { 
                title: "Expédition en kayak dans les fjords", 
                duration: "8 jours", 
                price: "À partir de 3200 €", 
                image: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Pagaie à travers les fjords les plus spectaculaires de Norvège."
            }
        ]
    },
    "Ouganda": {
        rating: 4.7,
        highlights: ["Forêt de Bwindi", "Parc Murchison Falls", "Parc Queen Elizabeth", "Montagnes Rwenzori", "Parc Kibale"],
        description: "L'Ouganda est un véritable trésor pour les voyageurs en quête de nature et d'aventure. Partez à la rencontre des gorilles de montagne dans la forêt impénétrable de Bwindi, une expérience inoubliable.",
        adventures: [
            { 
                title: "Rencontre avec les gorilles de montagne", 
                duration: "5 jours", 
                price: "À partir de 2850 €", 
                image: "https://images.unsplash.com/photo-1559715541-5d0adf32dd1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Expérience unique de trekking pour observer les gorilles dans leur habitat naturel."
            },
            { 
                title: "Safari dans les parcs nationaux", 
                duration: "10 jours", 
                price: "À partir de 4200 €", 
                image: "https://images.unsplash.com/photo-1602276506752-cec706667215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Découverte complète des parcs nationaux et de la diversité faunique de l'Ouganda."
            }
        ]
    },
    "Mozambique": {
        rating: 4.5,
        highlights: ["Archipel de Bazaruto", "Ilha de Moçambique", "Parc Gorongosa", "Vilanculos", "Maputo"],
        description: "Le Mozambique est un véritable joyau de l'Afrique de l'Est, où les plages de sable blanc de l'archipel de Bazaruto offrent un cadre idyllique pour la plongée et le snorkeling.",
        adventures: [
            { 
                title: "Plongée dans l'archipel de Bazaruto", 
                duration: "7 jours", 
                price: "À partir de 2450 €", 
                image: "https://images.unsplash.com/photo-1568571782110-3b5db6d7a3d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Exploration des récifs coralliens et de la vie marine exceptionnelle."
            }
        ]
    },
    "Japon": {
        rating: 4.6,
        highlights: ["Tokyo", "Kyoto", "Mont Fuji", "Miyajima", "Nara"],
        description: "De l'animation de Tokyo au zen de Kyoto en passant par la décontraction d'Okinawa, le Japon est un mélange de high-tech, de politesse et d'un grand respect du passé.",
        adventures: [
            { 
                title: "Circuit culturel de Tokyo à Kyoto", 
                duration: "14 jours", 
                price: "À partir de 5200 €", 
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Immersion dans la culture traditionnelle et moderne du Japon."
            }
        ]
    },
    "Nouvelle-Zélande": {
        rating: 4.7,
        highlights: ["Milford Sound", "Mount Cook", "Tongariro", "Queenstown", "Abel Tasman"],
        description: "Isolée et sauvage, la Nouvelle-Zélande est en haut de la liste de beaucoup de voyageurs. Ses paysages incroyables ont servi de décors au Seigneur des Anneaux.",
        adventures: [
            { 
                title: "Randonnée dans les Alpes du Sud", 
                duration: "12 jours", 
                price: "À partir de 3800 €", 
                image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Traversée des plus beaux paysages montagneux de l'île du Sud."
            }
        ]
    },
    "France": {
        rating: 4.9,
        highlights: ["Paris", "Provence", "Mont Saint-Michel", "Côte d'Azur", "Châteaux de la Loire"],
        description: "La France est réputée pour sa gastronomie, ses vins, ses paysages variés et son riche patrimoine culturel. De la tour Eiffel aux plages de la Côte d'Azur, en passant par les vignobles de Bordeaux.",
        adventures: [
            { 
                title: "Découverte gastronomique à travers la France", 
                duration: "10 jours", 
                price: "À partir de 4500 €", 
                image: "https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Voyage culinaire à travers les régions françaises."
            }
        ]
    },
    "Canada": {
        rating: 4.7,
        highlights: ["Rocheuses", "Niagara Falls", "Vancouver", "Québec", "Aurores boréales"],
        description: "Le Canada est le deuxième plus grand pays du monde, avec une nature époustouflante et des villes cosmopolites. Des Rocheuses aux chutes du Niagara, des forêts boréales aux grandes métropoles.",
        adventures: [
            { 
                title: "Road trip à travers les Rocheuses", 
                duration: "15 jours", 
                price: "À partir de 5100 €", 
                image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Aventure à travers les paysages majestueux des montagnes canadiennes."
            }
        ]
    },
    "Brésil": {
        rating: 4.5,
        highlights: ["Amazonie", "Rio de Janeiro", "Chutes d'Iguaçu", "Salvador", "Pantanal"],
        description: "Le Brésil est un pays de contrastes, avec ses plages tropicales, sa forêt amazonienne et ses villes animées. Le carnaval de Rio et les chutes d'Iguaçu sont des expériences inoubliables.",
        adventures: [
            { 
                title: "Exploration de l'Amazonie", 
                duration: "9 jours", 
                price: "À partir de 3200 €", 
                image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Découverte de la biodiversité unique de la forêt amazonienne."
            }
        ]
    },
    "Australie": {
        rating: 4.6,
        highlights: ["Grande Barrière", "Sydney", "Uluru", "Great Ocean Road", "Kangaroo Island"],
        description: "L'Australie est un continent à part entière, avec ses paysages uniques, sa faune endémique et ses plages paradisiaques. De la Grande Barrière de Corail au désert rouge d'Uluru.",
        adventures: [
            { 
                title: "Plongée sur la Grande Barrière de Corail", 
                duration: "7 jours", 
                price: "À partir de 2800 €", 
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                description: "Exploration de l'un des plus grands écosystèmes marins du monde."
            }
        ]
    }
};

// Éléments DOM
const elements = {
    content: document.getElementById('content'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    filterBtns: document.querySelectorAll('.filter-btn')
};

// Initialisation de l'application
async function initApp() {
    await loadCountries();
    setupEventListeners();
    renderCountryList(state.filteredCountries);
}

// Charger les données des pays
async function loadCountries() {
    try {
        const response = await fetch(`${config.apiBaseUrl}/all`);
        const countries = await response.json();
        
        // Filtrer et enrichir les pays avec les données supplémentaires
        state.allCountries = countries
            .filter(country => countryData[country.name.common])
            .map(country => ({
                ...country,
                ...countryData[country.name.common],
                rating: countryData[country.name.common].rating,
                highlights: countryData[country.name.common].highlights
            }));
        
        state.filteredCountries = [...state.allCountries];
    } catch (error) {
        showError('Erreur lors du chargement des données des pays');
        console.error('Erreur:', error);
    }
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Filtres
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            elements.filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterCountries(filter);
        });
    });
}

// Gestion de la recherche
function handleSearch() {
    const query = elements.searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        state.filteredCountries = [...state.allCountries];
    } else {
        state.filteredCountries = state.allCountries.filter(country => 
            country.name.common.toLowerCase().includes(query) ||
            (country.translations?.fra?.common?.toLowerCase().includes(query))
        );
    }
    
    renderCountryList(state.filteredCountries);
}

// Filtrage des pays
function filterCountries(filter) {
    if (filter === 'all') {
        state.filteredCountries = [...state.allCountries];
    } else {
        state.filteredCountries = state.allCountries.filter(country => 
            country.region.toLowerCase() === filter
        );
    }
    
    renderCountryList(state.filteredCountries);
}

// Afficher la liste des pays
function renderCountryList(countries) {
    if (countries.length === 0) {
        elements.content.innerHTML = `
            <div class="not-found">
                <i class="fas fa-map-marked-alt"></i>
                <h2>Aucun pays trouvé</h2>
                <p>Essayez une autre recherche ou utilisez les filtres</p>
            </div>
        `;
        return;
    }
    
    elements.content.innerHTML = `
        <h2>Destinations à Explorer</h2>
        <div class="countries-grid">
            ${countries.map(country => `
                <div class="country-card" data-id="${country.name.common}">
                    <div class="card-image">
                        <img src="${country.flags.png}" alt="${country.name.common}">
                    </div>
                    <div class="card-content">
                        <div class="card-name">${country.name.common}</div>
                        <div class="card-rating">
                            <div class="rating-stars">
                                ${renderStars(country.rating)}
                            </div>
                            <div class="rating-value">${country.rating.toFixed(1)}</div>
                        </div>
                        <ul class="card-highlights">
                            ${country.highlights.slice(0, 3).map(hl => `<li>${hl}</li>`).join('')}
                        </ul>
                        <button class="adventure-btn">Voir les aventures</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Ajouter les écouteurs d'événements pour les cartes
    document.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Empêcher le déclenchement si le bouton est cliqué
            if (e.target.classList.contains('adventure-btn')) {
                return;
            }
            
            const countryName = card.getAttribute('data-id');
            showCountryDetail(countryName);
        });
    });
    
    // Écouteurs pour les boutons d'aventure
    document.querySelectorAll('.adventure-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const countryName = countries[index].name.common;
            showCountryDetail(countryName);
        });
    });
}

// Afficher les étoiles de notation
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${'<i class="fas fa-star-half-alt"></i>'.repeat(halfStar)}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
}

// Afficher les détails d'un pays
function showCountryDetail(countryName) {
    const country = state.allCountries.find(c => c.name.common === countryName);
    
    if (!country) return;
    
    elements.content.innerHTML = `
        <div class="country-detail">
            <div class="detail-header">
                <button class="back-button" id="back-to-list"><i class="fas fa-arrow-left"></i> Retour à la liste</button>
            </div>
            
            <div class="detail-main">
                <div class="detail-image">
                    <img src="${country.flags.png}" alt="${country.name.common}">
                </div>
                
                <div class="detail-info">
                    <h1 class="detail-name">${country.name.common}</h1>
                    <div class="detail-rating">
                        ${renderStars(country.rating)} 
                        <span style="margin-left: 10px; font-size: 1.2rem;">${country.rating.toFixed(1)}/5</span>
                    </div>
                    
                    <div class="detail-stats">
                        <div class="stat-card">
                            <div class="stat-value">${(country.population / 1000000).toFixed(1)}M</div>
                            <div class="stat-label">Habitants</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${country.area.toLocaleString()} km²</div>
                            <div class="stat-label">Superficie</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${country.capital?.[0] || 'Inconnue'}</div>
                            <div class="stat-label">Capitale</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${Object.values(country.languages || {}).join(', ') || 'Inconnue'}</div>
                            <div class="stat-label">Langues</div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-book-open"></i> À Propos</h3>
                        <p>${country.description}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-map-marker-alt"></i> Sites Incontournables</h3>
                        <div class="attractions-grid">
                            ${country.highlights.map(attr => `
                                <div class="attraction-card">
                                    <div class="attraction-image">
                                        <img src="https://source.unsplash.com/featured/?${attr}" alt="${attr}">
                                    </div>
                                    <div class="attraction-name">${attr}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3><i class="fas fa-hiking"></i> Aventures à Découvrir</h3>
                        <div class="adventures">
                            ${country.adventures.map(adv => `
                                <div class="adventure-card">
                                    <div class="adventure-image">
                                        <img src="${adv.image}" alt="${adv.title}">
                                    </div>
                                    <div class="adventure-content">
                                        <div class="adventure-title">${adv.title}</div>
                                        <div class="adventure-meta">
                                            <div class="adventure-duration"><i class="far fa-clock"></i> ${adv.duration}</div>
                                            <div class="adventure-price">${adv.price}</div>
                                        </div>
                                        <div class="adventure-desc">${adv.description}</div>
                                        <a href="#" class="adventure-link">Voir l'expédition</a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter l'écouteur d'événement pour le bouton retour
    document.getElementById('back-to-list').addEventListener('click', () => {
        renderCountryList(state.filteredCountries);
    });
}

// Afficher une erreur
function showError(message) {
    elements.content.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>${message}</h2>
            <p>Veuillez réessayer plus tard.</p>
        </div>
    `;
}

// Démarrer l'application
document.addEventListener('DOMContentLoaded', initApp);