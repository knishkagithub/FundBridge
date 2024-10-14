import DonationForm from './DonationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './faq.js';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Faq from './faq.js';
import FundraisingSection from './FundraisingSection.js';
import FundBridge from './FundBridge.js';
import FundBridgeOffers from './FundBridgeOffers.js';
import FundingSection from './FundingSection.js';
import MonthlyGivingSection from './MonthlyGivingSection.js';
import Footer from './Footer.js';
import MedicalBillsSection from './MedicalBillsSection.js';
import MedicalImpactPlanForm from './MedicalImpactPlanForm.js';
const MainPage = () => {

    return (
   <div>
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">FundBridge.com</a>
        <div className="login">
        <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1>Need Funds For a Medical Treatment or Social Cause?</h1>
          <p>Together, we make a difference.</p>
          <button className="btn btn-success">Start a Free Fundraiser</button>
        </div>
        <div className="hero-image">
          <img src="https://images.firstpost.com/wp-content/uploads/2019/04/Children-smiling-720.jpg?im=FitAndFill=(596,336)" alt="Helping hands" />
        </div>
      </div>
      <div className="info-cards">
        <div className="card">Fundraise at 0% platform fee.</div>
        <div className="card">Quick funds Disbursal</div>
        <div className="card">Support Patient lives</div>
        <div className="card">Impact Lakhs of lives</div>
      </div>
      <FundraisingSection/>
      <></>
    {/* <MedicalBillsSection/> */}
      <FundBridge />
      <FundBridgeOffers/>
      <Faq/>
      <p></p>
     
      {/* <FundingSection/> */}
      <MonthlyGivingSection/>
    <Footer/>
    
    </div>
    );
};

export default MainPage;
