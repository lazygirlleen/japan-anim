// Data untuk Studio dan Anime
const studioData = {
  "studio-ghibli": {
    name: "Studio Ghibli",
    logo: "AS Gibli.jpg",
    animes: [
      { title: "My Neighbor Totoro", year: 1988, image: "totoro.jpeg" },
      { title: "Spirited Away", year: 2001, image: "spirited-away.jpeg" },
      { title: "Howl's Moving Castle", year: 2004, image: "howls.jpeg" },
    ],
  },
  madhouse: {
    name: "Madhouse",
    logo: "AS MAd.png",
    animes: [
      { title: "Death Note", year: 2006, image: "death-note.jpeg" },
      { title: "One Punch Man", year: 2015, image: "one-punch-man.jpeg" },
      { title: "Hunter x Hunter", year: 2011, image: "hunter-x-hunter.jpeg" },
    ],
  },
  "Ufotable": {
    name: "Ufotable",
    logo: "AS ufo.jpg",
    animes: [
      { title: "Date Stay Nigth", year: 2010, image: "EX fate.jpg" },
      { title: "Kimetsu No Yaiba", year: 2020, image: "EX Kimetsu.jpg" },
      { title: "Garden Of Sin", year: 2008, image: "EX Garden.jpg" },
    ],
  },
  "Mappa": {
    name: "MAPPA",
    logo: "AS Mappa.jpg",
    animes: [
      { title: "Attck On Titan", year: 2013-2022, image: "EX AOT.jpg" },
      { title: "Jujutsu Kaisen", year: 2019, image: "EX jjk.jpg" },
      { title: "Chainsaw Man", year: 2022, image: "EX Chainsawman.jpg" },
    ],
  },
"doga Kobo": {
    name: "Doga Kobo Studio",
    logo: "AS doga.png",
    animes: [
      { title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san", year: 2024, image: "EX alya.jpg " },
      { title: "Oshi No Ko", year: 2023, image: "EX Oshi.jpg" },
      { title: "Himouto! Umaru-chan", year: 2015, image: "EX Umaru.jpg" },
    ],
  },
  "a1-pictures": {
    name: "A-1 Pictures",
    logo: "AS A1.jpg",
    animes: [
      { title: "Fairy Tail", year: 2009, image: "fairy-tail.jpeg" },
      { title: "Sword Art Online", year: 2012, image: "sao.jpeg" },
      {
        title: "Your Lie in April",
        year: 2014,
        image: "your-lie-in-april.jpeg",
      },
    ],
  },
};


const studioKeys = Object.keys(studioData);
let currentStudioIndex = 0;

// Fungsi untuk memperbarui konten studio
function updateStudioContent() {
  const studioKey = studioKeys[currentStudioIndex];
  const studio = studioData[studioKey];

  // Perbarui logo studio
  const studioLogoElement = document.getElementById("studio-logo");
  studioLogoElement.src = studio.logo;
  studioLogoElement.alt = studio.name;

  // Perbarui nama studio
  const studioTitleElement = document.getElementById("studio-title");
  studioTitleElement.textContent = studio.name;

  // Perbarui anime cards
  const animeCardsElement = document.getElementById("anime-cards");
  animeCardsElement.innerHTML = ""; // Kosongkan konten lama

  studio.animes.forEach((anime) => {
    const animeCard = document.createElement("div");
    animeCard.classList.add("anime-card");

    animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <p>${anime.title} (${anime.year})</p>
        `;

    animeCardsElement.appendChild(animeCard);
  });
}


// Fungsi untuk navigasi ke studio sebelumnya
function prevStudio() {
  currentStudioIndex =
    (currentStudioIndex - 1 + studioKeys.length) % studioKeys.length;
  updateStudioContent();
}

// Fungsi untuk navigasi ke studio berikutnya
function nextStudio() {
  currentStudioIndex = (currentStudioIndex + 1) % studioKeys.length;
  updateStudioContent();
}

// Inisialisasi konten saat halaman dimuat
updateStudioContent();

// Fungsi pencarian
function pencarian() {
  // Ambil nilai input pencarian
  var kataKunci = document.getElementById("kataKunci").value.toLowerCase();

  // Ambil semua elemen anime-card
  var animeCards = document.getElementsByClassName("anime-card");

  // Loop melalui setiap anime-card untuk melakukan pencarian
  for (var i = 0; i < animeCards.length; i++) {
    // Ambil teks judul anime di dalam setiap card
    var title = animeCards[i].querySelector("p").textContent.toLowerCase();

    // Periksa apakah kata kunci ditemukan dalam judul
    if (title.indexOf(kataKunci) > -1) {
      animeCards[i].style.display = ""; // Tampilkan jika cocok
    } else {
      animeCards[i].style.display = "none"; // Sembunyikan jika tidak cocok
    }
  }
}
document
  .getElementById("formPencarian")
  .addEventListener("submit", function (e) {
    e.preventDefault(); 
    pencarian(); 
  });

  