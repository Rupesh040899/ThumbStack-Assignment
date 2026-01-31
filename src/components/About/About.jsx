import "./About.css";

export default function About() {
  return (
    <>
      {/* ABOUT CARD */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-content">
            <span className="about-label">About us</span>

            <h2 className="about-title">
              By Europeans,<br />
              for Europeans
            </h2>

            <p className="about-text">
              Our vision is to empower governments, organizations and individuals
              with control and independence in the online realm.
            </p>

            <button className="about-btn">
              Read more about us →
            </button>
          </div>

          <div className="about-visual" />
        </div>
      </section>

      {/* NEXT SECTION HEADING */}
      <section className="roadmap-heading">
        <h2>
          Our Road to Creating Data
        </h2>
        <h2>
          Ownership and Security
        </h2>
        <div className="divider" />
      </section>
    </>
  );
}
