"use client";

import LayoutChildren from "@/components/common/layouts/LayoutChildren";
import HomeComponent from "./home/components";

export default function Home() {
  return (
    <>
      <LayoutChildren hasBottomBar>
        <HomeComponent />
      </LayoutChildren>
    </>
  );
}
