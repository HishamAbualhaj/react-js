import Product from "./Product";

interface ProductType {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface ProductsListProps {
  productsArr: ProductType[];
}

const ProductsList = ({ productsArr }: ProductsListProps) => {
  return (
    <div className="products__list">
      {productsArr.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
