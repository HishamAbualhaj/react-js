// App.tsx
import { useState, useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";

interface ProductType {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

const App = () => {
  const [productsArr, setProductsArr] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const initialProducts: ProductType[] = [
      {
        name: "MSI GF77",
        category: "COMPUTERS AND LAPTOPS",
        price: "1500 $",
        image: "laptop.jpg",
        description:
          "Experience elite performance with the MSI GF77, a powerhouse laptop.",
      },
      {
        name: "RAZER HONG KONG",
        category: "ACCESSORIES",
        price: "200 $",
        image: "headphone.jpg",
        description:
          "Immerse yourself in the ultimate audio experience with RAZER HONG KONG headphones.",
      },
      {
        name: "Galaxy M32",
        category: "CELLPHONES",
        price: "800 $",
        image: "cellphone.jpg",
        description: "Stay connected with the Galaxy M32 smartphone.",
      },
      {
        name: "Apple Watch SE 2",
        category: "SMARTWATCHES",
        price: "220 $",
        image: "smartwatch.jpg",
        description: "Keep track of your health with the Apple Watch SE 2.",
      },
      {
        name: "HP VICTUS",
        category: "COMPUTERS AND LAPTOPS",
        price: "1300 $",
        image: "laptop2.jpg",
        description:
          "Discover the HP VICTUS laptop, designed for gaming and multitasking.",
      },
      {
        name: "KEYBOARD Meetion MK01",
        category: "ACCESSORIES",
        price: "150 $",
        image: "keyborad.jpeg",
        description:
          "Elevate your typing experience with the Meetion MK01 Keyboard.",
      },
    ];

    setProductsArr(initialProducts);
    setFilteredProducts(initialProducts); // Initially show all products
  }, []);

  // Filter products by category
  const filterProducts = (category: string) => {
    if (category) {
      const filtered = productsArr.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Show all products
  const showAllProducts = () => {
    setFilteredProducts(productsArr);
  };

  return (
    <Container>
      <Header text="Products" />
      <Filter onFilter={filterProducts} onShowAll={showAllProducts} />
      <ProductsList productsArr={filteredProducts} />
    </Container>
  );
};

export default App;
