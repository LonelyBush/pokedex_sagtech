import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './view/main/main';
import DetailsModal from './view/details/details-modal';
import ErrorBoundary from './components/component/error-boundary/error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: 'details/:pokeName',
        element: <DetailsModal />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
