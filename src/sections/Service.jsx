import React from "react";

const Service = () => {
  return (
    <div className="service-card-wrapper">
      <div className="service-card">
        <h3 className="service-card-title">UX/UI DESIGN</h3>
        <div className="service-card-content">
          <p>
            Étude des usages et des besoins utilisateurs afin de comprendre,
            évaluer et améliorer l’expérience de votre site
          </p>
          <p>
            Conception d’interfaces optimales, intuitives et adaptées aux
            besoins de vos utilisateurs (wireframes, maquettes et/ou protoypes)
          </p>
          <p>
            Proposition d’animations et de transitions afin de créer une
            expérience de navigation optimale
          </p>
        </div>
      </div>
      <div className="service-card">
        <h3 className="service-card-title">Site internet</h3>
        <div className="service-card-content">
          <p>
            Développement intégrale de sites vitrines (pour entreprises,
            artisans, restaurants, chambres d’hôte, ...) en HTML/CSS, Javascript
            et/ou React, en y intégrant les fonctionnalités dont vous avez
            besoin.
          </p>
          <p>
            Création de sites e-commerce en utilisant un CMS (Wordpress ou Wix)
          </p>
          <p>
            Formation en fin de projet pour prise en main de votre nouveau site{" "}
          </p>
        </div>
      </div>
      <div className="service-card">
        <h3 className="service-card-title">Autres prestations</h3>
        <div className="service-card-content">
          <p>
            Optimisation des performances du site, de l’accessibilité, du SEO
          </p>
          <p>
            Possibilité de maintenance annuelle après la mise en ligne du site
          </p>
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
