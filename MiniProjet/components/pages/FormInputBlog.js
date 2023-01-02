// import onlyNumberKey from "./onlyNumberKey";

function FormInputBlog({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row">
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.fullName}
          name="fullName"
          className="form-control"
          placeholder="e.g.Drawing"
          autocomplete="off"
        />
      </div>
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.emailAddress}
          name="emailAddress"
          className="form-control"
          placeholder="It's a description!"
          autocomplete="off"
        />
      </div>
      <div className="col">
        <input
          // onClick={onlyNumberKey} Didn't work!
          type="text"
          onChange={handleChange}
          value={formInputData.salary}
          name="salary"
          className="form-control"
          id="date_picker"
          placeholder="dd/mm/yyyy"
          autocomplete="off"
        />
        {/* <onlyNumberKey /> */}
      </div>
      <div className="btn-submit">
        <input
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}

export default FormInputBlog;
