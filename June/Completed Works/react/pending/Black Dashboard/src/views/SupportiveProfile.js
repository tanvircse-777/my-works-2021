/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

 
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import UserDetails from "./components/UserDetails";
import SupporterDetails from "./components/SupporterDetails";

// core components


const Charts = () => {
  return (
    <>
      <div className="content">
        <UserDetails/>
        <SupporterDetails/>
      </div>
    </>
  );
};

export default Charts;
