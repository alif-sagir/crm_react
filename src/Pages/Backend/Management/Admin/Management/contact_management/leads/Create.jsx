import React from 'react'

function Create() {
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/contact-leads" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Customer Id</label>
                    <div>:</div>
                    <div><input name="customer_id" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor=""> Lead status</label>
                    <div>:</div>
                    <div><input name="lead_status" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Lead source</label>
                    <div>:</div>
                    <div><input name="lead_source" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Assigned to</label>
                    <div>:</div>
                    <div><input name="assigned_to" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Qualification notes</label>
                    <div>:</div>
                    <div><input name="qualification_notes" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Follow up date</label>
                    <div>:</div>
                    <div><input name="follow_up_date" type="text" className="form-control" /></div>
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