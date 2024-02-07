import React from 'react'

function Edit() {
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Edit</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/user" className="btn rounded-pill btn-outline-secondary">
            {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
            Back
          </a>
        </div>
      </div>
      <form id='form-data'>
        <div className="card-body">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group mb-5">
                  <div className="custom_form_el">
                    <label htmlFor="">Customer Number Id</label>
                    <div>:</div>
                    <div><input name="customer_number_id" type="text" className="form-control" defaultValue={"123"} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Customer Id</label>
                    <div>:</div>
                    <div><input name="customer_Id" type="text" className="form-control" defaultValue={"123"} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Data</label>
                    <div>:</div>
                    <div><input name="data" type="text" className="form-control" defaultValue={"username"} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Contact type</label>
                    <div>:</div>
                    <div><input name="contact_type" type="text" className="form-control" defaultValue={"email"} /></div>
                  </div> 
                  <div className="custom_form_el">
                    <label htmlFor="">Notes</label>
                    <div>:</div>
                    <div><input name="notes" type="text" className="form-control" defaultValue={"email"} /></div>
                  </div> 
                  <div className="custom_form_el">
                    <label htmlFor="">Creator</label>
                    <div>:</div>
                    <div><input name="Creator" type="text" className="form-control" defaultValue={"email"} /></div>
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
  )
}

export default Edit