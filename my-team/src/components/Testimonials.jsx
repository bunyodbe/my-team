import styles from "../styles";
import { feedback } from "../constants";
import { FeedbackCard } from "./";
const Testimonials = () => (
  <section
    className={`${styles.testimonialsPadding} ${styles.flexCenter} flex-col `}
  >
    <h2
      className={`${styles.heading2} text-center text-white sm:pb-[92px] pb-[84px]`}
    >
      Delivering real results for top <br className="ss:block hidden" />{" "}
      companies. Some of our{" "}
      <span className="text-raptureBlue">success stories.</span>
    </h2>
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-[30px] gap-[80px]">
      {feedback.map((item) => (
        <FeedbackCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default Testimonials;
