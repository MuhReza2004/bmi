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

    // Tentukan kategori BMI dan rekomendasi
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

    // Update bagian tampilan hasil
    document.getElementById("result").innerHTML = `
        <div class="card shadow-lg p-4 result-card">
            <div class="text-center">
                <h4 class="mb-4">Hasil BMI Anda</h4>
                <p class="bmi-value mb-3">${bmi}</p>
                <div class="progress mb-4" style="height: 10px;">
                    <div class="progress-bar ${
                      bmi < 18.5
                        ? "bg-info"
                        : bmi <= 24.9
                        ? "bg-success"
                        : bmi <= 29.9
                        ? "bg-warning"
                        : "bg-danger"
                    }" 
                    role="progressbar" 
                    style="width: ${Math.min(
                      (bmi / 40) * 100,
                      100
                    )}%; border-radius: 5px;"
                    ></div>
                </div>
                <div class="card mb-3 ${
                  bmi < 18.5
                    ? "bg-info bg-opacity-10"
                    : bmi <= 24.9
                    ? "bg-success bg-opacity-10"
                    : bmi <= 29.9
                    ? "bg-warning bg-opacity-10"
                    : "bg-danger bg-opacity-10"
                } p-3">
                    <h5 class="mb-0">Kategori: ${kategori}</h5>
                </div>
                <div class="card bg-light p-3">
                    <h5 class="mb-2">Rekomendasi Aktivitas:</h5>
                    <p class="mb-0">${rekomendasi}</p>
                </div>
            </div>
        </div>
    `;
  });
