import { useContext, useEffect, useRef } from "react";
import About from "../components/about";
import Portfolio from "../sections/portfolio-grid"
import SectionTop from "../sections/top";
import Cases from "../sections/cases";
import { caseStudies } from "../sections/cases/cases";
import Footer from "../components/footer";
import { HeaderVisibilityContext } from "../contexts/headerVisibilityContext";
import * as C from "./styles";

function Home() {
    const homeScrollRef = useRef(null);
    const { setScrollContainer } = useContext(HeaderVisibilityContext);

    useEffect(() => {
        setScrollContainer(homeScrollRef.current);

        return () => setScrollContainer(null);
    }, [setScrollContainer]);

    return (
        <C.HomeScroll ref={homeScrollRef}>
            <SectionTop />
            {caseStudies.map((caseStudy, index) => (
                <Cases
                    key={caseStudy.title}
                    caseStudy={caseStudy}
                />
            ))}
            <Portfolio />
            <About />
            <Footer />
            {/* <Contact /> */}
        </C.HomeScroll>
    );
}

export default Home;
