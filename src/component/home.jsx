import React from "react";

import Navbar from "./home/navbar/header.jsx";
import ServicesPage from "./framer-m.jsx";
import Services1 from "./home/services1/services.jsx";
import Services2 from "./home/services2/services.jsx";
import Partners from "./home/partners/partners.jsx";
import Footer from "./home/footer/footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <ServicesPage />
      <Services1 />
      <Services2 />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
