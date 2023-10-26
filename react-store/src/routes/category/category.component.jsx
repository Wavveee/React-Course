import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.cotext";

import ProductCard from "../../components/proudct-card/product-card.component";

import { CategotyTitle, CatrgoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategotyTitle>{category.toLocaleUpperCase()}</CategotyTitle>
      <CatrgoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CatrgoryContainer>
    </Fragment>
  );
};

export default Category;
