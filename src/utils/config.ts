import { headerSpacing, sideBarConfig } from "../interfaces";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
//header spacings
export const HEADER_SPACINGS: headerSpacing = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 55,
};

//side bar items top
export const SIDE_BAR_TOP: sideBarConfig[] = [
  {
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    name: "Inventory",
    icon: ShoppingCartCheckoutIcon,
  },
  {
    name: "Reports",
    icon: AssessmentIcon,
  },
  {
    name: "Suppliers",
    icon: SupervisedUserCircleIcon,
  },
  {
    name: "Orders",
    icon: AllInboxIcon,
  },
  {
    name: "Manage Store",
    icon: LibraryBooksIcon,
  },
];

//side bar items bottom
export const SIDE_BAR_BOTTOM: sideBarConfig[] = [
  {
    name: "Settings",
    icon: SettingsIcon,
  },
  {
    name: "Logout",
    icon: LogoutIcon,
  },
];

//routing
export const ROUTES = {
  ROOT: "/",
  AUTH: {
    HOME: "home",
    ADD_TASK: "add-tasks",
  },
};
