import customTheme from "@/app/customTheme";
import CustomAlert from "@/components/common/CustomAlert";
import { AlertProvider } from "@/components/common/CustomAlert/provider";
import { PopUpProvider } from "@/components/common/PopUp/provider";
import MainLayout from "@/components/common/layouts/MainLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panopticon",
  description: "Panopticon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <StoreProvider>
          <AntdRegistry>
            <ConfigProvider theme={customTheme}>
              <AlertProvider>
                <PopUpProvider>
                  <MainLayout>{children}</MainLayout>
                  <CustomAlert />
                </PopUpProvider>
              </AlertProvider>
            </ConfigProvider>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
