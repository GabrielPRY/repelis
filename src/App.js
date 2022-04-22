import "./App.css";
import Blog from "./views/Blog";
import ListadoPeliculas from "./views/ListadoPeliculas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Actores from "./views/Actores";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListadoPeliculas />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/actores" element={<Actores />}></Route>
      </Routes>
    </Router>
  );
}

///03H:09M:00S


export default App;
