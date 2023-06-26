import React from "react";
import socialMediaDesktop from "../assets/Frame7.png";
import socialMediaMobile from "../assets/Frame7Mob.png";
import style from "../css/Social.module.css";

export default function Social() {
  return (
    <section className={style.social} id="social">
      <h2 className={style.social__heading}>On Social Media</h2>
      <img
        className={style.social__image__d}
        src={socialMediaDesktop}
        alt="Social Media Image"
      />
      <img
        className={style.social__image__m}
        src={socialMediaMobile}
        alt="Social Media Image"
      />
    </section>
  );
}
