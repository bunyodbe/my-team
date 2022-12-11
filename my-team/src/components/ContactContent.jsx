import { contactContent } from "../constants";
const ContactContent = () => (
  <div className="md:w-[45%] w-full flex flex-col md:items-start items-center">
    <h1 className="font-livvic font-bold md:text-start text-center  sm:text-[64px] text-[40px] sm:leading-[64px] md:leading-[100px] leading-[40px] text-white">
      Contact
    </h1>
    <h3 className="font-livvic font-bold text-lightCoral md:text-start text-center text-[32px] leading-[48px] mb-[48px] mt-[16px]">
      Ask us about
    </h3>
    <div>
      {contactContent.map((item, index) => (
        <div
          key={item.id}
          className={`flex items-center ${
            index !== contactContent.length - 1 ? "mb-[24px]" : "mb-0"
          }`}
        >
          <div className="w-[56px] h-[56px] basis-[56px] shrink-0 grow-0 rounded-full bg-policeBlue mr-[23px] ">
            <img
              src={item.icon}
              alt="icon"
              className="w-[100%] h-[100%] relative top-[-16px] left-[-16px]"
            />
          </div>
          <h4 className="font-livvic font-bold text-white text-[18px] leading-[28px]">
            {item.title}
          </h4>
        </div>
      ))}
    </div>
  </div>
);

export default ContactContent;
