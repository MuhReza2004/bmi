document
  .getElementById("bmi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil input dari form
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value); // Tinggi dalam cm
    const weight = parseFloat(document.getElementById("weight").value); // Berat dalam kg

    if (height <= 0 || weight <= 0) {
      document.getElementById("result").innerHTML =
        '<div class="alert alert-danger">Tinggi dan berat badan harus bernilai positif.</div>';
      return;
    }

    // Konversi tinggi ke meter untuk perhitungan BMI
    const heightInMeters = height / 100;

    // Hitung BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Tentukan kategori BMI dan rekomendasi aktivitas
    let kategori = "";
    let rekomendasi = "";
    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
      rekomendasi =
        "Fokus pada pola makan bergizi tinggi untuk menaikkan berat badan. Tambahkan olahraga ringan seperti yoga atau latihan peregangan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "Berat Badan Normal";
      rekomendasi =
        "Pertahankan gaya hidup sehat dengan olahraga seperti jogging, berenang, atau bersepeda secara rutin.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      kategori = "Kelebihan Berat Badan";
      rekomendasi =
        "Kurangi makanan berlemak, tingkatkan aktivitas fisik seperti jalan cepat, aerobik, atau latihan kekuatan.";
    } else {
      kategori = "Obesitas";
      rekomendasi =
        "Konsultasikan dengan ahli gizi. Lakukan olahraga ringan seperti berjalan, yoga, atau berenang.";
    }

    // Tampilkan hasil dengan rekomendasi
    document.getElementById("result").innerHTML = `
      <div class="card shadow p-4">
        <h4 class="text-center">Hasil BMI Anda</h4>
        <p class="text-center display-4">${bmi}</p>
        <div class="progress mb-3">
          <div
            class="progress-bar ${
              bmi < 18.5
                ? "bg-info"
                : bmi <= 24.9
                ? "bg-success"
                : bmi <= 29.9
                ? "bg-warning"
                : "bg-danger"
            }"
            role="progressbar"
            style="width: ${Math.min((bmi / 40) * 100, 100)}%"
          ></div>
        </div>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Rekomendasi Aktivitas:</strong> ${rekomendasi}</p>
      </div>
    `;
  });
