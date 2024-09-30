import Container from "./components/Container.tsx";
import Filter from "./components/filter.tsx";
import Header from "./components/Header.tsx";
import ProductsList from "./components/ProductsList.tsx";
import Product from "./components/Product.tsx";
function App() {
  return (
    <Container>
      <Header text="Products" />
      <Filter />
      <ProductsList>
        <Product />
      </ProductsList>
    </Container>
  );
}

export default App;
