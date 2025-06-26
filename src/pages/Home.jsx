import About from "../components/about";
import Portfolio from "../sections/portfolio-grid"
import SectionTop from "../sections/top";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            <SectionTop />
            <Portfolio />
            <About />
            <Footer />
            {/* <Contact /> */}
        </div>
    );
}

export default Home;
