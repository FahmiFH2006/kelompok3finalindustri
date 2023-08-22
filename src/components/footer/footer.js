import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{display: "flex", justifyContent: "space-around"}}>
      <div>
        <div>
          <h4 className="fs-3">NusaLearning</h4>
          <p className="" style={{ marginBottom: "0"}}>2022 NusaLearning</p>
          <p className="" style={{ marginBottom: "0"}}>All rights reserved</p>
          <p className="">PT.Solusi Teknologi Nusantara</p>
        </div>
      </div>
      <div className="">
        <Col className="pindah">
          <h4 className="fs-3">About</h4>
          <a href="#" className="custom-link">
            Privacy Policy
          </a>
          <p className="" style={{ marginBottom: "0"}}>
            <a href="#" className="custom-link">
              Help Center
            </a>
          </p>
          <p className="">
            <a href="#" className="custom-link">
              Term & COndition
            </a>
          </p>
        </Col>
      </div>
      <div className="">
        <Col className="pindah">
          <h4 className="fs-3">Service</h4>
          <a href="#" className="custom-link">
            Check Certificate
          </a>
        </Col>
      </div>
      <div className="">
        <Col className="pindah">
          <h4 className="fs-3">Follow Us on</h4>
  

          <p>
            <a style={{ marginRight: "15px" }}>
              <i style={{ fontSize: "30px" }} className="bi bi-youtube"></i>
            </a>
            <a style={{ marginRight: "15px" }}>
              <i style={{ fontSize: "30px" }} className="bi bi-facebook"></i>
            </a>
            <a style={{ marginRight: "15px" }}>
              <i style={{ fontSize: "30px" }} className="bi bi-instagram"></i>
            </a>
            <a>
              <i style={{ fontSize: "30px" }} className="bi bi-twitter"></i>
            </a>
          </p>
        </Col>
      </div>
      <div className="">
        <Col className="pindah">
          <h4 className="fs-3">Download NusaLMS</h4>
          <div style={{ display: "flex", alignItems: "center"}}>
          <Button
            variant="secondary"
            style={{ display: "block", marginRight: "15px" }}
          >
            PlayStore
          </Button>
          <Button
            variant="secondary"
            style={{
              display: "block",
            }}
          >
            AppStore
          </Button>

          </div>
        </Col>
      </div>
    </div>
  );
};
export default Footer;
