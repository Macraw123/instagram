import React, { ReactElement } from "react";
import "./Card.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: any;
}

export default function Card({
  className,
  children,
  ...props
}: Props): ReactElement {
  return (
    <div className={`card ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
