import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider, Switch } from "antd";
import { useLocalStorage, useMedia } from "@svahdati/usehooks";
import { GlobalStyles } from "./styles/theme";
import { darkTheme, lightTheme } from "./styles/themes";
import AppLayout from "./pages/layout";
import AntComponents from "./components/antComponents";
const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ConfigProvider>
          <AppLayout>
            <Switch
              checkedChildren="☾"
              unCheckedChildren="☀"
              onChange={() => setDarkMode((darkMode) => !darkMode)}
              checked={darkMode}
            />
            <br />
            <br />
            <AntComponents />
          </AppLayout>
        </ConfigProvider>
      </>
    </ThemeProvider>
  );
};

const storageName = "dark-mode";

function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    storageName,
    false
  );
  const storageStored = window.localStorage.getItem(storageName);
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = storageStored ? enabledState : prefersDarkMode;

  useEffect(() => {
    console.log(prefersDarkMode);
    if (prefersDarkMode && !storageStored) {
      setEnabledState(true);
    } else if (storageStored) {
      setEnabledState(false);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    const className = "dark";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState] as const;
}

function usePrefersDarkMode() {
  return useMedia<boolean>(["(prefers-color-scheme: dark)"], [true], false);
}
export default App;
