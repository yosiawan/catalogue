import { productsDataType } from "../reducers/productStateType";

const randomNames = [
  "Website Floppy Disk",
  "Toolbox YouTube",
  "Clock Dog",
  "Allergies Flowers",
  "Settings Android",
  "Towel Towel",
  "Floppy Disk Boat",
  "Robot YouTube",
  "Solar Kitty"
]

const unsplashCategory = [
  "nature",
  "architecture",
  "travel",
  "fashion",
  "spirituality"
]

export function fakeProductsFactory() {
  let fakeProductsShipment: productsDataType = {};
  for(let i = 0; i < 5; i++) {
    fakeProductsShipment = {
      ...fakeProductsShipment,
      [Math.round(Math.random() * 1000)]: {
        image: `https://source.unsplash.com/400x400/?${unsplashCategory[i]}`,
        name: randomNames[i],
        price: Math.round(Math.random() * 10000),
        description: "Lorem Ipsum dolor sit amet consectetur adipiscing elit",
        sizes: ["S", "M", "L"]
      }
    }
  }
  return fakeProductsShipment;
}
