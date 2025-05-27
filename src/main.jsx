import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'
import './index.css'
import Home from './Home.jsx'
import Store from './pages/Store.jsx'
import Product from './pages/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/store/:id",
    element: <Product />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div page="Cartas a Altair" by="darthsushi.wtf" className="w-full min-h-screen bg-[#201f49] flex flex-col">
      <RouterProvider router={ router } />
    </div>
  </StrictMode>,
)
