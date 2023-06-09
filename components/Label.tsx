import cx from "classnames";
import { ElementType, LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  as?: ElementType;
}

export const Label = ({
  children,
  htmlFor,
  className,
  as: Tag = "label",
}: LabelProps) => {
  return (
    <Tag
      className={cx(
        "mb-1 flex items-center gap-2 text-sm font-semibold",
        { "cursor-pointer": htmlFor },
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Tag>
  );
};
