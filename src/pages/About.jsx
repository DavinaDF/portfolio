import photo from "../assets/images/Photo1.png"

const About = () => {
    return (
        <div className="about-container">
            <div className="photo">
            <img src={photo} alt="Photo Davina Crahet"/>  

            </div>
              
            <p>En 2011 j’intègre l’ENSC, Ecole Nationale Supérieure de Cognitique, où j’y étudie à la fois la science du comportement humain face aux interfaces, et la science des technologies. Je découvre également la programmation. 
            <br /><br />
            Avec ce diplôme d’ingénieur en poche, je travaille en tant qu’UX designer durant 5 ans pour différentes agences et entreprises. Je travaille alors sur des projets variés, touchant nombreux domaines : transports, banques, luxes, santé, commerces, paris sportifs, ... 
            <br /><br />
            En 2019, après quelques mois à voyager seule autour du monde, je me lance dans le stylisme et la création de vêtements. Durant 2 ans, je vais créer des vêtements pour ma propre marque. De la réflexion à la vente, en passant par la couture, je fais tout cela toute seule. 
            <br /><br />
            Fin 2021, après les difficultés liées au Covid, et l’arrivée d’un bébé, je ferme ma micro-entreprise et deviens responsable en restauration pour un hôtel 4* en Suisse. 
            <br /><br />
            Finalement, après un bilan de compétences complet et un réel coup de coeur pour le développement web, je choisis de suivre une formation de développeuse front end. 
            <br /><br />
            Ce métier est un choix du coeur, j’aime créer, j’aime coder, et toutes mes expériences passées me sont utiles au quotidien. </p>
        </div>
    );
};

export default About;