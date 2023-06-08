import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import Slider from "./Slider";
import phone from "../images/telephone.png";
import email from "../images/email.png";
import address from "../images/address.png";
const Home = () => {
  const [userName, setUserName] = useState();
  const [show, setShow] = useState(false);

  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHome();
  }, []);

  return (
    <>
      <div className="sliban">
        <Slider />
      </div>
      <br />
      <div className="col-md-12 puja">
        <p className="big_name">
          {show
            ? `Hello, ${userName}!! Welcome.Please Click on Grievance Tab to file your greivance `
            : "Welcome! User please Log in to file Your Grievance."}
        </p>
      </div>
      <br />
      <div className="container">
        <p align="justify">
          Centralised Public Grievance Redress and Monitoring System (CPGRAMS)
          is an online platform available to the citizens 24x7 to lodge their
          grievances to the respective authorities on any subject related to
          service delivery. It is a single portal which can connect to all the
          Ministries/Departments of Government of India and States , also can be
          utilised in private sector such as business houses,collage
          universities etc. Every Departments have role-based access to this
          system. CPGRAMS is also accessible to the citizens through standalone
          mobile application downloadable through Google Play store and mobile
          application.
        </p>
        <br />
        <p align="justify">
          The status of the grievance filed in CPGRAMS can be tracked with the
          unique registration ID provided at the time of registration of the
          complainant. CPGRAMS also provides appeal facility to the citizens if
          they are not satisfied with the resolution by the Grievance Officer.
          The status of the Appeal can also be tracked by the petitioner with
          the grievance registration number.
        </p>
        <h2> Issues which are not taken up for redressal</h2>
        <hr />
        <ul>
          <li>
            {" "}
            Subjudice cases or any matter concerning judgment given by any
            court.
          </li>
          <li> Personal and family disputes.</li>
          <li> RTI matters.</li>
          <li> Suggestions</li>
          <li>
            {" "}
            Anything that impacts upon territorial integrity of the country or
            friendly relations with other countries.
          </li>
        </ul>
        <hr />
      </div>
      <div className="contact_info bg-dark text-white">
        <div className="container-fluid">
          <br />
          <div className="row">
            <div className="col-lg-12 row">
              <div className="contact_info_item col-1 abc">
                <img src={phone} alt="not found" height="50" width="50" />
              </div>
              <div className="contact_info_item col-2 abc">
                <h6>Phone</h6>
                <p>+1800 266 1236</p>
              </div>
              <div className="col-1"></div>
              <div className="contact_info_item col-1 abc">
                <img src={email} alt="not found" height="50" width="50" />
              </div>
              <div className="contact_info_item col-3 abc">
                <h6>Email</h6>
                <p>filemygrievance@gmail.com</p>
              </div>
              <div className="col-1"></div>
              <div className="contact_info_item col-1 abc">
                <img src={address} alt="not found" height="50" width="50" />
              </div>
              <div className="contact_info_item col-2 abc">
                <h6>Address</h6>
                <p>New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
