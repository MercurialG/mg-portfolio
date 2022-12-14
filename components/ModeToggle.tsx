"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme == "system" ? systemTheme : theme;

  return (
    <div className="md:ml-12">
      {currentTheme === "dark" ? (
        <span
          onClick={() => setTheme("light")}
          className="cursor-pointer text-2xl"
        >
          🌞
        </span>
      ) : (
        <span
          onClick={() => setTheme("dark")}
          className="cursor-pointer text-2xl"
        >
          {" "}
          🌚
        </span>
      )}
    </div>
  );
}

export default ModeToggle;
