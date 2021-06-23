import TextInput from "./reusable/TextInput";
import LoginImage from "../assets/images/LoginImage.jpg";
import InputButton from "./reusable/InputButton";
const Login = () => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div
      className="container db.flex justify-content-center
                         align-items-center text-center"
      style={{
        backgroundImage: `url(${LoginImage})`,
        // width:screen.availWidth,
        position: "fixed",
        // height:window.innerHeight,
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      <div className="row ">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 pt-5">
          <div className="container  ">
            <div className="row text-center">
              <h1 className="text-info">User Login</h1>
            </div>
            <div className="row mt-2 db.flex justify-content-center">
              <TextInput
                label="Email Address"
                placeholder="Enter email Address"
                type="text"
                onChange={handleInputChange}
                requied={true}
              />
            </div>
            <div className="row mt-2">
              <TextInput
                label="Password"
                placeholder="Enter Password"
                type="text"
                onChange={handleInputChange}
                requied={true}
              />
            </div>
            <InputButton
              title="Login"
              color="btn btn-outline-warning btn-lg "
            />
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Login;
