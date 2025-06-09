import About from "../components/about";
import Blog from "../sections/sectionPostCards";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import SectionTop from "../sections/section-top";

function Home() {
    return (
        <div>
            <SectionTop />
            <Portfolio />
            <Blog />
            <About />
            <Contact />
        </div>
    );
}

export default Home;
