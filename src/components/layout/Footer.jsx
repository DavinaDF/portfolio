const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Davina Crahet</p>
        </footer>
    );
};

export default Footer;