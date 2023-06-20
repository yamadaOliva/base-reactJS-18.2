import * as React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  NavLink
} from "react-router-dom";
import {
  UserCircleIcon,
  EnvelopeIcon,
  Bars3Icon as Bar,
  PowerIcon,
} from "@heroicons/react/24/outline";
const profileMenuItems = [
  {
    label: "プロフィール",
    icon: UserCircleIcon,
  },
  {
    label: "リクエストリスト",
    icon: EnvelopeIcon,
  },
  {
    label: "ログアウト",
    icon: PowerIcon,
  },
];
function ProfileMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="ml-auto flex flex-row">
      <div className="mr-2 justify-center items-center">
        Hello {props.name}
      </div>
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue"
          className="flex items-center gap-1 py-0.5 pr-2 pl-0.5 rounded-full"
        >
          <Bar className="w-7 h-7"/>
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
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
