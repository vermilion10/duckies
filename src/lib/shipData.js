const SHIP_BASE = [
  {
    id: "akizuki",
    name: "Akizuki",
    kanji: "秋月",
    historicalImage: "/assets/images/Ships/akizuki.jpg",
    kancolleImage: "/assets/images/Characters/akizuki_kancolle.webp",
    survived: false,
    statsValues: ["Maizuru Naval Arsenal", "2 July 1941", "11 June 1942", "2,700 t (standard)", "33 knots", "263 men"],
  },
  {
    id: "teruzuki",
    name: "Teruzuki",
    kanji: "照月",
    historicalImage: "/assets/images/Ships/teruzuki.jpg",
    kancolleImage: "/assets/images/Characters/teruzuki_kancolle.webp",
    survived: false,
    statsValues: ["Mitsubishi Nagasaki", "21 Nov 1941", "31 Aug 1942", "2,700 t (standard)", "33 knots", "~4 months active"],
  },
  {
    id: "hatsuzuki",
    name: "Hatsuzuki",
    kanji: "初月",
    historicalImage: "/assets/images/Ships/hatsuzuki.jpg",
    kancolleImage: "/assets/images/Characters/hatsuzuki_kancolle.webp",
    survived: false,
    statsValues: ["Maizuru Naval Arsenal", "3 April 1942", "29 Dec 1942", "2,700 t (standard)", "33 knots", "Cape Engaño"],
  },
  {
    id: "suzutsuki",
    name: "Suzutsuki",
    kanji: "涼月",
    historicalImage: "/assets/images/Ships/suzutsuki.jpg",
    kancolleImage: "/assets/images/Characters/suzutsuki_kancolle.webp",
    survived: true,
    statsValues: ["Mitsubishi Nagasaki", "3 March 1942", "29 Dec 1942", "2,700 t (standard)", "33 knots", "War survivor"],
  },
];

