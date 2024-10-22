import { HTMLProps } from "react";

export const Link = ({ children, ...props }: HTMLProps<HTMLAnchorElement>) => {
  return (
    <a {...props}>
      <span
        className="hover:underline
        hover:decoration-[0.25rem]
        decoration-yellow-100
        motion-safe:transition-all motion-safe:duration-200
        hover:decoration-yellow-500/50 focus:decoration-yellow-500/50"
      >
        {children}
      </span>
    </a>
  );
};
