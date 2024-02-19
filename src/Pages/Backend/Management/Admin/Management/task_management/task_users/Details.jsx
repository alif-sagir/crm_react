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
                    <a href="#/dashboard/task-user" className="btn rounded-pill btn-outline-secondary">
                        {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
                        Back
                    </a>
                    {/* {JSON.stringify(data_store)} */}
                </div>
            </div>
            <div className="card-body">
                <div className="container py-5">
                    <div className="">
                        <div className="col-lg-12">
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

                                {/* <div className="custom_form_el">
                                <div>Task Id</div>
                                <div>:</div>
                                <div>
                                    {"Task Id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>User Id</div>
                                <div>:</div>
                                <div>
                                    {"User_id"}
                                </div>
                            </div>
                            <div className="custom_form_el">
                                <div>Is complete</div>
                                <div>:</div>
                                <div>
                                    {"Is complete"}
                                </div>
                            </div> */}

                                <div className='tag-list_and_task-list_area'>
                                    <div className='tag_list'>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    trg1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg5
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    trg6
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='task-list'>
                                        <ul>
                                            <li className='input_and_label'>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label for="">plan</label>
                                            </li>
                                            <li>
                                                <span>9-24.Jan.2024</span>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">low</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">He</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <img src="/assets/customize_img/img.png" alt="img" />
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className='input_and_label'>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label for="">Media plan</label>
                                            </li>
                                            <li>
                                                <span>9-24.Jan.2024</span>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <img src="/assets/customize_img/img.png" alt="img" />
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className='input_and_label'>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label for="">Media media plan</label>
                                            </li>
                                            <li>
                                                <span>9-24.Jan.2024</span>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    
                                                </ul>
                                            </li>
                                            <li>
                                                <img src="/assets/customize_img/img.png" alt="img" />
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className='input_and_label'>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label for="">Media plan</label>
                                            </li>
                                            <li>
                                                <span>9-24.Jan.2024</span>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hellow</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <img src="/assets/customize_img/img.png" alt="img" />
                                            </li>
                                        </ul>
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