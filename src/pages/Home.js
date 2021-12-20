import React from "react";
import Customer from "../components/home/customer/Customer";
import Feature from "../components/home/feature/Feature";
import GetKnow from "../components/home/GetKnow/GetKnow";
import HowWork from "../components/home/howwork/HowWork";
import TheCarowsal from "../components/home/TheCarousal/TheCarowsal";
import Works from "../components/home/works/Works";
import Courses from "./../components/home/courses/Courses";

const Home = () => {
  return (
    <div>
      <TheCarowsal />
      <GetKnow />
      <Feature />
      <Works />
      <HowWork />
      <Courses />
      <Customer />
    </div>
  );
};

export default Home;
