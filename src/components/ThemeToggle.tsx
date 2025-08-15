import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleButtonClick = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      className="border px-3 py-1.5 rounded-md text-sm hover:bg-black/5 dark:hover:bg-white/10"
      onClick={handleButtonClick}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
