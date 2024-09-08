import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Countries from './components/Countries.jsx'
import Country from './components/Country.jsx'



const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Countries/>} />
      <Route path='country/:countryName' element={<Country/>} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>
)
