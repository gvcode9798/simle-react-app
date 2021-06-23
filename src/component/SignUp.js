import TextInput from "./reusable/TextInput";
import LoginImage from "../assets/images/LoginImage.jpg";
import InputButton from "./reusable/InputButton";
import { useState } from "react";
import InputImage from "./reusable/InputImage";
function SignUp() {
  const [imageModal, setImageModal] = useState(false);
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div
      className="container "
      style={{
        backgroundImage: `url(${LoginImage})`,
        // width:screen.availWidth,
        position: "fixed",
        // height:window.innerHeight,
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      {!imageModal ? (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 pt-5">
            <div className="row text-center ">
              <h1 className="text-info">Sign Up</h1>
            </div>
            <div className="row">
              <TextInput
                type="text"
                label="First Name"
                placeholder="Enter First Name"
                onChange={handleInputChange}
                required={true}
              />
              <TextInput
                type="text"
                label="Last Name"
                placeholder="Enter Last Name"
                onChange={handleInputChange}
              />
              <TextInput
                type="text"
                label="Email Address"
                placeholder="Enter Email Address"
                onChange={handleInputChange}
                required={true}
              />
              <TextInput
                type="text"
                label="Password"
                placeholder="Enter Password"
                onChange={handleInputChange}
                required={true}
              />
            </div>
            <div className="row text-center">
              <InputButton
                title="Sign Up"
                color="btn btn-outline-info btn-lg"
              />
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      ) : (
        <InputImage heading="Upload User Image" />
      )}
    </div>
  );
}
export default SignUp;
