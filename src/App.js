import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <a href="https://wa.link/aatq40" className="whatsapp">
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
