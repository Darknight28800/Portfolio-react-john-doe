import { useState } from "react";
import ModalGithub from "./ModalGithub";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="hero-header">
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button
            type="button"
            className="btn-hero mt-3"
            onClick={() => setOpen(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      <section className="container my-5">
        <div className="bg-white shadow-lg rounded p-4">
          <div className="row align-items-start">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="mb-2 fw-bold">A propos</h2>
              <div className="blue-bar"></div>
              <img
                src="/images/john-doe-about.jpg"
                className="img-fluid rounded mb-3"
                alt="Portrait de John Doe"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum.
              </p>
            </div>

            <div className="col-md-6">
              <h2 className="mb-2 fw-bold">Mes compétences</h2>
              <div className="blue-bar"></div>

              <div className="mb-3">
                <label className="mb-1">HTML5 90%</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "90%", background: "#dc3545" }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-1">CSS3 80%</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "80%", background: "#5bc0de" }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-1">JavaScript 70%</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "70%", background: "#f1c40f" }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-1">PHP 60%</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "60%", background: "#145a32" }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-1">React 50%</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "50%", background: "#0d6efd" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalGithub open={open} onClose={() => setOpen(false)} />
    </>
  );
}