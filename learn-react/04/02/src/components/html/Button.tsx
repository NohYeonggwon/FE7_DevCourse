import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, className = "", ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "cursor-pointer w-[77px] h-[44px] rounded-[10px] text-white bg-[#333] text-[16px] color-[#fff]",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
