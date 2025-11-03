export interface QuizOption {
  key: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
  scoring: { [key: string]: 'V' | 'A' | 'K' | 'R' };
}

export interface QuizData {
  questionnaireTitle: string;
  questions: QuizQuestion[];
  categories: { [key: string]: string };
}

const rawQuizData: QuizData = {
  "questionnaireTitle": "Kuesioner VARK (Versi 8.01) - Visual, Aural, Kinesthetic",
  "questions": [
    {
      "id": 1,
      "text": "Saya perlu menemukan jalan ke toko yang direkomendasikan oleh teman. Saya akan:",
      "options": [
        {"key": "a", "text": "mencari tahu di mana letak toko tersebut relatif terhadap tempat yang saya kenal."},
        {"key": "b", "text": "Minta teman saya untuk memberi tahu saya arahnya."},
        {"key": "d", "text": "Gunakan peta."}
      ],
      "scoring": {"a": "K", "b": "A", "c": "R", "d": "V"}
    },
    {
      "id": 2,
      "text": "Sebuah situs web memiliki video yang menunjukkan cara membuat grafik atau diagram khusus. Saya akan belajar paling banyak dari:",
      "options": [
        {"key": "a", "text": "melihat diagram-diagram."},
        {"key": "b", "text": "mendengarkan."},
        {"key": "d", "text": "menonton tindakan."}
      ],
      "scoring": {"a": "V", "b": "A", "c": "R", "d": "K"}
    },
    {
      "id": 3,
      "text": "Saya ingin mengetahui lebih lanjut tentang tur yang akan saya ikuti. Saya akan:",
      "options": [
        {"key": "a", "text": "Melihat detail tentang atraksi utama dan aktivitas dalam tur tersebut"},
        {"key": "b", "text": "Gunakan peta dan lihat di mana letak tempat-tempat tersebut."},
        {"key": "d", "text": "Bicaralah dengan orang yang merencanakan tur atau orang lain yang akan ikut dalam tur."}
      ],
      "scoring": {"a": "K", "b": "V", "c": "R", "d": "A"}
    },
    {
      "id": 4,
      "text": "Saat memilih karier atau bidang studi, hal-hal berikut ini penting bagi saya:",
      "options": [
        {"key": "a", "text": "Menerapkan pengetahuan saya dalam situasi nyata."},
        {"key": "b", "text": "Berkomunikasi dengan orang lain melalui diskusi."},
        {"key": "c", "text": "Bekerja dengan desain, peta, atau grafik."}
      ],
      "scoring": {"a": "K", "b": "A", "c": "V", "d": "R"}
    },
    {
      "id": 5,
      "text": "Saat belajar, saya:",
      "options": [
        {"key": "a", "text": "suka membahas hal-hal secara mendalam."},
        {"key": "b", "text": "Melihat pola dalam hal-hal."},
        {"key": "c", "text": "Gunakan contoh dan aplikasi."}
      ],
      "scoring": {"a": "A", "b": "V", "c": "K", "d": "R"}
    },
    {
      "id": 6,
      "text": "Saya ingin menabung lebih banyak dan memilih di antara berbagai opsi. Saya akan:",
      "options": [
        {"key": "a", "text": "mempertimbangkan contoh dari setiap opsi menggunakan informasi keuangan saya."},
        {"key": "c", "text": "menggunakan grafik yang menunjukkan opsi berbeda untuk periode waktu yang berbeda."},
        {"key": "d", "text": "berbicara dengan ahli tentang opsi-opsi tersebut."}
      ],
      "scoring": {"a": "K", "b": "R", "c": "V", "d": "A"}
    },
    {
      "id": 7,
      "text": "Saya ingin belajar cara bermain permainan papan atau permainan kartu baru. Saya akan:",
      "options": [
        {"key": "a", "text": "menonton orang lain bermain permainan tersebut sebelum ikut bermain."},
        {"key": "b", "text": "mendengarkan seseorang menjelaskan permainan dan mengajukan pertanyaan."},
        {"key": "c", "text": "menggunakan diagram yang menjelaskan berbagai tahap, gerakan, dan strategi dalam permainan."}
      ],
      "scoring": {"a": "K", "b": "A", "c": "V", "d": "R"}
    },
    {
      "id": 8,
      "text": "Saya memiliki masalah dengan jantung saya. Saya lebih memilih agar dokter:",
      "options": [
        {"key": "b", "text": "Menggunakan model plastik untuk menunjukkan kepada saya apa yang salah."},
        {"key": "c", "text": "menjelaskan apa yang salah."},
        {"key": "d", "text": "Menunjukkan kepada saya diagram tentang apa yang salah."}
      ],
      "scoring": {"a": "R", "b": "K", "c": "A", "d": "V"}
    },
    {
      "id": 9,
      "text": "Saya ingin belajar melakukan sesuatu yang baru di komputer. Saya akan:",
      "options": [
        {"key": "b", "text": "berbicara dengan orang-orang yang mengerti tentang program tersebut."},
        {"key": "c", "text": "mulai menggunakannya dan belajar melalui trial and error."},
        {"key": "d", "text": "mengikuti diagram dalam buku."}
      ],
      "scoring": {"a": "R", "b": "A", "c": "K", "d": "V"}
    },
    {
      "id": 10,
      "text": "Saat belajar dari Internet, saya suka:",
      "options": [
        {"key": "a", "text": "Video yang menunjukkan cara melakukan atau membuat sesuatu."},
        {"key": "b", "text": "Desain dan fitur visual yang menarik."},
        {"key": "d", "text": "Saluran audio tempat saya dapat mendengarkan podcast atau wawancara."}
      ],
      "scoring": {"a": "K", "b": "V", "c": "R", "d": "A"}
    },
    {
      "id": 11,
      "text": "Saya ingin belajar tentang proyek baru. Saya akan meminta:",
      "options": [
        {"key": "a", "text": "diagram yang menunjukkan tahap-tahap proyek beserta grafik manfaat dan biaya."},
        {"key": "c", "text": "kesempatan untuk mendiskusikan proyek."},
        {"key": "d", "text": "contoh di mana proyek tersebut telah digunakan dengan sukses."}
      ],
      "scoring": {"a": "V", "b": "R", "c": "A", "d": "K"}
    },
    {
      "id": 12,
      "text": "Saya ingin belajar cara mengambil foto yang lebih baik. Saya akan:",
      "options": [
        {"key": "a", "text": "bertanya dan membahas kamera serta fitur-fiturnya."},
        {"key": "c", "text": "menggunakan diagram yang menunjukkan kamera dan fungsi masing-masing bagiannya."},
        {"key": "d", "text": "menggunakan contoh foto yang baik dan buruk untuk menunjukkan cara memperbaikinya."}
      ],
      "scoring": {"a": "A", "b": "R", "c": "V", "d": "K"}
    },
    {
      "id": 13,
      "text": "Saya lebih suka presenter atau guru yang menggunakan:",
      "options": [
        {"key": "a", "text": "demonstrasi, model, atau sesi praktis."},
        {"key": "b", "text": "tanya jawab, diskusi kelompok, atau pembicara tamu."},
        {"key": "d", "text": "diagram, grafik, peta, atau diagram."}
      ],
      "scoring": {"a": "K", "b": "A", "c": "R", "d": "V"}
    },
    {
      "id": 14,
      "text": "Saya telah menyelesaikan sebuah kompetisi atau ujian dan ingin mendapatkan umpan balik. Saya ingin mendapatkan umpan balik:",
      "options": [
        {"key": "a", "text": "menggunakan contoh dari apa yang telah saya lakukan."},
        {"key": "c", "text": "dari seseorang yang membahasnya bersama saya."},
        {"key": "d", "text": "menggunakan grafik yang menunjukkan apa yang telah saya capai."}
      ],
      "scoring": {"a": "K", "b": "R", "c": "A", "d": "V"}
    },
    {
      "id": 15,
      "text": "Saya ingin mengetahui tentang sebuah rumah atau apartemen. Sebelum mengunjunginya, saya ingin:",
      "options": [
        {"key": "a", "text": "melihat video properti tersebut."},
        {"key": "b", "text": "Pembicaraan dengan pemilik."},
        {"key": "d", "text": "Sebuah denah yang menunjukkan ruangan-ruangan dan peta area."}
      ],
      "scoring": {"a": "K", "b": "A", "c": "R", "d": "V"}
    },
    {
      "id": 16,
      "text": "Saya ingin merakit meja kayu yang datang dalam bagian-bagian (kitset). Saya akan belajar terbaik dari:",
      "options": [
        {"key": "a", "text": "diagram yang menunjukkan setiap tahap perakitan."},
        {"key": "b", "text": "saran dari seseorang yang sudah pernah melakukannya sebelumnya."},
        {"key": "d", "text": "menonton video seseorang yang merakit meja serupa."}
      ],
      "scoring": {"a": "V", "b": "A", "c": "R", "d": "K"}
    }
  ],
  "categories": {
    "V": "Visual (mencakup peta, diagram, grafik, simbol)",
    "A": "Aural (mencakup diskusi, mendengarkan, berbicara)",
    "K": "Kinesthetic (mencakup contoh, aplikasi, praktik, pengalaman)"
  }
}

export default rawQuizData;