import React from "react";
import style from "../css/About.module.css";

export default function About() {
  return (
    <section className={style.about} id="about">
      <h2>About US</h2>
      <article className={style.about__article}>
        <div className={style.about__article__text}>
          <p>
            Ghalb Sefid Charity was established in 2016 This institute is proud
            to use experienced counselors and helpers to organize the situation
            of working children under 18 years old and their families and to
            provide services such as psychology, treatment and medicine, help,
            education and livelihood. This type of service allows families to
            grow by creating the right conditions. Also, the most important
            services provided for children are educational services and for
            families, increasing the level of awareness in education. With the
            help of your kind hands, we all build a roof of empathy together, to
            help a healthy society and a bright future.
          </p>
          <p>
            Licenses obtained:{" "}
            <a href="javascript:void();" aria-label="Link To SomePage">
              See this link
            </a>
          </p>
        </div>
        <div className={style.about__article__svg}>
          <svg
            width="124"
            height="141"
            viewBox="0 0 124 141"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M121.36 66.2979C124.693 68.2224 124.693 73.0337 121.36 74.9582L8.32816 140.217C4.99483 142.142 0.828164 139.736 0.828164 135.887L0.82817 5.36903C0.82817 1.52003 4.99483 -0.885593 8.32817 1.03891L121.36 66.2979Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </article>
    </section>
  );
}
