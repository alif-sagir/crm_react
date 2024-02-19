import React from 'react'
import setup from './Config/dsetup.js';
import { useDispatch } from 'react-redux';
import dataStoreSlice, { async_actions } from './Config/dstore.js';

function Create() {

  setup.dispatch = useDispatch();
  setup.set_async(async_actions, dataStoreSlice);
  const { store_data } = setup.actions;

  // useEffect(() => {
  //   get_roles();
  // }, [])

  
  const handleSubmit = async (event) => {
    // let e = event;
    // console.log('some from create submit', event.target.vlaue);
    event.preventDefault();
    let form_data = new FormData(event.target);
    // selectedRole.forEach((e, index) => {
    //   form_data.append(`role`, e.serial);
    // });
    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await store_data(form_data);
    event.target.reset();
  };


  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/dashboard/user-info" className="btn rounded-pill btn-outline-secondary">
            {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
            Back
          </a>
        </div>
      </div>
      <form  onSubmit={(event) =>handleSubmit(event)}>
        <div className="card-body">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group mb-5">
                  <div className="custom_form_el">
                    <label htmlFor="">User Id</label>
                    <div>:</div>
                    <div><input name="user_id" type="number" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">First name</label>
                    <div>:</div>
                    <div><input name="first_name" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Last name</label>
                    <div>:</div>
                    <div><input name="last_name" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Phone Number</label>
                    <div>:</div>
                    <div><input name="phone_number" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Designation</label>
                    <div>:</div>
                    <div><input name="designation" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Date of bidth</label>
                    <div>:</div>
                    <div><input name="date_of_birth" type="date" className="form-control" /></div>
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