document.getElementById('novelForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get the selected genre
    const genre = document.getElementById('genre').value;

    // Define recommendations based on genre
    const recommendations = {
        romance: [
            {
                title: "Hujan",
                author: "Tere Liye",
                description: "Kisah cinta yang tumbuh di tengah kehancuran dunia akibat bencana besar."
            },
            {
                title: "Dilan 1990",
                author: "Pidi Baiq",
                description: "Romansa remaja yang manis antara Dilan dan Milea di Bandung tahun 90-an."
            },
            {
                title: "Perahu Kertas",
                author: "Dee Lestari",
                description: "Perjalanan cinta Kugy dan Keenan yang harus menghadapi mimpi dan realitas."

            },
            {
                title: "Antologi Rasa",
                author: "Ika Natassa",
                description: "Cinta segitiga yang rumit antara tiga sahabat."

            },
            {
                title: "Sabtu Bersama Bapak",
                author: "Adhitya Mulya",
                description: "Cinta keluarga dan pasangan yang dirangkai dengan pesan dari seorang ayah yang telah tiada."
            },
            {
                title: "Tentang Kamu",
                author: "Tere Liye",
                description: "Kisah hidup penuh cinta dan perjuangan seorang wanita misterius."

            },
            {
                title: "Sebuah Usaha Melupakan",
                author: "Boy Candra",
                description: "Kisah tentang perjuangan melupakan cinta yang telah hilang."

            },
            {
                title: "Takdir",
                author: "Asma Nadia",
                description: "Cinta yang terjalin di tengah pencarian jati diri."

            },
            {
                title: "Fallin in Love",
                author: "Dyan Nuranindya",
                description: "Perjalanan cinta remaja dengan nuansa musik."
            },
            {
                title: "Takdir",
                author: "Asma Nadia",
                description: "Cinta yang terjalin di tengah pencarian jati diri."

            },
            {
                title: "Cinta Laki-Laki Biasa",
                author: "Asma Nadia",
                description: "Cerita cinta tentang kesederhanaan dan pengorbanan seorang pria biasa."

            },
            {
                title: "Mariposa",
                author: "Luluk HF",
                description: "Kisah cinta unik antara Acha, gadis ceria, dan Iqbal, cowok dingin yang sulit didekati."

            },
            {
                title: "Dandelion",
                author: "Dian Purnomo",
                description: "Cinta yang terjalin di tengah pencarian jati diri."

            },
            {
                title: "Pulang",
                author: "Asma Nadia",
                description: "Perjalanan cinta yang berawal dari mimpi dan kenangan masa kecil."

            },
            {
                title: "The Fault in Our Stars",
                author: "John Green",
                description: "Kisah cinta antara dua remaja yang berjuang melawan kanker, yang menemukan kebahagiaan meskipun takdir mereka penuh penderitaan."

            },
            {
                title: "Outlander",
                author: "Diana Gabaldon",
                description: "Cinta antara Claire, seorang perawat yang terlempar ke masa lalu, dan Jamie, seorang prajurit Skotlandia dari abad ke-18."

            },
            {
                title: "The Time Traveler's Wife",
                author: "Audrey Niffenegger",
                description: "Kisah cinta yang melibatkan Henry yang memiliki kemampuan untuk bepergian ke waktu yang berbeda, dan Clare, wanita yang mencintainya tanpa henti."

            },
            {
                title: "Eleanor & Park",
                author: "Rainbow Rowell",
                description: "Cinta remaja yang tumbuh di tengah kesulitan hidup, dengan kisah yang penuh dengan emosi dan perjalanan batin."

            },
            {
                title: "It Ends with Us",
                author: "Colleen Hoover",
                description: "Kisah cinta yang penuh pengorbanan, diwarnai dengan masalah kekerasan rumah tangga, yang menggambarkan bagaimana seorang wanita menghadapi dilema emosional."
            },
            {
                title: "The Wedding Date",
                author: "Jasmine Guillory",
                description: "Dua orang asing yang bertemu di bandara dan memutuskan untuk berpura-pura menjadi pasangan dalam sebuah pernikahan, yang akhirnya berkembang menjadi hubungan nyata."

            },
            {
                title: "The Sun Is Also a Star",
                author: "Nicola Yoon",
                description: "Kisah romansa dalam satu hari yang penuh dengan keputusan dan takdir, mengisahkan Natasha dan Daniel yang berjuang melawan kenyataan hidup mereka."

            },
            {
                title: "You",
                author: "Caroline Kepnes",
                description: "Kisah gelap tentang obsesi cinta yang membentuk perilaku berbahaya dari seorang pria yang terobsesi pada wanita yang ia cintai."
            },
            {
                title: "Someone Like You",
                author: "Sarah Dessen",
                description: "Kisah tentang persahabatan yang berkembang menjadi cinta, dengan latar belakang duka dan perjalanan emosional."
            },
            {
                title: "The Kiss",
                author: "Robyn Carr",
                description: "Sebuah kisah cinta yang manis dan mengharukan tentang dua orang yang berjuang untuk menemukan cinta sejati mereka."
            },
            
        ],
        fantasy: [
            {
                title: "Anak Rembulan",
                author: "Syaihan Syafiq",
                description: "Seorang anak yang lahir di bawah sinar bulan menemukan dirinya memiliki kekuatan magis"
            },
            {
                title: "Kembara Rindu",
                author: "Tere Liye",
                description: "Perjalanan jiwa dalam dunia penuh teka-teki dan makhluk gaib."
            },
            {
                title: "Titisan",
                author: "Windry Ramadhina",
                description: "Kisah tentang manusia yang terpilih untuk mewarisi kekuatan dewa kuno."
            },
            {
                title: "Cerita dari Negeri Pelangi",
                author: "Seno Gumira Ajidarma",
                description: "Dunia di mana pelangi memiliki kekuatan untuk mengubah nasib manusia."
            },
            {
                title: "Laut Bercerita",
                author: "Leila S. Chudori",
                description: "Fantasi epik tentang misteri di kedalaman laut dan rahasia masa lalu."
            },
            {
                title: "Telaga Air Mata",
                author: "Damien Dematra",
                description: "Kisah fantasi tentang telaga ajaib yang membawa perubahan besar pada hidup pengunjungnya."
            },
            {
                title: "Sang Penyihir dari Kaki Langit",
                author: "Amang Suramang",
                description: "Perjalanan seorang penyihir muda mencari arti keberadaan dirinya di dunia penuh intrik."
            },
            {
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                description: "Petualangan Bilbo Baggins dalam membantu para kurcaci merebut kembali gunung mereka dari naga Smaug."
            },
            {
                title: "A Game of Thrones",
                author: "George R.R. Martin",
                description: "Intrik politik, perang, dan sihir di dunia Westeros, tempat tujuh kerajaan saling memperebutkan takhta."
            },
            {
                title: "The Name of the Wind",
                author: "Patrick Rothfuss",
                description: "Perjalanan Kvothe, seorang penyair, penyihir, dan pahlawan, menceritakan kisah hidupnya yang penuh misteri."
            },
            {
                title: "American Gods",
                author: "Neil Gaiman",
                description: "Shadow Moon, seorang mantan napi, terjebak dalam perang antara dewa-dewa lama dan dewa-dewa modern di Amerika."
            },
            {
                title: "The Night Circus",
                author: "Erin Morgenstern",
                description: "Dua penyihir muda terlibat dalam kompetisi mematikan di sirkus ajaib yang hanya muncul pada malam hari."
            },
            {
                title: "Circe",
                author: "Madeline Miller",
                description: "Kisah reimajinasi mitologi Yunani tentang Circe, seorang penyihir yang diasingkan, dan perjalanannya menemukan kekuatannya."
            },
            {
                title: "The Priory of the Orange Tree",
                author: "Windry Ramadhina",
                description: "Kisah tentang manusia yang terpilih untuk mewarisi kekuatan dewa kuno."
            },
            {
                title: "Throne of Glass",
                author: "Sarah J. Maas",
                description: "Seorang pembunuh muda bernama Celaena Sardothien dipilih untuk bersaing menjadi pembunuh kerajaan."
            },
            {
                title: "Daughter of Smoke and Bone",
                author: "Laini Taylor",
                description: "Karou, seorang gadis misterius, menemukan kebenaran tentang asal-usulnya dan perang antara dua dunia."
            },
            {
                title: "The Dragonbone Chair",
                author: "Tad Williams",
                description: "Seorang pemuda biasa terjebak dalam konflik kerajaan penuh naga dan sihir."
            },
            {
                title: "Serpent & Dove",
                author: "Shelby Mahurin",
                description: "Kisah cinta terlarang antara seorang penyihir dan pemburu penyihir di dunia yang berbahaya."
            },
            {
                title: "Caraval",
                author: "Stephanie Garber",
                description: "Scarlett Dragna menghadiri permainan penuh sihir di mana batas antara kenyataan dan ilusi memudar."
            },
        ],
        
        mystery: [
            {
                title: "Orang-Orang Proyek",
                author: "Ahmad Tohari",
                description: "Sebuah novel yang menyelidiki kehidupan korupsi di balik proyek pembangunan, di mana misteri dan intrik sosial bercampur."
            },
            {
                title: "Rumah Lebah",
                author: "Ruwi Meita",
                description: "Seorang gadis kecil hilang secara misterius, dan penyelidikan mengungkap rahasia kelam yang tersembunyi di desa terpencil."
            },
            {
                title: "Rahasia Hujan",
                author: "Sitta Karina",
                description: "Seorang remaja menemukan rahasia kelam tentang keluarganya melalui petunjuk misterius yang terkait dengan hujan."
            },
            {
                title: "Malam Kelabu di Esplanade",
                author: "Liane Moriarty",
                description: "Seorang wanita terjebak dalam misteri pembunuhan di sebuah tempat eksotis dengan latar romansa."
            },
            {
                title: "Pembunuhan di Jalan Cokelat",
                author: "S. Mara Gd",
                description: "Kisah pembunuhan dan intrik detektif lokal yang berusaha memecahkan teka-teki kompleks di Jakarta."
            },
            {
                title: "Sepasang Mata di Dinding ",
                author: "Maria A. Sardjono",
                description: "Sebuah cerita misteri rumah berhantu yang melibatkan rahasia masa lalu keluarga pemilik rumah."
            },
            {
                title: "Asmaraloka",
                author: "Rio Johan",
                description: "Cerita tentang persahabatan tiga perempuan dan rahasia di balik pembunuhan yang mengejutkan."
            },
            {
                title: "Misteri Pantai Kasih",
                author: "Mira W.",
                description: "Sebuah novel misteri berlatar tempat eksotis dengan legenda yang menakutkan dan rahasia mematikan."
            },
            {
                title: "Cantik Itu Luka ",
                author: "Eka Kurniawan",
                description: "Sebuah novel misteri dan horor tentang sejarah keluarga yang penuh dengan kutukan dan pembalasan dendam."
            },
            {
                title: "Roh",
                author: "Eve Shi",
                description: "Sebuah cerita menegangkan tentang hantu dan misteri yang menyelimuti keluarga dalam sebuah rumah tua."
            },
            {
                title: "Roh",
                author: "Eve Shi",
                description: "Sebuah cerita menegangkan tentang hantu dan misteri yang menyelimuti keluarga dalam sebuah rumah tua."
            },
            {
                title: "Gone Girl ",
                author: "Gillian Flynn",
                description: "Kisah penuh twist tentang hilangnya Amy Dunne, dengan suaminya, Nick, menjadi tersangka utama dalam permainan psikologis yang kelam."
            },
            {
                title: "In the Woods",
                author: "Tana French",
                description: "Seorang detektif menyelidiki pembunuhan seorang gadis muda, yang memiliki hubungan dengan trauma masa kecilnya."
            },
            {
                title: "The Last House on Needless Street",
                author: "Catriona Ward",
                description: "Kisah misteri psikologis yang menantang persepsi pembaca tentang apa yang nyata dan tidak nyata."
            },
            {
                title: "Pretty Girls",
                author: "Karin Slaughter",
                description: "Dua saudara perempuan mengungkap rahasia mengerikan tentang keluarga mereka setelah pembunuhan seorang wanita muda."
            },
            {
                title: "Her Every Fear",
                author: "Peter Swanson",
                description: "Seorang wanita bertukar apartemen dengan sepupunya, hanya untuk menemukan dirinya terjebak dalam misteri pembunuhan."
            },
            {
                title: "The Woods",
                author: "Harlan Coben",
                description: "Dua puluh tahun setelah hilangnya adik perempuannya, seorang pria menemukan petunjuk baru dalam kasus yang tidak terpecahkan."
            },
            {
                title: "he Night Watchman",
                author: " Louise Erdrich",
                description: "Sebuah cerita misteri berlatar sejarah yang terinspirasi dari kehidupan nyata, tentang perjuangan suku asli Amerika."
            },
        ],
        horror: [
            {
                title: "Danur",
                author: "Risa Saraswati",
                description: "Kisah nyata pengalaman Risa Saraswati yang memiliki kemampuan melihat makhluk tak kasat mata dan persahabatannya dengan lima hantu anak kecil."
            },
            {
                title: "Ruang",
                author: "Ruwi Meita",
                description: "Seorang arsitek yang tinggal di sebuah rumah tua mulai mengalami gangguan supranatural yang berhubungan dengan desain rumah itu."
            },
            {
                title: "Pintu Merah",
                author: "Intan Andaru",
                description: "Sebuah rumah kos dengan pintu merah yang tidak boleh dibuka, namun rasa penasaran membuat rahasia kelamnya terungkap."
            },
            {
                title: "Santet",
                author: "Hary Ramadhan",
                description: "Sebuah cerita tentang kutukan keluarga yang memakan korban bertahun-tahun dan hanya bisa dihentikan dengan tumbal manusia."
            },
            {
                title: "Tumbal",
                author: "Eka Dharma Putra",
                description: "Cerita tentang sebuah desa yang dikuasai oleh dukun santet, mengakibatkan serangkaian kejadian menyeramkan."
            },
            {
                title: "Mata Malam",
                author: "Eka Dharma Putra",
                description: "Seorang anak yang memiliki kemampuan khusus harus menghadapi makhluk gaib di hutan belantara."
            },
            {
                title: "Surat dari Kematian ",
                author: "Adham T. Fusama",
                description: "Cerita tentang mahasiswa yang menerima surat misterius dari dunia gaib, yang membawa petaka di kampusnya."
            },
            {
                title: "Jangan Pergi ke Gunung Lawu",
                author: "Ardian Kresna",
                description: "Novel yang mengungkap rahasia gelap tentang makhluk astral di Gunung Lawu."
            },
            {
                title: "Malam Satu Suro",
                author: "Putu Wijaya",
                description: "Sebuah cerita tentang tradisi dan malam yang penuh misteri di mana dunia manusia dan gaib bertemu."
            },
            {
                title: "Kutukan Cermin Tua",
                author: "Abdullah Harahap",
                description: "emakan korban bertahun-tahun dan hanya bisa dihentikan dengan tumbal manusia."
            },
            {
                title: "Rumah Belanda",
                author: "Risa Saraswati",
                description: "Sebuah rumah tua peninggalan Belanda menjadi saksi bisu tragedi masa lalu yang penuh misteri"
            },
            {
                title: "Kereta Tengah Malam",
                author: "Ferry Ardiansyah",
                description: "Sebuah kereta api berhantu yang muncul di tengah malam membawa penumpang ke dunia lain."
            },
            {
                title: "Jalan Tanpa Ujung",
                author: "Eka Dharma Putra",
                description: "Sebuah cerita tentang kutukan keluarga yang memakan korban bertahun-tahun dan hanya bisa dihentikan dengan tumbal manusia."
            },
            {
                title: "Suara dari Balik Dinding",
                author: "Devi Saraswati",
                description: "Sebuah dinding tua di sekolah yang menyimpan suara-suara misterius dari masa lalu."
            },
            {
                title: "IT",
                author: "Stephen King",
                description: "Sebuah dinding tua di sekolah yang menyimpan suara-suara misterius dari masa lalu."
            },
            {
                title: "House of Leaves",
                author: "Mark Z. Danielewski",
                description: "Sebuah rumah dengan arsitektur yang terus berubah, lebih besar di dalam daripada di luar, dan menyimpan misteri menyeramkan."
            },
            {
                title: "Mexican Gothic",
                author: "Silvia Moreno-Garcia",
                description: "Seorang wanita muda pergi ke rumah keluarga bangsawan di Meksiko untuk menyelidiki perilaku aneh sepupunya, hanya untuk menemukan kengerian yang terpendam di sana."
            },
            {
                title: "Bird Box",
                author: "Josh Malerman",
                description: "Dunia yang diserang oleh makhluk misterius yang menyebabkan orang menjadi gila saat melihatnya. Cerita berfokus pada seorang wanita dan anak-anaknya yang mencoba bertahan hidup"
            },
            {
                title: "The Exorcist",
                author: "William Peter Blatty",
                description: "Kisah seorang gadis yang dirasuki oleh roh jahat dan perjuangan keluarganya dengan seorang pendeta untuk menyelamatkannya melalui eksorsisme."
            },
            {
                title: "Hell House",
                author: "Richard Matheson",
                description: "Sebuah rumah yang dianggap paling berhantu di dunia menjadi tempat uji coba tim peneliti untuk membuktikan keberadaan supranatural."
            },
            {
                title: "The Turn of the Screw",
                author: "Henry James",
                description: "Seorang pengasuh yang bekerja di rumah terpencil mulai melihat hantu dan menduga bahwa kedua anak asuhnya terlibat dengan entitas tersebut."
            },
            {
                title: "The Phantom of the Opera",
                author: "Gaston Leroux",
                description: "Kisah horor romantis tentang makhluk misterius yang menghantui opera Paris dan terobsesi dengan seorang penyanyi muda."
            },
            {
                title: "The Ruins",
                author: "Scott Smith",
                description: "Sekelompok teman liburan ke reruntuhan kuno di Meksiko, hanya untuk menemukan tanaman pemakan manusia yang mengerikan."
            },
            {
                title: "The Shadow Over Innsmouth",
                author: "H.P. Lovecraft",
                description: "Cerita tentang sebuah kota kecil yang penduduknya memiliki hubungan misterius dengan makhluk laut menyeramkan."
            },  
        ],
        adventure: [
            {
                title: "Jalan Menikung",
                author: "Remy Sylado",
                description: "Sebuah perjalanan ke berbagai tempat dengan konflik budaya dan kepercayaan yang mendalam."
            },
            {
                title: "Edensor",
                author: "Andrea Hirata",
                description: "Perjalanan petualangan dua anak kampung di Eropa untuk mengejar pendidikan dan mencari jati diri."
            },
            {
                title: "Ranah 3 Warna",
                author: "Ahmad Fuadi",
                description: "Perjalanan menuju dewasa dan eksplorasi tempat-tempat baru dalam mengejar pendidikan dan impian."
            },
            {
                title: "Petualangan Anak-anak Pulau",
                author: "Marah Rusli",
                description: "Perjalanan seorang anak yang tinggal di pulau terpencil, mencari kehidupan di luar pulau."
            },
            {
                title: "Musafir Cinta",
                author: "Habiburrahman El Shirazy",
                description: "Kisah seorang pemuda yang berkelana mencari cinta sejati dan kedamaian."
            },
            {
                title: "Jejak Tanah Seberang",
                author: "Fira Basuki",
                description: "Perjalanan melintasi Indonesia untuk menemukan asal-usul keluarga."
            },
            {
                title: "Tapak Jejak di Kalimantan",
                author: "Erna Juwita",
                description: "Kisah petualangan mengeksplorasi hutan Kalimantan yang penuh misteri."
            },
            {
                title: "Di Atas Lautan Lepas",
                author: "Hafalan Ujian",
                description: "Petualangan melintasi samudra untuk menemukan kehidupan baru."
            },
            {
                title: "Rimba Berdarah",
                author: "Rahmat Saleh",
                description: "Petualangan dalam hutan belantara yang penuh ancaman."
            },
            {
                title: "Bintang Jatuh di Puncak Gunung",
                author: "Iwan Setiawan",
                description: "Perjalanan seorang pendaki yang mencari arti hidup di puncak gunung."
            },
            {
                title: "Kafilah",
                author: "Asma Nadia",
                description: "Sebuah kisah petualangan yang mengisahkan perjalanan panjang seorang tokoh dalam mencari arti hidup."
            },
            {
                title: "Rimba Mahameru",
                author: "Firman Pratama",
                description: "Kisah tentang pendakian gunung Mahameru yang berbahaya dan penuh dengan kejutan."
            },
            {
                title: "Misteri Pulau Terlarang",
                author: "Darmansyah Djojo",
                description: "Petualangan anak muda yang menyelidiki sebuah pulau yang penuh dengan rahasia dan ancaman."
            },
            {
                title: "Matahari di Tengah Hutan",
                author: "Made Wijaya",
                description: "Petualangan seorang pemuda Bali yang mencoba menemukan keberanian dalam menjelajahi hutan misterius."
            },
            {
                title: "Jejak di Tanah Papua",
                author: "Agus Priyanto",
                description: "Sebuah petualangan untuk mengungkap budaya dan tradisi Papua yang menantang dan penuh misteri."
            },
            {
                title: "Si Anak Gunung",
                author: "Tan Malaka",
                description: "Petualangan seorang pemuda dalam berjuang untuk kemerdekaan, dengan latar belakang gunung yang penuh perjuangan."
            },
            {
                title: "Jejak Petualangan Sang Penyair",
                author: "Asmaraman S. Kho Ping Hoo",
                description: "Kisah petualangan seorang penyair yang melakukan perjalanan spiritual dalam mencari makna hidup."
            },
            {
                title: "Dari Hutan ke Kota",
                author: "Didi Sasono",
                description: "Kisah petualangan seseorang yang datang dari pedalaman, menghadapi dunia kota yang serba modern."
            },
            {
                title: "Melodi dari Timur",
                author: "Tika Bravani",
                description: "Petualangan seorang musisi yang melakukan perjalanan mencari inspirasi di berbagai tempat di Indonesia."
            },
            {
                title: "Moby-Dick",
                author: "Herman Melville",
                description: "Perjalanan seorang pelaut bernama Ishmael dalam mengejar paus besar yang disebut Moby-Dick."
            },
            {
                title: "Journey to the Center of the Earth",
                author: "Jules Verne",
                description: "Petualangan mengesankan saat sekelompok ilmuwan melakukan ekspedisi ke pusat bumi."
            },
            {
                title: "The Adventures of Tom Sawyer",
                author: "Mark Twain",
                description: "Kisah petualangan Tom Sawyer yang penuh trik dan kelicikan di sepanjang sungai Mississippi."
            },
            {
                title: "The Call of the Wild",
                author: "Jack London",
                description: "Perjalanan sebuah anjing pelacak bernama Buck yang dibawa ke alam liar Alaska."
            },
            {
                title: "Robinson Crusoe",
                author: "Daniel Defoe",
                description: "Kisah seorang pria yang terdampar di sebuah pulau terpencil dan bertahan hidup seorang diri."
            },
            {
                title: "The Secret Garden",
                author: "Frances Hodgson Burnett",
                description: "Kisah petualangan seorang gadis muda yang menemukan taman tersembunyi yang mengubah hidupnya."
            },
            {
                title: "The Jungle Book",
                author: "Rudyard Kipling",
                description: "Petualangan Mowgli, seorang anak manusia yang dibesarkan oleh serigala di hutan India."
            },
            {
                title: "The Lost World",
                author: "Arthur Conan Doyle",
                description: "Petualangan sekelompok ilmuwan yang menemukan dunia prasejarah yang penuh dengan dinosaurus."
            },
            {
                title: "The Red Badge of Courage",
                author: "Stephen Crane",
                description: "Petualangan seorang pemuda yang berjuang dalam Perang Sipil Amerika, menghadapi ketakutan dan kehormatan."
            },
            {
                title: "The Big Wave",
                author: "Pearl S. Buck",
                description: "Petualangan seorang anak yang berjuang untuk bertahan hidup setelah bencana alam yang menghancurkan desanya."
            },
            {
                title: "The Shipwrecked Sailor",
                author: "Anonymous",
                description: "Kisah petualangan seorang pelaut yang selamat dari karamnya kapal dan terdampar di tanah asing."
            },
            {
                title: "The Island of the Blue Dolphins",
                author: "Scott O'Dell",
                description: "Kisah seorang gadis yang terdampar sendirian di pulau terpencil dan bertahan hidup dengan kecerdikan."
            },
            {
                title: "The City of Ember",
                author: "Jeanne DuPrau",
                description: "Petualangan dua anak muda yang mencoba melarikan diri dari kota yang terperangkap dalam kegelapan."
            },
            {
                title: "The Jungle",
                author: "Upton Sinclair",
                description: "Petualangan penuh perjuangan hidup para imigran di Chicago pada abad ke-20."
            },
            {
                title: "The Scarlet Pimpernel",
                author: "Baroness Orczy",
                description: "Kisah petualangan seorang pria yang menyamar sebagai pahlawan untuk menyelamatkan orang-orang yang akan dihukum mati selama Revolusi Prancis."
            },
        ]
    };

    // Get the recommendations for the selected genre
    const resultList = document.getElementById('recommendations');
    resultList.innerHTML = ""; // Clear previous results

    if (recommendations[genre]) {
        recommendations[genre].forEach(book => {
            const listItem = document.createElement('li');
            
            // Create content for each recommendation
            listItem.innerHTML = `
                <h3><strong>Judul:</strong> ${book.title}</h3>
                <p><strong>Penulis:</strong> ${book.author}</p>
                <p><strong>Deskripsi:</strong> ${book.description}</p>
            `;
            resultList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = "Genre tidak ditemukan.";
        resultList.appendChild(listItem);
    }
});
