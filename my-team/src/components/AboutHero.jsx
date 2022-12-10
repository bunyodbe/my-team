import styles from "../styles";

const AboutHero = () => (
  <section
    className={`flex sm:flex-row flex-col sm:justify-between gap-[40px] sm:items-start items-center  relative z-[10] ${styles.aboutHeroPadding}`}
  >
    <h1 className="font-livvic font-bold sm:text-start text-center  sm:text-[64px] text-[40px] sm:leading-[64px] md:leading-[100px] leading-[40px] text-white">
      About
    </h1>
    <div className="flex flex-col  sm:justify-between sm:items-start items-center">
      <div className="w-[50px] h-[4px] bg-lightCoral sm:block hidden mb-[40px]" />
      <p
        className={`${styles.paragraph} sm:max-w-[700px] max-w-[460px] sm:text-start text-center `}
      >
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>
    </div>
  </section>
);

export default AboutHero;
