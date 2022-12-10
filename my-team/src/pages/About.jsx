import styles from "../styles";
import { AboutHero, Directors, Clients, CTA } from "../components";
import {
  aboutShape_1,
  aboutShape_2,
  aboutShape_3,
  aboutShape_4,
  homeShape_6,
} from "../assets";

const About = () => (
  <>
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-midnightGreen relative z-[10]`}
    >
      <div className={`${styles.boxWidth} `}>
        <AboutHero />
      </div>
      <img
        src={aboutShape_1}
        alt="shape"
        className="absolute right-0 bottom-0 z-[0] sm:h-[200px] h-[100px]"
      />
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-deepGreen relative z-[10]`}
    >
      <div className={`${styles.boxWidth} `}>
        <Directors />
      </div>
      <img
        src={aboutShape_2}
        alt="shape"
        className="absolute top-0 left-0 z-[0] ss:h-[200px] h-[100px]"
      />
      <img
        src={aboutShape_3}
        alt="shape"
        className="absolute bottom-0 right-0 z-[0] "
      />
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-stateGreen relative z-[10] overflow-hidden`}
    >
      <div className={`${styles.boxWidth} `}>
        <Clients />
      </div>
      <img
        src={aboutShape_4}
        alt="shape"
        className="absolute w-[200px] h-[200px] sm:-top-[100px] sm:left-0  md:top-0 md:left-0 -top-[100px] -left-[120px] z-[0]"
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

export default About;
