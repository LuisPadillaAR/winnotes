import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Create from './components/create/Create';


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <p>Not found</p>
    },
    {
      path: '/create',
      element: <Create />
    }
  ])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
