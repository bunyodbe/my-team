import { useState } from "react";
import styles from "../styles";
import Button from "./Button";
const ContactForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [company, setCompany] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [message, setMessage] = useState("");

  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const { name, email, company, title, message } = state;

  const changeInputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setState({ name: "", email: "", company: "", title: "", message: "" });
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col md:w-[45%] ss:w-[540px] w-full gap-[24px] "
    >
      <input
        type="text"
        placeholder="Name"
        className="form-input"
        name="name"
        value={name}
        onChange={(e) => changeInputHandler(e)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="form-input"
        value={email}
        onChange={(e) => changeInputHandler(e)}
      />
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        className="form-input"
        value={company}
        onChange={(e) => changeInputHandler(e)}
      />
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="form-input"
        value={title}
        onChange={(e) => changeInputHandler(e)}
      />
      <textarea
        name="message"
        placeholder="Message"
        className="form-input resize-x-none min-h-[75px] max-h-[150px]"
        value={message}
        onChange={(e) => changeInputHandler(e)}
      ></textarea>
      <button
        type="submit"
        className=" py-[8px] px-[32px] font-livvic text-[18px] font-semibold text-deepGreen bg-white rounded-[24px] w-fit"
      >
        submit
      </button>
    </form>
  );
};

export default ContactForm;
