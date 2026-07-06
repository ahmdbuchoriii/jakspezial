/**
 * InfoJakarta - Static Data Store
 * Contains structured objects for the portal's content.
 * Designed for easy reading and explanation by second-semester students.
 */

// 1. Jakarta Province Profile
const profileData = {
    governor: "Dr. Ir. Pramono Anung Wibowo, M.M.",
    viceGovernor: "H. Rano Karno, S.IP.",
    motto: "Jaya Raya (Victorious and Great)",
    anniversary: "22 Juni 1527",
    area: "661.52 km² (Darat) & 6,977.5 km² (Laut)",
    population: "10,679,951 Jiwa (Sensus 2023)",
    logoUrl: "../assets/images/kota/pusat.jpg", // Fallback, will display beautifully in CSS
    description: "DKI Jakarta adalah ibu kota negara Republik Indonesia (sampai perpindahan resmi ke IKN) dan kota metropolitan terbesar di Asia Tenggara. Sebagai pusat pemerintahan, kebudayaan, dan ekonomi, Jakarta memadukan modernitas gedung pencakar langit dengan sejarah kolonial yang kental serta kekayaan budaya Betawi.",
    history: [
        { year: "1527", event: "Fatahillah merebut Pelabuhan Sunda Kelapa dari Portugis dan menamainya Jayakarta (Kota Kemenangan) pada 22 Juni, kini diperingati sebagai HUT Jakarta." },
        { year: "1619", event: "VOC Belanda di bawah pimpinan Jan Pieterszoon Coen menaklukkan Jayakarta dan membangun kota baru bernama Batavia." },
        { year: "1942", event: "Pendudukan Jepang dimulai, nama Batavia diubah menjadi Jakarta Tokubetsu Shi." },
        { year: "1945", event: "Proklamasi Kemerdekaan RI di Jalan Pegangsaan Timur 56, menetapkan Jakarta sebagai ibu kota negara secara de facto." },
        { year: "1966", event: "Status Jakarta resmi ditingkatkan menjadi Daerah Khusus Ibukota (DKI) di bawah kepemimpinan Gubernur Ali Sadikin." }
    ]
};

