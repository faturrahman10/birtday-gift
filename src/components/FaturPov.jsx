import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const FaturPov = () => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Data diary Anda - sesuaikan dengan cerita Anda
  const diaryEntries = [
    {
      date: "14 Februari 2024",
      title: "Hari Pertama Kita",
      content: `Hari ini adalah hari yang paling special dalam hidupku. Aku pertama kali bertemu denganmu di kafe kecil itu. Senyummu yang manis membuatku langsung jatuh cinta. Aku masih ingat bagaimana kita mengobrol berjam-jam tanpa terasa. Setiap kata yang kamu ucapkan terasa begitu bermakna.

Aku tidak pernah menyangka bahwa pertemuan sederhana itu akan mengubah hidupku selamanya. Kamu adalah orang yang selalu bisa membuatku tersenyum di hari-hari terberatku.`,
    },
    {
      date: "20 Maret 2024",
      title: "Kencan Pertama",
      content: `Kencan pertama kita ke pantai masih terukir jelas di ingatanku. Matahari terbenam yang indah, deburan ombak, dan kamu di sisiku. Sempurna!

Aku gugup saat memegang tanganmu untuk pertama kalinya. Tapi kamu membuatku merasa nyaman. Kita tertawa bersama, berbagi cerita, dan membangun kenangan indah yang akan selalu kusimpan.

Saat itu aku tahu, kamu adalah orang yang tepat untukku.`,
    },
    {
      date: "5 Mei 2024",
      title: "Petualangan Kita",
      content: `Hari ini kita pergi hiking bersama. Perjalanannya melelahkan, tapi setiap langkah bersamamu terasa menyenangkan. Kita berhenti di puncak, menikmati pemandangan, dan aku berjanji dalam hati untuk selalu ada untukmu.

Kamu mengajariku bahwa cinta bukan hanya tentang momen-momen romantis, tapi juga tentang melewati tantangan bersama. Terima kasih sudah menjadi partner terbaikku.`,
    },
    {
      date: "17 Juli 2024",
      title: "Momen Sederhana",
      content: `Tidak semua kenangan harus spektakuler. Kadang momen terbaik adalah saat kita nonton film bersama di sofa, makan mie instan tengah malam, atau sekadar diam-diam sambil memelukmu.

Kamu membuat hal-hal biasa menjadi luar biasa. Dengan kamu, bahkan diam pun terasa nyaman. Aku bersyukur memilikimu.`,
    },
    {
      date: "30 September 2024",
      title: "Terima Kasih",
      content: `Aku ingin berterima kasih untuk semua yang sudah kamu lakukan untukku. Terima kasih sudah mendengarkan keluhanku, mendukung mimpiku, dan mencintaiku apa adanya.

Kamu adalah anugerah terbesar dalam hidupku. Aku berharap kita bisa terus menulis cerita indah ini bersama, hari demi hari, tahun demi tahun.

Selamat ulang tahun, sayangku! Ini adalah hadiah kecil dariku yang berisi semua cinta dan kenanganku bersamamu. I love you! ❤️`,
    },
  ];

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-2">
          📖 Buku Harian Kita
        </h1>
        <p className="text-lg text-gray-600">Kenangan Indah Bersamamu</p>
      </div>

      {/* Flip Book Container */}
      <div className="relative">
        <HTMLFlipBook
          ref={book}
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          onInit={(e) => setTotalPages(e.object.pages.length)}
          className="shadow-2xl"
          drawShadow={true}
          flippingTime={1000}
          usePortrait={false}
          startPage={0}
          autoSize={true}
          maxShadowOpacity={0.5}
        >
          {/* COVER PAGE - Tampil sendiri */}
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-8 flex flex-col items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-4">💕</h2>
              <h1 className="text-3xl font-bold mb-2">Our Story</h1>
              <p className="text-xl mb-8">Cerita Cinta Kita</p>
              <div className="border-t-2 border-white w-32 mx-auto mb-8"></div>
              <p className="text-sm">Untuk: Sayangku</p>
              <p className="text-sm">Dari: Fatur dengan Cinta</p>
            </div>
          </div>

          {/* HALAMAN ISI - Akan tampil berpasangan (2 halaman) */}
          {diaryEntries.map((entry, index) => (
            <div key={index} className="bg-amber-50 p-8 shadow-inner">
              <div className="h-full flex flex-col">
                <div className="border-b-2 border-amber-300 pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-500 italic">{entry.date}</p>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line font-serif">
                    {entry.content}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-xs text-gray-400">
                    Halaman {index + 2}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* HALAMAN KOSONG jika jumlah halaman isi ganjil - agar penutup tampil sendiri */}
          {diaryEntries.length % 2 !== 0 && (
            <div className="bg-amber-50 p-8 shadow-inner flex items-center justify-center">
              <p className="text-gray-400 italic text-center">
                ~ Halaman ini sengaja dikosongkan ~
              </p>
            </div>
          )}

          {/* BACK COVER - Tampil sendiri */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-400 p-8 flex flex-col items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-4">❤️</h2>
              <p className="text-xl mb-4">Cerita kita belum berakhir...</p>
              <p className="text-lg">
                Masih banyak halaman yang akan kita tulis bersama
              </p>
              <div className="mt-8">
                <p className="text-2xl font-bold">I Love You</p>
                <p className="text-lg">Forever & Always</p>
              </div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          ← Sebelumnya
        </button>

        <span className="text-gray-700 font-medium">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages - 1}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          Selanjutnya →
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        <p>💡 Klik pada tepi kanan/kiri buku untuk membalik halaman</p>
        <p>atau gunakan tombol navigasi di bawah</p>
      </div>
    </div>
  );
};

export default FaturPov;
