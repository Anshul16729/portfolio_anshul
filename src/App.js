import "./App.css";
import "./assets/css/style.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Index from "./layout/Index";
import Header from "./layout/Header";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" element={<Index />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/about" element={<About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
