// === MOBILE NAV ===
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.querySelector('.nav-links');
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                const open = navLinks.classList.toggle('open');
                navToggle.setAttribute('aria-expanded', String(open));
                navToggle.textContent = open ? '✕' : '☰';
            });
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.textContent = '☰';
                });
            });

            document.addEventListener('click', event => {
                if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
                    navLinks.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.textContent = '☰';
                }
            });
        }

        // === DATA ===
        const places = [{
            name: "Hampi",
            region: "Vijayanagara",
            dist: "340 km",
            rating: "4.9",
            desc: "UNESCO World Heritage ruins of the Vijayanagara Empire amid surreal boulder landscapes.",
            img: "https://i.pinimg.com/1200x/36/b4/d3/36b4d3b434eb9619b90237b117fd7c39.jpg",
            fee: "₹40 / ₹600 (Foreign)",
            time: "Sunrise–Sunset",
            season: "Oct–Feb",
            category: "Heritage"
        }, {
            name: "Coorg",
            region: "Kodagu",
            dist: "260 km",
            rating: "4.8",
            desc: "India's coffee capital — mist-draped hills, spice estates, and Kodava warrior culture.",
            img: "https://i.pinimg.com/736x/7d/39/23/7d3923d61edc07ddc2611309079d77bc.jpg",
            fee: "Free",
            time: "All Day",
            season: "Oct–Mar",
            category: "Hill Station"
        }, {
            name: "Gokarna",
            region: "Uttara Kannada",
            dist: "490 km",
            rating: "4.7",
            desc: "Sacred town with pristine beaches — where ancient temples meet Bohemian shores.",
            img: "https://i.pinimg.com/736x/87/c0/76/87c076ad0da26d775af1119f7316b7ce.jpg",
            fee: "Free",
            time: "All Day",
            season: "Oct–Feb",
            category: "Beach"
        }, {
            name: "Mysore Palace",
            region: "Mysuru",
            dist: "145 km",
            rating: "4.9",
            desc: "The opulent seat of the Wadiyar dynasty — illuminated by 10,000 bulbs every Sunday.",
            img: "https://i.pinimg.com/1200x/a8/39/de/a839def8d0352bbfc2f82de9d4e1f6f8.jpg",
            fee: "₹70 / ₹200 (Foreign)",
            time: "10AM–5:30PM",
            season: "Year Round",
            category: "Palace"
        }, {
            name: "Jog Falls",
            region: "Shivamogga",
            dist: "380 km",
            rating: "4.6",
            desc: "India's second highest waterfall — a thundering curtain of water in four magnificent cascades.",
            img: "https://i.pinimg.com/736x/8e/88/f8/8e88f828d6e75194c1e46c402062e679.jpg",
            fee: "₹20",
            time: "8AM–6PM",
            season: "Aug–Jan",
            category: "Waterfall"
        }, {
            name: "Chikmagalur",
            region: "Chikkamagaluru",
            dist: "245 km",
            rating: "4.7",
            desc: "Where coffee was first planted in India — rolling plantations under the Baba Budan peaks.",
            img: "https://i.pinimg.com/1200x/78/44/1e/78441e6fa279b9969d37b14eddcc5b39.jpg",
            fee: "Free",
            time: "All Day",
            season: "Sep–Feb",
            category: "Hill Station"
        }, {
            name: "Badami",
            region: "Bagalkot",
            dist: "490 km",
            rating: "4.8",
            desc: "Chalukyan rock-cut cave temples carved from amber sandstone cliffs above a sacred lake.",
            img: "https://i.pinimg.com/1200x/33/01/2d/33012d740ee58e0d072b2c8563b9892f.jpg",
            fee: "₹30 / ₹500 (Foreign)",
            time: "9AM–5:30PM",
            season: "Oct–Feb",
            category: "Heritage"
        }, {
            name: "Udupi",
            region: "Udupi",
            dist: "415 km",
            rating: "4.6",
            desc: "The temple town that gave the world a cuisine — Krishna Temple and pristine Malpe Beach.",
            img: "https://i.pinimg.com/736x/cd/79/6b/cd796bbd202638ab5c46ea657eb646ea.jpg",
            fee: "Free",
            time: "All Day",
            season: "Oct–Mar",
            category: "Temple Town"
        }, {
            name: "Murudeshwar",
            region: "Uttara Kannada",
            dist: "475 km",
            rating: "4.7",
            desc: "World's second tallest Shiva statue gazes over the Arabian Sea from a dramatic coastal cliff.",
            img: "https://i.pinimg.com/1200x/6a/a5/8d/6aa58d609ac2417cf24531debe54c880.jpg",
            fee: "Free",
            time: "6AM–8PM",
            season: "Oct–Mar",
            category: "Temple"
        }, {
            name: "Dandeli",
            region: "Belagavi",
            dist: "465 km",
            rating: "4.5",
            desc: "White-water rafting capital of South India — wild Kali river through thick jungle wilderness.",
            img: "https://i.pinimg.com/736x/07/14/17/0714178da1f93ddff9f0da639f159798.jpg",
            fee: "₹200 (Rafting)",
            time: "6AM–6PM",
            season: "Oct–May",
            category: "Adventure"
        }];

        const cities = [{
            name: "Bengaluru",
            count: "12 places",
            img: "assets/cities/bengaluru.jpg"
        }, {
            name: "Mysuru",
            count: "8 places",
            img: "https://i.pinimg.com/1200x/58/4b/1b/584b1b70f0390295041196841f2f5ac5.jpg"
        }, {
            name: "Vijayanagara",
            count: "15 places",
            img: "https://i.pinimg.com/736x/d3/1c/91/d31c912644dd4ec526b43fe2fb8740a3.jpg"
        }, {
            name: "Shivamogga",
            count: "6 places",
            img: "https://i.pinimg.com/1200x/ed/fa/4e/edfa4e986aed2ffa598481c37dfbc707.jpg"
        }, {
            name: "Udupi",
            count: "7 places",
            img: "https://i.pinimg.com/736x/10/bb/0f/10bb0f301de2eebb82e34e97ace8a022.jpg"
        }, {
            name: "Kodagu",
            count: "9 places",
            img: "https://i.pinimg.com/1200x/94/e7/17/94e717cdb182aad39ef0a441560acf23.jpg"
        }, {
            name: "Belagavi",
            count: "5 places",
            img: "assets/cities/belagavi.jpg"
        }, {
            name: "Bagalkot",
            count: "6 places",
            img: "https://i.pinimg.com/736x/85/89/bf/8589bf113f89694aa2d27696cf39452c.jpg"
        }, {
            name: "Vijayapura",
            count: "8 places",
            img: "https://i.pinimg.com/736x/fe/78/f9/fe78f9c33b84a51dcfa00e9ed177f2d4.jpg"
        }, {
            name: "Hassan",
            count: "5 places",
            img: "https://i.pinimg.com/736x/75/46/24/754624727774dc03241f0edb32c1cd76.jpg"
        }, {
            name: "Dharwad",
            count: "4 places",
            img: "assets/cities/dharwad.jpg"
        }, {
            name: "utter kannada",
            count: "5 places",
            img: "https://i.pinimg.com/736x/4d/59/5d/4d595dbf04449efe6686bcf4b53a0035.jpg"
        }, {
            name: "Chikkamagaluru",
            count: "7 places",
            img: "https://i.pinimg.com/736x/77/a4/fd/77a4fdd1b805810b1d93b896f6427110.jpg"
        }, {
            name: "Dakshin Kannada",
            count: "10 places",
            img: "https://i.pinimg.com/1200x/d2/23/ad/d223adc58941bcf9d714769cb7603ab2.jpg"
        }, {
            name: "chitradurga",
            count: "11 places",
            img: "https://i.pinimg.com/1200x/8f/26/f2/8f26f2d6e73127f3452ffa9e1ff4c5c4.jpg"
        }];

        const packages = [{
            name: "Hampi Heritage Tour",
            duration: "3 Days",
            price: "₹8,999",
            img: "https://i.pinimg.com/1200x/36/b4/d3/36b4d3b434eb9619b90237b117fd7c39.jpg"
        }, {
            name: "Coorg Coffee Trail",
            duration: "2 Days",
            price: "₹6,499",
            img: "https://i.pinimg.com/1200x/38/a9/cb/38a9cbfb3dfa6b37e0836365924fdc0f.jpg"
        }, {
            name: "Coastal Karnataka Tour",
            duration: "4 Days",
            price: "₹12,999",
            img: "https://i.pinimg.com/736x/35/70/5e/35705e2dfca68de67d60cad3f0b3b5f0.jpg"
        }, {
            name: "Western Ghats Adventure",
            duration: "5 Days",
            price: "₹15,499",
            img: "https://i.pinimg.com/736x/a3/e7/c3/a3e7c3de6344a85a5691055437d8a908.jpg"
        }, {
            name: "Mysuru Royal Tour",
            duration: "2 Days",
            price: "₹7,299",
            img: "https://i.pinimg.com/1200x/c2/2c/82/c22c82e5601f30abe4395d358a953075.jpg"
        }];

        const hotels = [{
            name: "The Leela Palace",
            city: "Bengaluru",
            stars: 5,
            price: "₹12,000",
            badge: "Luxury",
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
        }, {
            name: "Windflower Prakruti",
            city: "Mysuru",
            stars: 4,
            price: "₹5,500",
            badge: "Boutique",
            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
        }, {
            name: "Evolve Back Coorg",
            city: "Kodagu",
            stars: 5,
            price: "₹18,000",
            badge: "Heritage",
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
        }];

        // === HERO SLIDER ===
        const heroData = [{
            place: "HAMPI",
            tag: "Vijayanagara Empire",
            dist: "340 km from Bengaluru",
            desc: "An ancient capital amid colossal boulders — UNESCO World Heritage landscape at the edge of time."
        }, {
            place: "COORG",
            tag: "Kodagu District",
            dist: "260 km from Bengaluru",
            desc: "India's coffee capital — mist-draped hills, ancient rainforests, and warrior culture."
        }, {
            place: "GOKARNA",
            tag: "Uttara Kannada",
            dist: "490 km from Bengaluru",
            desc: "Sacred town where ancient temples meet pristine Bohemian shores on the Arabian Sea."
        }, {
            place: "MYSURU",
            tag: "City of Palaces",
            dist: "145 km from Bengaluru",
            desc: "The opulent seat of the Wadiyar dynasty — illuminated by 10,000 bulbs every Sunday evening."
        }, {
            place: "JOG FALLS",
            tag: "Shivamogga",
            dist: "380 km from Bengaluru",
            desc: "India's second highest waterfall — four thundering cascades through dense Western Ghats."
        }];

        let heroIdx = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const dotsEl = document.getElementById('heroDots');

        heroData.forEach((h, i) => {
            const d = document.createElement('button');
            d.className = 'hero-dot' + (i === 0 ? ' active' : '');
            d.innerHTML = `<span class="hero-dot-num">0${i+1}</span>`;
            d.onclick = () => goHero(i);
            dotsEl.appendChild(d);
        });

        function goHero(i) {
            slides[heroIdx].classList.remove('active');
            document.querySelectorAll('.hero-dot')[heroIdx].classList.remove('active');
            heroIdx = i;
            slides[heroIdx].classList.add('active');
            document.querySelectorAll('.hero-dot')[heroIdx].classList.add('active');
            const h = heroData[heroIdx];
            document.getElementById('heroPlace').textContent = h.place;
            document.getElementById('heroTag').textContent = h.tag;
            document.getElementById('heroDist').textContent = h.dist;
            document.getElementById('heroDesc').textContent = h.desc;
        }

        setInterval(() => goHero((heroIdx + 1) % heroData.length), 5000);

        // === LIVE TIME ===
        function updateTime() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            document.getElementById('liveTime').textContent = `${h}:${m}`;
        }
        updateTime();
        setInterval(updateTime, 30000);

        // === WEATHER SIMULATION ===
        const weatherOptions = [{
            temp: '28°',
            icon: '☀️',
            desc: 'Clear sky',
            city: 'Bengaluru'
        }, {
            temp: '22°',
            icon: '⛅',
            desc: 'Partly cloudy',
            city: 'Mysuru'
        }, {
            temp: '19°',
            icon: '🌧️',
            desc: 'Light rain',
            city: 'Coorg'
        }, ];
        const w = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
        document.getElementById('weatherTemp').textContent = w.temp;
        document.getElementById('weatherIcon').textContent = w.icon;
        document.getElementById('weatherDesc').textContent = w.desc;
        document.getElementById('weatherCity').textContent = w.city;

        // === RENDER CAROUSEL ===
        const track = document.getElementById('carouselTrack');
        places.forEach((p, i) => {
            track.innerHTML += `
    <div class="place-card" onclick="openModal(${i})">
      <div class="place-card-img" style="background-image:url('${p.img}');width:100%;height:100%;position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 0.6s"></div>
      <div class="place-card-overlay"></div>
      <div class="place-rank">${String(i+1).padStart(2,'0')}</div>
      <div class="place-card-content">
        <div class="place-name">${p.name}</div>
        <div class="place-dist">📍 ${p.dist} away</div>
        <div class="place-stars">★★★★★ ${p.rating}</div>
      </div>
    </div>`;
        });

        let carouselPos = 0;

        function carouselNext() {
            const maxPos = (places.length - 3) * 300;
            carouselPos = Math.min(carouselPos + 300, maxPos);
            track.style.transform = `translateX(-${carouselPos}px)`;
        }

        function carouselPrev() {
            carouselPos = Math.max(carouselPos - 300, 0);
            track.style.transform = `translateX(-${carouselPos}px)`;
        }

        // === RENDER CITIES ===
        // === RENDER CITIES ===
        const citiesGrid = document.getElementById('citiesGrid');
        cities.forEach(c => {
            // Convert city name to lowercase filename (e.g., "Mysuru" -> "mysurupages/.html", "utter kannada" -> "utter-kannadapages/.html")
            const targetPage = c.name.toLowerCase().replace(/\s+/g, '-');

            citiesGrid.innerHTML += `
    <div class="city-card" style="background-image:url('${c.img}')" onclick="window.location.href='pages/${targetPage}.html'">
      <div class="city-card-content">
        <div class="city-name">${c.name}</div>
        <div class="city-count">${c.count}</div>
        <div class="city-explore">EXPLORE →</div>
      </div>
    </div>`;
        });

        // === MARQUEE ===
        const marqueeTrack = document.getElementById('marqueeTrack');
        if (marqueeTrack) {
            const items = cities.map(c => `<span>${c.name}</span>`).join('');
            marqueeTrack.innerHTML = items + items;
        }
        const packagesGrid = document.getElementById('packagesGrid');
        packages.forEach((pkg, i) => {
            packagesGrid.innerHTML += `
    <div class="pkg-card" style="background-image:url('${pkg.img}')">
      <div class="pkg-content">
        <div class="pkg-duration">${pkg.duration}</div>
        <div class="pkg-name">${pkg.name}</div>
        <div class="pkg-price">${pkg.price} <small>per person</small></div>
      </div>
    </div>`;
        });

        // === RENDER HOTELS ===
        const hotelsGrid = document.getElementById('hotelsGrid');
        hotels.forEach(h => {
            hotelsGrid.innerHTML += `
    <div class="hotel-card">
      <div class="hotel-img">
        <div class="hotel-img-inner" style="background-image:url('${h.img}')"></div>
        <div class="hotel-badge">${h.badge}</div>
      </div>
      <div class="hotel-info">
        <div class="hotel-stars">${'★'.repeat(h.stars)}</div>
        <div class="hotel-name">${h.name}</div>
        <div class="hotel-location">📍 ${h.city}, Karnataka</div>
        <div class="hotel-footer">
          <div class="hotel-price">${h.price} <small>/night</small></div>
          <button class="hotel-btn">Book Now</button>
        </div>
      </div>
    </div>`;
        });

        // === MODAL ===
        // region -> district page, for the two spellings that differ
        const CITY_PAGE = { "Uttara Kannada": "utter-kannada" };

        function openModal(i) {
            const p = places[i];
            document.getElementById('modalHero').style.backgroundImage = `url('${p.img}')`;
            document.getElementById('modalTag').textContent = `${p.region} · ${p.category}`;
            document.getElementById('modalTitle').textContent = p.name;
            document.getElementById('modalDesc').textContent = p.desc;
            const cityLink = document.getElementById('modalCityLink');
            cityLink.href = `pages/${CITY_PAGE[p.region] || p.region.toLowerCase().replace(/\s+/g, '-')}.html`;
            cityLink.textContent = `Explore ${p.region} →`;
            document.getElementById('modalInfoGrid').innerHTML = `
    <div class="modal-info-item"><label>Distance</label><span>${p.dist}</span></div>
    <div class="modal-info-item"><label>Entry Fee</label><span>${p.fee}</span></div>
    <div class="modal-info-item"><label>Timings</label><span>${p.time}</span></div>
    <div class="modal-info-item"><label>Best Season</label><span>${p.season}</span></div>
    <div class="modal-info-item"><label>Rating</label><span>★ ${p.rating} / 5</span></div>
    <div class="modal-info-item"><label>Category</label><span>${p.category}</span></div>
  `;
            document.getElementById('modalOverlay').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(e) {
            if (!e || e.target === document.getElementById('modalOverlay')) {
                document.getElementById('modalOverlay').classList.remove('open');
                document.body.style.overflow = '';
            }
        }

        // === NAV SCROLL ===
        window.addEventListener('scroll', () => {
            document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
            const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('scroll-progress').style.width = scrollPct + '%';
        });

        // === COUNTER ANIMATION ===
        function animateCounter(el, target, suffix) {
            let cur = 0;
            const step = target / 60;
            const interval = setInterval(() => {
                cur += step;
                if (cur >= target) {
                    el.textContent = target;
                    clearInterval(interval);
                    return;
                }
                el.textContent = Math.floor(cur);
            }, 20);
        }

        const statsObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                animateCounter(document.getElementById('cnt1'), 52);
                animateCounter(document.getElementById('cnt2'), 340);
                animateCounter(document.getElementById('cnt3'), 120);
                animateCounter(document.getElementById('cnt4'), 15);
                statsObserver.disconnect();
            }
        });
        statsObserver.observe(document.getElementById('stats'));

        // === FADE UP ANIMATIONS ===
        const fadeEls = document.querySelectorAll('.section-header, .place-card, .city-card, .pkg-card, .hotel-card, .map-container, .about-grid');
        const fadeObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        fadeEls.forEach(el => {
            el.classList.add('fade-up');
            fadeObs.observe(el);
        });

        // === CHATBOT ===
        function toggleChatbot() {
            const chat = document.getElementById('chatbot');
            if (window.matchMedia('(max-width: 900px)').matches) {
                const opening = !chat.classList.contains('open');
                chat.classList.toggle('open', opening);
                chat.classList.toggle('fullscreen', opening);
                document.body.style.overflow = opening ? 'hidden' : '';
                return;
            }
            chat.classList.toggle('open');
        }
        const chatResponses = {
            'hampi': 'Hampi is 340 km from Bengaluru (about 6 hrs). Best time: Oct–Feb. Entry ₹40. Must-see: Virupaksha Temple, Stone Chariot, Vittala Temple!',
            'coorg': 'Coorg (Kodagu) is 260 km from Bengaluru (~5 hrs). Best for coffee plantation stays, trekking, and river rafting at Raja\'s Seat.',
            'weather': 'Current weather varies by region. Coastal Karnataka gets rain Jun–Sep. Hill stations are cool year-round. Plains are best Oct–Mar.',
            'package': 'We offer packages starting ₹5,999! Popular: Hampi Heritage (3D), Coorg Coffee Trail (2D), Coastal Tour (4D). Shall I show details?',
            'hotel': 'Top picks: Leela Palace (Bengaluru), Windflower Prakruti (Mysuru), Evolve Back (Coorg). What budget are you working with?',
            'default': 'Great question about Karnataka! It has 52+ heritage sites, beautiful beaches, hill stations, and wildlife sanctuaries. Which region interests you most?'
        };

        async function sendChat() {
            const input = document.getElementById('chatInput');
            const msg = input.value.trim();
            if (!msg) return;
            const msgs = document.getElementById('chatMessages');
            msgs.innerHTML += `<div class="chat-msg user">${msg}</div>`;
            input.value = '';
            const replyId = 'chatReply' + Date.now();
            msgs.innerHTML += `<div class="chat-msg bot" id="${replyId}">Thinking...</div>`;
            msgs.scrollTop = msgs.scrollHeight;

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: msg })
                });
                const data = await response.json();
                const reply = document.getElementById(replyId);
                if (reply) reply.textContent = data.reply || 'No reply received.';
            } catch (error) {
                const reply = document.getElementById(replyId);
                if (reply) reply.textContent = 'AI connection error.';
            }
            msgs.scrollTop = msgs.scrollHeight;
        }


        // Global GPS Target Registry Coordinates to translate flat map pixels back to True Latitude/Longitude
        const CITY_COORDS = {
            Bengaluru: { lat: 12.9716, lng: 77.5946 },
            Mysuru: { lat: 12.3052, lng: 76.6552 },
            Vijayanagara: { lat: 15.3350, lng: 76.4600 },
            Shivamogga: { lat: 13.9299, lng: 75.5681 },
            Udupi: { lat: 13.3409, lng: 74.7421 },
            Kodagu: { lat: 12.4233, lng: 75.7394 },
            Belagavi: { lat: 15.8497, lng: 74.4976 },
            Bagalkot: { lat: 16.1862, lng: 75.6983 },
            Vijayapura: { lat: 16.8300, lng: 75.7100 },
            Hassan: { lat: 13.0061, lng: 76.1029 },
            Dharwad: { lat: 15.4559, lng: 75.0065 },
            'utter kannada': { lat: 14.8153, lng: 74.1233 },
            Chikkamagaluru: { lat: 13.3187, lng: 75.7716 },
            'Dakshin Kannada': { lat: 12.9141, lng: 74.8560 },
            chitradurga: { lat: 14.2300, lng: 76.3900 }
        };

        async function initMiniMap() {
            const container = document.getElementById('miniMap');
            if (!container || typeof maplibregl === 'undefined') return;

            async function getCartoKey() {
                try {
                    const r = await fetch('/api/carto-config');
                    if (r.ok) { const d = await r.json(); if (d && d.apiKey) return d.apiKey; }
                } catch (e) {}
                return 'cb1_5cvq_1_8011f64c37add97cd443f4c3';
            }

            const key = await getCartoKey();
            const styleUrl = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json?key=' + encodeURIComponent(key);

            const map = new maplibregl.Map({
                container: 'miniMap',
                style: styleUrl,
                center: [75.9, 14.9],
                zoom: 5.6,
                pitch: 0,
                bearing: 0,
                antialias: true,
                interactive: false,
                dragPan: false,
                scrollZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                keyboard: false,
                touchZoomRotate: false
            });

            map.addControl(new maplibregl.NavigationControl(), 'top-left');

            document.getElementById('miniMapWrap').addEventListener('click', function() {
                window.location.href = 'map.html';
            });

            map.on('error', function(e) {
                window.__miniMapError = (e && e.error && e.error.message) || String(e);
            });

            map.on('load', function() {
                window.__miniMapLoaded = true;
                cities.forEach(function(city) {
                    const pos = CITY_COORDS[city.name];
                    if (!pos) return;

                    const el = document.createElement('div');
                    el.className = 'city-marker';
                    el.style.width = '10px';
                    el.style.height = '10px';
                    el.style.background = '#ff3b30';
                    el.style.border = '2px solid #fff';
                    el.style.borderRadius = '50%';
                    el.style.cursor = 'pointer';
                    el.style.boxShadow = '0 0 10px rgba(255,59,48,0.5)';

                    new maplibregl.Marker({ element: el })
                        .setLngLat([pos.lng, pos.lat])
                        .addTo(map);

                    el.addEventListener('click', function() {
                        window.location.href = 'pages/' + city.slug + '.html';
                    });
                });
                window.__markerCount = document.querySelectorAll('.city-marker').length;
            });
        }


        // === LOADING SCREEN & RUNTIME ENGINE INITIALIZER ===
        window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            const alreadyShown = sessionStorage.getItem('goHeritage:loaded') === '1';

            if (alreadyShown) {
                loading.classList.add('hidden');
            } else {
                setTimeout(() => {
                    loading.classList.add('hidden');
                    sessionStorage.setItem('goHeritage:loaded', '1');
                }, 600);
            }

            // 2. Trigger the primary interactive dashboard canvas component layer initialization mapping
            initMiniMap();
        });

