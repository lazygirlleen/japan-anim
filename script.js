// Data untuk Studio dan Anime
const studioData = {
    "studio-ghibli": {
        name: "Studio Ghibli",
        animes: [
            { title: "My Neighbor Totoro", year: 1988, image: "totoro.jpeg" },
            { title: "Spirited Away", year: 2001, image: "spirited-away.jpeg" },
            { title: "Howl's Moving Castle", year: 2004, image: "howls.jpeg" }
        ]
    },
    "madhouse": {
        name: "Madhouse",
        animes: [
            { title: "Death Note", year: 2006, image: "death-note.jpeg" },
            { title: "One Punch Man", year: 2015, image: "one-punch-man.jpeg" },
            { title: "Hunter x Hunter", year: 2011, image: "hunter-x-hunter.jpeg" }
        ]
    },
    "a1-pictures": {
        name: "A-1 Pictures",
        animes: [
            { title: "Fairy Tail", year: 2009, image: "fairy-tail.jpeg" },
            { title: "Sword Art Online", year: 2012, image: "sao.jpeg" },
            { title: "Your Lie in April", year: 2014, image: "your-lie-in-april.jpeg" }
        ]
    }
};

const studioKeys = Object.keys(studioData);
let currentStudioIndex = 0;

// Fungsi untuk memperbarui konten studio
function updateStudioContent() {
    const studioKey = studioKeys[currentStudioIndex];
    const studio = studioData[studioKey];

    // Perbarui judul studio
    const studioTitleElement = document.getElementById("studio-title");
    studioTitleElement.textContent = studio.name;

    // Perbarui anime cards
    const animeCardsElement = document.getElementById("anime-cards");
    animeCardsElement.innerHTML = ""; // Kosongkan konten lama

    studio.animes.forEach(anime => {
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
    currentStudioIndex = (currentStudioIndex - 1 + studioKeys.length) % studioKeys.length;
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
    var kataKunci = document.getElementById('kataKunci').value.toLowerCase();

    // Ambil semua elemen anime-card
    var animeCards = document.getElementsByClassName('anime-card');

    // Loop melalui setiap anime-card untuk melakukan pencarian
    for (var i = 0; i < animeCards.length; i++) {
        // Ambil teks judul anime di dalam setiap card
        var title = animeCards[i].querySelector('p').textContent.toLowerCase();

        // Periksa apakah kata kunci ditemukan dalam judul
        if (title.indexOf(kataKunci) > -1) {
            animeCards[i].style.display = ''; // Tampilkan jika cocok
        } else {
            animeCards[i].style.display = 'none'; // Sembunyikan jika tidak cocok
        }
    }
}

// Tambahkan event listener untuk form pencarian
document.getElementById('formPencarian').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form melakukan reload halaman
    pencarian(); // Panggil fungsi pencarian
});