// 2. Administrative Cities (Kota Administratif)
const citiesData = [
    {
        id: "pusat",
        name: "Jakarta Pusat",
        leader: "Dhany Sukma, S.Sos., M.AP.",
        office: "Jl. Tanah Abang I No.1, Petojo Selatan, Gambir",
        area: "48.13 km²",
        population: "1,056,896 Jiwa",
        districtsCount: 8,
        subdistrictsCount: 44,
        photo: "https://images.pexels.com/photos/36621246/pexels-photo-36621246.jpeg",
        description: "Jakarta Pusat merupakan pusat pemerintahan nasional, diplomatik, dan bisnis skala besar. Kota ini menampung Istana Merdeka, Monumen Nasional (Monas), Masjid Istiqlal, Katedral Jakarta, serta pusat perbelanjaan dan hotel mewah di kawasan Sudirman-Thamrin.",
        districts: {
            "Gambir": ["Gambir", "Kebon Kelapa", "Petojo Selatan", "Petojo Utara", "Cideng", "Duri Pulo"],
            "Tanah Abang": ["Bendungan Hilir", "Karet Tengsin", "Kebon Melati", "Kebon Kacang", "Kampung Bali", "Petamburan", "Gelora"],
            "Menteng": ["Menteng", "Pegangsaan", "Cikini", "Kebon Sirih", "Gondangdia"],
            "Senen": ["Senen", "Kwitang", "Kenari", "Paseban", "Kramat", "Bungur"],
            "Cempaka Putih": ["Cempaka Putih Timur", "Cempaka Putih Barat", "Rawasari"],
            "Johar Baru": ["Johar Baru", "Kampung Rawa", "Galur", "Tanah Tinggi"],
            "Kemayoran": ["Gunung Sahari Selatan", "Kemayoran", "Kebon Kosong", "Harapan Mulya", "Cempaka Baru", "Utan Panjang", "Sumur Batu"],
            "Sawah Besar": ["Pasar Baru", "Gunung Sahari Utara", "Mangga Dua Selatan", "Karang Anyar", "Kartini"]
        }
    },
    {
        id: "barat",
        name: "Jakarta Barat",
        leader: "Uus Kuswanto, S.Sos., M.AP.",
        office: "Jl. Raya Kembangan No.2, Kembangan Selatan",
        area: "129.54 km²",
        population: "2,434,511 Jiwa",
        districtsCount: 8,
        subdistrictsCount: 56,
        photo: "https://images.pexels.com/photos/38186560/pexels-photo-38186560.jpeg",
        description: "Jakarta Barat terkenal dengan peninggalan sejarah kolonial Belanda di kawasan Kota Tua. Saat ini, wilayah ini berkembang pesat sebagai pusat perdagangan elektronik, kuliner oriental legendaris, serta kawasan pemukiman modern di Kembangan.",
        districts: {
            "Kembangan": ["Kembangan Utara", "Kembangan Selatan", "Meruya Utara", "Meruya Selatan", "Srengseng", "Joglo"],
            "Kebon Jeruk": ["Kebon Jeruk", "Kedoya Utara", "Kedoya Selatan", "Duri Kepa", "Sukabumi Utara", "Sukabumi Selatan", "Kelapa Dua"],
            "Palmerah": ["Palmerah", "Slipi", "Kota Bambu Utara", "Kota Bambu Selatan", "Jatipulo", "Kemanggisan"],
            "Grogol Petamburan": ["Grogol", "Tanjung Duren Utara", "Tanjung Duren Selatan", "Tomang", "Jelambar", "Jelambar Baru", "Wijaya Kusuma"],
            "Cengkareng": ["Cengkareng Timur", "Cengkareng Barat", "Rawa Buaya", "Duri Kosambi", "Kapuk", "Kedaung Kali Angke"],
            "Kalideres": ["Kalideres", "Semanan", "Tegal Alur", "Kamal", "Pegadungan"],
            "Tambora": ["Tambora", "Roa Malaka", "Pekojan", "Jembatan Lima", "Krendang", "Duri Utara", "Duri Selatan", "Tanah Sereal", "Tambora", "Angke", "Kali Anyar"],
            "Taman Sari": ["Pinangsia", "Glodok", "Keagungan", "Krukut", "Maphar", "Tangki", "Mangga Besar", "Taman Sari"]
        }
    },
    {
        id: "selatan",
        name: "Jakarta Selatan",
        leader: "Munjirin, S.Sos., M.Si.",
        office: "Jl. Prapanca Raya No.9, Kebayoran Baru",
        area: "141.27 km²",
        population: "2,226,837 Jiwa",
        districtsCount: 10,
        subdistrictsCount: 65,
        photo: "https://images.pexels.com/photos/14381373/pexels-photo-14381373.jpeg",
        description: "Jakarta Selatan dikenal sebagai kawasan hunian hijau elit, pusat bisnis Sudirman Central Business District (SCBD), kuliner modern anak muda, serta pusat hiburan trendi seperti Kemang, Senopati, dan M Bloc Space.",
        districts: {
            "Kebayoran Baru": ["Selong", "Gunung", "Kramat Pela", "Gandaria Utara", "Cipete Utara", "Pulo", "Melawai", "Petogogan", "Rawa Barat", "Senayan"],
            "Kebayoran Lama": ["Kebayoran Lama Utara", "Kebayoran Lama Selatan", "Pondok Pinang", "Pondok Indah", "Cipulir", "Grogol Utara", "Grogol Selatan"],
            "Pesanggrahan": ["Pesanggrahan", "Bintaro", "Petukangan Utara", "Petukangan Selatan", "Ulujami"],
            "Cilandak": ["Cilandak Barat", "Lebak Bulus", "Pondok Labu", "Gandaria Selatan", "Cipete Selatan"],
            "Jagakarsa": ["Jagakarsa", "Tanjung Barat", "Lenteng Agung", "Ciganjur", "Srengseng Sawah", "Cipedak"],
            "Pasar Minggu": ["Pasar Minggu", "Pejaten Barat", "Pejaten Timur", "Kebagusan", "Jati Padang", "Ragunan", "Cilandak Timur"],
            "Pancoran": ["Pancoran", "Kalibata", "Rawa Jati", "Duren Tiga", "Cikoko", "Pengadegan"],
            "Tebet": ["Tebet Barat", "Tebet Timur", "Kebon Baru", "Bukit Duri", "Manggarai", "Manggarai Selatan", "Menteng Dalam"],
            "Setiabudi": ["Setiabudi", "Karet", "Karet Semanggi", "Karet Kuningan", "Kuningan Timur", "Menteng Atas", "Pasar Manggis", "Guntur"],
            "Mampang Prapatan": ["Mampang Prapatan", "Kuningan Barat", "Pela Mampang", "Bangka", "Tegal Parang"]
        }
    },
    {
        id: "timur",
        name: "Jakarta Timur",
        leader: "M. Anwar, S.Si., M.AP.",
        office: "Jl. Dr. Sumarno No.1, Sentra Primer Baru Timur, Pulo Gebang",
        area: "188.03 km²",
        population: "3,037,139 Jiwa",
        districtsCount: 10,
        subdistrictsCount: 65,
        photo: "https://images.pexels.com/photos/2059845/pexels-photo-2059845.jpeg",
        description: "Jakarta Timur merupakan kota administratif terluas di wilayah daratan DKI Jakarta. Kawasan ini didominasi sektor industri, transportasi utama (Bandara Halim Perdanakusuma), serta kawasan wisata edukatif budaya Taman Mini Indonesia Indah (TMII).",
        districts: {
            "Matraman": ["Pisangan Baru", "Utan Kayu Selatan", "Utan Kayu Utara", "Kayu Manis", "Pal Meriam", "Kebon Manggis"],
            "Pulo Gadung": ["Pulo Gadung", "Kayu Putih", "Jati", "Rawamangun", "Pisangan Timur", "Cipinang", "Jatinegara Kaum"],
            "Jatinegara": ["Bali Mester", "Kampung Melayu", "Bidara Cina", "Cipinang Cempedak", "Cipinang Muara", "Cipinang Rawa Lumbu", "Cipinang Besar Utara", "Cipinang Besar Selatan"],
            "Duren Sawit": ["Duren Sawit", "Pondok Bambu", "Pondok Kelapa", "Pondok Kopi", "Malaka Jaya", "Malaka Sari", "Klender"],
            "Kramat Jati": ["Kramat Jati", "Batu Ampar", "Balekambang", "Kampung Tengah", "Dukung", "Cawang", "Cililitan"],
            "Makasar": ["Makasar", "Halim Perdanakusuma", "Cipinang Melayu", "Kebon Pala", "Pinang Ranti"],
            "Ciracas": ["Ciracas", "Cibubur", "Kelapa Dua Wetan", "Susukan", "Rambutan"],
            "Cipayung": ["Cipayung", "Lubang Buaya", "Ceger", "Munjul", "Pondok Ranggon", "Cilangkap", "Setu", "Bambu Apus"],
            "Pasar Rebo": ["Pekayon", "Gedong", "Cijantung", "Baru", "Kalisari"],
            "Cakung": ["Cakung Barat", "Cakung Timur", "Rawa Terate", "Jatinegara", "Penggilingan", "Pulo Gebang", "Ujung Menteng"]
        }
    },
    {
        id: "utara",
        name: "Jakarta Utara",
        leader: "Ali Maulana Hakim, S.IP., M.Si.",
        office: "Jl. Laksda Yos Sudarso No.27-29, Kebon Bawang",
        area: "146.66 km²",
        population: "1,778,981 Jiwa",
        districtsCount: 6,
        subdistrictsCount: 31,
        photo: "https://images.pexels.com/photos/4914220/pexels-photo-4914220.jpeg",
        description: "Jakarta Utara adalah pintu gerbang maritim Indonesia dengan Pelabuhan Tanjung Priok sebagai pelabuhan tersibuk. Kawasan pesisir ini menawarkan tempat rekreasi pantai terbesar di Ancol, wisata kuliner modern di Pantai Indah Kapuk (PIK), serta pemukiman elit Kelapa Gading.",
        districts: {
            "Penjaringan": ["Penjaringan", "Pluit", "Pejagalan", "Kapuk Muara", "Kamal Muara"],
            "Pademangan": ["Pademangan Barat", "Pademangan Timur", "Ancol"],
            "Tanjung Priok": ["Tanjung Priok", "Kebon Bawang", "Sunter Agung", "Sunter Jaya", "Papanggo", "Warakas", "Sungai Bambu"],
            "Koja": ["Koja", "Tugu Utara", "Tugu Selatan", "Lagoa", "Rawa Badak Utara", "Rawa Badak Selatan"],
            "Kelapa Gading": ["Kelapa Gading Barat", "Kelapa Gading Timur", "Pegangsaan Dua"],
            "Cilincing": ["Cilincing", "Kali Baru", "Semper Barat", "Semper Timur", "Sukapura", "Rorotan", "Marunda"]
        }
    },
    {
        id: "seribu",
        name: "Kepulauan Seribu",
        leader: "Junaedi, S.Sos., M.Si. (Bupati)",
        office: "Pulau Pramuka, Kelurahan Pulau Panggang",
        area: "10.18 km² (Darat)",
        population: "27,749 Jiwa",
        districtsCount: 2,
        subdistrictsCount: 6,
        photo: "https://images.pexels.com/photos/34240757/pexels-photo-34240757.jpeg",
        description: "Kabupaten Administrasi Kepulauan Seribu adalah gugusan pulau karang di Teluk Jakarta. Wilayah ini difokuskan sebagai cagar alam laut nasional, pemukiman nelayan tradisional, serta pariwisata bahari tropis dengan puluhan pulau resort nan indah.",
        districts: {
            "Kepulauan Seribu Utara": ["Pulau Harapan", "Pulau Kelapa", "Pulau Panggang"],
            "Kepulauan Seribu Selatan": ["Pulau Pari", "Pulau Tidung", "Pulau Untung Jawa"]
        }
    }
];

