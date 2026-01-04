"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function ButtonWhats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/554831978120", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#075e54] hover:bg-[#064e45] fixed bottom-6 right-6 
        h-13 w-13 rounded-full shadow-lg 
        transition-all duration-300 cursor-pointer z-50
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
    >
      <FaWhatsapp size={40} color="#F7F5EF"/>
    </Button>
  );
}