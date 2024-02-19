import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dataStoreSlice, { async_actions } from './Config/dstore.js';
import setup from './Config/dsetup.js';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix]["singleData"])
    setup.set_async(async_actions, dataStoreSlice);
    const { get_users, set_data } = setup.actions;
    // console.log(id);
    useEffect(() => {
        get_users(id);

        return () => {
            set_data(null)
        };
    }, []);

    console.log(data_store, id);
    return (
        <div className='card list_card'>
            <div className="card-header ">
                <h2 className='heading'>Details</h2>
                <div className="btns d-flex gap-2 align-items-center">
                    <a href="#dashboard/calender-event" className="btn rounded-pill btn-outline-secondary">
                        {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
                        Back
                    </a>
                    {/* {JSON.stringify(data_store)} */}
                </div>
            </div>
            <div className="card-body">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* [
                                "ID",
                                "Title",
                                "Serial",
                                "Status",
                                "CreatedAt",
                                "UpdatedAt",
                                "last ID",
                            ] */}
                            <div className="form-group mb-3">

                                <div className="custom_form_el">
                                    <div>Customer Id</div>
                                    <div>:</div>
                                    <div>
                                        {"customer_id"}
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <div>event date</div>
                                    <div>:</div>
                                    <div>
                                        {"event_data"}
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <div>Event type</div>
                                    <div>:</div>
                                    <div>
                                        {"event_type"}
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <div>Event description</div>
                                    <div>:</div>
                                    <div>
                                        {"event_description"}
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <div>Creator</div>
                                    <div>:</div>
                                    <div>
                                        {"creator"}
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <div>Is complete</div>
                                    <div>:</div>
                                    <div>
                                        {"is_complete"}
                                    </div>
                                </div>
                                <div className="custom_form_el">
                                    <div>Meet link</div>
                                    <div>:</div>
                                    <div>
                                        {"meet_link"}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">

            </div>
        </div>
    )
}

export default Details