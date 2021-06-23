import { useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import AddProduct from "../AddProduct";
import Header from "../Header";
import ProductList from "../ProductList";
import SideBar from "../SideBar";
import Filter from "./Filter";
import InputButton from "./InputButton";
import Pagination from "./pagination";
const Home = () => {
  let { path, url } = useRouteMatch();
  console.log("path is ", path);
  console.log("url is ", url);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedItem, setSelectedItem] = useState("");
  const [showAddBook, setShowAddBook] = useState(false);
  // const history = useHistory();
  const productArray = useSelector((state) => state.productArray);
  let itemsCount = productArray.length;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSelectedItem = (item) => {
    console.log("item selected ", item);
    console.log("selected item", selectedItem);
    setSelectedItem(item.type);
  };
  const handleClick = () => {
    console.log("i am in handleClick");
    setShowAddBook(!showAddBook);
  };
  const handleCancelAddBook = () => {
    setShowAddBook(!showAddBook);
  };
  return (
    <div
      className="p-0 m-0 row bg-dark "
      style={{
        position: "fixed",
        minHeight: "100%",
        minWidth: "100%",
        scrollMargin: "0px",
      }}
    >
      <div
        className="col-sm-2 p-2 rounded-3 bg-info mt-3 mb-3"
        style={{ minHeight: "70%" }}
      >
        <SideBar></SideBar>
      </div>
      <div className="col-sm-10 ">
        <div className="row " style={{}}>
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <div className="row  mt-2">
          <div className="col-sm-12 ">
            <div className="row  mt-2">
              <div className="col-sm-6 text-center">
                <Filter
                  onItemSelect={handleSelectedItem}
                  selectedItem={selectedItem}
                />
              </div>
              <div className="col-sm-6 text-center">
                {!showAddBook && (
                  <InputButton
                    title="Add a book"
                    color="btn btn-info"
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>
          </div>

          {!showAddBook && (
            <ProductList
              currentPage={currentPage}
              itemsCount={itemsCount}
              pageSize={pageSize}
            />
          )}
          {showAddBook && <AddProduct cancelAddBook={handleCancelAddBook} />}
          <div className="col-sm-12 mb-3">
            {!showAddBook && (
              <Pagination
                itemsCount={itemsCount}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
