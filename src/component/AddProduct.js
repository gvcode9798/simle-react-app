import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Form from "./reusable/Form";
import InputButton from "./reusable/InputButton";
import TextInput from "./reusable/TextInput";
const AddProduct = ({ cancelAddBook }) => {
  const formRef = useRef();
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [bookPages, setBookPages] = useState("");
  const [bookIsbn, setBookIsbn] = useState("");
  useEffect(() => {
    console.log("Add product is called");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      bookName,
      author,
      bookPages,
      bookIsbn,
    };
    console.log("Data of form ", data);
  };
  return (
    <div className="row">
      <Form name="studName" rollno="rollno" studClass="studClass" />
      {/* <div className="col-sm-3"></div>
      <div className="col-sm-6 text-warning pt-2 db.flex justify-content-center text-center">
        <h2>Add Book</h2>
        <form ref={formRef}>
          <TextInput
            type="text"
            name="book name"
            label="Book Name"
            required={true}
            value={bookName}
            placeholder="Enter name of the Book"
            onChange={(e) => setBookName(e.target.value)}
          />
          <TextInput
            type="text"
            name="author"
            label="Author"
            required={true}
            placeholder="Enter name of the author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextInput
            type="text"
            name="pages"
            label="Pages"
            required={true}
            placeholder="Enter no. of pages"
            onChange={(e) => setBookPages(e.target.value)}
          />
          <TextInput
            type="text"
            name="isbn"
            label="ISBN"
            required={true}
            placeholder="Enter isbn"
            onChange={(e) => setBookIsbn(e.target.value)}
          />
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "5px" }}>
            <InputButton
              title="Submit"
              color="btn btn-info"
              onClick={handleSubmit}
            />
          </div>
          <div style={{ padding: "5px" }}>
            <InputButton
              title="Cancel"
              color="btn btn-warning"
              onClick={cancelAddBook}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-3"></div> */}
    </div>
  );
};

export default AddProduct;
