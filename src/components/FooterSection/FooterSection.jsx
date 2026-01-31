import "./FooterSection.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const FooterSection = () => {
  return (
    <section className="footer-wrapper">
      {/* SUPPORT */}
      <div className="support-section">
        <h3>Become a supporter and help us on our Journey</h3>
        <button className="support-btn">
          Read more about how to →
        </button>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter-section">
        <div className="newsletter-text">
          <h3>Subscribe to our Newsletter</h3>
          <p>
            If you want to follow our progress on developing what Europeans
            want and need, done by Europeans.
          </p>
        </div>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe to our newsletter</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-cols">
            <div className="footer-col">
              <h4>APURA CLOUD</h4>
              <ul>
                <li>Apura IaaS</li>
                <li>Apura Workspace</li>
                <li>Apura Socials</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Roadmap</h4>
              <ul>
                <li>Stage 1</li>
                <li>Stage 2</li>
                <li>Stage 3</li>
                <li>Stage 4</li>
                <li>Stage 5</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Help us on our journey</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* MAP + STARS */}
          <div className="footer-map">
            <div className="eu-stars">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="socials">
             <FaFacebookF />
             <FaInstagram />
             <FaXTwitter />
             <FaLinkedinIn />
           </div>

            <p className="copyright">
              © 2025 Apura Cloud. All rights reserved.
            </p>
          </div>
       </div>

      </footer>
    </section>
  );
};

export default FooterSection;
