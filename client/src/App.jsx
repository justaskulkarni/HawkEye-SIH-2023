import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
