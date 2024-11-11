"use client";

import LayoutChildren from "@/components/common/layouts/LayoutChildren";
import LogoHome from "@/assets/icons/logo/logo_and_text.png";
import ProfileUserIcon from "@/assets/icons/profile_user.png";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useMemo } from "react";
import { useGetMeQuery } from "@/redux/endpoints/auth";
import { reset, updateUserInfo } from "@/redux/slices/auth.slide";

export default function Profile() {
  const router = useRouter();
  const dataUser = useAppSelector((state) => state.auth?.userInfo);
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const { data, isLoading } = useGetMeQuery({}, { skip: !accessToken });
  console.log("useGetMeQuery", data, isLoading);
  console.log("dataRedux", dataUser);

  useEffect(() => {
    if (data?.user) {
      dispatch(updateUserInfo(data.user));
    }
  }, [data?.status]);

  const ListLinkProfile = [
    { label: "공지사항" },
    { label: "고객센터" },
    { label: "개인정보처리방침" },
    { label: "서비스이용약관" },
  ];
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(reset());
    router.push("/login");
  };

  return (
    <>
      <LayoutChildren hasBottomBar>
        <div className="flex flex-col flex-1 pt-[60px] px-[30px] pb-[42px] h-full">
          <div className="mb-10">
            <Image src={LogoHome} alt="Panopticon" width={133.88} height={24} />
          </div>
          <div className="flex justify-between items-center mb-[30px]">
            <div className="flex items-center gap-3">
              <div className="">
                <Image
                  src={ProfileUserIcon}
                  alt="Panopticon"
                  width={28}
                  height={28}
                />
              </div>
              <div className="!w-[150px]">
                <p className="text-sm font-medium truncate">
                  {dataUser ? dataUser.email + dataUser.email : "게스트모드"}
                </p>
              </div>
            </div>
            {dataUser ? (
              <Button
                className="!h-[50px] !w-[120px] !rounded-[10px]"
                type="primary"
                onClick={handleLogout}
              >
                <span className="text-sm text-[#EAEAF0] font-medium">
                  로그아웃
                </span>
              </Button>
            ) : (
              <Button
                className="!h-[50px] !w-[120px] !rounded-[10px]"
                type="primary"
                onClick={() => router.push("/login")}
              >
                <span className="text-sm text-[#EAEAF0] font-medium">
                  로그인
                </span>
              </Button>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <ul>
              {ListLinkProfile.map((item, index) => (
                <li key={`item_link_${index}`} className="mb-[30px]">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="information-app text-[#1C1C2766]">
            © Gangnam Developers Inc.
            <br />
            <br /> App Version
            <br />
            v.0.0.1
          </div>
        </div>
      </LayoutChildren>
    </>
  );
}
