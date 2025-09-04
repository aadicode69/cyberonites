import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  texts = ["Empowering Students", "Protecting Cyberspace", "Building Future"],
  className = "",
  speed = 100,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          } else {
            setIsWaiting(true);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(fullText.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, speed]);

  return (
    <div className={`font-bold ${className}`}>
      <span>{currentText}</span>
      <span
        className="animate-pulse ml-1 inline-block"
        style={{
          color: "#06b6d4",
          fontSize: "1.3em",
          lineHeight: "1",
          verticalAlign: "middle",
        }}
      >
        |
      </span>
    </div>
  );
};

export default TypewriterEffect;
