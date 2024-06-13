import React from "react";
import FloatingNavbar from "../../ui/Floating-navbar";
import { IconHome, IconMessage, IconInfoCircle
 ,IconSettings} from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconInfoCircle
 className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  }
];

const Header = () => {
  return (
    <div>
      <FloatingNavbar navItems={navItems} />
      <DummyContent />
    </div>
  );
};

export default Header;

const DummyContent = () => {
  return (
   <div></div>
  );
};
