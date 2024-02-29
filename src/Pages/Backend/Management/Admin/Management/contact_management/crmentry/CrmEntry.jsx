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
    const { fetch_all_data, fetch_all_user, set_search_key } = setup.actions;
    const [date1, setDate1] = useState()

    useEffect(() => {
        // fetch_all_data();
        fetch_all_user();
    }, [])
    useEffect(() => {
        setDate1(moment().format('YYYY-MM-D'))
    }, [])
    console.log("data stroe from", data_store);
    console.log("data stroe from", data_store?.crm_user?.users);
    // let date = moment().format('YYYY-MM-D');
    let fullName = data_store?.crm_entry_data?.newUser?.full_name
    let group = data_store?.crm_entry_data?.items
    let reason = data_store?.crm_entry_data?.reasons
    let variant = data_store?.crm_entry_data?.variants
    let variant_value = data_store?.crm_entry_data?.variant_values
    let user = data_store?.crm_user?.users
    console.log('group', group);
    console.log('reason', reason);
    console.log('variant', variant);
    console.log('variant value', variant_value);
    console.log('users', user);
    if (data_store && data_store.crm_entry_data) {
        return (
            <>
                <div className='mt-5'>
                    <div className="card list_card">
                        <div className="card-body p-3">
                            <form className='form-group'>
                                <div className="custom_form_el">
                                    <label htmlFor="">Date</label>
                                    <div>:</div>
                                    <div><input name="lead_status" type="date" className="form-control" defaultValue={date1} /></div>
                                </div>
                                {/* {
                                data_store?.crm_entry_data?.newUser && data_store?.crm_entry_data?.newUser.map(item => {
                                 return  <div className="custom_form_el">
                                <label htmlFor=""> Full Name</label>
                                <div>:</div>
                                <div><input name="lead_status" type="text" className="form-control" value={item.full_name} /></div>
                            </div>
                             })
                            } */}
                                <div className="custom_form_el">
                                    <label htmlFor=""> Full Name</label>
                                    <div>:</div>
                                    <div><input name="lead_status" type="text" className="form-control" value={fullName} /></div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor=""> Phone Number</label>
                                    <div>:</div>
                                    <div><input
                                        onChange={(e) => { set_search_key(e.target.value); fetch_all_data(); }}
                                        type="text"
                                        className="form-control border"
                                        placeholder="Search..."
                                    ></input></div>
                                </div>

                                <div className="custom_form_el">
                                    <label htmlFor=""> Feedback</label>
                                    <div>:</div>
                                    <div>
                                        <textarea name="lead_status" type="text" className="form-control" defaultValue={data_store?.crm_entry_data?.newFeedback?.notes}></textarea>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">Contact type</label>
                                    <div>:</div>
                                    <div>
                                        <select defaultValue={data_store?.crm_entry_data?.Contact_history?.contact_type} name="" id="">
                                            <option value="">email</option>
                                            <option value="">by phone</option>
                                            <option value="">whatsup</option>
                                            <option value="">office</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">Group na thakle create hobe</label>
                                    <div>:</div>
                                    <div>
                                        <select name="" id="">
                                            {/* {
                                                group.map(item => {
                                                    return <option value="">{item.title}</option>
                                                })
                                            } */}
                                        </select>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">reason na thakle create hobe</label>
                                    <div>:</div>
                                    <div>
                                        <select name="" id="">
                                            {/* {
                                                reason.map(item => {
                                                    return <option value="">{item.title}</option>
                                                })
                                            } */}
                                        </select>
                                    </div>
                                </div>

                                <hr />
                                <h2>varieants</h2>
                                {/* {
                                    variant.map(item => {
                                        return <div className="custom_form_el">
                                            <label htmlFor="">{item.title}</label>
                                            <div>:</div>
                                            <div>
                                                <select name="" id="">
                                                    {
                                                variant_value.map(item => {
                                                    return <option value="">{item.title}</option>
                                                })
                                            }
                                                </select>
                                            </div>
                                        </div>
                                    })
                                } */}
                                {/* <div className="custom_form_el">
                                    <label htmlFor="">variant 2</label>
                                    <div>:</div>
                                    <div>
                                        <select name="" id="">
                                            <option value="">variant 2 vlaue 1</option>
                                            <option value="">variant 2 vlaue 2</option>
                                            <option value="">variant 2 vlaue 3</option>
                                        </select>
                                    </div>
                                </div> */}
                                <hr />

                                <hr />
                                <h2>event</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">Event Details</label>
                                    <div>:</div>
                                    <div>
                                        <input type="text" placeholder="event_date" />
                                        <input type="text" placeholder="event_type" />
                                        <input type="text" placeholder="event_descrption" />
                                        <input type="text" placeholder="meet_link" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>appointment</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">appointment Details</label>
                                    <div>:</div>
                                    <div>
                                        <input type="text" placeholder="aapointment_date" />
                                        <input type="text" placeholder="contact_type" />
                                        <input type="text" placeholder="notes" />
                                    </div>
                                    <label htmlFor="">appointment reason na thakle create hobe</label>
                                    <div>:</div>
                                    <div>
                                        <select name="" id="">
                                        {/* {
                                                reason.map(item => {
                                                    return <option value="">{item.title}</option>
                                                })
                                            } */}
                                        </select>
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>other contacts</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">customer contact numbers</label>
                                    <div>:</div>
                                    <div>
                                        <input type="text" placeholder="extra_number 1" />
                                        <input type="text" placeholder="extra number 2" />
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
                                        <input type="text" placeholder="lead_status" />
                                        <input type="text" placeholder="lead_source" />
                                        <input type="text" placeholder="qualification_note" />
                                        <input type="text" placeholder="follow_up_date" />
                                        <div className="custom_form_el">
                                            <label htmlFor="">assignto</label>
                                            <div>:</div>
                                            <select name="" id="">
                                            {
                                                user.map(item => {
                                                    return <option value="">{item.user_name}</option>
                                                })
                                            }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div>
                                    <div className='d-flex gap-2 '>
                                        <div>
                                            <button>Submit</button>
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