import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import About from "./components/about";


// import "./style.js"
import "./style.css"
import Projects from "./components/projects";

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <About></About>
    <Projects></Projects>
    </>
  );
}

export default App;