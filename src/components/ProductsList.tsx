import { ReactNode } from "react";


interface Props {
  children: ReactNode;
}
const ProductsList = ({ children }: Props) => {
  return <div className="products__list">{children}</div>;
};
export default ProductsList;
