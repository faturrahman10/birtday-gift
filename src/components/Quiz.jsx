import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Quiz = () => {
  const questions = [
    {
      q: "Kapan kita pertama kali bertemu?",
      a: "2020-01-15",
    },
    {
      q: "Apa makanan favoritmu waktu kita pertama pergi bersama?",
      a: "ayam geprek",
    },
    {
      q: "Dimana tempat pertama kali kita foto berdua?",
      a: "kafe",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = Object.keys(answers).reduce((acc, key) => {
    const correct = questions[key].a.toLowerCase().trim();
    const reply = answers[key]?.toLowerCase().trim();
    return acc + (correct === reply ? 1 : 0);
  }, 0);

  const getMessage = () => {
    if (score === questions.length)
      return "Kamu benar-benar pasangan terbaik di alam semesta 💖✨";
    if (score >= questions.length / 2)
      return "Kamu sangat mengenalku, aku makin sayang 💕";
    return "Tidak apa-apa, aku tetap cinta kamu apa adanya 💗";
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-10 text-gray-800 dark:text-rose-100">
        Quiz Romantis 💕
      </h2>

      {/* Progress Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-rose-500 h-3"
            initial={{ width: 0 }}
            animate={{ width: `${(score / questions.length) * 100}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <p className="text-center mt-2 text-gray-600 dark:text-gray-300">
          Score: {score} / {questions.length}
        </p>
      </div>

      {/* Questions */}
      <div className="max-w-xl mx-auto space-y-6">
        {questions.map((item, index) => {
          const correct =
            submitted &&
            answers[index]?.toLowerCase().trim() ===
              item.a.toLowerCase().trim();

          const incorrect =
            submitted &&
            answers[index] &&
            answers[index]?.toLowerCase().trim() !==
              item.a.toLowerCase().trim();

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-rose-50 dark:bg-gray-800 rounded-xl shadow-md border border-rose-100 dark:border-gray-700"
            >
              <p className="font-medium mb-3 text-gray-700 dark:text-gray-200">
                {index + 1}. {item.q}
              </p>

              <input
                type="text"
                disabled={submitted}
                value={answers[index] || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [index]: e.target.value })
                }
                className={`w-full p-3 rounded-lg outline-none transition 
                  dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700
                  ${
                    correct
                      ? "border-green-400 bg-green-50 dark:bg-green-900/40"
                      : incorrect
                      ? "border-red-400 bg-red-50 dark:bg-red-900/40"
                      : "border-gray-300"
                  }
                `}
                placeholder="Tulis jawabanmu..."
              />

              {/* Feedback Icon */}
              {submitted && (
                <p
                  className={`mt-2 text-sm ${
                    correct
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-500 dark:text-red-400"
                  }`}
                >
                  {correct ? "Benar! 💖" : "Kurang tepat 💔"}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Button */}
      {!submitted ? (
        <div className="text-center mt-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
            className="px-10 py-3 bg-rose-500 text-white rounded-xl text-lg shadow-lg hover:bg-rose-600 transition"
          >
            Submit
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-10"
        >
          <p className="text-xl md:text-2xl font-playfair text-rose-600 dark:text-rose-300">
            {getMessage()}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Quiz;
