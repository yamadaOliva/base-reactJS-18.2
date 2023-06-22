import React from "react";
import "./Header.css";
import { Navbar, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useSelector } from "react-redux";

export default function Header() {
  const username = useSelector((state) => state.user.username);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
    //get item from session storage
    if (username) {
      setIsLogin(true);
    }
  }, []);

  return (
    <nav className="h-[70px] fixed w-full bg-[#ACC1C2] flex flex-row items-center z-20">
      <Typography
        id="logo"
        as="a"
        href="/"
        className="mr-4 ml-10 cursor-pointer font-delius no-underline"
      >
        Iiosin
      </Typography>
      {isLogin ? (
        <>
          <ProfileMenu name={username} />
        </>
      ) : (
        <div className="pr-4 ml-auto flex flex-row gap-4 items-center">
          <span className="text-2xl font-bold">
            ログイン:
          </span>
          <NavLink to="/login" className="nav-link underline font-bold">
            ユーザー
          </NavLink>
          <NavLink to="/login" className="nav-link underline font-bold">
            メイド
          </NavLink>
        </div>
      )}
    </nav>
  );
}
