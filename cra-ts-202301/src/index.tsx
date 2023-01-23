import 'modern-normalize';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import LandingPage from './components/LandingPage';
import SkeletonCss from './components/SkeletonDemoPage';
import { RouterPaths } from './routerPaths';
import './styles/main.scss';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    // loader: ... - react router v6+ has per route fragment loader support
    // (similar to on mount api fetches)
    children: [
      {
        // children: ... deep nesting is now possible
        path: RouterPaths.Landing,
        element: <LandingPage />,
      },
      {
        path: RouterPaths.SkeletonDemo,
        element: <SkeletonCss />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<React.StrictMode><App /></React.StrictMode>); - original strict mode without router
root.render(<RouterProvider router={router} />);
