import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎬 Cineverse Dashboard</h1>

      <h2>Now Showing</h2>

      <div>
        <h3>Avengers: Endgame</h3>
      </div>

      <div>
        <h3>Interstellar</h3>
      </div>

      <div>
        <h3>Inception</h3>
      </div>

      <br />

      <button onClick={() => navigate("/movies")}>
        View Movies
      </button>
    </div>
  );
}