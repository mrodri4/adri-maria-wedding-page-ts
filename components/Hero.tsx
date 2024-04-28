import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Playfair_Display_SC } from "next/font/google";
// import { Sofia_Sans_Condensed } from "next/font/google";

import AdriMaria from "@/public/images/adri-maria-grid-2.jpg";
// import AdriMaria from "@/public/images/adri-maria-hero.jpg";

// const font = Sofia_Sans_Condensed({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// });

const font = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

const Hero = () => {
  return (
    <section className="flex bg-base-100 md:min-h-[calc(100vh-65px)]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-32 px-8 py-8 lg:py-20">
        <div className="flex flex-col gap-4 items-center justify-center text-center lg:text-left lg:items-start">
          <h1 className={clsx("hidden lg:block text-primary text-4xl lg:text-6xl mb-8", font.className)}>
            MARÍA Y ADRIÁN
          </h1>
          <p className="text-lg opacity-80 leading-relaxed flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6 stroke-secondary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            14 SEPTIEMBRE 2024
          </p>
          <p className="text-lg opacity-80 leading-relaxed flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6 stroke-secondary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            Los Silos, Santa Cruz de Tenerife
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <p className="text-lg opacity-80 leading-relaxed">
              ¡Qué alegría tan grande es poder compartir con vosotros el inicio de nuestro viaje de vida juntos! Nos llena de emoción invitaros a celebrar nuestra unión el día 14 de septiembre de 2024 en Los Silos, Santa Cruz de Tenerife.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              ¡Nos vemos bajo el sol de Tenerife, listos para hacer recuerdos inolvidables!
            </p>
            <Link
              className="mx-auto lg:mx-0 btn btn-secondary text-white btn-wide my-6"
              href="/#asistencia"
            >
              Confirma tu asistencia
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 shrink-0">
          {/* <div className="transition-transform duration-300 ease-out relative rounded-lg bg-white pt-8 px-8 sm:rotate-2 sm:hover:rotate-3 border-2 border-base-content/10 shadow-md"> */}
          <div className="transition-transform duration-300 ease-out relative rounded-lg bg-white pt-8 px-8 border-2 border-base-content/10 shadow-md">
            <Image
              className="w-full rounded-md object-center grayscale"
              src={AdriMaria}
              alt="Adri Maria"
              priority={true}
              width={500}
              height={500}
            />
            <div className="justify-center flex py-8 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" className="w-6 h-6 stroke-secondary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className={clsx("lg:hidden text-primary text-4xl lg:text-6xl", font.className)}>
          MARÍA Y ADRIÁN
        </h1>
      </div>
    </section>
  );
};

export default Hero;
