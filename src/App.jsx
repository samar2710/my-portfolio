
import { useState } from "react";
import "./App.css";

// SAMAR MALHOTRA - PADEL PORTFOLIO

const achievements = [
  {
    number: "01",
    title: "IPT Grand Slam 8.0",
    description: "Indian Padel Tour Grand Slam Champion",
    year: "WINNER",
  },
  {
    number: "02",
    title: "IPT Grand Slam 9.0",
    description: "Indian Padel Tour Grand Slam Champion",
    year: "WINNER",
  },
  {
    number: "03",
    title: "IPT City Open Goa",
    description: "Indian Padel Tour City Open Champion",
    year: "WINNER",
  },
  {
    number: "04",
    title: "IPT City Open Kochi 2.0",
    description: "Indian Padel Tour City Open Champion",
    year: "WINNER",
  },
  {
    number: "05",
    title: "IPT City Open Chandigarh 2.0",
    description: "Indian Padel Tour City Open Champion",
    year: "WINNER",
  },
  {
    number: "06",
    title: "APPC Philippines",
    description:
      "Represented Team India and secured a bronze medal",
    year: "BRONZE",
  },
];

const galleryImages = [
  {
    id: "01",
    image: "/padel-01.jpg",
    title: "IN ACTION",
  },
  {
    id: "02",
    image: "/padel-02.jpg",
    title: "TOURNAMENT MOMENTS",
  },
  {
    id: "03",
    image: "/padel-03.jpg",
    title: "TEAM INDIA",
  },
];

