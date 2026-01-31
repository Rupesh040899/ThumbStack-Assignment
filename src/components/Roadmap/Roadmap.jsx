import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap">

      {/* Stage 1 */}
      <div className="roadmap-row">
        <div className="stage">Stage 1</div>
        <div className="title">Cloud infrastructure</div>
        <div className="desc"></div>
        <div className="action">
          <button className="outline-btn">Book a demo</button>
        </div>
        <div className="arrow">→</div>
      </div>

      {/* Stage 2 */}
      <div className="roadmap-row active">
        <div className="stage">
          Stage 2
          <span className="status-below">In Pilot</span>
        </div>
        <div className="title">Collaboration</div>
        <div className="desc">
          EU alternative to Google Workspace Teams, Meet a.o.
        </div>
        <div className="action">
          <button className="white-btn">Try it</button>
        </div>
        <div className="arrow">→</div>
      </div>

      {/* Stage 3 */}
      <div className="roadmap-row">
        <div className="stage muted">Stage 3</div>
        <div className="title">Communication</div>
        <div className="desc">
          Apura IaaS is our service allowing customers to develop applications on
          our secured data ownership focused platform.
        </div>
        <div className="action muted">Coming soon</div>
        <div className="arrow">→</div>
      </div>

      {/* Stage 4 */}
      <div className="roadmap-row">
        <div className="stage muted">Stage 4</div>
        <div className="title">Connectivity</div>
        <div className="desc">
          EU alternative to LinkedIn, Instagram
        </div>
        <div className="action muted">Coming soon</div>
        <div className="arrow">→</div>
      </div>

      {/* Stage 5 */}
      <div className="roadmap-row">
        <div className="stage muted">Stage 5</div>
        <div className="title">Entertainment</div>
        <div className="desc">
          EU alternative to Youtube, Tiktok
        </div>
        <div className="action muted">Coming soon</div>
        <div className="arrow">→</div>
      </div>

    </section>
  );
};

export default Roadmap;
