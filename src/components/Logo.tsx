import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* <Image
        src="/assets/FAfulllogo.png"
        alt="FarmsAgora"
        width={190}
        height={42}
        className="hidden h-9 w-auto md:block"
        priority
      /> */}
      <Image
        src="/assets/FALogoFull.png"
        alt="FarmsAgora"
        width={200}
        height={70}
        className="hidden h-14 w-auto md:block rounded-lg"
        priority
      />
      <Image
        src="/assets/FALogo.png"
        alt="FarmsAgora"
        width={40}
        height={40}
        className="block h-9 w-auto md:hidden"
        priority
      />
    </div>
  );
}
