import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/shared/navbar/Navbar';
import Documentation from '../../pages/Documentation/GuideSection';

import HeroSection from '../../pages/HomePage/HeroSection';
import WorkManagement from '../../pages/HomePage/WorkManagement';
import Help from '../../pages/Help/HelpSection'
import Automation from '../../pages/Automation/AutomationSection'
import GetStarted from '../../pages/GetStarted/Doc'
import ReportBug from '../../pages/Help/ReportBug'
import RequestFeature from '../../pages/Help/RequestFeature'
import ContactUs from '../../pages/Help/ContactUs'

const Approutes = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
      <Route path="/" element={<>
        <HeroSection/> <WorkManagement/> </>} />

      <Route path="/home" element={<>
        <HeroSection/> <WorkManagement/> </>} />

        <Route path="/documentation" element={<Documentation />} />
        <Route path="/help" element={<Help />} />
        <Route path="/automation" element={<Automation />} />
 
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/reportbug" element={<ReportBug/>} />
        <Route path="/requestfeature" element={<RequestFeature />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
   
  
      
    </Router>
  );
};

export default Approutes;


