"use client";

import { useEffect, useState } from "react";
import "public/assets/css/starBackground.css";
const generateStars = (num) => {
  let stars = [];
  for (let i = 0; i < num; i++) {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    stars.push(`${x}px ${y}px white`);
  }
  return stars.join(", ");
};

const StarsBackground = ({ children }) => {
  const [stars, setStars] = useState("");
  const [stars2, setStars2] = useState("");
  const [stars3, setStars3] = useState("");

  useEffect(() => {
    setStars(generateStars(700));
    setStars2(generateStars(200));
    setStars3(generateStars(100));
  }, []);

  return (
    <div className="setHeightSectionBackground">
      <div id="stars" style={{ boxShadow: stars }}></div>
      <div id="stars2" style={{ boxShadow: stars2 }}></div>
      <div id="stars3" style={{ boxShadow: stars3 }}></div>
      <div id="title">{children}</div>
    </div>
  );
};

export default StarsBackground;
