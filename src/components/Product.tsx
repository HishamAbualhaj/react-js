interface ProductType {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="products__item">
      <div className="products__item-img">
        <img src={`src/assets/${product.image}`} alt={product.name} />
      </div>
      <div className="products__item-container">
        <div className="products__item-info">
          <span className="type">Name:</span>
          <span className="red value">{product.name}</span>
        </div>
        <div className="products__item-info">
          <span className="type">Price:</span>
          <span className="green value">{product.price}</span>
        </div>
        <div className="products__item-info">
          <span className="type">Category:</span>
          <span className="yellow value">{product.category}</span>
        </div>
        <div className="products__item-info">
          <span className="type">Description:</span>
          <span className="value desc">{product.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
