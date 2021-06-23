import { useState } from "react";
import productImage from "../assets/images/user.png";
const Product = () => {
  const [effect, setEffect] = useState("");
  return (
    <div
      className={`row ${effect}`}
      onMouseEnter={() => setEffect("bg-gradient")}
      onMouseLeave={() => setEffect("")}
      style={{ border: "2px solid grey", margin: "2px", borderRadius: "10px" }}
    >
      <div className="col-sm-7 " style={{}}>
        <img src={productImage} style={{ height: "120px" }} />
      </div>
      <div className="col-sm-5 pt-3">
        <h4 className="text-info">Book</h4>
        <h6 className="text-info">Author</h6>
        <p className="text-info">page no.</p>
      </div>
    </div>
  );
};

export default Product;
