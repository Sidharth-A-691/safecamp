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
            ? `Hello, ${userName}!! Please Click on Complaint Tab to file your complaint `
            : "Welcome! User please Log-in to file your complaint."}
        </p>
      </div>
      <br />
      <div className="container">
        <p align="justify">
        At Muthoot Institute of Technology and Science, we believe that every student deserves a safe and inclusive campus environment. That's why we have created SafeCamp, a dedicated complaint reporting portal designed to address and resolve any concerns or issues you may encounter during your time at our college.
        </p>
        <br />
        <p align="justify">
        SafeCamp provides a confidential and secure platform for you to raise your voice, ensuring that your complaints are heard and actions are taken. Whether it's incidents of harassment, discrimination, misconduct, or any other form of wrongdoing, we are committed to fostering a culture of accountability and safety. Together, we can build a stronger, more respectful community where everyone can thrive. Join us in making a difference and let your voice be heard through SafeCamp!
        </p>
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
                <p>safecamp@gmail.com</p>
              </div>
              <div className="col-1"></div>
              <div className="contact_info_item col-1 abc">
                <img src={address} alt="not found" height="50" width="50" />
              </div>
              <div className="contact_info_item col-2 abc">
                <h6>Address</h6>
                <p>Muthoot Institute of Technology and Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
