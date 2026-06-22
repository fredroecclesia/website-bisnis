// 💬 ORDER KE WHATSAPP
function kirimOrder() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const paket = document.getElementById("paket").value;
  const catatan = document.getElementById("catatan").value;

  const msg = `Halo, saya ingin order:%0A
Nama: ${nama}%0A
Email: ${email}%0A
Paket: ${paket}%0A
Catatan: ${catatan}`;

  window.open(`https://wa.me/628129145169?text=${msg}`, "_blank");
}

// 💳 PAYMENT SYSTEM (MIDTRANS / QRIS READY)
function bayar(paket) {

  const harga = {
    basic: "99000",
    pro: "199000",
    premium: "399000"
  };

  // 🔵 MIDTRANS READY (ganti dengan Snap Token kamu nanti)
  const midtrans = {
    basic: "https://app.midtrans.com/snap/v2/vtweb-token-basic",
    pro: "https://app.midtrans.com/snap/v2/vtweb-token-pro",
    premium: "https://app.midtrans.com/snap/v2/vtweb-token-premium"
  };

  const useMidtrans = false; // ubah jadi true kalau sudah punya akun Midtrans

  if (useMidtrans) {
    window.open(midtrans[paket], "_blank");
  } else {
    window.open(`https://wa.me/628xxxxxxxxxx?text=Saya%20mau%20bayar%20${paket}%20Rp${harga[paket]}`, "_blank");
  }
}

// ✨ ANIMASI SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));
