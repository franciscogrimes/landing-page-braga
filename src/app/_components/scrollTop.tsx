"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "lucide-react"; // mudei para "up", combina melhor com scrollTop
import { Button } from "@/components/ui/button";

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`bg-[#0F3B48] fixed bottom-6 right-6 size-10 rounded-full shadow-lg transition-opacity duration-300 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none "
      }`}
    >
      <ChevronUpIcon className="h-5 w-5 text-[#F7F5EF] " />
    </Button>
  );
}
