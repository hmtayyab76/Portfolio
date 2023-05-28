import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
