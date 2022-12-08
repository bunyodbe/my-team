import styles from "../styles";
import { features } from "../constants";
import { FeatureCard } from "./";
const Features = () => (
  <section
    className={`flex sm:flex-row flex-col gap-[20px] justify-between ${styles.featurePadding} relative z-[5]`}
  >
    <h2
      className={`${styles.heading2} text-white flex-1 sm:mb-0 mb-[56px] sm:max-w-auto max-w-[60%]`}
    >
      Build & manage <br className="sm:block hidden" /> distributed teams{" "}
      <br className="sm:block hidden" /> like no one else.
    </h2>
    <div className="flex flex-col sm:max-w-[50%] max-w-[100%] ss:gap-[32px] gap-[48px]">
      {features.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);
export default Features;
