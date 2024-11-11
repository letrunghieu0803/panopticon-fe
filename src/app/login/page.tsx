"use client";

import LayoutChildrenNoBottomBar from "@/components/common/layouts/LayoutChildrenNoBottomBar";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <>
      <LayoutChildrenNoBottomBar hasLogo>
        <div className="flex flex-col mt-[50px] flex-1">
          <h1 className="text-center font-bold text-xl mb-[175px]">로그인</h1>
          <LoginForm />
        </div>
      </LayoutChildrenNoBottomBar>
    </>
  );
}
