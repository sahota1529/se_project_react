import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__name">Developed by Vipanpreet Kaur</h2>
      <p className="footer__date">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