// 3. Tourist Attractions (Sekitar 30 Wisata)
const wisataData = [
    {
        id: 1,
        name: "Monumen Nasional (Monas)",
        category: "Sejarah",
        city: "Jakarta Pusat",
        district: "Gambir",
        address: "Jl. Medan Merdeka Barat, Gambir",
        ticketPrice: "Rp 5,000 - Rp 15,000 (Puncak)",
        hours: "08:00 - 16:00 (Selasa - Minggu)",
        photo: "https://images.pexels.com/photos/38093463/pexels-photo-38093463.jpeg",
        mapsQuery: "Monumen+Nasional",
        description: "Monas merupakan tugu setinggi 132 meter berlapiskan emas murni di puncaknya, yang dibangun untuk mengenang perjuangan kemerdekaan rakyat Indonesia. Di bawah cawan terdapat Museum Sejarah Nasional yang memajang puluhan diorama perjuangan bangsa."
    },
    {
        id: 2,
        name: "Kawasan Kota Tua Jakarta",
        category: "Sejarah",
        city: "Jakarta Barat",
        district: "Taman Sari",
        address: "Kawasan Alun-alun Fatahillah, Pinangsia",
        ticketPrice: "Gratis (Area Terbuka)",
        hours: "24 Jam",
        photo: "https://images.pexels.com/photos/2315274/pexels-photo-2315274.jpeg",
        mapsQuery: "Kota+Tua+Jakarta",
        description: "Kota Tua menyimpan memori kejayaan Batavia masa kolonial Belanda. Pusatnya berada di Fatahillah Square, area pedestrian luas tempat menyewa sepeda ontel warna-warni, dikelilingi museum-museum bersejarah berarsitektur kolonial neo-klasik."
    },
    {
        id: 3,
        name: "Taman Mini Indonesia Indah (TMII)",
        category: "Edukasi",
        city: "Jakarta Timur",
        district: "Cipayung",
        address: "Jl. Raya Taman Mini, Jakarta Timur",
        ticketPrice: "Rp 25,000",
        hours: "06:00 - 20:00 (Setiap Hari)",
        photo: "https://images.pexels.com/photos/2048890/pexels-photo-2048890.jpeg",
        mapsQuery: "Taman+Mini+Indonesia+Indah",
        description: "TMII menyajikan miniatur keanekaragaman budaya nusantara dalam satu tempat. Terdapat anjungan daerah perwakilan provinsi Indonesia, museum ilmu pengetahuan, bioskop Keong Emas, serta danau buatan dengan pulau-pulau mini Indonesia."
    },
    {
        id: 4,
        name: "Dunia Fantasi (Dufan)",
        category: "Rekreasi",
        city: "Jakarta Utara",
        district: "Pademangan",
        address: "Kawasan Ancol, Jl. Lodan Timur, Pademangan",
        ticketPrice: "Rp 250,000 - Rp 350,000",
        hours: "10:00 - 18:00 (Setiap Hari)",
        photo: "https://images.pexels.com/photos/3148865/pexels-photo-3148865.jpeg",
        mapsQuery: "Dunia+Fantasi",
        description: "Dunia Fantasi adalah theme park outdoor pertama dan terbesar di Indonesia yang menawarkan sensasi petualangan fantasi keliling dunia melalui berbagai wahana pemacu adrenalin seperti Halilintar, Tornado, Ontang-anting, dan Kora-kora."
    },
    {
        id: 5,
        name: "Taman Impian Jaya Ancol",
        category: "Rekreasi",
        city: "Jakarta Utara",
        district: "Pademangan",
        address: "Jl. Lodan Timur, Pademangan",
        ticketPrice: "Rp 25,000",
        hours: "06:00 - 24:00 (Setiap Hari)",
        photo: "https://images.pexels.com/photos/36547712/pexels-photo-36547712.jpeg",
        mapsQuery: "Taman+Impian+Jaya+Ancol",
        description: "Kawasan wisata terpadu pesisir pantai Jakarta. Menyediakan fasilitas pantai pasir putih, pasar seni, hotel mewah, dermaga kapal wisata menuju Kepulauan Seribu, serta aneka taman rekreasi air seperti Atlantis Water Adventure."
    },
    {
        id: 6,
        name: "Taman Margasatwa Ragunan",
        category: "Alam",
        city: "Jakarta Selatan",
        district: "Pasar Minggu",
        address: "Jl. Harsono RM No.1, Ragunan",
        ticketPrice: "Rp 4,000",
        hours: "07:30 - 16:00 (Selasa - Minggu)",
        photo: "https://images.pexels.com/photos/15310138/pexels-photo-15310138.jpeg",
        mapsQuery: "Taman+Margasatwa+Ragunan",
        description: "Ragunan adalah kebun binatang seluas 140 hektar yang menyimpan ribuan satwa langka khas tropis seperti komodo, orangutan, tapir, serta harimau sumatera. Di dalamnya juga terdapat Pusat Primata Schmutzer yang merupakan penangkaran primata kelas dunia."
    },
    {
        id: 7,
        name: "Jakarta Aquarium & Safari",
        category: "Edukasi",
        city: "Jakarta Barat",
        district: "Grogol Petamburan",
        address: "Neo Soho Mall LGM-LG, Jl. Letjen S. Parman",
        ticketPrice: "Rp 150,000 - Rp 225,000",
        hours: "10:00 - 21:00 (Setiap Hari)",
        photo: "https://images.pexels.com/photos/4653534/pexels-photo-4653534.jpeg",
        mapsQuery: "Jakarta+Aquarium+and+Safari",
        description: "Akuarium dalam mal terbesar di Indonesia berkolaborasi dengan Taman Safari. Menampung lebih dari 3,500 spesies biota laut dan satwa darat eksotis. Wisatawan dapat menyaksikan pertunjukan opera bawah air putri duyung 'Pearl of the South Sea'."
    },
    {
        id: 8,
        name: "Stadion Utama Gelora Bung Karno (SUGBK)",
        category: "Rekreasi",
        city: "Jakarta Pusat",
        district: "Tanah Abang",
        address: "Jl. Pintu Satu Senayan, Tanah Abang",
        ticketPrice: "Gratis (Area Lingkar Luar)",
        hours: "05:00 - 21:00 (Setiap Hari)",
        photo: "https://images.pexels.com/photos/35548609/pexels-photo-35548609.jpeg",
        mapsQuery: "Gelora+Bung+Karno+Main+Stadium",
        description: "SUGBK adalah stadion serbaguna megah bersejarah dengan kapasitas penonton lebih dari 77,000 orang. Kawasan kompleks olahraga lingkar luar GBK menjadi tempat favorit warga Jakarta untuk joging sore dan menikmati gemerlap lampu malam perkotaan."
    },
    {
        id: 9,
        name: "M Bloc Space",
        category: "Kreatif",
        city: "Jakarta Selatan",
        district: "Kebayoran Baru",
        address: "Jl. Panglima Polim No.37, Melawai",
        ticketPrice: "Gratis (Area Masuk)",
        hours: "10:00 - 22:00 (Setiap Hari)",
        photo: "https://asset.kompas.com/crops/8FWenNfVbq1roAyjLuOYuVc4Tuw=/89x0:944x570/1200x800/data/photo/2020/06/15/5ee7096556d33.jpg",
        mapsQuery: "M+Bloc+Space",
        description: "M Bloc Space menyulap eks-perumahan dinas Peruri (Percetakan Uang RI) berarsitektur tropis jaman dulu menjadi hub kreatif perkotaan terpopuler. Berisi kedai kopi trendi, toko piringan hitam, butik lokal, galeri seni, serta ruang pertunjukan musik intim."
    },
    {
        id: 10,
        name: "Kampung Budaya Betawi Setu Babakan",
        category: "Budaya",
        city: "Jakarta Selatan",
        district: "Jagakarsa",
        address: "Jl. RM Kahfi II, Srengseng Sawah, Jagakarsa",
        ticketPrice: "Gratis (Donasi Kebersihan)",
        hours: "09:00 - 16:00 (Selasa - Minggu)",
        photo: "https://travelinkmagz.com/wp-content/uploads/2020/04/JKT_Setu-Babakan_1920x1080px_1.jpg",
        mapsQuery: "Setu+Babakan+Kampung+Betawi",
        description: "Kawasan cagar budaya khusus pelestarian adat istiadat suku asli Jakarta, Betawi. Wisatawan dapat menyaksikan arsitektur rumah adat bapang/kebaya, pertunjukan tari ondel-ondel, mencicipi kerak telor orisinal, serta menaiki perahu bebek di danau Setu."
    },
    {
        id: 11,
        name: "Tebet Eco Park",
        category: "Alam",
        city: "Jakarta Selatan",
        district: "Tebet",
        address: "Jl. Tebet Barat Raya, RT.1/RW.10, Tebet Barat",
        ticketPrice: "Gratis (Perlu Booking via Aplikasi JAKI)",
        hours: "06:00 - 18:00 (Setiap Hari)",
        photo: "https://marketing.co.id/wp-content/uploads/2022/02/Tebet-Eco-Park.jpeg",
        mapsQuery: "Tebet+Eco+Park",
        description: "Tebet Eco Park menyatukan taman kota aktif dengan konsep konservasi alam penyerapan banjir. Memiliki jembatan ikonik oranye 'Infinity Link Bridge' yang menghubungkan taman utara dan selatan, taman bermain anak berlumpur alami, dan zona komunitas."
    },
    {
        id: 12,
        name: "Museum Nasional (Museum Gajah)",
        category: "Sejarah",
        city: "Jakarta Pusat",
        district: "Gambir",
        address: "Jl. Medan Merdeka Barat No.12, Gambir",
        ticketPrice: "Rp 15,000",
        hours: "08:00 - 16:00 (Tutup sementara renovasi)",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Museum_Nasional_Indonesia.jpg",
        mapsQuery: "Museum+Nasional+Indonesia",
        description: "Dikenal sebagai Museum Gajah karena patung gajah perunggu hadiah Raja Siam di halaman depannya. Museum tertua dan terlengkap di Asia Tenggara ini memamerkan ratusan ribu artefak arkeologi, etnogafi, geografi, dan sejarah Nusantara purba."
    },
    {
        id: 13,
        name: "Museum Bank Indonesia",
        category: "Sejarah",
        city: "Jakarta Barat",
        district: "Taman Sari",
        address: "Jl. Pintu Besar Utara No.3, Pinangsia",
        ticketPrice: "Rp 5,000",
        hours: "08:00 - 15:30 (Selasa - Minggu)",
        photo: "https://borneoreview.co/wp-content/uploads/2025/09/Museum-Bank-Indonesia.jpg",
        mapsQuery: "Museum+Bank+Indonesia",
        description: "Museum ini menyajikan sejarah moneter nusantara dengan teknologi modern interaktif terkeren. Terletak di bangunan bersejarah De Javasche Bank, pengunjung dapat melihat evolusi mata uang, sejarah perdagangan rempah, hingga ruang penyimpanan emas batangan asli."
    },
    {
        id: 14,
        name: "Planetarium Jakarta",
        category: "Edukasi",
        city: "Jakarta Pusat",
        district: "Menteng",
        address: "Taman Ismail Marzuki, Jl. Cikini Raya No.73",
        ticketPrice: "Rp 7,000 - Rp 12,000",
        hours: "09:00 - 13:00 (Jadwal Pertunjukan Terbatas)",
        photo: "https://kcic.co.id/lkapp/wp-content/uploads/2021/07/Planetarium.jpg",
        mapsQuery: "Planetarium+Jakarta",
        description: "Tempat teater simulasi rasi bintang, galaksi, dan tata surya interaktif tertua di Jakarta. Terletak di dalam pusat kesenian Taman Ismail Marzuki (TIM), memberikan fasilitas edukasi astronomi terlengkap bagi pelajar."
    },
    {
        id: 15,
        name: "Pantjoran PIK",
        category: "Kuliner",
        city: "Jakarta Utara",
        district: "Penjaringan",
        address: "Pantai Indah Kapuk 2, Penjaringan",
        ticketPrice: "Gratis (Area Masuk)",
        hours: "07:00 - 23:00",
        photo: "https://images.pexels.com/photos/11368978/pexels-photo-11368978.jpeg",
        mapsQuery: "Pantjoran+PIK",
        description: "Destinasi kuliner pecinan modern bernuansa Tiongkok klasik dengan arsitektur oriental dinasti Tang yang megah. Terdapat pagoda merah raksasa, patung naga, pilar-pilar berukir indah, serta ratusan tenant makanan manis dan gurih halal maupun non-halal."
    },
    {
        id: 16,
        name: "Glodok Chinatown",
        category: "Sejarah",
        city: "Jakarta Barat",
        district: "Taman Sari",
        address: "Jl. Pancoran, Glodok, Taman Sari",
        ticketPrice: "Gratis",
        hours: "08:00 - 20:00 (Setiap Hari)",
        photo: "https://images.pexels.com/photos/38192666/pexels-photo-38192666.jpeg",
        mapsQuery: "Chinatown+Glodok",
        description: "Pecinan tertua dan terbesar di Jakarta. Menyimpan gang-gang sempit legendaris penjual obat herbal tradisional Cina, pernak-pernik lampion, kedai kopi tua Kopi Es Tak Kie, serta kelenteng bersejarah Vihara Dharma Bhakti yang didirikan tahun 1650."
    },
    {
        id: 17,
        name: "Sarinah & Skydeck",
        category: "Kreatif",
        city: "Jakarta Pusat",
        district: "Menteng",
        address: "Jl. M.H. Thamrin No.11, Gondangdia",
        ticketPrice: "Gratis (Area Masuk)",
        hours: "10:00 - 22:00",
        photo: "https://cdn.forevervacation.com/uploads/attraction/sarinah-mall-3146.jpg",
        mapsQuery: "Sarinah+Mall",
        description: "Sarinah merupakan mal pertama di Indonesia yang kini bertransformasi menjadi panggung budaya produk lokal UMKM premium. Daya tarik utamanya adalah area Skydeck terbuka di lantai atas untuk melihat lalu-lintas pencakar langit MH Thamrin secara langsung."
    },
    {
        id: 18,
        name: "Plaza Indonesia",
        category: "Rekreasi",
        city: "Jakarta Pusat",
        district: "Menteng",
        address: "Jl. M.H. Thamrin No.Kav. 28-30, Menteng",
        ticketPrice: "Gratis (Masuk Mal)",
        hours: "10:00 - 22:00",
        photo: "https://paradiseindonesia.com/wp-content/uploads/2023/06/cover.png",
        mapsQuery: "Plaza+Indonesia",
        description: "Salah satu mal termewah pionir di Jakarta yang bersebelahan langsung dengan Bundaran Hotel Indonesia. Menawarkan butik mode barang mewah bermerek desainer internasional kelas dunia serta fine dining eksklusif."
    },
    {
        id: 19,
        name: "Grand Indonesia",
        category: "Rekreasi",
        city: "Jakarta Pusat",
        district: "Menteng",
        address: "Jl. M.H. Thamrin No.1, Kebon Melati",
        ticketPrice: "Gratis (Masuk Mal)",
        hours: "10:00 - 22:00",
        photo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Grand_Indonesia_Mall.jpg",
        mapsQuery: "Grand+Indonesia",
        description: "Kompleks pusat perbelanjaan masif di pusat kota Jakarta, terbagi menjadi East Mall dan West Mall yang terhubung jembatan layang bertingkat. Memiliki atraksi kolam air mancur menari musikal legendaris 'Dancing Fountain' di lantai atas."
    },
    {
        id: 20,
        name: "Senayan City (Sency)",
        category: "Rekreasi",
        city: "Jakarta Pusat",
        district: "Tanah Abang",
        address: "Jl. Asia Afrika No.19, Gelora",
        ticketPrice: "Gratis",
        hours: "10:00 - 22:00",
        photo: "https://foom.id/cdn/shop/articles/mall-senayan-city-destinasi-favorit-untuk-hangout-dan-berbelanja-foom-lab-global_83e2b73f-2dde-4d6f-9969-17db708abc24.jpg?v=1749713905",
        mapsQuery: "Senayan+City",
        description: "Pusat gaya hidup kelas atas yang menggabungkan area belanja trendi dengan berbagai tenant restoran internasional terkurasi. Menjadi lokasi favorit para sosialita dan eksekutif muda di selatan-pusat Jakarta."
    },
    {
        id: 21,
        name: "Pondok Indah Mall (PIM)",
        category: "Rekreasi",
        city: "Jakarta Selatan",
        district: "Kebayoran Lama",
        address: "Jl. Metro Pondok Indah, Kebayoran Lama",
        ticketPrice: "Gratis",
        hours: "10:00 - 22:00",
        photo: "https://pondokindahgroup.co.id/wp-content/uploads/2024/08/Pondok-Indah-Mall-4.webp",
        mapsQuery: "Pondok+Indah+Mall+1",
        description: "Mal keluarga legendaris di pemukiman elit Jakarta Selatan. Terdiri dari PIM 1, PIM 2, dan PIM 3 yang terhubung skybridge indah, menyajikan aneka hiburan lengkap termasuk akses langsung ke waterpark petualangan ombak buatan."
    },
    {
        id: 22,
        name: "Museum Wayang",
        category: "Sejarah",
        city: "Jakarta Barat",
        district: "Taman Sari",
        address: "Jl. Pintu Besar Utara No.27, Pinangsia",
        ticketPrice: "Rp 5,000",
        hours: "09:00 - 15:00 (Selasa - Minggu)",
        photo: "https://bappeda.jakarta.go.id/storage/blog/8VK0EMxlzvfzm2EiCFdJiBevgdqG9DRjZAz7FfFc.jpg",
        mapsQuery: "Museum+Wayang",
        description: "Museum khusus yang memamerkan ribuan koleksi wayang kulit Jawa, boneka kayu tradisional nusantara, boneka golek mancanegara, serta instrumen gamelan klasik pemiring lakon pewayangan."
    },
    {
        id: 23,
        name: "Museum Fatahillah (Museum Sejarah Jakarta)",
        category: "Sejarah",
        city: "Jakarta Barat",
        district: "Taman Sari",
        address: "Jl. Taman Fatahillah No.1, Pinangsia",
        ticketPrice: "Rp 5,000",
        hours: "09:00 - 15:00 (Selasa - Minggu)",
        photo: "https://images.pexels.com/photos/38205236/pexels-photo-38205236.jpeg",
        mapsQuery: "Museum+Fatahillah",
        description: "Menempati eks Gedung Balai Kota Batavia lama (Stadhuis) abad ke-17. Menyimpan peninggalan sejarah Jakarta sejak masa prasejarah, kejayaan tarumanegara, masa perdagangan rempah VOC, hingga penjara bawah tanah tempat penawanan Pahlawan Untung Surapati."
    },
    {
        id: 24,
        name: "Pulau Macan (Kepulauan Seribu)",
        category: "Alam",
        city: "Kepulauan Seribu",
        district: "Kepulauan Seribu Utara",
        address: "Kawasan Taman Nasional Kepulauan Seribu",
        ticketPrice: "Rp 1,500,000+ (Paket Menginap/Tour)",
        hours: "24 Jam",
        photo: "https://visitpulauseribu.co.id/wp-content/uploads/2024/05/Sejarah-Pulau-Macan.jpg",
        mapsQuery: "Pulau+Macan+Resort",
        description: "Pulau resort berkonsep ramah lingkungan (eco-resort) eksklusif di Teluk Jakarta. Menawarkan pondok pantai semi-terbuka langsung menghadap laut lepas biru jernih, olahraga kano transparan, dan terumbu karang indah untuk snorkeling."
    },
    {
        id: 25,
        name: "Hutan Kota GBK",
        category: "Alam",
        city: "Jakarta Pusat",
        district: "Tanah Abang",
        address: "Kawasan Gelora Bung Karno, Jl. Jendral Sudirman",
        ticketPrice: "Gratis (Sesuai Sesi Kunjungan)",
        hours: "06:00 - 10:00 & 15:00 - 18:00 (Selasa - Minggu)",
        photo: "https://gbk.id/upload/1650345887-Hutan%20Kota%201.jpg",
        mapsQuery: "Hutan+Kota+GBK",
        description: "Lahan hijau terbuka seluas 4 hektar di tengah megahnya perkantoran Sudirman. Dilengkapi rumput landai hijau luas, kolam kolosal perkotaan, dan jalur pedestrian rindang yang sering dijadikan lokasi piknik warga dengan latar pemandangan gedung pencakar langit."
    },
    {
        id: 26,
        name: "Taman Suropati",
        category: "Alam",
        city: "Jakarta Pusat",
        district: "Menteng",
        address: "Jl. Taman Suropati, RT.3/RW.5, Menteng",
        ticketPrice: "Gratis",
        hours: "24 Jam",
        photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2a/37/82/photo5jpg.jpg?w=1400&h=800&s=1",
        mapsQuery: "Taman+Suropati",
        description: "Taman peninggalan tata kota kolonial yang rindang di Menteng. Dihiasi instalasi patung monumen perwakilan seni ASEAN karya pemahat legendaris Indonesia, taman ini menjadi lokasi favorit seniman perkusi dan pemain biola berkumpul di akhir pekan."
    },
    {
        id: 27,
        name: "Taman Menteng",
        category: "Alam",
        city: "Jakarta Pusat",
        district: "Menteng",
        address: "Jl. HOS. Cokroaminoto, Menteng",
        ticketPrice: "Gratis",
        hours: "05:00 - 22:00",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnn8_5i4Drw26xBe6jOrpc7LlLd_p9vAPDnN3BJvpzHQ&s=10",
        mapsQuery: "Taman+Menteng+Jakarta",
        description: "Taman ikonik yang berdiri di bekas Stadion Menteng Persija lama. Ciri khas utamanya adalah bangunan rumah kaca beraksen modern minimalis geometris di bagian tengah yang difungsikan sebagai rumah pembibitan anggrek tanaman hias."
    },
    {
        id: 28,
        name: "Situ Gintung",
        category: "Alam",
        city: "Jakarta Selatan",
        district: "Cilandak", // Near boundary, mapped to South Jakarta for coordination
        address: "Kawasan Ciputat Timur, Tangerang Selatan (Akses Selatan Jakarta)",
        ticketPrice: "Gratis",
        hours: "24 Jam",
        photo: "https://cdn-assets.jawapos.com/images/3/2024/10/11/Situ-Gintung-copy-705191354.jpg",
        mapsQuery: "Situ+Gintung+Lake",
        description: "Danau penampungan air alami yang dikelilingi hutan kota hijau rimbun dan perkebunan rindang. Pengunjung dapat menikmati lari pagi di sepanjang lintasan tepi air, berkemah di area pinus sekitar danau, atau menikmati kuliner resto sunda terapung."
    },
    {
        id: 29,
        name: "Hutan Wisata Mangrove PIK",
        category: "Alam",
        city: "Jakarta Utara",
        district: "Penjaringan",
        address: "Taman Wisata Alam Angke Kapuk, Penjaringan",
        ticketPrice: "Rp 30,000 (Domestik)",
        hours: "08:00 - 17:00",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyai6uYVbnWPNOWrKB77Qg45brY5zS3LnnjQA4pJVMpqCmKwPg4qhZuE&s=10",
        mapsQuery: "Taman+Wisata+Alam+Mangrove+Angke+Kapuk",
        description: "Taman konservasi hutan bakau seluas 99 hektar yang melindungi kawasan pesisir Jakarta dari abrasi laut. Pengunjung dapat menaiki perahu dayung menyusuri labirin perairan bakau rindang, atau menginap di villa kayu panggung terapung di dalam rawa."
    },
    {
        id: 30,
        name: "KidZania Jakarta",
        category: "Edukasi",
        city: "Jakarta Selatan",
        district: "Kebayoran Baru",
        address: "Pacific Place Mall Lt. 6, SCBD Kav. 52-53",
        ticketPrice: "Rp 200,000 - Rp 275,000",
        hours: "09:00 - 14:00 & 15:00 - 20:00 (Sesi Terbagi)",
        photo: "https://ik.imagekit.io/tvlk/blog/2024/05/Kidzania-Jakarta-Tickets-e9d699c9-99b2-4fb1-9fb3-b1a4913c70b6.webp",
        mapsQuery: "KidZania+Jakarta",
        description: "Wahana edutainment ramah anak berskala waralaba internasional berbentuk replika mini replika kota metropolitan modern. Anak-anak dapat memperagakan profesi impian mereka seperti pilot, dokter bedah, jurnalis TV, hingga pemadam kebakaran lengkap dengan upah uang mata pencaharian fiktif."
    },
    {
        id: 31,
        name: "Pasar Baru",
        category: "Sejarah",
        city: "Jakarta Pusat",
        district: "Sawah Besar",
        address: "Jl. Pasar Baru, Sawah Besar",
        ticketPrice: "Gratis",
        hours: "09:00 - 18:00",
        photo: "https://awsimages.detik.net.id/visual/2025/06/03/pusat-belanja-di-kawasan-pasar-baru-jakarta-pusat-tampak-sepi-tidak-seperti-dulu-yang-banyak-pengunjung-pada-selasa-362025-1748936545644_169.jpeg?w=1200",
        mapsQuery: "Pasar+Baru+Jakarta",
        description: "Pusat perbelanjaan tertua di Jakarta yang didirikan sejak tahun 1820. Terkenal sebagai pusat tekstil impor kualitas terbaik dengan penjahit jas ternama, toko sepatu legendaris, serta percampuran budaya dan kuliner khas keturunan India-Indonesia."
    }
];

