import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    { q: "Kapan kita pertama kali bertemu?", a: "2020-01-15" },
    // Tambahkan lebih banyak
  ];
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const submitQuiz = () => {
    // Logika sederhana untuk cek jawaban
    setScore("Kamu pasangan terbaik di dunia 💕");
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800">
        Quiz Romantis
      </h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p>{q.q}</p>
          <input
            type="text"
            onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
      ))}
      <button
        onClick={submitQuiz}
        className="bg-rose-500 text-white px-6 py-2 rounded"
      >
        Submit
      </button>
      {score && <p className="mt-4 text-center">{score}</p>}
    </section>
  );
};

export default Quiz;
