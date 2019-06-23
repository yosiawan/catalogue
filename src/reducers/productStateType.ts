
export type singleProductDataType = {
  name: string;
  sizes: string[];
  price: number;
  image: string;
  description: string;
}

export type productsDataType = {
  [id: string]: singleProductDataType
}
