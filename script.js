const locations = [
  {
    id: "bhimbetka",
    name: "Bhimbetka",
    place: "Madhya Pradesh",
    lat: 22.936,
    lng: 77.612,
    era: "Prehistoric",
    period: "c. 10,000 BCE onwards",
    tradition: "Mesolithic Rock Art",
    image: "assets/images/bhimbetka.jpg",
    description: "The rock shelters of Bhimbetka preserve some of the earliest known paintings in the Indian subcontinent. Scenes of hunting, animals, dancing and community life reveal aspects of prehistoric visual culture.",
    works: ["Animal figures", "Hunting scenes", "Dancing figures"],
    guilds: "Prehistoric communities"
  },
  {
    id: "ajanta",
    name: "Ajanta",
    place: "Maharashtra",
    lat: 20.5519,
    lng: 75.7033,
    era: "Ancient",
    period: "c. 2nd BCE – 6th CE",
    tradition: "Buddhist Murals",
    image: "assets/images/ajanta.jpg",
    description: "Ajanta's rock-cut monasteries contain celebrated Buddhist murals and sculptures. Their sophisticated compositions depict Jataka stories, courtly life, nature and religious narratives.",
    works: ["Jataka murals", "Bodhisattva Padmapani", "Cave 17 paintings"],
    guilds: "Buddhist monastic artists"
  },
  {
    id: "sanchi",
    name: "Sanchi",
    place: "Madhya Pradesh",
    lat: 23.4795,
    lng: 77.7397,
    era: "Ancient",
    period: "c. 3rd BCE onwards",
    tradition: "Buddhist Sculpture",
    image: "assets/images/sanchi.jpg",
    description: "Sanchi is renowned for its stupas, gateways and narrative stone carving. Its reliefs translate Buddhist stories and symbols into an exceptionally detailed sculptural language.",
    works: ["Great Stupa", "Torana gateways", "Jataka reliefs"],
    guilds: "Stone carvers and sculptors"
  },
  {
    id: "ellora",
    name: "Ellora",
    place: "Maharashtra",
    lat: 20.0268,
    lng: 75.178,
    era: "Ancient",
    period: "c. 6th – 10th CE",
    tradition: "Rock-Cut Architecture",
    image: "assets/images/ellora.jpg",
    description: "Ellora brings Buddhist, Hindu and Jain traditions together in a monumental landscape of excavated caves. The Kailasa temple is a landmark of rock-cut architectural achievement.",
    works: ["Kailasa Temple", "Cave 10", "Jain caves"],
    guilds: "Rock-cut artisan communities"
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    place: "Madhya Pradesh",
    lat: 24.8318,
    lng: 79.9199,
    era: "Medieval",
    period: "c. 950 – 1050 CE",
    tradition: "Temple Sculpture",
    image: "assets/images/khajuraho.jpg",
    description: "The Khajuraho temples are celebrated for their richly carved sandstone surfaces. Deities, musicians, dancers, animals and scenes of everyday life animate the temple walls.",
    works: ["Kandariya Mahadeva", "Lakshmana Temple", "Sculptural friezes"],
    guilds: "Chandela-era sculptors"
  },
  {
    id: "thanjavur",
    name: "Thanjavur",
    place: "Tamil Nadu",
    lat: 10.787,
    lng: 79.1378,
    era: "Medieval",
    period: "c. 9th – 13th CE",
    tradition: "Chola Bronzes",
    image: "assets/images/thanjavur.jpg",
    description: "The Chola period produced some of India's most influential bronze sculptures. The lost-wax process allowed artists to create expressive, portable images of Hindu deities for temple rituals.",
    works: ["Nataraja", "Parvati bronzes", "Somaskanda"],
    guilds: "Sthapati bronze-casting communities"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    place: "Northwestern India",
    lat: 26.9124,
    lng: 75.7873,
    era: "Early Modern",
    period: "c. 16th – 19th CE",
    tradition: "Rajasthani Miniatures",
    image: "assets/images/rajasthan.jpg",
    description: "Rajasthani miniature painting developed through courtly traditions at centers such as Mewar, Marwar, Bundi and Kishangarh. Brilliant pigments and narrative detail characterize many schools.",
    works: ["Kishangarh portraits", "Ragamala paintings", "Court scenes"],
    guilds: "Court miniature painters"
  },
  {
    id: "pahari",
    name: "Pahari Hills",
    place: "Himachal Pradesh",
    lat: 31.1048,
    lng: 77.1734,
    era: "Early Modern",
    period: "c. 17th – 19th CE",
    tradition: "Pahari Miniatures",
    image: "assets/images/pahari.jpg",
    description: "Pahari painting flourished in the Himalayan hill courts. The style is known for lyrical landscapes, delicate figures and devotional themes centered on Krishna and Radha.",
    works: ["Gita Govinda", "Krishna-Radha scenes", "Kangra landscapes"],
    guilds: "Kangra and Guler painters"
  },
  {
    id: "madhubani",
    name: "Madhubani",
    place: "Bihar",
    lat: 26.347,
    lng: 86.071,
    era: "Traditional",
    period: "Living folk tradition",
    tradition: "Madhubani Painting",
    image: "assets/images/madhubani.jpg",
    description: "Madhubani painting developed in the Mithila region and is traditionally associated with domestic and ceremonial spaces. Bold outlines, patterned surfaces and symbolic imagery define the practice.",
    works: ["Mithila murals", "Mithila wedding art", "Nature motifs"],
    guilds: "Mithila artist communities"
  },
  {
    id: "warli",
    name: "Warli Region",
    place: "Maharashtra",
    lat: 20.182,
    lng: 73.018,
    era: "Traditional",
    period: "Living folk tradition",
    tradition: "Warli Art",
    image: "assets/images/warli.jpg",
    description: "Warli painting uses simple geometric forms to depict farming, rituals, wildlife and community life. Its visual vocabulary is closely connected to the cultural landscape of the Warli people.",
    works: ["Tarpa dance", "Village scenes", "Harvest rituals"],
    guilds: "Warli artist communities"
  },
  {
    id: "kalamkari",
    name: "Kalamkari",
    place: "Andhra Pradesh",
    lat: 15.9129,
    lng: 79.74,
    era: "Traditional",
    period: "Living textile tradition",
    tradition: "Kalamkari",
    image: "assets/images/kalamkari.jpg",
    description: "Kalamkari is a hand-painted and hand-block-printed textile tradition. Natural dyes and narrative imagery are used to create cloths featuring mythological and botanical themes.",
    works: ["Temple hangings", "Mythological panels", "Floral textiles"],
    guilds: "Srikalahasti and Machilipatnam artisans"
  },
  {
    id: "modern",
    name: "Mumbai & Delhi",
    place: "Modern India",
    lat: 19.076,
    lng: 72.8777,
    era: "Modern",
    period: "20th century – present",
    tradition: "Modern Indian Art",
    image: "assets/images/modern-art.jpg",
    description: "Modern Indian art developed through encounters between indigenous traditions, colonial institutions and global modernism. Mumbai and Delhi became important centers for galleries, artists and new movements.",
    works: ["Progressive Artists' Group", "Modernist painting", "Contemporary galleries"],
    guilds: "Artist collectives and studios"
  }
];

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: true
}).setView([22.5, 79.2], 5);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markers = {};
let selectedLocationId = null;

