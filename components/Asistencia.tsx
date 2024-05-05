import clsx from "clsx";
import Image from "next/image";
import { Playfair_Display_SC } from "next/font/google";

import Photo1 from "@/public/images/adri-maria-grid-3.jpg";
import Photo2 from "@/public/images/adri-maria-grid-5.jpg";
import Leaves3 from "@/public/images/leaves3.png";
import AsistenciaForm from "./AsistenciaForm";

const font = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

const Asistencia = () => {
  return (
    <section id="asistencia" className="flex md:min-h-[calc(100vh-56px)] relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-16 lg:gap-32 px-8 py-8 lg:py-20">
        <div className="max-lg:min-w-[50%] md:w-2/5 relative shrink-0">
          <div className="hidden lg:block md:w-2/3 translate-y-[-15%] translate-x-[-10%]">
            <div className="transition-transform duration-300 ease-out relative rounded-lg bg-white pt-8 pb-16 px-8 sm:-rotate-2 border-2 border-base-content/10 shadow-md">
              <Image
                className="w-full rounded-md grayscale object-center"
                src={Photo1}
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
                className="w-full rounded-md grayscale object-center"
                src={Photo2}
                alt="Adri Maria"
                priority={true}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 items-center justify-center text-center lg:text-left lg:items-start">
          <Image
            className="min-w-32 w-[10vw] mb-8 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-14"
            src={Leaves3}
            alt="Leaves"
            priority={true}
            width={500}
            height={500}
          />
          <h2 className={clsx("text-primary text-4xl lg:text-6xl mb-8", font.className)}>
            TE ESPERAMOS
          </h2>
          <AsistenciaForm />
        </div>
      </div>
    </section>
  );
};

export default Asistencia;
