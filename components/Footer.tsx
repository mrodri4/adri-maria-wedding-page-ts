import clsx from "clsx";
import { Playfair_Display_SC } from "next/font/google";

const font = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-content/10">
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center max-w-7xl mx-auto py-4 px-8">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-5 h-5 stroke-secondary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <p className={clsx("translate-y-[2px] text-xs")}>14 Septiembre 2024</p>
        </div>
        <div className="items-center gap-2 hidden lg:flex">
          <span className={clsx("text-primary", font.className)}>María</span>
          <span className={clsx("text-primary mt-auto")}>&</span>
          <span className={clsx("text-primary", font.className)}>Adrián</span>
          {/* <p className={clsx("translate-y-[2px]", font.className)}>María</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-5 h-5 stroke-secondary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <p className={clsx("translate-y-[2px]", font.className)}>Adrián</p> */}
        </div>
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-secondary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
          </svg>
          <p className={clsx("translate-y-[2px] text-xs")}>Los Silos, Santa Cruz de Tenerife</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
