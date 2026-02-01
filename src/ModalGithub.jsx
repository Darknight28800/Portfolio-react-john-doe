import React from "react";

export default function ModalGithub({ open, onClose }) {
  if (!open) return null;

  function handleOverlayClick(e) {
    if (e.target.classList.contains("github-modal-overlay")) onClose();
  }

  return (
    <div className="github-modal-overlay" onClick={handleOverlayClick}>
      <div className="github-modal">
        <div className="modal-header-github">
          <h2>Mon profil GitHub</h2>
          <div className="separator-header"></div>
        </div>

        <div className="modal-body-github">
          <img
            src="../public/images/doraemon-cat.webp"
            className="github-avatar"
            alt="Avatar GitHub de John Doe"
          />

          <div className="modal-content-github">
            <div className="ligne-info">
              <img src="/icons/utilisateur.png" alt="Icône utilisateur" />
              <a
                href="mailto:john.doe@gmail.com"
                className="lien-bleu"
              >
                John Doe
              </a>
            </div>

            <div className="separator"></div>

            <div className="ligne-info">
              <img src="/icons/epingle.png" alt="Icône localisation" />
            </div>

            <div className="separator"></div>

            <div className="ligne-info">
              <img
                src="/public/icons/carte-de-visite.png"
                alt="Icône carte de visite"
              />
              <span>
                As we all know, John Doe's identity is unknown. I just
                wanted to contribute without being known.
              </span>
            </div>

            <div className="separator"></div>

            <div className="ligne-info">
              <img src="/icons/3d.png" alt="Icône repository" />
              <span>Repositories : 1</span>
            </div>

            <div className="separator"></div>

            <div className="ligne-info">
              <img
                src="/icons/deux-utilisateurs.png"
                alt="Icône followers"
              />
              <span>Followers : 16</span>
            </div>

            <div className="separator"></div>

            <div className="ligne-info">
              <img
                src="/icons/deux-utilisateurs.png"
                alt="Icône following"
              />
              <span>Following : 0</span>
            </div>

            <div className="separator-large"></div>

            <button
              type="button"
              className="btn-fermer"
              onClick={onClose}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}