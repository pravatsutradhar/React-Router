import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Order from './components/Order/Order';

function App() {

  const router = createBrowserRouter([
    {path: '/home', element : <Home></Home>},
    {path: '/about', element: <About></About>},
    {path: '/products', element: <Products></Products>},
    {path: '/order', element: <Order></Order>}

  ]);


  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );


}

export default App;
