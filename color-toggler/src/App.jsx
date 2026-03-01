import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 flex flex-col items-center justify-center p-6 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
    >
      <button
        onClick={toggleTheme}
        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 active:scale-95 ${
          isDarkMode
            ? "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
            : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
        }`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <section className="mt-16 text-center">
        <h1
          className={`text-6xl md:text-8xl font-black transition-colors duration-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
        >
          Welcome To A <br />
          <span className={isDarkMode ? "text-amber-400" : "text-indigo-600"}>
            Real World..
          </span>
        </h1>
        <p
          className={`mt-6 text-lg ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
        >
          Experience the transition with smooth animations.
        </p>
      </section>
    </div>
  );
}

export default App;
