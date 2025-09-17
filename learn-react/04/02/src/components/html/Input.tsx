import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function Input(props: InputProps) {
  const { className = "", placeholder = "", ...rest } = props;
  return (
    <>
      <label className="mb-1 text-gray-700">
        <input
          type="text"
          placeholder={placeholder}
          className={twMerge(
            "w-[240px] h-[44px] border-2 border-gray-600 rounded-[8px] px-3",
            className
          )}
          {...rest}
        />
      </label>
    </>
  );
}
