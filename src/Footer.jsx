export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h3 className="fw-bold">John Doe</h3>
            <p>
              40 rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              10 20 30 40 50
              <br />
              john.doe@gmail.com
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="https://github.com/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a
                href="https://x.com/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <h3 className="fw-bold">Liens utiles</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="footer-link text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link text-white">
                  Me contacter
                </a>
              </li>
              <li>
                <a href="/mentions" className="footer-link text-white">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h3 className="fw-bold">Mes dernières réalisations</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.fresh.fr/"
                  className="footer-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fresh Food
                </a>
              </li>
              <li>
                <a
                  href="https://www.akiralille.com/"
                  className="footer-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurant Akira
                </a>
              </li>
              <li>
                <a
                  href="https://www.seo.fr/"
                  className="footer-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="https://www.terredepastel.com/"
                  className="footer-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Espace bien-être
                </a>
              </li>
              <li>
                <a
                  href="https://developer.microsoft.com/fr-fr/build-apis"
                  className="footer-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Création d&apos;une API
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/fr-fr/"
                  className="footer-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réaliser un site web
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}