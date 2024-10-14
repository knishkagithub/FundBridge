// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './faq.js';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Faq from './faq.js';
import FundraisingSection from './FundraisingSection.js';
import FundingSectionCreative  from './FundingSectionCreative.js';
import FundingSectionSocial  from './FundingSectionSocial.js';
import FundBridge from './FundBridge.js';
import FundBridgeOffers from './FundBridgeOffers.js';
import FundingSection from './FundingSection.js';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MedicalTreatments from './MedicalTreatments.js';
import SocialImpactPlan from './SocialImpactPlan.js';
import DonationPage from './DonationPage.js';
import MainPage from './main.js';
import MedicalBillsSection from './MedicalBillsSection.js';
function App() {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/medical-treatments" element={<FundingSection />} />
         <Route path="/creative-projects" element={<FundingSectionCreative />} /> 
        
        
        <Route path="/social-cause" element={<FundingSectionSocial />} />
      </Routes>
    </Router>
    
      <BrowserRouter>
      <nav>
        <Link >
        </Link>
      </nav>
      </BrowserRouter>
      </>
  );
}

export default App;