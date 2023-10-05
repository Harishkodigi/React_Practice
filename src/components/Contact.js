const Contact = () => {
  return (
    <div className="m-6 p-6  text-center">
      <h1 className="font-bold text-2xl ">Contact Us</h1>
      <form>
        <div>
          <input
            type="text"
            className="border border-black p-2 m-2 text-center rounded-sm"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="border border-black p-2 m-2 text-center rounded-sm"
            placeholder="Message"
          />
        </div>
        <div>
          <button className="border border-black rounded-lg bg-gray-400 p-2 m-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
