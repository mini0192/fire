'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [size, setSize] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => prevSize - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {size < 1 ? (
        <div>불 어디감?</div>
      ) : (
        size > 20 ? (
          <div>불났음 ㅂㅂ</div>
        ): (
          <>
            <div className="flex justify-center items-center mb-4">
              <Image 
                src="https://cdn-icons-png.flaticon.com/512/7677/7677560.png" 
                alt="없어짐"
                width={size * 30} 
                height={size * 20} 
              />
            </div>
            <div className="flex justify-center items-center">
              <button onClick={() => setSize(size + 1)}>나무 넣기</button>
            </div>
          </>
        )
      )}
    </div>
  );
}
