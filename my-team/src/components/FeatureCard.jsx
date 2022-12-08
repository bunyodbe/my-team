import styles from "../styles";
const FeatureCard = ({ icon, title, content }) => (
  <div className="flex items-center ss:flex-row flex-col">
    <div className="w-[56px] h-[56px] rounded-full bg-policeBlue ss:mr-[23px] mr-0 mb-[16px]">
      <img
        src={icon}
        alt="icon"
        className="w-[100%] h-[100%] relative top-[-16px] left-[-16px]"
      />
    </div>
    <div className="flex flex-col flex-1 ss:items-start items-center">
      <h4 className="font-livvic text-[18px] font-bold text-lightCoral mb-[16px]">
        {title}
      </h4>
      <p className={`${styles.paragraph} ss:text-start text-center`}>
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;
