import axios from "axios";
import { useTypeSelector } from "../../store/hooks/useTypeSelector";
import Product from "../Product/Product";
import { useEffect } from "react";
import { useAction } from "../../store/hooks/useAction";

const ProductList = () => {
   const products = useTypeSelector((state) => state.allProducts);
   const {setProducts} = useAction();

   const fetchProducts = async () => {
      const response = await axios
         .get('https://fakestoreapi.com/products')
         .catch((error) => console.log('Error', error));

      if (response) {
         setProducts(response.data);
      }
   };

   useEffect(() => {
      fetchProducts();
   }, []);


   return (
      <div>
         <Product/>
      </div>
   )
};

export default ProductList;
