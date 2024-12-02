"use client";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page";

import AboutUs from "./aboutus/page";
import Solutions from "./solutions/page";
import Blog from "./blog/page";
import Fintech from "./fintech/page";
import TeamPage from "./team/page";
import ContactUs from "./contactus/page";
import GetStarted from "./getstarted/page";
import LearnMore from "./learnmore/page";
import TermsAndConditions from "./term&conditions/page";
import Privacy from "./privacy/page";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/fintech" element={<Fintech />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/term&conditions" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<Privacy />} />
   



    </Routes>
  );
};

export default AppRoutes;
