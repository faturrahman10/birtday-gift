import React, { useRef, useState, useEffect, useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion, AnimatePresence } from "framer-motion";

const FaturPov = () => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [open, setOpen] = useState(false);

  // State untuk track ukuran layar
  const [isMobile, setIsMobile] = useState(false);

  // Lock scroll background ketika modal terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // CERITA LENGKAP - Paste seluruh cerita kamu di sini
  const fullStory = `Hari ini adalah hari yang paling special dalam hidupku. Aku pertama kali bertemu denganmu di kafe kecil itu. Senyummu yang manis membuatku langsung jatuh cinta. Aku masih ingat bagaimana kita mengobrol berjam-jam tanpa terasa. Setiap kata yang kamu ucapkan terasa begitu bermakna.

Aku tidak pernah menyangka bahwa pertemuan sederhana itu akan mengubah hidupku selamanya. Kamu adalah orang yang selalu bisa membuatku tersenyum di hari-hari terberatku.

Kencan pertama kita ke pantai masih terukir jelas di ingatanku. Matahari terbenam yang indah, deburan ombak, dan kamu di sisiku. Sempurna!

Aku gugup saat memegang tanganmu untuk pertama kalinya. Tapi kamu membuatku merasa nyaman. Kita tertawa bersama, berbagi cerita, dan membangun kenangan indah yang akan selalu kusimpan.

Saat itu aku tahu, kamu adalah orang yang tepat untukku.

Hari ini kita pergi hiking bersama. Perjalanannya melelahkan, tapi setiap langkah bersamamu terasa menyenangkan. Kita berhenti di puncak, menikmati pemandangan, dan aku berjanji dalam hati untuk selalu ada untukmu.

Kamu mengajariku bahwa cinta bukan hanya tentang momen-momen romantis, tapi juga tentang melewati tantangan bersama. Terima kasih sudah menjadi partner terbaikku.

Tidak semua kenangan harus spektakuler. Kadang momen terbaik adalah saat kita nonton film bersama di sofa, makan mie instan tengah malam, atau sekadar diam-diam sambil memelukmu.

Kamu membuat hal-hal biasa menjadi luar biasa. Dengan kamu, bahkan diam pun terasa nyaman. Aku bersyukur memilikimu.

Aku ingin berterima kasih untuk semua yang sudah kamu lakukan untukku. Terima kasih sudah mendengarkan keluhanku, mendukung mimpiku, dan mencintaiku apa adanya.

Kamu adalah anugerah terbesar dalam hidupku. Aku berharap kita bisa terus menulis cerita indah ini bersama, hari demi hari, tahun demi tahun.

Selamat ulang tahun, sayangku! Ini adalah hadiah kecil dariku yang berisi semua cinta dan kenanganku bersamamu. I love you! ❤️`;

  // Fungsi untuk membagi cerita otomatis per halaman
  const splitStoryIntoPages = (story, charsPerPage = 600) => {
    const paragraphs = story.split("\n\n").filter((p) => p.trim());
    const pages = [];
    let currentPage = "";

    paragraphs.forEach((paragraph) => {
      const testContent = currentPage
        ? currentPage + "\n\n" + paragraph
        : paragraph;

      if (testContent.length <= charsPerPage) {
        currentPage = testContent;
      } else {
        if (currentPage) {
          pages.push(currentPage);
        }
        currentPage = paragraph;
      }
    });

    if (currentPage) {
      pages.push(currentPage);
    }

    return pages;
  };

  // Generate halaman dengan useMemo agar stabil
  const allPages = useMemo(() => {
    // Kurangi karakter per halaman agar tidak overflow (dari 600 jadi 450)
    const contentPages = splitStoryIntoPages(fullStory, 450);
    const pages = [];

    // Cover
    pages.push(
      <div
        key="cover"
        className="bg-gradient-to-br from-pink-400 to-purple-500 p-8 flex flex-col items-center justify-center"
      >
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">💕</h2>
          <h1 className="text-3xl font-bold mb-2">Our Story</h1>
          <p className="text-xl mb-8">Cerita Cinta Kita</p>
          <div className="border-t-2 border-white w-32 mx-auto mb-8"></div>
          <p className="text-sm">Untuk: Sayangku</p>
          <p className="text-sm">Dari: Fatur dengan Cinta</p>
        </div>
      </div>
    );

    // Content pages
    contentPages.forEach((content, index) => {
      pages.push(
        <div
          key={`content-${index}`}
          className="bg-amber-50 p-6 shadow-inner overflow-hidden"
        >
          <div className="h-full flex flex-col">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line font-serif text-sm">
                {content}
              </p>
            </div>
            <div className="mt-4 text-right">
              <span className="text-xs text-gray-400">{index + 2}</span>
            </div>
          </div>
        </div>
      );
    });

    // Empty page if needed
    if (contentPages.length % 2 !== 0) {
      pages.push(
        <div
          key="empty-page"
          className="bg-amber-50 p-8 shadow-inner flex items-center justify-center overflow-hidden"
        >
          <p className="text-gray-400 italic text-center text-sm">
            ~ Halaman ini sengaja dikosongkan ~
          </p>
        </div>
      );
    }

    // Back cover
    pages.push(
      <div
        key="back-cover"
        className="bg-gradient-to-br from-purple-500 to-pink-400 p-8 flex flex-col items-center justify-center"
      >
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
    );

    return pages;
  }, [fullStory]);

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
    <section className="py-24 px-4 md:px-8 text-center">
      {/* Book Icon - Clickable */}
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block cursor-pointer"
      >
        <img
          src="/icon/romance.png"
          alt="Book"
          className="w-40 md:w-48 mx-auto drop-shadow-lg"
        />
        <p className="font-playfair text-2xl text-rose-300 mb-3 text-center">
          Buku Harian Kita
        </p>
      </motion.div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay Background */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                fixed top-4 right-4 bg-white text-rose-500 text-xl 
                w-10 h-10 rounded-full flex items-center justify-center shadow-lg
                z-[60] font-semibold cursor-pointer hover:bg-rose-50 transition-colors
              "
            >
              ✕
            </button>

            {/* Modal Content */}
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
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-transparent"
                >
                  {/* Flip Book */}
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

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className="bg-purple-600/80 hover:bg-purple-700 disabled:bg-gray-400/60 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-sm backdrop-blur-sm"
                    >
                      ← Prev
                    </button>

                    <span className="text-white font-medium text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      {currentPage + 1} / {totalPages}
                    </span>

                    <button
                      onClick={nextPage}
                      disabled={currentPage >= totalPages - 1}
                      className="bg-purple-600/80 hover:bg-purple-700 disabled:bg-gray-400/60 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-sm backdrop-blur-sm"
                    >
                      Next →
                    </button>
                  </div>

                  {/* Instructions */}
                  <div className="mt-3 text-center text-white/80 text-xs">
                    <p>💡 Klik tepi kanan/kiri buku untuk membalik halaman</p>
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
