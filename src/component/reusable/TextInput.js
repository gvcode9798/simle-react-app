const TextInput = ({ label, ...otherprops }) => {
  return (
    <div className="container">
      <div className="row mb-3 d-flex justify-content-center ">
        <div className="col-sm-2">
          <label className="form-lable">{label}</label>
        </div>
        <div className="col-sm-10 mb-2">
          <input className="form-control secondary" {...otherprops} />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
