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
    to: "dashboard",
  },
  {
    name: "Inventory",
    icon: ShoppingCartCheckoutIcon,
    to: "/",
  },
  {
    name: "Reports",
    icon: AssessmentIcon,
    to: "reports",
  },
  {
    name: "Suppliers",
    icon: SupervisedUserCircleIcon,
    to: "suppliers",
  },
  {
    name: "Orders",
    icon: AllInboxIcon,
    to: "orders",
  },
  {
    name: "Manage Store",
    icon: LibraryBooksIcon,
    to: "manage-store",
  },
];

//side bar items bottom
export const SIDE_BAR_BOTTOM: sideBarConfig[] = [
  {
    name: "Settings",
    icon: SettingsIcon,
    to: "settings",
  },
  {
    name: "Logout",
    icon: LogoutIcon,
    to: "logout",
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