function GalleryCard({ photo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="gallery-card">
      {!imageError && (
        <img
          src={photo.image}
          alt={photo.title}
          onError={() => setImageError(true)}
        />
      )}

      <span>
        {photo.title} / {photo.id}
      </span>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoAvailable, setPhotoAvailable] = useState(true);

  const navItems = [
    "Home",
    "About",
    "Achievements",
    "Gallery",
    "Contact",
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVIGATION BAR */}

      <nav className="navbar">
        <a href="#home" className="logo">
          SM<span>.</span>
        </a>

        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            className="icon-button mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      <main>

        {/* HERO SECTION */}

        <section className="hero" id="home">
          <div className="hero-text">

            <div className="eyebrow">
              <span className="live-dot"></span>
              PROFESSIONAL PADEL ATHLETE | INDIA
            </div>

            <h1>
              SAMAR
              <br />
              <span>MALHOTRA.</span>
            </h1>

            <div className="hero-line"></div>

            <h2>INDIA'S NO. 2 PADEL PLAYER</h2>

            <p>
              Five-time Indian Padel Tour champion.
              Bullpadel-sponsored athlete.
              International bronze medallist
              representing Team India.
            </p>

            <div className="hero-buttons">
              <a
                href="#achievements"
                className="button-primary"
              >
                Explore My Journey ↗
              </a>

              <a
                href="#contact"
                className="button-outline"
              >
                Get in Touch
              </a>
            </div>

            <div className="hero-note">
              INDIAN PADEL TOUR · MEN'S RANKINGS
            </div>

          </div>

          <div className="hero-visual">
            <div className="visual-grid"></div>

            <div className="big-background-text">
              PADEL
            </div>

            {photoAvailable ? (
              <img
                src="/samar-padel.jpg"
                alt="Samar Malhotra playing padel"
                className="athlete-photo"
                onError={() => setPhotoAvailable(false)}
              />
            ) : (
              <div className="photo-placeholder">
                <div className="racket-icon">◉</div>
                <p>THE GAME NEVER STOPS.</p>
                <small>
                  ADD YOUR ACTION PHOTO HERE
                </small>
              </div>
            )}

            <div className="ranking-float">
              <small>NATIONAL TOUR RANK</small>
              <strong>#02</strong>
              <span>INDIA</span>
            </div>
          </div>
        </section>

        {/* ATHLETE STATS */}

        <div className="stats-strip">
          <div>
            <strong>#02</strong>
            <span>INDIAN PADEL TOUR</span>
          </div>

          <div>
            <strong>05</strong>
            <span>IPT TITLES</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>APPC TEAM BRONZE</span>
          </div>
        </div>

        {/* ABOUT SECTION */}

        <section className="section about" id="about">

          <div>
            <div className="section-label">
              01 / THE ATHLETE
            </div>

            <h2>
              MORE THAN
              <br />
              <span>JUST A GAME.</span>
            </h2>
          </div>

          <div className="about-copy">

            <p>
              I'm Samar Malhotra, an Indian professional
              padel player, ranked No. 2 in India on
              the Indian Padel Tour.
            </p>

            <p>
              My competitive padel journey began in 2025.
              Within a remarkably short period, I
              established myself among India's leading
              padel players, winning five Indian Padel
              Tour tournaments.
            </p>

            <p>
              My victories include IPT Grand Slam 8.0,
              IPT Grand Slam 9.0, City Open Goa,
              City Open Kochi 2.0, and City Open
              Chandigarh 2.0.
            </p>

            <p>
              As a Bullpadel-sponsored athlete, I am
              proud to represent one of the leading
              brands in international padel.
            </p>

            <p>
              I also had the honour of representing
              India at the APPC tournament in the
              Philippines, where Team India secured
              a bronze medal.
            </p>

            <p>
              Beyond the court, I am pursuing a
              B.Tech in Data Science at NMIMS,
              Mumbai, balancing academics with
              professional sport.
            </p>

            <p>
              My ambition is to compete at the
              highest international level, represent
              India globally, and contribute to
              the growth of padel in India.
            </p>

            <a
              className="text-link"
              href="https://www.padelfip.com/player/samar-malhotra/"
              target="_blank"
              rel="noreferrer"
            >
              View My International Player Profile ↗
            </a>

          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}

        <section
          className="section achievements"
          id="achievements"
        >

          <div className="section-label">
            02 / CAREER HIGHLIGHTS
          </div>

          <h2>
            BUILT ON <span>DEDICATION.</span>
          </h2>

          <p className="section-subtitle">
            Five Indian Padel Tour titles and
            international representation.
          </p>

          <div className="achievement-grid">

            {achievements.map((item) => (
              <article
                className="achievement-card"
                key={item.number}
              >
                <div className="card-top">
                  <span>{item.number}</span>
                  <span>↗</span>
                </div>

                <div>
                  <small>{item.year}</small>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}

          </div>
        </section>

        {/* CAREER JOURNEY SECTION */}

        <section className="section journey">

          <div className="section-label">
            03 / MY JOURNEY
          </div>

          <h2>
            THE RISE OF
            <br />
            <span>A NEW GENERATION.</span>
          </h2>

          <p className="section-subtitle">
            From beginning competitive padel
            to representing India internationally.
          </p>

          <div className="achievement-grid">

            <article className="achievement-card">
              <div className="card-top">
                <span>2025</span>
                <span>↗</span>
              </div>

              <div>
                <h3>The Beginning</h3>
                <p>
                  Started competing in padel tournaments
                  and began my journey in professional
                  competition.
                </p>
              </div>
            </article>

            <article className="achievement-card">
              <div className="card-top">
                <span>THE BREAKTHROUGH</span>
                <span>↗</span>
              </div>

              <div>
                <h3>Five IPT Titles</h3>
                <p>
                  Won five Indian Padel Tour tournaments
                  and rose to the No. 2 national tour
                  ranking.
                </p>
              </div>
            </article>

            <article className="achievement-card">
              <div className="card-top">
                <span>2026</span>
                <span>↗</span>
              </div>

              <div>
                <h3>Representing India</h3>
                <p>
                  Represented Team India at APPC
                  in the Philippines and earned
                  a team bronze medal.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* PHOTO GALLERY */}

        <section className="section gallery" id="gallery">

          <div className="section-label">
            04 / ON THE COURT
          </div>

          <h2>
            THE GAME <span>IN MOTION.</span>
          </h2>

          <p className="section-subtitle">
            Moments from tournaments, training,
            and representing Team India.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((photo) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
              />
            ))}
          </div>

          <p className="gallery-hint">
            Tournament and action photography.
          </p>

        </section>

        {/* BULLPADEL SPONSORSHIP */}

        <section className="sponsor-section">

          <div className="section-label">
            OFFICIAL ATHLETE SPONSOR
          </div>

          <h2>PROUDLY REPRESENTING</h2>

          <h3>BULLPADEL.</h3>

          <p>
            Proud to be a Bullpadel-sponsored
            athlete, competing with the
            support of one of the world's
            leading padel brands.
          </p>

        </section>

        {/* CONTACT SECTION */}

        <section className="contact" id="contact">

          <div className="section-label">
            05 / LET'S CONNECT
          </div>

          <h2>
            LET'S MAKE
            <br />
            <span>AN IMPACT.</span>
          </h2>

          <p>
            For sponsorship enquiries,
            brand collaborations, media
            opportunities, and professional
            partnerships.
          </p>

          <div className="contact-buttons">

            <a
              className="button-primary"
              href="https://www.padelfip.com/player/samar-malhotra/"
              target="_blank"
              rel="noreferrer"
            >
              FIP Player Profile ↗
            </a>

            <a
              className="button-outline"
              href="#home"
            >
              Back to Top ↑
            </a>
            
            <a
              className="button-primary"
              href="https://www.instagram.com/samarmalhotrap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Me on Instagram ↗
            </a>


          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer>
        <strong>SAMAR MALHOTRA.</strong>

        <span>
          PROFESSIONAL PADEL PLAYER · INDIA
        </span>

        <span>
          © {new Date().getFullYear()} SAMAR MALHOTRA
        </span>
      </footer>

    </div>
  );
}

export default App;
