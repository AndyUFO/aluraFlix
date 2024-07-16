import { Header } from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Container from "../../components/Container/Container.jsx";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

function PaginaBase() {
  return (
    <main>
      <Header />
      <ToastContainer autoClose={2000} />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default PaginaBase;
