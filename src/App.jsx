import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./component/home.jsx";

const About = lazy(() => import("./component/about.jsx"));
const Services = lazy(() => import("./component/services.jsx"));
const Contact = lazy(() => import("./component/contact.jsx"));

const CloudMigration = lazy(() =>
  import("./component/services/it-service/Cloud Migration.jsx")
);
const Ictsolutions = lazy(() =>
  import("./component/services/it-service/ICT Solutions.jsx")
);
const Itconsultancy = lazy(() =>
  import("./component/services/it-service/IT Consultancy.jsx")
);
const Itinfrastructure = lazy(() =>
  import("./component/services/it-service/IT Infrastructure.jsx")
);
const Itoutsourcing = lazy(() =>
  import("./component/services/it-service/IT Outsourcing.jsx")
);
const Itsupport = lazy(() =>
  import("./component/services/it-service/IT Support.jsx")
);
const Newofficeitsetup = lazy(() =>
  import("./component/services/it-service/New Office IT Setup.jsx")
);
const Itservice = lazy(() => import("./component/services/it-service/it-amc.jsx"));
const Itrelocation = lazy(() =>
  import("./component/services/it-service/it-relocation.jsx")
);

const Bpooutsourcing = lazy(() =>
  import("./component/services/outsourcing/BPO Outsourcing.jsx")
);

const Databackupdisasterrecoveryservices = lazy(() =>
  import(
    "./component/services/IT Infrastructure/Data Backup & Disaster Recovery Services.jsx"
  )
);
const Firewallinstallation = lazy(() =>
  import("./component/services/IT Infrastructure/Firewall Installation.jsx")
);
const Ithardwareservices = lazy(() =>
  import("./component/services/IT Infrastructure/IT Hardware Services.jsx")
);
// const Newofficeitsetup = lazy(() => import("./component/services/IT Infrastructure/New Office IT Setup.jsx"));
const Office365services = lazy(() =>
  import("./component/services/IT Infrastructure/Office 365 Services.jsx")
);
const Officetelephonesystem = lazy(() =>
  import("./component/services/IT Infrastructure/Office Telephone System.jsx")
);
const Servervirtualizationservices = lazy(() =>
  import(
    "./component/services/IT Infrastructure/Server Virtualization Services.jsx"
  )
);
const Structurecabling = lazy(() =>
  import("./component/services/IT Infrastructure/Structure Cabling.jsx")
);
const Vpnsolutions = lazy(() =>
  import("./component/services/IT Infrastructure/VPN Solutions.jsx")
);

const Accesscontroltimeattendance = lazy(() =>
  import("./component/services/ELV & Security/Access Control & Time Attendance.jsx")
);
const Cctvinstallationdubai = lazy(() =>
  import("./component/services/ELV & Security/CCTV Installation Dubai.jsx")
);
const Siraapprovedcctvinstallation = lazy(() =>
  import("./component/services/ELV & Security/SIRA Approved CCTV Installation.jsx")
);
const Telephonesolutions = lazy(() =>
  import("./component/services/ELV & Security/Telephone Solutions.jsx")
);

const Computer = lazy(() => import("./component/services/computer/computer.jsx"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading.....</h1>}>
          <Routes>
            <Route exact path="/onetech-0" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cloudmigration" element={<CloudMigration />} />
            <Route path="/ictsolutions" element={<Ictsolutions />} />
            <Route path="/itconsultancy" element={<Itconsultancy />} />
            <Route path="/itinfrastructure" element={<Itinfrastructure />} />
            <Route path="/itoutsourcing" element={<Itoutsourcing />} />
            <Route path="/itsupport" element={<Itsupport />} />
            <Route path="/newofficeitsetup" element={<Newofficeitsetup />} />
            <Route path="/itamc" element={<Itservice />} />
            <Route path="/itrelocation" element={<Itrelocation />} />

            <Route path="/bpooutsourcing" element={<Bpooutsourcing />} />

            <Route
              path="/databackupdisasterrecoveryservices"
              element={<Databackupdisasterrecoveryservices />}
            />
            <Route
              path="/firewallinstallation"
              element={<Firewallinstallation />}
            />
            <Route
              path="/ithardwareservices"
              element={<Ithardwareservices />}
            />
            <Route path="/office365services" element={<Office365services />} />
            <Route
              path="/officetelephonesystem"
              element={<Officetelephonesystem />}
            />
            <Route
              path="/servervirtualizationservices"
              element={<Servervirtualizationservices />}
            />
            <Route path="/Structurecabling" element={<Structurecabling />} />
            <Route path="/Vpnsolutions" element={<Vpnsolutions />} />

            <Route
              path="/accesscontroltimeattendance"
              element={<Accesscontroltimeattendance />}
            />
            <Route
              path="/cctvinstallationdubai"
              element={<Cctvinstallationdubai />}
            />
            <Route
              path="/siraapprovedcctvinstallation"
              element={<Siraapprovedcctvinstallation />}
            />
            <Route
              path="/telephonesolutions"
              element={<Telephonesolutions />}
            />

            <Route path="/computer" element={<Computer />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
