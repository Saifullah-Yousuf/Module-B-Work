import React from "react";
import { Link } from "react-scroll";  
import Styles from "./Section01.module.css";
import img from "../../assets/my image.png";

const Section01 = () => {
  return (
    <div className={Styles.main}>
      <div
        className={Styles.imgDiv}
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        <img style={{ width: "80%", borderRadius: "30px" }} src={img} alt="" />
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "25px", color: "#018C8D" }}>
          Hello, I'm Saifullah{" "}
          <span
            style={{ fontSize: "30px", fontWeight: "bold", color: "#018C8D" }}
          >
            !
          </span>
        </p>
        <p style={{ fontSize: "50px", color: "#018C8D", fontWeight: "bold" }}>
          Frontend Developer
        </p>
        <div className={Styles.BtnDiv}>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <button className={Styles.sec01btn}>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section01;

