import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import ImageUpload from "./components/ImageUpload";
import Traffic from "./pages/Traffic.js";
import VehicleCount from "./components/VehicleCount.js";
import Simulator from "./components/Simulator.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route exact path="/upload-video" element={<ImageUpload />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn} />} />
        <Route
          path="/contact"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/vehiclecount"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <VehicleCount />
            </PrivateRoute>
          }
        />
        <Route
          path="/simulator"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Simulator />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/traffic"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Traffic />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
