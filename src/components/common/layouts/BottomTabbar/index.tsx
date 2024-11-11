import Link from "next/link";
import styles from "./index.module.scss";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import ArchiveIcon from "../../../../assets/icons/BottomBar/archive.png";
import ArchiveActiveIcon from "../../../../assets/icons/BottomBar/archive_active.png";
import ExploreIcon from "../../../../assets/icons/BottomBar/explore.png";
import ExploreActiveIcon from "../../../../assets/icons/BottomBar/explore_active.png";
import ProfileIcon from "../../../../assets/icons/BottomBar/profile.png";
import ProfileActiveIcon from "../../../../assets/icons/BottomBar/profile_active.png";
import Image from "next/image";

const BottomTabBar = () => {
  const pathname = usePathname();
  const BottomTabLink = useMemo(() => {
    return [
      {
        href: "/",
        label: "Archive",
        isActive: pathname === "/",
        icon: pathname === "/" ? ArchiveActiveIcon : ArchiveIcon,
      },
      {
        href: "/explore",
        label: "Explore",
        isActive: pathname === "/explore",
        icon: pathname === "/explore" ? ExploreActiveIcon : ExploreIcon,
      },
      {
        href: "/profile",
        label: "Profile",
        isActive: pathname === "/profile",
        icon: pathname === "/profile" ? ProfileActiveIcon : ProfileIcon,
      },
    ];
  }, [pathname]);
  return (
    <div className="flex h-20 bg-white items-center">
      {BottomTabLink.map((item) => (
        <Link key={item.label} href={item.href} className="flex-1">
          <div className="flex flex-col items-center justify-center">
            <Image width={32} alt="" src={item.icon} />
            <span
              className={`${styles.text} ${item.isActive ? styles.textActive : ""}`}
            >
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomTabBar;
