import React from "react";
import LogoHome from "@/assets/icons/logo/logo_and_text.png";
import IconBack from "@/assets/icons/chevron-left.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LayoutChildrenNoBottomBarProps {
  children: React.ReactNode;
  hasLogo?: boolean;
  rightContent?: React.ReactNode;
}

const LayoutChildrenNoBottomBar: React.FC<LayoutChildrenNoBottomBarProps> = ({
  children,
  hasLogo,
  rightContent,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full px-[30px] pt-[65px] pb-[52px]">
      <div className="flex justify-between items-center">
        <Image
          onClick={() => router.back()}
          src={IconBack}
          alt="Panopticon"
          width={32}
          height={32}
        />
        {hasLogo && (
          <Image src={LogoHome} alt="Panopticon" width={184} height={33} />
        )}
        <div className="w-[32px]">{rightContent}</div>
      </div>

      <div className="flex flex-col flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default LayoutChildrenNoBottomBar;
