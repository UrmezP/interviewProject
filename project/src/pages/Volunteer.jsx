import React from "react";
import style from "../css/Volunteer.module.css";
import image1 from "../assets/pay-per-click.png";
import image2 from "../assets/coworker.png";
import image3 from "../assets/loop.png";

export default function Volunteer() {
  return (
    <section className={style.volunteer}>
      <h2 className={style.volunteer__heading}>volunteer</h2>
      <div className={style.volunteer__cards}>
        <article className={style.volunteer__card}>
          <img src={image1} alt="" />
          <h2>philanthropy</h2>
          <p>
            Someone who occasionally donates to the charity. This assistance can
            be payment of money or goods
          </p>
        </article>
        <article className={style.volunteer__card}>
          <img src={image2} alt="" />
          <h2>Supporter</h2>
          <p>
            Supporter Someone who donates money or goods to the institution at
            specific times. Weekly or monthly or seasonally.
          </p>
        </article>
        <article className={style.volunteer__card}>
          <img src={image3} alt="" />
          <h2>volunteers</h2>
          <p>
            A person who devotes part of his time in person to the executive
            activities of the institution.
          </p>
        </article>
      </div>
    </section>
  );
}
