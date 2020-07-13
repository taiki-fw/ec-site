// TODO:What can do , RouterProps
import { useRouter } from "next/router";

export type IProduct = {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: string;
};

export const Product = (props: IProduct) => {
  const router = useRouter();

  return (
    <div className="product">
      <h2 className="product__title">{props.name}</h2>
      <p className="product__description">{props.description}</p>
      <img src={props.image} alt="" className="product__image" />
      <div className="product__price-button-container">
        <div className="product__price">${props.price.toFixed(2)}</div>
        <button
          className="snipcart-add-item product__button"
          data-item-id={props.id}
          data-item-name={props.name}
          data-item-price={props.price}
          data-item-url={router.pathname}
          data-item-image={props.image}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
