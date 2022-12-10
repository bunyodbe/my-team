import styles from "../styles";
import { directors } from "../constants";
import { DirectorCard } from "./";

const Directors = () => {
  return (
    <section
      className={`flex flex-col items-center ${styles.directorsPadding}`}
    >
      <h2 className={`${styles.heading2} text-white text-center`}>
        Meet the directors
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 sm:gap-x-[30px] gap-x-[12px] ss:gap-y-[76px] gap-y-[50px] w-full sm:mt-[64px] mt-[48px]">
        {directors.map((item) => (
          <DirectorCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Directors;
