import About from "../components/about";
import Blog from "../components/posts";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import SectionTop from "../components/section-top";

function Home() {
    return (
        <div>
            <SectionTop />
            <Portfolio />
            {/* <Blog /> */}
            <About />
            <Contact />
        </div>
    );
}

export default Home;
