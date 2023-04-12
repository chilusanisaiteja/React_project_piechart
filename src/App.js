import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Students from "./components/students/Students";
import Info from "./components/info/Info";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Students />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
