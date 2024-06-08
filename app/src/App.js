import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <p>Not found</p>
    }
  ])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
