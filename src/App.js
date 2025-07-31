import React, { useState } from "react";

const data = [
  {
    id: 1,
    direction: "en-vi",
    type: "paragraph",
    topic: "daily life",
    source: "I usually go for a walk after dinner to relax and think about my day.",
    translation: "Tôi thường đi dạo sau bữa tối để thư giãn và suy nghĩ về ngày của mình.",
    explanation: "'go for a walk' = đi dạo, 'to relax and think about my day' = để thư giãn và suy nghĩ về những gì đã xảy ra trong ngày."
  },
  {
    id: 2,
    direction: "vi-en",
    type: "dialogue",
    topic: "travel",
    source: "Bạn có thể chỉ cho tôi đường đến trạm xe buýt gần nhất không?",
    translation: "Could you show me the way to the nearest bus stop?",
    explanation: "'Could you show me' = Bạn có thể chỉ cho tôi, 'the nearest bus stop' = trạm xe buýt gần nhất."
  }
];

export default function TranslateTrainer() {
  const [current, setCurrent] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const item = data[current];

  const handleCheck = () => {
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % data.length);
    setUserInput("");
    setShowResult(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Luyện Dịch Song Ngữ</h1>

      <div className="mb-4">
        <p className="text-gray-700 font-semibold">Đề bài ({item.direction === "en-vi" ? "Dịch sang tiếng Việt" : "Dịch sang tiếng Anh"}):</p>
        <p className="text-lg mt-2">{item.source}</p>
      </div>

      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Nhập bản dịch của bạn..."
        className="w-full h-28 p-3 border rounded-md mb-4"
      />

      <button onClick={handleCheck} className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
        Kiểm tra
      </button>
      <button onClick={handleNext} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
        Câu khác
      </button>

      {showResult && (
        <div className="mt-6 border-t pt-4">
          <p className="text-green-700 font-semibold">Bản dịch gợi ý:</p>
          <p className="italic">{item.translation}</p>

          <p className="text-gray-700 font-semibold mt-3">Giải thích:</p>
          <p className="text-sm">{item.explanation}</p>
        </div>
      )}
    </div>
  );
}
