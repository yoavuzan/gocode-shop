import "./style.css";
const Product = ({ image, title, price,description,category }) => {
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt="new colection" />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
          <h3>{description}</h3>
          <h5>{category}</h5>
        </div>
      </div>
    );
  };

  export default Product;