import React from "react";
// nodejs library that concatenates classes

import './componentsStyle.css';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
 
} from "reactstrap";

const UserDetails =()=>{
    return(
        <>
        <Card className="card-user">
            <CardBody>
                <div className="userDetailsCardBody">
                    <div  className='userDetailsCardBodyFirst'>
                        <h2>Mike Andrew</h2>
                        <p>Ceo/Co-Founder</p>
                    </div>
                    <div className='userDetailsCardBodySecond'>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg").default}
                        />
                        </a>
                    </div>
                </div>
               
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              </Card>
              </>
              );

}

export default UserDetails;