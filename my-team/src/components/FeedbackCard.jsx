import { quotes } from "../assets";
import styles from "../styles";
const FeedbackCard = ({ content, name, title, img }) => (
  <div className={`${styles.flexCenter} flex-col  relative z-[10]`}>
    <img
      src={quotes}
      alt="quotes"
      className="absolute -top-[36px] left-[50%] -translate-x-[50%] z-[1] w-[67px] h-[56px]"
    />
    <p
      className={`${styles.paragraph} text-center sm:mb-[24px] mb-[16px] relative z-[10]`}
    >
      {content}
    </p>
    <h3 className="font-livvic font-bold text-[18px] leading-[18px] text-raptureBlue mb-[2px] ">
      {name}
    </h3>
    <h4 className="font-livvic font-semobold text-[13px] leading-[18px] text-white sm:mb-[32px] mb-[16px]">
      {title}
    </h4>
    <img src={img} alt="name" className="w-[62px] h-[62px] rounded-full" />
  </div>
);

export default FeedbackCard;
