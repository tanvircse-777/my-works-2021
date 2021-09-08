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
// nodejs library that concatenates classes

import UserDetails from './components/UserDetails';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
 
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

import Calendar from './Calendar'

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

const Dashboard = () => {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <UserDetails/>
        </Card>
        <Card style={{height:'600px'}} className="card-chart">
            <img  alt="set the file"
                  className="indexCoverPhoto"
                  src={require("assets/img/bg14.jpg").default}
            />
          </Card>
      </div>
    </>
  );
};

export default Dashboard;
