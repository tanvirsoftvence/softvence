import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from "./Router/Router.jsx"
import { JobProvider } from "./context/JobContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
      <RouterProvider router={router} />
    </JobProvider>
  </StrictMode>
)
