import React from "react";
import WorkWithUs from "../careerpages/WorkWithUs";
import CareerOpenings from "../careerpages/CareerOpenings";
import CareerCulture from "../careerpages/CareerCulture";
import BuildCareer from "../careerpages/buildcareer.jsx";


export default function Careers() {
  return (
    <>
      <BuildCareer />
      <WorkWithUs />
      <CareerOpenings/>
      <CareerCulture/>
    </>
  );
}
