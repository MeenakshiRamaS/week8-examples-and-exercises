import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "./pages/home" element = {<Home />}/>
        <Route path = "/pages/about" element = {<About />}/>
        <Route path = "/pages/destination" element = {<Destination />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
