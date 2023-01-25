import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import 'modern-normalize';
import { FC, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ComponentsPage from './components/ComponentsPage';
import LandingPage from './components/LandingPage';
import StylingPage from './components/StylingPage';
import { RouterPaths } from './routerPaths';
import { AppStateProvider, useAppState } from './state/appState';
import { UiTheme } from './state/uiState';
import './styles/main.scss';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: RouterPaths.Landing,
        element: <LandingPage />,
      },
      {
        path: RouterPaths.Components,
        element: <ComponentsPage />,
      },
      {
        path: RouterPaths.Styling,
        element: <StylingPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const FluentProviderWithContext: FC<PropsWithChildren> = ({ children }) => {
  const [appState] = useAppState();
  const isLightTheme = appState?.ui?.theme === UiTheme.Light;
  return (
    <FluentProvider theme={isLightTheme ? teamsLightTheme : teamsDarkTheme} style={{ height: '100%' }}>
      {children}
    </FluentProvider>
  );
};

// root.render(<React.StrictMode><App /></React.StrictMode>); - original strict mode without router
root.render(
  <AppStateProvider>
    <FluentProviderWithContext>
      <RouterProvider router={router} />
    </FluentProviderWithContext>
  </AppStateProvider>
);
