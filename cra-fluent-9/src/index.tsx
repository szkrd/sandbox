import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import 'modern-normalize';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ComponentsPage from './components/ComponentsPage';
import LandingPage from './components/LandingPage';
import StylingPage from './components/StylingPage';
import { RouterPaths } from './routerPaths';
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
// root.render(<React.StrictMode><App /></React.StrictMode>); - original strict mode without router
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <RouterProvider router={router} />
  </FluentProvider>
);
