import logo from "/img/logo.png";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-4 border-t-2 border-blue-600">
      <img src={logo} alt="logo" className="w-60" />
      <aside>
        <p>Copyright © {new Date().getFullYear()}</p>
      </aside>
    </footer>
  );
}

export default Footer;
