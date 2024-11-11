"use client";

import LayoutChildren from "@/components/common/layouts/LayoutChildren";
import LogoHome from "@/assets/icons/logo/logo_and_text.png";
import Image from "next/image";
import { useGetStocksListQuery } from "@/redux/endpoints/stock";
import { useMemo } from "react";

export default function Explore() {
  const { data, isLoading } = useGetStocksListQuery({ page: 1 });

  return (
    <>
      <LayoutChildren hasBottomBar>
        <div className="flex flex-col flex-1 items-center pt-[65px] pb-10">
          <div className="mb-[52px]">
            <Image src={LogoHome} alt="Panopticon" width={184} height={33} />
          </div>
          <h2 className="font-bold text-xl">
            빠르게 살펴보고
            <br /> 똑똑한 투자 판단
          </h2>
          <div className="mt-[52px]">
            <h3 className="font-bold text-sm">실시간 트렌드</h3>
            {data && (
              <ul className="flex flex-col items-center mt-[15px] gap-[15px]">
                {data.map((item, index) => (
                  <li
                    key={item.id}
                    className="text-[#1C1C27CC] text-xs font-medium"
                  >
                    #{index + 1} {item.Symbol}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </LayoutChildren>
    </>
  );
}
