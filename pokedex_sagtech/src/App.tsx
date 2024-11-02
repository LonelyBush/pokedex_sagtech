import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/view/main/main';
import DetailsModal from './components/view/details/details-modal';
import ErrorBoundary from './components/component/error-boundary/error-boundary';
import Favorites from './components/view/favorites/favorites';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: 'details/:pokeName',
          element: <DetailsModal />,
        },
      ],
    },
    {
      path: '/favorites',
      element: <Favorites />,
      errorElement: <ErrorBoundary />,
    },
  ],
  {
    basename: '/pokedex_sagtech',
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
