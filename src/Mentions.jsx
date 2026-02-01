export default function Mentions() {
  return (
    <main className="container py-5">
      <h1 className="page-mentions-titre">Mentions légales</h1>
      <div className="trait-bleu-titre"></div>

      <div className="accordion" id="mentionsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p style={{ fontWeight: 800, fontSize: 20 }}>John Doe</p>

              <div className="icone-ligne">
                <img src="/icons/carte.png" alt="Icône adresse" />
                <span>40 rue Laure Diebold</span>
              </div>

              <div className="icone-ligne">
                <img src="/icons/epingle.png" alt="Icône localisation" />
                <span>69009 Lyon, France</span>
              </div>

              <div className="icone-ligne">
                <img src="/icons/smartphone.png" alt="Icône téléphone" />
                <span>10 20 30 40 50</span>
              </div>

              <div className="icone-ligne">
                <img src="/icons/email.png" alt="Icône email" />
                <span>john.doe@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p style={{ fontSize: 22, fontWeight: 700 }}>alwaysdata</p>

              <div>
                <span style={{ color: "#222" }}>
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris
                </span>
              </div>

              <div className="icone-ligne">
                <img src="/icons/globe.png" alt="Icône site web" />
                <a
                  href="https://www.alwaysdata.com"
                  className="lien-bleu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  className="lien-bleu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centre Européen de Formation
                </a>
                .
              </p>

              <p style={{ fontStyle: "italic" }}>
                Les images utilisées sur ce site sont libres de droit et ont été
                obtenues sur{" "}
                <a
                  href="https://pixabay.com"
                  className="lien-bleu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                .
              </p>

              <p style={{ fontStyle: "italic" }}>
                La favicon de ce site a été fournie par{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  className="lien-bleu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  John Doe – Icons erstellt von Freepik – Flaticon
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}