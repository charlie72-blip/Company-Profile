const cars = [
  {
    id: 1,
    title: "Toyota Fortuner VRZ",
    brand: "Toyota",
    type: "SUV",
    year: 2023,
    price: 645000000,
    fuel: "Diesel",
    transmission: "AT",
    mileage: "24.000 km",
    location: "Jakarta",
    badge: "Hot Deal",
    image:
      "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true
  },
  {
    id: 2,
    title: "Honda Civic RS Turbo",
    brand: "Honda",
    type: "Sedan",
    year: 2022,
    price: 488000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "18.900 km",
    location: "Bandung",
    badge: "Premium",
    image:
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true
  },
  {
    id: 3,
    title: "Mitsubishi Pajero Sport Dakar",
    brand: "Mitsubishi",
    type: "SUV",
    year: 2021,
    price: 535000000,
    fuel: "Diesel",
    transmission: "AT",
    mileage: "33.200 km",
    location: "Surabaya",
    badge: "Siap Pakai",
    image:
      "https://images.pexels.com/photos/533669/pexels-photo-533669.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 4,
    title: "Toyota Avanza G CVT",
    brand: "Toyota",
    type: "MPV",
    year: 2023,
    price: 278000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "9.500 km",
    location: "Jakarta",
    badge: "Favorit Keluarga",
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true
  },
  {
    id: 5,
    title: "Hyundai Ioniq 5 Prime",
    brand: "Hyundai",
    type: "Electric",
    year: 2024,
    price: 768000000,
    fuel: "Listrik",
    transmission: "AT",
    mileage: "5.100 km",
    location: "Denpasar",
    badge: "EV",
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true
  },
  {
    id: 6,
    title: "Honda Brio RS",
    brand: "Honda",
    type: "Hatchback",
    year: 2022,
    price: 219000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "20.600 km",
    location: "Medan",
    badge: "Irit",
    image:
      "https://images.pexels.com/photos/592253/pexels-photo-592253.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 7,
    title: "BMW X3 xDrive20i",
    brand: "BMW",
    type: "SUV",
    year: 2021,
    price: 892000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "31.000 km",
    location: "Jakarta",
    badge: "Luxury",
    image:
      "https://images.pexels.com/photos/2811239/pexels-photo-2811239.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 8,
    title: "Mercedes-Benz C200 Avantgarde",
    brand: "Mercedes-Benz",
    type: "Sedan",
    year: 2020,
    price: 835000000,
    fuel: "Hybrid",
    transmission: "AT",
    mileage: "38.700 km",
    location: "Bandung",
    badge: "Promo",
    image:
      "https://images.pexels.com/photos/4502385/pexels-photo-4502385.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 9,
    title: "Toyota Innova Zenix Hybrid",
    brand: "Toyota",
    type: "MPV",
    year: 2024,
    price: 469000000,
    fuel: "Hybrid",
    transmission: "AT",
    mileage: "7.800 km",
    location: "Surabaya",
    badge: "Hybrid",
    image:
      "https://images.pexels.com/photos/923361/pexels-photo-923361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 10,
    title: "Mitsubishi Xpander Ultimate",
    brand: "Mitsubishi",
    type: "MPV",
    year: 2021,
    price: 302000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "26.400 km",
    location: "Medan",
    badge: "Best Value",
    image:
      "https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 11,
    title: "Honda HR-V SE",
    brand: "Honda",
    type: "SUV",
    year: 2023,
    price: 398000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "12.200 km",
    location: "Jakarta",
    badge: "Unit Terawat",
    image:
      "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  },
  {
    id: 12,
    title: "Hyundai Stargazer Prime",
    brand: "Hyundai",
    type: "MPV",
    year: 2023,
    price: 326000000,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "14.700 km",
    location: "Denpasar",
    badge: "Low KM",
    image:
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false
  }
];

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#1e3a5f'/>
          <stop offset='100%' stop-color='#0f4c81'/>
        </linearGradient>
      </defs>
      <rect width='640' height='360' fill='url(#g)'/>
      <circle cx='120' cy='70' r='90' fill='rgba(255,255,255,0.08)'/>
      <circle cx='560' cy='300' r='120' fill='rgba(255,255,255,0.06)'/>
      <text x='40' y='55' fill='rgba(255,255,255,0.95)' font-size='20' font-family='Arial,sans-serif'>AutoNusa</text>
      <path d='M145 214h334l28-36h44c9 0 16 7 16 16v48c0 10-7 17-16 17h-18c0-23-18-42-41-42s-41 19-41 42H233c0-23-18-42-41-42s-41 19-41 42h-20c-9 0-16-7-16-17v-27c0-8 5-15 13-17z' fill='rgba(255,255,255,0.9)'/>
      <rect x='250' y='168' width='122' height='30' rx='6' fill='rgba(30,58,95,0.85)'/>
      <rect x='378' y='168' width='84' height='30' rx='6' fill='rgba(30,58,95,0.85)'/>
      <circle cx='192' cy='258' r='25' fill='#1f3047'/>
      <circle cx='492' cy='258' r='25' fill='#1f3047'/>
      <text x='40' y='332' fill='rgba(255,255,255,0.9)' font-size='24' font-weight='700' font-family='Arial,sans-serif'>Foto Mobil Tidak Tersedia</text>
    </svg>`
  );

const listingGrid = document.getElementById("listingGrid");
const featuredStrip = document.getElementById("featuredStrip");
const emptyState = document.getElementById("emptyState");
const resultTitle = document.getElementById("resultTitle");
const categoryRow = document.getElementById("categoryRow");

const controls = {
  keyword: document.getElementById("keyword"),
  location: document.getElementById("location"),
  sortBy: document.getElementById("sortBy"),
  reset: document.getElementById("resetFilters"),
  quickKeyword: document.getElementById("quickKeyword"),
  quickBrand: document.getElementById("quickBrand"),
  quickType: document.getElementById("quickType"),
  quickBudget: document.getElementById("quickBudget"),
  applyQuickSearch: document.getElementById("applyQuickSearch")
};

const navLinks = [...document.querySelectorAll("[data-scroll]")];
const homeLink = document.getElementById("homeLink");

const modalEls = {
  login: document.getElementById("loginModal"),
  listing: document.getElementById("listingModal")
};

const actionEls = {
  openLogin: document.getElementById("openLogin"),
  openListing: document.getElementById("openListing"),
  sellNowBtn: document.getElementById("sellNowBtn"),
  loginForm: document.getElementById("loginForm"),
  listingForm: document.getElementById("listingForm"),
  calculateCredit: document.getElementById("calculateCredit"),
  creditPrice: document.getElementById("creditPrice"),
  creditDp: document.getElementById("creditDp"),
  creditTenor: document.getElementById("creditTenor"),
  creditRate: document.getElementById("creditRate"),
  creditResult: document.getElementById("creditResult"),
  toast: document.getElementById("toast")
};

const state = {
  keyword: "",
  location: "",
  priceRanges: [],
  fuel: [],
  transmission: [],
  brand: "",
  type: "",
  budgetMax: null,
  sortBy: "latest"
};

let currentRenderedCars = [];
let toastTimer = null;

const readChecked = (name) =>
  [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(
    (box) => box.value
  );

const parseRangeToRupiah = (range) => {
  const [start, end] = range.split("-").map((v) => Number(v) * 1000000);
  return { start, end };
};

const matchesPriceRange = (price, ranges) => {
  if (!ranges.length) return true;
  return ranges.some((range) => {
    const { start, end } = parseRangeToRupiah(range);
    return price >= start && price <= end;
  });
};

const createCarCard = (car) => `
  <article class="car-card">
    <div class="car-photo">
      <img src="${car.image}" alt="${car.title}" loading="lazy" />
      <span class="badge">${car.badge}</span>
    </div>
    <div class="car-body">
      <h3 class="car-title">${car.title}</h3>
      <p class="car-price">${currency.format(car.price)}</p>
      <div class="car-meta">
        <span class="meta-pill">${car.year}</span>
        <span class="meta-pill">${car.type}</span>
        <span class="meta-pill">${car.fuel}</span>
        <span class="meta-pill">${car.transmission}</span>
        <span class="meta-pill">${car.mileage}</span>
      </div>
      <div class="car-footer">
        <span class="location">${car.location}</span>
        <button class="link-btn view-detail-btn" data-id="${car.id}">
          Lihat Detail
        </button>
      </div>
    </div>
  </article>
`;

const createFeaturedCard = (car) => `
  <article class="featured-card">
    <img src="${car.image}" alt="${car.title}" loading="lazy" />
    <div>
      <h3>${car.title}</h3>
      <p>${currency.format(car.price)} - ${car.location}</p>
    </div>
  </article>
`;

const attachImageFallbacks = () => {
  document.querySelectorAll(".car-photo img, .featured-card img").forEach((img) => {
    if (img.dataset.fallbackBound === "1") {
      if (img.complete && img.naturalWidth === 0) {
        img.src = FALLBACK_IMAGE;
      }
      return;
    }

    img.dataset.fallbackBound = "1";
    img.addEventListener(
      "error",
      () => {
        img.src = FALLBACK_IMAGE;
      },
      { once: true }
    );

    if (img.complete && img.naturalWidth === 0) {
      img.src = FALLBACK_IMAGE;
    }
  });
};

const showToast = (message) => {
  if (!actionEls.toast) return;
  actionEls.toast.textContent = message;
  actionEls.toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    actionEls.toast.classList.add("hidden");
  }, 2600);
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const openModal = (modalEl) => {
  if (!modalEl) return;
  modalEl.classList.remove("hidden");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeModal = (modalEl) => {
  if (!modalEl) return;
  modalEl.classList.add("hidden");
  modalEl.setAttribute("aria-hidden", "true");
  const hasOpenModal = [...document.querySelectorAll(".modal")].some(
    (modal) => !modal.classList.contains("hidden")
  );
  if (!hasOpenModal) {
    document.body.classList.remove("no-scroll");
  }
};

const calculateCredit = () => {
  const price = Number(actionEls.creditPrice?.value || 0);
  const dp = Number(actionEls.creditDp?.value || 0);
  const tenorYears = Number(actionEls.creditTenor?.value || 0);
  const annualRate = Number(actionEls.creditRate?.value || 0);

  if (!price || tenorYears <= 0 || annualRate < 0) {
    actionEls.creditResult.textContent = "Masukkan angka yang valid untuk simulasi kredit.";
    return;
  }

  if (dp >= price) {
    actionEls.creditResult.textContent = "DP harus lebih kecil dari harga mobil.";
    return;
  }

  const principal = price - dp;
  const monthCount = tenorYears * 12;
  const monthlyRate = annualRate / 100 / 12;

  const monthlyInstallment =
    monthlyRate === 0
      ? principal / monthCount
      : (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -monthCount);

  actionEls.creditResult.textContent = `Estimasi cicilan: ${currency.format(monthlyInstallment)} / bulan selama ${monthCount} bulan (pokok pembiayaan ${currency.format(principal)}).`;
};

const applyFilters = () => {
  let filtered = cars.filter((car) => {
    const keyword = state.keyword.trim().toLowerCase();
    const byKeyword =
      !keyword ||
      `${car.brand} ${car.title}`.toLowerCase().includes(keyword);
    const byLocation = !state.location || car.location === state.location;
    const byBrand = !state.brand || car.brand === state.brand;
    const byType = !state.type || car.type === state.type;
    const byBudget = !state.budgetMax || car.price <= state.budgetMax;
    const byFuel = !state.fuel.length || state.fuel.includes(car.fuel);
    const byTransmission =
      !state.transmission.length || state.transmission.includes(car.transmission);
    const byPriceRange = matchesPriceRange(car.price, state.priceRanges);

    return (
      byKeyword &&
      byLocation &&
      byBrand &&
      byType &&
      byBudget &&
      byFuel &&
      byTransmission &&
      byPriceRange
    );
  });

  if (state.sortBy === "priceAsc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "priceDesc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered = filtered.sort((a, b) => b.year - a.year || a.price - b.price);
  }

  render(filtered);
};

const render = (carsToRender) => {
  currentRenderedCars = carsToRender;
  listingGrid.innerHTML = carsToRender.map(createCarCard).join("");
  attachImageFallbacks();
  resultTitle.textContent = `Menampilkan ${carsToRender.length} mobil`;
  emptyState.classList.toggle("hidden", carsToRender.length > 0);
};

const renderFeatured = () => {
  const featured = cars.filter((car) => car.featured).slice(0, 3);
  featuredStrip.innerHTML = featured.map(createFeaturedCard).join("");
  attachImageFallbacks();
};

const syncStateFromControls = () => {
  state.keyword = controls.keyword.value;
  state.location = controls.location.value;
  state.sortBy = controls.sortBy.value;
  state.priceRanges = readChecked("priceRange");
  state.fuel = readChecked("fuel");
  state.transmission = readChecked("transmission");
};

const activateTypeChip = (type) => {
  [...categoryRow.querySelectorAll(".chip")].forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.type === type);
  });
};

const resetFilters = () => {
  state.keyword = "";
  state.location = "";
  state.priceRanges = [];
  state.fuel = [];
  state.transmission = [];
  state.brand = "";
  state.type = "";
  state.budgetMax = null;
  state.sortBy = "latest";

  controls.keyword.value = "";
  controls.location.value = "";
  controls.sortBy.value = "latest";
  controls.quickKeyword.value = "";
  controls.quickBrand.value = "";
  controls.quickType.value = "";
  controls.quickBudget.value = "";

  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((box) => (box.checked = false));
  activateTypeChip("");
  applyFilters();
};

controls.keyword.addEventListener("input", () => {
  syncStateFromControls();
  applyFilters();
});

controls.location.addEventListener("change", () => {
  syncStateFromControls();
  applyFilters();
});

controls.sortBy.addEventListener("change", () => {
  syncStateFromControls();
  applyFilters();
});

document.querySelectorAll('input[type="checkbox"]').forEach((box) => {
  box.addEventListener("change", () => {
    syncStateFromControls();
    applyFilters();
  });
});

categoryRow.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  state.type = chip.dataset.type;
  activateTypeChip(state.type);
  applyFilters();
});

controls.applyQuickSearch.addEventListener("click", () => {
  state.keyword = controls.quickKeyword.value;
  state.brand = controls.quickBrand.value;
  state.type = controls.quickType.value;
  state.budgetMax = controls.quickBudget.value
    ? Number(controls.quickBudget.value)
    : null;

  controls.keyword.value = state.keyword;
  activateTypeChip(state.type);
  applyFilters();
});

controls.reset.addEventListener("click", resetFilters);

homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToSection(link.dataset.scroll);
  });
});

actionEls.openLogin?.addEventListener("click", () => {
  openModal(modalEls.login);
});

actionEls.openListing?.addEventListener("click", () => {
  openModal(modalEls.listing);
});

actionEls.sellNowBtn?.addEventListener("click", () => {
  openModal(modalEls.listing);
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-close-modal");
    closeModal(document.getElementById(modalId));
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".modal").forEach((modal) => closeModal(modal));
});

actionEls.loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  closeModal(modalEls.login);
  actionEls.loginForm.reset();
  showToast(`Login berhasil untuk ${email}.`);
});

actionEls.listingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("listingTitle").value.trim();
  const price = Number(document.getElementById("listingPrice").value);
  const location = document.getElementById("listingLocation").value;
  const brand = title.split(" ")[0] || "Mobil";
  const nextId = cars.length ? Math.max(...cars.map((car) => car.id)) + 1 : 1;

  cars.unshift({
    id: nextId,
    title,
    brand,
    type: "MPV",
    year: new Date().getFullYear(),
    price,
    fuel: "Bensin",
    transmission: "AT",
    mileage: "0 km",
    location,
    badge: "Baru",
    image: FALLBACK_IMAGE,
    featured: false
  });

  closeModal(modalEls.listing);
  actionEls.listingForm.reset();
  resetFilters();
  scrollToSection("catalogSection");
  showToast("Iklan berhasil dikirim dan langsung tampil di daftar mobil.");
});

actionEls.calculateCredit?.addEventListener("click", calculateCredit);

["creditPrice", "creditDp", "creditTenor", "creditRate"].forEach((fieldId) => {
  document.getElementById(fieldId)?.addEventListener("input", calculateCredit);
});

listingGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".view-detail-btn");
  if (!button) return;
  const carId = Number(button.dataset.id);
  const selectedCar = currentRenderedCars.find((car) => car.id === carId);
  if (!selectedCar) return;
  showToast(`${selectedCar.title} - ${currency.format(selectedCar.price)}.`);
});

document.querySelectorAll(".read-article").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-article");
    showToast(`Membuka artikel: ${title}.`);
  });
});

renderFeatured();
applyFilters();
calculateCredit();
