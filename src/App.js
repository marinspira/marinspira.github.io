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
      {/* <a href="https://wa.me/34687741487?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20your%20work" className="whatsapp">
        <FaWhatsapp />
      </a> */}
    </div>
  );
}

export default App;
