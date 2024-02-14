import React from 'react'

function Create() {
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/dashboard/contact-appointment-reason" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Contact reason id</label>
                    <div>:</div>
                    <div><input name="contact_reason_id" type="text" className="form-control" /></div>
                  </div>
                  
                  <div className="custom_form_el">
                    <label htmlFor="">Contact appointement id</label>
                    <div>:</div>
                    <div><input name="contact_appointement_id" type="text" className="form-control" /></div>
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