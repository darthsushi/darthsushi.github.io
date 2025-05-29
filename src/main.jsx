/* eslint-disable react-refresh/only-export-components */
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
import { AltairProvider, useAltair } from './context/app.context.jsx'
import DrawerContainer from './components/DrawerContainer/index.jsx'

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

function MainContent() {
  const { isDrawerOpen } = useAltair();
  const className = isDrawerOpen ? 'w-full h-screen bg-[#201f49] flex flex-col overflow-hidden' : 'w-full min-h-screen bg-[#201f49] flex flex-col';

  return (
    <div page="Cartas a Altair" by="darthsushi.wtf" className={ className }>
      <RouterProvider router={ router } />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AltairProvider>
      <MainContent />
      <DrawerContainer />
    </AltairProvider>
  </StrictMode>,
)
