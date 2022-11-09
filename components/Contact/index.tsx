import { useContext } from "react";
import { InfoContext } from "../../pages/_app";
interface Props {}

const Contact = (props: Props) => {
  const info = useContext(InfoContext);
  return (
    <div className="bg-base-200 mt-12">
      <h2 className="flex justify-center text-4xl pt-12 font-bold mb-6 ">
        Contact Me
      </h2>
      <p className="flex justify-center mb-6">
        Feel free to contact me using this form! You can also message me
        on&nbsp;
        <a rel="noreferrer" target="_blank" href={info.linkedIn}>
          LinkedIn.
        </a>
      </p>
      <form
        className="flex flex-col gap-4 items-center justify-center"
        action=""
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-primary w-full max-w-xs mb-12 h-40"
          placeholder="Message"
        ></textarea>
      </form>
    </div>
  );
};

export default Contact;
