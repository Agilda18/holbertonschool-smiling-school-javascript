import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import PricingPage from './pages/PricingPage.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="login" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
