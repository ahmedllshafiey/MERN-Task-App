// import react-router-dom to make routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import navbar component
import Navbar from "./components/Navbar";

// import homepage route
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
