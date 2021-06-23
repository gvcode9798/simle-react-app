import appLogo from "../assets/images/app_logo.jpg";
import userLofo from "../assets/images/user.png";
const Header = () => {
  return (
    <div className="row db.flex justify-content-center" style={{}}>
      <div className="col-sm-11  bg-gradient mt-3 ms-2 rounded-3">
        <div className="row">
          <div className="col-sm-4 p-2">
            <img
              src={appLogo}
              style={{
                height: "40px",
                width: "70px",
                borderRadius: "30px",
              }}
            />
          </div>
          <div className="col-sm-4">
            <h2 className="text-info">Mosh Hamedani</h2>
          </div>
          <div className="col-sm-4 text-end">
            <div className="row db.flex align-items-center">
              <div className="col-sm-6 text-info text-end">
                <h5>Cart</h5>
              </div>
              <div className="col-sm-6">
                <img
                  src={userLofo}
                  style={{
                    height: "40px",
                    width: "70px",
                    borderRadius: "30px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
