import { ContactContent, ContactForm } from "../components";
import styles from "../styles";
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
    {/* <img
      src={homeShape_1}
      alt="shape"
      className="sm:block hidden absolute left-0 bottom-[45%]  z-0 w-[100px] h-[200px]"
    /> */}
  </div>
);

export default Contact;