function showEmptyState(title, message, eyebrow = "SELECT A LOCATION") {
  document.getElementById("artPanel").innerHTML = `
    <div class="panel-empty">
      <div class="mandala" aria-hidden="true">✦</div>
      <span class="eyebrow">${eyebrow}</span>
      <h3>${title}</h3>
      <p>${message}</p>
    </div>
  `;
}

function createIcon() {
  return L.divIcon({
    className: "",
    html: '<div class="custom-marker"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 20]
  });
}

function showDetails(item) {
  const details = document.getElementById("artPanel");

  details.innerHTML = `
    <article class="detail-content">
      <img class="detail-image" src="${item.image}" alt="${item.tradition}" onerror="this.style.display='none'">
      <div class="detail-body">
        <div class="detail-meta">
          <span class="era">${item.era}</span>
          <span class="period">${item.period}</span>
        </div>
        <h2>${item.tradition}</h2>
        <div class="location">${item.name} · ${item.place}</div>

        <h4>Historical context</h4>
        <p>${item.description}</p>

        <h4>Key works & motifs</h4>
        <div class="tags">
          ${item.works.map(work => `<span class="tag">${work}</span>`).join("")}
        </div>

        <h4>Artist communities</h4>
        <p>${item.guilds}</p>
      </div>
    </article>
  `;
}

