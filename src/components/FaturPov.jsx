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

  const fullStory = `Hai sayangku, aku pengen cerita sedikit tentang perasaanku selama ini. Kadang aku merasa bingung sendiri, tapi aku yakin kamu adalah orang yang tepat untuk mendengarkan semua ini.

Sejak kita mulai kenal, aku merasa ada sesuatu yang berbeda. Kamu selalu bisa membuatku tersenyum, bahkan di hari-hari yang paling sulit sekalipun. Aku suka cara kamu tertawa, cara kamu bicara, dan cara kamu memperhatikan hal-hal kecil di sekitarmu. Semua itu membuatku jatuh cinta padamu setiap hari.

Aku tahu aku bukan orang yang sempurna. Aku punya banyak kekurangan dan kadang aku merasa tidak cukup baik untukmu. Tapi aku ingin kamu tahu bahwa aku selalu berusaha menjadi yang terbaik untukmu. Aku ingin menjadi seseorang yang bisa kamu andalkan, seseorang yang bisa membuatmu bahagia.

Aku juga ingin minta maaf kalau selama ini aku pernah menyakiti perasaanmu, baik itu secara sengaja atau tidak. Aku tidak pernah bermaksud untuk melakukannya, dan aku berharap kamu bisa memaafkanku. Aku berjanji akan lebih berhati-hati dan lebih memperhatikan perasaanmu ke depannya.

Aku sangat menghargai setiap momen yang kita habiskan bersama. Setiap tawa, setiap pelukan, setiap kata-kata manis yang kamu ucapkan, semuanya berarti sangat banyak bagiku. Aku merasa beruntung bisa memiliki seseorang sepertimu dalam hidupku. Aku berharap kita bisa terus bersama, melewati segala suka dan duka bersama-sama. Aku ingin membangun masa depan yang indah bersamamu, penuh dengan cinta, kebahagiaan, dan petualangan.

Terima kasih sudah menjadi bagian dari hidupku. Aku mencintaimu lebih dari kata-kata yang bisa kuungkapkan. Aku berharap kamu merasakan hal yang sama.
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
