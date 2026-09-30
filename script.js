// All page text, Indonesian first. Menu items live in menu.js.
const TRANSLATIONS = {
  id: {
    tagline: "Your neighborhood coffee shop since 2020",
    btnMenu: "Menu",
    btnDirections: "Petunjuk Arah",
    aboutTitle: "Tentang Kami",
    // Blank lines ("\n\n") separate paragraphs.
    aboutText: "Solid Coffee adalah kedai yang hadir sebagai tempat untuk menikmati minuman berkualitas dalam suasana yang nyaman dan terasa seperti rumah sendiri.\n\nBerawal dari kecintaan terhadap kopi dan keinginan untuk menciptakan ruang yang dekat dengan lingkungan sekitar, kami terus berkembang dan melayani pelanggan selama lebih dari 6 tahun. Bagi kami, kedai bukan hanya tentang apa yang disajikan dalam gelas, tetapi juga tentang pengalaman, percakapan, dan hubungan yang tercipta di dalamnya.\n\nDengan konsep yang sederhana, hangat, dan approachable, kami berusaha menjaga kualitas produk sekaligus memberikan pelayanan yang ramah dan personal. Kami percaya bahwa hal-hal sederhana dapat menciptakan pengalaman yang berkesan.\n\nCome as you are, stay as long as you like.",
    priceRange: "Kisaran harga:",
    coffee: "Kopi",
    "non-coffee": "Non-Kopi",
    meal: "Makanan",
    soldOut: "Beberapa item mungkin habis, cek Instagram atau WhatsApp kami.",
    galleryTitle: "Galeri",
    captionDay: "Solid di siang hari",
    captionNight: "Solid di malam hari",
    visitTitle: "Jam Buka & Lokasi",
    labelAddress: "Alamat",
    labelPhone: "Telepon",
    labelHours: "Jam Buka",
    mon: "Senin",
    tue: "Selasa",
    wedFri: "Rabu – Jumat",
    sat: "Sabtu",
    sun: "Minggu",
    btnMaps: "Buka di Google Maps",
  },
  en: {
    tagline: "Your neighborhood coffee shop since 2020",
    btnMenu: "Menu",
    btnDirections: "Directions",
    aboutTitle: "About Us",
    aboutText: "Solid Coffee is a place to enjoy quality drinks in a cozy setting that feels like home.\n\nIt began with a love of coffee and a wish to create a space close to the neighborhood, and we have kept growing and serving our customers for more than 6 years. For us, a coffee shop is not only about what goes in the cup, but also about the experiences, conversations, and connections that happen inside it.\n\nWith a simple, warm, and approachable concept, we work to keep our quality high while giving friendly, personal service. We believe simple things can create memorable experiences.\n\nCome as you are, stay as long as you like.",
    priceRange: "Price range:",
    coffee: "Coffee",
    "non-coffee": "Non-Coffee",
    meal: "Food",
    soldOut: "Some items may be sold out, check our Instagram or WhatsApp.",
    galleryTitle: "Gallery",
    captionDay: "Solid by day",
    captionNight: "Solid by night",
    visitTitle: "Hours & Location",
    labelAddress: "Address",
    labelPhone: "Phone",
    labelHours: "Hours",
    mon: "Monday",
    tue: "Tuesday",
    wedFri: "Wednesday – Friday",
    sat: "Saturday",
    sun: "Sunday",
    btnMaps: "Open in Google Maps",
  },
};

const CATEGORIES = ["coffee", "non-coffee", "meal"];

function renderMenu(t) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  for (const category of CATEGORIES) {
    const group = document.createElement("div");
    group.className = "menu-group";
    const heading = document.createElement("h3");
    heading.textContent = t[category];
    const ul = document.createElement("ul");
    for (const item of MENU.filter((i) => i.category === category)) {
      const li = document.createElement("li");
      const name = document.createElement("span");
      name.textContent = item.name;
      const price = document.createElement("span");
      price.className = "price";
      price.textContent = item.price + "K";
      li.append(name, price);
      ul.append(li);
    }
    group.append(heading, ul);
    list.append(group);
  }
}

function renderPriceRange() {
  const prices = MENU.flatMap((i) => i.price.split("-").map(Number));
  document.getElementById("price-range").textContent =
    Math.min(...prices) + "K – " + Math.max(...prices) + "K";
}

function highlightToday() {
  // Opening hours are local, so use Jakarta time regardless of the visitor's timezone.
  const weekday = new Date().toLocaleDateString("en-US", { weekday: "short", timeZone: "Asia/Jakarta" });
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  for (const row of document.querySelectorAll(".hours tr")) {
    row.classList.toggle("today", row.dataset.days.split(" ").includes(String(day)));
  }
}

function setLanguage(lang) {
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    el.textContent = t[el.dataset.i18n];
  }
  renderMenu(t);
  document.getElementById("lang-toggle").textContent = lang === "id" ? "EN" : "ID";
  try { localStorage.setItem("lang", lang); } catch {}
}

let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch {}
let currentLang = savedLang === "en" ? "en" : "id";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "id" ? "en" : "id";
  setLanguage(currentLang);
});

setLanguage(currentLang);
renderPriceRange();
highlightToday();
