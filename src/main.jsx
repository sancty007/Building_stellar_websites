import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
}  from 'react-router-dom';
import './index.css'
import RootLayout from "./layouts/root_layout"
import HomePage from "./pages/home"

import AboutUsPage from "./pages/about"
import ContactUsPage from "./pages/Contact_us"
import FeaturesPage from "./pages/Features" 

const router = createBrowserRouter([
  {
    path: '/',    
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
      {
        path: '/contact-us',
        element: <ContactUsPage />,
      },
      {
        path: '/features',
        element: <FeaturesPage />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
