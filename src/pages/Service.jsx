import React from "react";

const Service = () => {
  return (
    <div className="service-card-wrapper">
      <div className="service-card">
        <div className="service-card-title">
          <h3>UX/UI DESIGN</h3>
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="service-card-content">
          <p>
            Étude des usages et des besoins utilisateurs afin de comprendre,
            évaluer et améliorer l’expérience de votre site
          </p>
          <hr />
          <p>
            Conception d’interfaces optimales, intuitives et adaptées aux
            besoins de vos utilisateurs (wireframes, maquettes et/ou protoypes)
          </p>
          <hr />
          <p>
            Proposition d’animations et de transitions afin de créer une
            expérience de navigation optimale
          </p>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card-title">
          <h3>Création de site</h3>
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="service-card-content">
          <p>
            Conception intégrale de sites vitrines (pour entreprises, artisans,
            restaurants, chambres d’hôte, ...) en HTML/CSS, Javascript et/ou
            React, en y intégrant les fonctionnalités dont vous avez besoin.
          </p>
          <hr />
          <p>
            Création de sites e-commerce en utilisant un CMS (Wordpress ou Wix)
          </p>
          <hr />
          <p>
            Formation en fin de projet pour prise en main de votre nouveau site{" "}
          </p>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card-title">
          <h3>Autres prestations</h3>
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div className="service-card-content">
          <p>
            Optimisation des performances du site, de l’accessibilité, du SEO
          </p>
          <hr />
          <p>
            Possibilité de maintenance annuelle après la mise en ligne du site
          </p>
          <hr />
          <p>
            Réalisation d’audit UX, d'audit ergonomique, d'audit de performance,
            suivie par des propositions concrètes d’axes d’amélioration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
