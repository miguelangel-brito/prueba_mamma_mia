import { usePizzaContext } from "../context/PizzaContext";
import Card from "../components/Card/Card";
import { useEffect } from "react";

const Home = () => {
  const { pizzas } = usePizzaContext();

  useEffect(() => {
    document.title =
      "Pizzería Mamma Mía! - Las mejores pizzas, desde Italia a tu mesa";
  });

  return (
    <>
      <header>
        <h1>
          Bienvenido a{" "}
        </h1>
        <p>
          "Las mejores pizzas, desde Italia a tu mesa"
        </p>
      </header>
      <main>
        <h2>Nuestro menú</h2>
        <div className="menu-grid">
          {pizzas.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;