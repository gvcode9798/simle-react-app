import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProduct } from "../redux/product/productAction";
import { pagination } from "../utils/pagination";
import Product from "./Product";
function ProductList({ currentPage, itemsCount, pageSize }) {
  const productArray = useSelector((state) => state.productArray);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  let paginatedArray = [];
  if (productArray.length > pageSize) {
    paginatedArray = [
      ...paginatedArray,
      ...pagination(productArray, pageSize, currentPage),
    ];
  } else {
    console.log("productArray ", productArray);
    console.log("productArray length", productArray.length);
    paginatedArray = [...paginatedArray, ...productArray];
  }

  return (
    <div
      className="row db.flex justify-content-start text-center p-2 mt-2 "
      style={{}}
    >
      {paginatedArray.map((item) => (
        <div key={item} className="col-sm-3">
          <Product />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
