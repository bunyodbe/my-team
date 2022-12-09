import styles from "../styles";

import {
  homeShape_3,
  homeShape_1,
  homeShape_4,
  homeShape_5,
  homeShape_6,
} from "../assets";

import { Hero, Features, Testimonials, CTA } from "../components";

const Home = () => (
  <>
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-midnightGreen relative z-[10]`}
    >
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
      <img
        src={homeShape_1}
        alt="shape"
        className="sm:block hidden absolute left-0 bottom-[45%]  z-0 w-[100px] h-[200px]"
      />
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-stateGreen relative z-[10]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Features />
      </div>
      <img
        src={homeShape_3}
        alt="shape"
        className="absolute right-0 sm:bottom-0 bottom-[calc(100%-244px)]  z-[0]"
      />
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-deepGreen relative z-[10]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
      <img
        src={homeShape_4}
        alt="shape"
        className="absolute top-0 left-0 z-[0] "
      />
      <img
        src={homeShape_5}
        alt="shape"
        className="absolute bottom-0 right-0 z-[0] max-w-[200px] h-[100px]"
      />
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-lightCoral relative z-[10]`}
    >
      <div className={`${styles.boxWidth}`}>
        <CTA />
      </div>
      <img
        src={homeShape_6}
        alt="shape"
        className="absolute left-0 bottom-0 max-w-[200px] sm:h-[120px] h-[100px] z-[0]"
      />
    </div>
  </>
);

export default Home;
