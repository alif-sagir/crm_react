import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import dataStoreSlice, { async_actions } from './Config/store.js';
import setup from "./Config/setup.js";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix]["singleData"])
  setup.set_async(async_actions, dataStoreSlice);
  const { get_users, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_users(id);

    return () => {
      document.getElementById('form-data')?.reset();
      set_data(null)
    };
  }, []);
  console.log('id from edit', id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let form_data = new FormData(event.target);
    // form_data.append('id', id);
    // form_data.append('role', id);
    console.log('form data', form_data);
    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };
  console.log('datra store from edit', data_store);
  if (data_store) {
    const { contact_number_id, customer_id, date, contact_type, note, id, creator  } = data_store;
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Edit</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/dashboard/contact-history" className="btn rounded-pill btn-outline-secondary">
            {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
            Back
          </a>
        </div>
      </div>
      <form onSubmit={(event) =>handleSubmit(event)} id='form-data'>
        <div className="card-body">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group mb-5">
                  <div className="custom_form_el">
                    <label htmlFor="">Id</label>
                    <div>:</div>
                    <div><input name="id" type="text" className="form-control" defaultValue={id} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Contact Number Id</label>
                    <div>:</div>
                    <div><input name="contact_number_id" type="text" className="form-control" defaultValue={contact_number_id} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Customer Id</label>
                    <div>:</div>
                    <div><input name="customer_Id" type="text" className="form-control" defaultValue={customer_id} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Date</label>
                    <div>:</div>
                    <div><input name="date" type="date" className="form-control" defaultValue={date} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Contact type</label>
                    <div>:</div>
                    <div><input name="contact_type" type="text" className="form-control" defaultValue={contact_type} /></div>
                  </div> 
                  <div className="custom_form_el">
                    <label htmlFor="">Note</label>
                    <div>:</div>
                    <div><input name="note" type="text" className="form-control" defaultValue={note} /></div>
                  </div> 
                  <div className="custom_form_el">
                    <label htmlFor="">Creator</label>
                    <div>:</div>
                    <div><input name="creator" type="text" className="form-control" defaultValue={creator} /></div>
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
}
export default Edit