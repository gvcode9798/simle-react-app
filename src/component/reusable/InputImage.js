import { useState } from "react";
import userImage from "../../assets/images/user.png";
import InputButton from "./InputButton";
import TextInput from "./TextInput";
function InputImage({ heading }) {
  const [selectImage, setSelectImage] = useState("Select Image");
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setSelectImage("Image Selected");
  };
  return (
    <div className="row ">
      <div className="col-sm-3"></div>
      <div className="col-sm-6 pt-5">
        <div className="row text-center db.flex justify-content-center mb-2">
          <h1 className="text-info">{heading}</h1>
          <img src={userImage} style={{ height: "150px", width: "200px" }} />
        </div>
        <div className="row ">
          <TextInput
            type="file"
            accept=".png, .jpg, .jpeg"
            label={selectImage}
            placeholder="Upload Image"
            required={true}
            onChange={handleFileChange}
          />
        </div>
        <div className="row text-center">
          <InputButton title="Upload" color="btn btn-outline-info btn-lg" />
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
}
export default InputImage;
