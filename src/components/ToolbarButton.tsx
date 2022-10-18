import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import React from "react";
import { ToolbarButton as DeineM } from "react-onsenui";
import { Icon } from "./Icon";

export type BackButtonProps = {
  id?: string;
  onClick: React.MouseEventHandler<any>;
  // icon: OverridableComponent<SvgIconTypeMap>;
  icon: any;
};

export const ToolbarButton = (props: BackButtonProps) => {
  return (
    <DeineM id={props.id} style={{ fontFamily: "unset" }} onClick={props.onClick}>
      <Icon icon={props.icon} keepLight />
    </DeineM>
  );
};
