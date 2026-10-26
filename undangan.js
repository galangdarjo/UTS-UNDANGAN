const TANGGAL_ACARA = new Date("2027-01-01T08:00:00+07:00");

function bukaUndangan() {
  document.getElementById("landing").classList.add("buka");
  document.body.classList.remove("locked");
  window.scrollTo(0, 0);
}

// musik dimulai pada sentuhan/klik pertama.
const musik = document.getElementById("musik");
musik.play().catch(() => {
  const mulai = () => {
    musik.play();
    ["click", "touchstart", "scroll"].forEach((ev) => removeEventListener(ev, mulai));
  };
  ["click", "touchstart", "scroll"].forEach((ev) => addEventListener(ev, mulai));
});

// Hitung mundur
const cd = document.getElementById("countdown");
function tick() {
  const d = Math.max(0, TANGGAL_ACARA - new Date());
  const pad = (n) => String(n).padStart(2, "0");
  const item = (angka, label) =>
    `<div><div>${pad(angka)}</div><small class="fs-6 gold">${label}</small></div>`;
  cd.innerHTML =
    item(Math.floor(d / 864e5), "Hari") +
    item(Math.floor(d / 36e5) % 24, "Jam") +
    item(Math.floor(d / 6e4) % 60, "Menit") +
    item(Math.floor(d / 1e3) % 60, "Detik");
}
tick();
setInterval(tick, 1000);

// Kelopak jatuh (hiasan)
const JUMLAH_KELOPAK = 14;
(function () {
  const wadah = document.createElement("div");
  wadah.id = "kelopak";
  const warna = ["#e8c9c1", "#f3dcd6", "#d9b98a"];
  for (let i = 0; i < JUMLAH_KELOPAK; i++) {
    const k = document.createElement("span");
    const ukuran = 8 + Math.random() * 10;
    k.className = "kelopak";
    k.style.cssText =
      `left:${Math.random() * 100}%;width:${ukuran}px;height:${ukuran}px;` +
      `background:${warna[i % warna.length]};` +
      `animation-duration:${9 + Math.random() * 8}s;animation-delay:-${Math.random() * 12}s;`;
    wadah.appendChild(k);
  }
  document.body.appendChild(wadah);
})();