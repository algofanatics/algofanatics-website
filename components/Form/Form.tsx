import FormComponent from "@/components/Form/FormComponent";

const Form = () => {
  return (
    <main className="pt-20 lg:pt-28">
      <div className="bg-black container mx-auto items-center lg:px-20 py-10 flex-col flex lg:flex-row justify-between">
        <h1 className="text-primary text-2xl pb-8 font-bold lg:text-4xl font-work">Request Our Services</h1>
        <div className="bg-white md:w-[380px] px-5 lg:-mt-16 rounded-sm">
          <FormComponent />
        </div>
      </div>
    </main>
  );
};

export default Form;
