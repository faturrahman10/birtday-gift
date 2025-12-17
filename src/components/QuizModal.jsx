import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuizModal = ({ isOpen, onComplete, onClose }) => {
  const [showConfirm, setShowConfirm] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState("");

  const questions = [
    {
      q: "Siapa nama pacar kesayanganmu satu-satunya?",
      options: ["Haechan", "Fatur", "Mark", "Jaemin"],
      a: "fatur",
      correctFeedback:
        "Yups, bettul banget, itu aku, fatur😁. Kamu juga kesayanganku! 🥰",
      wrongFeedback:
        "Yakiinnn? itu salah looh, masa ga tau, coba deh pikir-pikir lagi! 😜",
    },
    {
      q: "Fatur lebih ganteng 100% dari Haechan kan?",
      options: ["Tidak", "Mungkin", "Ya", "Ragu-ragu"],
      a: "ya",
      correctFeedback:
        "Bettul, banget! Fatur pastinya sih yang paling ganteng, imut, dan gemesin!😁",
      wrongFeedback:
        "Eh salah! Coba deh bayangin ulang mukanya, pasti langsung sadar kalau fatur emang ga ada tandingannya! 😜",
    },
  ];

  const handleAnswer = (answer) => {
    const correct =
      answer.toLowerCase().trim() ===
      questions[currentQuestion].a.toLowerCase().trim();
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowPopup(true);
    if (correct) {
      setScore(score + 1);
      setFeedback(questions[currentQuestion].correctFeedback);
    } else {
      setFeedback(questions[currentQuestion].wrongFeedback);
    }
  };

  const handleNext = () => {
    setShowPopup(false);
    setSelectedAnswer("");
    if (isCorrect) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    }
  };

  const handleConfirmYes = () => {
    setShowConfirm(false);
    setShowQuiz(true);
  };

  const handleConfirmNo = () => {
    onClose();
  };

  const getMessage = () => {
    if (score === questions.length)
      return "Yeeyy.. Kamu berhasil menjawab semuanya dengan benar! 🎉";
  };

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <button
        onClick={onClose}
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
        {showConfirm && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md border-2 border-rose-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Konfirmasi
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Sebelum baca fatur's pov, kamu harus menjawab semua quiz dengan
                benar, siap?
              </p>
              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmNo}
                  className="cursor-pointer px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl font-semibold transition-colors"
                >
                  Nanti deh
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmYes}
                  className="cursor-pointer px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Ready dong!
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {showQuiz && !isFinished && (
          <div className="w-full max-w-2xl">
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-white">
                  Pertanyaan {currentQuestion + 1} dari {questions.length}
                </span>
                <span className="text-sm font-semibold text-rose-400">
                  Score: {score} / {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-rose-400 to-pink-500 h-3"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(score / questions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-rose-100 dark:border-gray-700"
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-sm font-medium mb-4">
                    Pertanyaan {currentQuestion + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                    {questions[currentQuestion].q}
                  </h3>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== ""}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 
                        ${
                          selectedAnswer === option
                            ? "border-rose-500 bg-rose-50 dark:bg-rose-900/30"
                            : "border-gray-200 dark:border-gray-600 hover:border-rose-300 dark:hover:border-rose-500 bg-white dark:bg-gray-700"
                        }
                        ${
                          selectedAnswer !== "" && selectedAnswer !== option
                            ? "opacity-50"
                            : ""
                        }
                        disabled:cursor-not-allowed
                      `}
                    >
                      <div className="flex items-center">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center font-semibold mr-4">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-gray-700 dark:text-gray-200 font-medium">
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {showQuiz && isFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border-2 border-rose-200 dark:border-gray-700">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-playfair text-gray-800 dark:text-gray-100 mb-4">
                Selamaat
              </h3>
              <div className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-6">
                {score} / {questions.length}
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {getMessage()}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="cursor-pointer px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Baca Fatur's pov 📖
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70] p-4"
            onClick={handleNext}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`max-w-md w-full rounded-2xl p-8 shadow-2xl ${
                isCorrect
                  ? "bg-gradient-to-br from-green-400 to-emerald-500"
                  : "bg-gradient-to-br from-red-400 to-pink-500"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-white">
                <motion.div
                  className="text-7xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  {isCorrect ? "✅" : "❌"}
                </motion.div>
                <h3 className="text-3xl font-bold mb-3">
                  {isCorrect ? "Benar!" : "Salah!"}
                </h3>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  {feedback}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="cursor-pointer px-8 py-3 bg-white text-gray-800 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  {isCorrect
                    ? currentQuestion < questions.length - 1
                      ? "Lanjut"
                      : "Hasil"
                    : "Coba Lagi 🔄"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuizModal;
