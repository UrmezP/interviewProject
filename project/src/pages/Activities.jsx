import React from "react";
import style from "../css/Activities.module.css";
import figure1 from "../assets/frame1.png";
import figure2 from "../assets/frame2.png";
import figure3 from "../assets/frame3.png";
import figure4 from "../assets/frame4.png";
import figure5 from "../assets/frame5.png";
import figure6 from "../assets/frame6.png";

export default function Activities() {
  return (
    <section className={style.activities} id="activities">
      <h2 className={style.activities__heading}>Activities</h2>
      <div className={style.activities__content}>
        <div className={style.activities__row}>
          <div>
            <img src={figure1} alt="" />
            <div>
              <h3>Health and psychological support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor magna fringilla urna, porttitor
              </p>
            </div>
          </div>
          <div className={style.activities__article__right}>
            <img src={figure2} alt="" />
            <div>
              <h3>Holding literacy and extracurricular classes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>
          </div>
        </div>
        <div className={style.activities__row}>
          <div>
            <img src={figure3} alt="" />
            <div>
              <h3>Establish workshops to help families of children</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>
          </div>
          <div className={style.activities__article__right}>
            <img src={figure4} alt="" />
            <div>
              <h3>Livelihood support for children and their families</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>
          </div>
        </div>
        <div className={style.activities__row}>
          <div>
            <img src={figure5} alt="" />
            <div>
              <h3>Teaching volunteer teaching methods</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>
          </div>
          <div className={style.activities__article__right}>
            <img src={figure6} alt="" />
            <div>
              <h3>
                Holding an event to raise donations or offer workshop products
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
