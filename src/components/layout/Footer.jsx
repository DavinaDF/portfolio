import { Link } from "react-router-dom";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Davina Crahet</p>
            <Link to="/Legal">Mentions Légales</Link>
            <Link to="/Contact">Contact</Link>
        </footer>
    );
};

export default Footer;