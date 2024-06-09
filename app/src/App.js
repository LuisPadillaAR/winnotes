import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Notes from './components/notes/Notes';
import Details from './components/notes/details/Details';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <p>Not found</p>
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/notes',
    element: <Notes />
  },
  {
    path: '/notes/:id',
    element: <Details />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
