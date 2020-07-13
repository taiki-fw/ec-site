import { Product, IProduct } from "./Product";

type IProductListProps = {
  products: IProduct[];
};

export const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};
