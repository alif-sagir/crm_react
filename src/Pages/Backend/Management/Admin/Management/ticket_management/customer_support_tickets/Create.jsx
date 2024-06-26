import React, { useEffect } from 'react'
import setup from './Config/setup.js';
import { useDispatch, useSelector } from 'react-redux';
import dataStoreSlice, { async_actions } from './Config/store.js';


function Create() {
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])
  setup.set_async(async_actions, dataStoreSlice);
  const { store_data , fetch_all_customer, fetch_all_user} = setup.actions;

  useEffect(() => {
    fetch_all_customer();
    fetch_all_user();
  }, [])

  console.log('datra store from edit', data_store);
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
          <a href="#/dashboard/customer-support-ticket" className="btn rounded-pill btn-outline-secondary">
            {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
            Back
          </a>
        </div>
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="card-body">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group mb-5">

                  
                <div className="custom_form_el">
                      <label htmlFor="">Select customer</label>
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
                      <label htmlFor="">Subject</label>
                      <div>:</div>
                      <div><input name="subject" type="text" className="form-control"  /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Description</label>
                      <div>:</div>
                      <div><input name="description" type="text" className="form-control" /></div>
                    </div>

                    <div className="custom_form_el">
                      <label htmlFor="">Priority</label>
                      <div>:</div>
                      <div>
                        <select defaultValue={data_store?.priority} name="priority" id="">
                          <option value="high">high</option>
                          <option value="medium">medium</option>
                          <option value="low">low</option>
                          <option value="emergency">emergency</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="custom_form_el">
                      <label htmlFor="">Assigned to</label>
                      <div>:</div>
                      <div>
                        <select defaultValue={data_store?.singleData?.customer_id} name="assigned_to" id="">
                          {
                            data_store?.user?.length && data_store?.user?.map(item => {
                              return <option key={item.id} value={item.id}>{item.user_name}</option>
                            })
                          }
                        </select>
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