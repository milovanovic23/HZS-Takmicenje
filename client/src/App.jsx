import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
