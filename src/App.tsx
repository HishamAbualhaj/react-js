import Container from "./components/Container.tsx";
import Filter from "./components/filter.tsx";
import Header from "./components/Header.tsx";
function App() {
  return (
    <Container>
      <Header text="Products" />
      <Filter />
    </Container>
  );
}

export default App;
