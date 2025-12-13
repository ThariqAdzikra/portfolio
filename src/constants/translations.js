
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
                    title: 'Platform E-Commerce',
                    desc: 'Toko online lengkap dengan inventaris real-time dan pembayaran aman.',
                    fullDesc: 'Solusi e-commerce komprehensif yang dibangun dengan teknologi modern. Fitur termasuk autentikasi pengguna, katalog produk dengan pencarian dan filter, keranjang belanja, checkout aman dengan Stripe, manajemen pesanan, dan dashboard admin untuk kontrol inventaris.',
                    tags: ['React', 'Node.js', 'MongoDB'],
                },
                {
                    id: 2,
                    title: 'Manajemen Tugas',
                    desc: 'Manajer tugas kolaboratif dengan pembaruan real-time dan fitur tim.',
                    fullDesc: 'Aplikasi produktivitas untuk tim mengelola proyek dan tugas secara efisien. Termasuk kolaborasi real-time, papan kanban drag-and-drop, obrolan tim, berbagi file, pengingat tenggat waktu, dan pelacakan kemajuan dengan analitik.',
                    tags: ['React', 'Firebase', 'Tailwind'],
                },
                {
                    id: 3,
                    title: 'Dashboard Portfolio',
                    desc: 'Pelacak investasi dengan data langsung dan visualisasi yang indah.',
                    fullDesc: 'Dashboard keuangan pribadi untuk melacak investasi di berbagai kelas aset. Fitur update harga real-time, analitik kinerja portofolio, pelacakan dividen, dan grafik serta laporan yang dapat disesuaikan.',
                    tags: ['Next.js', 'Chart.js'],
                },
                {
                    id: 4,
                    title: 'Aplikasi Cuaca',
                    desc: 'Aplikasi cuaca indah dengan prakiraan dan animasi memukau.',
                    fullDesc: 'Aplikasi cuaca yang menakjubkan secara visual dengan latar belakang animasi yang berubah berdasarkan kondisi cuaca. Termasuk prakiraan 7 hari, prediksi per jam, pencarian lokasi, dan peringatan cuaca.',
                    tags: ['React', 'Weather API'],
                },
                {
                    id: 5,
                    title: 'Aplikasi Chat',
                    desc: 'Obrolan real-time dengan ruang, berbagi file, dan panggilan video.',
                    fullDesc: 'Platform perpesanan berfitur lengkap dengan obrolan pribadi dan grup, panggilan suara dan video, berbagi layar, lampiran file, reaksi pesan, dan enkripsi end-to-end.',
                    tags: ['Socket.io', 'WebRTC'],
                },
                {
                    id: 6,
                    title: 'Platform Blog',
                    desc: 'Blog modern dengan editor markdown dan optimasi SEO.',
                    fullDesc: 'Platform blogging yang kuat dengan editor markdown yang kaya, optimasi gambar, alat SEO, berbagi sosial, sistem komentar, integrasi buletin, dan dashboard analitik.',
                    tags: ['Next.js', 'MDX'],
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
            label: 'Hubungi Saya',
            title: 'Mari Bekerja',
            titleHighlight: 'Sama',
            subtitle: 'Punya proyek impian? Saya ingin mendengar dari Anda!',
            info: {
                email: 'Email',
                location: 'Lokasi',
                timezone: 'Zona Waktu'
            },
            available: {
                title: 'Tersedia Sekarang',
                subtitle: 'Saya terbuka untuk proyek freelance dan peluang full-time.'
            },
            form: {
                name: 'Nama',
                namePlaceholder: 'John Doe',
                email: 'Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subjek',
                subjectPlaceholder: 'Pertanyaan proyek',
                message: 'Pesan',
                messagePlaceholder: 'Ceritakan tentang proyek Anda...',
                send: 'Kirim Pesan',
            },
            footer: {
                text: 'Dibuat dengan ❤️ menggunakan React & Tailwind CSS'
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
                    title: 'E-Commerce Platform',
                    desc: 'Full-featured online store with real-time inventory and secure payments.',
                    fullDesc: 'A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog with search and filters, shopping cart, secure checkout with Stripe, order management, and admin dashboard for inventory control.',
                    tags: ['React', 'Node.js', 'MongoDB'],
                },
                {
                    id: 2,
                    title: 'Task Management',
                    desc: 'Collaborative task manager with real-time updates and team features.',
                    fullDesc: 'A productivity app for teams to manage projects and tasks efficiently. Includes real-time collaboration, drag-and-drop kanban boards, team chat, file sharing, deadline reminders, and progress tracking with analytics.',
                    tags: ['React', 'Firebase', 'Tailwind'],
                },
                {
                    id: 3,
                    title: 'Portfolio Dashboard',
                    desc: 'Investment tracker with live data and beautiful visualizations.',
                    fullDesc: 'Personal finance dashboard for tracking investments across multiple asset classes. Features real-time price updates, portfolio performance analytics, dividend tracking, and customizable charts and reports.',
                    tags: ['Next.js', 'Chart.js'],
                },
                {
                    id: 4,
                    title: 'Weather App',
                    desc: 'Beautiful weather app with forecasts and stunning animations.',
                    fullDesc: 'A visually stunning weather application with animated backgrounds that change based on weather conditions. Includes 7-day forecasts, hourly predictions, location search, and weather alerts.',
                    tags: ['React', 'Weather API'],
                },
                {
                    id: 5,
                    title: 'Chat Application',
                    desc: 'Real-time chat with rooms, file sharing, and video calls.',
                    fullDesc: 'A full-featured messaging platform with private and group chats, voice and video calling, screen sharing, file attachments, message reactions, and end-to-end encryption.',
                    tags: ['Socket.io', 'WebRTC'],
                },
                {
                    id: 6,
                    title: 'Blog Platform',
                    desc: 'Modern blog with markdown editor and SEO optimization.',
                    fullDesc: 'A powerful blogging platform with a rich markdown editor, image optimization, SEO tools, social sharing, comment system, newsletter integration, and analytics dashboard.',
                    tags: ['Next.js', 'MDX'],
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
            title: 'Let\'s Work',
            titleHighlight: 'Together',
            subtitle: 'Have a project in mind? I\'d love to hear from you!',
            info: {
                email: 'Email',
                location: 'Location',
                timezone: 'Timezone'
            },
            available: {
                title: 'Currently Available',
                subtitle: 'I\'m open for freelance projects and full-time opportunities.'
            },
            form: {
                name: 'Name',
                namePlaceholder: 'John Doe',
                email: 'Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subject',
                subjectPlaceholder: 'Project inquiry',
                message: 'Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
            },
            footer: {
                text: 'Built with ❤️ using React & Tailwind CSS'
            }
        }
    }
};
