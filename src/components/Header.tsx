

interface Props {
  text: string;
}

const Header = ({text} : Props) => {
  return (
    <div className="products__header">
      <div className="products__title">
        <span>SHOP</span> {">"} <span>{text}</span>
      </div>
    </div>
  );
};

export default Header;
