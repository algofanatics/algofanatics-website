const FormComponent = () => {
  return (
    <form className="flex flex-col py-10">
      <div className=" flex flex-col">
        <label className="py-2">Full Name</label>
        <input className="w-[230px] h-10 lg:w-[342px] md:h-12 md:w-[342px] rounded-md border placeholder:px-3" placeholder="e.g  John Doe" />
      </div>
      <div className="flex flex-col py-6">
        <label className="py-2">Email</label>
        <input className="w-[230px] h-[40px] lg:w-[342px] md:h-12 md:w-[342px] rounded-md border placeholder:px-3" placeholder="e.g  Johndoe@gmail.com"/>
      </div>
      <div className="flex flex-col">
        <label className="py-2">Phone no.</label>
        <input className="w-[230px] h-[40px] lg:w-[342px] md:w-[342px] md:h-12 rounded-md border placeholder:px-3" placeholder="e.g  080611****4" />
      </div>

      <div className="flex flex-col py-6">
        <label className="py-2">Additional message (Optional)</label>
        <input className="w-[230px] h-20 lg:w-[342px] md:w-[342px] md:h-20  rounded-md border placeholder:px-3" placeholder="e.g  John Doe"/>
      </div>
      <div className="flex items-center justify-center ">
        <button className="shadow-black shadow-lg w-[230px] h-10 lg:w-[342px]  bg-grey  text-lg md:h-14 rounded-full">Send a Message</button>
      </div>
    </form>
  );
};

export default FormComponent;
