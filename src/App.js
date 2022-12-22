import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ExerciseDetail, Home } from "./pages";
function App() {
  return (
    <div className="w-full m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
