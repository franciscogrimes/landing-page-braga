"use client";

import Image from "next/image";

import garware from "../../../public/GARWARE.png";
import sonax from "../../../public/SONAX.png";
import karcher from "../../../public/KARCHER.png";
import kers from "../../../public/KERS.png";
import oracal from "../../../public/ORACAL.png";

export function Products() {
  const logos = [garware, sonax, karcher, kers, oracal];

  return (
    <section className="bg-black py-16 text-[#ffcb04] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl mb-12 text-center ">
          Quais marcas de produtos que utilizamos?
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="logo-slider flex w-max gap-16">
            {[...logos, ...logos, ...logos, ...logos, ...logos].map(
              (logo, index) => (
                <div
                  key={index}
                  className="relative w-40 h-24 grayscale opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-slider {
          animation: slide 30s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
