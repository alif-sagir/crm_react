import React from 'react'

function Create() {
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/user-designation" className="btn rounded-pill btn-outline-secondary">
            {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
            Back
          </a>
        </div>
      </div>
              <form>
      <div className="card-body">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
                <div className="form-group mb-5">
                  <div className="custom_form_el">
                    <label htmlFor="">User Id</label>
                    <div>:</div>
                    <div><input name="user Id" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Designation</label>
                    <div>:</div>
                    <div><input name="designatio" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Description</label>
                    <div>:</div>
                    <div><input name="description" type="text" className="form-control" /></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
      <button className="btn btn-outline-info" type="submit" value="Create">
            Submit{" "}
          </button>
      </div>
              </form>
    </div>
  );
}

export default Create