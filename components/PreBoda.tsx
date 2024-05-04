import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display_SC } from "next/font/google";

import Photo2 from "@/public/images/adri-maria-grid-4.jpg";
import Photo1 from "@/public/images/adri-maria-grid-8.jpg";
import Leaves3 from "@/public/images/leaves3.png";

const font = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

const data = {
  date: '13 SEPTIEMBRE 2024',
  place: 'https://www.google.es/maps/place/Restaurante+Carmen/@28.3675975,-16.7239228,17z/data=!3m1!4b1!4m6!3m5!1s0xc6a87ffb0880037:0xd1d8ea3216a5f2f4!8m2!3d28.3675928!4d-16.7213479!16s%2Fg%2F1tdbb2dc?entry=ttu',
  time: '19:00 - 22:00',
  title: 'PRE BODA'
};

const PreBoda = () => {
  return (
    <section id="pre-boda" className="flex relative md:min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-32 px-8 py-8 lg:py-20">
        <div className="max-lg:min-w-[50%] md:w-2/5 relative shrink-0">
          <div className="hidden lg:block md:w-2/3 translate-y-[-15%] translate-x-[-10%]">
            <div className="transition-transform duration-300 ease-out relative rounded-lg bg-white pt-8 pb-16 px-8 sm:-rotate-2 border-2 border-base-content/10 shadow-md">
              <Image
                className="w-full rounded-md object-center grayscale"
                src={Photo2}
                alt="Adri Maria"
                priority={true}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="lg:w-2/3 lg:absolute lg:left-1/2 lg:top-1/2 lg:translate-x-[-10%] lg:translate-y-[-15%]">
            <div className="transition-transform duration-300 ease-out relative rounded-lg bg-white pt-8 pb-16 px-8 lg:rotate-2 border-2 border-base-content/10 shadow-md">
              <Image
                className="w-full rounded-md object-center grayscale"
                src={Photo1}
                alt="Adri Maria"
                priority={true}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center text-center lg:text-left lg:items-start">
          <Image
            className="min-w-32 w-[10vw] mb-8 lg:absolute lg:top-[65px] lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-14"
            src={Leaves3}
            alt="Leaves"
            priority={true}
            width={500}
            height={500}
          />
          <h2 className={clsx("text-primary text-4xl lg:text-6xl mb-8", font.className)}>
            {data.title}
          </h2>
          <p className="text-lg opacity-80 leading-relaxed flex items-center max-md:flex-col gap-2 md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6 stroke-secondary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {data.date}
          </p>
          <p className="text-lg opacity-80 leading-relaxed flex items-center max-md:flex-col gap-2 md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6 stroke-secondary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {data.time}
          </p>
          <Link
            className="flex max-md:flex-col items-center gap-2 md:gap-4 underline md:hover:underline md:no-underline"
            target="_blank"
            href={data.place}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6 stroke-secondary">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            <div>
              <p className="text-lg opacity-80 leading-relaxed">Restaurante Carmen. Av.de Canarias 1</p>
              <p className="text-lg opacity-80 leading-relaxed">Icod de los Vinos, 38430, Santa Cruz de Tenerife</p>
            </div>
          </Link>
          <div className="mt-4 flex flex-col gap-4">
            <p className="text-lg opacity-80 leading-relaxed">
              Antes de que llegue el gran día, no se nos ocurre mejor manera para ir calentando motores y conocerse entre todos que celebrar una preboda.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              ¡No os lo podéis perder!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreBoda;
