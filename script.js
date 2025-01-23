// Data anime untuk setiap studio
const studioData = {
    "studio-ghibli": [
        { title: "My Neighbor Totoro", year: 1988, image: "totoro.jpg" },
        { title: "Spirited Away", year: 2001, image: "spirited-away.jpg" },
        { title: "Princess Mononoke", year: 1997, image: "mononoke.jpg" },
    ],
    "madhouse": [
        { title: "Death Note", year: 2006, image: "death-note.jpg" },
        { title: "One Punch Man", year: 2015, image: "one-punch-man.jpg" },
        { title: "Hunter x Hunter", year: 2011, image: "hunter-x-hunter.jpg" },
    ],
    "a1-pictures": [
        { title: "Fairy Tail", year: 2009, image: "fairy-tail.jpg" },
        { title: "Sword Art Online", year: 2012, image: "sword-art-online.jpg" },
        { title: "Your Lie in April", year: 2014, image: "your-lie-in-april.jpg" },
    ],
    "ufotable": [
        { title: "Demon Slayer", year: 2019, image: "demon-slayer.jpg" },
        { title: "Fate/Zero", year: 2011, image: "fate-zero.jpg" },
    ],
    "mappa": [
        { title: "Attack on Titan", year: 2020, image: "attack-on-titan.jpg" },
        { title: "Jujutsu Kaisen", year: 2020, image: "jujutsu-kaisen.jpg" },
    ]
};

// Referensi elemen HTML
const studioTitle = document.getElementById("studio-title");
const animeCards = document.getElementById("anime-cards");
const studioButtons = document.querySelectorAll(".studio-button");

// Fungsi untuk memperbarui konten berdasarkan studio
function updateContent(studio) {
    // Update judul studio
    studioTitle.textContent = studio.replace(/-/g, " ").toUpperCase();

    // Hapus konten lama
    animeCards.innerHTML = "";

    // Tambahkan konten baru
    studioData[studio].forEach(anime => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = anime.image;
        img.alt = anime.title;

        const p = document.createElement("p");
        p.textContent = `${anime.title} (${anime.year})`;

        card.appendChild(img);
        card.appendChild(p);

        animeCards.appendChild(card);
    });
}

// Event listener untuk tombol studio
studioButtons.forEach(button => {
    button.addEventListener("click", () => {
        const studio = button.getAttribute("data-studio");
        updateContent(studio);
    });
});

// Set konten awal (A-1 Pictures)
updateContent("a1-pictures");
