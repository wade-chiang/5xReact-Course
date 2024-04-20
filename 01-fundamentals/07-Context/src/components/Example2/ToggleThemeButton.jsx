import React from 'react';
import RenderTip from '../RenderTip';
import { useMyContext } from './context';

const ToggleThemeButton = () => {
  // TODO
  const { theme, setTheme } = useMyContext();

  const atChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section data-name="ToggleThemeButton">
      <RenderTip />
      <h3>theme:{theme}</h3>
      <button type="button" className={`button ${theme}`} onClick={atChangeTheme}>
        Toggle Theme
      </button>
    </section>
  );
};

export default React.memo(ToggleThemeButton);
