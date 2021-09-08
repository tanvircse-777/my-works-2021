/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Pemail: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classNames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import ReactTable from "components/ReactTable/ReactTable.js";

const dataTable = [
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Angelica Ramos", "Chief Executive contactnumberr (CEO)", "London", "47"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Fiona Green", "Chief Operating contactnumberr (COO)", "San Francisco", "48"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Howard Hatfield", "contactnumber Manemailr", "San Francisco", "51"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Jena Gaines", "contactnumber Manemailr", "London", "30"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"],
  ["Paul Byrd", "Chief Financial contactnumberr (CFO)", "New York", "64"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Timothy Mooney", "contactnumber Manemailr", "London", "37"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Yuri Berry", "Chief Marketing contactnumberr (CMO)", "New York", "40"],
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
];

const ReactTables = () => {
  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {
      return {
        id: key,
        name: prop[0],
        relationship: prop[1],
        contactnumber: prop[2],
        email: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
                    obj.name +
                    ", \nrelationship: " +
                    obj.relationship +
                    ", \ncontactnumber: " +
                    obj.contactnumber +
                    ", \nemail: " +
                    obj.email +
                    "\n}."
                );
              }}
              color="info"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-heart-2" />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nrelationship: " +
                    obj.relationship +
                    ", \ncontactnumber: " +
                    obj.contactnumber +
                    ", \nemail: " +
                    obj.email +
                    "\n}."
                );
              }}
              color="warning"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-pencil" />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                var newdata = data;
                newdata.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    data.splice(i, 1);
                    console.log(data);
                    return true;
                  }
                  return false;
                });
                setData(newdata);
              }}
              color="danger"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-simple-remove" />
            </Button>{" "}
          </div>
        ),
      };
    })
  );
  return (
    <>
      <div className="content">
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Parents Information</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "Parent's Name",
                      accessor: "name",
                    },
                    {
                      Header: "Realationship",
                      accessor: "relationship",
                    },
                    {
                      Header: "Contact Number",
                      accessor: "contactnumber",
                    },
                    {
                      Header: "Email",
                      accessor: "email",
                    },
                    {
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    },
                  ]}
                  defaultPemailSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ReactTables;
