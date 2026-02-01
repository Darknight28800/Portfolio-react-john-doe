export default function Services() {
  return (
    <>
      <img
        src="/images/banner.jpg"
        className="banner-img"
        alt="Bannière de services"
      />

      <main className="container py-5 mt-3">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Mon offre de services</h1>
          <p className="mb-2">
            Voici les prestations sur lesquelles je peux intervenir
          </p>
          <div className="services-bar"></div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded text-center services-card">
              <img src="/icons/brush.png" alt="Icône UX Design" />
              <h2 className="fw-bold">UX Design</h2>
              <p>
                L&apos;UX design est une discipline qui consiste à concevoir des
                produits en plaçant l&apos;utilisateur au centre.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded text-center services-card">
              <img src="/icons/coding.png" alt="Icône développement web" />
              <h2 className="fw-bold">Développement web</h2>
              <p>
                Le développement de sites web consiste à créer des sites
                internet en utilisant des langages et frameworks.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded text-center services-card">
              <img src="/icons/search.png" alt="Icône référencement" />
              <h2 className="fw-bold">Référencement</h2>
              <p>
                Le référencement naturel consiste à optimiser un site web pour
                le faire remonter dans les résultats.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}