const SHIP_TRANSLATIONS = {
  id: [
    // AKIZUKI
    {
      nameMeaning: "Bulan Musim Gugur",
      designation: "Kapal Perusak No. 104 → Akizuki",
      imageCaption: "IJN Akizuki dalam pelayaran uji coba di Teluk Miyazu, 17 Mei 1942",
      biography: [
        "Akizuki (秋月) adalah kapal pertama dari kelas kapal perusak anti-udara terbaik milik Angkatan Laut Kekaisaran Jepang. Namanya berarti \"Bulan Musim Gugur\" — sebuah nama puitis yang mencerminkan tradisi penamaan kapal perusak Jepang dengan fenomena alam.",
        "Dibangun di galangan kapal Maizuru Naval Arsenal, Akizuki diluncurkan pada 2 Juli 1941 dan selesai pada 11 Juni 1942. Ia menjadi kapal perusak pertama yang dilengkapi meriam dual-purpose Type 98 100mm yang revolusioner — senjata anti-udara terbaik IJN.",
        "Akizuki berpartisipasi dalam Pertempuran Santa Cruz pada Oktober 1942, di mana ia bertugas sebagai pengawal kapal induk. Ia juga terlibat dalam berbagai operasi di Kepulauan Solomon dan kampanye Filipina."
      ],
      statsLabels: ["Dibangun di", "Diluncurkan", "Selesai", "Displacement", "Kecepatan", "Awak"],
      kancolleNote: "Di KanColle, Akizuki adalah pemimpin dari Akizuki-class sisters. Ia digambarkan sebagai gadis yang bertanggung jawab dan serius, selalu berusaha melindungi armada dari ancaman udara. Kemampuan anti-udaranya yang luar biasa mencerminkan peran historisnya. Ia memiliki rambut hitam panjang dan memakai seragam pelaut khas.",
      timeline: [
        { date: "2 Juli 1941", title: "Peluncuran", description: "Diluncurkan di Maizuru Naval Arsenal sebagai kapal pertama kelasnya.", detail: "Proses pembangunan Akizuki dimulai sebagai 'Kapal Perusak No. 104' sebelum resmi dinamai. Maizuru Naval Arsenal adalah salah satu galangan kapal terkemuka milik IJN, yang juga membangun kapal penjelajah kelas Myoko. Peluncuran dilakukan di hadapan pejabat Angkatan Laut dan menandai era baru dalam desain kapal perusak Jepang." },
        { date: "11 Juni 1942", title: "Komisioning", description: "Resmi bergabung dengan Angkatan Laut Kekaisaran Jepang.", detail: "Saat dikomisinikan, Akizuki langsung ditugaskan ke Divisi Perusak 61. Meriam Type 98 100mm-nya mampu menembak sasaran udara hingga ketinggian 14.000 meter dengan laju tembak tinggi — jauh melampaui kemampuan kapal perusak lain di kelasnya saat itu." },
        { date: "26 Oktober 1942", title: "Pertempuran Santa Cruz", description: "Bertugas sebagai pengawal kapal induk dalam pertempuran melawan Angkatan Laut AS.", detail: "Akizuki melindungi kapal induk Zuikaku dan Shokaku dari serangan udara Amerika. Meriam anti-udaranya berhasil menembak jatuh beberapa pesawat musuh. Pertempuran Santa Cruz adalah salah satu pertempuran kapal induk terbesar di Pasifik, mengakibatkan kerusakan serius pada Shokaku dan tenggelamnya USS Hornet." },
        { date: "1943–1944", title: "Kampanye Pasifik", description: "Terlibat dalam berbagai operasi di Solomon, Truk, dan Filipina.", detail: "Akizuki menjalani misi pengawalan ke pangkalan utama IJN di Truk Lagoon dan terlibat dalam Pertempuran Laut Filipina Juni 1944 — yang dikenal sebagai 'Great Marianas Turkey Shoot'. Selama periode ini, armada Jepang mengalami kerugian pesawat yang tidak dapat digantikan." },
        { date: "25 Oktober 1944", title: "Pertempuran Teluk Leyte", description: "Tenggelam di lepas Tanjung Engaño setelah terkena serangan udara dan kemungkinan torpedo.", detail: "Pada hari terakhirnya, Akizuki berjuang keras melindungi kapal induk Jepang dari gelombang serangan udara Amerika. Ia terkena bom langsung yang memicu kebakaran besar, kemudian terjadi ledakan sekunder yang diduga berasal dari torpedo miliknya sendiri. Akizuki meledak dahsyat dan tenggelam dalam waktu singkat. Dari 263 awak, banyak yang gugur." }
      ],
      fate: "Akizuki tenggelam pada 25 Oktober 1944 selama Pertempuran di lepas Tanjung Engaño, bagian dari Pertempuran Teluk Leyte yang lebih besar. Ia meledak dan tenggelam dengan cepat — kemungkinan besar akibat ledakan torpedo miliknya sendiri yang terpicu oleh serangan udara Amerika. Dari 263 awak, banyak yang gugur dalam insiden ini."
    },

    // TERUZUKI
    {
      nameMeaning: "Bulan yang Bersinar / Bulan Terang",
      designation: "Kapal Perusak No. 105 → Teruzuki",
      imageCaption: "IJN Teruzuki saat operasi malam di perairan Solomon, 1942",
      biography: [
        "Teruzuki (照月) adalah kapal kedua dari kelas Akizuki, dengan nama yang berarti \"Bulan yang Bersinar\" atau \"Bulan Terang\". Ia dibangun di Mitsubishi Nagasaki Shipyard dan selesai pada 31 Agustus 1942.",
        "Teruzuki memiliki karier yang singkat namun penuh aksi. Ia bertugas sebagai kapal bendera Laksamana Muda Raizō Tanaka, seorang taktisi legendaris dalam operasi malam dan misi resuplai di Kepulauan Solomon — yang dikenal sebagai \"Tokyo Express\".",
        "Hanya empat bulan setelah komisioning, Teruzuki tenggelam dalam pertempuran melawan kapal torpedo motor Amerika (PT boats). Penemuannya di dasar laut pada tahun 2025 menjadi berita besar di dunia arkeologi maritim."
      ],
      statsLabels: ["Dibangun di", "Diluncurkan", "Selesai", "Displacement", "Kecepatan", "Masa Aktif"],
      kancolleNote: "Di KanColle, Teruzuki digambarkan sebagai adik yang ceria dan energik. Berbeda dengan kakaknya Akizuki yang serius, Teruzuki lebih riang dan suka bercanda. Ia memiliki kemampuan anti-udara yang setara dengan Akizuki. Rambut pirang-kecokelatannya menjadi ciri khasnya.",
      timeline: [
        { date: "21 November 1941", title: "Peluncuran", description: "Diluncurkan di galangan Mitsubishi, Nagasaki.", detail: "Teruzuki dibangun di galangan Mitsubishi Nagasaki, fasilitas industri terbesar di Jepang saat itu. Pembangunannya berlangsung relatif cepat berkat pengalaman Mitsubishi dalam membangun kapal-kapal IJN sebelumnya, termasuk kapal induk Akagi." },
        { date: "31 Agustus 1942", title: "Komisioning", description: "Resmi bergabung dengan IJN dan ditugaskan ke Divisi Perusak 61.", detail: "Teruzuki dipilih sebagai kapal bendera Laksamana Muda Raizō Tanaka — dijuluki 'Tanaka si Keras Kepala' oleh pihak Amerika karena keberaniannya. Tanaka adalah ahli taktik perang malam yang ditakuti musuh dan dihormati anak buahnya." },
        { date: "Oktober 1942", title: "Pertempuran Santa Cruz", description: "Bertugas sebagai pengawal dan terluka akibat torpedo udara.", detail: "Meski terkena torpedo dari pesawat Amerika, Teruzuki berhasil bertahan dan melanjutkan misi. Kerusakan berhasil dikendalikan oleh awak yang terlatih, menampilkan ketangguhan desain kelas Akizuki bahkan dalam kondisi tempur aktif." },
        { date: "November 1942", title: "\"Tokyo Express\"", description: "Berpartisipasi dalam misi resuplai berbahaya ke Guadalcanal sebagai kapal bendera Laksamana Tanaka.", detail: "\"Tokyo Express\" adalah julukan Amerika untuk operasi resuplai malam hari IJN ke Guadalcanal. Teruzuki memimpin konvoi yang membawa pasokan vital bagi pasukan darat Jepang. Misi ini sangat berbahaya karena kapal-kapal AS terus memperketat pengawasan perairan Solomon di malam hari." },
        { date: "12 Desember 1942", title: "Tenggelam", description: "Diserang oleh PT boats di perairan dekat Savo Island dan tenggelam.", detail: "PT-37 dan PT-40 menembakkan torpedo yang menghantam ruang mesin Teruzuki, memadamkan seluruh tenaga kapal. Api tidak dapat dipadamkan dan menjalar ke gudang amunisi. Laksamana Tanaka sendiri terluka dan harus dievakuasi sebelum kapal meledak. Teruzuki tenggelam hanya 4 bulan setelah dikomisinikan. Pada 2025, bangkainya ditemukan di dasar Iron Bottom Sound." }
      ],
      fate: "Teruzuki tenggelam pada 12 Desember 1942 di perairan dekat Savo Island, Kepulauan Solomon. Saat bertugas sebagai kapal bendera dalam misi resuplai \"Tokyo Express\", ia diserang oleh PT boat Amerika PT-37 dan PT-40. Torpedo menghantam bagian mesin kapal, menyebabkan kebakaran hebat yang akhirnya mencapai gudang amunisi. Kapal meledak dan tenggelam. Pada 2025, bangkai kapal ini ditemukan di dasar laut Iron Bottom Sound."
    },

    // HATSUZUKI
    {
      nameMeaning: "Bulan Pertama / Bulan Sabit Awal",
      designation: "Kapal Perusak No. 107 → Hatsuzuki",
      imageCaption: "IJN Hatsuzuki dalam pertempuran terakhirnya di Tanjung Engaño, Oktober 1944",
      biography: [
        "Hatsuzuki (初月) adalah kapal ketiga dari kelas Akizuki, dengan nama yang berarti \"Bulan Pertama\" atau \"Bulan Sabit Awal\". Ia dibangun di Maizuru Naval Arsenal dan selesai pada 29 Desember 1942.",
        "Hatsuzuki berpartisipasi dalam berbagai operasi penting di Pasifik, termasuk pertempuran di Laut Filipina dan Pertempuran Teluk Leyte. Ia dikenal karena pertempuran terakhirnya yang heroik di lepas Tanjung Engaño.",
        "Dalam pertempuran terakhirnya, Hatsuzuki melawan sendirian melawan armada kapal penjelajah ringan dan kapal perusak Amerika untuk memberi waktu bagi kapal induk Jepang yang tersisa untuk melarikan diri. Ia berjuang selama berjam-jam sebelum akhirnya tenggelam — sebuah perjuangan terakhir yang menjadi legenda."
      ],
      statsLabels: ["Dibangun di", "Diluncurkan", "Selesai", "Displacement", "Kecepatan", "Pertempuran Terakhir"],
      kancolleNote: "Di KanColle, Hatsuzuki digambarkan sebagai gadis yang tenang, pendiam, dan sedikit misterius. Meskipun jarang bicara, ia sangat setia dan berdedikasi dalam tugasnya melindungi armada. Sifatnya yang stoic mencerminkan perjuangan heroik kapal aslinya dalam pertempuran terakhir. Ia memiliki rambut pendek berwarna cokelat.",
      timeline: [
        { date: "3 April 1942", title: "Peluncuran", description: "Diluncurkan di Maizuru Naval Arsenal.", detail: "Hatsuzuki adalah kapal ketiga yang selesai dari kelas Akizuki, menandai percepatan produksi program kapal perusak anti-udara IJN. Peluncurannya di Maizuru dilakukan di tengah meningkatnya tekanan perang di Pasifik, di mana ancaman udara Sekutu semakin terasa." },
        { date: "29 Desember 1942", title: "Komisioning", description: "Bergabung dengan IJN dan ditugaskan ke operasi di Pasifik.", detail: "Hatsuzuki bergabung dengan IJN pada hari yang sama dengan Suzutsuki, memperkuat Divisi Perusak 61. Dengan pengalaman pertempuran kakak-kakaknya sebagai pelajaran, awak Hatsuzuki dilatih secara intensif untuk menghadapi realita perang Pasifik yang semakin sengit." },
        { date: "1943", title: "Operasi Solomon", description: "Bertugas dalam berbagai operasi pengawalan dan resuplai di Kepulauan Solomon.", detail: "Selama 1943, Hatsuzuki menjalani misi pengawalan yang melelahkan di perairan Solomon yang berbahaya. Ia sering beroperasi di malam hari untuk menghindari serangan udara Sekutu, mengandalkan radar dan kemampuan anti-udara kelas Akizuki yang superior." },
        { date: "19–20 Juni 1944", title: "Pertempuran Laut Filipina", description: "Bertugas sebagai pengawal kapal induk dalam pertempuran yang dikenal sebagai \"Great Marianas Turkey Shoot\".", detail: "Pertempuran ini menjadi bencana bagi penerbangan IJN — Jepang kehilangan sekitar 480 pesawat hanya dalam dua hari, sementara Amerika hanya kehilangan 130. Hatsuzuki berjuang keras menghalau serangan udara Amerika yang bertubi-tubi, namun armada kapal induk Jepang menderita kerusakan parah." },
        { date: "25 Oktober 1944", title: "Perjuangan Terakhir", description: "Melawan sendirian melawan armada AS di Tanjung Engaño untuk melindungi kapal induk Jepang yang mundur. Tenggelam setelah pertempuran heroik berjam-jam.", detail: "Ini adalah salah satu pertempuran terakhir yang paling heroik dalam sejarah angkatan laut. Hatsuzuki memilih tetap di tempatnya melawan empat cruiser ringan dan sembilan kapal perusak Amerika — seorang diri — agar sisa armada Jepang bisa melarikan diri. Ia menembakkan seluruh amunisinya sebelum akhirnya tenggelam. Awak yang tersisa sekitar 100 orang ikut gugur bersamanya." }
      ],
      fate: "Hatsuzuki tenggelam pada 25 Oktober 1944 di lepas Tanjung Engaño selama Pertempuran Teluk Leyte. Dalam salah satu perjuangan terakhir paling heroik dalam sejarah angkatan laut, Hatsuzuki sendirian melawan cruiser ringan dan kapal perusak Amerika untuk memberi waktu bagi kapal induk Jepang yang tersisa untuk melarikan diri. Ia berjuang selama berjam-jam, menembakkan semua senjatanya hingga amunisi habis, sebelum akhirnya tenggelam. Seluruh awaknya yang tersisa — sekitar 100 orang — turut gugur."
    },

    // SUZUTSUKI
    {
      nameMeaning: "Bulan Sejuk (di Musim Gugur)",
      designation: "Kapal Perusak No. 106 → Suzutsuki",
      imageCaption: "IJN Suzutsuki mundur dengan haluan hancur setelah Operasi Ten-Go, April 1945",
      biography: [
        "Suzutsuki (涼月) adalah kapal keempat dari kelas Akizuki, dengan nama yang berarti \"Bulan Sejuk di Musim Gugur\". Ia dibangun di Mitsubishi Nagasaki Shipyard dan selesai pada 29 Desember 1942. Suzutsuki adalah anggota kelas Akizuki yang paling lama bertahan.",
        "Suzutsuki paling terkenal karena partisipasinya dalam Operasi Ten-Go — misi bunuh diri terakhir kapal perang Yamato pada April 1945. Sebagai salah satu dari delapan kapal pengawal Yamato, Suzutsuki terkena torpedo Amerika yang menghancurkan seluruh haluan kapalnya.",
        "Dalam momen yang menjadi legenda, Suzutsuki berhasil selamat dengan cara mundur — berlayar terbalik (stern-first) sepanjang jalan kembali ke pelabuhan. Kisah keberanian awaknya menjadi salah satu cerita paling menakjubkan dalam sejarah maritim."
      ],
      statsLabels: ["Dibangun di", "Diluncurkan", "Selesai", "Displacement", "Kecepatan", "Status"],
      kancolleNote: "Di KanColle, Suzutsuki digambarkan sebagai gadis yang kuat, tangguh, dan sedikit keras kepala — mencerminkan keberanian kapal aslinya yang menolak untuk tenggelam. Ia bangga dengan ketahanannya dan sering menyebut bahwa ia \"tidak akan tenggelam semudah itu\". Kemampuan bertahannya yang tinggi dalam game mencerminkan kisah historisnya yang luar biasa.",
      timeline: [
        { date: "3 Maret 1942", title: "Peluncuran", description: "Diluncurkan di galangan Mitsubishi, Nagasaki.", detail: "Suzutsuki diluncurkan di galangan yang sama dengan Teruzuki, menandai hubungan erat antara kedua kapal saudara. Saat diluncurkan, perang Pasifik sudah berlangsung tiga bulan — kapal ini lahir langsung ke dalam dunia yang dilanda perang." },
        { date: "29 Desember 1942", title: "Komisioning", description: "Bergabung dengan IJN pada hari yang sama dengan Hatsuzuki.", detail: "Komisioning bersamaan Suzutsuki dan Hatsuzuki pada hari yang sama menandai penguatan signifikan kemampuan anti-udara IJN. Bersama, kedua kapal ini memperkuat Divisi Perusak 61 yang kini menjadi salah satu divisi paling tangguh dalam armada Jepang." },
        { date: "1943–1944", title: "Kampanye Pasifik", description: "Bertugas dalam berbagai operasi pengawalan, termasuk di Truk dan Filipina.", detail: "Suzutsuki menjalani tahun-tahun perang yang panjang dan melelahkan, bertugas dalam puluhan misi pengawalan di seluruh Pasifik. Ia selamat dari beberapa pertempuran besar yang menghancurkan kapal-kapal saudaranya, membuktikan ketangguhan desain kelas Akizuki." },
        { date: "Januari 1945", title: "Kerusakan Berat", description: "Terkena kerusakan berat akibat serangan udara, diperbaiki untuk misi terakhir.", detail: "Serangan udara Amerika yang semakin intensif menghantam Suzutsuki dengan kerusakan serius. Namun galangan kapal IJN berhasil memperbaikinya — sebuah keputusan yang kontroversial mengingat kondisi perang yang sudah sangat tidak menguntungkan bagi Jepang. Perbaikan ini memungkinkannya ikut dalam Operasi Ten-Go." },
        { date: "7 April 1945", title: "Operasi Ten-Go", description: "Mengawal Yamato dalam misi terakhir. Haluan hancur oleh torpedo, namun berhasil mundur ke pelabuhan dengan berlayar terbalik.", detail: "Operasi Ten-Go adalah misi bunuh diri armada yang dirancang untuk mengorbankan Yamato sebagai pengalih perhatian. Torpedo Amerika menghancurkan haluan Suzutsuki sepenuhnya — namun awaknya yang luar biasa berhasil mengendalikan kapal yang rusak parah ini dan berlayar mundur (stern-first) sejauh ratusan kilometer kembali ke Sasebo. Kisah ini menjadi legenda ketahanan dalam perang." },
        { date: "20 November 1945", title: "Dicoret dari Register", description: "Nama dicoret dari daftar angkatan laut. Digunakan sebagai pemecah gelombang hingga dibongkar.", detail: "Setelah Jepang menyerah, Suzutsuki yang rusak parah tidak dapat diperbaiki secara ekonomis. Ia digunakan sebagai pemecah gelombang (breakwater) di pelabuhan — nasib yang ironis namun penuh makna bagi kapal yang telah menolak tenggelam. Pada November 1945, namanya resmi dicoret dari register Angkatan Laut Kekaisaran Jepang." }
      ],
      fate: "Suzutsuki selamat dari perang — satu-satunya dari empat kapal Akizuki-class awal yang bertahan. Setelah haluannya hancur dalam Operasi Ten-Go, ia berlayar mundur kembali ke pelabuhan Sasebo. Kapal yang rusak parah ini kemudian digunakan sebagai pemecah gelombang (breakwater) di pelabuhan. Pada 20 November 1945, namanya dicoret dari register angkatan laut dan ia dijual untuk dibongkar. Suzutsuki adalah anggota kelasnya yang paling lama bertugas."
    }
  ],

  en: [
    // AKIZUKI
    {
      nameMeaning: "Autumn Moon",
      designation: "Destroyer No. 104 → Akizuki",
      imageCaption: "IJN Akizuki on trial run in Miyazu Bay, 17 May 1942",
      biography: [
        "Akizuki (秋月) was the lead ship of the finest anti-aircraft destroyer class in the Imperial Japanese Navy. Her name means \"Autumn Moon\" — a poetic name reflecting the Japanese tradition of naming destroyers after natural phenomena.",
        "Built at Maizuru Naval Arsenal, Akizuki was launched on 2 July 1941 and completed on 11 June 1942. She became the first destroyer equipped with the revolutionary Type 98 dual-purpose 100mm gun — the best anti-aircraft weapon in the IJN arsenal.",
        "Akizuki participated in the Battle of Santa Cruz in October 1942, serving as a carrier escort. She also took part in various operations in the Solomon Islands and the Philippines campaign."
      ],
      statsLabels: ["Built at", "Launched", "Completed", "Displacement", "Speed", "Crew"],
      kancolleNote: "In KanColle, Akizuki is the leader of the Akizuki-class sisters. She is portrayed as a responsible and serious girl, always striving to protect the fleet from aerial threats. Her outstanding anti-aircraft capability reflects her historical role. She has long black hair and wears a classic sailor uniform.",
      timeline: [
        { date: "2 July 1941", title: "Launched", description: "Launched at Maizuru Naval Arsenal as the lead ship of her class.", detail: "Akizuki's construction began under the designation 'Destroyer No. 104' before receiving her name. Maizuru Naval Arsenal was one of the IJN's premier shipyards, also responsible for the Myoko-class cruisers. Her launch marked a new era in Japanese destroyer design, prioritizing anti-aircraft capability over torpedo armament." },
        { date: "11 June 1942", title: "Commissioned", description: "Formally joined the Imperial Japanese Navy.", detail: "Upon commissioning, Akizuki was assigned to Destroyer Division 61. Her Type 98 100mm guns could engage aerial targets up to 14,000 meters altitude with a high rate of fire — far surpassing any other destroyer in the IJN at the time. Naval observers noted her as a significant leap forward in fleet air defense." },
        { date: "26 October 1942", title: "Battle of Santa Cruz", description: "Served as a carrier escort in the carrier battle against the US Navy.", detail: "Akizuki shielded the carriers Zuikaku and Shokaku from American air attacks, her guns claiming several aircraft. The Battle of Santa Cruz was one of the Pacific's largest carrier engagements — resulting in serious damage to Shokaku and the sinking of USS Hornet. Akizuki's anti-aircraft fire was credited as a key factor in protecting the Japanese carriers." },
        { date: "1943–1944", title: "Pacific Campaign", description: "Involved in various operations at the Solomons, Truk, and the Philippines.", detail: "Akizuki conducted escort missions to the IJN's main base at Truk Lagoon and participated in the Battle of the Philippine Sea in June 1944 — known as the 'Great Marianas Turkey Shoot'. During this period the Japanese navy suffered irreplaceable losses in experienced pilots and aircraft that would prove decisive for the rest of the war." },
        { date: "25 October 1944", title: "Battle of Leyte Gulf", description: "Sunk off Cape Engaño after being struck by air attack and possibly torpedoes.", detail: "On her final day, Akizuki fought fiercely to defend the Japanese carriers against wave after wave of American air attacks. A direct bomb hit triggered a large fire, followed by what is believed to have been a catastrophic secondary explosion from her own torpedoes. Akizuki detonated violently and sank rapidly in the waters off Cape Engaño. Of her 263-man crew, many perished." }
      ],
      fate: "Akizuki sank on 25 October 1944 during the Battle off Cape Engaño, part of the larger Battle of Leyte Gulf. She exploded and sank rapidly — most likely due to her own torpedoes detonating after being triggered by the American air attack. Of her 263-man crew, many perished in the incident."
    },

    // TERUZUKI
    {
      nameMeaning: "Shining Moon / Illuminated Moon",
      designation: "Destroyer No. 105 → Teruzuki",
      imageCaption: "IJN Teruzuki during a night operation in the Solomon Islands, 1942",
      biography: [
        "Teruzuki (照月) was the second ship of the Akizuki class, her name meaning \"Shining Moon\" or \"Illuminated Moon\". She was built at Mitsubishi's Nagasaki Shipyard and completed on 31 August 1942.",
        "Teruzuki had a brief but action-packed career. She served as the flagship of Rear Admiral Raizō Tanaka, a legendary tactician of night operations and resupply missions in the Solomon Islands — known as the \"Tokyo Express\".",
        "Just four months after commissioning, Teruzuki was sunk in combat against American PT boats in the waters of the Solomon Islands. Her discovery on the seafloor in 2025 made headlines in the world of maritime archaeology."
      ],
      statsLabels: ["Built at", "Launched", "Completed", "Displacement", "Speed", "Active Service"],
      kancolleNote: "In KanColle, Teruzuki is portrayed as a cheerful and energetic younger sister. Unlike her serious elder sister Akizuki, Teruzuki is lively and playful. She possesses anti-aircraft capabilities equal to Akizuki. Her blonde-brownish hair is her trademark feature.",
      timeline: [
        { date: "21 November 1941", title: "Launched", description: "Launched at Mitsubishi's Nagasaki shipyard.", detail: "Teruzuki was built at Mitsubishi's Nagasaki facility, one of Japan's largest industrial complexes and responsible for major warships including the carrier Akagi. Construction proceeded efficiently, reflecting Mitsubishi's deep experience with IJN warship production." },
        { date: "31 August 1942", title: "Commissioned", description: "Formally joined the IJN and assigned to Destroyer Division 61.", detail: "Teruzuki was selected as the flagship of Rear Admiral Raizō Tanaka — nicknamed 'Tenacious Tanaka' by the Americans for his relentless aggression. Tanaka was the IJN's foremost expert in night surface warfare and the feared commander of the Tokyo Express supply runs to Guadalcanal." },
        { date: "October 1942", title: "Battle of Santa Cruz", description: "Served as an escort and was damaged by an aerial torpedo.", detail: "Despite taking an aerial torpedo hit during the battle, Teruzuki's crew managed to control the damage and keep her operational. This demonstrated the resilience of the Akizuki-class design under combat conditions. She continued her duties protecting the carrier group throughout the engagement." },
        { date: "November 1942", title: "\"Tokyo Express\"", description: "Participated in dangerous resupply missions to Guadalcanal as flagship of Admiral Tanaka.", detail: "The 'Tokyo Express' was the American nickname for IJN night supply runs to Guadalcanal. As Tanaka's flagship, Teruzuki led convoys carrying vital supplies to Japanese ground forces. These missions ran a deadly gauntlet of American aircraft by day and PT boats by night, with the battle for Guadalcanal hanging in the balance." },
        { date: "12 December 1942", title: "Sunk", description: "Attacked by PT boats off Savo Island and sunk.", detail: "PT-37 and PT-40 fired torpedoes that struck Teruzuki's engine room, killing all power. The resulting fire could not be contained and reached the ammunition magazine. Admiral Tanaka, wounded in the attack, was evacuated before the ship detonated. Teruzuki sank just four months after commissioning. In 2025, her wreck was discovered on the floor of Iron Bottom Sound." }
      ],
      fate: "Teruzuki sank on 12 December 1942 off Savo Island in the Solomon Islands. While serving as flagship on a \"Tokyo Express\" resupply run, she was attacked by American PT boats PT-37 and PT-40. A torpedo struck the engine room, causing a fierce fire that eventually reached the ammunition magazine. The ship exploded and sank. In 2025, her wreck was discovered on the floor of Iron Bottom Sound."
    },

    // HATSUZUKI
    {
      nameMeaning: "First Moon / New Crescent Moon",
      designation: "Destroyer No. 107 → Hatsuzuki",
      imageCaption: "IJN Hatsuzuki during her final battle off Cape Engaño, October 1944",
      biography: [
        "Hatsuzuki (初月) was the third ship of the Akizuki class, her name meaning \"First Moon\" or \"New Crescent Moon\". She was built at Maizuru Naval Arsenal and completed on 29 December 1942.",
        "Hatsuzuki participated in numerous critical operations across the Pacific, including the Battle of the Philippine Sea and the Battle of Leyte Gulf. She is best remembered for her heroic final stand off Cape Engaño.",
        "In her final battle, Hatsuzuki fought alone against a force of American light cruisers and destroyers to buy time for the surviving Japanese carriers to escape. She fought on for hours before finally sinking — a last stand that became legend."
      ],
      statsLabels: ["Built at", "Launched", "Completed", "Displacement", "Speed", "Last Battle"],
      kancolleNote: "In KanColle, Hatsuzuki is portrayed as a calm, quiet, and slightly mysterious girl. Though she rarely speaks, she is fiercely loyal and dedicated to her duty of protecting the fleet. Her stoic nature mirrors the heroic struggle of her namesake ship in her final battle. She has short brown hair.",
      timeline: [
        { date: "3 April 1942", title: "Launched", description: "Launched at Maizuru Naval Arsenal.", detail: "Hatsuzuki was the third completed ship of the Akizuki class, signaling accelerating production of the IJN's anti-aircraft destroyer program. Her launch came as American air power in the Pacific was rapidly growing, making the class's specialized anti-aircraft role ever more critical." },
        { date: "29 December 1942", title: "Commissioned", description: "Joined the IJN and assigned to Pacific operations.", detail: "Hatsuzuki joined the IJN on the same day as Suzutsuki, reinforcing Destroyer Division 61. With the combat lessons of Akizuki and Teruzuki already learned, Hatsuzuki's crew was intensively trained to face the increasingly brutal realities of Pacific warfare." },
        { date: "1943", title: "Solomon Operations", description: "Served in various escort and resupply operations in the Solomon Islands.", detail: "Throughout 1943, Hatsuzuki conducted grueling escort missions through the dangerous waters of the Solomon Islands. Operating mainly at night to avoid Allied air attack, she relied heavily on her radar systems and the Akizuki-class's superior anti-aircraft suite to survive in the contested skies." },
        { date: "19–20 June 1944", title: "Battle of the Philippine Sea", description: "Served as a carrier escort in the battle known as the \"Great Marianas Turkey Shoot\".", detail: "This battle was a catastrophe for IJN aviation — Japan lost approximately 480 aircraft in just two days, while the Americans lost only 130. Hatsuzuki fought desperately to repel relentless American air attacks on the carrier force. The lopsided losses left the IJN's carrier air arm effectively destroyed as a fighting force." },
        { date: "25 October 1944", title: "Final Stand", description: "Fought alone against US forces off Cape Engaño to shield retreating Japanese carriers. Sunk after hours of heroic combat.", detail: "In one of naval history's most extraordinary last stands, Hatsuzuki positioned herself between the retreating Japanese carriers and an overwhelming American force of four light cruisers and nine destroyers — alone. She fought for hours, expending every last round of ammunition, before being overwhelmed. Her sacrifice allowed the surviving Japanese carriers to escape. Around 100 crew perished with her." }
      ],
      fate: "Hatsuzuki sank on 25 October 1944 off Cape Engaño during the Battle of Leyte Gulf. In one of the most heroic last stands in naval history, Hatsuzuki alone fought off American light cruisers and destroyers to give the remaining Japanese carriers time to escape. She fought for hours, firing all her weapons until her ammunition was exhausted, before finally going under. Her remaining crew of around 100 men perished with her."
    },

    // SUZUTSUKI
    {
      nameMeaning: "Cool Moon (in Autumn)",
      designation: "Destroyer No. 106 → Suzutsuki",
      imageCaption: "IJN Suzutsuki reversing to port with bow blown off after Operation Ten-Go, April 1945",
      biography: [
        "Suzutsuki (涼月) was the fourth ship of the Akizuki class, her name meaning \"Cool Moon in Autumn\". She was built at Mitsubishi's Nagasaki Shipyard and completed on 29 December 1942. Suzutsuki was the longest-serving member of her class.",
        "Suzutsuki is best known for her participation in Operation Ten-Go — the last suicidal sortie of the battleship Yamato in April 1945. As one of Yamato's eight escort ships, Suzutsuki was struck by an American torpedo that blew off her entire bow.",
        "In a moment that became legend, Suzutsuki survived by reversing — sailing stern-first all the way back to port. The courage of her crew navigating a nearly-destroyed ship in reverse became one of the most remarkable stories in maritime history."
      ],
      statsLabels: ["Built at", "Launched", "Completed", "Displacement", "Speed", "Status"],
      kancolleNote: "In KanColle, Suzutsuki is portrayed as a strong, tough, and slightly stubborn girl — reflecting the defiance of her namesake ship that refused to sink. She takes pride in her resilience and often remarks that she \"won't sink so easily\". Her high survival stats in-game mirror her extraordinary historical story.",
      timeline: [
        { date: "3 March 1942", title: "Launched", description: "Launched at Mitsubishi's Nagasaki shipyard.", detail: "Suzutsuki was launched at the same Mitsubishi facility as her sister Teruzuki, forging a close bond between the two ships. By the time of her launch, the Pacific War was three months old — she was born directly into a world at war, her design already shaped by the conflict's demands." },
        { date: "29 December 1942", title: "Commissioned", description: "Joined the IJN on the same day as Hatsuzuki.", detail: "The simultaneous commissioning of Suzutsuki and Hatsuzuki represented a significant reinforcement of IJN air-defense capability. Together, they brought Destroyer Division 61 to full strength, creating one of the most powerful destroyer divisions in the Japanese fleet in terms of anti-aircraft firepower." },
        { date: "1943–1944", title: "Pacific Campaign", description: "Served in various escort operations, including at Truk and the Philippines.", detail: "Suzutsuki endured years of exhausting combat operations across the Pacific, participating in dozens of escort missions. She survived several major engagements that destroyed her sister ships, accumulating hard-won combat experience that proved vital in her crew's extraordinary performance during Operation Ten-Go." },
        { date: "January 1945", title: "Heavy Damage", description: "Suffered heavy damage in an air raid, repaired for one final mission.", detail: "A devastating American air raid left Suzutsuki badly damaged. The decision to repair her was controversial given Japan's desperate strategic situation, but the IJN pressed her back into service. This repair ultimately led to her participation in Operation Ten-Go — and her legendary survival against all odds." },
        { date: "7 April 1945", title: "Operation Ten-Go", description: "Escorted Yamato on her final mission. Bow blown off by torpedo; survived by reversing all the way back to port.", detail: "Operation Ten-Go was a deliberate sacrifice — Yamato and her escorts were sent on a one-way mission with barely enough fuel to reach Okinawa. An American torpedo blew Suzutsuki's entire bow clean off. Remarkably, her crew sealed the forward compartments, stabilized the ship, and — with extraordinary seamanship — navigated the crippled destroyer stern-first hundreds of kilometers back to Sasebo harbor. It remains one of the most astonishing feats of damage control in naval history." },
        { date: "20 November 1945", title: "Struck from Register", description: "Name removed from the naval register. Used as a breakwater before being scrapped.", detail: "After Japan's surrender, the severely damaged Suzutsuki could not be economically repaired. In a final act of service, she was moored as a breakwater in harbor — an ironic yet fitting end for a ship that had refused to sink. On 20 November 1945, her name was formally struck from the Imperial Japanese Navy register, closing the chapter on the last survivor of the original Akizuki-class sisters." }
      ],
      fate: "Suzutsuki survived the war — the only one of the four original Akizuki-class sisters to do so. After her bow was blasted off in Operation Ten-Go, she made the extraordinary journey back to Sasebo port in reverse. After the war, the badly damaged ship was used as a breakwater in harbor. On 20 November 1945, her name was struck from the naval register and she was sold for scrap. Suzutsuki remains the longest-serving member of her class."
    }
  ]
};

export function getShips(lang) {
  const translations = SHIP_TRANSLATIONS[lang] || SHIP_TRANSLATIONS.id;
  return SHIP_BASE.map((base, i) => {
    const t = translations[i];
    return {
      ...base,
      nameMeaning: t.nameMeaning,
      designation: t.designation,
      imageCaption: t.imageCaption,
      biography: t.biography,
      stats: base.statsValues.map((value, j) => ({ label: t.statsLabels[j], value })),
      kancolleNote: t.kancolleNote,
      timeline: t.timeline,
      fate: t.fate,
    };
  });
}