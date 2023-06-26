import React from "react";

export type TextFieldProps = {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  containerClass?: string;
  error?: boolean;
  disabled?: boolean;
  length?: number;
};

const PinInput = ({
  className,
  onChange,
  value,
  length = 4,
}: TextFieldProps) => {
  const [each, setEach] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (value) {
      setEach(value.split(""));
    } else {
      setEach([]);
    }
  }, [value]);

  const inputs = Array.from({ length }).map((_, index: number) => (
    <div
      key={index}
      className={`border bg-gray-100 border-primary rounded-md h-10 w-10 md:w-16 md:h-16 flex items-center justify-center ${
        each.length === index && "!border-primary-dark border-3"
      }`}
    >
      <span className="text-sm md:text-xl text-black">
        {each[index] || ""}
      </span>
    </div>
  ));

  const handleChange = (e: any) => {
    if (onChange && e.target.value.length <= length) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <div className="relative flex items-center space-x-4 select-none w-fit">
        {inputs}
        <input
          autoFocus
          type="number"
          value={value}
          onChange={handleChange}
          className={`select-none  !ml-0 absolute h-full !text-transparent  caret-transparent top-0 left-0 input input-lg w-full bg-transparent focus:outline-none ${className}`}
        />
      </div>
      <style>
        {`
           input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
  }
        `}
      </style>
    </>
  );
};

export default PinInput;
