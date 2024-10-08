import { ReactNode } from "react";
import "../index.css";

interface Props {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};
export default Container;