// 4. Culinary (15-20 Betawi Foods)
const kulinerData = [
    {
        id: 1,
        name: "Kerak Telor",
        origin: "Jakarta Pusat",
        priceRange: "Rp 15,000 - Rp 25,000",
        recommendedArea: "Setu Babakan, Monas, Kemayoran",
        photo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kerak_telor_Betawi.jpg",
        mapsQuery: "Kerak+Telor+Terdekat",
        description: "Makanan legendaris Betawi yang terbuat dari ketan putih, telur ayam/bebek, dan kelapa sangrai (serundeng) gurih harum dibumbui ebi kering. Dimasak di atas wajan tanah liat kecil tanpa minyak, lalu wajan dibalik menghadap bara arang agar kerak terpanggang merata."
    },
    {
        id: 2,
        name: "Nasi Uduk Betawi",
        origin: "Jakarta Barat",
        priceRange: "Rp 10,000 - Rp 30,000",
        recommendedArea: "Kebon Kacang (Tanah Abang), Palmerah",
        photo: "https://protimes.co/wp-content/uploads/2024/07/nasi-uduk.webp",
        mapsQuery: "Nasi+Uduk+Kebon+Kacang",
        description: "Nasi yang ditanak dengan air santan kelapa dibumbui daun serai, cengkih, dan daun pandan wangi, menghasilkan cita rasa gurih pulen harum. Disajikan dengan taburan bawang goreng renyah, semur jengkol, tempe orek, ayam goreng, dan sambal kacang encer khas."
    },
    {
        id: 3,
        name: "Semur Jengkol",
        origin: "Jakarta Selatan",
        priceRange: "Rp 5,000 - Rp 15,000 (Porsi Lauk)",
        recommendedArea: "Warung Makan Betawi Jagakarsa, Condet",
        photo: "https://i.ytimg.com/vi/-kiOxsYrvIU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDruZRg0a86VwYfLXmxtEKMkDUfpw",
        mapsQuery: "Warung+Makan+Betawi+Terdekat",
        description: "Olahan biji buah jengkol tua yang dimasak dengan teknik khusus (direndam air kapur, direbus daun salam) agar empuk legit dan aromanya berkurang. Dimasak perlahan dalam kuah cokelat pekat berbahan kecap manis kental dibumbui pala dan cengkih."
    },
    {
        id: 4,
        name: "Soto Betawi",
        origin: "Jakarta Pusat",
        priceRange: "Rp 25,000 - Rp 50,000",
        recommendedArea: "Kawasan Menteng, Mangga Dua, Senen",
        photo: "https://chanelmuslim.com/wp-content/uploads/2021/05/IMG_20210505_084453.jpg",
        mapsQuery: "Soto+Betawi+Haji+Husein",
        description: "Soto bersantan gurih beraroma rempah pala kapulaga cengkih yang memadukan santan cair dengan susu sapi segar. Berisi potongan daging sapi empuk, jeroan sapi goreng, kentang dadu goreng, tomat merah segar, emping melinjo renyah, dan perasan jeruk limau harum."
    },
    {
        id: 5,
        name: "Roti Buaya",
        origin: "Jakarta Utara",
        priceRange: "Rp 50,000 - Rp 150,000 (Sepasang)",
        recommendedArea: "Toko Roti Tradisional Kebayoran, Jagakarsa",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZlVfv0pSstAbO3xSEjZ3g0i8N70360N0c42tHTLfUg&s=10",
        mapsQuery: "Toko+Roti+Betawi+Tradisional",
        description: "Roti manis berbentuk buaya sepanjang 50cm-1m yang menjadi seserahan sakral wajib pengantin pria Betawi. Buaya dilambangkan masyarakat Betawi sebagai simbol kesetiaan seumur hidup (karena buaya hanya kawin sekali) serta simbol kemapanan ekonomi."
    },
    {
        id: 6,
        name: "Bir Pletok",
        origin: "Jakarta Selatan",
        priceRange: "Rp 8,000 - Rp 15,000 (Botol)",
        recommendedArea: "Kampung Betawi Setu Babakan",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIpZMxVRodN9yNRGZfHMtUVnJwiNl4I7-R2jNdqv0F9NS2TjhZtPeWYI&s=10",
        mapsQuery: "Penjual+Bir+Pletok+Betawi",
        description: "Meskipun dinamai 'bir', minuman ini sama sekali tidak mengandung alkohol. Dibuat warga Betawi tempo dulu dari rebusan air rempah alami seperti jahe merah, serai, cengkih, kapulaga, kayu manis, dan disaring menggunakan kayu secang yang memberikan warna merah alami menyegarkan."
    },
    {
        id: 7,
        name: "Asinan Betawi",
        origin: "Jakarta Timur",
        priceRange: "Rp 15,000 - Rp 25,000",
        recommendedArea: "Kawasan Pisangan Jatinegara, Rawamangun",
        photo: "https://asset.kompas.com/crops/qwzSUFleBNd0bfxW7o3k530pcMI=/0x0:1000x667/1200x800/data/photo/2021/05/12/609b533590600.jpg",
        mapsQuery: "Asinan+Betawi+H.+Mansyur",
        description: "Kombinasi sayuran segar mentah seperti kol iris, kecambah tauge, selada keriting, timun, dan tahu kuning mentah empuk. Disiram kuah kacang kental berbumbu cabai rawit dengan cuka masam, ditaburi kacang tanah goreng dan kerupuk mie kuning raksasa."
    },
    {
        id: 8,
        name: "Sayur Gabus Pucung",
        origin: "Jakarta Utara",
        priceRange: "Rp 25,000 - Rp 45,000",
        recommendedArea: "Marunda, Cilincing, Bekasi Perbatasan",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVGuGY1M6AnKX6mht5YssFpsK4OaI447YXI0hkjqSGVtgIeoJl3E8vPX8&s=10",
        mapsQuery: "Sayur+Gabus+Pucung+Terdekat",
        description: "Kuah ikan hitam legendaris berbahan dasar potongan ikan gabus rawa goreng yang dimasak dalam kuah bumbu kluwek (pucung) hitam. Bercita rasa gurih pedas sedkit masam dengan tekstur kuah pekat beraroma khas kluwek hutan."
    },
    {
        id: 9,
        name: "Sayur Babanci",
        origin: "Jakarta Barat",
        priceRange: "Rp 35,000 - Rp 60,000",
        recommendedArea: "Tersedia khusus di festival kuliner / hotel tradisional",
        photo: "https://nico.co.id/wp-content/uploads/2025/04/babanci.jpg",
        mapsQuery: "Kuliner+Sayur+Babanci+Betawi",
        description: "Kuliner langka Betawi yang hampir punah karena kesulitan bahan rempah kedaung dan aling. Terdiri dari kuah gulai gurih bersantan encer dengan isian serutan kelapa muda, daging kepala sapi empuk, dibumbui belasan rempah aromatik langka."
    },
    {
        id: 10,
        name: "Sayur Besan",
        origin: "Jakarta Selatan",
        priceRange: "Rp 15,000 - Rp 25,000",
        recommendedArea: "Warung Makan Betawi Jagakarsa, Pondok Labu",
        photo: "https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/banner-sayur-besan-1737736588024.jpg",
        mapsQuery: "Sayur+Besan+Betawi+Terdekat",
        description: "Hidangan berkuah santan kuning gurih masam pedas yang wajib disajikan saat prosesi pernikahan adat (lamaran besan). Berisi kentang dadu, pete kupas, soun kenyal, ebi, dan sayuran terubuk (bunga tebu muda) bertekstur unik renyah seperti telur ikan."
    },
    {
        id: 11,
        name: "Kembang Goyang",
        origin: "Jakarta Timur",
        priceRange: "Rp 20,000 - Rp 35,000 (Satu Toples)",
        recommendedArea: "Toko Oleh-oleh Condet, Setu Babakan",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVEZ4VVRqT72PRHLlH4ihIq5Mt8tFLXkQttsjpw740xLFOgaIODpcDlFW&s=10",
        mapsQuery: "Oleh-oleh+Betawi+Terdekat",
        description: "Camilan renyah berbentuk kelopak bunga krisan mekar. Dibuat dari adonan tepung beras, kelapa parut santan, dan gula pasir yang dicelupkan cetakan besi kuningan khusus ke dalam minyak goreng panas sambil digoyang-goyang hingga adonan lepas."
    },
    {
        id: 12,
        name: "Kue Ape",
        origin: "Jakarta Pusat",
        priceRange: "Rp 1,000 - Rp 2,000 per biji",
        recommendedArea: "Penjual Gerobak Kaki Lima Sawah Besar, Senen",
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Kueape1.jpg",
        mapsQuery: "Kue+Ape+Gerobak+Kaki+Lima",
        description: "Sering dijuluki pancake Betawi. Berbentuk bundar dengan bagian tengah tebal empuk kenyal manis berwarna hijau pandan, berbatasan langsung dengan pinggiran luar tipis garing super renyah berwarna cokelat keemasan."
    },
    {
        id: 13,
        name: "Kue Rangi",
        origin: "Jakarta Barat",
        priceRange: "Rp 5,000 - Rp 10,000 per porsi",
        recommendedArea: "Pedagang pikulan Kota Tua, Palmerah",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5dRldDd-kaG5P60uvktjOAqMN8bf5AjiJfCi_XJPfym-9PBHFv1gU4Zk&s=10",
        mapsQuery: "Kue+Rangi+Pikulan+Terdekat",
        description: "Kue panggang tradisional berbahan campuran kelapa parut kasar gurih dengan tepung sagu tani. Dipanggang dalam cetakan logam berbentuk deretan setengah lingkaran di atas api tungku kayu, lalu disajikan dengan siraman saus gula merah kental wangi pandan."
    },
    {
        id: 14,
        name: "Kue Talam Betawi",
        origin: "Jakarta Pusat",
        priceRange: "Rp 2,000 - Rp 3,000 per potong",
        recommendedArea: "Pasar Senen Subuh (Pusat Kue Basah)",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgAsFxkCHsQSpj0X9dlb7sMDIUm-SctKctGIvNW4y7g&s=10",
        mapsQuery: "Kue+Subuh+Pasar+Senen",
        description: "Kue basah tradisional berlapis dua warna bertekstur lentur lembut. Lapisan bawah berwarna hijau kental pandan manis terbuat dari tepung beras dicampur sagu, ditimpa lapisan atas berwarna putih asin gurih berbahan santan kental asin."
    },
    {
        id: 15,
        name: "Kue Pancong",
        origin: "Jakarta Barat",
        priceRange: "Rp 5,000 - Rp 15,000",
        recommendedArea: "Rawa Belong (Kebon Jeruk), Slipi",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkajJrOih7T0W3m6yP2KY8eroCm6nOA2XyE6JZqG5WSg&s=10",
        mapsQuery: "Kue+Pancong+Lumer+Rawa+Belong",
        description: "Adonan tepung beras, kelapa parut gurih asin, dan santan kelapa kental yang dipanggang dalam cetakan logam setengah lingkaran. Dinikmati hangat dengan taburan gula pasir kasar di atasnya. Kini populer dengan versi lumer setengah matang kekinian."
    },
    {
        id: 16,
        name: "Kue Cubit",
        origin: "Jakarta Pusat",
        priceRange: "Rp 8,000 - Rp 15,000 per porsi",
        recommendedArea: "Sekitar sekolah dasar / jajanan malam Sabang",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Mj_-Rhm8p3u2jp4j1NO6MiVzqdVEENY00fwP_p7W4Ur_U9ugSq8auB0&s=10",
        mapsQuery: "Kue+Cubit+Setengah+Matang",
        description: "Kue manis seukuran sekali gigit yang dibuat dari adonan tepung terigu, susu cair, dan telur. Dinamai 'cubit' karena cara penjual mengangkat kue yang sudah matang menggunakan jepitan kecil seperti mencubit. Paling disukai disajikan setengah matang meleleh di tengah."
    },
    {
        id: 17,
        name: "Dodol Betawi",
        origin: "Jakarta Selatan",
        priceRange: "Rp 30,000 - Rp 50,000 (Gulung)",
        recommendedArea: "Pembuat Dodol Pejaten, Jagakarsa",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qCE66dlV4753pWqFVhkzDP3hsiHxAIdHPLGN-7SMmq1pAml9MK57PROV&s=10",
        mapsQuery: "Dodol+Betawi+Asli+Haji+Satiri",
        description: "Manisan kenyal legendaris berwarna coklat mengkilap terbuat dari ketan hitam/putih, santan kental, dan gula aren asli. Dimasak dalam wajan kawah tembaga raksasa di atas kayu bakar selama 8 jam tanpa henti, memerlukan tenaga pengadukan konstan bergantian warga desa."
    },
    {
        id: 18,
        name: "Laksa Betawi",
        origin: "Jakarta Selatan",
        priceRange: "Rp 20,000 - Rp 35,000",
        recommendedArea: "Mampang Prapatan, Kebayoran Lama",
        photo: "https://assets.unileversolutions.com/recipes-v2/257885.jpg",
        mapsQuery: "Laksa+Betawi+Asyhari",
        description: "Kuah kuning kental berbumbu ebi sangrai gurih pedas harum. Disajikan dengan isian bihun beras putih kenyal, ketupat daun, kecambah tauge, telur rebus, daun kemangi segar wangi, suwiran daging ayam, dan taburan bawang goreng."
    }
];

