import styles from "./styles";
import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
} from "./components";

import { homeShape_3 } from "./assets";

const App = () => (
  <div className="bg-midnightGreen w-full overflow-x-hidden relative">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-midnightGreen`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
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
        className="absolute right-0 sm:bottom-0  z-[0]"
      />
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-deepGreen`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightCoral`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkGreen`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
