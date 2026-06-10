import { useState } from "react";

export default function Seats() {
  const [selected, setSelected] = useState([]);

  const seats = [
    "A1", "A2", "A3", "A4", "A5",
    "B1", "B2", "B3", "B4", "B5",
    "C1", "C2", "C3", "C4", "C5"
  ];

  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  return (
    <div>
      <h1>🎬 Select Your Seats</h1>

      {seats.map((seat) => (
        <button
          key={seat}
          onClick={() => toggleSeat(seat)}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selected.includes(seat)
              ? "lightgreen"
              : "white"
          }}
        >
          {seat}
        </button>
      ))}

      <h3>Selected Seats:</h3>
      <p>{selected.join(", ")}</p>
    </div>
  );
}