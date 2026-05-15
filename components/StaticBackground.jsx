"use client";
import React, { memo } from "react";

const StaticBackground = memo(({ theme }) => {
  const lightStyles = {
    backgroundColor: "hsl(32, 54%, 93%)", // F7EDE2
    backgroundImage: `
      radial-gradient(ellipse at 10% 10%, hsla(37, 91%, 67%, 0.2), transparent),
      radial-gradient(ellipse at 90% 90%, hsla(1, 80%, 73%, 0.15), transparent),
      radial-gradient(ellipse at 50% 50%, hsla(166, 16%, 58%, 0.1), transparent),
      linear-gradient(hsla(32, 20%, 80%, 0.3) 1.5px, transparent 1.5px),
      linear-gradient(to right, hsla(32, 20%, 80%, 0.3) 1.5px, transparent 1.5px)
    `,
    backgroundSize: "100% 100%, 100% 100%, 100% 100%, 40px 40px, 40px 40px",
  };

  const darkStyles = {
    backgroundColor: "hsl(222, 47%, 6%)",
    backgroundImage: `
      radial-gradient(ellipse at 10% 10%, hsla(37, 91%, 67%, 0.15), transparent),
      radial-gradient(ellipse at 90% 90%, hsla(1, 80%, 73%, 0.1), transparent),
      linear-gradient(hsla(222, 47%, 10%, 1) 1.5px, transparent 1.5px),
      linear-gradient(to right, hsla(222, 47%, 10%, 1) 1.5px, transparent 1.5px)
    `,
    backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
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
