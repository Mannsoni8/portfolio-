import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-background">
      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
};

export default App;
