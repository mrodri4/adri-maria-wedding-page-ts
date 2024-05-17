import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Playfair_Display_SC } from "next/font/google";
import { Parisienne } from "next/font/google";

import AdriMaria from "@/public/images/adri-maria-hero.jpg";

const font = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

const letteringFont = Parisienne({
  subsets: ["latin"],
  weight: ["400"]
});

const Hero = () => {
  return (
    <section className="flex bg-base-100 md:min-h-[calc(100vh-65px)]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-32 px-8 py-8 lg:py-20">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
          <h1 className={clsx("hidden lg:block text-primary text-4xl lg:text-6xl mb-8", font.className)}>
            MARÍA Y ADRIÁN
          </h1>
          <div className="flex flex-col gap-2 lg:hidden">
            <p className={clsx(
              "text-[1.6rem] opacity-80 leading-relaxed flex",
              letteringFont.className
            )}>
              “Cuando menos los esperaba, encontré en Adri todo. Mi godo canario.”
            </p>
            <p className={clsx(
              "text-[1.4rem] opacity-80 leading-relaxed flex self-center my-2",
              letteringFont.className
            )}>
              María
            </p>
            <p className={clsx(
              "text-[1.6rem] opacity-80 leading-relaxed flex",
              letteringFont.className
            )}>
              “Mientras el mundo se paraba, yo me estaba enamorando.”
            </p>
            <p className={clsx(
              "text-[1.4rem] opacity-80 leading-relaxed flex self-center my-2",
              letteringFont.className
            )}>
              Adrián
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-5">
            <p className="text-lg opacity-80 leading-relaxed">
              Nos conocimos en plena pandemia, en un momento donde el mundo estaba revolucionado. Después de llamarnos la atención mutuamente durante los largos turnos de trabajo, acabamos quedando para cenar una noche y conocernos mejor.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Cuatro años más tarde, somos los mejores compañeros de vida que podríamos imaginarnos para el otro. El resto, es historia conocida.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              ¡Nos vemos bajo el sol de Tenerife! ¡Empieza la cuenta atrás!
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="w-6 h-6 stroke-secondary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
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
