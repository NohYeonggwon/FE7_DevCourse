import { twMerge } from "tailwind-merge";

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input
        className={twMerge(
          "w-[240px] h-[44px] placeholder:text-[#acaccac] border-2 bg-white-500 border-gray-600 rounded-lg px-4"
        )}
        {...rest}
      />
    </>
  );
}
