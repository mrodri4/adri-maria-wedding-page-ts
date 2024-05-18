"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import Leaves3 from "@/public/images/leaves3.png";

import { Playfair_Display_SC } from "next/font/google";

const font = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

import { clsx } from "clsx";
import { FeatureType, TenerifeFeatures } from "./TenerifeFeatures";

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: FeatureType;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h4 className="inline text-xl">{title}</h4>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        {feature.list && (
          <ul className="pl-8 grid sm:grid-cols-2 gap-x-24 gap-y-2 lg:gap-x-0 lg:grid-cols-1 my-4 text-left">
            {(feature.list as Record<string, string>[]).map((item) => (
              <li
                key={item.title ?? item.label}>
                {(item.title) ? (
                  <>
                    <span className="text-primary text-lg block font-bold">{item.title}</span>
                    <ul className="pl-8 flex flex-col gap-3 my-4">
                      {(item as unknown as Record<string, Object[]>).list.map((subitem: Record<string, string>) => (
                        <li key={subitem.label}>
                          {subitem.href ? (
                            <a className="underline" target="_blank" href={subitem.href}>{subitem.label}</a>
                          ) : (
                            <span>{subitem.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a className="underline" target="_blank" href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
function getMediaClassName(index: number): { container: string; content: string; } {
  const containerClassName = 'md:w-2/3';
  const contentClassName = 'transition-transform duration-300 ease-out relative rounded-lg bg-white pt-8 pb-16 px-8 border-2 border-base-content/10 shadow-md';

  switch (index) {
    case 1:
      return {
        container: clsx(containerClassName, 'absolute left-1/2 top-1/2 translate-y-[-30%] translate-x-[-15%]'),
        content: clsx(contentClassName, 'lg:rotate-2')
      };
    default:
      return {
        container: containerClassName,
        content: clsx(contentClassName, 'lg:-rotate-2')
      };
  }
}

const Media = ({ feature }: { feature: FeatureType }) => {
  const { images } = feature;

  return (
    <div className="hidden lg:block relative shrink-0">
      {images.map((image, index) => {
        const alt = `Tenerife ${index}`;
        const { container, content } = getMediaClassName(index);

        return (
          <div className={container} key={alt}>
            <div className={content}>
              <Image
                className="w-full rounded-md object-center"
                src={image}
                alt={alt}
                priority={true}
                width={500}
                height={500}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const Tenerife = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(1);

  return (
    <section id="tenerife" className="md:min-h-screen">
      <Image
        className="min-w-32 w-[10vw] mx-auto"
        src={Leaves3}
        alt="Leaves"
        priority={true}
        width={500}
        height={500}
      />
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-32 px-8 py-8 lg:py-20">
        <div className="max-lg:min-w-[50%] md:w-2/5 relative shrink-0 lg:mt-[33%]">
          <Media feature={TenerifeFeatures[featureSelected]} key={featureSelected} />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center text-center lg:text-left lg:items-start">
          <h2 className={clsx("text-primary text-4xl lg:text-6xl mb-8", font.className)}>
            TENERIFE
          </h2>
          <div className="flex flex-col gap-4 items-center lg:items-start lg:max-w-[90%]">
            <p className="text-lg opacity-80 leading-relaxed text-center lg:text-left">
              Para que podáis conocer y disfrutar mejor de Tenerife, os hemos preparado un listado con recomendaciones y lugares imprescindibles de la isla. Desde charcos y playas hasta la montaña, pasando por la mejor gastronomía del lugar.
            </p>
            <p className="text-lg opacity-80 leading-relaxed text-center lg:text-left">
              Esperamos que cada momento aquí sea especial.
            </p>
            <p className="text-lg opacity-80 leading-relaxed text-center lg:text-left">
              Disfrutad de la isla, ¡disfrutad del paraíso!
            </p>
            <ul className="w-full">
              {TenerifeFeatures.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenerife;
