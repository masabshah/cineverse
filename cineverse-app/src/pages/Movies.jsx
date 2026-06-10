import { useNavigate } from "react-router-dom";

export default function Movies() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎥 Movie Catalog</h1>

      <div>
        <h3>Avengers: Endgame</h3>
        <p>Action | Sci-Fi</p>

        <button onClick={() => navigate("/booking")}>
          Book Ticket
        </button>
      </div>

      <hr />

      <div>
        <h3>Interstellar</h3>
        <p>Sci-Fi | Adventure</p>

        <button onClick={() => navigate("/booking")}>
          Book Ticket
        </button>
      </div>

      <hr />

      <div>
        <h3>Inception</h3>
        <p>Action | Thriller</p>

        <button onClick={() => navigate("/booking")}>
          Book Ticket
        </button>
      </div>
    </div>
  );
}