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
/* eslint-disable no-unused-vars*/
import React from "react";

//internal components
import UserDetails from './components/UserDetails';
import ReactTable from './tables/ReactTables';
import ImageUpload from "components/CustomUpload/ImageUpload.js";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const ValidationForms = () => {
  // register form
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerConfirmPassword, setregisterConfirmPassword] = React.useState(
    ""
  );
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerPasswordState, setregisterPasswordState] = React.useState("");
  const [
    registerConfirmPasswordState,
    setregisterConfirmPasswordState,
  ] = React.useState("");
  // login form
  const [loginFullName, setloginFullName] = React.useState("");
  const [loginEmail, setloginEmail] = React.useState("");
  const [loginPassword, setloginPassword] = React.useState("");
  const [loginFullNameState, setloginFullNameState] = React.useState("");
  const [loginEmailState, setloginEmailState] = React.useState("");
  const [loginPasswordState, setloginPasswordState] = React.useState("");
  // type validation form
  const [required, setrequired] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [url, seturl] = React.useState("");
  const [source, setsource] = React.useState("");
  const [destination, setdestination] = React.useState("");
  const [requiredState, setrequiredState] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [urlState, seturlState] = React.useState("");
  const [sourceState, setsourceState] = React.useState("");
  const [destinationState, setdestinationState] = React.useState("");
  // range validation form
  const [minLength, setminLength] = React.useState("");
  const [maxLength, setmaxLength] = React.useState("");
  const [range, setrange] = React.useState("");
  const [min, setmin] = React.useState("");
  const [max, setmax] = React.useState("");
  const [minLengthState, setminLengthState] = React.useState("");
  const [maxLengthState, setmaxLengthState] = React.useState("");
  const [rangeState, setrangeState] = React.useState("");
  const [minState, setminState] = React.useState("");
  const [maxState, setmaxState] = React.useState("");
  const stateFunctions = {
    // register form
    setregisterEmail: (value) => setregisterEmail(value),
    setregisterPassword: (value) => setregisterPassword(value),
    setregisterConfirmPassword: (value) => setregisterConfirmPassword(value),
    setregisterEmailState: (value) => setregisterEmailState(value),
    setregisterPasswordState: (value) => setregisterPasswordState(value),
    setregisterConfirmPasswordState: (value) =>
      setregisterConfirmPasswordState(value),
    // login form
    setloginFullName: (value) => setloginFullName(value),
    setloginEmail: (value) => setloginEmail(value),
    setloginPassword: (value) => setloginPassword(value),
    setloginFullNameState: (value) => setloginFullNameState(value),
    setloginEmailState: (value) => setloginEmailState(value),
    setloginPasswordState: (value) => setloginPasswordState(value),
    // type validation form
    setrequired: (value) => setrequired(value),
    setemail: (value) => setemail(value),
    setnumber: (value) => setnumber(value),
    seturl: (value) => seturl(value),
    setsource: (value) => setsource(value),
    setdestination: (value) => setdestination(value),
    setrequiredState: (value) => setrequiredState(value),
    setemailState: (value) => setemailState(value),
    setnumberState: (value) => setnumberState(value),
    seturlState: (value) => seturlState(value),
    setsourceState: (value) => setsourceState(value),
    setdestinationState: (value) => setdestinationState(value),
    // range validation form
    setminLength: (value) => setminLength(value),
    setmaxLength: (value) => setmaxLength(value),
    setrange: (value) => setrange(value),
    setmin: (value) => setmin(value),
    setmax: (value) => setmax(value),
    setminLengthState: (value) => setminLengthState(value),
    setmaxLengthState: (value) => setmaxLengthState(value),
    setrangeState: (value) => setrangeState(value),
    setminState: (value) => setminState(value),
    setmaxState: (value) => setmaxState(value),
  };
  // function that returns true if value is email, false otherwise
  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if two strings are equal
  const compare = (string1, string2) => {
    if (string1 === string2) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  const verifyUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  const change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (verifyEmail(event.target.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "password":
        if (verifyLength(event.target.value, 1)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "equalTo":
        if (compare(event.target.value, stateNameEqualTo.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
          stateFunctions["set" + stateNameEqualTo.stateName + "State"](
            "has-success"
          );
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
          stateFunctions["set" + stateNameEqualTo.stateName + "State"](
            "has-danger"
          );
        }
        break;
      case "number":
        if (verifyNumber(event.target.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "length":
        if (verifyLength(event.target.value, stateNameEqualTo)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "max-length":
        if (!verifyLength(event.target.value, stateNameEqualTo + 1)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "url":
        if (verifyUrl(event.target.value)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "min-value":
        if (
          verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo
        ) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "max-value":
        if (
          verifyNumber(event.target.value) &&
          event.target.value <= stateNameEqualTo
        ) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      case "range":
        if (
          verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo &&
          event.target.value <= maxValue
        ) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      default:
        break;
    }
    stateFunctions["set" + stateName](event.target.value);
  };
  const registerClick = () => {
    if (registerEmailState === "") {
      setregisterEmailState("has-danger");
    }
    if (registerPasswordState === "" || registerConfirmPasswordState === "") {
      setregisterPasswordState("has-danger");
      setregisterConfirmPasswordState("has-danger");
    }
  };
  const loginClick = () => {
    if (loginFullNameState === "") {
      setloginFullNameState("has-danger");
    }
    if (loginEmailState === "") {
      setloginEmailState("has-danger");
    }
    if (loginPasswordState === "") {
      setloginPasswordState("has-danger");
    }
  };
  const typeClick = () => {
    if (requiredState === "") {
      setrequiredState("has-danger");
    }
    if (emailState === "") {
      setemailState("has-danger");
    }
    if (numberState === "") {
      setnumberState("has-danger");
    }
    if (urlState === "") {
      seturlState("has-danger");
    }
    if (sourceState === "" || destinationState === "") {
      setsourceState("has-danger");
      setdestinationState("has-danger");
    }
  };
  const rangeClick = () => {
    if (minLengthState === "") {
      setminLengthState("has-danger");
    }
    if (maxLengthState === "") {
      setmaxLengthState("has-danger");
    }
    if (rangeState === "") {
      setrangeState("has-danger");
    }
    if (minState === "") {
      setminState("has-danger");
    }
    if (maxState === "") {
      setmaxState("has-danger");
    }
  };
  return (
    <>
      <div className="content">
      <Card className="card-user">
          <UserDetails/>
      </Card>
            <Form className="form-horizontal" id="RangeValidation">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Range Validation</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Label sm="4">First Name</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">Last Name</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">Email</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">Contact No</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">Address (Home</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">Address (Host country)</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">University</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="4">Date of Birth</Label>
                    <Col sm="8">
                      <FormGroup className={minLengthState}>
                        <Input
                          name="min_length"
                          type="text"
                          onChange={(e) => change(e, "minLength", "length", 0)}
                        />
                        {minLengthState === "has-danger" ? (
                          <label className="error">
                            Please enter at least 5 characters.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button color="primary" onClick={rangeClick}>
                    Validate Inputs
                  </Button>
                </CardFooter>
              </Card>
            </Form>
            <Card className="card-user">
                <ReactTable/>
            </Card>
            <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h4">Upload Documents</CardTitle>
              </CardHeader>
          <CardBody>
           <Row>
              <Col sm="6">
                <Card className="card-user">
                  <ImageUpload buttonTitle='Add CV'/>
                </Card>
              </Col>
              <Col sm="6">
              <Card className="card-user">
                  <ImageUpload buttonTitle='Add Statement of Purpose'/>
                </Card>  
              </Col>
            </Row>
            </CardBody>
            </Card>
      </div>
    </>
  );
};

export default ValidationForms;