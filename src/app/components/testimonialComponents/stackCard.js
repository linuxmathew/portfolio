import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "./stackCard.css";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="card-stack-container">
      {cards.map((card, index) => (
        <motion.div
          key={card.name}
          className="card-stack-card"
          style={{
            top: index * -CARD_OFFSET,
            zIndex: cards.length - index,
          }}
          animate={{
            scale: 1 - index * SCALE_FACTOR,
          }}
        >
          <div className="card-quote">{card.quote}</div>
          <div className="card-footer">
            <p className="card-name">{card.name}</p>
            <p className="card-title">{card.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
