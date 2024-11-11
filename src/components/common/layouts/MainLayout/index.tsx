import React from "react";

interface FixedSizeLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<FixedSizeLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[375px] h-[100vh] max-h-[1000px] m-auto bg-[#EAEAF0]">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
