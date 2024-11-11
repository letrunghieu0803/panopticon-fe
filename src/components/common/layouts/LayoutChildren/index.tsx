import React from "react";
import BottomTabBar from "../BottomTabbar";

interface LayoutChildrenProps {
  children: React.ReactNode;
  hasBottomBar?: boolean;
}

const LayoutChildren: React.FC<LayoutChildrenProps> = ({
  children,
  hasBottomBar,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-1 overflow-auto">{children}</div>
      {hasBottomBar && <BottomTabBar />}
    </div>
  );
};

export default LayoutChildren;
