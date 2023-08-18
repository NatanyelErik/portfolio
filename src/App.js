import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent/>
          <>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/work" element={<Work/>}/>
              <Route path="/education" element={<Education/>}/>
            </Routes>
          </>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
