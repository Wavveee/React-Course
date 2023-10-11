import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.cotext";
import ProductCard from "../../components/proudct-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => <ProductCard product={product}  key={product.id}/>)}
    </div>
  );
};

export default Shop;
