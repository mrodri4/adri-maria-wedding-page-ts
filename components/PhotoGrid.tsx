import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Grid1 from "@/public/images/adri-maria-grid-1.jpg";
import Grid2 from "@/public/images/adri-maria-grid-2.jpg";
import Grid3 from "@/public/images/adri-maria-grid-3.jpg";
import Grid4 from "@/public/images/adri-maria-grid-4.jpg";
import Grid5 from "@/public/images/adri-maria-grid-5.jpg";
import Grid6 from "@/public/images/adri-maria-grid-6.jpg";
import Grid7 from "@/public/images/adri-maria-grid-7.jpg";
import Grid8 from "@/public/images/adri-maria-grid-8.jpg";

function PhotoGrid() {
  const photos = [Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Grid7, Grid8]
    .sort(() => 0.5 - Math.random())
    .map((photo) => {
      const className = 0.5 > Math.random() ? "sm:rotate-2 sm:hover:rotate-3" : "sm:-rotate-2 sm:hover:-rotate-3";

      return {
        className,
        photo
      }
    });

  return (
    <section className="max-w-7xl mx-auto lg:py-20 lg:mb-20 bg-base-100 grid grid-cols-4 gap-10">
      {photos.map(({ photo, className }, index) => (
        <div className={clsx("transition-transform duration-300 ease-out relative rounded-lg bg-white pt-6 pb-16 px-6 border-2 border-base-content/10 shadow-md", className)}>
          <Image
            className={"rounded-md w-full"}
            src={photo}
            alt={`Adri & Maria's Wedding Photo ${index + 1}`}
            priority={true}
          />
        </div>
      ))}
    </section>
  );
}


export default PhotoGrid