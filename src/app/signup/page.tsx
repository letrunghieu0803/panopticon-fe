"use client";

import LayoutChildrenNoBottomBar from "@/components/common/layouts/LayoutChildrenNoBottomBar";
import SignUpForm from "./components/SignUpForm";

export default function Login() {
  return (
    <>
      <LayoutChildrenNoBottomBar hasLogo>
        <div className="flex flex-col mt-[50px] flex-1">
          <h1 className="text-center font-bold text-xl mb-[142px]">회원가입</h1>
          <SignUpForm />
        </div>
      </LayoutChildrenNoBottomBar>
    </>
  );
}
