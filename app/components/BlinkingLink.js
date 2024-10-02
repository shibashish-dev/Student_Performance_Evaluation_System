import Link from "next/link";
import React, { useState, useEffect } from "react";

const BlinkingLink = ({text,Icon,href}) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const colors = ["red", "blue", "green", "orange", "purple"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }, 1000); // Change color every 1 second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <Link className="btn flex items-center  gap-2 " style={{color: color}} href={href}>
       {Icon && <Icon/>}
      <span>{text}</span>
    </Link>
  );
};

export default BlinkingLink;