// 5. Transportation (MRT, LRT, TransJakarta, KRL, Airport Rail Link - 5 items)
const transportasiData = [
    {
        id: "mrt",
        name: "MRT Jakarta",
        logo: "https://iconlogovector.com/uploads/images/2024/03/lg-65e389edb30ed-MRT-Jakarta.webp",
        hours: "05:00 - 24:00 (Setiap Hari)",
        website: "https://www.jakartamrt.co.id",
        description: "Moda Raya Terpadu (MRT) Fase 1 menghubungkan Lebak Bulus di Jakarta Selatan hingga Bundaran HI di Jakarta Pusat sepanjang 16 km dengan 13 stasiun (layang & bawah tanah). Menggunakan sistem persinyalan otomatis termodern, MRT menawarkan ketepatan waktu tinggi, kenyamanan AC prima, dan akses ramah disabilitas."
    },
    {
        id: "lrt",
        name: "LRT Jakarta",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsajdi8iZmiIet8Icl0m25WbP6N-iMEJ3hZYxCkj8ZD7G-NCSoffxxXX3&s=10",
        hours: "05:30 - 23:00 (Setiap Hari)",
        website: "https://www.lrtjakarta.co.id",
        description: "Lintas Raya Terpadu (LRT) Jakarta melayani rute Kelapa Gading di Jakarta Utara menuju Velodrome Rawamangun di Jakarta Timur. Menawarkan kereta layang ringan modern bersuara senyap, berintegrasi mulus dengan halte TransJakarta di stasiun layangnya untuk memudahkan transfer penumpang."
    },
    {
        id: "transjakarta",
        name: "TransJakarta (BRT)",
        logo: "https://i0.wp.com/jaringkerja.com/wp-content/uploads/2024/09/Logo-Perusahaan-1-14.png?resize=420%2C280&ssl=1",
        hours: "24 Jam (Koridor Utama)",
        website: "https://transjakarta.co.id",
        description: "Sistem transportasi Bus Rapid Transit (BRT) pertama di Asia Tenggara dengan jalur khusus (busway) terpanjang di dunia (lebih dari 250 km). Memiliki 13 koridor utama dan ratusan rute feeder mikrotrans (Angkot JakLingko), menjangkau seluruh pelosok pemukiman warga dengan tarif flat terjangkau Rp 3,500."
    },
    {
        id: "krl",
        name: "KRL Commuterline",
        logo: "https://images.seeklogo.com/logo-png/44/2/kereta-commuter-indonesia-logo-png_seeklogo-447718.png",
        hours: "04:00 - 24:00 (Setiap Hari)",
        website: "https://commuterline.id",
        description: "Kereta Rel Listrik (KRL) Commuter Line di bawah naungan KAI Commuter menghubungkan stasiun-stasiun strategis Jakarta dengan wilayah penyangga Bodetabek (Bogor, Depok, Tangerang, Bekasi). Menjadi tulang punggung mobilitas harian jutaan komuter dengan harga sangat murah berbasis jarak tempuh."
    },
    {
        id: "airportrail",
        name: "KA Bandara (Soekarno-Hatta)",
        logo: "https://pbs.twimg.com/profile_images/1334358467767779331/2UJOF5xQ_400x400.jpg",
        hours: "05:00 - 22:00 (Mengikuti jadwal penerbangan)",
        website: "https://www.railink.co.id",
        description: "Kereta Api Bandara (KAI Bandara/Railink) memberikan alternatif perjalanan bebas macet dari pusat kota Jakarta (Stasiun Manggarai dan Stasiun BNI City Sudirman) langsung menuju Bandara Internasional Soekarno-Hatta Tangerang dengan waktu tempuh singkat kurang dari 50 menit."
    }
];

