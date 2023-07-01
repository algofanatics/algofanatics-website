import Button from "../Micro/Button/Button";

const FormComponent = () => {
  return (
    <form className="flex flex-col py-10">
      <div className=" flex flex-col">
        <label className="py-2">Full Name</label>
        <input className="w-[280px] h-10 md:h-12 md:w-[400px] rounded-md border placeholder:px-3" placeholder="e.g  John Doe" />
      </div>
      <div className="flex flex-col py-6">
        <label className="py-2">Email</label>
        <input className="w-[280px] h-10 md:h-12 md:w-[400px] rounded-md border placeholder:px-3" placeholder="e.g  Johndoe@gmail.com"/>
      </div>
      <div className="flex flex-col">
        <label className="py-2">Phone no.</label>
        <input className="w-[280px] h-10 md:w-[400px] md:h-12 rounded-md border placeholder:px-3" placeholder="e.g  080611****4" />
      </div>

      <div className="flex flex-col py-6">
        <label className="py-2">Additional message (Optional)</label>
        <input className="w-[280px] h-20 md:w-[400px] md:h-20  rounded-md border placeholder:px-3" placeholder="e.g  John Doe"/>
      </div>
      <div className="flex items-center justify-center ">
        <Button className="w-[280px] h-10 md:w-[400px] bg-grey text-lg md:h-14 rounded-full">Send a Message</Button>
      </div>
    </form>
  );
};

export default FormComponent;
