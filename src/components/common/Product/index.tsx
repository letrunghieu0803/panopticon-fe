"use client";

import PopUpContainer from "@/components/common/PopUp";
import ResetPassword from "@/components/common/PopUp/ResetPassword";
import { usePopUp } from "@/components/common/PopUp/provider";
import { Carousel, Image, Typography } from "antd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styles from "../../index.module.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type ProductProps = {
  title?: string;
  imageUrl: string;
  price?: number;
  currency?: string;
  isStocking?: boolean;
  className?: string;
};
const { Text } = Typography;
const Product = (props: ProductProps) => {
  const {
    imageUrl,
    className = "",
    title = "Radioactive Candy Apple Scolymi",
    price = 0,
    isStocking,
    currency = "VND",
  } = props;
  const searchParams = useSearchParams();
  const { showPopUp } = usePopUp();
  const router = useRouter();

  useEffect(() => {
    const isResetPassword = searchParams.get("resetPassword");
    if (isResetPassword === "true") {
      showPopUp(PopUpContainer, { title: "", content: <ResetPassword /> });
    }
  }, [searchParams]);

  return (
    <>
      <div
        className={`flex flex-col mx-2 bg-white  shadow-lg justify-center cursor-pointer ${className} rounded-xl overflow-hidden hover:opacity-80`}
        onClick={() => router.push("/product/sdsda")}
      >
        <Image
          preview={false}
          width={"100%"}
          className="!h-[236px] hover:"
          src={imageUrl}
        />
        <div className="p-3 flex flex-col">
          <Text
            onClick={() => router.push("/product/sdsda")}
            className="!text-[16px] !font-bold !mt-2 !text-black"
          >
            {title}
          </Text>
          <Text className="!text-[22px] font-semibold mt-2">
            {`${price} ${currency}`}{" "}
          </Text>
          <div>
            {isStocking ? (
              <div className="!text-[var(--green-6)]">In stock</div>
            ) : (
              <div className="!text-[var(--grey-6)]">Out stock</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
