export default function Portfolio() {
  return (
    <>
      <img
        src="/images/banner.jpg"
        className="w-100 d-block"
        alt="Bannière du portfolio"
      />

      <main>
        <section className="container py-5 mt-3">
          <div className="text-center mb-4">
            <h1 className="fw-bold">PORTFOLIO</h1>
            <p className="mb-2">Voici quelques-unes de mes réalisations</p>
            <div
              style={{
                width: 500,
                height: 6,
                background: "#0d6efd",
                margin: "0 auto",
                borderRadius: 3,
              }}
            ></div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card h-100 portfolio-card text-center">
                <img
                  src="/images/fresh-food.jpg"
                  className="card-img-top"
                  alt="Capture du site Fresh Food"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bold">Fresh Food</h2>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <a
                    href="https://www.freshfood.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                </div>
                <div
                  className="p-2 text-center"
                  style={{ background: "#f2f2f2" }}
                >
                  Site réalisé avec PHP et MySQL
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 portfolio-card text-center">
                <img
                  src="/images/restaurant-japonais.jpg"
                  className="card-img-top"
                  alt="Capture du site Restaurant Akira"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bold">Restaurant Kyotori</h2>
                  <p className="card-text">
                    Site vitrine pour un restaurant japonais
                  </p>
                  <a
                    href="https://kyotori28.com/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                </div>
                <div
                  className="p-2 text-center"
                  style={{ background: "#f2f2f2" }}
                >
                  Site réalisé avec WordPress
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 portfolio-card text-center">
                <img
                  src="/images/espace-bien-etre.jpg"
                  className="card-img-top"
                  alt="Capture du site Espace bien-être"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bold">Espace bien-être</h2>
                  <p className="card-text">
                    Site de réservation pour un espace détente
                  </p>
                  <a
                    href="https://loree-du-spa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                </div>
                <div
                  className="p-2 text-center"
                  style={{ background: "#f2f2f2" }}
                >
                  Site réalisé avec LARAVEL
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 portfolio-card text-center">
                <img
                  src="/images/seo.jpg"
                  className="card-img-top"
                  alt="Illustration SEO"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bold">SEO</h2>
                  <p className="card-text">
                    Amélioration du référencement d'un site e-commerce
                  </p>
                  <a
                    href="https://www.seo.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                </div>
                <div
                  className="p-2 text-center"
                  style={{ background: "#f2f2f2" }}
                >
                  Utilisation des outils SEO
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 portfolio-card text-center">
                <img
                  src="/images/coder.jpg"
                  className="card-img-top"
                  alt="Illustration création d'API"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bold">
                    Création d'une API
                  </h2>
                  <p className="card-text">
                    Création d'une API RESTFUL publique
                  </p>
                  <a
                    href="https://developer.microsoft.com/fr-fr/build-apis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                </div>
                <div
                  className="p-2 text-center"
                  style={{ background: "#f2f2f2" }}
                >
                  PHP – SYMFONY
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 portfolio-card text-center">
                <img
                  src="/images/screens.jpg"
                  className="card-img-top"
                  alt="Illustration maquette de site"
                />
                <div className="card-body">
                  <h2 className="card-title fw-bold">
                    Maquette d'un site web
                  </h2>
                  <p className="card-text">
                    Création du prototype d'un site
                  </p>
                  <a
                    href="https://www.figma.com/proto/IuVMTOHAupiAfh1FKt04XA/Projet-Maquette-ProBeat?node-id=581-2036&t=LpdKvGdxhvccNR25-0&scaling=min-zoom&content-scaling=fixed&page-id=290%3A1132&starting-point-node-id=581%3A2827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                </div>
                <div
                  className="p-2 text-center"
                  style={{ background: "#f2f2f2" }}
                >
                  Réalisé avec FIGMA
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}