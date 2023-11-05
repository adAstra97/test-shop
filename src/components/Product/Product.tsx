import { useTypeSelector } from "../../store/hooks/useTypeSelector";

const Product = () => {
   const products = useTypeSelector((state) => state.allProducts.products);

   const renderList = products.map((product) => {
      const {id, title, image, price, category} = product;
      return (
         <div key={id}>
            <div className="cards">
               <div className="card">
                  <div className="image">
                     <img src={image} alt={title} />
                  </div>
                  <div className="content">
                     <div className="header">{title}</div>
                     <div className="price">$ {price}</div>
                     <div className="category">$ {category}</div>
                  </div>
               </div>
            </div>
         </div>
      )
   });

   return (
      <>
         {renderList}
      </>
   );
};

export default Product;