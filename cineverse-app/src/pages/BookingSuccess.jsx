import { useLocation, useNavigate } from "react-router-dom";

export default function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  if (!booking) {
    return (
      <div>
        <h2>No Booking Found</h2>
        <button onClick={() => navigate("/movies")}>
          Back to Movies
        </button>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>✅ Booking Confirmed</h1>

        <h2>{booking.movie}</h2>

        <p>
          <strong>Seats:</strong>{" "}
          {booking.seats.join(", ")}
        </p>

        <p>
          <strong>Total:</strong> ₹{booking.total}
        </p>

        <p>
          <strong>Booking ID:</strong>{" "}
          {booking.bookingId}
        </p>

        <button onClick={() => navigate("/movies")}>
          Back to Movies
        </button>
      </div>
    </div>
  );
}