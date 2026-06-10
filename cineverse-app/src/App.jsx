import Booking from "./pages/Booking";
import Movies from "./pages/Movies";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;