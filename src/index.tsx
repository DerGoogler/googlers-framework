import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { render } from "react-render-tools";
import RoutedApp from "./components/RoutedApp";
import { ActivityIntent } from "./hooks/useActivity";
import { DarkModeProvider } from "./hooks/useDarkmode";
import { LightTheme } from "./styles/LightTheme";

namespace Gf {
  export interface DrawerProps {
    renderToolbar: () => JSX.Element;
    hideSplitter: () => void;
    pushPage: (props: ActivityIntent) => void;
  }

  export interface Setup {
    main: React.ElementType;
    drawer: React.ElementType<DrawerProps>;
    element: string;
    wrappers?: (children: JSX.Element) => JSX.Element;
  }

  export function setup(opt: Setup) {
    const { main, element, wrappers, drawer } = opt;

    const children = (
      <React.StrictMode>
        <DarkModeProvider>
          <CssBaseline />
          <LightTheme />
          <RoutedApp main={main} drawer={drawer} />
        </DarkModeProvider>
      </React.StrictMode>
    );

    if (wrappers) {
      render(wrappers(children), element);
    } else {
      render(children, element);
    }
  }
}

export default Gf;
export * from "./components/AccentColorPickerItem";
export * from "./components/For";
export * from "./components/Icon";
export * from "./components/LoadingScreen";
export * from "./components/Searchbar";
export * from "./components/StyledListItemText";
export * from "./components/ToolbarButton";

export * from "./hooks/useActivity";
export * from "./hooks/useDarkmode";
export * from "./hooks/useNativeStorage";

export * from "./native/Native";

export * from "./util/shadeColor";
