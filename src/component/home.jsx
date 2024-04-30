import React from "react";


import Navbar from "./global-component/navbar.jsx";
import Services1 from "./home/services1/services.jsx";
import Services2 from "./home/services2/services.jsx";
import Partners from "./home/partners/partners.jsx";
import Footer from "./global-component/footer.jsx";
import ServicesPage from "./home/service-0.jsx";


import Box from "@mui/material/Box";

function Home() {
  return (
    <Box textAlign={'center'}>
      <Navbar />
      <ServicesPage />
      <Services1 />
      <Services2 />
      <Partners />
      <Footer />
    </Box>
  );
}

export default Home;
