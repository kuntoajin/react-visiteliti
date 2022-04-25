import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./styles/main.css";
import "./styles/main.scss";
import "./styles/bootstrap.css";
import "./styles/vendor/layers.css";
import "./styles/vendor/navigations.css";
import "./styles/vendor/settings.css";
import "./styles/construction.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./components/atoms/Footer";
import Visinsight from "./pages/visinsight";
import Header from "./components/atoms/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/visinsight" element={<Visinsight />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
