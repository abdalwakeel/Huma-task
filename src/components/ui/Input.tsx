interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;