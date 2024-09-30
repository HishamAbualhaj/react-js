import { ReactNode } from "react";

let types = [
  "COMPUTERS AND LAPTOPS",
  "ACCESSORIES",
  "CELLPHONES",
  "SMARTWATCHES",
];
let productsArr = [
  {
    name: "MSI GF77",
    category: types[0],
    price: "1500 $",
    image: "laptop.jpg",
    description:
      "Experience elite performance with the MSI GF77, a powerhouse laptop designed for gaming and high-end software applications. It features a robust processor and advanced graphics card to handle the most demanding tasks with ease.",
  },

  {
    name: "RAZER HONG KONG",
    category: types[1],
    price: "200 $",
    image: "headphone.jpg",
    description:
      "Immerse yourself in the ultimate audio experience with RAZER HONG KONG headphones. Designed for crystal clear sound, these headphones offer an ergonomic fit and noise-cancellation technology, perfect for both gaming and listening to music.",
  },

  {
    name: "Galaxy M32",
    category: types[2],
    price: "800 $",
    image: "cellphone.jpg",
    description:
      "Stay connected with the Galaxy M32, a smartphone equipped with a vibrant display and a long-lasting battery. Capture stunning photos with its high-resolution camera and enjoy seamless performance with its optimized operating system.",
  },

  {
    name: "Apple Watch SE 2",
    category: types[3],
    price: "220 $",
    image: "smartwatch.jpg",
    description:
      "Keep track of your health and stay on top of your fitness goals with the Apple Watch SE 2. This smartwatch includes features like heart rate monitoring, GPS, and a sleek interface that syncs perfectly with your iPhone.",
  },

  {
    name: "HP VICTUS",
    category: types[0],
    price: "1300 $",
    image: "laptop2.jpg",
    description:
      "Discover the HP VICTUS laptop, designed for both gaming enthusiasts and professional creators. It boasts a high-performance CPU and GPU, ensuring top-notch visual experiences and multitasking capabilities.",
  },

  {
    name: "KEYBOARD Meetion MK01",
    category: types[1],
    price: "150 $",
    image: "keyborad.jpeg",
    description:
      "Elevate your typing experience with the Meetion MK01 Keyboard, featuring tactile keys for precise control and RGB lighting to customize your setup. Ideal for gamers and typists looking for both style and substance.",
  },
];

interface Props {
  children: ReactNode;
}
const ProductsList = ({ children }: Props) => {
  return <div className="products__list">{children}</div>;
};
export default ProductsList;