// 6. Visual Gallery (8-12 beautiful Jakarta photos)
const galleryData = [
    { id: 1, title: "Monas Sore Hari", category: "landmark", photo: "https://images.pexels.com/photos/2450218/pexels-photo-2450218.jpeg", caption: "Monas berselimut semburat jingga senja Jakarta." },
    { id: 2, title: "Lalu Lintas Sudirman", category: "perkotaan", photo: "https://images.pexels.com/photos/11177414/pexels-photo-11177414.jpeg", caption: "Gemerlap malam gedung pencakar langit di sepanjang Jalan Jendral Sudirman." },
    { id: 3, title: "Bundaran HI", category: "perkotaan", photo: "https://images.pexels.com/photos/6268951/pexels-photo-6268951.jpeg", caption: "Patung Selamat Datang menyambut malam di bundaran ikonik ibu kota." },
    { id: 4, title: "Kota Tua Fatahillah", category: "sejarah", photo: "https://images.pexels.com/photos/32173149/pexels-photo-32173149.jpeg", caption: "Gedung Balai Kota Batavia kuno berdiri megah sebagai saksi bisu lintasan jaman." },
    { id: 5, title: "Taman Mini Indonesia Indah", category: "sejarah", photo: "https://images.pexels.com/photos/2048893/pexels-photo-2048893.jpeg", caption: "Anjungan budaya daerah menyajikan replika miniatur rumah adat tradisional nusantara." },
    { id: 6, title: "Pantai Ancol", category: "rekreasi", photo: "https://images.pexels.com/photos/38352635/pexels-photo-38352635.jpeg", caption: "Dermaga kayu tepi pantai tempat bersantai menikmati semilir angin Teluk Jakarta." },
    { id: 7, title: "Pulau Macan Tropis", category: "rekreasi", photo: "https://images.pexels.com/photos/4006755/pexels-photo-4006755.jpeg", caption: "Perairan dangkal biru jernih nan asri di cagar alam Kepulauan Seribu." },
    { id: 8, title: "M Bloc Kreatif", category: "perkotaan", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH80l6OTQielApaWrVnxWogZhPOV7VSuVXvoySlO1WxAV0gg3ssshVendC&s=10", caption: "Wadah nongkrong dan berkreasi anak muda kreatif Jakarta di kawasan Melawai." }
];

// 7. Frequently Asked Questions (FAQ)
const faqData = [
    {
        question: "Apakah website InfoJakarta ini berbayar atau memerlukan login?",
        answer: "Tidak. Website InfoJakarta adalah portal informasi publik bebas akses yang dibuat sepenuhnya menggunakan HTML, CSS, dan JavaScript murni tanpa sistem pendaftaran/login, database, atau pengumpulan data pengguna. Situs ini ditujukan untuk kebutuhan edukasi pariwisata."
    },
    {
        question: "Bagaimana cara melakukan pencarian tempat wisata atau kuliner?",
        answer: "Anda dapat menuju halaman Wisata atau Kuliner, lalu mengetik kata kunci nama tempat, alamat, atau kota administratif di kolom pencarian yang tersedia. Sistem pencarian akan menyaring kartu secara dinamis tanpa memuat ulang halaman (real-time filtering)."
    },
    {
        question: "Apakah jam operasional dan harga tiket wisata selalu akurat?",
        answer: "Informasi jam operasional dan harga tiket yang tertera adalah estimasi rata-rata umum saat data ini disusun. Harga tiket tempat wisata pemerintah (seperti Monas, Ragunan, Museum) biasanya sangat murah dan stabil, namun tempat rekreasi swasta dapat berubah sewaktu-waktu terutama saat musim liburan."
    },
    {
        question: "Bagaimana cara menuju tempat wisata menggunakan transportasi umum?",
        answer: "Sebagian besar tempat wisata utama di Jakarta berada sangat dekat dengan stasiun MRT, KRL, atau halte TransJakarta. Anda dapat membaca panduan rute di halaman Transportasi dan mencocokkannya dengan peta di Google Maps melalui tombol rute di masing-masing kartu detail wisata."
    },
    {
        question: "Apa itu Kepulauan Seribu dan bagaimana cara ke sana?",
        answer: "Kepulauan Seribu adalah kabupaten kepulauan di utara Jakarta. Transportasi utama menuju ke sana adalah kapal cepat (speedboat) reguler yang berangkat setiap pagi dari Marina Ancol di Jakarta Utara, atau kapal penyeberangan tradisional dari Pelabuhan Muara Angke."
    },
    {
        question: "Apa keunikan kuliner Betawi dibandingkan kuliner lainnya?",
        answer: "Kuliner Betawi memiliki keunikan berupa percampuran budaya lokal dengan pengaruh kuliner luar seperti Tionghoa, Arab, dan Belanda. Ciri khasnya adalah penggunaan kelapa parut sangrai (serundeng) dan rempah harum yang dominan gurih legit."
    },
    {
        question: "Di mana saya dapat menemukan makanan Betawi orisinal?",
        answer: "Makanan Betawi orisinal paling mudah ditemukan di daerah perkampungan pelestarian budaya Betawi seperti Setu Babakan Jagakarsa di Jakarta Selatan atau kawasan kuliner tradisional di Condet Jakarta Timur."
    },
    {
        question: "Bagaimana sistem pembagian wilayah administrasi di DKI Jakarta?",
        answer: "DKI Jakarta terbagi menjadi 5 Kota Administratif (Jakarta Pusat, Barat, Selatan, Timur, Utara) yang dipimpin oleh Wali Kota, dan 1 Kabupaten Administratif (Kepulauan Seribu) yang dipimpin oleh Bupati. Wilayah ini tidak memiliki parlemen daerah kota (DPRD Kota) sendiri; seluruh wali kota dan bupati ditunjuk langsung oleh Gubernur DKI Jakarta."
    }
];
