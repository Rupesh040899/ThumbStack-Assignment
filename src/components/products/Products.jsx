import "./Products.css";

export default function Products() {
  return (
    <section className="products">
      <div className="products-header">
        <h3>Our products</h3>
        
      </div>

      <div className="products-cards">
        {/* CARD 1 */}
        <div className="product-card highlight">
          <div className="card-content">
            <p className="card-eyebrow">Run safely.</p>
            <h2>Apura IaaS.</h2>
            <p className="card-text">
              Apura IaaS is our service allowing customers to develop
              applications on our secured data ownership focused platform.
            </p>
          </div>

          <div className="card-actions">
            <button className="btn secondary">Read more →</button>
            <button className="btn primary">Book a demo</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="product-card muted">
          <div className="card-content">
            <p className="card-eyebrow muted-text">Work privately.</p>
            <h2>Apura Workspace.</h2>
            <p className="card-text">
              Apura Workspace is our alternative for Google workspace or
              Microsoft Teams. Giving the tools to effectively communicate
              with your organization without compromising on security and
              privacy.
            </p>
          </div>

          <div className="card-actions">
            <button className="btn gray">Read more →</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="product-card muted">
          <div className="card-content">
            <p className="card-eyebrow muted-text">Share confidently.</p>
            <h2>Apura Socials.</h2>
            <p className="card-text">
              Is our introduction of social media applications that are
              essential to us these days.
            </p>
          </div>

          <div className="card-actions">
            <button className="btn gray">Read more →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
