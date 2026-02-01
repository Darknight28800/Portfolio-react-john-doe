import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!form.nom.trim()) newErrors.nom = "Veuillez remplir ce champ.";
    if (!form.email.trim() || !form.email.includes("@")) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }
    if (!form.telephone.trim()) {
      newErrors.telephone = "Veuillez remplir ce champ.";
    }
    if (!form.sujet.trim()) newErrors.sujet = "Veuillez remplir ce champ.";
    if (!form.message.trim()) {
      newErrors.message = "Veuillez écrire un message.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulaire envoyé :", form);
    }
  }

  return (
    <main>
      <h1 className="page-contact-titre">Contact</h1>

      <p className="phrase-sous-titre">
        Pour me contacter en vue d’un entretien ou d’une future collaboration,
        merci de remplir le formulaire.
      </p>

      <div className="trait-bleu-titre"></div>

      <div className="bloc-contact">
        <div className="contact-gauche">
          <h2 className="sous-titre">Formulaire de contact</h2>
          <div className="trait-bleu-sous-titre"></div>

          <form className="form-contact" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={form.nom}
              onChange={handleChange}
              aria-label="Votre nom"
            />
            {errors.nom && (
              <span className="error-msg">{errors.nom}</span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={form.email}
              onChange={handleChange}
              aria-label="Votre adresse email"
            />
            {errors.email && (
              <span className="error-msg">{errors.email}</span>
            )}

            <input
              type="text"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              value={form.telephone}
              onChange={handleChange}
              aria-label="Votre numéro de téléphone"
            />
            {errors.telephone && (
              <span className="error-msg">{errors.telephone}</span>
            )}

            <input
              type="text"
              name="sujet"
              placeholder="Sujet"
              value={form.sujet}
              onChange={handleChange}
              aria-label="Sujet du message"
            />
            {errors.sujet && (
              <span className="error-msg">{errors.sujet}</span>
            )}

            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              aria-label="Votre message"
            ></textarea>
            {errors.message && (
              <span className="error-msg">{errors.message}</span>
            )}

            <button type="submit" className="btn-envoyer">
              Envoyer
            </button>
          </form>
        </div>

        <div className="contact-droite">
          <h2 className="sous-titre">Mes coordonnées</h2>
          <div className="trait-bleu-sous-titre"></div>

          <p
            style={{
              fontWeight: 700,
              fontSize: 20,
              marginBottom: 15,
            }}
          >
            John Doe
          </p>

          <div className="coordonnees-icone">
            <img src="/icons/carte.png" alt="Icône adresse" />
            <span>40 rue Laure Diebold</span>
          </div>

          <div className="coordonnees-icone">
            <img src="/icons/epingle.png" alt="Icône localisation" />
            <span>69009 Lyon, France</span>
          </div>

          <div className="coordonnees-icone">
            <img src="/icons/smartphone.png" alt="Icône téléphone" />
            <span>10 20 30 40 50</span>
          </div>

          <div className="coordonnees-icone">
            <img src="/icons/email.png" alt="Icône email" />
            <span>john.doe@gmail.com</span>
          </div>

          <div className="map-container">
            <iframe
              loading="lazy"
              allowFullScreen
              title="Localisation 40 rue Laure Diebold 69009 Lyon"
              src="https://www.google.com/maps?q=40+rue+Laure+Diebold+69009+Lyon&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}