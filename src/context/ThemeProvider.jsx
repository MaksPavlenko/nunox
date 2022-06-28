import React from 'react';

// Our global theme context with default values
export const ThemeContext = React.createContext({
  themeMode: true,
  setThemeMode: () => {},
  cookieMode: true,
  setCookieMode: () => {},
  loaderMode: true,
  setLoaderMode: () => {},
});

// Theme provider component with state
const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = React.useState(true);
  const [cookieMode, setCookieMode] = React.useState(true);
  const [loaderMode, setLoaderMode] = React.useState(true);
  const value = {
    themeMode,
    setThemeMode,
    cookieMode,
    setCookieMode,
    loaderMode,
    setLoaderMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const wrapperThemeProvider = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

// Exports a ThemeProvider wrapper
// export default ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
export default wrapperThemeProvider;
