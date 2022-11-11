import React, { useContext, useState } from "react";
import { InfoContext } from "../../pages/_app";
interface Props {}
import axios from "axios";

const Contact = (props: Props) => {
  const info = useContext(InfoContext);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertState, setAlertState] = useState(false);
  const [loadState, setLoadState] = useState(false);

  const handleInputChange = ({
    target: { name, value },
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoadState(true);
    const body = {
      senderName: formState.name,
      senderEmail: formState.email,
      receiverEmail: info.email,
      message: formState.message,
    };

    axios.post("https://www.michaelscharf.dev/email", body).then((res) => {
      console.log(res);
      setLoadState(false);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      setAlertState(true);
      setTimeout(() => {
        setAlertState(false);
      }, 4000);
    });
  };
  return (
    <div className="bg-base-200 mt-12">
      <h2
        id="Contact"
        className="flex justify-center text-4xl pt-12 font-bold mb-6 "
      >
        Contact Me
      </h2>
      <p className="text-center mb-6 p-6">
        Feel free to contact me using this form! You can also message me
        on&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href={info.linkedIn}
          className="text-cyan-400"
        >
          LinkedIn.
        </a>
      </p>
      <form
        className="flex flex-col gap-4 items-center justify-center px-6"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={formState.name}
          name="name"
          placeholder="Name"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={formState.email}
          name="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={handleInputChange}
        />
        <textarea
          value={formState.message}
          name="message"
          className="textarea textarea-primary w-full max-w-xs  h-40"
          placeholder="Message"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary mt-2 mb-12">Submit</button>
        {loadState ? <progress className="progress w-56"></progress> : null}
      </form>

      {alertState ? (
        <div className="toast toast-center w-4/5 md:w-2/5">
          <div className="alert alert-success">
            <div>
              <span>
                Message sent successfully 😁 I will get back to you as soon as
                possible!
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
