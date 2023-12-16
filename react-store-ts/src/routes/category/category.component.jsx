import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/proudct-card/product-card.component";
import Spinner from "../../components/spinner/spinner.compoent";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";

import { CategotyTitle, CatrgoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log("rende/re-rendering category component");

  useEffect(() => {
    console.log("effrct fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategotyTitle>{category.toLocaleUpperCase()}</CategotyTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CatrgoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CatrgoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
