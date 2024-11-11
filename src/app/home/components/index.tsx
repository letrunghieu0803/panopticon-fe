import Image from "next/image";
import LogoHome from "@/assets/icons/logo/logo_and_text.png";
import ListArchive from "./ListArchive";

export default function HomeComponent() {
  return (
    <div className="pt-[60px] px-2.5">
      <div className="px-[30px] mb-10">
        <Image src={LogoHome} alt="Panopticon" width={133.88} height={24} />
      </div>
      <ListArchive />
    </div>
  );
}
