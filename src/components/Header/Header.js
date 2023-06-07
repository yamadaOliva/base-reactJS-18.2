import React from "react";
import "./Header.css";
import { Navbar, Typography } from "@material-tailwind/react";

import ProfileMenu from "../ProfileMenu/ProfileMenu";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full p-2">
      <div className="relative mx-auto flex flex-row items-center text-blue-900">
        <Typography
          id="logo"
          as="a"
          href="/"
          className="mr-4 ml-10 cursor-pointer font-medium no-underline text-4xl"
        >
          Iiosin
        </Typography>
        
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
