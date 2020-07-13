import { Header } from "../components/Header";
import { IProduct } from "../components/Product";
import { ProductList } from "../components/ProductList";
import { Footer } from "../components/Footer";

type IndexProps = {
  products: IProduct[];
};

const Index = (props: IndexProps) => {
  return (
    <>
      <Header />
      <main className="main">
        <img
          src="/static/aquarium.svg"
          alt="aquarium"
          className="background-image"
        />
        <div className="promotional-message">
          <h3>REDISCOVER</h3>
          <h2>Fishkeeping</h2>
          <p>
            An <strong>exclusive collection of bettas</strong> available for
            everyone.
          </p>
        </div>
        <ProductList products={props.products} />
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const data = [
    {
      id: "nextjs_halfmoon",
      name: "Halfmoon Betta",
      price: 25.0,
      image: "../static/halfmoon.jpg",
      description:
        "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
    } as IProduct,
    {
      id: "nextjs_dragonscale",
      name: "Dragon Scale Betta",
      price: 35,
      image: "../static/dragonscale.jpg",
      description:
        "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
    } as IProduct,
    {
      id: "nextjs_crowntail",
      name: "Crowntail Betta",
      price: 7.5,
      image: "../static/crowntail.jpg",
      description:
        "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
    } as IProduct,
    {
      id: "nextjs_veiltail",
      name: "Veiltail Betta",
      price: 5.0,
      image: "../static/veiltail.jpg",
      description:
        "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
    } as IProduct,
  ];

  return { props: { products: data } };
}

export default Index;
