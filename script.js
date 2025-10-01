function sapa() {
  const nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");
  const form = document.getElementById("form");
  const btn = document.getElementById("btn");
  const showPhotoBtn = document.getElementById("showPhotoBtn");

  if (!nama) {
    hasil.textContent = "Isi nama dulu yaa ❤️❤️";
    return;
  }

  // sembunyikan form dan tombol input
  form.style.display = "none";
  btn.style.display = "none";

  const teks = `Alloo Selamat Pagi ${nama}, Happy Girl Friend Day's cantikk.\n
Maaf yaa telat ngirim nya.\n
Aku cuma mau bilang:\n
Terimakasih semuanya, Terimakasih udah jadi support system terbaik.\n
Aku sangat menghargai-mu lebih dari yang bisa aku perlihatkan,\n
Aku sangat berharap kita bisa terus selamanya.\n
Terimakasih orang very perfect.\n
I LOVE YOU💓💓`;

  let i = 0;
  hasil.textContent = "";

  function ketik() {
    if (i < teks.length) {
      hasil.textContent += teks.charAt(i);
      i++;
      setTimeout(ketik, 50);
    } else {
      // selesai ngetik → tampilkan tombol foto
      showPhotoBtn.style.display = "inline-block";
    }
  }
  ketik();
}

function tampilkanFoto() {
  const fotoList = document.querySelectorAll(".foto");
  fotoList.forEach(f => f.style.display = "block"); // munculkan semua foto
}
function tampilkanFoto() {
  const fotos = document.querySelectorAll(".foto");
  fotos.forEach((foto, index) => {
    setTimeout(() => {
      foto.style.display = "block";
    }, index * 500); // delay biar muncul bergiliran
  });
}

