function tampilkanMotivasi() {
  var tanggalInput = document.getElementById("tanggal").value;
  var motivasiDiv = document.getElementById("motivation");
  var loadingContainer = document.getElementById("loading-container");
  var loadingBar = document.getElementById("loading-bar");

  // Reset loading bar width
  loadingBar.style.width = "0%";

  // Show loading container
  loadingContainer.style.display = "block";

  // Simulate delay and update loading bar width
  var interval = setInterval(function () {
    var currentWidth = parseInt(loadingBar.style.width) || 0;
    if (currentWidth < 100) {
      loadingBar.style.width = currentWidth + 10 + "%";
    } else {
      // Hide loading container and clear interval after completion
      clearInterval(interval);
      loadingContainer.style.display = "none";

      // Retrieve and display motivation
      var motivasi = getMotivasiByTanggal(tanggalInput);
      motivasiDiv.innerHTML = motivasi;
      // Play audio if tanggalInput is 1
      if (tanggalInput === "78") {
        var audio = document.getElementById("myAudio");
        audio.play();
      }
      // Play audio if tanggalInput is 1
      if (tanggalInput === " ") {
        var audio = document.getElementById("Audio");
        audio.play();
      }
    }
  }, 250); // Adjust the interval duration for smoother progress
}
function munculkanLove() {
  var loveContainer = document.createElement("div");
  loveContainer.className = "love-container";
  document.body.appendChild(loveContainer);

  // Maksimum jumlah emoji yang ingin ditampilkan
  var maxLoveCount = 100;

  var loveElements = []; // Array untuk menyimpan referensi emoji love

  for (var i = 0; i < maxLoveCount; i++) {
    var love = document.createElement("span");
    love.innerHTML = "💜";

    // Generate random positions within the viewport
    var randomLeft = Math.random() * (window.innerWidth - 30); // 30 is the width of the emoji
    var randomTop = Math.random() * (window.innerHeight - 30); // 30 is the height of the emoji

    love.style.left = randomLeft + "px";
    love.style.top = randomTop + "px";

    loveContainer.appendChild(love);
    loveElements.push(love); // Tambahkan emoji love ke dalam array
  }
  // Play audio jika emoji love ditampilkan
  var audio = document.getElementById("Audio");
  audio.play();
  // Jalankan fungsi untuk memudarkan emoji love secara berurutan
  fadeOutLove(loveElements, loveContainer);
}

function fadeOutLove(loveElements, loveContainer) {
  // Atur timeout untuk memulai pemudaran setelah durasi animasi terbang selesai (5000ms)
  setTimeout(function () {
    // Pemudaran berurutan dengan interval
    var interval = setInterval(function () {
      if (loveElements.length > 0) {
        var love = loveElements.shift(); // Ambil emoji love pertama dari array
        love.style.opacity = 0; // Set opacity menjadi 0 untuk memudarkan

        // Hapus emoji love setelah selesai memudar
        setTimeout(function () {
          love.remove();
        }, 1000); // Tambahkan waktu delay setelah memudar (1000ms)
      } else {
        clearInterval(interval); // Hentikan interval setelah semua emoji love memudar
        // Hapus container love setelah semua emoji love memudar
        setTimeout(function () {
          loveContainer.remove();
          // Setelah loveContainer dihapus, munculkan teks "HBD AREEEJ"
          var birthdayText = document.createElement("div");
          birthdayText.textContent = "hwaitingg cutieeee🫶";
          birthdayText.style.fontSize = "24px";
          birthdayText.style.fontWeight = "bold";
          birthdayText.style.color = "#c77dff";
          birthdayText.style.textAlign = "center";
          document.body.appendChild(birthdayText);
          // Cari elemen motivasi
          var motivasiDiv = document.getElementById("motivation");

          // Sisipkan elemen teks "HBD AREEEJ" sebelum elemen motivasi
          motivasiDiv.parentNode.insertBefore(birthdayText, motivasiDiv);
          // Hapus teks "HBD AREEEJ" setelah 3 detik
          setTimeout(function () {
            birthdayText.remove();
          }, 5000);
        }, 300); // Tambahkan waktu delay sebelum munculkan teks (1000ms)
      }
    }, 300); // Interval 500ms antara setiap emoji love yang memudar
  }, 1500); // Tunggu 5 detik sebelum memulai pemudaran (sama dengan durasi animasi terbang)
}

function getMotivasiByTanggal(tanggal) {
  switch (tanggal) {
    case "1":
      return "blm waktunya heh, ini buat awal bulan nanti";
    case "2":
      return "duuu duuu duuuu";
    case "3":
      return "belum waktunya heh_-";
    case "4":
      return "aissshh dibilang belum waktunyaaaa_-";
    case "5":
      return "hoooo_- tgl 5";
    case "6":
      return "ngapain nginput tanggal 6 _-<br>belum waktunyaaaa, ini msh tgl brpa jugaaa<br>yeuuuu";
    case "7":
      return "batu dibilangin huh_-";
    case "8":
      return "gtww gtww";
    case "9":
      return "hmmm, liat tanggal";
    case "10":
      return "ngapainn";
    case "11":
      return "semoga yang baca masuk surga, aamiin";
    case "12":
      return "BELUM WAKTUNYAAAA FARAAAA_-";
    case "13":
      return "minimal liat tanggal lah yaaa";
    case "14":
      return "alooo faraaa, hari ini cuma ngingetin ajaa,<br>kesuksesan orang lain itu bukan kegagalan kita lhooo<br>jadi kita ndak perlu memaksakan 'harus' lebih hebat dari orng lain,<br>lebih baik dari kmrin saja sudah cukup.<br><br>everythings gonna be finee, tenang ajaaa<br><br>Have a nice day Faraaa<br><br>*input angka 20 klo mau eskriiimmm hhi.";
    case "15":
      return "gtw gelapp";
    case "16":
      return "indonesia malaysiaa bekasi weeee";
    case "17":
      return "aishhh";
    case "18":
      return "ndaa ada apaa apaaa, ngapainn_-";
    case "19":
      return "hmmm";
    case "20":
      return "beli sendiri wleee, salken yaa hho.";
    case "21":
      return "tgl 21_-";
    case "22":
      return "gtw bingung aku";
    case "23":
      return "404 Not Found";
    case "24":
      return "hewan, hewan apa yg magerrr?";
    case "25":
      return "liat tanggal woeeee";
    case "26":
      return "faraaa, gpp manggil doang hho";
    case "27":
      return "p<br>paket";
    case "28":
      return "wkwkwk, gajelas emang";
    case "29":
      return "sdbkjasbkhdklpyghta";
    case "30":
      return "1 + 1 = .... berapa coba";
    case "31":
      return "ini buat akhir bulan, ngapain gabut bngt nginput tgl 31 huh";
    case "78":
      return "special";
    // Tambahkan case untuk tanggal lain di sini
    default:
      return "tanggal berapa itu heh, ngga ada di kalender ish _-<br>yeuuu";
  }
}
