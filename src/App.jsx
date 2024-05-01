import "./App.css";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// network ex home
import Network from "./component/home.jsx";
// new home
import Home from "./component/new-home.jsx";

const About = lazy(() => import("./component/about.jsx"));
const Services = lazy(() => import("./component/services.jsx"));
const Contact = lazy(() => import("./component/contact.jsx"));

// services-details
const Software = lazy(() => import("./component/home/services-details/software.jsx"));

// partner
const Sophos = lazy(() => import("./component/partner/sophos.jsx"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/network" element={<Network />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* services-details */}
            <Route path="/software" element={<Software />} />
            <Route path="/sophos" element={<Sophos />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
