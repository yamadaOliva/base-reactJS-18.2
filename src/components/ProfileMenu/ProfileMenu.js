import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutService } from "../../service/authservice";
import { useDispatch } from "react-redux";
import { setUserDefault } from "../../redux/slices/userSlice";
import "./ProfileMenu.css";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  EnvelopeIcon,
  Bars3Icon as Bar,
  PowerIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const arrowRightBracketIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-8 h-8 text-red-500"
      fill="currentColor"
    >
      <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );
};

const checkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      className="w-8 h-8"
    >
      <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z" />
    </svg>
  );
};
let profileMenuItems = [
  {
    label: "Thông tin cá nhân",
    icon: UserCircleIcon,
  },
  {
    label: "Danh sách yêu cầu",
    icon: EnvelopeIcon,
  },
  {
    label: "Đăng xuất",
    icon: PowerIcon,
  },
];

const adminMenuItems = [
  {
    label: "Quản lý người dùng",
    icon: UserCircleIcon,
  },
  {
    label: "Quản lý Maid",
    icon: StarIcon,
  },
  {
    label: "Danh sách yêu cầu",
    icon: checkIcon,
  },
  {
    label: "Đăng xuất",
    icon: arrowRightBracketIcon,
  },
];
function ProfileMenu(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const role = useSelector((state) => state.user.role);
  const menu = role === 0 ? adminMenuItems : profileMenuItems;
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = async (e, label) => {
    console.log(label);
    if (label === "Thông tin cá nhân") {
      if (user.role === 1) navigate("/user/profile");
      else navigate("/test");
    }
    if (label === "Đăng xuất") {
      // delete redux
      dispatch(setUserDefault());
      await LogoutService();
      navigate("/login");
    }
    if (label === "Danh sách yêu cầu") {
      if (user.role === 2) navigate("/requestlist");
      if (user.role === 1) navigate("/requestuser");
    }
    if (label === "Danh sách yêu cầu chi tiết") {
      if (user.role === 2) navigate("/maid/home");
    }
    setIsMenuOpen(false);
    if (label === "Quản lý người dùng") {
      if (user.role === 0) navigate("/usermanage");
    }
    if (label === "Quản lý Maid") {
      if (user.role === 0) navigate("/maidmanage");
    }
  };
  React.useEffect(() => {
    //add after danh sách yêu cầu
    if (role === 2)
      profileMenuItems = [
        {
          label: "Thông tin cá nhân",
          icon: UserCircleIcon,
        },
        {
          label: "Danh sách yêu cầu",
          icon: EnvelopeIcon,
        },
        {
          label: "Danh sách yêu cầu chi tiết",
          icon: EnvelopeIcon,
        },

        {
          label: "Đăng xuất",
          icon: PowerIcon,
        },
      ];
    else if (role === 1)
      profileMenuItems = [
        {
          label: "Thông tin cá nhân",
          icon: UserCircleIcon,
        },
        {
          label: "Danh sách yêu cầu",
          icon: EnvelopeIcon,
        },
        {
          label: "Đăng xuất",
          icon: PowerIcon,
        },
      ];
  }, []);

  return (
    <div className="ml-auto flex flex-row z-30">
      <div className="mr-4 justify-center items-center">Hello {props.name}</div>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-end z-40"
      >
        <MenuHandler>
          <Button
            variant="text"
            color="blue"
            className="flex items-center gap-1 py-0.5 pr-2 pl-0.5 rounded-full"
          >
            <Bar className="w-7 h-7" />
          </Button>
        </MenuHandler>
        <MenuList className="p-1 w-[240px] z-50 bg-[#00FBCD] rounded">
          {menu.map(({ label, icon }, key) => {
            const isLastItem = key === menu.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={(e) => closeMenu(e, label)}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-8 w-8 font-bold ${
                    isLastItem ? "text-red-500" : ""
                  }`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-bold text-lg"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
