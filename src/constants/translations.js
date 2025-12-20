
export const translations = {
    id: {
        nav: {
            welcome: 'Beranda',
            about: 'Tentang',
            education: 'Pendidikan',
            skills: 'Keahlian',
            projects: 'Proyek',
            certificates: 'Sertifikat',
            social: 'Sosial',
            contact: 'Kontak',
        },
        welcome: {
            greeting: 'Halo, Saya',
            available: 'Siap untuk peluang baru',
            description: 'Menciptakan pengalaman digital yang indah dengan',
            cleanCode: 'kode yang rapi',
            and: 'dan',
            creativeDesign: 'desain kreatif',
            exploreBtn: 'Lihat Karya Saya',
            contactBtn: 'Hubungi Saya',
            scroll: 'Gulir',
        },
        about: {
            label: 'Tentang Saya',
            title: 'Membangun Pengalaman',
            titleHighlight: 'Digital',
            description1: 'Saya memiliki passion yang kuat dalam',
            passion1: 'UI/UX',
            passion2: 'Machine Learning/AI',
            passion3: 'Data Engineering',
            description2: 'Spesialisasi dalam',
            spec1: 'Pengembangan Website',
            spec2: 'Pengembangan Mobile',
            specSuffix: '(Fullstack) menggunakan teknologi modern untuk membangun solusi yang scalable.',
            yearsExp: 'Tahun Pengalaman',
            stats: {
                projects: 'Proyek',
                years: 'Tahun',
                passion: 'Passion',
            },
            downloadCv: 'Unduh CV',
            location: 'Indonesia',
            openToWork: 'Siap Bekerja',
        },
        education: {
            label: 'Latar Belakang',
            title: 'Riwayat',
            titleHighlight: 'Pendidikan',
            subtitle: 'Perjalanan akademik yang membentuk kemampuan dan passion saya dalam teknologi',
            current: 'Sekarang',
            gpa: 'IPK',
            average: 'Rata-rata',
            journey: [
                {
                    id: 1,
                    level: 'UNIVERSITAS',
                    name: 'Universitas Riau',
                    major: 'Sistem Informasi',
                    period: '2023 - Sekarang',
                    location: 'Pekanbaru, Indonesia',
                    current: true,
                    gpa: '3.94 / 4.00',
                    description: 'Mahasiswa aktif Program Studi Sistem Informasi dengan fokus pada pengembangan perangkat lunak, data engineering, dan kecerdasan buatan.',
                    highlights: ['UI/UX Design', 'Fullstack Dev', 'Mobile Dev', 'Data Engineering']
                },
                {
                    id: 2,
                    level: 'SMA',
                    name: 'SMA Negeri 1 Padang',
                    major: 'IPA / Sains',
                    period: '2020 - 2023',
                    location: 'Padang, Indonesia',
                    current: false,
                    gpa: '89.04',
                    description: 'Lulusan jurusan IPA dengan predikat memuaskan. Aktif dalam kegiatan akademik dan organisasi sekolah.',
                    highlights: ['Matematika', 'Fisika', 'Kimia', 'Biologi']
                },
                {
                    id: 3,
                    level: 'SMP',
                    name: 'SMP Negeri 2 Padang',
                    major: null,
                    period: '2017 - 2020',
                    location: 'Padang, Indonesia',
                    current: false,
                    gpa: null,
                    description: 'Menyelesaikan pendidikan menengah pertama dengan pembentukan karakter dan dasar akademik yang kuat.',
                    highlights: []
                },
                {
                    id: 4,
                    level: 'SD',
                    name: 'SD Kartika 1-11 Padang',
                    major: null,
                    period: '2012 - 2017',
                    location: 'Padang, Indonesia',
                    current: false,
                    gpa: null,
                    description: 'Pendidikan dasar yang membentuk disiplin dan semangat belajar sejak dini.',
                    highlights: []
                },
            ],
            stats: {
                years: 'Tahun Pendidikan',
                levels: 'Jenjang',
                spirit: 'Semangat Belajar'
            }
        },
        skills: {
            label: 'Keahlian',
            title: 'Skill &',
            titleHighlight: 'Teknologi',
            description: 'Saya terus belajar dan memperluas keahlian saya untuk tetap update dengan teknologi terbaru.',
            techMastered: 'Teknologi Dikuasai',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend & Mobile',
                database: 'Database & Cloud',
                tools: 'Tools & Desain',
            }
        },
        projects: {
            label: 'Portfolio',
            title: 'Proyek',
            titleHighlight: 'Unggulan',
            projectCount: 'proyek',
            viewDetails: 'Lihat Detail',
            liveDemo: 'Demo Langsung',
            viewCode: 'Lihat Kode',
            data: [
                {
                    id: 1,
                    title: 'Katalog UMKM',
                    desc: 'Sistem POS dan manajemen toko berbasis AI untuk UMKM dengan tracking stok dan prediksi restock.',
                    fullDesc: 'Katalog UMKM adalah sistem POS dan manajemen toko berbasis AI (Kolosal.ai) yang menyelesaikan masalah UMKM dalam tracking stok, prediksi restock, dan insight bisnis. Fitur unggulannya adalah Deep Think AI Assistant untuk menjawab pertanyaan real-time dari database, AI Forecasting untuk prediksi kebutuhan stok, dan Role-Based Security. Mengintegrasikan POS modern, dashboard analytics, dan AI yang hanya menggunakan data aktual.',
                    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Kolosal AI'],
                    github: 'https://github.com/ThariqAdzikra/KatalogUMKM',
                    demo: 'http://ftcalfadzjdr.ap-southeast-1.clawcloudrun.com/',
                    images: [
                        '/projek/katalogUMKM/katalogUMKM1.jpeg',
                        '/projek/katalogUMKM/katalogUMKM2.jpeg',
                        '/projek/katalogUMKM/katalogUMKM3.jpeg',
                        '/projek/katalogUMKM/katalogUMKM4.jpeg',
                        '/projek/katalogUMKM/katalogUMKM5.jpeg',
                        '/projek/katalogUMKM/katalogUMKM6.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 2,
                    title: 'Katalog Laptop',
                    desc: 'Sistem manajemen katalog produk, transaksi pembelian, pengelolaan stok, dan penjualan.',
                    fullDesc: 'Katalog Laptop adalah sistem manajemen terpadu untuk mengelola katalog produk, transaksi pembelian dari supplier, pengelolaan stok, penjualan, dan laporan transaksi. Dilengkapi dengan REST API berbasis Laravel Sanctum untuk integrasi eksternal. Projek akhir matakuliah Pengembangan Sistem Informasi Berbasis Web Lanjut.',
                    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Sanctum'],
                    github: 'https://github.com/ThariqAdzikra/katalogLaptop',
                    demo: 'https://kataloglaptop.dpdns.org/',
                    images: [
                        '/projek/katalogLaptop/katalogLaptop1.jpeg',
                        '/projek/katalogLaptop/katalogLaptop2.jpeg',
                        '/projek/katalogLaptop/katalogLaptop3.jpeg',
                        '/projek/katalogLaptop/katalogLaptop4.jpeg',
                        '/projek/katalogLaptop/katalogLaptop5.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 3,
                    title: 'Monitoring Kualitas Udara',
                    desc: 'Sistem pemantauan kualitas udara real-time berbasis IoT dengan sensor dan visualisasi web.',
                    fullDesc: 'Monitoring Kualitas Udara adalah sistem IoT untuk memantau kualitas udara secara real-time. Menggunakan sensor kualitas udara MQ-134 yang terhubung dengan NodeMCU v3 ESP8266 sebagai mikrokontroler. Data sensor dikirim ke platform ThingSpeak untuk penyimpanan dan analisis cloud, kemudian divisualisasikan melalui website yang menampilkan informasi kualitas udara terkini dengan kategori status dan grafik historis.',
                    tags: ['IoT', 'Arduino IDE', 'ThingSpeak', 'ESP8266'],
                    github: 'https://github.com/ThariqAdzikra/kualitasUdara',
                    demo: null,
                    images: [
                        '/projek/monitoringKualiatasUdara/kualitasUdara1.jpeg',
                        '/projek/monitoringKualiatasUdara/kualitasUdara2.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 4,
                    title: 'SINDRO - Smart Hydroponic',
                    desc: 'Sistem IoT dan AI untuk pertanian hidroponik modern dengan monitoring real-time dan chatbot pintar.',
                    fullDesc: 'SINDRO adalah solusi digital hidroponik yang menggabungkan IoT dan AI. Fitur: Dashboard real-time monitoring pH, suhu air, dan TDS; Chatbot AI (TF-IDF + Gemini API); Laporan harian dengan Chart.js; Sistem pengingat perawatan; serta Admin Panel untuk manajemen pengguna.',
                    tags: ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'Google Gemini API'],
                    github: 'https://github.com/ThariqAdzikra/smartHydroponic',
                    demo: null,
                    images: [
                        '/projek/sindro/smartHydroponic1.jpeg',
                        '/projek/sindro/smartHydroponic2.jpeg',
                        '/projek/sindro/smartHydroponic3.jpeg',
                        '/projek/sindro/smartHydroponic4.jpeg',
                        '/projek/sindro/smartHydroponic5.jpeg',
                        '/projek/sindro/smartHydroponic6.jpeg',
                        '/projek/sindro/smartHydroponic7.jpeg',
                        '/projek/sindro/smartHydroponic8.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 5,
                    title: 'LifeQuest - Gamifikasi Produktivitas',
                    desc: 'Platform gamifikasi produktivitas berbasis web yang mengubah to-do list harian menjadi petualangan RPG.',
                    fullDesc: 'LifeQuest adalah platform gamifikasi produktivitas berbasis Laravel 12. Ubah aktivitas positif dan to-do list harian menjadi petualangan RPG. Selesaikan Quests untuk mendapat XP & Gold, naik level, dan bangun kebiasaan positif. Fitur: Weather Widget (OpenWeatherMap), Avatar dengan Cropper.js, dan notifikasi SweetAlert2.',
                    tags: ['Laravel 12', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
                    github: 'https://github.com/ThariqAdzikra/LifeQuest',
                    demo: null,
                    images: [
                        '/projek/lifequest/lifequest1.png',
                        '/projek/lifequest/lifequest2.png',
                        '/projek/lifequest/lifequest3.jpeg',
                        '/projek/lifequest/lifequest4.jpeg',
                        '/projek/lifequest/lifequest5.jpeg',
                        '/projek/lifequest/lifequest6.jpeg',
                        '/projek/lifequest/lifequest7.jpeg',
                        '/projek/lifequest/lifequest8.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 6,
                    title: 'BrainWash - Edukasi Matematika',
                    desc: 'Aplikasi web edukasi interaktif untuk membantu anak-anak belajar matematika dasar melalui permainan quiz.',
                    fullDesc: 'BrainWash adalah aplikasi web edukasi interaktif yang dirancang untuk membantu anak-anak belajar matematika dasar melalui permainan quiz yang menyenangkan. Aplikasi ini mencakup tiga materi utama: Penjumlahan, Pengurangan, dan Perkalian. Dengan antarmuka yang ramah anak dan sistem gamifikasi, BrainWash membuat proses belajar matematika menjadi lebih menarik dan efektif.',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Bootstrap Icons'],
                    github: 'https://github.com/ThariqAdzikra/BrainWash',
                    demo: null,
                    images: [
                        '/projek/brainwash/brainwash1.jpeg',
                        '/projek/brainwash/brainwash2.jpeg',
                        '/projek/brainwash/brainwash3.jpeg',
                        '/projek/brainwash/brainwash4.jpeg',
                        '/projek/brainwash/brainwash5.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 7,
                    title: 'AirMap - Monitoring Kualitas Udara',
                    desc: 'Aplikasi pemantauan kualitas udara dan deteksi titik api (kebakaran hutan) real-time di Indonesia berbasis web dengan peta interaktif.',
                    fullDesc: 'AirMap adalah aplikasi web untuk pemantauan kualitas udara dan deteksi titik api (kebakaran hutan) secara real-time di Indonesia. Menggunakan peta interaktif berbasis Leaflet.js, aplikasi ini mengintegrasikan data dari NASA FIRMS untuk titik api, WAQI untuk indeks kualitas udara, dan Nominatim OpenStreetMap untuk geocoding. Dibangun dengan frontend HTML5, CSS3, JavaScript ES6+ dan backend PHP 7.4+ dengan database MySQL.',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Leaflet.js'],
                    github: 'https://github.com/ThariqAdzikra/Airmap',
                    demo: null,
                    images: [
                        '/projek/airmap/airmap1.jpeg',
                        '/projek/airmap/airmap2.jpeg',
                        '/projek/airmap/airmap3.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 8,
                    title: 'Integrasi Biodata',
                    desc: 'Aplikasi Android untuk integrasi dan manajemen data biodata menggunakan SQLite sebagai database lokal.',
                    fullDesc: 'Integrasi Biodata adalah aplikasi Android native yang dirancang untuk mengintegrasikan dan mengelola berbagai data biodata yang terpisah ke dalam satu platform terpadu. Aplikasi ini memanfaatkan SQLite sebagai database lokal untuk penyimpanan data yang efisien dan cepat. Dibangun menggunakan Java dengan Android Studio, aplikasi ini menerapkan arsitektur CRUD (Create, Read, Update, Delete) untuk pengelolaan data yang lengkap dengan antarmuka yang intuitif dan responsif.',
                    tags: ['Java', 'Android Studio', 'SQLite', 'Android SDK', 'XML Layout'],
                    github: 'https://github.com/ThariqAdzikra/project5miliyar',
                    demo: null,
                    images: [
                        '/projek/biodata/biodata1.png',
                        '/projek/biodata/biodata2.png',
                        '/projek/biodata/biodata3.png'
                    ],
                    isRealProject: true,
                },
                {
                    id: 9,
                    title: 'Tebak Angka',
                    desc: 'Permainan tebak angka dari 1-100 dengan 10 nyawa berbasis Android.',
                    fullDesc: 'Tebak Angka adalah permainan sederhana namun adiktif yang menantang pemain untuk menebak angka rahasia antara 1 hingga 100. Pemain diberikan 10 nyawa untuk menebak dengan benar, dan aplikasi akan memberikan petunjuk apakah tebakan terlalu tinggi atau terlalu rendah. Dibangun menggunakan Java dengan Android Studio, game ini menerapkan logic sederhana namun efektif untuk gameplay yang menyenangkan.',
                    tags: ['Java', 'Android Studio', 'SQLite', 'Android SDK', 'XML Layout'],
                    github: 'https://github.com/ThariqAdzikra/TebakAngka',
                    demo: null,
                    images: [
                        '/projek/tebakangka/tebakangka1.png',
                        '/projek/tebakangka/tebakangka2.png',
                        '/projek/tebakangka/tebakangka3.png',
                        '/projek/tebakangka/tebakangka4.png'
                    ],
                    isRealProject: true,
                },
                {
                    id: 10,
                    title: 'Bioskop - Pemesanan Tiket',
                    desc: 'Aplikasi pemesanan tiket bioskop berbasis Java yang menerapkan 5 pilar dasar OOP.',
                    fullDesc: 'Bioskop adalah aplikasi pemesanan tiket bioskop berbasis Java yang menerapkan 5 pilar dasar Object-Oriented Programming (OOP): Encapsulation, Abstraction, Inheritance, Polymorphism, dan Association. Fitur meliputi pemilihan film, pemilihan bangku dengan visualisasi kursi, sistem pembayaran, dan cetak struk/receipt. Aplikasi ini dirancang sebagai implementasi praktis konsep OOP dalam pengembangan perangkat lunak.',
                    tags: ['Java', 'OOP', 'Console Application'],
                    github: 'https://github.com/ThariqAdzikra/Bioskop',
                    demo: null,
                    images: [
                        '/projek/bioskop/biskop1.png',
                        '/projek/bioskop/biskop2.png'
                    ],
                    isRealProject: true,
                },
                {
                    id: 11,
                    title: 'Kasir Showroom Motor',
                    desc: 'Sistem kasir untuk showroom motor berbasis Java dengan fitur transaksi lengkap.',
                    fullDesc: 'Kasir Showroom Motor adalah aplikasi point-of-sale (POS) berbasis Java yang dirancang untuk mengelola transaksi penjualan di showroom motor. Fitur mencakup manajemen data motor, pencatatan transaksi penjualan, perhitungan otomatis, dan cetak struk. Aplikasi ini dibangun menggunakan dasar-dasar pemrograman Java seperti variabel, kondisi, perulangan, array, dan method.',
                    tags: ['Java', 'Console Application'],
                    github: 'https://github.com/ThariqAdzikra/kasir',
                    demo: null,
                    images: [
                        '/projek/kasir/kasir1.png',
                        '/projek/kasir/kasir2.png'
                    ],
                    isRealProject: true,
                },
            ]
        },
        certificates: {
            label: 'Sertifikat',
            title: 'Sertifikat &',
            titleHighlight: 'Kredensial',
            description: 'Perjalanan pembelajaran berkelanjutan dengan sertifikasi terverifikasi.',
            earned: 'sertifikat diraih',
            modalTitle: 'Detail Sertifikat',
            viewCredential: 'Lihat Kredensial',
            data: [
                { id: 1, title: 'Database Design & SQL (Course 1)', issuer: 'Dicoding', year: '2024', desc: 'Sertifikat penyelesaian kursus desain basis data dan SQL bagian 1.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_COURSECERT1', count: 1 },
                { id: 2, title: 'Database Design & SQL (Course 2)', issuer: 'Dicoding', year: '2024', desc: 'Sertifikat penyelesaian kursus desain basis data dan SQL bagian 2.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_COURSECERT2', count: 1 },
                { id: 3, title: 'Database Design & SQL (Exam 1)', issuer: 'Dicoding', year: '2024', desc: 'Sertifikat kelulusan ujian kompetensi SQL bagian 1.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_EXAMCERT1', count: 1 },
                { id: 4, title: 'Database Design & SQL (Exam 2)', issuer: 'Dicoding', year: '2024', desc: 'Sertifikat kelulusan ujian kompetensi SQL bagian 2.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_EXAMCERT2', count: 1 },
                { id: 5, title: 'Oracle Certified Foundations Associate', issuer: 'Oracle', year: '2023', desc: 'Sertifikasi Oracle Cloud Infrastructure 2023 Certified Foundations Associate.', folder: 'Muhammad Thariq Adzikra 2303113029', count: 1 },
                { id: 6, title: 'Pengurus HIMA', issuer: 'Himpunan Mahasiswa', year: '2023', desc: 'Sertifikat keaktifan sebagai pengurus Himpunan Mahasiswa.', folder: 'hima', count: 1 },
                { id: 7, title: 'Cyber Security Fundamentals', issuer: 'CSF', year: '2023', desc: 'Sertifikasi dasar keamanan siber dan perlindungan data.', folder: 'Sertif CSF Muhammad Thariq Adzikra', count: 1 },
                { id: 8, title: 'Workshop Teknologi Baterai', issuer: 'Event Organizer', year: '2023', desc: 'Sertifikat partisipasi dalam workshop teknologi baterai masa depan.', folder: 'Sertifikat Baterai', count: 2 },
                { id: 9, title: 'Dasar Kecerdasan Buatan', issuer: 'Dicoding', year: '2023', desc: 'Pemahaman fundamental mengenai konsep dan implementasi AI.', folder: 'Sertifikat Dasar AI', count: 2 },
                { id: 10, title: 'Oracle Cloud Infrastructure', issuer: 'Oracle', year: '2023', desc: 'Sertifikasi keahlian dasar infrastruktur cloud Oracle.', folder: 'Sertifikat Oracle Cloud Muhammad Thariq Adzikra', count: 1 },
                { id: 11, title: 'Panitia PKS', issuer: 'PKS Committee', year: '2023', desc: 'Sertifikat apresiasi sebagai panitia acara PKS.', folder: 'Sertifikat Panitia PKS', count: 1 },
                { id: 12, title: 'Panitia Rumpi IT', issuer: 'Rumpi IT', year: '2023', desc: 'Sertifikat partisipasi aktif sebagai panitia event Rumpi IT.', folder: 'Sertifikat Panitia Rumpi IT', count: 1 },
                { id: 13, title: 'Samsung Innovation Campus Stage 1', issuer: 'Samsung', year: '2023', desc: 'Penyelesaian tahap pertama program Samsung Innovation Campus.', folder: 'Sertifikat SIC6 Stage 1', count: 1 },
                { id: 14, title: 'Visualisasi Data', issuer: 'Dicoding', year: '2023', desc: 'Keahlian dalam menyajikan data secara visual yang efektif.', folder: 'Sertifikat Visualisasi Data', count: 2 },
                { id: 15, title: 'Hackathon IMPHNEN x Kolosal AI', issuer: 'IMPHNEN & Kolosal AI', year: '2024', desc: 'Sertifikat partisipasi Hackathon IMPHNEN x Kolosal AI sebagai Tim "Telor Gulung". Kompetisi pengembangan aplikasi berbasis AI.', folder: 'hacktonIMPHNEN', count: 1 },
            ]
        },
        socialMedia: {
            label: 'Terhubung',
            title: 'Mari',
            titleHighlight: 'Berteman',
            description: 'Ikuti saya di media sosial untuk mendapatkan update terbaru tentang proyek, pemikiran, dan perjalanan saya di dunia teknologi.',
            stats: {
                followers: 'Selalu',
                followersLabel: 'Aktif',
                posts: 'Cepat',
                postsLabel: 'Respon'
            },
            platforms: {
                github: 'Lihat repositori saya',
                linkedin: 'Terhubung secara profesional',
                instagram: 'Ikuti perjalanan saya',
                x: 'Baca pemikiran saya',
                youtube: 'Tonton tutorial',
                email: 'Kirim pesan'
            }
        },
        contact: {
            label: 'Hubungi',
            title: 'Mari',
            titleHighlight: 'Terhubung',
            subtitle: 'Tertarik bekerja sama atau ingin bertanya? Jangan ragu untuk menghubungi saya!',
            info: {
                email: 'Email',
                location: 'Lokasi',
                timezone: 'Zona Waktu'
            },
            available: {
                title: 'Tersedia Sekarang',
                subtitle: 'Terbuka untuk peluang kerja, proyek freelance, dan kolaborasi.'
            },
            form: {
                name: 'Nama',
                namePlaceholder: 'John Doe',
                email: 'Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subjek',
                subjectPlaceholder: 'Tuliskan subjek disini...',
                message: 'Pesan',
                messagePlaceholder: 'Tuliskan pesan Anda disini...',
                send: 'Kirim Pesan',
            },
            footer: {
                text: 'Dibuat dengan ☕ menggunakan React & Tailwind CSS'
            }
        }
    },
    en: {
        nav: {
            welcome: 'Home',
            about: 'About',
            education: 'Education',
            skills: 'Skills',
            projects: 'Projects',
            certificates: 'Certificates',
            social: 'Social',
            contact: 'Contact',
        },
        welcome: {
            greeting: 'Hello, I\'m',
            available: 'Available for opportunities',
            description: 'Crafting beautiful digital experiences with',
            cleanCode: 'clean code',
            and: 'and',
            creativeDesign: 'creative design',
            exploreBtn: 'Explore My Work',
            contactBtn: 'Get In Touch',
            scroll: 'Scroll',
        },
        about: {
            label: 'About Me',
            title: 'Crafting Digital',
            titleHighlight: 'Experiences',
            description1: 'I have a strong passion for',
            passion1: 'UI/UX',
            passion2: 'Machine Learning/AI',
            passion3: 'Data Engineering',
            description2: 'Specializing in',
            spec1: 'Website Development',
            spec2: 'Mobile Development',
            specSuffix: '(Fullstack) using modern technologies to build scalable solutions.',
            yearsExp: 'Years Exp',
            stats: {
                projects: 'Projects',
                years: 'Years',
                passion: 'Passion',
            },
            downloadCv: 'Download CV',
            location: 'Indonesia',
            openToWork: 'Open to Work',
        },
        education: {
            label: 'Background',
            title: 'Education',
            titleHighlight: 'Journey',
            subtitle: 'Academic journey shaping my skills and passion in technology',
            current: 'Current',
            gpa: 'GPA',
            average: 'Average',
            journey: [
                {
                    id: 1,
                    level: 'UNIVERSITY',
                    name: 'Universitas Riau',
                    major: 'Information Systems',
                    period: '2023 - Present',
                    location: 'Pekanbaru, Indonesia',
                    current: true,
                    gpa: '3.94 / 4.00',
                    description: 'Active student in Information Systems focusing on software development, data engineering, and artificial intelligence.',
                    highlights: ['UI/UX Design', 'Fullstack Dev', 'Mobile Dev', 'Data Engineering']
                },
                {
                    id: 2,
                    level: 'HIGH SCHOOL',
                    name: 'SMA Negeri 1 Padang',
                    major: 'Science',
                    period: '2020 - 2023',
                    location: 'Padang, Indonesia',
                    current: false,
                    gpa: '89.04',
                    description: 'Graduated from Science major with distinction. Active in academic activities and school organizations.',
                    highlights: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
                },
                {
                    id: 3,
                    level: 'JUNIOR HS',
                    name: 'SMP Negeri 2 Padang',
                    major: null,
                    period: '2017 - 2020',
                    location: 'Padang, Indonesia',
                    current: false,
                    gpa: null,
                    description: 'Completed junior high school education with strong character building and academic proficiency.',
                    highlights: []
                },
                {
                    id: 4,
                    level: 'ELEMENTARY',
                    name: 'SD Kartika 1-11 Padang',
                    major: null,
                    period: '2012 - 2017',
                    location: 'Padang, Indonesia',
                    current: false,
                    gpa: null,
                    description: 'Primary education establishing discipline and enthusiasm for learning from an early age.',
                    highlights: []
                },
            ],
            stats: {
                years: 'Years of Education',
                levels: 'Levels',
                spirit: 'Learning Spirit'
            }
        },
        skills: {
            label: 'Expertise',
            title: 'Skills &',
            titleHighlight: 'Technologies',
            description: 'I\'m constantly learning and expanding my skillset to stay current with the latest technologies.',
            techMastered: 'Technologies Mastered',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend & Mobile',
                database: 'Database & Cloud',
                tools: 'Tools & Design',
            }
        },
        projects: {
            label: 'Portfolio',
            title: 'Featured',
            titleHighlight: 'Projects',
            projectCount: 'projects',
            viewDetails: 'View Details',
            liveDemo: 'Live Demo',
            viewCode: 'View Code',
            data: [
                {
                    id: 1,
                    title: 'Katalog UMKM',
                    desc: 'AI-powered POS and store management system for SMEs with stock tracking and restock prediction.',
                    fullDesc: 'Katalog UMKM is an AI-powered (Kolosal.ai) POS and store management system that solves SME problems in stock tracking, restock prediction, and business insights. Key features include Deep Think AI Assistant for real-time database queries, AI Forecasting for stock prediction, and Role-Based Security. Integrates modern POS, analytics dashboard, and AI using only actual data.',
                    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Kolosal AI'],
                    github: 'https://github.com/ThariqAdzikra/KatalogUMKM',
                    demo: 'http://ftcalfadzjdr.ap-southeast-1.clawcloudrun.com/',
                    images: [
                        '/projek/katalogUMKM/katalogUMKM1.jpeg',
                        '/projek/katalogUMKM/katalogUMKM2.jpeg',
                        '/projek/katalogUMKM/katalogUMKM3.jpeg',
                        '/projek/katalogUMKM/katalogUMKM4.jpeg',
                        '/projek/katalogUMKM/katalogUMKM5.jpeg',
                        '/projek/katalogUMKM/katalogUMKM6.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 2,
                    title: 'Katalog Laptop',
                    desc: 'Product catalog management system with purchase transactions, stock, and sales.',
                    fullDesc: 'Katalog Laptop is an integrated management system for managing product catalogs, supplier purchase transactions, stock management, sales, and transaction reports. Equipped with REST API based on Laravel Sanctum for external integration. Final project for Advanced Web-Based Information System Development course.',
                    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Sanctum'],
                    github: 'https://github.com/ThariqAdzikra/katalogLaptop',
                    demo: 'https://kataloglaptop.dpdns.org/',
                    images: [
                        '/projek/katalogLaptop/katalogLaptop1.jpeg',
                        '/projek/katalogLaptop/katalogLaptop2.jpeg',
                        '/projek/katalogLaptop/katalogLaptop3.jpeg',
                        '/projek/katalogLaptop/katalogLaptop4.jpeg',
                        '/projek/katalogLaptop/katalogLaptop5.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 3,
                    title: 'Air Quality Monitoring',
                    desc: 'Real-time IoT-based air quality monitoring system with sensor and web visualization.',
                    fullDesc: 'Air Quality Monitoring is an IoT system for monitoring air quality in real-time. Uses MQ-134 air quality sensor connected to NodeMCU v3 ESP8266 as microcontroller. Sensor data is sent to ThingSpeak platform for cloud storage and analysis, then visualized through a website displaying current air quality information with status categories and historical graphs.',
                    tags: ['IoT', 'Arduino IDE', 'ThingSpeak', 'ESP8266'],
                    github: 'https://github.com/ThariqAdzikra/kualitasUdara',
                    demo: null,
                    images: [
                        '/projek/monitoringKualiatasUdara/kualitasUdara1.jpeg',
                        '/projek/monitoringKualiatasUdara/kualitasUdara2.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 4,
                    title: 'SINDRO - Smart Hydroponic',
                    desc: 'IoT and AI system for modern hydroponic farming with real-time monitoring and smart chatbot.',
                    fullDesc: 'SINDRO is a digital hydroponic solution combining IoT and AI. Features: Real-time dashboard for pH, water temperature, and TDS monitoring; AI Chatbot (TF-IDF + Gemini API); Daily reports with Chart.js; Care reminder system; and Admin Panel for user management.',
                    tags: ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'Google Gemini API'],
                    github: 'https://github.com/ThariqAdzikra/smartHydroponic',
                    demo: null,
                    images: [
                        '/projek/sindro/smartHydroponic1.jpeg',
                        '/projek/sindro/smartHydroponic2.jpeg',
                        '/projek/sindro/smartHydroponic3.jpeg',
                        '/projek/sindro/smartHydroponic4.jpeg',
                        '/projek/sindro/smartHydroponic5.jpeg',
                        '/projek/sindro/smartHydroponic6.jpeg',
                        '/projek/sindro/smartHydroponic7.jpeg',
                        '/projek/sindro/smartHydroponic8.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 5,
                    title: 'LifeQuest - Productivity Gamification',
                    desc: 'Web-based productivity gamification platform that transforms daily to-do lists into RPG adventures.',
                    fullDesc: 'LifeQuest is a productivity gamification platform built with Laravel 12. Turn positive activities and daily to-do lists into RPG adventures. Complete Quests to earn XP & Gold, level up, and build positive habits. Features: Weather Widget (OpenWeatherMap), Avatar with Cropper.js, and SweetAlert2 notifications.',
                    tags: ['Laravel 12', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
                    github: 'https://github.com/ThariqAdzikra/LifeQuest',
                    demo: null,
                    images: [
                        '/projek/lifequest/lifequest1.png',
                        '/projek/lifequest/lifequest2.png',
                        '/projek/lifequest/lifequest3.jpeg',
                        '/projek/lifequest/lifequest4.jpeg',
                        '/projek/lifequest/lifequest5.jpeg',
                        '/projek/lifequest/lifequest6.jpeg',
                        '/projek/lifequest/lifequest7.jpeg',
                        '/projek/lifequest/lifequest8.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 6,
                    title: 'BrainWash - Math Education',
                    desc: 'Interactive educational web app to help children learn basic math through fun quiz games.',
                    fullDesc: 'BrainWash is an interactive educational web application designed to help children learn basic mathematics through fun quiz games. The app covers three main topics: Addition, Subtraction, and Multiplication. With a child-friendly interface and gamification system, BrainWash makes the process of learning mathematics more engaging and effective.',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Bootstrap Icons'],
                    github: 'https://github.com/ThariqAdzikra/BrainWash',
                    demo: null,
                    images: [
                        '/projek/brainwash/brainwash1.jpeg',
                        '/projek/brainwash/brainwash2.jpeg',
                        '/projek/brainwash/brainwash3.jpeg',
                        '/projek/brainwash/brainwash4.jpeg',
                        '/projek/brainwash/brainwash5.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 7,
                    title: 'AirMap - Air Quality Monitoring',
                    desc: 'Real-time air quality monitoring and fire hotspot (forest fire) detection web application for Indonesia with interactive maps.',
                    fullDesc: 'AirMap is a web application for real-time air quality monitoring and fire hotspot (forest fire) detection in Indonesia. Using interactive maps powered by Leaflet.js, the app integrates data from NASA FIRMS for fire hotspots, WAQI for air quality index, and Nominatim OpenStreetMap for geocoding. Built with HTML5, CSS3, JavaScript ES6+ frontend and PHP 7.4+ backend with MySQL database.',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Leaflet.js'],
                    github: 'https://github.com/ThariqAdzikra/Airmap',
                    demo: null,
                    images: [
                        '/projek/airmap/airmap1.jpeg',
                        '/projek/airmap/airmap2.jpeg',
                        '/projek/airmap/airmap3.jpeg'
                    ],
                    isRealProject: true,
                },
                {
                    id: 8,
                    title: 'Biodata Integration',
                    desc: 'Android application for integrating and managing biodata using SQLite as local database.',
                    fullDesc: 'Biodata Integration is a native Android application designed to integrate and manage various separated biodata into one unified platform. The app utilizes SQLite as a local database for efficient and fast data storage. Built using Java with Android Studio, this application implements CRUD (Create, Read, Update, Delete) architecture for complete data management with an intuitive and responsive interface.',
                    tags: ['Java', 'Android Studio', 'SQLite', 'Android SDK', 'XML Layout'],
                    github: 'https://github.com/ThariqAdzikra/project5miliyar',
                    demo: null,
                    images: [
                        '/projek/biodata/biodata1.png',
                        '/projek/biodata/biodata2.png',
                        '/projek/biodata/biodata3.png'
                    ],
                    isRealProject: true,
                },
                {
                    id: 9,
                    title: 'Guess Number',
                    desc: 'Number guessing game from 1-100 with 10 lives on Android platform.',
                    fullDesc: 'Guess Number is a simple yet addictive game that challenges players to guess a secret number between 1 and 100. Players are given 10 lives to guess correctly, and the app provides hints whether the guess is too high or too low. Built using Java with Android Studio, this game implements simple but effective logic for enjoyable gameplay.',
                    tags: ['Java', 'Android Studio', 'SQLite', 'Android SDK', 'XML Layout'],
                    github: 'https://github.com/ThariqAdzikra/TebakAngka',
                    demo: null,
                    images: [
                        '/projek/tebakangka/tebakangka1.png',
                        '/projek/tebakangka/tebakangka2.png',
                        '/projek/tebakangka/tebakangka3.png',
                        '/projek/tebakangka/tebakangka4.png'
                    ],
                    isRealProject: true,
                },
                {
                    id: 10,
                    title: 'Cinema - Ticket Booking',
                    desc: 'Java-based cinema ticket booking application implementing 5 core OOP pillars.',
                    fullDesc: 'Cinema is a Java-based movie ticket booking application that implements the 5 core pillars of Object-Oriented Programming (OOP): Encapsulation, Abstraction, Inheritance, Polymorphism, and Association. Features include movie selection, seat selection with visual seat layout, payment system, and receipt printing. This application is designed as a practical implementation of OOP concepts in software development.',
                    tags: ['Java', 'OOP', 'Console Application'],
                    github: 'https://github.com/ThariqAdzikra/Bioskop',
                    demo: null,
                    images: [
                        '/projek/bioskop/biskop1.png',
                        '/projek/bioskop/biskop2.png'
                    ],
                    isRealProject: true,
                },
                {
                    id: 11,
                    title: 'Motorcycle Showroom Cashier',
                    desc: 'Java-based cashier system for motorcycle showroom with complete transaction features.',
                    fullDesc: 'Motorcycle Showroom Cashier is a Java-based point-of-sale (POS) application designed to manage sales transactions at motorcycle showrooms. Features include motorcycle data management, sales transaction recording, automatic calculations, and receipt printing. This application is built using Java programming fundamentals such as variables, conditions, loops, arrays, and methods.',
                    tags: ['Java', 'Console Application'],
                    github: 'https://github.com/ThariqAdzikra/kasir',
                    demo: null,
                    images: [
                        '/projek/kasir/kasir1.png',
                        '/projek/kasir/kasir2.png'
                    ],
                    isRealProject: true,
                },
            ]
        },
        certificates: {
            label: 'Certificates',
            title: 'Certificates &',
            titleHighlight: 'Credentials',
            description: 'Continuous learning journey with verified certifications',
            earned: 'certificates earned',
            modalTitle: 'Certificate Details',
            viewCredential: 'View Credential',
            data: [
                { id: 1, title: 'Database Design & SQL (Course 1)', issuer: 'Dicoding', year: '2024', desc: 'Certificate of completion for Database Design and SQL Course part 1.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_COURSECERT1', count: 1 },
                { id: 2, title: 'Database Design & SQL (Course 2)', issuer: 'Dicoding', year: '2024', desc: 'Certificate of completion for Database Design and SQL Course part 2.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_COURSECERT2', count: 1 },
                { id: 3, title: 'Database Design & SQL (Exam 1)', issuer: 'Dicoding', year: '2024', desc: 'Competency exam certificate for SQL part 1.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_EXAMCERT1', count: 1 },
                { id: 4, title: 'Database Design & SQL (Exam 2)', issuer: 'Dicoding', year: '2024', desc: 'Competency exam certificate for SQL part 2.', folder: 'MUHAMMAD THARIQ ADZIKRA_DDSQL4_EXAMCERT2', count: 1 },
                { id: 5, title: 'Oracle Certified Foundations Associate', issuer: 'Oracle', year: '2023', desc: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate certification.', folder: 'Muhammad Thariq Adzikra 2303113029', count: 1 },
                { id: 6, title: 'HIMA Board Member', issuer: 'Student Association', year: '2023', desc: 'Certificate of active participation as a Student Association board member.', folder: 'hima', count: 1 },
                { id: 7, title: 'Cyber Security Fundamentals', issuer: 'CSF', year: '2023', desc: 'Fundamental certification in cyber security and data protection.', folder: 'Sertif CSF Muhammad Thariq Adzikra', count: 1 },
                { id: 8, title: 'Battery Technology Workshop', issuer: 'Event Organizer', year: '2023', desc: 'Participation certificate in future battery technology workshop.', folder: 'Sertifikat Baterai', count: 2 },
                { id: 9, title: 'AI Fundamentals', issuer: 'Dicoding', year: '2023', desc: 'Fundamental understanding of AI concepts and implementation.', folder: 'Sertifikat Dasar AI', count: 2 },
                { id: 10, title: 'Oracle Cloud Infrastructure', issuer: 'Oracle', year: '2023', desc: 'Certification in basic Oracle Cloud Infrastructure skills.', folder: 'Sertifikat Oracle Cloud Muhammad Thariq Adzikra', count: 1 },
                { id: 11, title: 'PKS Committee', issuer: 'PKS Committee', year: '2023', desc: 'Appreciation certificate as a PKS event committee member.', folder: 'Sertifikat Panitia PKS', count: 1 },
                { id: 12, title: 'Rumpi IT Committee', issuer: 'Rumpi IT', year: '2023', desc: 'Active participation certificate as Rumpi IT event committee.', folder: 'Sertifikat Panitia Rumpi IT', count: 1 },
                { id: 13, title: 'Samsung Innovation Campus Stage 1', issuer: 'Samsung', year: '2023', desc: 'Completion of the first stage of Samsung Innovation Campus program.', folder: 'Sertifikat SIC6 Stage 1', count: 1 },
                { id: 14, title: 'Data Visualization', issuer: 'Dicoding', year: '2023', desc: 'Expertise in presenting data visually and effectively.', folder: 'Sertifikat Visualisasi Data', count: 2 },
                { id: 15, title: 'Hackathon IMPHNEN x Kolosal AI', issuer: 'IMPHNEN & Kolosal AI', year: '2024', desc: 'Participation certificate for IMPHNEN x Kolosal AI Hackathon as Team "Telor Gulung". An AI-based application development competition.', folder: 'hacktonIMPHNEN', count: 1 },
            ]
        },
        socialMedia: {
            label: 'Connect',
            title: 'Let\'s Be',
            titleHighlight: 'Friends',
            description: 'Follow me on social media to stay updated with my latest projects, thoughts, and journey in tech.',
            stats: {
                followers: 'Always',
                followersLabel: 'Active',
                posts: 'Fast',
                postsLabel: 'Response'
            },
            platforms: {
                github: 'View my repositories',
                linkedin: 'Connect professionally',
                instagram: 'Follow my journey',
                x: 'Read my thoughts',
                youtube: 'Watch tutorials',
                email: 'Send a message'
            }
        },
        contact: {
            label: 'Get In Touch',
            title: 'Let\'s',
            titleHighlight: 'Connect',
            subtitle: 'Interested in working together or have questions? Feel free to reach out!',
            info: {
                email: 'Email',
                location: 'Location',
                timezone: 'Timezone'
            },
            available: {
                title: 'Currently Available',
                subtitle: 'Open for job opportunities, freelance projects, and collaborations.'
            },
            form: {
                name: 'Name',
                namePlaceholder: 'John Doe',
                email: 'Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subject',
                subjectPlaceholder: 'Write subject here...',
                message: 'Message',
                messagePlaceholder: 'Write your message here...',
                send: 'Send Message',
            },
            footer: {
                text: 'Built with ☕ using React & Tailwind CSS'
            }
        }
    }
};
