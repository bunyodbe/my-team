import styles from "../styles";
import Button from "./Button";

const CTA = () => (
  <section className="sm:py-[76px] py-[84px] flex  items-center  sm:flex-row flex-col sm:justify-between justify-center">
    <h2
      className={`${styles.heading2} text-stateGreen relative z-[10] sm:pb-0 pb-[25px] sm:text-start text-center`}
    >
      Ready to get started?
    </h2>
    <Button content={"contact us"} color="stateGreen" />
  </section>
);

export default CTA;
