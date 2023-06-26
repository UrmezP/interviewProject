import React from "react";
import style from "../css/Contact.module.css";

export default function Contact() {
  return (
    <>
      <h2 className={style.contact__heading}>Contact us</h2>
      <section className={style.contact} id="contact">
        <div className={style.contact__div}>
          <p>
            We will contact you through the information obtained in the form
            below
          </p>

          <form className={style.contact__form}>
            <span className={style.contact__form__span}>Full Name:</span>
            <input
              className={style.contact__form__input}
              type="text"
              name="fname"
              required
            />
            <span className={style.contact__form__span}>Email:</span>
            <input
              className={style.contact__form__input}
              type="email"
              name="email"
              required
            />
            <span className={style.contact__form__span}>Number:</span>
            <input
              className={style.contact__form__input}
              type="text"
              name="num"
              minLength={10}
              required
            />
            <span className={style.contact__form__span}>Field:</span>
            <input
              className={style.contact__form__input}
              type="text"
              name="field"
              minLength={4}
              required
            />
            <span className={style.contact__form__span}></span>
            <input
              className={style.contact__form__input}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className={style.contact__div}>
          <p>
            <b>Adress:</b> Iran, Tehran, Azadi Square, , Saeedi Highway, Fatah
            Highway, Fatah Highway, Al-Ghadir Boulevard, South Al-Ghadir,
            Alipouran Alley, Shadabad Neighborhood House, Parto Center
          </p>
          <div className={style.contact__info}>
            <div className={style.contact__phone}>
              <h3>Phone Number</h3>
              <div>
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 0C9.62587 0 0 9.62587 0 21.5C0 33.3741 9.62587 43 21.5 43C33.3741 43 43 33.3741 43 21.5C43 9.62587 33.3741 0 21.5 0ZM13.7734 8.54016C14.2164 8.51404 14.6168 8.77881 14.9204 9.24876L17.8598 14.8232C18.1693 15.4838 17.9934 16.191 17.5317 16.663L16.1854 18.0094C16.1023 18.1232 16.0476 18.2515 16.0463 18.3925C16.5626 20.3911 18.1288 22.2347 19.5107 23.5025C20.8925 24.7703 22.3777 26.4867 24.3056 26.8933C24.5439 26.9598 24.8358 26.9836 25.0064 26.8252L26.5706 25.2321C27.1105 24.8228 27.8916 24.6245 28.4681 24.9591H28.4943L33.7984 28.0902C34.577 28.5782 34.6576 29.5215 34.1002 30.0953L30.447 33.7197C29.9075 34.273 29.1907 34.459 28.4944 34.4598C25.4146 34.3676 22.5046 32.856 20.1143 31.3026C16.1909 28.4483 12.5921 24.9083 10.3327 20.6313C9.4662 18.8378 8.44828 16.5495 8.54543 14.5477C8.5541 13.7947 8.75784 13.0569 9.28818 12.5715L12.9415 8.91816C13.2261 8.676 13.5076 8.55585 13.7734 8.54016Z"
                    fill="#3EB25E"
                  />
                </svg>
                <a href="tel:+989121248005" aria-label="Call on Phone Number">
                  +989121248005
                </a>
              </div>
            </div>
            <div>
              <h3>Ghalb Sefid Charity on Social media</h3>
            </div>
            <div className={style.contact__links}>
              <a href="javascript:void();" aria-label="Telegram Link">
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43 21.5C43 33.3734 33.3734 43 21.5 43C9.62663 43 0 33.3734 0 21.5C0 9.62663 9.62663 0 21.5 0C33.3734 0 43 9.62663 43 21.5ZM22.2704 15.8724C20.1795 16.7413 15.9996 18.542 9.73233 21.2725C8.71467 21.6774 8.18075 22.0733 8.13237 22.4603C8.04996 23.1161 8.87054 23.3741 9.98496 23.7235C10.1372 23.7718 10.2949 23.8202 10.4562 23.874C11.5545 24.2305 13.0308 24.648 13.7976 24.6641C14.4946 24.6784 15.2722 24.3918 16.1304 23.8041C21.9855 19.8499 25.0081 17.8522 25.198 17.8092C25.3324 17.7787 25.5187 17.7393 25.6441 17.8522C25.7695 17.9632 25.757 18.1747 25.7445 18.232C25.662 18.5778 22.4478 21.5681 20.7815 23.1161C20.262 23.598 19.8947 23.9403 19.8194 24.0191C19.651 24.1929 19.479 24.3595 19.3142 24.519C18.2929 25.5008 17.5297 26.239 19.3572 27.443C20.2351 28.0217 20.9374 28.5 21.638 28.9766C22.403 29.498 23.1663 30.0176 24.1553 30.6662C24.4061 30.831 24.6462 31.0012 24.8809 31.1678C25.7713 31.8039 26.5722 32.3736 27.5612 32.284C28.1345 32.2303 28.7294 31.691 29.0304 30.0803C29.7417 26.2712 31.1427 18.0224 31.467 14.6218C31.4868 14.3394 31.4748 14.0558 31.4312 13.7761C31.4051 13.5503 31.2951 13.3424 31.123 13.1938C30.8668 12.9842 30.4691 12.9394 30.2899 12.943C29.4819 12.9573 28.242 13.3891 22.2704 15.8724Z"
                    fill="#3EB25E"
                  />
                </svg>
              </a>
              <a href="javascript:void();" aria-label="Twitter Link">
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM30.2456 17.6121C30.2545 17.7957 30.2568 17.9794 30.2568 18.1585C30.2568 23.7575 25.9993 30.2097 18.2101 30.2097C15.9084 30.2136 13.6547 29.5525 11.7197 28.3061C12.049 28.3464 12.3871 28.3621 12.7298 28.3621C14.7141 28.3621 16.5393 27.688 17.9883 26.5503C17.1053 26.5329 16.2497 26.2405 15.5407 25.7138C14.8318 25.1871 14.3048 24.4523 14.0332 23.6119C14.6674 23.7325 15.3207 23.7072 15.9436 23.538C14.9852 23.3442 14.1233 22.8249 13.504 22.0681C12.8848 21.3113 12.5464 20.3637 12.5461 19.3858V19.3343C13.1172 19.6501 13.7712 19.8427 14.4655 19.8651C13.5669 19.267 12.9309 18.3482 12.6873 17.2966C12.4438 16.245 12.6112 15.1401 13.1553 14.2079C14.219 15.5158 15.5455 16.5858 17.049 17.3485C18.5524 18.1112 20.1993 18.5497 21.883 18.6356C21.6689 17.727 21.761 16.7731 22.145 15.9223C22.529 15.0715 23.1833 14.3714 24.0063 13.9308C24.8292 13.4902 25.7746 13.3339 26.6956 13.486C27.6166 13.6382 28.4614 14.0904 29.0989 14.7723C30.0466 14.5848 30.9555 14.2372 31.7864 13.7443C31.4705 14.7256 30.8092 15.5588 29.9253 16.0892C30.7648 15.9881 31.5845 15.7624 32.3575 15.4195C31.7897 16.2703 31.0745 17.0129 30.2456 17.6121Z"
                    fill="#3EB25E"
                  />
                </svg>
              </a>
              <a href="javascript:void();" aria-label="LinkedIn Link">
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z"
                    fill="#3EB25E"
                  />
                </svg>
              </a>
              <a href="javascript:void();" aria-label="Instagram Link">
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.8615 12.6917C42.8374 10.8862 42.4989 9.09865 41.861 7.40903C41.3079 5.98384 40.463 4.68952 39.3805 3.60876C38.2979 2.52799 37.0014 1.68455 35.5739 1.13233C33.9032 0.506229 32.1382 0.167684 30.3541 0.131112C28.057 0.0286064 27.3287 0 21.4976 0C15.6665 0 14.9191 1.5985e-07 12.6388 0.131112C10.8554 0.167952 9.09129 0.506493 7.42137 1.13233C5.99359 1.68417 4.69691 2.52747 3.61429 3.60828C2.53168 4.6891 1.68697 5.98362 1.13422 7.40903C0.505816 9.07566 0.167442 10.8373 0.133718 12.6178C0.0310417 14.9134 0 15.6405 0 21.4619C0 27.2832 -1.77907e-08 28.027 0.133718 30.306C0.169536 32.0891 0.506219 33.8484 1.13422 35.5195C1.6879 36.9444 2.53324 38.2384 3.61621 39.3188C4.69919 40.3991 5.99599 41.2421 7.42376 41.7938C9.08911 42.445 10.8536 42.8078 12.6412 42.8665C14.9406 42.969 15.6689 43 21.5 43C27.3311 43 28.0785 43 30.3588 42.8665C32.1429 42.8314 33.908 42.4937 35.5786 41.8677C37.0058 41.3148 38.302 40.4711 39.3844 39.3905C40.4669 38.3098 41.312 37.0158 41.8658 35.591C42.4938 33.9223 42.8305 32.163 42.8663 30.3775C42.969 28.0842 43 27.3571 43 21.5334C42.9952 15.712 42.9952 14.973 42.8615 12.6917ZM21.4833 32.4705C15.3848 32.4705 10.4444 27.5383 10.4444 21.4499C10.4444 15.3616 15.3848 10.4294 21.4833 10.4294C24.411 10.4294 27.2188 11.5905 29.289 13.6572C31.3592 15.724 32.5222 18.5271 32.5222 21.4499C32.5222 24.3728 31.3592 27.1759 29.289 29.2427C27.2188 31.3094 24.411 32.4705 21.4833 32.4705ZM32.9616 12.5915C32.6235 12.5918 32.2886 12.5256 31.9761 12.3966C31.6637 12.2675 31.3798 12.0782 31.1407 11.8396C30.9016 11.6009 30.712 11.3174 30.5828 11.0055C30.4535 10.6936 30.3872 10.3593 30.3875 10.0217C30.3875 9.68442 30.454 9.35041 30.5833 9.03877C30.7126 8.72713 30.9022 8.44397 31.1411 8.20545C31.38 7.96694 31.6636 7.77774 31.9758 7.64865C32.2879 7.51957 32.6225 7.45313 32.9604 7.45313C33.2983 7.45313 33.6328 7.51957 33.945 7.64865C34.2571 7.77774 34.5408 7.96694 34.7797 8.20545C35.0186 8.44397 35.2081 8.72713 35.3374 9.03877C35.4667 9.35041 35.5333 9.68442 35.5333 10.0217C35.5333 11.4425 34.3823 12.5915 32.9616 12.5915Z"
                    fill="#3EB25E"
                  />
                  <path
                    d="M21.4833 28.6089C25.4435 28.6089 28.6539 25.4039 28.6539 21.4502C28.6539 17.4966 25.4435 14.2915 21.4833 14.2915C17.5231 14.2915 14.3127 17.4966 14.3127 21.4502C14.3127 25.4039 17.5231 28.6089 21.4833 28.6089Z"
                    fill="#3EB25E"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
