import About from "../components/about";
import Blog from "../components/blog";
import Header from "../components/header";
import Portfolio from "../components/portfolio";
import SectionTop from "../components/section-top";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionTop />
      <Portfolio />
      <Blog />
      <About />
    </div>
  );
}

export default App;
