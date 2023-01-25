import { FluentProvider, teamsDarkTheme, teamsLightTheme } from '@fluentui/react-components';
import 'modern-normalize';
import { FC, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ComponentsPage from './components/ComponentsPage';
import LandingPage from './components/LandingPage';
import StylingPage from './components/StylingPage';
import { RouterPaths } from './routerPaths';
import { uiStore, UiTheme } from './store/uiStore';
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
  // const [ui] = useUiState();
  // console.log('2 top level>>>', ui);
  const ui = uiStore.useState((draft) => draft);
  const isLightTheme = ui.theme === UiTheme.Light;
  return (
    <FluentProvider theme={isLightTheme ? teamsLightTheme : teamsDarkTheme} style={{ height: '100%' }}>
      {children}
    </FluentProvider>
  );
};

// root.render(<React.StrictMode><App /></React.StrictMode>); - original strict mode without router
root.render(
  <FluentProviderWithContext>
    <RouterProvider router={router} />
  </FluentProviderWithContext>
);
