import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Seats() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);

  const movie = {
    title: "Interstellar",
    rating: "8.7/10",
    duration: "2h 49m",
    theater: "PVR Cinemas",
    showTime: "7:30 PM",
  };

  const rows = ["A", "B", "C", "D", "E"];

  const [bookedSeats, setBookedSeats] = useState(() => {
    const saved = localStorage.getItem("bookedSeats");
    return saved
      ? JSON.parse(saved)
      : ["A2", "B5", "C4", "D7"];
  });

  const getSeatPrice = (seat) => {
    const row = seat[0];

    if (row === "A" || row === "B") return 500;
    if (row === "C" || row === "D") return 300;

    return 200;
  };

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  const total = selected.reduce(
    (sum, seat) => sum + getSeatPrice(seat),
    0
  );

  const confirmBooking = () => {
    if (selected.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    const updatedBookedSeats = [
      ...bookedSeats,
      ...selected,
    ];

    setBookedSeats(updatedBookedSeats);

    localStorage.setItem(
      "bookedSeats",
      JSON.stringify(updatedBookedSeats)
    );

    const bookingId =
      "CNV-" + Math.floor(Math.random() * 1000000);

    navigate("/booking-success", {
      state: {
        movie: movie.title,
        seats: selected,
        total: total,
        bookingId: bookingId,
      },
    });
  };

  return (
    <div className="seats-page">
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>⭐ {movie.rating}</p>
        <p>🕒 {movie.duration}</p>
        <p>📍 {movie.theater}</p>
        <p>🎟️ {movie.showTime}</p>
      </div>

      <div className="screen">SCREEN</div>

      <div className="booking-layout">
        <div className="left-section">
          <div className="seats-container">
            {rows.map((row) =>
              Array.from({ length: 8 }, (_, i) => {
                const seat = `${row}${i + 1}`;

                return (
                  <button
                    key={seat}
                    className={`seat ${
                      selected.includes(seat)
                        ? "selected"
                        : ""
                    } ${
                      bookedSeats.includes(seat)
                        ? "booked"
                        : ""
                    }`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {seat}
                  </button>
                );
              })
            )}
          </div>

          <div className="legend">
            <span>⬜ Available</span>
            <span>🟩 Selected</span>
            <span>🟥 Booked</span>
          </div>

          <div className="price-legend">
            <p>💎 Platinum (A-B): ₹500</p>
            <p>🥇 Gold (C-D): ₹300</p>
            <p>🥈 Silver (E): ₹200</p>
          </div>
        </div>

        <div className="right-section">
          <div className="summary">
            <h2>Booking Summary</h2>

            <p>
              <strong>Movie:</strong> {movie.title}
            </p>

            <p>
              <strong>Seats:</strong>{" "}
              {selected.length > 0
                ? selected.join(", ")
                : "No seats selected"}
            </p>

            <p>
              <strong>Total:</strong> ₹{total}
            </p>

            <button
              className="confirm-btn"
              onClick={confirmBooking}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}