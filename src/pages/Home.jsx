import About from "../components/about";
import Blog from "../sections/recent-posts";
import Contact from "../components/contact";
// import Portfolio from "../components/sections/portfolio";
import Portfolio from "../sections/portfolio-grid"
import SectionTop from "../sections/top";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            <SectionTop />
            <Portfolio />
            <Blog title="Blog" />
            <About />
            <Footer />
            {/* <Contact /> */}
        </div>
    );
}

export default Home;
