interface CustomInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  maxLength,
  minLength,
}) => {
  return (
    <input
      className="w-1/2 font-thin bg-transparent border-b border-black focus:outline-none"
      maxLength={maxLength}
      minLength={minLength}
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
