import * as React from "react";
import { Button, SearchInput } from "react-onsenui";
import { FormControl, styled, useTheme } from "@mui/material";
import shadeColor from "../util/shadeColor";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { colors, useDarkmode, useScheme } from "../hooks/useDarkmode";

export interface SearchbarProps {
  onSearch: (val: string) => void;
  placeholder: string;
}

export const Searchbar = ({ placeholder, onSearch }: SearchbarProps) => {
  const { scheme } = useScheme();
  const { darkmode } = useDarkmode();
  const [value, setVaule] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVaule(event.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "inline-flex",
        justifyContent: "center",
        padding: "0px 0px 8px",
        width: "100%",
      }}
    >
      <Paper
        component="form"
        variant="outlined"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          bgcolor: darkmode ? shadeColor(colors[scheme.value][900], -70) : "rgb(255, 255, 255)",
        }}
      >
        <IconButton
          onClick={() => {
            onSearch(value);
          }}
          sx={{ p: "10px" }}
          aria-label="menu"
        >
          <SearchIcon />
        </IconButton>
        <FormControl>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeholder}
            inputProps={{
              "aria-label": placeholder,
              onKeyDown: (e: any) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSearch(value);
                }
              },
            }}
            // @ts-ignore
            onChange={handleChange}
          />
        </FormControl>
      </Paper>
    </div>
  );
};
