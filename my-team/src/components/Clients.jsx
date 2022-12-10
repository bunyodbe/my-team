import { clients } from "../constants";
import styles from "../styles";
const Clients = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.clientsPadding}`}>
    <h2
      className={`${styles.heading2} text-center text-white sm:mb-[70px] mb-[50px]`}
    >
      Some of our clients
    </h2>
    <div className="flex ss:gap-[30px] gap-[50px] flex-wrap md:justify-between justify-center items-center w-full">
      {clients.map((item) => (
        <img
          key={item.id}
          src={item.logo}
          alt="c-logo"
          className="max-w-[100%]"
        />
      ))}
    </div>
  </section>
);

export default Clients;
