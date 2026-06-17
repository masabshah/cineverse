import Seats from "./pages/Seats";
import Booking from "./pages/Booking";
import Movies from "./pages/Movies";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingSuccess from "./pages/BookingSuccess";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/booking-success"
  element={<BookingSuccess />}
/>
        <Route path="/seats" element={<Seats />} />
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