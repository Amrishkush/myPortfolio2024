import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <div className="" id="contact">
      <h1 className="font-poppins font-extrabold text-5xl sm:text-6xl text-center mt-12 lg:mt-[2px] mb-3 m-auto">
        <span className="text-orange-400">MESSAGE</span> ME!
      </h1>
      <h2 className="font-poppins font-bold text-xl text-center">
        Open for Opportunities: Let’s Connect!
      </h2>
      <div className="lg:flex">
        <div className="sm:flex flex-wrap gap- justify-around">
          <div className="w-[90%] sm:w-[30%] lg:w-[70%] xl:w-[51%] bg-[#000010] rounded-3xl text-center mx-auto m-2 py-3">
            <IoLocation
              color=""
              size={40}
              className="m-auto my-2 text-orange-500"
            />
            <h3 className="text-white font-poppins text-2xl">Address</h3>
            <p className="font-poppins text-sm text-orange-500 py-2">
              Uttar Pradesh, India
            </p>
          </div>
          <div className=" w-[90%] sm:w-[30%] lg:w-[70%] xl:w-[51%] bg-[#000010] rounded-3xl text-center mx-auto m-2 py-3">
            <MdEmail
              color=""
              size={40}
              className="m-auto my-2 text-orange-500"
            />
            <h3 className="text-white font-poppins text-2xl">E-Mail</h3>
            <p className="font-poppins text-[12px] sm:text-sm text-orange-500 py-2">
              amrishkush@gmail.com
            </p>
          </div>
          <div className="w-[90%] sm:w-[30%] lg:w-[70%] xl:w-[51%] bg-[#000010] rounded-3xl text-center mx-auto m-2 py-3">
            <MdPhone
              color=""
              size={36}
              className="m-auto my-1 text-orange-500"
            />
            <h3 className="text-white font-poppins text-2xl">Phone</h3>
            <p className="font-poppins text-sm text-orange-500 pt-1 tracking-wide">
              + 91 8353942789
            </p>
            <p className="font-poppins text-sm text-orange-500 pl-1 tracking-widest">
              +91 7905319717
            </p>
          </div>
        </div>
        <div className="m-auto">
          <form
            action="mailto:amrishkush@gmail.com"
            encType="text/plain"
            method="post"
            className="m-10 text-center w-[90%] mx-auto"
            
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="👤 YOUR NAME"
              className="border-2 rounded-2xl border-gray-400 w-full sm:w-[48%] m-[1%] my-3 p-2 focus:outline-none focus:border-orange-600  active:border-orange-600"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="✉ YOUR EMAIL"
              className="border-2 rounded-2xl border-gray-400 w-full sm:w-[48%] m-[1%] mt-3 mb-6 p-2 focus:outline-none focus:border-orange-600  active:border-orange-600"
              required
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="🗪 YOUR MESSAGE"
              className="border-2 rounded-2xl border-gray-400  w-[98%] m-auto p-2 focus:outline-none focus:border-orange-600  active:border-orange-600"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 p-3 my-5 mb-16 px-20 m-auto rounded-md font-poppins text-gray-100 hover:bg-green-800"
            >
              <IoIosSend className="inline m-auto mr-3" size={20} /> Send
              Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
