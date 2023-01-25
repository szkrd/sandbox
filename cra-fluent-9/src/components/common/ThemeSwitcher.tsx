import { Switch } from '@fluentui/react-components';
import { WeatherMoon16Regular, WeatherSunnyFilled } from '@fluentui/react-icons';
import { FC, useCallback } from 'react';
import { uiStore, UiTheme, uiToggleTheme } from '../../store/uiStore';

const ThemeSwitcher: FC = () => {
  const theme = uiStore.useState((draft) => draft.theme);
  const isLight = theme === UiTheme.Light;
  const handleClick = useCallback(() => uiStore.update(uiToggleTheme), []);
  // DarkTheme20Regular is a single icon (half dark, half light)
  return (
    <div>
      <WeatherMoon16Regular />
      <Switch checked={isLight} onClick={handleClick} />
      <WeatherSunnyFilled />
    </div>
  );
};

export default ThemeSwitcher;
