import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Game from "./Pages/Game/Game.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Stories from "./Pages/Stories/Stories.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
