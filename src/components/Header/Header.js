import React from "react";
import "./Header.css";
import { Navbar, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useSelector } from "react-redux";
export default function Header() {
  const username = useSelector(state=>state.user.username)
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
        {isLogin ? (
          <>
            <ProfileMenu name={username} />
          </>
        ) : (
          <div className="ml-auto pr-4">
            <NavLink to="/login" className="nav-link">
              ログイン
            </NavLink>
          </div>
        )}
      </div>
    </Navbar>
  );
} 


