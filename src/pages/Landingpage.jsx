import React from "react";
import styles from "./Landingpage.module.css";
import img1 from "../images/herorobotarm.png";
import discount from "../images/Discount.png";
import arrowup from "../images/Arrow - Up.svg";
import Button from "../components/Button";
import MenuData from "../data/MenuData";
import transactions from "../images/transactions.png";
import apple from "../images/apple.svg";
import google from "../images/google.svg";
import moneyorbit from "../images/transactionhorbit.png";
import quotes from "../images/quotes.svg";
import sponsors from "../images/sponsors.png";
import CommentsData from "../data/CommentsData";
import Footer from "../components/Footer";

function Landingpage() {

  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.glare}></div>
          <div className={styles.discount}>
            <img src={discount} alt="" />
            <p>
              20% <span style={{ color: "#ffffffb3" }}>DISCOUNT FOR </span>{" "}
              <br /> 1 MONTH <span style={{ color: "#ffffffb3" }}>ACCOUNT</span>
            </p>
          </div>
          <div className={styles.motto}>
            The Next
            <br />
            <span className={styles.generation}>Generation</span>
            <br />
            Payment Method.
          </div>
          <button className={styles.getstartedmob}>Get Started</button>
          <button className={styles.getstarted}>
            Get <br /> Started
          </button>
          <img className={styles.arrow} src={arrowup} alt="" />
          <span className={styles.caption}>
            Our team of experts uses a methodology to identify
            <br />
            the credit cards most likely to fit your needs.
            <br />
            We examine annual percentage rates, annual fees.
          </span>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.glare2}></div>
          <img className={styles.robotArm} src={img1} alt="Robot Arm" />
        </div>
      </section>
      <div className={styles.statistics}>
        <span className={styles.numbers}>3800+</span>
        <span>USER ACTIVE</span><span style={{ color: '#ffffffb3' }}>|</span><span className={styles.numbers}>230+</span>
        <span>TRUSTED BY COMPANY</span><span style={{ color: '#ffffffb3' }}>|</span>
        <span className={styles.numbers}>$230M+</span>
        <span>TRANSACTION</span>
      </div>
      <section className={styles.advantages}>
        <div className={styles.business}>
          <h1>
            You do the business,
            <br />
            we'll handle the money.
          </h1>
          <p>
            With the right credit card, you can improve your financial life by{" "}
            <br /> building credit, earning rewards and saving money. But with
            <br />
            hundreds of credit cards on the market.
          </p>
          <Button
            fs="18px"
            fw="500"
            rounded="8px"
            w="170px"
            title="Get Started"
            p="15px 0px"
            bg="#4BD2DC"
          />
        </div>
        <menu className={styles.rewardmenu}>
          <ul>
            {MenuData.map((item) => (
              <li key={item.id} className={styles.rewardmenulist}>
                {/* <span className={styles.liststyle}> */}
                <img src={item.img} alt="" />
                {/* </span> */}
                <span className={styles.listbody}>
                  <h3>{item.header}</h3>
                  <p>{item.body}</p>
                </span>
              </li>
            ))}
          </ul>
        </menu>
      </section>
      <section className={styles.transactions}>
        <div className={styles.transactfigure}>
          <img src={transactions} alt="" />
        </div>
        <div className={styles.billing}>
          <h1>Easily control your billing & invoicing.</h1>
          <p>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className={styles.appstores}>
            <img src={apple} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </section>
      <section className={styles.cardDeal}>
        <div className={styles.cardDealCaption}>
          <h1>
            Find a better card deal <br /> in few easy steps.
          </h1>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
            <br /> quis aliquet eget mauris tortor.ç Aliquet ultrices ac,
            ametau.
          </p>
          <Button
            fs="18px"
            fw="500"
            rounded="8px"
            w="170px"
            title="Get Started"
            p="15px 0px"
            bg="#4BD2DC"
          />
        </div>
        <div className={styles.cardDealimg}>
          <img src={moneyorbit} alt="" />
        </div>
      </section>
      <section className={styles.footnote}>
        <h1>
          What people are
          <br /> saying about us
        </h1>
        <p>
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </section>
      <section className={styles.commentsbox}>
        {CommentsData.map((item) => (
          <div key={item.id} className={styles.comment}>
            <img className={styles.quotes} src={quotes} alt="" />
            <p className={styles.commentbody}>{item.commentbody}</p>
            <span className={styles.commentprofile}>
              <img src={item.pfp} alt="" />
              <span>
                <h4>{item.pname}</h4>
                <p>{item.position}</p>
              </span>
            </span>
          </div>
        ))}
      </section>
      <section className={styles.sponsors}>
        <img src={sponsors} alt="" />
      </section>
      <section className={styles.service}>
        <div className={styles.servicecontainer}>
          <div className={styles.servicetext}>
            <h1>Let's try our service now!</h1>
            <p>
              Everything you need to accept card payments
              <br /> and grow your business anywhere on the planet.
            </p>
          </div>
          <div className={styles.servicebtn}>
            <Button
              fs="18px"
              fw="500"
              rounded="8px"
              w="170px"
              title="Get Started"
              p="15px 0px"
              bg="#4BD2DC"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Landingpage;
