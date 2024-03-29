import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface headerSpacing {
  H_MOBILE: number;
  H_MAIN_DESKTOP: number;
}

export interface headerTile {
  HEADER_TITLE: String;
}

export interface sideBarConfig {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  to?: string;
}
