import { twMerge } from "tailwind-merge";

type CheckBoxProps = React.ComponentPropsWithoutRef<"input">;

export default function CheckBox(props: CheckBoxProps) {
  const { className = "", children = "", ...rest } = props;
  return (
    <>
      <label>
        <input
          type="checkbox"
          className={twMerge(
            "w-[20px] h-[20px] border-[2px] border-[#4F4F4F] rounded-[5px] bg-white checked:bg-[#4F4F4F] checked:border-[#4F4F4F] ",
            className
          )}
          {...rest}
        />
        <span className="select-none">{children}</span>
      </label>
    </>
  );
}
