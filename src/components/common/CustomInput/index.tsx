import { Form, Input, Button, InputProps } from "antd";

interface CustomInputProps extends InputProps {
  className?: string;
}

export default function CustomInput(props: CustomInputProps) {
  const { className } = props;
  return (
    <Input
      {...props}
      className={` !w-[250px] !h-[50px] text-center !font-medium !text-sm border !border-[#1C1C27] !rounded-[10px] ${className}`}
    />
  );
}
