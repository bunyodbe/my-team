import styles from "../styles";
import { homeShape_1, homeShape_2 } from "../assets";
const Hero = () => (
  <section
    className={`flex sm:flex-row flex-col sm:justify-between gap-5 sm:items-end items-center  relative z-[10] ${styles.heroPadding}`}
  >
    <h1 className="font-livvic font-bold sm:text-start text-center  sm:text-[64px] ss:text-[50px] ss:leading-[50px] md:text-[100px] text-[40px] leading-[40px] sm:leading-[64px] md:leading-[100px] text-white">
      Find the <br /> best <span className="text-lightCoral">talent</span>
    </h1>
    <div className="flex flex-col self-stretch sm:justify-between sm:items-start items-center">
      <div className="w-[50px] h-[4px] bg-raptureBlue sm:block hidden" />
      <p
        className={`${styles.paragraph} sm:max-w-[460px] max-w-[445px] sm:text-start text-center `}
      >
        Finding the right people and building high{" "}
        <br className="sm:block hidden" /> performing teams can be hard. Most
        companies <br className="sm:block hidden" /> aren’t tapping into the
        abundance of global talent. <br className="sm:block hidden" /> We’re
        about to change that.
      </p>
    </div>
    <img
      src={homeShape_1}
      alt="shape"
      className="sm:block hidden absolute -left-[170px]  z-0 w-[100px] h-[200px]"
    />
    <img
      src={homeShape_2}
      alt="shape"
      className="absolute   z-0 w-[358px] h-[100px] bottom-0 sm:right-0  "
    />
  </section>
);

export default Hero;
