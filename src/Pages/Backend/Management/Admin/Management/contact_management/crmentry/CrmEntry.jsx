import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import TableAction from './Components/all_data_components/TableAction';
import setup from './Config/setup';
import { useEffect, useState } from 'react';
import dataStoreSlice, { async_actions } from './Config/store.js';
import moment from 'moment/moment.js';
import MultiselectDropdown from './components/Multiselect_dropdown.jsx';
import { useLocation } from 'react-router-dom';

// Debounce function
const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
};

function CrmEntry() {
    const data_store = useSelector((state) => state[setup.prefix]);
    setup.dispatch = useDispatch();
    setup.set_async(async_actions, dataStoreSlice);
    const { fetch_all_data, fetch_all_user, set_search_key, store_data } = setup.actions;
    const [date1, setDate1] = useState();
    const [selectedData, setselectedData] = useState([]);
    const [selectedReason, setselectedReason] = useState([]);
    const [paramSearchNumber, setParamSearchNumber] = useState("");
    const [formatted_date, set_formatted_date] = useState('');
    const [customer_number, set_customer_number] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        fetch_all_user();
        setDate1(moment().format('YYYY-MM-DD'))
        setParamSearchNumber(queryParams.get('num'));
    }, [])

    useEffect(() => {
        const search_data_by_param_number = debounce((value) => {
            set_search_key(value);
            fetch_all_data();
        }, 500);
        search_data_by_param_number(paramSearchNumber);
        set_customer_number(paramSearchNumber);
    }, [paramSearchNumber])

    useEffect(() => {
        let next_contact_date = data_store?.crm_entry_data?.contact_history?.next_contact_date;
        set_formatted_date(moment(next_contact_date).format('YYYY-MM-DD'));
    }, [data_store])

    const handleSubmit = async (event) => {
        event.preventDefault();
        let form_data = new FormData(event.target);
        selectedData.forEach((e, index) => {
            form_data.append(`customer_group_customer[]`, e.id);
        });
        selectedReason.forEach((e, index) => {
            form_data.append(`contact_reason[]`, e.id);
        });
        //   form_data.append(`crm_contact_number`, e.id);
        await store_data(form_data);
        // event.target.reset();
    };

    // Function to handle search
    const handleSearch = debounce((event) => {
        set_search_key(event.target.value);
        fetch_all_data();
    }, 500); // 300ms debounce delay


    if (data_store && data_store.crm_user.users) {
        let data = data_store?.crm_user?.items;
        let reason = data_store?.crm_user?.reasons;

        let fullName = data_store?.crm_entry_data?.newUser?.full_name
        let id = data_store?.crm_entry_data?.newUser?.id
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
                                    <label htmlFor="">Next contact date</label>
                                    <div>:</div>
                                    <div>
                                        <input onChange={(e) => set_formatted_date(e.target.value)} name="next_contact_date" type="date" className="form-control" Value={formatted_date} />
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">CRM contact numbers</label>
                                    <div>:</div>
                                    <div>
                                        <select name="crm_contact_number" id="">
                                            {
                                                data_store?.crm_user?.crm_contact_nums.map(item => {
                                                    return <option key={item.id} value={item.id}>{item.details}</option>
                                                })
                                            }
                                        </select>
                                        {/* <MultiselectDropdown data={reason} selectedData={selectedReason} setSelectedData={setselectedReason}></MultiselectDropdown> */}
                                    </div>
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
                                        onChange={(e)=>(handleSearch(e), set_customer_number(e.target.value))}
                                        value={customer_number}
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
                                    <label htmlFor="">Feedback Type</label>
                                    <div>:</div>
                                    <div>
                                        <select name="feedback_type" id="">
                                            <option value="agree">agree</option>
                                            <option value="disagree">disagree</option>
                                            <option value="well wisher">well wisher</option>
                                            <option value="runnig student">runnig student</option>
                                            <option value="old student">old student</option>
                                            <option value="wrong number">wrong number</option>
                                            <option value="contact later">contact later</option>
                                            <option value="next batch">next batch</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">Contact Notes</label>
                                    <div>:</div>
                                    <div>
                                        <textarea placeholder='Take some notes' name="contact_notes" type="text" className="form-control" ></textarea>
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
                                        <MultiselectDropdown data={data} selectedData={selectedData} setSelectedData={setselectedData}></MultiselectDropdown>
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">reason na thakle create hobe</label>
                                    <div>:</div>
                                    <div>
                                        {/* <select name="customer_reason" id="">
                                            {
                                                data_store?.crm_user?.reasons.map(item => {
                                                    return <option value={item.title}>{item.title}</option>
                                                })
                                            }
                                        </select> */}
                                        <MultiselectDropdown data={reason} selectedData={selectedReason} setSelectedData={setselectedReason}></MultiselectDropdown>
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
                                                            return <option key={item.id} value={item.variant_id}>{item.title}</option>
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
                                        <input className='m-3 p-1' name='calender_event_date' type="date" placeholder="event_date" defaultValue={date1} />
                                        <input className='m-3 p-1' name='calender_event_type' type="text" placeholder="event_type" />
                                        <input className='m-3 p-1' name='calender_event_description' type="text" placeholder="event_descrption" />
                                        <input className='m-3 p-1' name='calender_event_meet_link' type="text" placeholder="meet_link" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>appointment</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">appointment Details</label>
                                    <div>:</div>
                                    <div>
                                        <input className='m-3 p-1' name='appointment_date' type="date" placeholder="appointment_date" defaultValue={date1} />
                                        <input className='m-3 p-1' name='appointment_contact_type' type="text" placeholder="contact_type" />
                                        <input className='m-3 p-1' name='appointment_note' type="text" placeholder="notes" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>Other contacts</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">Customer contact numbers</label>
                                    <div>:</div>
                                    <div>
                                        <input className='m-3 p-1' name='customer_contact_number[]' type="text" placeholder="extra_number 1" />
                                        <input className='m-3 p-1' name='customer_contact_number[]' type="text" placeholder="extra number 2" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>document</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">related images</label>
                                    <div>:</div>
                                    <div>
                                        <input name='docu_1' className='m-3 p-1' type="file" accept="image/*,application/pdf" placeholder="image1" />
                                        <input name='docu_2' className='m-3 p-1' type="file" accept="image/*,application/pdf" placeholder="image2" />
                                        <input name='docu_3' className='m-3 p-1' type="file" accept="image/*,application/pdf" placeholder="document file 3" />
                                    </div>
                                </div>
                                <hr />

                                <hr />
                                <h2>lead</h2>
                                <div className="custom_form_el">
                                    <label htmlFor="">lead details</label>
                                    <div>:</div>
                                    <div>
                                        <input className='m-3 p-1' name='lead_status' type="text" placeholder="lead_status" />
                                        <input className='m-3 p-1' name='lead_source' type="text" placeholder="lead_source" />
                                        <input className='m-3 p-1' name='lead_qualification_note' type="text" placeholder="qualification_note" />
                                        <input className='m-3 p-1' name='follow_up_date' type="date" placeholder="follow_up_date" defaultValue={date1} />

                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <label htmlFor="">assignto</label>
                                    <div>:</div>
                                    <div>
                                        <select name="assigned_to" id="">
                                            {
                                                data_store.crm_user.users.map(item => {
                                                    return <option key={item.id} value={item.id}>{item.user_name}</option>
                                                })
                                            }

                                        </select>
                                    </div>
                                </div>
                                {/* <div className="custom_form_el">
                                    <label htmlFor="">Task title</label>
                                    <div>:</div>
                                    <div>
                                    <input name='task_title' className='m-3 p-1' type="text" placeholder="task title" />
                                    </div>
                                </div>
                                <hr /> */}

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