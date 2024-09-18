import { useState, useEffect } from "react";

export const useTypeText = (str = "Текст") => {
  const [placeholder, setPlaceholder] = useState("");
  let position = 0;

  useEffect(() => {
    const typeText = () => {
      if (position === str.length) return;

      const v = getRandomInt(1, 100);

      if (v > 90 && position !== 0) {
        setPlaceholder((prev) => prev + str[getRandomInt(0, str.length - 2)]);
        setTimeout(removeLastChar, 1000);
      } else {
        setPlaceholder((prev) => prev + str[position]);
        position++;
        setTimeout(typeText, getRandomInt());
      }
    };

    const removeLastChar = () => {
      setPlaceholder(str.substring(0, position));
      setTimeout(typeText, getRandomInt());
    };

    function getRandomInt(min = 50, max = 750) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    typeText();
  }, [str]);

  return placeholder;
};
