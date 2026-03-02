import { useState } from "react";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This is the best product I've ever used! It exceeded all my expectations.",
      author: "Jane Doe",
      role: "CEO at TechFlow",
    },
    {
      quote:
        "I highly recommend this product to everyone! The support team is amazing.",
      author: "John Smith",
      role: "Product Designer",
    },
    {
      quote:
        "This product has completely changed my life! My workflow is 10x faster now.",
      author: "Bob Johnson",
      role: "Freelance Developer",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative bg-white/80 backdrop-blur-lg border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="text-6xl text-blue-500/20 font-serif absolute top-6 left-8">
            “
          </div>

          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed transition-all duration-500 ease-in-out">
              {testimonials[currentIndex].quote}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].author[0]}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 flex gap-3">
            <button
              onClick={handlePrevClick}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-90 shadow-sm"
            >
              <HiOutlineChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextClick}
              className="p-3 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all active:scale-90 shadow-lg"
            >
              <HiOutlineChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === index ? "w-8 bg-blue-500" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
