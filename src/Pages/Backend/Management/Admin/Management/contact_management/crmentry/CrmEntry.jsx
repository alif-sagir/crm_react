import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import TableAction from './Components/all_data_components/TableAction';
import setup from './Config/setup';
import { useEffect, useState } from 'react';
import dataStoreSlice, { async_actions } from './Config/store.js';
import moment from 'moment/moment.js';

function CrmEntry() {
    const data_store = useSelector((state) => state[setup.prefix]);
    setup.dispatch = useDispatch();
    setup.set_async(async_actions, dataStoreSlice);
    const { fetch_all_data, fetch_all_user, set_search_key, store_data } = setup.actions;
    const [date1, setDate1] = useState()

    useEffect(() => {
        fetch_all_user();
    }, [])
    useEffect(() => {
        setDate1(moment().format('YYYY-MM-DD'))
    }, [])
    console.log("data stroe from", data_store);
    console.log("data stroe from", data_store?.crm_user?.users);
    // let date = moment().format('YYYY-MM-D');
    let fullName = data_store?.crm_entry_data?.newUser?.full_name
    let id = data_store?.crm_entry_data?.newUser?.id
    let group = data_store?.crm_user?.items
    let reason = data_store?.crm_user?.reasons
    let variant = data_store?.crm_user?.variants
    let variant_value = data_store?.crm_user?.variant_values
    let user = data_store?.crm_user?.users
    console.log('group', group);
    console.log('reason', reason);
    console.log('variant', variant);
    console.log('variant value', variant_value);
    console.log('users', user);
    console.log('date', date1);
    const handleSubmit = async (event) => {
        event.preventDefault();
        let form_data = new FormData(event.target);
        await store_data(form_data);
        // event.target.reset();
    };

    // Debounce function
    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // Function to handle search
    const handleSearch = debounce((event) => {
        set_search_key(event.target.value);
        fetch_all_data();
    }, 500); // 300ms debounce delay


    if (data_store && data_store.crm_user.users) {
        return (
            <>
                <div className='mt-5'>
                    <div className="card list_card">
                        <div className="card-body p-3">
                            <form onSubmit={(event) => handleSubmit(event)} className='form-group'>
                                <div className="custom_form_el">
                                    <label htmlFor="">Date</label>
                                    <div>:</div>
                                    <div><input name="date" type="date" className="form-control" defaultValue={date1} /></div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor=""> Full Name</label>
                                    <div>:</div>
                                    <div><input name="full_name" type="text" className="form-control" value={fullName} /></div>
                                </div>
                                <div hidden className="custom_form_el">
                                    <label htmlFor="">Id</label>
                                    <div>:</div>
                                    <div><input name="id" type="text" className="form-control" value={id} /></div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor=""> Phone Number</label>
                                    <div>:</div>
                                    {/*  <div><input name='contact_number'
                                        onChange={(e) => { set_search_key(e.target.value); fetch_all_data(); }}
                                        type="text"
                                        className="form-control border"
                                        placeholder="Search..."
                                    ></input></div> */}
                                    <div><input name='contact_number'
                                        onChange={handleSearch}
                                        type="text"
                                        className="form-control border"
                                        placeholder="Search..."
                                    ></input></div>
                                </div>

                                <div className="custom_form_el">
                                    <label htmlFor=""> Feedback</label>
                                    <div>:</div>
                                    <div>
                                        <textarea name="feedback" type="text" className="form-control" defaultValue={data_store?.crm_entry_data?.newFeedback?.notes}></textarea>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">Contact type</label>
                                    <div>:</div>
                                    <div>
                                        <select defaultValue={data_store?.crm_entry_data?.Contact_history?.contact_type} name="contact_type" id="">
                                            <option value="by phone">by phone</option>
                                            <option value="email">email</option>
                                            <option value="whatsup">whatsup</option>
                                            <option value="office">office</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">Group na thakle create hobe</label>
                                    <div>:</div>
                                    <div>
                                        <select name="customer_group" id="">
                                            {
                                                data_store?.crm_user?.items.map(item => {
                                                    return <option value={item.title}>{item.title}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">reason na thakle create hobe</label>
                                    <div>:</div>
                                    <div>
                                        <select name="customer_reason" id="">
                                            {
                                                data_store?.crm_user?.reasons.map(item => {
                                                    return <option value={item.title}>{item.title}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <hr />
                                <h2>variants</h2>
                                {
                                    data_store?.crm_user?.variants.map(item => {
                                        return <div className="custom_form_el">
                                            <label htmlFor="">{item.title}</label>
                                            <div>:</div>
                                            <div>
                                                <select name={`customer_variants[${item.title}_${item.id}]`} id="">
                                                    {
                                                        data_store?.crm_user?.variant_values.map(item => {
                                                            return <option value={item.variant_id}>{item.title}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    })
                                }
                                <hr />

                                <hr />
                                <h2>event</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">Event Details</label>
                                    <div>:</div>
                                    <div>
                                        <input name='customer_event_date' type="date" placeholder="event_date" defaultValue={date1} />
                                        <input name='customer_event_type' type="text" placeholder="event_type" />
                                        <input name='customer_event_description' type="text" placeholder="event_descrption" />
                                        <input name='customer_event_meet_link' type="text" placeholder="meet_link" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>appointment</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">appointment Details</label>
                                    <div>:</div>
                                    <div>
                                        <input name='appointment_date' type="date" placeholder="appointment_date" defaultValue={date1} />
                                        <input name='appointment_contact_type' type="text" placeholder="contact_type" />
                                        <input name='appointment_note' type="text" placeholder="notes" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>Other contacts</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">Customer contact numbers</label>
                                    <div>:</div>
                                    <div>
                                        <input name='customer_contact_number[]' type="text" placeholder="extra_number 1" />
                                        <input name='customer_contact_number[]' type="text" placeholder="extra number 2" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>document</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">related images</label>
                                    <div>:</div>
                                    <div>
                                        <input type="text" placeholder="doc 1" />
                                        <input type="text" placeholder="doc 2" />
                                        <input type="text" placeholder="imag3 3" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>lead</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">lead details</label>
                                    <div>:</div>
                                    <div>
                                        <input name='lead_status' type="text" placeholder="lead_status" />
                                        <input name='lead_source' type="text" placeholder="lead_source" />
                                        <input name='lead_qualification_note' type="text" placeholder="qualification_note" />
                                        <input name='follow_up_date' type="date" placeholder="follow_up_date" defaultValue={date1} />

                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">assignto</label>
                                    <div>:</div>
                                    <select name="assigned_to" id="">
                                        {
                                            data_store.crm_user.users.map(item => {
                                                return <option value={item.id}>{item.user_name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <hr />

                                <div>
                                    <div className='d-flex gap-2 '>
                                        <div>
                                            <button type='submit'>Submit</button>
                                        </div>
                                        <div>
                                            <button>Reset</button>
                                        </div>
                                        <div>
                                            <button>Last Number</button>
                                            {/* <button>Last Number</button> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default CrmEntry