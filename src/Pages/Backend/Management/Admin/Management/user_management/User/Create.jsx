import React from 'react'

function Create() {
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/dashboard/user" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Username</label>
                    <div>:</div>
                    <div><input name="username" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Password</label>
                    <div>:</div>
                    <div><input name="password" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Confarm Password</label>
                    <div>:</div>
                    <div><input name="conparm_password" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Email</label>
                    <div>:</div>
                    <div><input name="email" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Role</label>
                    <div>:</div>
                    <div>
                     <div id="role">
                     {/* <MultiselectDropdown data={role_data_store.all_data} selectedData={selectedRole} setSelectedData={setselectedRole} taskOpen={tasklist} setTaskOpen={setTasklist}></MultiselectDropdown> */}
                     </div>
                    </div>
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