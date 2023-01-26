import { RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { routes } from './components/router';
function App() {
  return (
    <>
    {/* <Login />     */}
    <RouterProvider router={routes} />
    </>
  );
}

export default App;
