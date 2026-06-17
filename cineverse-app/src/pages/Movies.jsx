import { useNavigate } from "react-router-dom";

export default function Movies() {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Interstellar",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 2,
      title: "Inception",
      image:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      id: 3,
      title: "Oppenheimer",
      image:
        "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },
    {
      id: 4,
      title: "Avatar",
      image:
        "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    },
  ];

  return (
    <div className="movies-page">
      <h1>🎬 Now Showing</h1>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

            <button
              onClick={() => navigate("/seats")}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}