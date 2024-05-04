import Image from "next/image";

import Hero from "@/components/Hero";
import PreBoda from "@/components/PreBoda";
import Boda from "@/components/Boda";
import Tenerife from "@/components/Tenerife";
import Asistencia from "@/components/Asistencia";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Leaves1 from "@/public/images/leaves1.png";
import Leaves2 from "@/public/images/leaves2.png";

export default function Page() {
  return (
    <main>
      <Image
        className="hidden xl:block xl:w-[8%] fixed top-[20%] right-0"
        src={Leaves1}
        alt="Leaves"
        priority={true}
        width={500}
        height={500}
      />
      <Image
        className="hidden xl:block xl:w-[8%] fixed bottom-[20%] left-0"
        src={Leaves2}
        alt="Leaves"
        priority={true}
        width={500}
        height={500}
      />
      <Header />
      <Hero />
      <PreBoda />
      <Boda />
      <Tenerife />
      <Asistencia />
      <Footer />
    </main>
  );
}
