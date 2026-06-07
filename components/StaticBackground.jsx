"use client";
import React, { memo } from "react";

const StaticBackground = memo(({ theme }) => {
  const lightStyles = {
    backgroundColor: "hsl(35, 42%, 90%)",
    backgroundImage: `
      radial-gradient(ellipse 70% 55% at 12% 12%, hsla(37, 91%, 72%, 0.32), transparent),
      radial-gradient(ellipse 60% 50% at 88% 88%, hsla(1, 80%, 72%, 0.22), transparent),
      radial-gradient(ellipse 50% 60% at 50% 50%, hsla(166, 20%, 68%, 0.12), transparent),
      radial-gradient(ellipse 40% 30% at 80% 20%, hsla(37, 70%, 85%, 0.3), transparent)
    `,
  };

  const darkStyles = {
    backgroundColor: "hsl(222, 47%, 5%)",
    backgroundImage: `
      radial-gradient(ellipse 65% 50% at 12% 12%, hsla(37, 70%, 18%, 0.45), transparent),
      radial-gradient(ellipse 55% 45% at 88% 88%, hsla(1, 70%, 18%, 0.3), transparent),
      radial-gradient(ellipse 45% 55% at 50% 50%, hsla(222, 47%, 14%, 0.55), transparent),
      radial-gradient(ellipse 35% 28% at 75% 18%, hsla(222, 60%, 10%, 0.4), transparent)
    `,
  };

  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-700"
      style={theme === "light" ? lightStyles : darkStyles}
    />
  );
});
StaticBackground.displayName = "StaticBackground";

export default StaticBackground;
