import { ContactContent, ContactForm } from "../components";
import styles from "../styles";
import { contactShape_1, aboutShape_2 } from "../assets";
const Contact = () => (
  <div
    className={`${styles.paddingX} ${styles.flexCenter} bg-midnightGreen relative z-[10]`}
  >
    <div className={`${styles.boxWidth} `}>
      <div
        className={`${styles.contactPadding} flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center md:gap-[30px] gap-[60px]`}
      >
        <ContactContent />
        <ContactForm />
      </div>
    </div>
    <img
      src={aboutShape_2}
      alt="shape"
      className="absolute left-0 sm:top-[100px] top-[50px] z-0 w-[100px] sm:h-[200px] h-[100px]"
    />
    <img
      src={contactShape_1}
      alt="shape"
      className=" absolute right-0 bottom-0  z-0 w-[100px] sm:h-[180px] h-[100px]"
    />
  </div>
);

export default Contact;
