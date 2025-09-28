import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [page, setPage] = useState(0);

  const pages = [
    { label: "Start", content: <h1 className="text-3xl font-bold mt-4">Mihaela?</h1> },
    { label: "Rain", content: <h1 className="text-4xl font-bold text-blue-700 mb-2 drop-shadow-lg">Zilele Ploioase 🌧</h1> },
    { label: "Hearts", content: <h1 className="text-4xl font-bold text-red-600 mb-2 drop-shadow-md">Te Iubesc ❤</h1> },
    { label: "Sun", content: <h1 className="text-5xl font-bold text-yellow-600 mb-2 drop-shadow-md">Soare ☀️</h1> },
    { label: "Sunset", content: <h1 className="text-5xl font-bold text-orange-700 mb-2 drop-shadow-lg">Apus 🌇</h1> },
  ];

  const totalPages = pages.length;
  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const BottomNav = () => (
    <motion.div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-50">
      {pages.map((p, i) => (
        <motion.button
          key={i}
          onClick={() => setPage(i)}
          className={`min-w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 overflow-hidden relative px-2 text-center leading-tight ${page === i ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          {page === i ? p.label : "•"}
        </motion.button>
      ))}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center relative overflow-hidden">
      {/* Navigation buttons and AnimatePresence content go here */}
      <BottomNav />
    </div>
  );
}