import { ThemeProvider } from "styled-components";
import { ConfigProvider, Switch } from "antd";
import { useDarkMode } from "@svahdati/usehooks";
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

export default App;
