// import   "./array";
import Product from "./Product";
import "./style.css";

const Products = ({Store}) => {
    return (
      <section className="products">
       {
       Store.map((showP)=>(<Product
       key={showP.id}
       image={showP.image} 
       title={showP.title}
       price={showP.price}
       description={showP.description}
       category={showP.category}/>
       
       ))}
      </section>
    );
  };

  export default Products;