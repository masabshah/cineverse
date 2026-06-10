import { useNavigate } from "react-router-dom";

export default function Booking() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎟️ Book Your Ticket</h1>

      <h2>Avengers: Endgame</h2>

      <p>Select Date:</p>
      <input type="date" />

      <br />
      <br />

      <p>Select Time:</p>

      <select>
        <option>10:00 AM</option>
        <option>2:00 PM</option>
        <option>6:00 PM</option>
      </select>

      <br />
      <br />

      <button onClick={() => navigate("/seats")}>
        Proceed to Seats
      </button>
    </div>
  );
}