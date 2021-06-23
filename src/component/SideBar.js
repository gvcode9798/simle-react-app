import homeLogo from "../assets/images/home_logo.png";
import chatLogo from "../assets/images/chat_logo.png";
import productLogo from "../assets/images/product_logo.png";
import logOutLogo from "../assets/images/log_out.png";
import paymentLogo from "../assets/images/payment_logo.png";
const SideBar = () => {
  const logoStyle = {
    height: "35px",
    width: "30px",
    border: "1px solid red",
    borderRadius: "10px",
  };
  return (
    <div className=" row" style={{}}>
      <div className="col-sm-12 p-2">
        <div className="row">
          <div className="col-3 text-end">
            <img src={homeLogo} style={logoStyle} />
          </div>
          <div className="col-5 text-start">
            <h5>Home</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-12 p-2">
        <div className="row">
          <div className="col-3 text-end">
            <img src={productLogo} style={logoStyle} />
          </div>
          <div className="col-5 text-start">
            <h5>Product</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-12 p-2">
        <div className="row">
          <div className="col-3 text-end">
            <img src={chatLogo} style={logoStyle} />
          </div>
          <div className="col-5 text-start">
            <h5>Chat</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-12 p-2">
        <div className="row">
          <div className="col-3 text-end">
            <img src={paymentLogo} style={logoStyle} />
          </div>
          <div className="col-5 text-start">
            <h5>Payment</h5>
          </div>
        </div>
      </div>
      <div className="col-sm-12 p-2">
        <div className="row">
          <div className="col-3 text-end">
            <img src={logOutLogo} style={logoStyle} />
          </div>
          <div className="col-5 text-start">
            <h5>Log-out</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
