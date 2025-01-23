// Data untuk Studio dan Anime
const studioData = {
    "studio-ghibli": {
        name: "Studio Ghibli",
        animes: [
            { title: "My Neighbor Totoro", year: 1988, image: "totoro.jpg" },
            { title: "Spirited Away", year: 2001, image: "spirited-away.jpg" },
            { title: "Howl's Moving Castle", year: 2004, image: "howls-castle.jpg" }
        ]
    },
    "madhouse": {
        name: "Madhouse",
        animes: [
            { title: "Death Note", year: 2006, image: "death-note.jpg" },
            { title: "One Punch Man", year: 2015, image: "one-punch-man.jpg" },
            { title: "Hunter x Hunter", year: 2011, image: "hunter-x-hunter.jpg" }
        ]
    },
    "a1-pictures": {
        name: "A-1 Pictures",
        animes: [
            { title: "Fairy Tail", year: 2009, image: "fairy-tail.jpg" },
            { title: "Sword Art Online", year: 2012, image: "sao.jpg" },
            { title: "Your Lie in April", year: 2014, image: "your-lie-in-april.jpg" }
        ]
    }
};

const studioKeys = Object.keys(studioData);
let currentStudioIndex = 0;

// Fungsi untuk memperbarui konten studio
function updateStudioContent() {
    const studioKey = studioKeys[currentStudioIndex];
    const studio = studioData[studioKey];

    // Perbarui judul studio (hanya di slider)
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
