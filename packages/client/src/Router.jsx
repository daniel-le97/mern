
import { createHashRouter } from 'react-router-dom';
import { App } from './App';
import AboutPage from './pages/AboutPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
// import { accountService } from '../../shared/client/src/services/AccountService.js';



export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "account",
        // loader: accountService.getAccount,
        element:<AccountPage />
      },

    ],
  },
]);