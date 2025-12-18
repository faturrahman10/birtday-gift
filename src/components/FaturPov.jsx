import React, { useRef, useState, useEffect, useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion, AnimatePresence } from "framer-motion";
import QuizModal from "./QuizModal";

const FaturPov = () => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showBook, setShowBook] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fullStory = `Hai namaku fatur, ini cerita tentang kisah tentang sudut pandangku selama bersama dengan seorang wanita bernama dinda, dia wanita spesialku hehee. Cerita ini bermula sejak aku masuk di bangku smp, tepatnya di MTsN Baraka, seorang anak polos yang belum mengenal handphone, social media, apalagi cinta. Aku baru mendapatkan handphone pertama di kelas 1 smp, disitulah aku mengenal yang namanya social media, terutama facebook. Mengenal facebook membuatku menjadi anak yang agak alay dalam mengupload status ataupun foto dan hal itu baru aku sadari saat dewasa haha.

Di facebook aku juga banyak mengenal orang orang baru saat mengirimkan pesan ke orang random ataupun orang yang sepertinya aku kenal. hanya asal kirim pesan dengan kata “hai” atau “p” pasti dapat kenalan baru. Masih ingat dengan wanita spesial yang sebelumnya aku notice? hehe, aku mengenalnya pertama kali di facebook, entah ingatanku salah atau benar tapi kayaknya memang di facebook “coco mirakayya jo fb dinda? haha”. Dimulai dari obrolan random yang dulunya dianggap menarik tapi sekarang malah dianggap alay haha.

Obrolan berlanjut dengan basa-basi entah apa yang dibahas, bahas ini bahas itu pokoknya pembahasannya entah kenapa bisa lancar haha. Karena kebetulan dia itu salah satu murid top di smp, aku sering tanya-tanya soal pelajaran dan bocoran soal ulangan atau ujian, gara-gara itu pembahasannya mengalir lagi sampai bahas hal-hal random.

Setelah beberapa bulan saling kenal, akhirnya aku tahu kalau dinda ini punya pacar, kebetulan pacarnya ini satu kelasku, namanya irsyad, yang setauku punya banyak mantan pacar haha “playboy jo dinda haha”. Mungkin karena itu di kelas 1 aku belum begitu tertarik dan melihat dia sebagai wanita spesial, tapi mungkin ada sih, cuman belum sadar aja hehee.

Kalau di ingat-ingat kayaknya memang sudah ada ketertarikan sih, karna kayaknya pas liat dia dari belakang terus liat tas nya “eh kok sama kayak tas nya irsyad”, tas palazzo yang motif belakangnya sama persis haha. Iri liatnya, irinya itu cemburu bukan yah haha, kayaknya ia sih. Irinya baru hilang pas ganti tas warna navy terus ada motif-motif imutnya hehe “cocomi toh dinda? tas navy mane den motif-motif pesawat roket raka jo apa raka”.

Setelah ganti tas, ada perasaan senang sebenarnya, rasa syukur juga kalau mereka sudah putus haha. “kayaknya mereka sudah nda sama-sama lagi, YES”. Baru ada semangat lagi buat deketin si dinda ini haha.

Kan wajar ya, sebagai pria polos yang belum pernah berusaha dekat sama cewe. Kurang tau cara dekati dia bagaimana, cara kasi tau perasaan ke dia itu bagaimana, makanya modus terbesar supaya bisa tambah dekat yaa tanya pelajaran atau soal-soal ulangan harian haha.

Entah kapan mulai sadar suka sama dia, bukan cuman suka, tapi jatuh cinta haha. Setelah sadar, jadi sering pulang lewat samping lapangan baraka supaya bisa liat belakangnya. Agak kecewa kalau lewat sana tapi dia nya tidak ada, kalau ada terus lewat pas di sampingnya, dalam hati bilang “hai dinda”. Semua itu dilakukan untuk caper ke dia haha.

Di kelas 1 itu sebenarnya aku bisa dikatakan anak anti sosial yang taunya cuman sekolah-rumah, sekolah-rumah. Tidak ikut kegiatan apapun atau organisasi apapun. Setelah lihat dia aktif di organisasi pramuka, kayaknya jadi mau ikut juga, tapi malu dan takut haha, makanya selama kelas 1 tidak ikut organisasi apapun.

Kadang iri plus cemburu kalau liat dia dekat-dekat sama kakak kelas cowok haha, dasar cemburuan nda jelas. Apalagi liat mereka buat video di perkemahan, walaupun rame-rame yaa, dalam hati “woi, terlalu dekat sama dia woi” haha. lucu sih, cemburu tapi bukan siapasiapanya. Dari situ ada perasaan, ahh nyerah saja lah, mungkin dia sudah dapat yang baru lagi. Apalagi banyak kakak kelas yang bilang dia mirip Aisyah, kakak kelas cewek yang banyak jadi incaran orang-orang haha. Bahkan omongan itu terlalu sering masuk ke telingaku. “sainganku terlalu banyak woi” ucap dalam hati.

Walaupun ada perasaan mau nyerah ya entah kenapa masih chatan terus sampai di kelas 2, kadang chatan di fb messenger, kadang juga di sms. Bukan tiap hari sih, tapi hampir tiap malam pasti kirim sms “GN”, “G ap?”, dan sms-sms singkat alay lainnya haha, dulu seru tapi sekarang super malu kalau diingat-ingat lagi.

Untuk dekati dinda, salah satunya ya jadi teman dari teman dekatnya haha. Banyak teman dekatnya yg berhasil ku dekati, contohnya putri yg satu kelasku, sama ai yg tetangga kelas haha. Btw si putri ini lah yang nanti nya dorong-dorong aku supaya nyatain perasaan, tapi itu kita ceritanya nanti, masih banyak yang perlu dibahas hehe.

Beberapa bulan berlalu sebenarnya komunikasi kami masih sama saja, hanya chat tiap malam yang alay, kadang berusaha cari topik supaya bisa chatan, ya tiap hari selalu begitu dan bisa dibilang pendekatannya tidak ada kemajuan haha. Karena kebetulan kelasnya dan kelasku itu berhadapan, saat jadwal piket, aku selalu ambil bagian nyapu atau ngepel di luar kelas supaya bisa di lihat sama dia, supaya bisa dianggap rajin sama dia.

Di beberapa kesempatan, kalau dia lagi nongkrong di depan kelasnya, aku selalu masuk kelas terus duduk di paling depan, dan pintu kubuka agak lebar. Mau tau buat apa? hehe itu supaya bisa liat dia dari kaca papan tulis, karena kebetulan papan tulis di kelas kami itu kaca, jadi bisa merefleksikan gambar dia di depan kelasnya, hanya perlu ambil posisi duduk yang pas supaya bisa liat dia. Karena kalau mau lihat langsung, super malu karena memang suka. Untuk laki-laki yang baca ini nanti kalian pasti tahu lah bagaimana rasanya ketemu cewek yang super duper sangat kita sukai haha. Semoga bukan laki-laki sih yang baca ini.

Ada satu momen dimana teman satu kelasku yang namanya putra, ngajak buat masuk pramuka, sebenarnya malas dan tidak ada niatan sama sekali untuk masuk organisasi. Tapi disitu mungkin karena mau coba-coba sama kebetulan ada yang temani, jadinya pergi saja lah. Setelah beberapa pertemuan, eh kayaknya seru ditambah ada dia yg dari dulu memang sudah aktif, mungkin bisa lebih dekat sama dia kalau masuk pramuka, yakin bisa lebih dekat?, “matamu!”. Ketemu saja kayak orang tidak kenal, yang padahal hampir tiap malam suka chatting atau smsan. Memang lucu sih, tapi kenyataannya memang begitu haha. Walaupun tidak bisa tegur sapa, karena ada dia, itu salah satu alasan terbesarku bertahan di organisasi pramuka.

Ada beberapa momen dimana aku sempat terdiam kalau putri ngejek aku dengan kata “dinda”. Entah dia tahu dari mana kalau aku suka sama dinda, padahal dia aku tidak pernah cerita apapun sama dia. Entah dia tahu dari gerak gerik ku, atau dinda yang cerita sama dia kalau kami sering smsan.

Karena si putri sudah tahu kalau aku punya perasaan sama dinda, aku jadi dapat banyak info dan bocoran dari dia, entah itu info yang berguna atau tidak, semuanya ku dengarkan baik-baik. Dari banyak info itu, aku jadi tahu kalau ada cowok lain yang berusaha dekati dinda, namanya Danto haha. Sebenarnya dari gerak geriknya di fb sudah kelihatan sih kalau dia memang berusaha dekati dinda dan memang punya perasaan lebih sama dinda, dari situ semangatku agak kendor sih karena kalau dilihat-lihat kok kayaknya dinda lebih dekat sama dia haha.

Walaupun semangat sudah mulai kendor, entah kenapa tetap saja smsan malam haha dasar fatur. Sampai ada satu momen, aku dengar kabar burung kalau dinda sama danto sudah semakin dekat, katanya danto juga sudah ungkapkan perasaannya. Dari situ betul-betul sudah nyerah sih, kadang juga sudah malas buat smsan, ya pokoknya sudah tidak punya semangat buat dekati dia lagi haha.

Sampai suatu hari di dalam kelas entah pagi atau siang, si putri kasi tau aku kalau dinda tolak si danto, dia bilangnya kurang lebih seperti ini “patur, natoak’i danto, dinda.. nda mau ko maju?”. Di hari itu memang ada rasa bersyukur karna dinda tolak si danto, tapi yah terlanjur patah semangat haha. Setelah dapat info dari putri itu, aku langsung berusaha smsan lagi sama dinda.

Entah selang beberapa hari setelah dapat info dari putri, di satu malam setelah beberapa menit smsan, antara jam 8 atau 9 malam di tanggal 8 september 2015, dengan keberanian dan pengalaman seadanya aku berusaha ungkapkan perasaan ku ke dinda. Sebenarnya sudah lupa aku bilangnya dengan kata-kata apa tapi saat itu berharap banyak semoga diterima haha. Setelah aku ungkapkan, ternyata dinda tolak juga ajakanku haha. Super kecewa waktu di tolak. Setelah dapat penolakan cuman bisa bilang “oh ia ple” kurang ingat pastinya bilang apa tapi kurang lebih seperti itu layaknya orang putus asa haha.

Selang beberapa menit dinda chat balik “ndapapa ko?” dengan bahasa daerah. Ya karena sok kuat ya aku balasnya “ndak papa ji” juga dengan bahasa daerah. Entah kenapa dan ada dorongan apa, si dinda balas lagi dengan mengiakan ungkapan perasaanku. Pokoknya disitu yang sudah lemas dan mau lanjut tidur, tiba-tiba langsung berdiri dari kasur, terus mau lompat tapi nanti takutnya berisik haha, langsung kubalas sms nya dengan menanyakan ulang kalau dia serius atau tidak, ternyata dinda bilang “ia”. Masih segar dalam ingatan dimalam itu aku langsung bangun dari tempat tidur, lari ke depan wc di samping mesin cuci lama yang ada di rumah, terus lompat-lompat kegirangan kayak orang gila karena kebetulan di depan wc itu tembok jadi bisa lompat-lompat tanpa menimbulkan kebisingan haha, intinya sebahagia itu “dindaa, makasih sanga mu terima mo jo kah, cinta remaja yang alay tapi ja bahagiana tonna mu terima na haha”.

Setelah kejadian malam itu, sebenarnya butuh waktu lama untuk bisa ketemu langsung, ketemu langsung nya kita ceritakan belakangan. Hanya sekedar smsan atau chatting tiap malam, dan bahkan masih malu untuk pakai kata “sayang”, “syg” dan kata-kata romantis nan alay lainnya haha “pau saja sayang na ja siri apalagi sitammu”.

Saking tidak bisanya ketemu, momen-momen kecil sangat dihargai haha. Berpapasan di jalan, tidak sengaja tatap-tatapan, dapat kabar dari orang lain, mandang dari jauh, dah momen-momen lainnya. Setelah dapat salah satu momen pasti malam nya langsung di bahas, “ciee tadi tatap-tatapan”, “kita tadi ketemu looh”, “aku tadi liat kamu looh”, “aku dengan dari si ini kamu ini itu” btw pake bahasa daerah atau kadang bahasa indonesia yang dicampur-campur dengan bahasa daerah, disini dikenalnya dengan bahasa barobo haha.

Setelah nyaman masuk pramuka karena ada dinda, aku jadi keterusan sampai-sampai hampir tiap hari ada saja ekstrakurikuler yang aku ikuti, untuk banyak dari ekstrakurikuler itu yang dindanya juga ada hehe. Setelah sampai saat ini berbincang, aku tahu kalau ternyata dinda masuk pmr karena ngikutin aku hehe.

Karena kedekatanku dengan dinda, banyak teman-teman dekatnya yang akhirnya aku kenal, dan bisa berteman dengan mereka. Bahkan entah kenapa aku tiba-tiba dimasukkan ke dalam grup mereka di messenger, nama grupnya Girls Boys Baraka yang disingkat GB2, alay kan? “ja alay jo sanga grub mi mangka ka” haha. Masa itu memang mungkin nama grup nya dianggap keren, tapi sadar tidaknya, sekarang itu kedengaran sangat alay. Sebenarnya ada tidaknya aku didalam grub itu tidak berpengaruh sih, karena aku cuman nonton, dan memperhatikan apa yang mereka bicarakan tanpa menumbang suara sedikitpun, aku hanya bicara saat diajak bicara dan kadang juga bicara kalau ngobrol dikit sama dinda haha.

Ada cerita lucu dan alay di dalam grup GB2 tentang kami, aku dan dinda ngobrol tentang sesuatu entah apa itu, obrolan itu diakhiri dengan kata “oke CI”, “oke CS”, akhirnya penghuni grup yang lain jadi penasaran CI dan CS itu apa haha. CI dan CS itu yang lucu dan alay, tahu tidak apa kepanjangannya? “CI = Calon Istri”, “CS = Calon Suami” haha, sungguh singkatan yang sangat alay, “ja alay jo ka dinda, jujur” tapi masih lebih mending daripada ayah bunda haha.

Dulu dinda suka gambar-gambar doodle, kadang di upload, kadang di kasi orang. naah pernah dinda kasi orang doodle “masa digaragatan ia na eda aku” haha. Jadi mang kode-kode na supaya dibikinkan juga. Lupa bagimana kodeku tapi akhirnya mau’i bikinkanna haha. Sangat ku tunggu sampai jadi, akhirnya di sekolah, jam istirahat kayaknya deh, putri kapang nasuru ambil ke kelasnya, malu-malu’i putri masuk kelas sambil bawa itu doodle, haha secepat kilat’i kasi na, secepat kilat na juga sembunyikan’i. Pas sampe rumah, kuliat-liat dengan seksama, ternyata ada yang agak terhapus sedikit, makanya kutebalkan pake spidol lagi, pas jadi terus kukirimkan dinda, ternyata ada yang beruba dari coretan spidolku “nakua dinda seingatku den beda cidi” haha, sory yaah terhapus’i itu, berusaha ra menebak-nebak bentuk apa itu terhapus.

Pas kelas 2, patur yang dulunya anak rumahan, suka sakit-sakit, berteman dengan rahmat,dita, addan, ainun, beeh jadi suka jalan-jalan kemana-mana, kadang ke cekong, btw waktu jaman ku ke cekong belum seterkenal sekarang, nda ada apa-apa di sana, cuman sekedar gunung, entah kenapa kami sering kesana jalan-jalan. selain ke cekong kami juga sering ke lasaran, makan-makan bakso, pokoknya keliling-keliling saja naik motor entah kemana. Akhirnya berhasil’i dinda ku ajak ikut pergi jalan-jalan ke cekong haha, lucunya karna takut ketahuan nenenya dinda, pas pergi jemput dinda di rumanya, kami tunggu kurang lebih 100 meter dari rumahnya dinda, terus dita yang pergi jemput dinda, supaya dianggap dinda perginya cuman sama cewe haha. Pas di jalan sumpah, nda bicara sama sekali, padahal di motor mungkin hampir 1 jam sama-sama. Pokoknya diam seribu bahasa, pas sudah mau sampe di cekong, kan jalannya agak rusak, bukan agak tapi memang rusak, di jalan turunan kusengaja rem mendadak motorku supaya dinda bergeser kedepan haha, langsung dita bilang “narencana memang kita patur stu dari kemarin”.

Ngomong-ngomong, kalau soal otak sebenarnya lumayan lah si patur ini, ada satu waktu aku, sama ada teman ku namanya paat, sama kayaknya beberapa orang lagi, ditunjuk untuk pergi ikut olimpiade matematika, btw ditunjuknya mendadak dan tidak ada persiapan sedikitpun, langsung pergi saja tanpa belajar dan bimbingan. Olimpiade tingkat kabupaten di SMA Alla/SMA 3 Enrekang, padahal jawab sembarang, cuman diketahui, ditanyakan, jawaban asalah, ehh lolos tingkat kabupaten, juara 3. Lanjut di makassar lagi, tingkat profinsi, dan yap tidak ada persiapan, tidak ada bimbingan, cuman sok-sokan belajar sendiri, padahal masi kurang tau, singkat cerita, selesai lah jawab soal, karena tunggu guru pembimbing/pak muliardin aku ketiduran di mushalla kampus, ehh paat kampret dia ambil hpku, pokoknya dia rubah semua yang ada di hpku, wallpaper ganti fotonya dinda, susunan aplikasi diubah jadi bentuk D dan F, bikin status di bbm tentang dinda, ganti foto profil bbm jadi huruf D berapi-api, bahkan ganti nama bbm jadi “dinda fatur celalu celamanya”, astaga langsung heboh semua om tanteku di bbm, mampus ka saya haha.

Lanjut pas mau pulang, ternyata berbarengan sama salah satu om ku, dia juga ikut di olimpiade itu dampingi anak muridnya karena dia juga guru matematika, om aco namanya. Pas ketemu di tempat janjian, astaga mampus si fatur ini ditanya-tanya dan akhirnya harus klarifikasi kesana kemari kalau temanku yang bikin bbm ku jadi penuh cinta haha.

Setelah kejadian itu, jadi banyak guru yang tahu di sekolah kalau aku sama dinda pacaran karna salah satu om ku yang di bbm juga guru di MTs, menyebarlah ke guru-guru lainnya, akhirnya dinda minta putus karena sudah terlalu banyak guru yang tau katanya.

Tapi sebenarnya bisa dibilang break sih, biasalah abg sok-sokan break padahal nda tau break itu apa. Putus tapi masih komunikasi, bahkan rencana untuk balikan di tanggal yang sudah ditetapkan haha, tanggal 10 November, sengaja kupilih karna tanggal 10 juga tanggal ulang tahunku, ihh alay bgt.

Setelah balikan, sebenarnya orang-orang masi mengira kalau aku sama dinda masih/sudah putus, yaa masi pura-pura putus padahal sudah balikan, bilangnya putus tapi di fb nya dinda masih ada kata df haha, curiga sih temannya dinda, padahal sudah putus tapi kenapa masi ada df di fbnya.

Di kelas 2 ada guru pkn yang sering liat aku tidur di kelas, padahal memang pure ngantuk, bukan karna begadang, malah yang disalahkan dinda, katanya patur jadi begadang dan ngantuk disekolah karena chatingan terus malam-malam, bahkan dinda ditegur di kelasnya, astaga bukan karna itu bu, memang pure mengantuk ji ini, nda ada campur tangannya dinda, “ja merasa bersalah na aku gara-gara jo, maap dinda yaah”

Di kelas 2 menjelang naik kelas 3, selain ikut pramuka, aku juga ikut saka, saka itu adalah wadah pendidikan guna menyalurkan minat bla bla bla bla bla… hahaha, pokoknya kayak pramuka tapi dibawah naungan kepolisian dan latihannya juga di polsek baraka. Aku ikut saka karna ngikut teman-teman yang lain plus karna dinda juga ikut haha. Di saka ada kemah akbar namanya BK (Bhayangkara Kreatif), itu kemah pertama ku, wah sungguh pengalaman yang luar biasa baru haha. Di kemah saka momenku sama dinda masih sedikit karna masi sama-sama malu untuk berinteraksi, ada satu momen entah kenapa tiba-tiba aku sama dinda kayak marahan satu sama lain, padahal tidak ada alansan kenapa haha “aneh susito sikabaci tpi entah capai, tangkungaran todami”, ada satu momen lagi latihan untuk lomba upacara bisu di tengah malam, latihan gelap-gelapan pokoknya di belakang tenda cewek, malam itu sebenarnya masih kayak marahan tapi masi berusaha untuk perhatian, kuliat dinda pas latihan lepas sandalnya, ehh refleks na lepas sandalku juga supaya sama-sama haha “sekarang kupikir-pikir ja alay na haha”.

Di kelas 2, pernah ada momen dimana ada kakak kkn yang pergi ke sekolah, ada satu kakak yang wajahnya mirip dengan dinda, tapi dindaku lebih cantik dan imut, lupa nama kakaknya tapi setiap dekat sama kakaknya agak salting karna wajahnya yang mirip dinda haha “kupau bangri sanga kungaran’i jo momen” haha.

Ada lagi salahsatu momen yang sangat ku ingat di kelas 2, itu ketika aku baru sampai di sekolah pagi-pagi, aku lewat belakang kelasnya dinda, tidak pas dibelakangnya sih tapi kelihatan dari jalan yang kulewati. Saat lewat di sana, aku samar-samar mendengar ada yang memanggilku, saat aku menengok ke belakang, kiri dan kakan, tidak ada apa-apa, akhirnya aku berpikir ohh mungkin salah dengar. Setelah pulang dari sekolah, aku menceritakan itu ke dinda saat chatingan, ehh ternyata itu dinda yang memanggilku, wah ga ekspect sih kalau dinda se berani itu untuk memanggil di sekolah haha.

Itu momen di kelas 2, entah urutannya betul atau tidak, mungkin juga ada momen yang aku ceritain di kelas 2 tapi sebenarnya itu momen kelas 3, begitu pun sebaliknya kuceritakan di kelas 3 tapi mungkin itu momen di kelas 2 haha “cerita na berdasarkan ingatanku aja”.

Yups kita lanjut di kelas 3, dimulai dari kegiatan mos adek kelas, aku bawa kamera yang ke wekolah karena tidak ada pembelajaran, sengaja supaya bisa potret-potret random. Berusaha masuk ke kelasnya dinda supaya bisa foto dinda ahh dindanya selalu tidak mau haha, yaudah lah foto sebisanya saja walaupun akhirnya tidak ada yang di dapat haha.

Di kelas 3, pintu pagar sekolah ditutup dan sudah tidak bisa jajan di luar sekolah, hanya bisa di dalam kantin sekolah, awalnya pergi ke kantin untuk cari makan tapi pas liat dinda ehh modus dehh haha, dekat-dekat pas mau ambil gorengan, pertama di kantinnya pak hasim, lama-lama dinda hilang dari kantin itu. Pastinya ku cari di kantin lain, ehh ketemu di kantinnya mama rini haha, lanjut lah modus-modus seperti biasa. Dan agak malu sih karna teman kelasnya dinda rata-rata jajan di sana, bodo amat lanjut modus. Setiap aku berusaha dekat-dekat dengan dinda pasti diteriakin lagi sama teman kelasnya cintaku bersemi di kantin, haha agak malu sih “bodo amat yang penting bisa na sanda-sanda modus walaupun tattana masiri sih”.

Di januari, tanggal 7 tepatnya hari ulang tahun dinda, aku berencana memberikan hadiah boneka, sudah kurencanakan bersama daya, ini juga salah satu temanku, teman curhat dan dia pacarnya teman dekatku juga waktu itu haha. Saat mau kasi bonekanya dindanya menolak sih, sempat agak kecewa karna sudah direncanakan dari awal, akhirnya aku sama daya pergi ke rumahnya dinda langsung untuk membawa boneka itu, disimpan didalam tas nya daya supaya tidak ketahuan haha, dan yap pastinya bukan aku yang langsung ke rumahnya, minta tolong ke daya untuk membawakan bonekanya langsung ke dinda, aku menunggu agak jauh dari rumahnya dinda, seingatku bonekanya kami kasi nama deh, tapi lupa haha “ja poccikanna kuna eda ku bawa mesai, tpi malaja toki nenena dinda” haha

Kemah selanjutnya yang ku ikuti itu kemah PPMK 1, lupa kepanjangannya apa haha. Disini sudah lebih terbiasa untuk interaksi. Di kemah ini aku membawa kamera supaya bisa ada momennya dinda yang ku foto, tapi dindanya tidak mau difoto haha. Akhirnya ku pinjamkan kamera ku ke Ai, salah satu teman ku dan temannya juga dinda, kusengaja pinjamkan kameraku ke Ai supaya bisa dia pake foto-foto, dan mungkin dinda ngikut juga foto sama Ai haha, tapi ternyata tidak ada fotonya dinda haha. Momen yang paling ku ingat sama dinda itu ada 2. Yang pertama pas malam dinda mau lomba paduan suara kayaknya, disitu di samping panggung, dinda dan peserta lain menunggu, disitulah aku modus-modus dekat-dekat sama dinda, pokoknya modus banget, pura-pura mau liat hp yang dinda liat supaya tamba dekat lagi haha. Kedua pas persiapan lompa atau persiapan upacara deh kayaknya, disitu di rumah ibu Ati, salah satu pembina pramuka di MTs Baraka, di teras rumah kami banyak berfoto bersama, pokoknya di setiap foto  aku berusaha berdekatan dengan dinda, di belakangnya, di sampingnya, pokoknya harus dekat, sesekali juga ku rangkul-rangkul dikit haha “pokoknya ja modus na ntu jo, kuakui kuna”.

Ini kejadian kayaknya di kelas 3 tapi lupa kapan. Dulu kan fb jadi sosmed utamanya anak-anak abg kan, pernah kuliat ada postingannya sepupunya cia (cia ini teman satu kelas ku yang dulunya sekelas sama dinda), entah kenapa kuliahat di postingan itu ada jilbab cewek yang mirip sama jilbab nya dinda, tapi sampe sekarang belum ku tau sih, itu dinda atau bukan haha. Dari situ sebenarnya nda ada apa-apa sih, cuman sekedar lewat saja dan bahkan langsung di lupakan ji, terus ada satu malam dinda bilang ada cowo yang dekati’i, bahkan sampai kayak mengancam-ngancam, ternyata memang dia orangnya, yang sepupunya cia tadi “ihh kasar payya carana, telappek lalo ri ia patenni dindaku”. Seingatku sih dinda bilang sudah dekat memang sama dia, agak nyes sih pas dinda bilang begitu haha, tapi dari anggapanku, itu cuman karna paksaan dari si kampret itu, dan dinda juga susa menolak, makanya setelah diceritakan itu, setiap pulang sekolah pasti kucari dinda supaya bisa pulang sama-sama “tangia modus te kah, sumpah ca memang ra ke na ala ko tau” haha. Setelah itu perlahan kembali mi normal-normal dan tidak ada lagi cerita tentang si kampret itu ku dengar.

Lanjut kisah di pramuka lagi nih, naah kan kelas  di kelas 3 ini bisa dikatakan suda senior lah haha. Jadi aku dan beberapa orang teman, termasuk si kesayangan dinda ini disuruh melatih ke banti sama pembina tiap harii.. hari apa yah, lupa pokoknya ada hari khusus pergi melatih ke banti, dan yap kesempatan untuk modus pun bisa berjalan lagi haha. Dapat kesempatan boncengan sama dinda ke banti haha. Kadang sengaja rem mendadak atau gas mendadak supaya dinda bisa pegangan, kadang juga pura-pura sakit belakang supaya bisa dipijit haha. Kalau diingat-ingat, “memang ja berusaha na kuna untuk modus mangka kah”.

Lanjut, ada kemah lagi nih, tapi ini cuman kemah internal MTs, kayaknya kemah sabtu minggu karena ada anggota baru adik kelas 1 masuk ke organisasi pramuka, tidak banyak momen sama dinda sih, cuman kebanyakan liat-liatan aja. Sebenarnya perkemahannya di atas gunung, tapi saat itu hujan sangat deras, akhirnya instruksi dari pembina untuk kembali ke sekolah dan tidur di sekolah karena situasi untuk berkemah di atas gunung tidak memungkinkan, kami pun kembali ke sekolah tetapi perlengkapan tenda dan perkakas masih di tinggalkan di atas gunung. Naah ini nih momen serunya, saat kembali ke gunung untuk mengambil kembali perlengkapan tenda yang ditinggalkan, di perjalanan pulang, aku dan dinda jalan berbarengan bersama beberapa teman lain tapi tidak terlalu dekat karena ada senior yang juga jalan bersama kami, di perjalanan kami banyak bercanda, dorong-dorongan yang bahkan sampai jatuh, bahkan kami mendapat 1 tabung gas yang entah meluncur dari mana, selain itu aku juga banyak bercanda dengan melempar tanah becek sisa hujan tadi malam, akhirnya teman-teman yang lain ikut juga melakukan hal itu, jadinya kotor lah kami semua haha. Pastinya dinda tidak bisa menghindar dari lemparan dan olesan tanah dariku haha.

Selanjutnya, kemah karrang. Di latihan persiapan kemah aku sering ejek-ejek dinda dengan kata pendek, kecil, lintik(semut), kasisi(nyamuk), balao(tikus) haha dinda memang kecil tapi disitu sisi super imutnya kecil lucu cantik imut. Dan tentu saja dinda balas aku dengan mengatakan gajah, gendut, tonggong(sangat besar) haha tidak papa karena itu memang fakta dan momen itu kuanggap lucu, suka banget “salah satu momen to kuanggap eda na alay” haha. Ada juga momen dimana yang bisa dibilang fatur yang tidak bertanggung jawab, setelah latihan sore kan aku pergi antar dinda pulang ke rumahnya, ada temahku, adek kelas sekampung, kusuruh untuk menunggu di pertigaan supaya nanti ku jemput pulang sama-sama, wah bodohnya aku lupa kalau janjian sama teman satu ini pulang sama-sama. astaga bodohnya aku, bisa-bisanya lupa soal itu, aku dengar dari irgi, salah satu teman baikku juga, dia menunggu terus disana dan akhirnya irgi lah yang antar pulang ke kampung, sungguh keterlaluan aku “baeh, ja merasa bersalah na lako apik soal jo sampe sekarang”.

Setelah latihan, berangkatlah kami ke perkemahan batu arang karrang, disanalah kami berkemah selama beberapa hari, mungkiin seminggu, aku juga lupa berapa hari, pokoknya itu hari-hari yang panjang. Sialnya, jarak antara tenda regu putra dan regu putri sangat jauh, jadinya jarang ada kesempatan untuk sering ketemu, bisanya ketemu pas pergi makan di tenda putri, itupun susah untuk berdekatan karena banyak guru di tenda putri, dan kadang dinda juga tidak ada di tenda saat kami pergi makan ke tenda putri haha. Ada satu momen yang belum pernah ku lupakah, itu adalah saat malam penutupan di upacara api unggun, disitu patur lemah, datang ke tenda putri dengan keadaan sakit demam “ihh lamma mi ia te muane mesa”, lemas makan dan lemas bergerak, barulah saat perjalanan menuju tribun utama sudah mulai keluar keringat dan merasa agak mendingan dikit haha, kami berdampingan antara regu putra dan putri, aku bersebelahan dengan dinda saat berjalan, aku tidak banyak bicara dengan dinda, bahkan menutup seluruh wajah dengan buf, saat aku mempercepat langkah dan mendahului dinda beberapa langkah dinda bilang “cako sanda aku?” haha maap yaah nda bermaksud begitu, cuma lagi nda kuat energi untuk banyak tingkah modus seperti biasanya, “nda enak na kuna sampai-sampai kua ko sjo haha”. Sampai lah kami di tribun utama, seingatku kami tiba saat upacara sudah dimulai, bodo amat sih sama upacaranya, cuman mau liat api unggun aja haha, di momen api unggun ini lah kami berfoto-foto, aku merasa sangat senang karena dinda mau foto bersama, yes dapat lagi foto sama dinda haha.

Walaupun sudah kelas 3, si fatur ini suka keluyuran kemana-mana, salah satunya di anoan, salah satu air terjun yang sering aku kunjungi. Ada satu waktu aku pergi bersama dinda dan beberapa teman lainnya, sebenarnya pas tiba di sana kurang bagus karena debit airnya terlalu tinggi dan airnya keruh, tapi bodo amat lah soal kondisi airnya itu, di momen itu aku sempat pegangan tangan sama dinda dengan alasan ingin menolong karena medan yang agak menanjak dan licin, sok-sokan menolong padahal niatnya modus mau pegangan tangan, pasti dinda sadar kalau aku memang sekalian modus karena dari awal terus kubuntuti dari belakang hehe.

Ada lagi salah satu air terjun yang sering aku kunjungi dan pernah ku kunjungi bersama dinda. Air terjun itu ada di desa bone-bone, kalau tidak salah namanya sarambu silang, wah itu destinasi air terjut favoritku di enrekang, walaupun jalannya waah kampret juga sih. Seingatku sudah 2 kali kami kesana, yang pertama saat kelas 2, disana aku mengikut rombongan dinda bersama teman-teman dekatnya, aku diajak, ya ikut lah, sekalian bisa dekat-dekat hehe, dapat juga foto sama dinda disana, walaupun sama si unang haha. Terus yang ke dua ini yang seru, lucu, dan memalukan sih haha, dari awal perjalanan ke desa bone-bone, aku boncengan sama dinda, tapi pas sudah mendekati destinasi itu jalannya sangat-sangat wah kampret bangke, tanjakannya waah diliat aja cape, apalagi jalan kali, akhirnya kami memutuskan untuk naik motor ke atas sana, lucunya motor yang aku pake bersama dinda tidak kuat nanjak, entah motornya memang yang tidak kuat atau aku nya yang keberatan haha. Pas sampai ke pintu kebun disana sudah banyak teman-teman yang menunggu dan mengejekku karena motorku yang tidak kuat, banyak yang bilang “auu eda na jadi to modus-moduss” kampreeet kampret. Naah setelah sampai di tempat parkir, kami lanjut berjalan kaki untuk masuk ke air terjunnya, kami harus melewati beberapa kebun milik warga, naah saat berjalan kaki dan dinda semakin jauh di depanku, aku langsung mengejarnya dengan berlari, pas di sebuah tikungan aku tidak memperhatikan sekeliling, ternyata pas setelah tikungan itu ada sebuah sumur kecil milik warga, aku yang tidak memperhatikan jalan yaah akhirnya terpelosok kedalam sumur itu, waah sungguh kampret, padahal belum pakai baju untuk basah-basahan malah basah duluan, untuk tidak banyak teman yang melihat kejadian itu, kayaknya itu gara-gara dinda yang tidak mau di modusi terus makanya dia lari dariku, kampret. Dan yaps, pastilah kami foto berdua, di air terjun dan di perjalanan pulang. Dinda kan tidak bawa baju ganti ke sana, makanya saat perjalanan pulang, aku melihat dia sok-sokan tidak kedinginan, padahal tangannya sudah sangat memutih karena kedinginan, naah disitulah aku melancarkan salah satu jurus modusku dengan mengambil tangannya dengan kedua tanganku, lalu meniup-niupnya dengan nafas hangat agar tangannya terasa hangat, mungkin tidak terlalu berefek sih, tapi disitulah aku salting tapi senang karena modusku berhasil hehe.

Semua itu kejadian-kejadian di awal semester kelas 3, setelah masuk semester genap, para kelas 3 sudah mulai fokus untuk ujian sekolah dan ujian nasional, dibilang fokus sih tapi aku tidak fokus sama sekali, sama sekali tidak belajar haha. Untuk aku dan dinda sudah jarang pergi keluar, karena kami bisa keluar berdua jika bersama teman-teman yang lain, kami setiap hari hanya bertukar pesan dimalam hari, dan sesekali bertemu di sekolah, saling tatap dan juga saling senyum karena memang belum se berani itu untuk ketemu berdua. Semakin lama waktu berlalu, aku merasa di akhir-akhir itu “maap dinda kah” hubungan kami sudah agak berbeda, apa yah, cuman perasaan aja sih tapi melihat caranya berinteraksi dengan ku dan dengan orang lain di komenan fb sudah agak berbeda. Cuman prasangka sih, tapi saat memantau seperti itu, itu yang aku rasa. Ada satu momen aku sadar, ternyata sudah sangat lama dinda tidak pernah lagi bilang kata sayang, haha memang sih agak klise tapi fatur yang masih muda saat itu merasa aneh dengan keadaan itu. Barulah prasangka itu akhirnya menurun saat satu waktu aku liburan ke makassar, agak lupa sih saat itu kenapa aku ke makassar, sepertinya itu sudah tengah malam, akhirnya dinda bilang kata sayang juga ke aku, disitu aku sudah mulai lega, ooh ternyata semua yang aku pikirkan selama ini cuman prasangka yang tidak jelas. Tapi beberapa bulan kemudian prasangka ku mengenai hubungan ku dengan dinda muncul kembali entah dari aku memang yang berbuat salah atau memang waktu itu memang waktunya hubungan kami merenggang.

Akhirnya di malam hari, saat itu sepertinya sedang try out ujian atau sedang ujian, atau selesai ujian, aku agak lupa sih, pokoknya saat itu masa-masa kelas 3 sudah hampir berakhir. Malam itu, tiba-tiba dinda bilang ingin mengakhiri hubungan kami “sumpah ja selang na, ja sedih tona”, sebenarnya aku sudah agak menyangka dinda akan mengucapkan itu sejak dari malam itu, di awal chatingan aku merasa dinda sudah mau mengarahkan pembahasan ke sana. Saat itu aku bertanya kenapa dinda memutuskan hal itu, dinda menjawab bahwa sudah terlalu banyak guru yang tahu tentang hubungan kami berdua, jujur saat itu aku merasa belum puas dengan alasan yang dinda berikan, disitu aku tidak bisa menolak dan memaksa dinda untuk tetap melanjutkan semuanya, disitu aku sangat terkejut, sedih, ahh pokoknya semua campur aduk, dan hanya bisa menerima yang dinda katakan ditambah dengan emot senyum, sok-sok kuat dengan emot senyum padahal nangis “kumallak na cidi njo” haha.

Di malam itu juga, pas setelah kejadian itu, cahyo (salah satu kawan baikku) mengajakku untuk keluar ke warnet untuk menggunakan wifi gratis, saat itu aku tidak tahu harus berbuat apa, dan berencana bercerita ke cahyo tentang kejadian itu. Setelah sampai di warnet, seingatku ada satu barang yang ketinggalan di rumah ku, sehingga aku pulang untuk mengambilnya, disitu cahyo ikut bersamaku, saat itu lah aku menceritakan semuanya ke cahyo, bahkan memberikan hp ku dan dia membaca chat ku bersama dinda “anna eda bang kuna siri ku pangbenganni nabacai le haha”.

Setelah putus dari dinda, selang beberapa hari, aku dan dinda beserta teman kelasku bersama dengan pacarnya dipanggil ke BK oleh guru, kami disana seperti di sidang, dan dinasehati tentang pacaran, aku tidak mendengar banyak yang dikatakan oleh guru karena aku tahu ujung-ujung nya ini pasti kami disuruh untuk mengakhiri hubungan kami “ehh sory, motong dikit, agak lupa na, ditambaiki bk sebelum putus atau sesudah, tapi seingatku sesudah deh”, oke lanjut, kita cerita sesuai ingatanku, namanya juga fatur’s pov haha. Sesuai dugaanku, di akhir kami disuruh untuk mengakhiri hubungan kami, aku langsung spontan bilang, sudah putus mi bu, kata-katanya tidak seperti itu tapi semacam itu lah. Setelah itu kami kembali ke kelas masing-masing, disitu aku tahu kalau sebenarnya banyak pasangan yang dipanggil ke ruang bk, itu semua karena ada salah satu temanku, yap temanku, teman baikku, dia teman baikku sekarang. Dia kedapatan melakukan hal tak senonoh bersama pacarnya, hal tersebut membuat para guru khawatir tentang siswa lain, itulah kenapa kami dipanggil ke ruang bk.

Selain cerita ke cahyo, aku juga cerita ke salah satu teman ku, namanya daya, kayaknya aku sudah memperkenalkan daya diatas kan yah, agak lupa juga, pokoknya aku memberitahu daya bahwa aku sudah putus dengan dinda, aku memberitahunya saat setelah salah satu ujian sekolah sekolah, aku bahkan memberitahunya bahwa aku sedikit menangis saat kejadian itu, kampretnya, dia malah menertawaiku karena menangis haha, akhirnya kami hanya menertawai kelakuanku haha.

Sebenarnya setelah putus, aku bukannya langsung putus kontak dengan dinda, aku bahkan masih chatan dengan dinda hampir tiap malam, karena aku merasa alasan kami putus ini hampir sama dengan alasan kami putus sebelumnya, aku disitu memang masih memiliki perasaan kepada dinda, dan aku memperlihatkan itu dengan jelas ke dinda dengan bagaimana caraku chatingan dengannya. Mencari alasan dengan bilang kita bisa sahabatan, juga bilang kamu bisa jadi adikku, mengirim foto-foto berdua, dan cara-cara lain untuk mengekspresikan bahwa aku masih mau balikan.

Di momen setelah ujian sekolah dan ujian nasional, kami para siswa kelas 3, sering bermain-main di kelas tetangga karena sudah tidak ada yang dilakukan saat setelah ujian selesai. Ada satu gazebo di samping kelas dinda, disana sudah banyak orang berkumpul, termasuk dinda dan banyak teman-teman lain yang berkumpul disana. Disana aku masih berusaha modus ke dinda walaupun aku tahu harus ada batasan juga, sempat juga aku mengambil laptopnya, lalu membajak line nya, ehh lupa cerita, dinda pernah mengirimkanku sebuah voice note, itu sebuah nyanyian dari dinda yang sampai sekarang masih sering kunyanyikan untuk menggoda-goda dinda. Lanjut setelah membajaknya, aku tidak menemukan vn itu di linenya karena harus schol keatas dan itu sangat banyak yang harus di scroll. Dinda akhirnya menahanku untuk melanjutkannya karena ada banyak orang disana yang melihat chat kami berdua, termasuk danto, salah seorang sainganku mendapatkan dinda dulu haha.

Setelah itu dinda masuk ke kelasnya tapi aku tetap memegang laptopnya, aku berusaha mengejarnya ke kelasnya, saat itu seingatku dinda mengambil laptopnya lalu membuka bagian desktop, disana aku melihat wallpaper dengan namanya yang dihias-hias agar lebih indah, tapi setelah membacanya dengan seksama, ternyata di wallpapernya itu bukan hanya namanya, tapi juga ada satu angka yang aku bahkan lupa sekarang itu angka berapa, dinda meletakkannya di akhir namanya. Saat melihat angka itu, aku langsung bertanya kepada dinda, itu angka apa?, dinda langsung menjawab tanggal jadian. Wah disana aku langsung diam, dan tidak tahu harus berbuat apa, tapi tetap berpura-pura kuat sambil tetap tertawa-tawa. Aku langsung mengambil laptopnya, menutupnya dan berdiri didepan kelasnya sambil memegang laptopnya. Saat itu aku masih belum percaya, tapi setelah sadar, aku segera mengembalikan laptopnya dan segera pergi bercengkrama dengan teman lain agar tetap terlihat kuat “wah sumpah, tertampar na kuna njo”, ga ekspect.

Disitu yang sebelumnya masih baik-baik saja, akhirnya aku tersadarkan ooh ternyata hubungan kami sudah benar-benar selesai, aku membuang semua barang-barang yang berkaitan dengan hubungan kami dengan tujuan agar perasaan ku cepat kembali normal. Dari saat itu aku berusaha untuk tidak terlalu memikirkannya dengan banyak pergi bersama teman-teman untuk melakukan banyak hal karena mumpung sudah selesai ujian dan tidak ada kegiatan untuk siswa kelas 3. Aku pergi membuat acara makan-makan kecil-kecilan di rumahnya dandi (salahsatu kawan baikku), di rumah anto (salahsatu kawan baikku juga), di rumah putra (salahsatu teman sekelasku), pokoknya aku keliling rumah teman untuk menghilangkan galau yang kurasa “haha galau mo kuna kaa”.

Kamu pikir aku berkeliling cuman di siang hari, oh noo, aku juga keliling di malam hari, awalnya kami hanya kumpul-kumpul di rumah random, tapi akhirnya karena kami kurang biaya dan kuota handphone kami terbatas, akhirnya kami pergi ke MTs untuk menggunakan wifi gratis, tentunya sembunyi-sembunyi dengan cara memanjat pagar sekolah, pokoknya kami masuk sudah seperti seorang penjahat profesional. Aku sering pergi bersama dandi, anto, cahyo, irgi, arga (salahsatu kawan baikku juga), dan di momen itu juga aku akrab dengan salah seorang adik kelas yang saat itu bisa dikatakan bersahabatan dengan dinda, aku kadang curhat sedikit dengannya dan bahkan dia juga tahu kalau perasaanku kepada dinda masih ada, dari dia juga aku tahu dengan pasti pacar dinda yang baru. Aku sering ke MTs bersama mereka semua di malam hari untuk menggunakan wifi gratis di sekolah. Kami kebanyakan mendownload anime untuk di nonton di rumah dan kadang main game bersama, kadang kami juga bermain bulu tangkis di sama dalam keadaan gelap gulita, hanya bisa menebak-nebak arah bolanya haha “kupugauk ngasan’i jo supaya tade-tadei galau ku” haha.

Kadang ada momen aku melihat daya dan dinda duduk bersama dan bercerita, karena melihat itu aku kadang pergi ke kantin dan membeli banyak snack better, saat itu better dikenal dengan slogan (anti galau), aku menggantungkan better yang kubeli di saku belakangku agar dinda melihatnya, disitu  aku jadi sering curhat ke daya, bertanya tentang dinda bagaimana, dinda kenapa, dan pertanyaan lain. Kadang aku juga bertanya kepadanya tentang pacar dinda saat itu, aku bertanya ke daya kapan mereka dekat, dan pertanyaan-pertanyaan tentang hubungan mereka. Setelah mendapat jawaban dari daya disitu aku bisa dikatakan bukan lagi galau tapi sangat sakit hati, karena aku berpikir kenapa yah dinda bisa secepat itu menjalin hubungan dengan orang baru, padahal aku merasa sangat tersiksa setelah hubungan kami berakhir.

Setelah melakukan semua itu, sebenarnya rasa sakitnya masih ada dan bisa dikatakan hanya sedikit berkurang, saat berkegiatan memang itu hilang, tapi saat sendiri perasaan itu kembali lagi haha. Tapi lama kelamaan aku sudah mulai terbiasa sejak saat aku memutuskan untuk tidak lagi chatan dengan dinda di malam hari, itu berlanjut sampai saat kami masuk ke MAN Baraka, di waktu itu aku sudah tidak terlalu memikirkan hal-hal yang terjadi kemarin. Kami bahkan sudah tidak berinteraksi sama sekali, bahkan untuk saling melihat.

Di MAN tidak banyak cerita kami bersama karena kan memang sudah tidak memiliki hubungan apa-apa. Tapi ada satu momen mengejutkan di kelas satu, disitu aku berusaha mencari jawaban dari soal-soal tahun lalu, karena disitu kami sedang ulangan semester. Aku mendapat info kalau siswa-siswa dari kelasnya dinda sudah mendapatkan jawabannya, disitulah aku memberanikan diri untuk chat ke dinda mengenai jawaban soal, ehh dibalas dan difotokan soal dan jawabannya, tapi jawabannya tidak jelas karena banyak yang tercoret, akhirnya aku memberitahukan bahwa itu tidak jelas. TIba-tiba dinda mengirimkan vn untuk memberitahu jawaban dari soal-soal itu, disana aku sangat terkejut “tiba-tibana payya mang vn”, walaupun itu cuman vn yang isinya cuman bilang nomor 1 A, 2 B, 3 C…dst, tapi entah kenapa itu terasa spesial, bahkan aku pernah sekali mendengar ulang vn itu di malam hari haha.

Walaupun sama-sama sudah saling cuek, sebenarnya aku masih memiliki perasaan tersisa ke dinda, kadang aku mencari perhatian-perhatian kecil dengan cara melakukan hal-hal konyol saat kami berkumpul dan ada dinda salah satunya disana, yang paling ku ingat, aku memutar suara kentut saat kami berkumpul di malam hari dengan suasana hening karena tidak ada yang berbicara, selain itu aku juga pernah membuat sebuah rubik yang di rubik itu tertulis I ❤️ U, dan memberikannya ke amel (teman sekelasku saat SD dan baru bertemu lagi saat di MAN), aku memberikannya ke amel karena saat itu dia bersama dinda dengan harapan dinda melihat rubik itu.

Di awal kelas 2, aku dan teman-teman sekelasku sering nongkrong di depan kelas, ada satu momen saat kami nongkrong di depan kelas dan pas dinda lewat disana, ada salah satu teman ku yang menyahut namanya sabil, saat melihat dinda dia refleks berkata sambil berbisik-bisik, dengan temanku yang lainnya “yamo jo candingna ippi le?” aku mendengarnya dengan jelas, dan langsung refleks menjawab “hee? io? mantanku jo kah” haha sangat-sangat ingin menekankan kalau kami pernah berpacaran. Aku baru tahu tentang berita itu saat itu dan aku juga langsung sadar, ooh sekarang sudah ada yang baru lagi, wah wah waah haha, disitu aku bukan merasa sakit hati sih tapi agak kecewa karena sudah tidak memiliki harapan lagi untuk kembali.

Walaupun sudah tahu hal itu, perasaanku ke dinda tidak langsung hilang. Saat liburan pengurus organisasi, aku berusaha mencari tempat duduk yang dekat dengan dinda, dan berhasil, aku mendapatkan kursi di sampingnya, bukan pas di sampingnya sih, tapi kami bersebelahan. Walaupun masih memiliki perasaan, aku di saat itu sudah sadar kalau memang sudah terlambat dan sudah tidak bisa lagi kembali, di waktu itu aku juga sempat berpikir untuk mencari orang baru, tapi tetap saja tidak ada yang berhasil karena akhirnya aku tetap teringan hal-hal yang kemarin.

Akhirnya ada kegiatan di sekolah yang dimana aku sama dinda bisa sedikit berinteraksi, kegiatan itu adalah CEO, perlombaan yang diadakan oleh kampus PNUP jurusan kimia, disana aku ditunjuk bersama beberapa teman yang lain untuk mengikuti lomba itu, aku dan dinda ditunjuk di lomba yang berbeda, tapi tetap saja ada perasaan bersyukur bisa berinteraksi lagi sama dinda, tapi nyatanya di awal-awal tidak ada interaksi sama sekali dengan dinda haha. Barulah saat sudah tiba di makassar, disana kami baru memiliki 1 2 interaksi. Ada satu momen saat kami persiapan lomba di malam hari, kami antri menyetrika baju, antrian teman di depanku selesai aku langsung maju untuk menyetrika, tiba-tiba dinda bilang, ihh giliranku ri, tpi aku juga yakin kalau aku duluan “wah jolona aku kaa, nenapa aku ku nte” begitu kataku haha, berkelahi tapi ada rasa senang-senangnya sampai kulupakan bahwa dia pacar orang haha. Ada juga saat kami mengantri untuk mengecas hp karena colokan terbatas, di hp yang tercolok salah satunya ada hp milik dinda, aku bertanya ke beberapa orang yang mengantri juga “inda hp te?” amel langsung mengeceknya dan bilang “hp na dinda”, aku langsung spontan bilang “aeh gobangmoyya ke yara tu, cabu bangmi”, setelah bilang itu kampretnya, ternyata dinda di belakang dan mendengar semua yang aku katakan, hahah malu sangat aku kampret, malu tapi tatta den rasa-rasa senang na haha. Nah singkat cerita, kami juara 1 umum lalu pulang kembali ke enrekang, aku sengaja mengambil kursi di belakang dinda, yaa sengaja aja, tidak ada niat modus, tidak ada niat yang lain, cuman pengen aja, entah dinda sadar atau tidak tapi aku dibelakangnya merhatiin dia. Ngomong-ngomong di ceo inilah aku memberanikan diri untuk follow ig nya dinda haha.

Lanjut di kelas 3 ada juga momen saat aku pergi ke toilet untuk buang air kecil, saat sampai di toilet pria, ternyata airnya habis dan tidak mengalir. Karena tidak ada air, aku berinisiatif untuk pergi ke toilet wanita mumpung belum jam shalat, karena jika sudah mendekati jam shalat, sudah banyak cewek disana mengantri juga. Setelah selesai aku langsung bergegas kembali ke kelas, tapi saat aku melihat ke arah sepatu, ternyata sepatuku belum terikat, aku langsung menunduk untuk mengikatnya, saat sementara mengikatnya, di ujung mataku aku merasa ada yang berjalan mendekat, dan saat aku kembali berdiri, orang itu sudah berbalik dan kembali, saat itu aku cuman menebak kalau itu dinda, dan memang berharap begitu, ternyata haha, baru sekarang aku tahu kalau itu memang ternyata dinda, ternyata dia malu-malu untuk ketemu haha.

Langsung saja aku ceritakan momen ketika kami mengikuti long march terakhir di MAN, ini merupakan cerita tentang perkemahan terakhir yang aku ikuti di MAN sebelum ujian kelulusan. Sebenarnya para siswa kelas 3 tidak diwajibkan untuk mengikuti kegiatan ini, kalau mau pergi boleh tapi kalau memilih untuk tidak pergi juga tidak papa. Tapi aku bersama beberapa teman berencana untuk pergi, hanya untuk ikut meramaikan, tidak disangka dinda juga memilih untuk ikut pergi, sepertinya dia berencana bersama amel. Di perjalanan kami sebenarnya berjalan beriringan sesama kelas 3, tapi kami tidak pernah bertegur sapa sama sekali, jalan pun berjauhan, yaa maklumlah, namanya mantan yaa mana mungkin akrab haha. Kami berjalan di paling belakang sehingga kami sangat tertinggal dari peserta-peserta lainnya, nahh karena posisi tertinggal jauh itu, ada salah satu teman, namanya jalil, dia adalah ketua ambalan putra saat kami menjadi pengurus saat itu. Dia memberikan ide untuk memotong jalan mendaki gunung melewati kebun kopi masyarakat disana, awalnya memang exited karena seru langsung memotong jalur tanpa tau jalannya, setelah setengah perjalanan, aku baru menyesal karena kami bukan lagi mendaki gunung tapi kami saat itu memanjat gunung, jalan yang kami pilih sangat vertikal dan sialnya, saat melakukan pemotongan jalur, saat itu adalah giliranku membawa tenda, haahhh capek kampret. Sebenarnya dinda dan amel awalnya tidak ikut untuk memotong jalur karena mereka sudah duluan mengikuti jalur utama, tapi entah kenapa, saat aku sudah berada di atas, tiba-tiba amel dan dinda juga ada di belakang. Aku berusaha membantu mereka yang masih berada di bawah, menarik mereka satu persatu dan mengoper batang yang mereka bawa, tapi saat giliran membantu dinda, aku langsung kabur dan melanjutkan perjalanan haha. Tau sih, aku memang jahat disitu karena semua orang aku tolong, tapi dinda tidak haha, setelah itu dinda langsung ngambek dan jalan duluan mendahului kami, anehnya kami yang setelah memotong jalur sangat kecapean dan akhirnya lambat berjalan, tapi dinda, dia seperti langsung mendapatkan kekuatan super dan pergi menjauh dari kami, dia ngambek karena tidak ditolong haha. Dari pov mu pasti marah besar karena tidak ku bantu, cuman kalau dari pov ku, aku tidak bisa membantu karena disitu dalam pikiranku, kamu pacarnya orang, dan aku tidak mau kalau perasaanku terlalu jauh lagi nantinya dan akhirnya tidak bisa sama-sama kembali, yaah gitu lah. “magalli tarru ke naganran omi te, padahal dindaa disitu kuanggap ko candingna tau dan cana ke kukabudai gaja omoko ke kutolong ko”. 

Di MAN, momen-momennya tidak banyak, hanya momen-momen biasa, yaah memang seperti itu, aku cuman bisa memperhatikan dari jauh, cuman bisa mengagumi pacar orang lain, tidak bisa maju, tapi berusaha untuk mundur walaupun tidak bisa. Walaupun momennya sedikit tapi tetap seru kok untuk di ingat-ingat.

Lanjut di perkuliahan, kami hilang kabar dan fokus di kegiatan masing-masing, aku benar-benar fokus di perkuliahan walaupun tidak sefokus itu karena selalu merasa tertinggal. Barulah kami bisa ketemu saat acara wisudah salah satu teman sekelasku saat sma, disitu aku tidak tahu kalau dinda ada di sana, barulah saat tiba di acaranya, temanku yang bernama usi memberitahuku kalau dinda juga ada, dia datang bersama yung, (yung dan usi itu teman sekelasku saat sma). Saat tau, ada perasaan agak tidak enak sih kayak “anna den omo ga ia te bene nte ahh” agak begitu, tapi tetap ada rasa penasaran apakah sekarang dia sendirian atau masih sama yang lama. Setelah makan-makan selesai, kami langsung bersiap untuk pulang setelah bercengkrama beberapa lama, sesaat sebelum berangkat pulang, yung ngomporin “cako male antar’i patur”, aku sok-sok tidak mau tapi langsung gas motor ke samping motor yang ditumpangi dinda dan bilang “meko mai”, malu dan seperti orang yang tidak tau malu tiba-tiba seperti itu haha.

Setelah itu, sudah tidak pernah ketemu lagi, fokus lagi dengan kegiatan masing-masing. Tapi ada satu momen saat kegiatan semhasnya muti, disana aku tahu kalau orang yang aku anggap pacarnya dinda juga semhas, disitu aku menunggu story milik dinda dan orang itu, jika salah satunya mengupload foto bersama berarti fix mereka masih bersama, dan ternyata teng teng teng, ada foto mereka bersama, yaah harapan yang sia-sia ternyata, fix menyerah haha.

Seiring berjalannya waktu, yung memanggilku untuk ikut saat dia selesai ujian tutup, aku pun mengiyakan panggilan itu, aku pergi kesana memang tujuannya untuk menyelamati yung atas selesainya ujiannya, tapi ada tujuan lain dimana aku ingin melihat dinda juga karena kebetulan jadwal tutup mereka bersamaan, selain itu aku juga ingin memastikan apakah mereka, ia maksudku itu, dinda dan dia masih sama-sama atau tidak. Yaah, pas sampai di sana, aku langsung pura-pura bertanya kepada salah satu orang disana, “jomboi yung?” sambil melihat ke sekeliling pura-pura cari yung, padahal sebenarnya aku mencari pacarnya dinda, kalau ada yaah betul-betul sudah tidak ada harapan lagi, dan yap aku melihatnya, setelah melihat itu, aku langsung pergi masuk ke dalam kampus karena orang yang aku tanya bilang yung ada di dalam kampus, masuklah aku ke kampus sambil menahan kecewa haha.

Didalam kami berfoto-foto bersama yung, setelah berfoto-foto, kami lanjut keluar di tempat tadi. Disana kami hanya menunggu, aku bersama cica (salah satu teman kelasku di man) duduk bercerita, aku juga keliling menyapa teman-teman sma yang lain karena disana ada ummi, ifa, dan tiara (mereka bertiga adalah teman smp dari wulan dan aku berteman dengan mereka juga), tiba-tiba aku ditanya oleh amel “jomboko torro?”, aku jawab “jo antang”, amel bilang lagi “jonjo na nanai mangka alya?”, kujawab lagi “ia”, amel langsung bilang “bisa rokoka bantui dinda teto bawai barang-barang na? buda gajai barangna naa tanissen bawa ngasan’i” aku langsung bertanya ke amel “jombori torro?”, dinda langsung menjawab “jo antang, jo boko, jo nipa-nipa”. ehh kok dia yang jawab haha disitulah kami bicara lagi setelah sekian lama, dan pastinya aku langsung memerah, itu sudah pasti karena aku pun merasakannya. Disitu aku secara terpaksa menerima tawaran itu padahal dalam hati “anna aku omoyya na sua bawai barangna padahal den candingna njo, apa bang nasanga kah”. Saat jam sholat magrib, kami semua memutuskan untuk pulang, aku langsung menghampiri dinda dengan perasaan yang sangat canggung, “imbonna to la kubawa?” aku langsung mengambil banyak barang dan dinda kemudian sok-sok menolak, aku langsung memberitahunya bahwa tidak usah merasa tidak enak, anggap biasa saja, aku bilang anggap biasa saja tapi aku yang merasa mau meledak saking groginya haha.

Kami berjalan pulang beriringan tetapi kami terpisah di pettarani karena aku harus mengantar cica kembali ke rumahnya karena tadi aku pergi bersamanya. Setelah mengantar cica, aku langsung tancap gas ke nipa-nipa. Saat diperjalanan aku super ovt, “capai na aku?”. “sebenarnya apa hubunganna sola kah?”. “aeh capai na aku?”. Aku juga langsung berpikir apa yang bagusnya ku ucapkan saat bertemu nanti dengannya. Disitu aku langsung merencanakan untuk bertanya “sicanding unna poko anu?”, didalam rencanaku jika dinda bilang ia, aku pasti jawab “oo ia, eda pole na jadi”, taapi kalau dinda bilang tidak, aku pasti menjawab “bisana maju?”. Tapi yaah pada akhirnya itu hanya sebuah rencana. Setelah sudah dekat dengan rumah dinda, aku menelponnya langsung untuk menanyakan alamat pastinya, setelah sampai di rumahnya, rencana yang tadinya sangat matang, entah hilang kemana, langsung blank, entah kenapa langsung bilang “macca mko mang motor le?” haha efek grogi. Sesaat sebelum lanjut pulang, dan makasih lalu sama-sama, dinda bilang “cako leppang?”. “hee??? kurangajar te, madoang ko ke salting salto na” haha kampret te dinda.

Oii dinda “ke mussenni kona matumbai gr ku setelahna jo… iiih kampret lu”. Lama kelamaan aku semakin bertanya-tanya, memangnya dinda masih pacaran sama dia, bisa-bisanya suruh orang yang statusnya mantan padahal disana ada pacarnya juga. Orang yang pertama aku ceritakan tentang kejadian itu adalah dandi, dan ternyata dia sudah tahu, dapat info dari muha (temanku juga, dia datang bersama amel saat di kampusnya dinda). Saat aku menceritakan kejadian itu kepadanya, dia malah tertawa dan berkata bahwa dia sebenarnya sudah tahu, tapi dia juga sedikit bertanya-tanya kenapa bisa seperti itu. Aku juga menceritakan kejadian itu kepada teman-teman dekat ku, saat itu kami berada di cafe, di baraka. Aku menceritakan itu kepada ai, faat, anto, dan muti. Mereka malah langsung mengejekku saat itu juga. Kami lanjut bercerita dan menerka-nerka dari kejadian itu, tiba-tiba muti mengatakan “eda lako ia na sicanding”, lalu ai menyanggah dan bertanya “TTM?”, muti kembali menjawab “kayaknya ia”. Dari situ aku tahu bahwa mereka tidak pacaran, aku lumayan senang mendengarnya tapi tidak terlalu berharap karena aku tahu kalau mereka memang dekat.

Saat itu walaupun sibuk menyiapkan skripsi, aku masih tetap kepikiran tentang semuanya. Ada satu malam saat aku mengerjakan aplikasi yang kubuat dan karena capek menghadapi error dari aplikasi, aku bermain-main sosmed juga melihat beberapa ig story, salah satunya ig story milik dinda, saat itu dia merepost sebuah gambar yang bertuliskan “i will wait for you because honestly i don’t want anyone else” dari situ aku semakin bertanya-tanya, sebenarnya yang dinda maksud itu siapa, dan itu semakin membuatku panas, apakah harus jujur kepadanya atau tidak.

Di malam itu juga aku langsung memastikan dan bertanya kepada yung, karena dia sangat dekat dengan dinda selama di bangku kuliah. Aku bertanya kepadanya “den unnaparakayya harapan?”. Aku agak lupa jawaban pasti dari yung tapi kurang lebih dia berkata, kayaknya ia, masih ada. Setelah mendengar itu aku langsung semangat tapi juga agak pesimis karena masih 50/50. Saat itu aku langsung melanjutkan mengerjakan aplikasi yang kubuat sampai hampir tengah malam.

Saat itu aku terus berpikir, apakah aku harus mengatakannya atau tidak. Tapi akhirnya aku memutuskan untuk mengungkapkan perasaan ku dengan perasaan mau diterima atau tidak yang penting sudah ku ungkapkan, diterima yes yes yes, ditolak yaa mau diapa, yang penting sudah tenang karena sudah diungkapkan. Setelah berpikir seperti itu, aku langsung me reply story ig dinda yang tadi dengan mengatakan “den unnaparakayya harapan?”. Itu sudah tengah malam dan dinda juga tidak aktif makanya, aku berharap dibalasnya besok, setelah mengatakan itu aku jadi lega dan bisa kembali fokus mengerjakan aplikasi. Tiba-tiba pada waktu subuh, dinda tiba-tiba membalasnya dengan kata-kata yang terkejut mengenai fakta yang aku ucapkan.

Aku kembali bertanya dan memastikan kepada dinda, apa jawabannya, kamu mau atau tidak. Di malam itu dinda tidak langsung menjawabnya, dia hanya berkata bahwa dia ngantuk dan ingin tidur. Sebenarnya dari obrolan singkat itu aku sudah dapat jawaban beberapa persen bahwa dinda juga mau, tapi dia belum memberikan jawaban pasti ia atau tidak. Karena itu di pagi hari aku kembali bertanya kepada dinda, apa jawabannya, dan masih saja dia tidak memberikan jawaban yang pasti. Setelah itu aku berangkat ke kampus untuk melakukan bimbingan skripsi bersama dosen, saat kembali ke rumah aku berencana untuk keluar mencari makanan, seblak menjadi pilihanku. Di warung seblak, aku kembali bertanya kepada dinda, bagaimana jawabannya, sedikit ngobrol-ngobrol sambil menggoda, tapi dinda tetap juga tidak memberikan jawaban pasti.Tapi dinda saat itu berkata kurang lebih seperti ini “ikomo jawab’i”. Aku langsung berpikir lahh? aku??, bodo’ kamu yah, kan aku yang ungkapkan perasaan, jadi yang aku mau ya ia, kan aku yang mengajak, ya jawabanku ya pasti lah ia, langsung lah kujawab ia. Dan dari situ jadian dehh mweheheheheh, “hallo pacar”.


SAMPAI JUMPA DI SEASON II
`;

  const splitStoryByParagraph = (story) => {
    return story.split("\n\n").filter((p) => p.trim());
  };

  const allPages = useMemo(() => {
    const contentPages = splitStoryByParagraph(fullStory);
    const pages = [];

    pages.push(
      <div
        key="cover"
        className="bg-gradient-to-br from-pink-400 to-purple-400 p-8 flex flex-col items-center justify-center"
      >
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4 text-center">📖</h2>
          <h1 className="text-3xl font-bold mb-2 text-center">Fatur's pov</h1>
          <h1 className="text-md font-bold mb-2 text-center">
            Cerita dari fatur
          </h1>
          <div className="border-t-2 border-white w-32 mx-auto mb-8 text-center"></div>
          <p className="text-sm text-left mb-1">Disclaimer :</p>
          <p className="text-xs text-left">
            - Mungkin Ceritanya tidak beraturan waktunya, mohon maklum yaa..{" "}
            <br />
            - Dari cerita ini juga fatur lagi curhat dari apa yang dia rasa tiap
            waktu hehe.. <br />
          </p>
        </div>
      </div>
    );

    contentPages.forEach((content, index) => {
      pages.push(
        <div key={`content-${index}`} className="bg-amber-50 p-6 shadow-inner">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line font-serif text-xs md:text-sm text-justify indent-8">
                {content}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-amber-200 text-right flex-shrink-0">
              <span className="text-xs text-gray-400">{index + 1}</span>
            </div>
          </div>
        </div>
      );
    });

    if (contentPages.length % 2 !== 0) {
      pages.push(
        <div
          key="empty-page"
          className="bg-amber-50 p-8 shadow-inner flex items-center justify-center overflow-hidden"
        >
          <p className="text-gray-400 italic text-center text-sm"></p>
        </div>
      );
    }

    pages.push(
      <div
        key="back-cover"
        className="bg-gradient-to-br from-purple-400 to-pink-400 p-8 flex flex-col items-center justify-center"
      >
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-4">📖</h2>
          <p className="text-xl mb-4 font-semibold">To Be Continue..</p>
          <p className="text-md mb-2">Cerita nya belum berakhir yaah</p>
          <div className="border-t-2 border-white w-32 mx-auto mb-8 text-center"></div>
          <div className="mt-8">
            <p className="text-2xl font-bold">📖</p>
            <p className="text-xs">
              Makasih sudah membaca cerita dan curhatan patur hehe
            </p>
          </div>
        </div>
      </div>
    );

    return pages;
  }, [fullStory]);

  const handleOpenBook = () => {
    setShowQuiz(false);
    setShowBook(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowQuiz(false);
    setShowBook(false);
    setCurrentPage(0);
  };

  const handleClickBook = () => {
    setOpen(true);
    setShowQuiz(true);
  };

  const handleQuizClose = () => {
    handleClose();
  };

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    if (book.current && book.current.pageFlip) {
      book.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (book.current && book.current.pageFlip) {
      book.current.pageFlip().flipPrev();
    }
  };

  return (
    <section className="py-1 px-4 md:px-8 text-center">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #fef3c7; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d97706; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #b45309; }
      `}</style>

      <motion.div
        onClick={handleClickBook}
        whileHover={{ scale: 1.08, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block cursor-pointer"
      >
        <img
          src="/icon/romance.png"
          alt="Book"
          className="w-30 md:w-38 mx-auto drop-shadow-lg"
        />
      </motion.div>
      <p className="font-playfair text-2xl text-rose-300 text-center">
        Fatur's pov
      </p>

      <div className="mt-3 text-center dark:text-white/80 text-gray-500 text-xs">
        <p>💡 Ceritanya agak panjang, jadi semoga nda bosan, klik bukunya</p>
      </div>

      <AnimatePresence>
        {showQuiz && (
          <QuizModal
            isOpen={showQuiz}
            onComplete={handleOpenBook}
            onClose={handleQuizClose}
          />
        )}

        {open && showBook && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <button
              onClick={handleClose}
              className="fixed top-4 right-4 bg-white text-rose-500 text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-[60] font-semibold cursor-pointer hover:bg-rose-50 transition-colors"
            >
              ✕
            </button>

            <motion.div
              className="fixed inset-0 z-[53] flex items-center justify-center px-4 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6">
                    <HTMLFlipBook
                      ref={book}
                      width={isMobile ? 300 : 350}
                      height={isMobile ? 450 : 500}
                      size="stretch"
                      minWidth={isMobile ? 250 : 280}
                      maxWidth={isMobile ? 350 : 450}
                      minHeight={isMobile ? 380 : 400}
                      maxHeight={isMobile ? 550 : 600}
                      showCover={true}
                      mobileScrollSupport={true}
                      onFlip={onFlip}
                      onInit={(e) => {
                        if (e && e.object && e.object.pages) {
                          setTotalPages(e.object.pages.length);
                        }
                      }}
                      className="shadow-2xl"
                      drawShadow={true}
                      flippingTime={1000}
                      usePortrait={isMobile}
                      startPage={0}
                      autoSize={true}
                      maxShadowOpacity={0.5}
                    >
                      {allPages}
                    </HTMLFlipBook>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className="cursor-pointer bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400/60 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-sm backdrop-blur-sm"
                    >
                      ← Prev
                    </button>

                    <span className="text-white font-medium text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      {currentPage + 1} / {totalPages}
                    </span>

                    <button
                      onClick={nextPage}
                      disabled={currentPage >= totalPages - 1}
                      className="cursor-pointer bg-pink-500/80 hover:bg-pink-600 disabled:bg-gray-400/60 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-sm backdrop-blur-sm"
                    >
                      Next →
                    </button>
                  </div>

                  <div className="mt-3 text-center text-white/80 text-xs">
                    <p>💡 Klik tombol next/prev buku untuk membalik halaman</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FaturPov;
