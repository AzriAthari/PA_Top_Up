document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#customCarousel");

  // Custom event listener (optional)
  carousel.addEventListener("slide.bs.carousel", (e) => {
    console.log("Slide changed to:", e.to);
  });
});

// Fungsi pencarian game
document.getElementById("searchButton").addEventListener("click", function () {
  // Ambil nilai dari input
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();

  // Ambil semua elemen game
  const games = document.querySelectorAll(".game-item");

  // Loop melalui semua game dan filter berdasarkan searchQuery
  games.forEach((game) => {
    const gameTitle = game.querySelector(".game-title").textContent.toLowerCase();

    if (gameTitle.includes(searchQuery)) {
      // Tampilkan game yang cocok
      game.style.display = "block";
    } else {
      // Sembunyikan game yang tidak cocok
      game.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const newsData = [
    { img: "honkai x honkai.jpg", title: "HONKAI STAR RAIL COLLABORATION WITH HONKAI IMPACT" },
    { img: "ff x blu luk.jpeg", title: "Kolaborasi Free Fire x Blue Lock? Wow!!" },
    { img: "tof_evangelion.jpg", title: "TOF AND EVANGELION HAS BEEN ANNOUNCED AS MARCH 12TH" },
    { img: "tof_beyond_horizons.jpg", title: "TOWER OF FANTASY VERSION 3.6: BEYOND HORIZONS" },
    { img: "pubg_shadow_force.jpg", title: "PUBG MOBILE VERSION 3.0 UPDATE: SHADOW FORCE MODE" },
    { img: "tof_winter_rhapsody.jpg", title: "TOF VERSION 3.5 'ELECTRIFYING WINTER RHAPSODY'" },
  ];

  const newsContainer = document.getElementById("news-container");

  newsData.slice(0, 3).forEach((news) => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6 mb-4";
    col.innerHTML = `
      <div class="card news-card h-100">
        <img src="${news.img}" class="card-img-top" alt="${news.title}" />
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
        </div>
      </div>
    `;
    newsContainer.appendChild(col);
  });
});
