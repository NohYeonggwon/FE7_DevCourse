import { useId } from "react";
import { twMerge } from "tailwind-merge";

type CheckBoxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;

export default function CheckBox(props: CheckBoxProps) {
  const { children = "I agree", ...rest } = props;
  const id = useId();
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="checkbox"
          className={twMerge(
            "appearance-none w-5 h-5 border-[2px] border-[#4F4F4F] rounded-[5px] bg-white checked:bg-[#4F4F4F] checked:bg-[url(/public/check.svg)] checked:bg-no-repeat checked:bg-center"
          )}
          {...rest}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    </>
  );
}
