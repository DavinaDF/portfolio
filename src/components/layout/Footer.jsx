const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} Davina Crahet - UX designeuse et développeuse frontend
      </p>
    </footer>
  );
};

export default Footer;
