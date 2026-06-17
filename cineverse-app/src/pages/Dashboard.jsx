import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const trendingMovies = [
    {
      title: "Interstellar",
      rating: "8.7",
      image:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "Oppenheimer",
      rating: "8.6",
      image:
        "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },
    {
      title: "Inception",
      rating: "8.8",
      image:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      title: "Avatar",
      rating: "7.9",
      image:
        "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    },
  ];

  return (
    <div className="dashboard">

      {/* Navbar */}
      <nav className="navbar">
        <h2>CINVERSE</h2>

        <div className="nav-links">
          <span>Home</span>

          <span onClick={() => navigate("/movies")}>
            Movies
          </span>

          <span>My Bookings</span>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="netflix-hero">
        <div className="hero-content">
          <h1>INTERSTELLAR</h1>

          <p>
            A team of explorers travel through a wormhole
            in space in an attempt to ensure humanity's survival.
          </p>

          <div className="hero-buttons">
            <button
              className="book-btn"
              onClick={() => navigate("/movies")}
            >
              🎟 Book Tickets
            </button>

            <button className="trailer-btn">
              ▶ Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="dashboard-section">
        <h2>🔥 Trending Now</h2>

        <div className="dashboard-posters">
          {trendingMovies.map((movie) => (
            <div
              className="dashboard-poster"
              key={movie.title}
            >
              <img
                src={movie.image}
                alt={movie.title}
              />

              <div className="poster-info">
                <h3>{movie.title}</h3>

                <p>⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Tickets Booked</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Movies Available</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Partner Cinemas</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Cinverse?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            ⚡ Instant Booking
          </div>

          <div className="feature-card">
            💺 Smart Seat Selection
          </div>

          <div className="feature-card">
            🎥 Latest Releases
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>CINVERSE</h2>

        <p>
          Movies • Bookings • Support • Contact
        </p>

        <p>© 2026 Cinverse</p>
      </footer>

    </div>
  );
}