import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import dataStoreSlice, { async_actions } from './Config/store.js';
import setup from "./Config/setup.js";
import { useParams } from 'react-router-dom';
import moment from 'moment/moment.js';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])
  setup.set_async(async_actions, dataStoreSlice);
  const { get_users, set_data, update_data, fetch_all_customer } = setup.actions;

  useEffect(() => {
    get_users(id);
    fetch_all_customer();
    return () => {
      document.getElementById('form-data')?.reset();
      set_data(null)
    };
  }, []);
  console.log('id from edit', id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let form_data = new FormData(event.target);
    form_data.append('id', id);
    // form_data.append('role', id);
    console.log('form data', form_data);
    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };
  console.log('datra store from edit', data_store);
  if (data_store.singleData) {
    const { creator, customer_id, event_date, event_type, event_description, id, meet_link } = data_store.singleData;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/dashboard/calender-event" className="btn rounded-pill btn-outline-secondary">
              {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
              Back
            </a>
          </div>
        </div>
        <form onSubmit={(event) => handleSubmit(event)} id='form-data'>
          <div className="card-body">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-5">

                    <div className="custom_form_el">
                      <label htmlFor="">Customer Id</label>
                      <div>:</div>
                      <div>
                        <select defaultValue={data_store?.singleData?.customer_id} name="customer_id" id="">
                          {
                            data_store?.customer?.length && data_store?.customer?.map(item => {
                              return <option key={item.id} value={item.id}>{item.full_name}</option>
                            })
                          }
                        </select>
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">event date</label>
                      <div>:</div>
                      <div><input name="event_date" type="date" className="form-control" defaultValue={moment(event_date).format('YYYY-MM-DD')} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Event type</label>
                      <div>:</div>
                      <div><input name="event_type" type="text" className="form-control" defaultValue={event_type} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Event description</label>
                      <div>:</div>
                      <div><input name="event_description" type="text" className="form-control" defaultValue={event_description} /></div>
                    </div>

                    <div className="custom_form_el">
                      <label htmlFor="">Meet link</label>
                      <div>:</div>
                      <div><input name="meet_link" type="text" className="form-control" defaultValue={meet_link} /></div>
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