function selectLocation(item) {
  selectedLocationId = item.id;
  showDetails(item);

  Object.values(markers).forEach(marker => {
    marker.getElement()?.querySelector(".custom-marker")?.classList.remove("is-selected");
  });
  markers[item.id]?.getElement()?.querySelector(".custom-marker")?.classList.add("is-selected");

  map.flyTo([item.lat, item.lng], 7, { duration: 0.8 });
}

function renderMarkers(filteredLocations) {
  markerLayer.clearLayers();
  Object.keys(markers).forEach(id => delete markers[id]);

  filteredLocations.forEach(item => {
    const marker = L.marker([item.lat, item.lng], { icon: createIcon() });
    marker.bindTooltip(item.name, {
      direction: "top",
      offset: [0, -15]
    });

    marker.on("click", () => selectLocation(item));

    marker.addTo(markerLayer);
    markers[item.id] = marker;
    if (item.id === selectedLocationId) {
      marker.getElement()?.querySelector(".custom-marker")?.classList.add("is-selected");
    }
  });

  document.getElementById("locationCount").textContent = filteredLocations.length;
  document.getElementById("randomLocationBtn").disabled = filteredLocations.length === 0;

  const selectionIsVisible = filteredLocations.some(item => item.id === selectedLocationId);
  if (selectedLocationId && !selectionIsVisible) selectedLocationId = null;

  if (filteredLocations.length === 0) {
    showEmptyState("No places found", "Try another search term or reset the filters to see all art centers.", "NO MATCHES");
  } else if (selectedLocationId) {
    const selectedLocation = filteredLocations.find(item => item.id === selectedLocationId);
    showDetails(selectedLocation);
  } else {
    showEmptyState("Begin your journey", "Select a marker on the map to uncover the history, artistic traditions and cultural stories of that region.");
  }
}

function applyFilters() {
  const activeEra = document.querySelector(".era-btn.active").dataset.era;
  const query = document.getElementById("searchInput").value.toLowerCase().trim();

  const filtered = locations.filter(item => {
    const itemEra = item.era.toLowerCase().replace(/\s+/g, "-");
    const matchesEra = activeEra === "all" || itemEra === activeEra;
    const searchable = `${item.name} ${item.place} ${item.tradition} ${item.era} ${item.description}`.toLowerCase();
    return matchesEra && searchable.includes(query);
  });

  renderMarkers(filtered);
}

document.querySelectorAll(".era-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".era-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    applyFilters();
  });
});

document.getElementById("searchInput").addEventListener("input", applyFilters);

document.getElementById("randomLocationBtn").addEventListener("click", () => {
  const activeEra = document.querySelector(".era-btn.active").dataset.era;
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const visibleLocations = locations.filter(item => {
    const itemEra = item.era.toLowerCase().replace(/\s+/g, "-");
    const searchable = `${item.name} ${item.place} ${item.tradition} ${item.era} ${item.description}`.toLowerCase();
    return (activeEra === "all" || itemEra === activeEra) && searchable.includes(query);
  });

  if (visibleLocations.length === 0) return;

  let choice = visibleLocations[Math.floor(Math.random() * visibleLocations.length)];
  if (visibleLocations.length > 1 && choice.id === selectedLocationId) {
    const alternatives = visibleLocations.filter(item => item.id !== selectedLocationId);
    choice = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  selectLocation(choice);
});

document.getElementById("resetFiltersBtn").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.querySelectorAll(".era-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.era === "all");
  });
  selectedLocationId = null;
  applyFilters();
  map.flyTo([22.5, 79.2], 5, { duration: 0.8 });
});

renderMarkers(locations);
