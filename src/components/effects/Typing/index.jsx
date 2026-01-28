import { useEffect, useState } from "react";

export default function TypingText({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className = "",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const currentText = texts[textIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < currentText.length) {
      // digitando
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);

    } else if (!isDeleting && index === currentText.length) {
      // pausa antes de apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);

    } else if (isDeleting && index > 0) {
      // apagando
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);

    } else if (isDeleting && index === 0) {
      // próximo texto
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [
    index,
    isDeleting,
    currentText,
    texts.length,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <h1 className={`
      ${className}
      whitespace-normal
      break-words
      overflow-hidden
      max-w-full
      text-center
    `}>
      {displayedText}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </h1>
  );
}
