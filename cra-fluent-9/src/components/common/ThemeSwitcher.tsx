import { WeatherMoon16Regular, WeatherSunnyFilled } from '@fluentui/react-icons';
import { Switch } from '@fluentui/react-components';
import { FC, useCallback } from 'react';
import { useAppState } from '../../state/appState';
import { flipUiStateTheme, UiTheme } from '../../state/uiState';

interface IThemeSwitcher {}

const ThemeSwitcher: FC<IThemeSwitcher> = () => {
  const [appState, setAppState] = useAppState();
  const uiState = appState.ui;
  const isLight = uiState.theme === UiTheme.Light;
  const handleClick = useCallback(() => flipUiStateTheme(setAppState), [setAppState]);
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
