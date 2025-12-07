import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="flex grow">
      <div className="w-6  border-r border-dashed border-primary"></div>
      <div className="grow grid grid-cols-1">
        <div>
          <Image
            src="/Untitled.webp"
            alt=""
            objectFit="cover"
            layout="fill"
            className="-z-10"
          />
        </div>
        <div className="justify-self-center self-end text-white mb-8 text-center font-pp-supply-mono w-64 flex flex-col">
          <div className="bg-white py-2 text-primary border-t border-l border-b-0 border-r border-dashed text-xs uppercase">
            [ Horizon Hike ]
          </div>
          <button className="py-2 w-full group relative overflow-hidden cursor-pointer bg-primary px-4 text-white transition-all duration-300 hover:bg-black hover:text-white font-pp-supply-mono text-xs uppercase">
            <span className="relative block transition-transform duration-300 group-hover:-translate-y-[150%]">
              Shop the Drop
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
              Shop the Drop
            </span>
          </button>
        </div>
      </div>
      <div className="w-6 border-l border-dashed border-primary"></div>
    </main>
  );
};

export default HeroSection;
