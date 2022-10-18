import { ListItemButton } from "@mui/material";
import React from "react";
import { AccentColors, accent_colors, useScheme } from ".././hooks/useDarkmode";
import { StyledListItemText } from "./StyledListItemText";
import { useActivity } from "../hooks/useActivity";
import { ConfirmationDialogRaw } from "./ConfirmationDialogRaw";

export function AccentColorPickerItem() {
  const { context, extra } = useActivity();
  const [open, setOpen] = React.useState(false);
  const { scheme, setScheme } = useScheme();
  const [value, setValue] = React.useState<AccentColors[0]>(scheme);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (val: any) => {
    setOpen(false);

    if (val.name && val.value) {
      setValue(val);
      setScheme(val);
    }
  };

  return (
    <>
      <ListItemButton onClick={handleOpen}>
        <StyledListItemText id="switch-list-label-wifi" primary="Accent colors" secondary={value.name} />
      </ListItemButton>
      <ConfirmationDialogRaw id="accent-menu" title="Select accent color..." keepMounted open={open} contentMap={accent_colors} onClose={handleClose} value={value} />
    </>
  );
}
