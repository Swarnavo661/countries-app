import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import App from './App'
import CountryDetails from './components/CountryDetails'

const root = createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/:country',
        element: <CountryDetails />,
      },
    ],
  },
])

root.render(<RouterProvider router={router} />)
